const submitBtn = document.getElementById("submit");

let userInput = "";
submitBtn.addEventListener("click", () => {
    userInput = document.getElementById("userInput").value;
    fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userInput}),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("userInput").value = data.body;
    })
});

