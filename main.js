// --- FAQ, Tutorials, and Tips ---
const FAQ = {
  "what is a browser?": "A browser is like a window to the internet! It lets you visit websites, just like a TV lets you watch different channels. Popular browsers are Chrome, Firefox, and Edge.",
  "how can i set up an email account?": "Setting up an email is easy! Go to gmail.com, click 'Create account', and follow the steps. It's like getting your own digital mailbox! 📬",
  "why isn't my phone connecting to wi-fi?": "Wi-Fi troubles? Don't worry, I've got the magic wand to fix it! Try turning Wi-Fi off and on, check your password, or restart your router. Still stuck? Ask me for more help!",
  "how to use whatsapp?": "WhatsApp is a messaging app. Download it from your app store, open it, enter your phone number, and start chatting with friends and family!",
  "give me a tech tip!": "Quick Tech Tip: Always use strong passwords and never share them. Want more tips? Just ask!"
};

const TUTORIALS = {
  "how do i pay bills online?": [
    "Log in to your bank's website or app.",
    "Find the 'Pay Bills' or 'Payments' section.",
    "Enter the bill details (like account number).",
    "Enter the amount and confirm the payment.",
    "Save the confirmation for your records!"
  ],
  "how to use whatsapp?": [
    "Download WhatsApp from your app store.",
    "Open the app and tap 'Agree'.",
    "Enter your phone number and verify it.",
    "Add your name and profile picture.",
    "Start chatting with friends and family!"
  ],
  "how to open a browser?": [
    "Find the browser icon (like Chrome, Firefox, or Edge) on your desktop or start menu.",
    "Double-click the icon to open the browser window.",
    "You can now type a website address in the top bar to visit a site."
  ],
  "how to send an email?": [
    "Open your email app or go to gmail.com.",
    "Click 'Compose' or 'New Email'.",
    "Type the recipient's email address.",
    "Write your message and click 'Send'."
  ],
  "how to download an app?": [
    "Open the Play Store (Android) or App Store (iPhone/iPad).",
    "Type the app name in the search bar.",
    "Tap 'Install' or 'Get' next to the app.",
    "Wait for it to download, then tap 'Open'."
  ],
  "how to take a screenshot?": [
    "On Windows: Press 'PrtScn' or 'Windows + Shift + S'.",
    "On Mac: Press 'Command + Shift + 4'.",
    "On Android: Press Power + Volume Down together.",
    "On iPhone: Press Side Button + Volume Up together."
  ],
  "how to connect to wi-fi?": [
    "Open your device's settings.",
    "Find and tap 'Wi-Fi'.",
    "Select your network from the list.",
    "Enter the password and tap 'Connect'."
  ],
  "how to reset my password?": [
    "Go to the login page of the website.",
    "Click on 'Forgot password?'.",
    "Enter your email address.",
    "Check your email for a reset link.",
    "Follow the instructions to set a new password."
  ],
  "how to make a video call?": [
    "Open a video calling app (like WhatsApp, Zoom, or Skype).",
    "Select the contact you want to call.",
    "Tap the video camera icon to start a video call."
  ],
  "how to search on google?": [
    "Open your browser and go to google.com.",
    "Type your question or topic in the search bar.",
    "Press 'Enter' or tap the search icon.",
    "Browse the results to find your answer."
  ],
  "how to create a strong password?": [
    "Use at least 8 characters (letters, numbers, and symbols).",
    "Avoid using personal info (like your name or birthday).",
    "Mix uppercase and lowercase letters.",
    "Don't reuse old passwords."
  ],
  "how to update my phone?": [
    "Open your phone's settings.",
    "Scroll to 'System' or 'About phone'.",
    "Tap 'Software Update' or 'Check for updates'.",
    "Follow the prompts to download and install updates."
  ],
  "how to block a contact?": [
    "Open your contacts or messaging app.",
    "Select the contact you want to block.",
    "Tap 'Block' or 'More' > 'Block contact'."
  ],
  "how to clear browser history?": [
    "Open your browser.",
    "Go to settings or menu (three dots).",
    "Find 'History' and tap it.",
    "Select 'Clear browsing data' and confirm."
  ],
  "how to print a document?": [
    "Open the document you want to print.",
    "Click 'File' > 'Print' or press 'Ctrl + P'.",
    "Select your printer and click 'Print'."
  ],
  "how to copy and paste?": [
    "Select the text you want to copy.",
    "Right-click and choose 'Copy' or press 'Ctrl + C'.",
    "Go to where you want to paste, right-click and choose 'Paste' or press 'Ctrl + V'."
  ],
  "how to join a zoom meeting?": [
    "Open the Zoom app or website.",
    "Click 'Join a Meeting'.",
    "Enter the meeting ID and your name.",
    "Click 'Join' and enter the passcode if needed."
  ],
  "how to check my email?": [
    "Open your email app or go to gmail.com.",
    "Log in with your email and password.",
    "Check your inbox for new messages."
  ],
  "how to turn on bluetooth?": [
    "Open your device's settings.",
    "Find and tap 'Bluetooth'.",
    "Switch Bluetooth to 'On'."
  ],
  "how to delete an app?": [
    "On Android: Tap and hold the app icon, then tap 'Uninstall'.",
    "On iPhone: Tap and hold the app icon, tap 'Remove App', then 'Delete App'."
  ]
};

