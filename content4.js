function handleElement(element) {
    document.getElementById("BackButton").onclick = function (){window.history.back()}
}

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                if (node.matches && node.matches('#BackButton')) {
                    handleElement(node);
                    observer.disconnect();
                }
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });



