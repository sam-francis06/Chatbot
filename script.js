const laws = [
  {
    section: "66C",
    law: "Identity Theft",
    keywords: ["hacked", "identity", "impersonation", "aadhar", "pan"],
    description: "Unauthorized use or misappropriation of another person's digital identity or authentication credentials.",
    penalty: "Imprisonment up to 3 years with fine up to ₹1 lakh",
    example: "Fraudulently using another person's digital identity (Aadhaar, PAN) for financial transactions or account creation.",
    recommendations: [
      "Enable two-factor authentication on all accounts",
      "Regularly monitor your credit reports",
      "Never share OTPs or passwords"
    ],
    severity: "high"
  },
  {
    section: "66D",
    law: "Cheating by Personation",
    keywords: ["fraud", "scam", "fake", "impersonate", "phishing"],
    description: "Digital impersonation through any communication device or computer resource to commit fraud.",
    penalty: "Imprisonment up to 3 years with fine up to ₹1 lakh",
    example: "Creating fraudulent banking websites or applications to deceive users and steal credentials.",
    recommendations: [
      "Verify website authenticity before entering credentials",
      "Check for secure HTTPS connections",
      "Be cautious of unsolicited communications"
    ],
    severity: "high"
  },
  {
    section: "67",
    law: "Transmission of Obscene Material",
    keywords: ["obscene", "nude", "porn", "explicit", "leaked"],
    description: "Publishing or transmitting obscene material in electronic form.",
    penalty: "First conviction: Up to 3 years with fine up to ₹5 lakh\nSecond conviction: Up to 5 years with fine up to ₹10 lakh",
    example: "Non-consensual sharing of private images or explicit content electronically.",
    recommendations: [
      "Report content immediately to cybercrime authorities",
      "Preserve evidence through screenshots",
      "Block and report malicious accounts"
    ],
    severity: "critical"
  },
  {
    section: "43A",
    law: "Negligent Handling of Sensitive Data",
    keywords: ["data leak", "privacy", "security", "company", "breach"],
    description: "Corporate negligence in implementing reasonable security practices to protect sensitive personal data.",
    penalty: "Compensation to affected individuals as determined by adjudicating officer",
    example: "Company failing to encrypt user data leading to unauthorized access.",
    recommendations: [
      "Regular security audits",
      "Implementation of data protection policies",
      "Prompt breach notification to affected users"
    ],
    severity: "medium"
  }
];

// Add welcome message when the page loads
window.onload = () => {
  document.getElementById('userInput').focus();
  setTimeout(() => {
    addMessage("👋 Welcome to your Cyber Law Assistant! I'm here to help you understand your digital rights and protections.", 'bot-message');
    setTimeout(() => {
      addMessage("Feel free to ask about any cyber law concerns, or use the quick action buttons below for common issues.", 'bot-message');
    }, 1000);
  }, 500);
};

let isListening = false;

document.getElementById('userInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') handleInput();
});

function clearChat() {
  const chatbox = document.getElementById('chatbox');
  const welcomeMessages = Array.from(chatbox.children).slice(0, 2);
  chatbox.innerHTML = '';
  welcomeMessages.forEach(msg => {
    msg.style.animation = 'messageSlide 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    chatbox.appendChild(msg);
  });
}

function sendQuickMessage(text) {
  document.getElementById('userInput').value = text;
  handleInput();
}

function handleInput() {
  const inputElem = document.getElementById('userInput');
  const input = inputElem.value.trim();
  if (!input) return;
  
  inputElem.disabled = true;
  addMessage(input, 'user-message');
  inputElem.value = "";
  
  const typingIndicator = addMessage('<div class="typing-indicator"><span></span><span></span><span></span></div>', 'bot-message');
  
  setTimeout(() => {
    typingIndicator.remove();
    
    const match = laws.find(law =>
      law.keywords.some(keyword => input.toLowerCase().includes(keyword))
    );
    
    if (match) {
      const severityColor = getSeverityColor(match.severity);
      const reply = `
        <div class="law-response">
          <div class="law-header">
            <span class="law-section">Section ${match.section}</span>
            <span class="law-title">${match.law}</span>
          </div>
          
          <div class="severity-indicator" style="color:${severityColor}">
            ⚠️ Severity Level: ${match.severity.toUpperCase()}
          </div>
          
          <div class="law-details">
            <p><strong>📋 Overview:</strong> ${match.description}</p>
            <p><strong>⚖️ Legal Consequences:</strong> ${match.penalty}</p>
            <p><strong>💡 Real-world Example:</strong> ${match.example}</p>
          </div>
          
          <div class="recommendations">
            <p><strong>🛡️ Protective Measures:</strong></p>
            <ul>
              ${match.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
          </div>
          
          <div class="action-required">
            <p>🔴 If you're a victim, report immediately at:</p>
            <a href="https://cybercrime.gov.in" target="_blank" class="report-link">National Cyber Crime Reporting Portal</a>
          </div>
        </div>
      `;
      addMessage(reply, 'bot-message');
      
      setTimeout(() => {
        addMessage("Would you like to know about preventive measures or related cyber laws?", 'bot-message');
      }, 1000);
    } else {
      addMessage(`I apologize, but I couldn't find specific laws matching your query. Could you please provide more details about your cyber law concern?`, 'bot-message');
      
      setTimeout(() => {
        addMessage("You can ask about common issues like identity theft, online fraud, data privacy, or cyberbullying. I'm here to help!", 'bot-message');
      }, 1000);
    }
    
    inputElem.disabled = false;
    inputElem.focus();
  }, 1500);
}

function getSeverityColor(severity) {
  const colors = {
    low: '#15803d',
    medium: '#a16207',
    high: '#b91c1c',
    critical: '#7f1d1d'
  };
  return colors[severity] || colors.medium;
}

function addMessage(text, className) {
  const chatbox = document.getElementById('chatbox');
  const message = document.createElement('div');
  message.className = `message ${className}`;
  
  const icon = document.createElement('div');
  icon.className = 'message-icon';
  icon.innerHTML = className === 'user-message' ? 
    '<i class="fas fa-user"></i>' : 
    '<i class="fas fa-user-shield"></i>';
  
  const content = document.createElement('div');
  content.className = 'message-content';
  content.innerHTML = text;
  
  message.appendChild(icon);
  message.appendChild(content);
  
  chatbox.appendChild(message);
  chatbox.scrollTop = chatbox.scrollHeight;
  return message;
}

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = false;
recognition.interimResults = false;

recognition.onstart = () => {
  isListening = true;
  document.querySelector('.voice-button').classList.add('listening');
  addMessage('Listening... Speak now.', 'bot-message');
};

recognition.onend = () => {
  isListening = false;
  document.querySelector('.voice-button').classList.remove('listening');
};

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById('userInput').value = transcript;
  handleInput();
};

recognition.onerror = (event) => {
  console.error('Speech recognition error:', event.error);
  addMessage('Sorry, I couldn\'t understand that. Please try again or type your message.', 'bot-message');
  isListening = false;
  document.querySelector('.voice-button').classList.remove('listening');
};

function startVoiceInput() {
  if (isListening) {
    recognition.stop();
  } else {
    recognition.start();
  }
}
