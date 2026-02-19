# 🚀 Nova AI: Bridging the Gap in Student Support

**Nova AI** isn't just a chatbot; it’s a high-speed digital assistant designed to ensure no student is left waiting. By combining the sleekness of modern web design with the raw power of **Groq’s LPU inference**, I’ve built a support system that feels less like a machine and more like a conversation.

---

## 💡 The Problem & The Solution
Most coaching institutes struggle with repetitive student queries—fees, timings, and course details. Humans can't be online 24/7, and traditional bots are too slow. 

**Nova AI** solves this by using **Llama 3**, providing instant, accurate, and polite responses. I focused on making the interaction feel "live" with smooth animations and a typing indicator so students know they're being heard.



---

## 🛠️ The Tech Behind the Magic

### The Brain (Backend)
I chose **FastAPI** for its speed and asynchronous capabilities. It acts as a secure bridge, hiding our API keys while managing the flow of data to the Groq Cloud.
* **Groq SDK:** Used for sub-second AI inference.
* **Python-Dotenv:** Keeps our secrets (API keys) safe and out of the codebase.

### The Face (Frontend)
I opted for **Vanilla JavaScript and CSS3** to keep the project lightweight and fast. No bulky frameworks—just clean, responsive code.
* **Dynamic UI:** The chat window slides in with CSS animations.
* **Auto-Scroll:** New messages automatically bring the view to the bottom for a seamless experience.

---

## 🏗️ Inside the Folders
```text
├── 📂 Backend/
│   ├── main.py          # The heart of the API logic
│   └── .env             # Your secret passage (API Key)
├── 📂 Frontend/
│   ├── index.html       # The structure of our landing page
│   ├── style.css        # The "look and feel" (Animations & Layout)
│   └── script.js        # The bridge between user and AI
└── README.md            # The story of this project


