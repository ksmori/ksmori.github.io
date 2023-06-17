window.addEventListener("DOMContentLoaded", (event) => {
  var elts = document.getElementsByClassName('guess-letter');

  function checkSolved() {
    var value = 
    Array.from(elts).map(elt =>
      elt.value.toUpperCase()
    );

    // cheating is bad, YOU CHEATER
    if (value.join("") == "POPUP") {
      Array.from(elts).forEach((elt, i) => {
        elt.disabled = true;
        elt.classList.add("popup-" + i);
        elt.classList.add("popup");
        }
      );
      Array.from(document.getElementsByClassName("clue")).forEach((elt) =>
        elt.classList.add("disappear")
      );
      document.getElementById("info").classList.add("appear");
    }
  
    if (value.join("") == "PARTY") {
      // lol did you think this was a party
      document.getElementById("error").classList.add("fade-in-out");
    }
  }
  
  Array.from(elts).forEach(function(elt) {
    elt.addEventListener("keyup", function(event) {
      if (elt.value.length == 1 && (event.keyCode != 9 && event.keyCode != 16)) {
        if (!!(elt.nextElementSibling)) elt.nextElementSibling.focus();
      }
      if (event.keyCode == 8) {
        if (!!(elt.previousElementSibling)) elt.previousElementSibling.focus(); 
      }
      checkSolved();
    });
  });


});
