import {Audio} from "expo-av"


export default async function backgroundLoop(){


const playbackObject = await Audio.Sound.createAsync(
  require('../assets/sounds/robotbakgrundsloop.wav'),
  { shouldPlay: true ,
  isLooping : true}
);

playbackObject.playAsync();
}