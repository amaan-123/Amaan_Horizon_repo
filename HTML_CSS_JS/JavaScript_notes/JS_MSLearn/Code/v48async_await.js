function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunningOperation() {
    // logic here, say calling a server - something that takes time
    return 42; // same as Promise.resolve(42);
}


async function run() {
    // logic
    console.log('Start!!')
    try{
        await promiseTimeout(2000);
        //promiseTimeout(2000)
        //if we don't write await, notice that the promiseTimeout is not awaited, so it will not wait for 2 seconds and will continue to execute the next line of code
        // at the end (after Stop!!), there will be a 2 second delay
        const response = await longRunningOperation();
        // if await is not used, the response will be a promise object i.e., Promise { 42 }, not the value of the promise
        console.log(response);
        } catch(error) {
            console.error('Error:', error);
        }
    console.log('Stop!!');
}

run();