const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the number of seconds to count down: ", (value) => {
    let remaining = Number(value);

    if (!remaining || remaining <= 0) {
        console.log("Invalid input. Please enter a positive number.");
        rl.close();
        return;
    }

    console.log(`Starting countdown from ${remaining} seconds...`);

    
    const countdown = setInterval(() => {
        console.log(`Remaining: ${remaining}s`);
        remaining--;

        if (remaining < 0) {
            clearInterval(countdown);
            console.log("Countdown Complete!");
            rl.close();
        }
    }, 1000);


    setTimeout(() => {
        process.stdin.on("data", (input) => {
            const key = input.toString().trim().toLowerCase();
            if (key === "s") {
                clearInterval(countdown);
                console.log("Countdown stopped by user.");
                rl.close();
            }
        });
    }, 300); 
});
