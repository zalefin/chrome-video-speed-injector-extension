
document.getElementById('inject-button').addEventListener('click', () => {
    var user_in = Number(document.getElementById('speed-input').value);
    if (user_in <= 0) {
        user_in = 1;
    }
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        var activeTab = tabs[0];
        // Use callback function to execute next script
        chrome.tabs.executeScript(activeTab.id, {
            code: `var pbRate = ${user_in};`,
            allFrames: true
        }, () => {
            chrome.tabs.executeScript(activeTab.id, {
                file: 'inject.js',
                allFrames: true
            });
        });
    });
})


