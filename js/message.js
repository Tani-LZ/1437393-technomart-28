var buyLink = document.querySelector(".button-buy");
var messagePopup = document.querySelector(".modal-cart-message");
var messageClose = messagePopup.querySelector(".modal-close");

buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
  });

  messageClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (messagePopup.classList.contains("modal-show")) {
        messagePopup.classList.remove("modal-show");
      }
    }
  });
