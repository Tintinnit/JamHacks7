console.log("hello world");
const submitBtn = document.getElementById("submit");
document.getElementById("message").textContent = "User input: ";

let userInput = "";
submitBtn.addEventListener("click", () => {
    userInput = document.getElementById("userInput").value;
    console.log(userInput);
    document.getElementById("message").textContent = "User input: " + userInput;
});

