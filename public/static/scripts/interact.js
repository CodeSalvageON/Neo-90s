let disable = false;

function disableButtons (time) {
  disable = true;

  setTimeout(function () {
    disable = false;
  }, parseInt(time));
}

$(".faction").click(function () {
  if (disable === true) {
    return false;
  }
  
  gong.cloneNode(true).play();
  disableButtons(2000);
  $("#choose-faction").slideUp(2000);
});