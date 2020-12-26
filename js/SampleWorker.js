onmessage = (e) => {
    console.log('Message received from main thread');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main thread');
    postMessage(workerResult);
}