function ContentSelector(btnId, bodyHalfLeft, isHand) {
  let title = "";
  let iconImg = "";
  let bodypartImg = "";
  let sound = "";

  switch (btnId) {
    case "L1":
      title = "LEFT";
      iconImg = require("../assets/icons/leftIcon.png");
      sound = require("../assets/sounds/commands/left.wav");

      break;
    case "L2":
      title = "HAND/GRIP";
      iconImg = require("../assets/icons/handIcon.png");
      sound = require("../assets/sounds/commands/hand.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/hand_l.png");
      else bodypartImg = require("../assets/images/hand_r.png");

      break;
    case "L3":
      title = "ARM";
      iconImg = require("../assets/icons/armIcon.png");
      sound = require("../assets/sounds/commands/arm.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/arm_l.png");
      else bodypartImg = require("../assets/images/arm_r.png");

      break;
    case "L4":
      title = "TORSO";
      iconImg = require("../assets/icons/torsoIcon.png");
      sound = require("../assets/sounds/commands/torso.wav");
      bodypartImg = require("../assets/images/torso.png");
      break;
    case "L5":
      title = "THUMB";
      iconImg = require("../assets/icons/thumbIcon.png");
      sound = require("../assets/sounds/commands/thumb.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/thumb_l.png");
      else bodypartImg = require("../assets/images/thumb_r.png");

      break;
    case "L6":
      title = "LEG";
      iconImg = require("../assets/icons/legIcon.png");
      sound = require("../assets/sounds/commands/leg.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/leg_l.png");
      else bodypartImg = require("../assets/images/leg_r.png");

      break;
    case "L7":
      title = "RIGHT";
      iconImg = require("../assets/icons/rightIcon.png");
      sound = require("../assets/sounds/commands/right.wav");

      break;
    case "L8":
      title = "INDEX";
      iconImg = require("../assets/icons/indexIcon.png");
      sound = require("../assets/sounds/commands/index.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/index_l.png");
      else bodypartImg = require("../assets/images/index_r.png");

      break;
    case "L9":
      title = "FOOT";
      iconImg = require("../assets/icons/footIcon.png");
      sound = require("../assets/sounds/commands/foot.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/foot_l.png");
      else bodypartImg = require("../assets/images/foot_r.png");
      break;
    case "R1":
      title = "MOVE";
      iconImg = require("../assets/icons/moveIcon.png");
      sound = require("../assets/sounds/commands/move.wav");

      break;
    case "R2":
      if (isHand) {
        title = "CLOSE GRIP";
        sound = require("../assets/sounds/commands/closegrip.wav");
      } else {
        title = "BEND";
        sound = require("../assets/sounds/commands/bend.wav");
      }
      iconImg = require("../assets/icons/bendIcon.png");
      break;
    case "R3":
      if (isHand) {
        title = "OPEN GRIP";
        sound = require("../assets/sounds/commands/open_grip.wav");
      } else {
        title = "STRETCH";
        sound = require("../assets/sounds/commands/stretch.wav");
      }
      iconImg = require("../assets/icons/stretchIcon.png");

      break;
    case "R4":
      title = "TWIST";
      iconImg = require("../assets/icons/twistIcon.png");
      sound = require("../assets/sounds/commands/twist.wav");

      break;
    case "R5":
      title = "UP";
      iconImg = require("../assets/icons/upIcon.png");
      sound = require("../assets/sounds/commands/up.wav");
      break;
    case "R6":
      title = "DOWN";
      iconImg = require("../assets/icons/downIcon.png");
      sound = require("../assets/sounds/commands/down.wav");
      break;
    case "R7":
      title = "LEFT";
      iconImg = require("../assets/icons/leftIcon.png");
      sound = require("../assets/sounds/commands/left.wav");
      break;
    case "R8":
      title = "RESET";
      iconImg = require("../assets/icons/resetIcon.png");
      sound = require("../assets/sounds/commands/reset.wav");
      break;
    case "R9":
      title = "FORWARD";
      iconImg = require("../assets/icons/forwardIcon.png");
      sound = require("../assets/sounds/commands/forward.wav");
      break;
    case "R10":
      title = "BACKWARD";
      iconImg = require("../assets/icons/backwardIcon.png");
      sound = require("../assets/sounds/commands/backward.wav");
      break;
    case "R11":
      title = "RIGHT";
      iconImg = require("../assets/icons/rightIcon.png");
      sound = require("../assets/sounds/commands/right.wav");
      break;
    case "R12":
      title = "STOP";
      iconImg = require("../assets/icons/stopIcon.png");
      sound = require("../assets/sounds/commands/stop.wav");
      break;

    case "random":
      bodypartImg = require("../assets/images/bodyFilled.png");
      break;

    default:
      break;
  }
  return { title, iconImg, bodypartImg, sound }; // return image path, audio path
}
export default ContentSelector;
