function ContentSelector(btnId, bodyHalfLeft) {
  let title = "";
  let iconImg = "";
  let bodypartImg = "";
  let sound = "";

  switch (btnId) {
    case "L1":
      title = "LEFT";
      iconImg = require("../assets/icons/leftArrowIcon.png");
      sound = require("../assets/sounds/left.wav");

      break;
    case "L2":
      title = "HAND";
      iconImg = require("../assets/icons/handIcon.png");
      sound = require("../assets/sounds/hand.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/hand_l.png");
      else bodypartImg = require("../assets/images/hand_r.png");

      break;
    case "L3":
      title = "ARM";
      iconImg = require("../assets/icons/armIcon.png");
      sound = require("../assets/sounds/arm.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/arm_l.png");
      else bodypartImg = require("../assets/images/arm_r.png");

      break;
    case "L4":
      title = "TORSO";
      iconImg = require("../assets/icons/torsoIcon.png");
      sound = require("../assets/sounds/torso.wav");
      bodypartImg = require("../assets/images/torso.png");
      break;
    case "L5":
      title = "THUMB";
      iconImg = require("../assets/icons/thumbIcon.png");
      sound = require("../assets/sounds/thumb.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/thumb_l.png");
      else bodypartImg = require("../assets/images/thumb_r.png");

      break;
    case "L6":
      title = "LEG";
      iconImg = require("../assets/icons/legIcon.png");
      sound = require("../assets/sounds/leg.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/leg_l.png");
      else bodypartImg = require("../assets/images/leg_r.png");

      break;
    case "L7":
      title = "RIGHT";
      iconImg = require("../assets/icons/rightArrowIcon.png");
      sound = require("../assets/sounds/right.wav");

      break;
    case "L8":
      title = "INDEX";
      iconImg = require("../assets/icons/indexIcon.png");
      sound = require("../assets/sounds/index.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/index_l.png");
      else bodypartImg = require("../assets/images/index_r.png");

      break;
    case "L9":
      title = "FOOT";
      iconImg = require("../assets/icons/footIcon.png");
      sound = require("../assets/sounds/foot.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/foot_l.png");
      else bodypartImg = require("../assets/images/foot_r.png");
      break;
    case "R1":
      title = "MOVE";
      iconImg = require("../assets/icons/moveIcon.png");
      sound = require("../assets/sounds/move.wav");

      break;
    case "R2":
      title = "BEND";
      iconImg = require("../assets/icons/bendIcon.png");
      sound = require("../assets/sounds/bend.wav");
      break;
    case "R3":
      title = "STRETCH";
      iconImg = require("../assets/icons/stretchIcon.png");
      sound = require("../assets/sounds/stretch.wav");

      break;
    case "R4":
      title = "TWIST";
      iconImg = require("../assets/icons/twistIcon.png");
      sound = require("../assets/sounds/twist.wav");

      break;
    case "R5":
      title = "UP";
      iconImg = require("../assets/icons/upIcon.png");
      sound = require("../assets/sounds/up.wav");
      break;
    case "R6":
      title = "DOWN";
      iconImg = require("../assets/icons/downIcon.png");
      sound = require("../assets/sounds/down.wav");
      break;
    case "R7":
      title = "LEFT";
      iconImg = require("../assets/icons/greenLeftIcon.png");
      sound = require("../assets/sounds/left.wav");
      break;
    case "R8":
      title = "RESET";
      iconImg = require("../assets/icons/resetIcon.png");
      sound = require("../assets/sounds/reset.wav");
      break;
    case "R9":
      title = "FORWARD";
      iconImg = require("../assets/icons/forwardIcon.png");
      sound = require("../assets/sounds/forward.wav");
      break;
    case "R10":
      title = "BACKWARD";
      iconImg = require("../assets/icons/backwardIcon.png");
      sound = require("../assets/sounds/backward.wav");
      break;
    case "R11":
      title = "RIGHT";
      iconImg = require("../assets/icons/greenRightIcon.png");
      sound = require("../assets/sounds/right.wav");
      break;
    case "R12":
      title = "STOP";
      iconImg = require("../assets/icons/stopIcon.png");
      sound = require("../assets/sounds/stop.wav");
      break;

    default:
      break;
  }
  return { title, iconImg, bodypartImg, sound }; // return image path, audio path
}
export default ContentSelector;
