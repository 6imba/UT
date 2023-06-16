function sendMessageToParent(data, windowObj = window) {
    const target = windowObj.parent;
    target.postMessage(data, windowObj.location.origin);
}

function sendPostMessageToRedirect(windowObject, redirectUrl) {
    const postMessageData = {
        name: 'REDIRECTION_EVENT',
        data: redirectUrl,
    };
    sendMessageToParent(postMessageData, windowObject);
}

module.exports = sendPostMessageToRedirect;