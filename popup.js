const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const errorMsg = document.getElementById("errorMsg");


let userInput = "";
submitBtn.addEventListener("click", () => {
    if (document.getElementById("userInput").value.length > 10000) {
        errorMsg.style.visibility = "visible";
        console.log("a")
        return;
    }
    if (userInput === "" && document.getElementById("userInput").value !== "") {
        errorMsg.style.visibility = "hidden";
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
    errorMsg.style.visibility = "hidden";
    document.getElementById("userInput").value = "";
    submitBtn.innerHTML = "Simplify";
});