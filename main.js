const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const voiceBtn = document.getElementById('voice-btn');
const funFactDiv = document.getElementById('fun-fact');
let fontSize = 18;
let recognition = null;
let isListening = false;

function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    if (!isUser) {
        messageDiv.innerHTML = `<span class='bot-avatar-inline'><img src='/static/bot-avatar.gif' alt='Bot'></span> ${message}`;
    } else {
        messageDiv.textContent = message;
    }
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    addMessage(message, true);
    userInput.value = '';
    fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    })
    .then(res => res.json())
    .then(data => {
        addMessage(data.response);
        if (data.tutorial) addTutorialSteps(data.tutorial);
        if (data.tips) addTips(data.tips);
    })
    .catch(() => addMessage("Sorry, I'm having trouble connecting. Please try again later."));
}

function addTutorialSteps(steps) {
    const tutorialDiv = document.createElement('div');
    tutorialDiv.className = 'message bot-message';
    tutorialDiv.innerHTML = `<b>Step-by-step guide:</b><br>` + steps.map((s, i) => `${i+1}. ${s}`).join('<br>');
    chatMessages.appendChild(tutorialDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTips(tips) {
    const tipsDiv = document.createElement('div');
    tipsDiv.className = 'message bot-message';
    tipsDiv.innerHTML = `<b>Quick Tips:</b><br>` + Object.entries(tips).map(([cat, arr]) => `<b>${cat}:</b><br>` + arr.map(t => `- ${t}`).join('<br>')).join('<br>');
    chatMessages.appendChild(tipsDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function quickAction(action) {
    let msg = '';
    switch(action) {
        case 'Learn Basics': msg = 'What is a browser?'; break;
        case 'Ask a Question': msg = 'How to create email?'; break;
        case 'Get Help': msg = 'WiFi not working'; break;
        case 'Tutorials': msg = 'Show me a tutorial'; break;
        case 'Online Safety': msg = 'tech tips'; break;
        default: msg = action;
    }
    userInput.value = msg;
    sendMessage();
}

function changeFontSize(delta) {
    fontSize = Math.max(14, Math.min(28, fontSize + delta));
    document.body.style.fontSize = fontSize + 'px';
}

// Voice input (Web Speech API)
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        sendMessage();
    };
    recognition.onend = function() {
        isListening = false;
        voiceBtn.classList.remove('listening');
    };
}
function toggleVoice() {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser.');
        return;
    }
    if (isListening) {
        recognition.stop();
    } else {
        recognition.start();
        isListening = true;
        voiceBtn.classList.add('listening');
    }
}
userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

// Fun fact popup
function showFunFact() {
    fetch('/api/funfact')
        .then(res => res.json())
        .then(data => { funFactDiv.textContent = data.fact; });
}
showFunFact();
setInterval(showFunFact, 30000); // update every 30s 