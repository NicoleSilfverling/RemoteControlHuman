function ContentSelector(btnId) {
  let text = "";
  let iconImg = "";
  let bodypartImg = "";

  switch (btnId) {
    case "L1":
      text = "button with id 1";
      // set audio path
      //set image path
      bodypartImg = require("../assets/images/head.png");
      break;
    case "L2":
      text = "button with id 2";
      break;
    case "L3":
      text = "button with id 3";
      bodypartImg = require("../assets/images/arm_l.png");

      break;
    case "L4":
      text = "button with id 4";
      iconImg = require("../assets/icons/torsoIcon.png");
      break;
    case "L5":
      text = "button with id 5";
      break;
    case "L6":
      text = "button with id 6";
      break;
    case "L7":
      text = "button with id 7";
      break;
    case "L8":
      text = "button with id 8";
      break;
    case "L9":
      text = "button with id 9";
      break;
    case "R1":
      text = "button with id 1";
      break;
    case "R2":
      text = "button with id 2";
      break;
    case "R3":
      text = "button with id 3";
      break;
    case "R4":
      text = "button with id 4";
      break;
    case "R5":
      text = "button with id 5";
      break;
    case "R6":
      text = "button with id 6";
      img = require("../assets/icons/walkIcon.png");
      break;
    case "R7":
      text = "button with id 7";
      img = require("../assets/icons/walkIcon.png");

      break;
    case "R8":
      text = "button with id 8";
      img = require("../assets/icons/walkIcon.png");

      break;
    case "R9":
      text = "button with id 9";
      break;
    case "R10":
      text = "button with id 10";
      break;
    case "R11":
      text = "button with id 11";
      break;
    case "R12":
      text = "button with id 12";
      break;

    default:
      break;
  }
  return { text, iconImg, bodypartImg }; // return image path, audio path
}
export default ContentSelector;
