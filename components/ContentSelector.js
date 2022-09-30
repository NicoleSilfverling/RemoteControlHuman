function ContentSelector(btnId, bodyHalfLeft) {
  let title = "";
  let iconImg = "";
  let bodypartImg = "";
  let sound = "";

  switch (btnId) {
    case "L1":
      title = "LEFT";
      // set audio path
      //set image path
      iconImg = require("../assets/icons/leftArrowIcon.png");
      sound = require("../assets/sounds/left.wav");

      break;
    case "L2":
      title = "button with id 2";
      iconImg = require("../assets/icons/handIcon.png");
      sound = require("../assets/sounds/hand.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/hand_l.png");
      else bodypartImg = require("../assets/images/hand_r.png");

      break;
    case "L3":
      title = "button with id 3";
      iconImg = require("../assets/icons/armIcon.png");
      sound = require("../assets/sounds/arm.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/arm_l.png");
      else bodypartImg = require("../assets/images/arm_r.png");

      break;
    case "L4":
      title = "button with id 4";
      iconImg = require("../assets/icons/torsoIcon.png");
      sound = require("../assets/sounds/torso.wav");
      break;
    case "L5":
      title = "button with id 5";
      iconImg = require("../assets/icons/thumbIcon.png");
      sound = require("../assets/sounds/thumb.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/hand_l.png");
      else bodypartImg = require("../assets/images/hand_r.png");

      break;
    case "L6":
      title = "button with id 6";
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
      title = "button with id 8";
      iconImg = require("../assets/icons/indexIcon.png");
      sound = require("../assets/sounds/index.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/hand_l.png");
      else bodypartImg = require("../assets/images/hand_r.png");

      break;
    case "L9":
      title = "button with id 9";
      iconImg = require("../assets/icons/footIcon.png");
      sound = require("../assets/sounds/foot.wav");
      if (bodyHalfLeft) bodypartImg = require("../assets/images/foot_l.png");
      else bodypartImg = require("../assets/images/foot_r.png");
      break;
    case "R1":
      title = "button with id 1";
      iconImg = require("../assets/icons/bendIcon.png");
      sound = require("../assets/sounds/bend.wav");
      break;
    case "R2":
      title = "button with id 2";
      iconImg = require("../assets/icons/moveIcon.png");
      sound = require("../assets/sounds/move.wav");
      break;
    case "R3":
      title = "button with id 3";
      iconImg = require("../assets/icons/resetIcon.png");
      sound = require("../assets/sounds/reset.wav");
      break;
    case "R4":
      title = "button with id 4";
      iconImg = require("../assets/icons/greenLeftIcon.png");
      sound = require("../assets/sounds/left.wav");
      break;
    case "R5":
      title = "button with id 5";
      iconImg = require("../assets/icons/stretchIcon.png");
      sound = require("../assets/sounds/stretch.wav");
      break;
    case "R6":
      title = "button with id 6";
      iconImg = require("../assets/icons/twistIcon.png");
      sound = require("../assets/sounds/twist.wav");
      break;
    case "R7":
      title = "button with id 7";
      iconImg = require("../assets/icons/stopIcon.png");
      sound = require("../assets/sounds/stop.wav");
      break;
    case "R8":
      title = "button with id 8";
      iconImg = require("../assets/icons/greenRightIcon.png");
      sound = require("../assets/sounds/right.wav");
      break;
    case "R9":
      title = "button with id 9";
      iconImg = require("../assets/icons/forwardIcon.png");
      sound = require("../assets/sounds/forward.wav");
      break;
    case "R10":
      title = "button with id 10";
      iconImg = require("../assets/icons/backwardIcon.png");
      sound = require("../assets/sounds/backward.wav");
      break;
    case "R11":
      title = "button with id 11";
      iconImg = require("../assets/icons/upIcon.png");
      sound = require("../assets/sounds/up.wav");
      break;
    case "R12":
      title = "button with id 12";
      iconImg = require("../assets/icons/downIcon.png");
      sound = require("../assets/sounds/down.wav");
      break;

    default:
      break;
  }
  return { title, iconImg, bodypartImg, sound }; // return image path, audio path
}
export default ContentSelector;
