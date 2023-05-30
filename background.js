chrome.runtime.onInstalled.addListener(function() {
    console.log("Ekstensi diinstal.");
  });
  
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Tombol ekstensi diklik.");
    chrome.tabs.create({ url: "https://chat.openai.com/" });
});
  