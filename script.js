// script.js

document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach(iframe => {
        iframe.onload = function() {
            const contentDocument = iframe.contentDocument || iframe.contentWindow.document;
            contentDocument.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });
        }
    });
});
