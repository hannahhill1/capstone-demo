chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "getWordCount") {

    // 1. grab all visible text on the page
    const text = document.body.innerText;

    // 2. split into words and count them
    const words = text.split(" ");
    const wordCount = words.length;

    // 3. calculate reading time
    const readTime = Math.ceil(wordCount / 200);

    sendResponse({ wordCount, readTime });
  }
  return true;
});
