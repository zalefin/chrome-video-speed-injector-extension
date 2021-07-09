// injected code into page / frames

(() => {
    var vids = document.getElementsByTagName('video');
    for (var i = 0; i < vids.length; i++) {
        vids[i].playbackRate = pbRate;
    }
})();
