function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return;

    addMessage(userInput, "user");
    document.getElementById("userInput").value = ""; // Clear input

    // Bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, "bot");
    }, 1000); // Simulate delay
}

function addMessage(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes("headache") && message.includes("fever")) {
        return "It seems you may have a cold or flu. Rest well, drink plenty of fluids, and consider visiting a healthcare provider if symptoms persist.";
    } else if (message.includes("cough") && message.includes("fever")) {
        return "You may have a respiratory infection. Rest and stay hydrated. Seek medical attention if symptoms worsen.";
    }else if (message.includes("cough") ) {
        return "A cough could be caused by a variety of issues, including allergies, a cold, or a minor throat irritation. Drink warm fluids, avoid cold air, and rest. If the cough persists or is severe, consult a healthcare provider.";
    } 
    else if (message.includes("fever")) {
        return "Fever can be a sign of infection or other underlying issues. Make sure to rest, stay hydrated, and monitor your temperature. If the fever is high or persists, please seek medical attention.";
    } 
     else if (message.includes("fatigue")) {
        return "Fatigue can be caused by many factors. Make sure you're sleeping well, staying hydrated, and eating a balanced diet. See a doctor if fatigue continues.";
    } else if (message.includes("sore throat")) {
        return "A sore throat could be due to a cold or allergies. Drink warm liquids, and consider gargling salt water. If it persists, see a doctor.";
    } else {
        return "I'm not certain about that symptom. Please consult a healthcare professional for accurate guidance.";
    }
}
