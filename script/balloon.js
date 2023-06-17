window.addEventListener("DOMContentLoaded", (event) => {
  var elts = document.getElementsByClassName('guess-letter');

  function checkSolved() {
    var value = Array.from(elts).map(elt => elt.value.toUpperCase());
    value = value.join("");

    // cheating is bad, YOU CHEATER
    if (value == "POPUP") {
      Array.from(elts).forEach((elt, i) => {
        elt.disabled = true;
        elt.classList.add("popup-" + i);
        elt.classList.add("popup");
        }
      );
      Array.from(document.getElementsByClassName("clue")).forEach((elt) =>
        elt.classList.add("disappear")
      );
      document.getElementById("invite").classList.add("appear");
      document.getElementById("info").classList.add("appear");
      document.getElementById("info").classList.remove("display-none");
    }
  
    // lol did you think this was a party, WRONG
    if (value == "PARTY" || value == "BALLO") {
      document.getElementById("error").classList.add("fade-in-out");
    }
  }
  
  Array.from(elts).forEach(function(elt) {
    elt.addEventListener("keyup", function(event) {
      if (elt.value.length == 1 && (event.keyCode != 9 && event.keyCode != 16 && event.keyCode != 8)) {
        if (!!(elt.nextElementSibling)) elt.nextElementSibling.focus();
      }
      checkSolved();
    });
  });
  
  Array.from(elts).forEach(function(elt) {
    elt.addEventListener("keydown", function(event) {
      if (event.keyCode == 8 && elt.value.length == 0) {
        if (!!(elt.previousElementSibling)) elt.previousElementSibling.focus(); 
        event.preventDefault();
      }
    });
  });

});
