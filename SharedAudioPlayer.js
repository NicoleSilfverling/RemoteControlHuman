import { createContext, useEffect } from "react";
import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";

export class SharedAudioPlayer {
  constructor() {
    this.listeners = [];
    this.backgroundLoop = undefined;
    this.playingSounds = 0;
    this.start();
  }

  async start() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: InterruptionModeIOS.DoNotMix,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
      playThroughEarpieceAndroid: false,
    });

    const { sound } = await Audio.Sound.createAsync(
      require("./assets/sounds/music/robotbakgrundsloop.wav"),
      { isLooping: true }
    );

    this.backgroundLoop = sound;
  }

  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      const idx = this.listeners.indexOf(callback);
      if (idx !== -1) {
        this.listeners.splice(idx, 1);
      }
    };
  }

  notifyListeners(playing) {
    this.listeners.forEach((callback) => callback(playing));
  }

  async startBackgroundLoop() {
    this.backgroundLoop.playAsync();
  }

  async stopBackgroundLoop() {
    if (this.backgroundLoop) {
      this.backgroundLoop.stopAsync();
    }
  }

  async play(soundSelector) {

    return new Promise(async (resolve) => {
      const { sound } = await Audio.Sound.createAsync(soundSelector);

      sound.setOnPlaybackStatusUpdate((playbackStatus) => {
        if (playbackStatus.didJustFinish == true) {
          this.playingSounds--;
          this.notifyListeners(this.playingSounds > 0);
          resolve();
        }
      });

      sound.playAsync();
      this.playingSounds++;
      this.notifyListeners(this.playingSounds > 0);
    });
  }
}

export const globalAudioPlayer = new SharedAudioPlayer();

export const AudioPlayerContext = createContext();

export function useAudioPlayerIsPlayingEffect(callback) {
  useEffect(() => {
    const removeSubscription = globalAudioPlayer.subscribe((playing) => {
      callback(playing);
    });

    return () => {
      removeSubscription();
    };
  }, []);
}
