var contactLink = document.querySelector(".contacts-link");
var writeusPopup = document.querySelector(".write-us");
var writeusClose = writeusPopup.querySelector(".modal-close");
var writeusForm = writeusPopup.querySelector(".write-us-container");
var yourName = writeusPopup.querySelector("[name=name]");
var yourEmail = writeusPopup.querySelector("[name=email]");
var buttonSend = writeusPopup.querySelector(".button-send");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

contactLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.add("modal-show");

  if (storage) {
    yourName.value = storage;
    yourEmail.focus();
  } else {
    yourName.focus();
  }
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.remove("modal-show");
  writeusPopup.classList.remove("modal-error");
});

buttonSend.addEventListener("click", function (evt) {
  if (!yourName.value || !yourEmail.value) {
  evt.preventDefault();
  writeusPopup.classList.remove("modal-error");
  writeusPopup.offsetWidth = writeusPopup.offsetWidth;
  writeusPopup.classList.add("modal-error");
} else {
    if (isStorageSupport) {
      localStorage.setItem("name", yourName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeusPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeusPopup.classList.remove("modal-show");
      writeusPopup.classList.remove("modal-error");
    }
  }
});
