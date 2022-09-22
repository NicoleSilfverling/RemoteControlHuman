function ContentSelector(btnId) {
  let text = "";
  let iconImg = "";
  let bodypartImg = "";
  let sound = "";

  switch (btnId) {
    case "L1":
      text = "button with id 1";
      // set audio path
      //set image path
      iconImg = require("../assets/icons/leftArrowIcon.png");

      break;
    case "L2":
      text = "button with id 2";
      iconImg = require("../assets/icons/handIcon.png");

      break;
    case "L3":
      text = "button with id 3";
      iconImg = require("../assets/icons/armIcon.png");
      bodypartImg = require("../assets/images/arm_l.png");
      sound = require("../assets/sounds/arm.wav");

      break;
    case "L4":
      text = "button with id 4";
      iconImg = require("../assets/icons/torsoIcon.png");
      break;
    case "L5":
      text = "button with id 5";
      iconImg = require("../assets/icons/thumbIcon.png");

      break;
    case "L6":
      text = "button with id 6";
      iconImg = require("../assets/icons/legIcon.png");

      break;
    case "L7":
      text = "button with id 7";
      iconImg = require("../assets/icons/rightArrowIcon.png");

      break;
    case "L8":
      text = "button with id 8";
      iconImg = require("../assets/icons/indexIcon.png");

      break;
    case "L9":
      text = "button with id 9";
      iconImg = require("../assets/icons/footIcon.png");

      break;
    case "R1":
      text = "button with id 1";
      iconImg = require("../assets/icons/bendIcon.png");

      break;
    case "R2":
      text = "button with id 2";
      iconImg = require("../assets/icons/moveIcon.png");

      break;
    case "R3":
      text = "button with id 3";
      iconImg = require("../assets/icons/resetIcon.png");

      break;
    case "R4":
      text = "button with id 4";
      iconImg = require("../assets/icons/greenLeftIcon.png");

      break;
    case "R5":
      text = "button with id 5";
      iconImg = require("../assets/icons/stretchIcon.png");

      break;
    case "R6":
      text = "button with id 6";
      iconImg = require("../assets/icons/walkIcon.png");
      break;
    case "R7":
      text = "button with id 7";
      iconImg = require("../assets/icons/stopIcon.png");
      break;
    case "R8":
      text = "button with id 8";
      iconImg = require("../assets/icons/greenRightIcon.png");

      break;
    case "R9":
      text = "button with id 9";
      iconImg = require("../assets/icons/forwardIcon.png");
      break;
    case "R10":
      text = "button with id 10";
      iconImg = require("../assets/icons/backwardIcon.png");
      break;
    case "R11":
      text = "button with id 11";
      iconImg = require("../assets/icons/upIcon.png");
      break;
    case "R12":
      text = "button with id 12";
      iconImg = require("../assets/icons/downIcon.png");
      break;

    default:
      break;
  }
  return { text, iconImg, bodypartImg }; // return image path, audio path
}
export default ContentSelector;
