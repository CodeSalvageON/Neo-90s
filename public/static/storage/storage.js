const has_faction = localStorage.getItem("afv_has_faction");
let has_faction_temp = false;

if (has_faction === "" || has_faction === undefined || has_faction === null) {
  has_faction_temp = false;
}

else {
  has_faction_temp = true;
}

if (has_faction_temp === false) {
  $("#choose-faction").show();
}

else {
  // Do nothing
}