const MOTIVATION = [
  "Learning is fun at any age. You're doing amazing! 🌟",
  "Every click is a step forward. Keep going! 🚀",
  "Tech can be tricky, but you're trickier! 😄",
  "Remember: Even tech experts were beginners once!"
];

// --- Multilingual Data ---
const LANGUAGES = {
  en: {
    greetings: [
      { q: ["hi", "hello", "hey", "how are you", "good morning", "good afternoon", "good evening"], a: ["Hello! How can I help you today? 😊", "Hi there! What digital mystery can I solve for you?", "Hey! Ready to learn something new?", "I'm great, thanks for asking! How can I assist you?"] },
    ],
    fallback: [
      "I'm not sure about that, but I'm always learning! Try asking another way.",
      "Hmm, I don't know that yet, but I'm here to help with digital questions!",
      "That's a good question! Let me know if you want a tech tip instead."
    ],
    faq: FAQ,
    tutorials: TUTORIALS,
    motivation: MOTIVATION
  },
  hi: {
    greetings: [
      { q: ["नमस्ते", "हाय", "हैलो", "कैसे हो", "शुभ प्रभात", "शुभ दोपहर", "शुभ संध्या"], a: ["नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? 😊", "हाय! क्या डिजिटल सवाल है आपके मन में?", "हैलो! कुछ नया सीखने के लिए तैयार हैं?", "मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?"] },
    ],
    fallback: [
      "मुझे इसका उत्तर नहीं पता, लेकिन मैं सीख रहा हूँ! कृपया दूसरा सवाल पूछें।",
      "हम्म, मुझे यह नहीं पता, लेकिन डिजिटल सवालों में मदद कर सकता हूँ!",
      "यह अच्छा सवाल है! चाहें तो एक तकनीकी टिप पूछें।"
    ],
    faq: {
      "what is a browser?": "ब्राउज़र इंटरनेट देखने की खिड़की है! इससे आप वेबसाइट देख सकते हैं, जैसे टीवी चैनल बदलते हैं। Chrome, Firefox, Edge लोकप्रिय ब्राउज़र हैं।",
      "how can i set up an email account?": "ईमेल सेटअप करना आसान है! gmail.com पर जाएं, 'Create account' पर क्लिक करें और निर्देशों का पालन करें। यह आपकी डिजिटल डाक है! 📬",
      "why isn't my phone connecting to wi-fi?": "Wi-Fi समस्या? चिंता न करें! Wi-Fi बंद/चालू करें, पासवर्ड जांचें, या राउटर रीस्टार्ट करें। फिर भी समस्या है? मुझसे पूछें!",
      "how to use whatsapp?": "WhatsApp एक मैसेजिंग ऐप है। इसे अपने ऐप स्टोर से डाउनलोड करें, खोलें, नंबर डालें और चैट शुरू करें!",
      "give me a tech tip!": "तकनीकी टिप: हमेशा मजबूत पासवर्ड रखें और साझा न करें। और टिप्स चाहिए? पूछें!"
    },
    tutorials: {
      "how do i pay bills online?": [
        "अपने बैंक की वेबसाइट या ऐप में लॉगिन करें।",
        "'Pay Bills' या 'Payments' सेक्शन खोजें।",
        "बिल की जानकारी भरें (जैसे अकाउंट नंबर)।",
        "राशि डालें और भुगतान कन्फर्म करें।",
        "पुष्टि को सुरक्षित रखें!"
      ],
      "how to use whatsapp?": [
        "WhatsApp अपने ऐप स्टोर से डाउनलोड करें।",
        "ऐप खोलें और 'Agree' पर टैप करें।",
        "अपना फोन नंबर डालें और सत्यापित करें।",
        "अपना नाम और फोटो जोड़ें।",
        "मित्रों और परिवार से चैट शुरू करें!"
      ]
    },
    motivation: [
      "सीखना कभी बंद न करें! आप शानदार कर रहे हैं! 🌟",
      "हर क्लिक आपको आगे बढ़ाता है। जारी रखें! 🚀",
      "तकनीक मुश्किल हो सकती है, लेकिन आप उससे भी ज्यादा होशियार हैं! 😄",
      "याद रखें: हर विशेषज्ञ कभी नौसिखिया था!"
    ]
  },
  es: {
    greetings: [
      { q: ["hola", "buenos días", "buenas tardes", "buenas noches", "cómo estás", "qué tal"], a: ["¡Hola! ¿En qué puedo ayudarte hoy? 😊", "¡Buenos días! ¿Listo para aprender algo nuevo?", "¡Hola! ¿Qué misterio digital resolvemos hoy?", "¡Estoy bien, gracias! ¿Y tú?"] },
    ],
    fallback: [
      "No estoy seguro de eso, ¡pero siempre estoy aprendiendo! Intenta preguntar de otra manera.",
      "Hmm, no sé eso todavía, ¡pero puedo ayudarte con preguntas digitales!",
      "¡Buena pregunta! Si quieres, puedo darte un consejo tecnológico."
    ],
    faq: {
      "what is a browser?": "¡Un navegador es como una ventana a Internet! Te permite visitar sitios web, como la TV te deja ver canales. Los más populares son Chrome, Firefox y Edge.",
      "how can i set up an email account?": "¡Configurar un correo es fácil! Ve a gmail.com, haz clic en 'Crear cuenta' y sigue los pasos. ¡Es como tu buzón digital! 📬",
      "why isn't my phone connecting to wi-fi?": "¿Problemas con el Wi-Fi? ¡No te preocupes! Apaga y enciende el Wi-Fi, revisa la contraseña o reinicia el router. ¿Aún con problemas? ¡Pregúntame!",
      "how to use whatsapp?": "WhatsApp es una app de mensajería. Descárgala, ábrela, pon tu número y ¡empieza a chatear!",
      "give me a tech tip!": "Consejo: Usa contraseñas fuertes y no las compartas. ¿Quieres más consejos? ¡Pregunta!"
    },
    tutorials: {
      "how do i pay bills online?": [
        "Inicia sesión en la web o app de tu banco.",
        "Busca la sección 'Pagar facturas' o 'Pagos'.",
        "Introduce los datos de la factura (como el número de cuenta).",
        "Pon la cantidad y confirma el pago.",
        "¡Guarda la confirmación!"
      ],
      "how to use whatsapp?": [
        "Descarga WhatsApp de tu tienda de apps.",
        "Abre la app y pulsa 'Aceptar'.",
        "Pon tu número y verifícalo.",
        "Agrega tu nombre y foto.",
        "¡Empieza a chatear!"
      ]
    },
    motivation: [
      "¡Aprender es divertido a cualquier edad! ¡Vas genial! 🌟",
      "Cada clic es un paso adelante. ¡Sigue así! 🚀",
      "La tecnología puede ser difícil, ¡pero tú puedes! 😄",
      "Recuerda: ¡Hasta los expertos fueron principiantes!"
    ]
  },
  fr: {
    greetings: [
      { q: ["bonjour", "salut", "coucou", "bonsoir", "comment ça va", "ça va"], a: ["Bonjour ! Comment puis-je vous aider aujourd'hui ? 😊", "Salut ! Prêt à apprendre quelque chose de nouveau ?", "Coucou ! Quel mystère numérique puis-je résoudre ?", "Je vais bien, merci ! Et vous ?"] },
    ],
    fallback: [
      "Je ne suis pas sûr de cela, mais j'apprends toujours ! Essayez de demander autrement.",
      "Hmm, je ne sais pas encore cela, mais je peux aider avec des questions numériques !",
      "Bonne question ! Voulez-vous un conseil technologique ?"
    ],
    faq: {
      "what is a browser?": "Un navigateur est comme une fenêtre sur Internet ! Il vous permet de visiter des sites web, comme la TV permet de changer de chaîne. Les plus connus sont Chrome, Firefox et Edge.",
      "how can i set up an email account?": "Créer un email est facile ! Allez sur gmail.com, cliquez sur 'Créer un compte' et suivez les étapes. C'est votre boîte aux lettres numérique ! 📬",
      "why isn't my phone connecting to wi-fi?": "Problème de Wi-Fi ? Pas de panique ! Désactivez/réactivez le Wi-Fi, vérifiez le mot de passe ou redémarrez la box. Toujours bloqué ? Demandez-moi !",
      "how to use whatsapp?": "WhatsApp est une application de messagerie. Téléchargez-la, ouvrez-la, entrez votre numéro et commencez à discuter !",
      "give me a tech tip!": "Astuce : Utilisez des mots de passe forts et ne les partagez pas. D'autres astuces ? Demandez !"
    },
    tutorials: {
      "how do i pay bills online?": [
        "Connectez-vous sur le site ou l'application de votre banque.",
        "Trouvez la section 'Payer des factures' ou 'Paiements'.",
        "Entrez les détails de la facture (comme le numéro de compte).",
        "Entrez le montant et confirmez le paiement.",
        "Gardez la confirmation !"
      ],
      "how to use whatsapp?": [
        "Téléchargez WhatsApp depuis votre store.",
        "Ouvrez l'application et appuyez sur 'Accepter'.",
        "Entrez votre numéro et vérifiez-le.",
        "Ajoutez votre nom et photo.",
        "Commencez à discuter !"
      ]
    },
    motivation: [
      "Apprendre est amusant à tout âge. Vous êtes génial ! 🌟",
      "Chaque clic est un pas en avant. Continuez ! 🚀",
      "La technologie peut être difficile, mais vous êtes plus malin ! 😄",
      "Rappelez-vous : Même les experts étaient débutants !"
    ]
  }
};

