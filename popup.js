
document.getElementById('inject-button').addEventListener('click', () => {
    var spd_inp = document.getElementById('speed-input');
    var user_in = Number(spd_inp.value);
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

    spd_inp.value = "1";
    var status_text = document.getElementById('status');
    status_text.innerHTML = `Set to ${user_in}`;
    window.setTimeout(() => {status_text.innerHTML = ""}, 1000);
})


