$("#choose-faction").hide();

const view_screen = document.getElementById("view-screen"); 
const choose_faction = document.getElementById("choose-faction");

const neighbors_forest_icon = document.getElementById("neighbors-forest-icon");
const central_valley_icon = document.getElementById("central-valley-icon");
const independent_icon = document.getElementById("independent-icon");
const ccgt_icon = document.getElementById("ccgt-icon");
const office_icon = document.getElementById("obr-icon");
const buzzard_icon = document.getElementById("bh-icon");
const eoc_icon = document.getElementById("eoc-icon");

neighbors_forest_icon.style.width = "50px";
neighbors_forest_icon.style.height = "50px";
central_valley_icon.style.width = "50px";
central_valley_icon.style.height = "50px";
independent_icon.style.width = "50px";
independent_icon.style.height = "50px";
ccgt_icon.style.width = "50px";
ccgt_icon.style.height = "50px";
office_icon.style.width = "50px";
office_icon.style.height = "50px";
buzzard_icon.style.width = "50px";
buzzard_icon.style.height = "50px";
eoc_icon.style.width = "50px";
eoc_icon.style.height = "50px";

view_screen.style.backgroundImage = "url('" + meadowImg + "')";
neighbors_forest_icon.src = stumpImg;
central_valley_icon.src = fangImg;
independent_icon.src = horizonImg;
ccgt_icon.src = treeImg;
office_icon.src = officeImg;
buzzard_icon.src = buzzardImg;
eoc_icon.src = eocImg;