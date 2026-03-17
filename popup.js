// ============================================================
// popup.js
//
// This file runs inside the popup window.
// It does two things:
//   1. Fills in the title and URL fields using getElementById
//   2. Sends a message to content.js asking for the word count
//      then fills in the results using getElementById
// ============================================================


// Step 1: get the active tab from Chrome
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const tab = tabs[0];

  // =============================================
  // 🖊️  FILL IN YOURSELF — Part 1
  //
  // Use getElementById to find each element by its
  // id and set its textContent to the right value.
  //
  // The element ids are:  "title"  and  "url"
  // The values to use are: tab.title  and  tab.url
  //
  // Example of how getElementById works:
  //   document.getElementById("someId").textContent = "some value";
  // =============================================

  document.getElementById("title").textContent = // ??? ;
  document.getElementById("url").textContent =   // ??? ;

});


// Step 2: ask content.js for the word count
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getWordCount" }, function (response) {

    if (!response) return; // page couldn't be scanned

    // =============================================
    // 🖊️  FILL IN YOURSELF — Part 2
    //
    // response.wordCount  = the number of words on the page
    // response.readTime   = estimated minutes to read it
    //
    // Fill in the two stat cards using getElementById.
    // The element ids are:  "word-count"  and  "read-time"
    // =============================================

    document.getElementById("word-count").textContent = // ??? ;
    document.getElementById("read-time").textContent =  // ??? ;

  });
});
