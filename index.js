var numberyes = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberyes; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

var buttominner = this.innerHTML

makeSound(buttominner);

buttonAnimetaion(buttominner);
  });

}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimetaion(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play(".drum");
      break;

      case "a" :
       var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play(".drum");
        break;

        case "s":
         var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play(".drum");
          break;

          case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play(".drum");
            break;

            case "j":
             var snare = new Audio("sounds/snare.mp3");
            snare.play(".drum");
              break;

              case "k":
               var crash = new Audio("sounds/crash.mp3");
              crash.play(".drum");
                break;

                case "l":
                 var kick = new Audio("sounds/kick-bass.mp3");
                kick.play(".drum");
                  break;
    default: console.log(buttominner);

  }
}

function buttonAnimetaion(currentKey) {

var activeButton =  document.querySelector("." + currentKey)

  activeButton.classList.add("pressed");
      setTimeout (function(){
        activeButton.classList.remove("pressed");
      }, 100);
    }
