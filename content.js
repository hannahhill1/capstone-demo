// ============================================================
// content.js
//
// This file is injected into every webpage by Chrome.
// It listens for a message from popup.js, counts the words
// on the page, and sends the result back.
//
// It has access to the real webpage's DOM —
// that's how it can read the text on the page.
// ============================================================


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  if (message.action === "getWordCount") {

    // document.body.innerText gives us all the visible text
    // on the page as one big string
    const text = document.body.innerText;

    // Split the text into words by looking for spaces/newlines
    // .filter(Boolean) removes any empty strings from the array
    const words = text.trim().split(/\s+/).filter(Boolean);

    // Count the words
    const wordCount = words.length;

    // Average reading speed is about 200 words per minute.
    // Math.ceil rounds UP so we never show "0 min read"
    const readTime = Math.ceil(wordCount / 200);

    // Send both values back to popup.js
    sendResponse({
      wordCount: wordCount,
      readTime: readTime
    });
  }

  // return true keeps the message channel open for sendResponse
  return true;
});
