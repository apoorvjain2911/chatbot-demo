const chatIcon = document.getElementById("chatIcon");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const chatMessages = document.getElementById("chatMessages");
const typingIndicator = document.getElementById("typingIndicator");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Toggle Chat
chatIcon.onclick = () => {
    chatContainer.style.display = "flex";
    chatIcon.style.display = "none";
};

closeChat.onclick = () => {
    chatContainer.style.display = "none";
    chatIcon.style.display = "flex";
};

// Append Message to UI
function appendMessage(sender, message) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", sender);
    msgDiv.innerText = message;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send Message Logic
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";
    
    // Show typing
    typingIndicator.style.display = "block";

    try {
        const res = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: message })
        });

        const data = await res.json();
        typingIndicator.style.display = "none";
        
        // FIX: Verify data.reply exists before appending
        if (data && data.reply) {
            appendMessage("bot", data.reply);
        } else {
            appendMessage("bot", "I received an empty response from the server.");
        }
    } catch (err) {
        typingIndicator.style.display = "none";
        appendMessage("bot", "Connection error. Is the backend running?");
        console.error(err);
    }
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});