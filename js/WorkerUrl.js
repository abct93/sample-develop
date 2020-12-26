function getWorkerURL(url) {
    const content = `importScripts("${url}");`;
    return URL.createObjectURL(new Blob([content], {
        type: 'text/javascript'
    }));
}