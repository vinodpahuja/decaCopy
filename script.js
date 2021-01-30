"use strict";

//Select box-content element
let elBoxContent = document.querySelectorAll(".box-content");

console.log(elBoxContent);

//Callback Function that stores replaces extra content with a "..."
function trimString(currentBox) {
  let s = currentBox.textContent;
  if (s.length > 160) {
    currentBox.textContent = s.slice(0, 160) + "...";
  }
}

elBoxContent.forEach(trimString);

// Listen to port message
chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == "knock");

  port.onMessage.addListener(function (msg) {
    console.log(msg.data);
  });
});
