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
    else if (message.includes("heart disease")) {
        return ` Refers to various heart-related conditions, including coronary artery disease, heart failure, and arrhythmias.
         "Eat heart-healthy foods, exercise regularly, manage stress, quit smoking, and follow your doctor's treatment plan."`;
    }else if(message.includes("stroke")){
        return` A blockage or rupture of blood vessels in the brain, causing brain damage, paralysis, or speech problems.
 "Manage blood pressure, avoid smoking, eat a balanced diet, and get immediate medical help if stroke symptoms occur (e.g., sudden numbness, confusion, or trouble speaking)."`; 
    }else if(message.includes("malaria")){
        return `A mosquito-borne disease caused by a parasite, leading to fever, chills, and flu-like symptoms.
 "Take anti-malarial drugs, use mosquito nets and repellents, and eliminate standing water to prevent mosquito breeding."`
    }else if(message.includes("cancer")){
        return`Uncontrolled cell growth that can form tumors or spread to other parts of the body.
  "Get regular screenings for early detection, follow treatment plans, and maintain a healthy lifestyle to support recovery."` 
    }else if (message.includes("rabies")) {
    return ` A viral infection transmitted through animal bites, leading to fatal brain infection if not treated promptly.
     "Avoid contact with wild animals, vaccinate pets, and seek immediate medical attention after an animal bite."`;
}
else if(message.includes("asthma")){
        return ` A chronic condition that narrows the airways, causing difficulty breathing, wheezing, and coughing.
 "Avoid triggers, use inhalers as prescribed, monitor symptoms, and seek medical advice during flare-ups."`
    }else if(message.includes("diabetes")){
        return` A condition where the body cannot properly regulate blood sugar. Symptoms include frequent urination, fatigue, and excessive thirst.
 "Follow a balanced diet, exercise regularly, monitor blood sugar levels, and take prescribed medication as directed."` 
    }else if(message.includes("cold")){
        return ` Viral infections affecting the upper respiratory system. Symptoms include cough, sore throat, and congestion.
         "Rest, hydrate, take over-the-counter medications for symptoms, and avoid close contact with others."`
    }
    

    
     else if (message.includes("fatigue")) {
        return "Fatigue can be caused by many factors. Make sure you're sleeping well, staying hydrated, and eating a balanced diet. See a doctor if fatigue continues.";
    } else if (message.includes("sore throat")) {
        return "A sore throat could be due to a cold or allergies. Drink warm liquids, and consider gargling salt water. If it persists, see a doctor.";
    } else {
        return "I'm not certain about that symptom. Please consult a healthcare professional for accurate guidance.";
    }
}
