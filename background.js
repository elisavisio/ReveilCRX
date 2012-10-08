//chrome.alarms.create({when: (Date.now() + 2000),periodInMinutes:0.05});
chrome.alarms.create({when: (Date.now() + 2000)});

chrome.alarms.onAlarm.addListener(function() {
  alert("Time's up!");111
});