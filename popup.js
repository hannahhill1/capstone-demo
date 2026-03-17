chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const tab = tabs[0];

  document.getElementById("title").textContent = tab.title;
  document.getElementById("url").textContent   = tab.url;

  chrome.tabs.sendMessage(tab.id, { action: "getWordCount" }, function(response) {
    if (!response) return;
    document.getElementById("word-count").textContent = response.wordCount;
    document.getElementById("read-time").textContent  = response.readTime;
  });
});
