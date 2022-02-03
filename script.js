function getBacon() {
  var loremP = document.getElementById("lorem");
  var sentences = document.getElementById("sentences").value;
  var allMeat = document.getElementById("allMeat");
  var meatAndFilling = document.getElementById("meatAndFilling");
  var spicy = document.getElementById("spicy");

  var meat = "";
  var spice = "";

  if (spicy.checked == true) {
    spice = "1";
  }

  if (spicy.checked == false) {
    spice = "0";
  }

  if (allMeat.checked == true) {
    meat = "all-meat";
  }

  if (meatAndFilling.checked == true) {
    meat = "meat-and-filler";
  }
  fetch(
    "https://baconipsum.com/api/?type=" +
      meat +
      "&sentences=" +
      sentences +
      "&start-with-lorem=1&make-it-spicy=" +
      spice
  )
    .then((res) => res.json())
    .then((data) => {
      loremP.innerHTML = data;
    });

  setTimeout(function () {
    var copyBtn = document.getElementById("copy");
    copyBtn.style.display = "block";
  }, 300);
}

function copy() {
  var loremP = document.getElementById("lorem").innerHTML;
  navigator.clipboard
    .writeText(loremP)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
