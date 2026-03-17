chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const tab = tabs[0];

  // 1. fill in title and url
  const title = document.getElementById("title");
  title.textContent = tab.title;

  const url = document.getElementById("url");
  url.textContent = tab.url;
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getWordCount" }, function(response) {
    if (!response) return;

    // 2. fill in word count and reading time
    const wordCount = document.getElementById("word-count");
    wordCount.textContent = response.wordCount;

    const readTime = document.getElementById("read-time");
    readTime.textContent = response.readTime;
  });
});
