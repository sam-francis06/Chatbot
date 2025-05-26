const laws = [
  {
    "section": "43",
    "law": "Unauthorized Access to Computer Systems",
    "keywords": ["hacking", "unauthorized", "access", "damage", "virus"],
    "description": "Accessing or securing access to a computer, computer system, or network without the owner's permission, including downloading data, introducing viruses, or causing denial of access.",
    "penalty": "Compensation up to ₹1 crore to the affected party",
    "example": "Hacking into a company's server to download sensitive customer data without authorization.",
    "recommendations": [
      "Use strong, unique passwords and change them regularly",
      "Install and update antivirus software",
      "Enable firewalls and intrusion detection systems"
    ],
    "severity": "high"
  },
  {
    "section": "43A",
    "law": "Negligent Handling of Sensitive Data",
    "keywords": ["data leak", "privacy", "security", "company", "breach"],
    "description": "Corporate negligence in implementing reasonable security practices to protect sensitive personal data.",
    "penalty": "Compensation to affected individuals as determined by adjudicating officer",
    "example": "A company failing to encrypt user data, leading to a data breach exposing personal information.",
    "recommendations": [
      "Conduct regular security audits",
      "Implement data protection policies compliant with SPDI Rules, 2011",
      "Notify affected users promptly in case of a breach"
    ],
    "severity": "medium"
  },
  {
    "section": "65",
    "law": "Tampering with Computer Source Documents",
    "keywords": ["source code", "tampering", "destroy", "alter", "conceal"],
    "description": "Knowingly or intentionally concealing, destroying, or altering computer source code required to be maintained by law.",
    "penalty": "Imprisonment up to 3 years or fine up to ₹2 lakh or both",
    "example": "An employee altering a telecom company's source code to bypass security protocols.",
    "recommendations": [
      "Restrict access to source code with role-based permissions",
      "Maintain secure backups of critical code",
      "Implement version control systems"
    ],
    "severity": "high"
  },
  {
    "section": "66",
    "law": "Computer-Related Offences",
    "keywords": ["hacking", "fraud", "malware", "damage", "disruption"],
    "description": "Dishonestly or fraudulently committing acts such as hacking, introducing malware, or causing damage to computer systems.",
    "penalty": "Imprisonment up to 3 years or fine up to ₹5 lakh or both",
    "example": "Introducing ransomware to lock a company's data and demand payment.",
    "recommendations": [
      "Use reputable antivirus and anti-malware software",
      "Regularly update software to patch vulnerabilities",
      "Train employees on recognizing phishing attempts"
    ],
    "severity": "high"
  },
  {
    "section": "66B",
    "law": "Receiving Stolen Computer Resources",
    "keywords": ["stolen", "device", "computer", "fraud", "theft"],
    "description": "Dishonestly receiving or retaining stolen computer resources or communication devices.",
    "penalty": "Imprisonment up to 3 years or fine up to ₹1 lakh or both",
    "example": "Using a stolen laptop to access restricted networks or data.",
    "recommendations": [
      "Verify the source of second-hand electronic devices",
      "Report suspicious devices to authorities",
      "Use device tracking software"
    ],
    "severity": "medium"
  },
  {
    "section": "66C",
    "law": "Identity Theft",
    "keywords": ["hacked", "identity", "impersonation", "aadhar", "pan"],
    "description": "Unauthorized use or misappropriation of another person's digital identity or authentication credentials.",
    "penalty": "Imprisonment up to 3 years with fine up to ₹1 lakh",
    "example": "Fraudulently using another person's Aadhaar or PAN details for financial transactions.",
    "recommendations": [
      "Enable two-factor authentication on all accounts",
      "Regularly monitor credit reports for unauthorized activity",
      "Never share OTPs or passwords"
    ],
    "severity": "high"
  },
  {
    "section": "66D",
    "law": "Cheating by Personation",
    "keywords": ["fraud", "scam", "fake", "impersonate", "phishing"],
    "description": "Digital impersonation through any communication device or computer resource to commit fraud.",
    "penalty": "Imprisonment up to 3 years with fine up to ₹1 lakh",
    "example": "Creating a fake banking website to steal user credentials.",
    "recommendations": [
      "Verify website authenticity before entering credentials",
      "Check for secure HTTPS connections",
      "Be cautious of unsolicited communications"
    ],
    "severity": "high"
  },
  {
    "section": "66E",
    "law": "Violation of Privacy",
    "keywords": ["privacy", "images", "non-consensual", "voyeurism", "leak"],
    "description": "Capturing, publishing, or transmitting images of a person's private areas without their consent.",
    "penalty": "Imprisonment up to 3 years or fine up to ₹2 lakh or both",
    "example": "Sharing intimate images of an individual without their consent on social media.",
    "recommendations": [
      "Avoid sharing sensitive images online",
      "Use encrypted communication channels",
      "Report violations to cybercrime authorities immediately"
    ],
    "severity": "critical"
  },
  {
    "section": "66F",
    "law": "Cyber Terrorism",
    "keywords": ["terrorism", "national security", "threat", "disruption", "attack"],
    "description": "Acts intended to threaten the unity, integrity, security, or sovereignty of India through computer resources.",
    "penalty": "Imprisonment up to life",
    "example": "Sending threat emails to critical infrastructure like stock exchanges to cause panic.",
    "recommendations": [
      "Report suspicious communications to CERT-In",
      "Strengthen cybersecurity for critical infrastructure",
      "Cooperate with law enforcement for threat intelligence"
    ],
    "severity": "critical"
  },
  {
    "section": "67",
    "law": "Transmission of Obscene Material",
    "keywords": ["obscene", "nude", "porn", "explicit", "leaked"],
    "description": "Publishing or transmitting obscene material in electronic form that appeals to prurient interest or corrupts viewers.",
    "penalty": "First conviction: Up to 3 years with fine up to ₹5 lakh\nSecond conviction: Up to 5 years with fine up to ₹10 lakh",
    "example": "Non-consensual sharing of explicit content via messaging apps.",
    "recommendations": [
      "Report obscene content to cybercrime authorities",
      "Preserve evidence through screenshots",
      "Block and report malicious accounts"
    ],
    "severity": "critical"
  },
  {
    "section": "67A",
    "law": "Transmission of Sexually Explicit Material",
    "keywords": ["explicit", "sexual", "pornography", "transmission", "content"],
    "description": "Publishing or transmitting material containing sexually explicit acts in electronic form.",
    "penalty": "First conviction: Up to 5 years with fine up to ₹10 lakh\nSecond conviction: Up to 7 years with fine up to ₹10 lakh",
    "example": "Distributing pornographic videos through social media platforms.",
    "recommendations": [
      "Avoid sharing or accessing explicit content",
      "Use content filtering tools",
      "Report illegal content to authorities"
    ],
    "severity": "critical"
  },
  {
    "section": "67B",
    "law": "Child Pornography",
    "keywords": ["child", "pornography", "explicit", "abuse", "online"],
    "description": "Publishing, transmitting, or depicting children in sexually explicit acts in electronic form.",
    "penalty": "First conviction: Up to 5 years with fine up to ₹10 lakh\nSecond conviction: Up to 7 years with fine up to ₹10 lakh",
    "example": "Sharing images or videos depicting minors in explicit content online.",
    "recommendations": [
      "Report suspected content to cybercrime cells immediately",
      "Use parental control software",
      "Educate children about online safety"
    ],
    "severity": "critical"
  },
  {
    "section": "69",
    "law": "Interception or Monitoring",
    "keywords": ["intercept", "monitor", "decrypt", "security", "government"],
    "description": "Government-authorized interception, monitoring, or decryption of information for national security or public order.",
    "penalty": "Imprisonment up to 7 years and fine",
    "example": "Non-compliance by intermediaries in assisting government decryption efforts.",
    "recommendations": [
      "Comply with government directives on data access",
      "Implement secure data handling practices",
      "Consult legal experts for compliance"
    ],
    "severity": "high"
  },
  {
    "section": "72",
    "law": "Breach of Confidentiality and Privacy",
    "keywords": ["privacy", "data", "disclosure", "confidentiality", "breach"],
    "description": "Unauthorized disclosure of personal information obtained in the course of official duties.",
    "penalty": "Imprisonment up to 2 years or fine up to ₹1 lakh or both",
    "example": "A government official leaking personal data obtained during KYC verification.",
    "recommendations": [
      "Implement strict access controls for sensitive data",
      "Train employees on data confidentiality",
      "Encrypt personal data during storage and transmission"
    ],
    "severity": "medium"
  },
  {
    "section": "72A",
    "law": "Disclosure of Personal Information",
    "keywords": ["data", "disclosure", "privacy", "breach", "consent"],
    "description": "Disclosing personal information without consent, causing wrongful loss or gain.",
    "penalty": "Imprisonment up to 3 years or fine up to ₹5 lakh or both",
    "example": "An employee sharing customer data with a third party without consent for profit.",
    "recommendations": [
      "Obtain explicit consent for data sharing",
      "Implement data anonymization techniques",
      "Conduct regular privacy training"
    ],
    "severity": "high"
  },
  {
    "section": "354C",
    "law": "Voyeurism",
    "keywords": ["voyeurism", "privacy", "images", "non-consensual", "women"],
    "description": "Capturing or disseminating images of a woman engaged in a private act without her consent.",
    "penalty": "First conviction: 1-3 years imprisonment\nSecond conviction: 2-7 years imprisonment with fine",
    "example": "Recording a woman in a private setting and sharing the footage online.",
    "recommendations": [
      "Respect privacy and obtain consent for recordings",
      "Report violations to authorities promptly",
      "Use secure devices to prevent unauthorized access"
    ],
    "severity": "critical",
    "source": "IPC"
  },
  {
    "section": "354D",
    "law": "Cyber Stalking",
    "keywords": ["stalking", "cyberstalking", "harassment", "monitoring", "women"],
    "description": "Monitoring or contacting a woman online repeatedly despite her disinterest, causing harassment.",
    "penalty": "First conviction: Up to 3 years imprisonment with fine\nSecond conviction: Up to 5 years imprisonment with fine",
    "example": "Repeatedly sending unwanted messages or tracking a woman's online activity.",
    "recommendations": [
      "Block and report stalkers on platforms",
      "Limit personal information shared online",
      "Report cyberstalking to cybercrime cells"
    ],
    "severity": "high",
    "source": "IPC"
  },
  {
    "section": "379",
    "law": "Theft of Digital Assets",
    "keywords": ["theft", "data", "device", "stolen", "electronic"],
    "description": "Stealing digital assets, including data or devices, through electronic means.",
    "penalty": "Imprisonment up to 3 years or fine or both",
    "example": "Stealing a mobile phone and accessing its data for fraudulent purposes.",
    "recommendations": [
      "Use device encryption and remote wipe features",
      "Track devices using software",
      "Report theft to police immediately"
    ],
    "severity": "medium",
    "source": "IPC"
  },
  {
    "section": "420",
    "law": "Cheating and Dishonest Inducement",
    "keywords": ["fraud", "cheating", "deception", "scam", "bogus"],
    "description": "Cheating and dishonestly inducing delivery of property or data through electronic means.",
    "penalty": "Imprisonment up to 7 years and fine",
    "example": "Creating a fake website to trick users into transferring money.",
    "recommendations": [
      "Verify the authenticity of websites and sellers",
      "Avoid clicking on suspicious links",
      "Report fraud to cybercrime authorities"
    ],
    "severity": "high",
    "source": "IPC"
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
