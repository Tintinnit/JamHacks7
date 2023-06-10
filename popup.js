function saveUserInput(event) {
    console.log("Script block executed");
    event.preventDefault(); // Prevent form submission

    var userInput = document.getElementById("userInput").value;

    // Display the user input on the screen
    document.getElementById("message").textContent = "User input: " + userInput;
    // You can perform further actions with the input here

    // Optional: Reset the form after saving the input
    document.getElementById("userInput").value = "";
}