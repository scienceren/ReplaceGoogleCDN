chrome.webRequest.onBeforeRequest.addListener(
    function(request) {
        var url = request.url.replace('googleapis.com', 'proxy.ustclug.org');
        url = url.replace('themes.googleusercontent.com', 'google-themes.proxy.ustclug.org');
        return {redirectUrl: url};
    },
    {
        urls: [
            "*://ajax.googleapis.com/*",
            "*://themes.googleusercontent.com/*"
        ]
    },
    ["blocking"]
);
