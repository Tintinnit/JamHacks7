const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");


let userInput = "";
submitBtn.addEventListener("click", () => {
    if (userInput === "") {
        userInput = document.getElementById("userInput").value;
    }
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Simplifying...";
    fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userInput}),
    })
    .then((response) => response.json())
    .then((data) => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = "Retry";
        console.log(data);
        document.getElementById("userInput").value = data.body.trim();
    })
});

clearBtn.addEventListener("click", () => {
    document.getElementById("userInput").value = "";
    submitBtn.innerHTML = "Simplify";
});