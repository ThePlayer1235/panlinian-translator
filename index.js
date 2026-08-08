// welcome to "le spaghetti code"
const englishInput = document.getElementById("english-input");
const toPanlinianButton = document.getElementById("convert-to-panlinian");
const panlinianOutput = document.getElementById("panlinian-output");

const panlinianInput = document.getElementById("panlinian-input");
const toEnglishButton = document.getElementById("convert-to-english");
const englishOutput = document.getElementById("english-output");

const panlinianCopyButton = document.getElementById("panlinian-copy");
const englishCopyButton = document.getElementById("english-copy");

toPanlinianButton.addEventListener("click", element => {
    const input = englishInput.value;
    const output = panlinianOutput;
    output.value = "";
    for (let i = 0; i < input.length; i++) {
        // converting text to binary
        let binary = input[i].charCodeAt(0).toString(2);
        binary = "0" + binary; // adding additional "0", because idk, other converters do that, i dont know shit about binary

        // replacing 0 with "pan", and 1 with "line"
        let finalString = "";
        for (let i = 0; i < binary.length; i++) {
            if (binary[i] == "0") {
                finalString += "pan";
            } else if (binary[i] == "1") {
                finalString += "line";
            }
        }
        
        output.value += finalString + " ";
    }
});

toEnglishButton.addEventListener("click", element => {
    const input = panlinianInput.value;
    const output = englishOutput;
    output.value = "";
    
    // converting pans and lines to zeros and ones (in reality, if the code sees a "p", then it adds a "0", if it sees an "l", then it adds a "1")
    let newBinary = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "p") {
            newBinary += "0";
        } else if (input[i] == "l") {
            newBinary += "1"
        } else if (input[i] == " ") {
            newBinary += " ";
        }
    }
    
    // converting binary to text
    let binString = '';

    newBinary.split(' ').map(function(bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    output.value = binString;
});

let panlinianTimout;
panlinianCopyButton.addEventListener("click", element => {
    navigator.clipboard.writeText(panlinianOutput.value);
    panlinianCopyButton.textContent = "Copied!";
    clearTimeout(panlinianTimout);
    panlinianTimout = setTimeout(function() {
        panlinianCopyButton.textContent = "Copy";
    }, 1000);
});

let englishTimout;
englishCopyButton.addEventListener("click", element => {
    navigator.clipboard.writeText(englishOutput.value);
    englishCopyButton.textContent = "Copied!";
    clearTimeout(englishTimout);
    englishTimout = setTimeout(function() {
        englishCopyButton.textContent = "Copy";
    }, 1000);
});