// --- Chatbot Logic ---
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const voiceBtn = document.getElementById('voice-btn');
const langSelect = document.getElementById('lang-select');

let conversationHistory = [];

function getCurrentLang() {
  return LANGUAGES[langSelect.value] || LANGUAGES['en'];
}

function matchGreeting(input, langObj) {
  const lower = input.trim().toLowerCase();
  for (const g of langObj.greetings) {
    for (const q of g.q) {
      if (lower === q.toLowerCase() || lower.includes(q.toLowerCase())) {
        return g.a[Math.floor(Math.random() * g.a.length)];
      }
    }
  }
  return null;
}

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  if (!isUser) {
    messageDiv.innerHTML = `<span class='bot-avatar-inline'><svg width='28' height='28' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#4A90E2'/><ellipse cx='32' cy='40' rx='18' ry='12' fill='#fff'/><ellipse cx='24' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='40' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='32' cy='46' rx='8' ry='4' fill='#eaf6ff'/></svg></span> ${message}`;
  } else {
    messageDiv.textContent = message;
  }
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTutorial(steps) {
  const tutorialDiv = document.createElement('div');
  tutorialDiv.className = 'message bot-message';
  tutorialDiv.innerHTML = `<b>Step-by-step guide:</b><br>` + steps.map((s, i) => `${i+1}. ${s}`).join('<br>');
  chatMessages.appendChild(tutorialDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addMotivation() {
  const langObj = getCurrentLang();
  addMessage(langObj.motivation[Math.floor(Math.random() * langObj.motivation.length)]);
}

function quickAction(msg) {
  userInput.value = msg;
  sendMessage();
}

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  addMessage(message, true);
  userInput.value = '';
  conversationHistory.push({ role: "user", content: message });

  const langObj = getCurrentLang();
  const lower = message.toLowerCase();

  // Check greetings
  const greet = matchGreeting(message, langObj);
  if (greet) {
    addMessage(greet);
    addMotivation();
    conversationHistory.push({ role: "assistant", content: greet });
    return;
  }
  // Check FAQ
  if (langObj.faq[lower]) {
    addMessage(langObj.faq[lower]);
    addMotivation();
    conversationHistory.push({ role: "assistant", content: langObj.faq[lower] });
    return;
  }
  // Check Tutorials
  if (langObj.tutorials[lower]) {
    addTutorial(langObj.tutorials[lower]);
    addMotivation();
    conversationHistory.push({ role: "assistant", content: langObj.tutorials[lower].join(' ') });
    return;
  }
  // Fallback: Try Wikipedia summary in selected language
  fetchWikipediaSummary(message, langSelect.value, langObj);
}

function fetchWikipediaSummary(query, langCode, langObj) {
  // Wikipedia expects underscores instead of spaces
  const title = encodeURIComponent(query.trim().replace(/ /g, '_'));
  const url = `https://${langCode}.wikipedia.org/api/rest_v1/page/summary/${title}`;
  addMessage("<i>DigiBuddy is searching Wikipedia... 📚</i>");
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // If Wikipedia found a summary
      if (data.extract) {
        chatMessages.lastChild.innerHTML = `<span class='bot-avatar-inline'><svg width='28' height='28' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#4A90E2'/><ellipse cx='32' cy='40' rx='18' ry='12' fill='#fff'/><ellipse cx='24' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='40' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='32' cy='46' rx='8' ry='4' fill='#eaf6ff'/></svg></span> <b>${data.title}</b><br>${data.extract}<br>${data.content_urls && data.content_urls.desktop ? `<a href='${data.content_urls.desktop.page}' target='_blank'>Read more on Wikipedia</a>` : ''}`;
        addMotivation();
        conversationHistory.push({ role: "assistant", content: data.extract });
      } else {
        // No Wikipedia summary found
        chatMessages.lastChild.innerHTML = `<span class='bot-avatar-inline'><svg width='28' height='28' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#4A90E2'/><ellipse cx='32' cy='40' rx='18' ry='12' fill='#fff'/><ellipse cx='24' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='40' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='32' cy='46' rx='8' ry='4' fill='#eaf6ff'/></svg></span> ${langObj.fallback[Math.floor(Math.random() * langObj.fallback.length)]}`;
        addMotivation();
        conversationHistory.push({ role: "assistant", content: langObj.fallback[0] });
      }
    })
    .catch(() => {
      chatMessages.lastChild.innerHTML = `<span class='bot-avatar-inline'><svg width='28' height='28' viewBox='0 0 64 64'><circle cx='32' cy='32' r='32' fill='#4A90E2'/><ellipse cx='32' cy='40' rx='18' ry='12' fill='#fff'/><ellipse cx='24' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='40' cy='32' rx='4' ry='6' fill='#222'/><ellipse cx='32' cy='46' rx='8' ry='4' fill='#eaf6ff'/></svg></span> ${langObj.fallback[Math.floor(Math.random() * langObj.fallback.length)]}`;
      addMotivation();
      conversationHistory.push({ role: "assistant", content: langObj.fallback[0] });
    });
}

// --- Voice Input ---
let recognition = null;
let isListening = false;
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
voiceBtn.onclick = function() {
  if (!recognition) {
    alert('Speech recognition is not supported in your browser.');
    return;
  }
  // Set recognition language to match selected language
  const langCode = langSelect.value;
  recognition.lang = langCode;
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
    isListening = true;
    voiceBtn.classList.add('listening');
  }
};
userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); }); 