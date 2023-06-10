chrome.alarms.onAlarm.addListener(
    () => {
        chrome.notifications.create(
            {
                type: "basic",
                iconUrl: "images/logo48.png",
                title: "Terms and Conditions Detected",
                message: "strAIghtfward has detected terms and conditions on this page.",
                silent: false
            },
            () => {}
        )
    },
)

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.startsWith('https://www.google.com/*')) {
        console.log("hi");
        createAlarm();
    }
});

function createAlarm() {
    chrome.alarms.create(
        "detected"
    )
}