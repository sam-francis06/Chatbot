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
    "section": "66",
    "law": "Computer-Related Offenses",
    "keywords": ["hacking", "data theft", "malware", "fraud"],
    "description": "Dishonestly or fraudulently performing acts under Section 43, such as hacking, data theft, or introducing malware with intent to cause damage.",
    "penalty": "Up to 3 years imprisonment or fine up to ₹5 lakh, or both",
    "example": "Introducing ransomware into a hospital's system to extort money.",
    "recommendations": [
      "Use endpoint protection software",
      "Regularly back up critical data",
      "Train employees on cybersecurity awareness"
    ],
    "severity": "high"
  },
  {
    "section": "66A",
    "law": "Sending Offensive Messages (Struck Down)",
    "keywords": ["offensive", "social media", "communication"],
    "description": "Sending offensive or menacing messages via communication services. (Note: Struck down by Supreme Court in 2015 as unconstitutional, but similar offenses may be prosecuted under other laws.)",
    "penalty": "Not applicable (provision struck down)",
    "example": "Posting defamatory content on social media (now covered under other laws like BNS).",
    "recommendations": [
      "Avoid sharing harmful or false content online",
      "Report abusive content to platform moderators",
      "Understand platform content policies"
    ],
    "severity": "not applicable"
  },
  {
    "section": "66B",
    "law": "Dishonestly Receiving Stolen Computer Resource",
    "keywords": ["stolen", "data", "device", "fraud"],
    "description": "Dishonestly receiving or retaining stolen computer resources or communication devices.",
    "penalty": "Up to 3 years imprisonment or fine up to ₹1 lakh, or both",
    "example": "Using a stolen laptop containing proprietary software for personal gain.",
    "recommendations": [
      "Verify the source of second-hand devices",
      "Use secure channels for data transfer",
      "Report suspected stolen devices"
    ],
    "severity": "medium"
  },
  {
    "section": "66C",
    "law": "Identity Theft",
    "keywords": ["identity theft", "password", "digital signature"],
    "description": "Fraudulently or dishonestly using another person's electronic signature, password, or other unique identification feature.",
    "penalty": "Up to 3 years imprisonment and fine up to ₹1 lakh",
    "example": "Using someone else's email credentials to access their bank account.",
    "recommendations": [
      "Enable two-factor authentication",
      "Never share login credentials",
      "Monitor account activity regularly"
    ],
    "severity": "high"
  },
  {
    "section": "66D",
    "law": "Cheating by Personation Using Computer Resource",
    "keywords": ["phishing", "impersonation", "fraud"],
    "description": "Cheating by pretending to be another person using a computer resource, such as phishing attacks.",
    "penalty": "Up to 3 years imprisonment and fine up to ₹1 lakh",
    "example": "Sending phishing emails posing as a bank to steal login details.",
    "recommendations": [
      "Verify email sender authenticity",
      "Avoid clicking suspicious links",
      "Use email filtering tools"
    ],
    "severity": "high"
  },
  {
    "section": "66E",
    "law": "Violation of Privacy",
    "keywords": ["privacy", "images", "explicit", "non-consensual"],
    "description": "Intentionally capturing, publishing, or transmitting images of a person's private areas without consent.",
    "penalty": "Up to 3 years imprisonment or fine up to ₹2 lakh, or both",
    "example": "Sharing intimate images of an individual without their consent.",
    "recommendations": [
      "Obtain explicit consent before sharing images",
      "Secure personal devices with passwords",
      "Report non-consensual content to authorities"
    ],
    "severity": "high"
  },
  {
    "section": "66F",
    "law": "Cyber Terrorism",
    "keywords": ["cyberterrorism", "national security", "critical infrastructure"],
    "description": "Acts intended to threaten India's unity, integrity, or security, including unauthorized access to critical infrastructure or causing widespread panic.",
    "penalty": "Imprisonment up to life",
    "example": "Hacking into a government database to disrupt critical services.",
    "recommendations": [
      "Secure critical infrastructure with robust cybersecurity",
      "Conduct regular threat assessments",
      "Collaborate with CERT-In for incident response"
    ],
    "severity": "critical"
  },
  {
    "section": "67",
    "law": "Publishing Obscene Material",
    "keywords": ["obscene", "explicit", "electronic"],
    "description": "Publishing or transmitting obscene material in electronic form.",
    "penalty": "Up to 3 years imprisonment and fine up to ₹5 lakh (first offense); up to 5 years and ₹10 lakh for subsequent offenses",
    "example": "Sharing pornographic content on a public website.",
    "recommendations": [
      "Adhere to platform content guidelines",
      "Use content moderation tools",
      "Report obscene content to authorities"
    ],
    "severity": "high"
  },
  {
    "section": "67A",
    "law": "Publishing Sexually Explicit Material",
    "keywords": ["explicit", "sexual", "content"],
    "description": "Publishing or transmitting material containing sexually explicit acts in electronic form.",
    "penalty": "Up to 5 years imprisonment and fine up to ₹10 lakh (first offense); up to 7 years and ₹10 lakh for subsequent offenses",
    "example": "Distributing explicit videos on social media.",
    "recommendations": [
      "Implement strict content filtering",
      "Educate users on legal consequences",
      "Report violations to cybercrime cells"
    ],
    "severity": "high"
  },
  {
    "section": "67B",
    "law": "Child Pornography",
    "keywords": ["child", "explicit", "abuse", "content"],
    "description": "Publishing, transmitting, or depicting children in sexually explicit acts in electronic form.",
    "penalty": "Up to 5 years imprisonment and fine up to ₹10 lakh (first offense); up to 7 years and ₹10 lakh for subsequent offenses",
    "example": "Sharing child sexual abuse material online.",
    "recommendations": [
      "Report such content to NCPCR or cybercrime cells",
      "Use child safety filters on platforms",
      "Educate children on online safety"
    ],
    "severity": "critical"
  },
  {
    "section": "67C",
    "law": "Failure to Preserve Information by Intermediaries",
    "keywords": ["intermediary", "data retention", "compliance"],
    "description": "Intermediaries failing to preserve and retain information as prescribed by the government.",
    "penalty": "Up to 3 years imprisonment and fine",
    "example": "A social media platform failing to retain user data for investigation.",
    "recommendations": [
      "Implement data retention policies",
      "Comply with government directives",
      "Maintain audit logs"
    ],
    "severity": "medium"
  },
  {
    "section": "69",
    "law": "Interception or Monitoring of Information",
    "keywords": ["interception", "monitoring", "national security"],
    "description": "Government-authorized interception, monitoring, or decryption of information for national security or public order.",
    "penalty": "Up to 7 years imprisonment and fine for non-compliance",
    "example": "A telecom company refusing to decrypt data for a national security investigation.",
    "recommendations": [
      "Cooperate with authorized government agencies",
      "Implement secure data handling protocols",
      "Ensure compliance with legal requests"
    ],
    "severity": "high"
  },
  {
    "section": "69A",
    "law": "Blocking of Online Content",
    "keywords": ["content blocking", "public order", "sovereignty"],
    "description": "Government directive to block online content threatening sovereignty, security, or public order.",
    "penalty": "Up to 7 years imprisonment and fine for non-compliance",
    "example": "A website hosting content inciting violence being blocked.",
    "recommendations": [
      "Comply with government blocking orders",
      "Monitor content for compliance",
      "Engage legal counsel for content disputes"
    ],
    "severity": "high"
  },
  {
    "section": "69B",
    "law": "Monitoring and Collecting Traffic Data",
    "keywords": ["traffic data", "monitoring", "cybersecurity"],
    "description": "Government-authorized monitoring and collection of traffic data to enhance cybersecurity.",
    "penalty": "Up to 3 years imprisonment and fine for non-compliance",
    "example": "An ISP failing to provide traffic data for a cybercrime investigation.",
    "recommendations": [
      "Maintain traffic data logs",
      "Cooperate with CERT-In",
      "Ensure data privacy during monitoring"
    ],
    "severity": "medium"
  },
  {
    "section": "70",
    "law": "Protected Systems",
    "keywords": ["critical infrastructure", "protected system", "security"],
    "description": "Unauthorized access to systems declared as protected by the government.",
    "penalty": "Up to 7 years imprisonment and fine",
    "example": "Hacking into a nuclear facility's control system.",
    "recommendations": [
      "Secure critical systems with advanced protocols",
      "Conduct regular vulnerability assessments",
      "Restrict access to authorized personnel"
    ],
    "severity": "critical"
  },
  {
    "section": "70B",
    "law": "Indian Computer Emergency Response Team (CERT-In)",
    "keywords": ["CERT-In", "cybersecurity", "incident response"],
    "description": "Mandates CERT-In to handle cybersecurity incidents and issue guidelines.",
    "penalty": "Up to 1 year imprisonment or fine up to ₹1 lakh for non-compliance",
    "example": "Failing to report a cybersecurity incident to CERT-In.",
    "recommendations": [
      "Report incidents to CERT-In promptly",
      "Follow CERT-In guidelines",
      "Participate in cybersecurity drills"
    ],
    "severity": "medium"
  },
  {
    "section": "71",
    "law": "Misrepresentation for Digital Signature",
    "keywords": ["digital signature", "misrepresentation", "fraud"],
    "description": "Making false statements to obtain a digital signature certificate.",
    "penalty": "Up to 2 years imprisonment or fine up to ₹1 lakh, or both",
    "example": "Providing fake documents to obtain a digital signature.",
    "recommendations": [
      "Verify identity documents",
      "Use trusted certification authorities",
      "Monitor digital signature usage"
    ],
    "severity": "medium"
  },
  {
    "section": "72",
    "law": "Breach of Confidentiality",
    "keywords": ["confidentiality", "data breach", "privacy"],
    "description": "Unauthorized disclosure of information obtained under the IT Act.",
    "penalty": "Up to 2 years imprisonment or fine up to ₹1 lakh, or both",
    "example": "A government official leaking sensitive data accessed during an investigation.",
    "recommendations": [
      "Implement strict access controls",
      "Sign NDAs for sensitive roles",
      "Conduct regular training on confidentiality"
    ],
    "severity": "high"
  },
  {
    "section": "72A",
    "law": "Disclosure of Information in Breach of Contract",
    "keywords": ["data breach", "contract", "privacy"],
    "description": "Disclosing personal information without consent in breach of a lawful contract.",
    "penalty": "Up to 3 years imprisonment or fine up to ₹5 lakh, or both",
    "example": "A service provider sharing client data with a third party without permission.",
    "recommendations": [
      "Include data protection clauses in contracts",
      "Use encrypted communication channels",
      "Audit third-party data access"
    ],
    "severity": "high"
  },
  {
    "section": "73",
    "law": "Publishing False Digital Signature Certificates",
    "keywords": ["digital signature", "false certificate", "fraud"],
    "description": "Publishing or making available a digital signature certificate known to be false.",
    "penalty": "Up to 2 years imprisonment or fine up to ₹1 lakh, or both",
    "example": "Issuing a fake digital signature certificate to mislead users.",
    "recommendations": [
      "Verify certificate authenticity",
      "Use trusted certifying authorities",
      "Report suspicious certificates"
    ],
    "severity": "medium"
  },
  {
    "section": "74",
    "law": "Creating Fraudulent Digital Signatures",
    "keywords": ["digital signature", "fraud", "forgery"],
    "description": "Creating or publishing digital signature certificates for fraudulent or unlawful purposes.",
    "penalty": "Up to 2 years imprisonment or fine up to ₹1 lakh, or both",
    "example": "Forging a digital signature to authenticate a fake document.",
    "recommendations": [
      "Secure digital signature keys",
      "Monitor certificate issuance",
      "Use secure authentication protocols"
    ],
    "severity": "medium"
  },
  {
    "section": "75",
    "law": "Offenses Outside India",
    "keywords": ["extraterritorial", "cybercrime", "jurisdiction"],
    "description": "Applies IT Act to offenses committed outside India targeting computers or networks in India.",
    "penalty": "As per relevant section of the IT Act",
    "example": "A hacker in another country targeting an Indian bank’s servers.",
    "recommendations": [
      "Implement cross-border cybersecurity measures",
      "Collaborate with international law enforcement",
      "Secure international data transfers"
    ],
    "severity": "high"
  },
  {
    "section": "DPDPA 5",
    "law": "Data Processing with Consent",
    "keywords": ["data protection", "consent", "privacy"],
    "description": "Data fiduciaries must obtain explicit consent from data principals for processing personal data.",
    "penalty": "Fine up to ₹250 crore",
    "example": "A company collecting user data without clear consent.",
    "recommendations": [
      "Implement clear consent mechanisms",
      "Provide opt-out options",
      "Maintain consent records"
    ],
    "severity": "high"
  },
  {
    "section": "DPDPA 6",
    "law": "Purpose Limitation for Data Processing",
    "keywords": ["data purpose", "privacy", "compliance"],
    "description": "Personal data must be processed only for the purpose for which it was collected.",
    "penalty": "Fine up to ₹200 crore",
    "example": "Using customer data for marketing without specifying this purpose.",
    "recommendations": [
      "Clearly state data usage purposes",
      "Limit data use to agreed purposes",
      "Audit data processing activities"
    ],
    "severity": "medium"
  },
  {
    "section": "DPDPA 8",
    "law": "Data Principal Rights",
    "keywords": ["data rights", "access", "erasure"],
    "description": "Data principals have the right to access, correct, or erase their personal data.",
    "penalty": "Fine up to ₹150 crore",
    "example": "Denying a user’s request to delete their personal data.",
    "recommendations": [
      "Provide user-friendly data access portals",
      "Implement data correction mechanisms",
      "Ensure timely response to data requests"
    ],
    "severity": "medium"
  },
  {
    "section": "DPDPA 9",
    "law": "Data Breach Notification",
    "keywords": ["data breach", "notification", "compliance"],
    "description": "Data fiduciaries must notify the Data Protection Board and affected individuals of data breaches.",
    "penalty": "Fine up to ₹250 crore",
    "example": "Failing to report a data breach exposing customer data.",
    "recommendations": [
      "Develop incident response plans",
      "Notify authorities promptly",
      "Inform affected users transparently"
    ],
    "severity": "high"
  },
  {
    "section": "DPDPA 10",
    "law": "Cross-Border Data Transfer",
    "keywords": ["data transfer", "international", "privacy"],
    "description": "Personal data can be transferred outside India except to restricted countries notified by the government.",
    "penalty": "Fine up to ₹200 crore",
    "example": "Transferring user data to a restricted country without approval.",
    "recommendations": [
      "Verify compliance with data transfer rules",
      "Use secure data transfer protocols",
      "Monitor restricted country lists"
    ],
    "severity": "medium"
  },
  {
    "section": "BNS 317",
    "law": "Cheating",
    "keywords": ["cheating", "fraud", "deception"],
    "description": "Dishonestly inducing someone to deliver property or alter valuable security, applicable to cyber frauds.",
    "penalty": "Up to 7 years imprisonment and fine",
    "example": "Tricking someone into transferring money via a fake website.",
    "recommendations": [
      "Verify website authenticity",
      "Avoid sharing financial details online",
      "Report suspicious activities"
    ],
    "severity": "high"
  },
  {
    "section": "BNS 318",
    "law": "Cheating by Personation",
    "keywords": ["impersonation", "fraud", "identity"],
    "description": "Pretending to be another person to deceive and cheat, applicable to online impersonation.",
    "penalty": "Up to 3 years imprisonment or fine, or both",
    "example": "Impersonating a CEO in an email to authorize a fraudulent payment.",
    "recommendations": [
      "Use email verification tools",
      "Train employees on phishing detection",
      "Report impersonation to authorities"
    ],
    "severity": "high"
  },
  {
    "section": "BNS 355",
    "law": "Criminal Defamation",
    "keywords": ["defamation", "reputation", "online"],
    "description": "Publishing content to harm someone’s reputation, applicable to online defamation.",
    "penalty": "Up to 2 years imprisonment or fine, or both",
    "example": "Posting false defamatory statements on social media.",
    "recommendations": [
      "Verify information before posting",
      "Avoid harmful content",
      "Seek legal advice for disputes"
    ],
    "severity": "medium"
  },
  {
    "section": "BNS 349",
    "law": "Criminal Intimidation",
    "keywords": ["threat", "intimidation", "online"],
    "description": "Threatening someone with injury to their person, reputation, or property, applicable to cyber threats.",
    "penalty": "Up to 2 years imprisonment or fine, or both",
    "example": "Sending threatening emails to extort money.",
    "recommendations": [
      "Report threats to cybercrime cells",
      "Block suspicious contacts",
      "Use secure communication platforms"
    ],
    "severity": "high"
  },
  {
    "section": "SPDI Rules 3",
    "law": "Sensitive Personal Data Definition",
    "keywords": ["sensitive data", "privacy", "compliance"],
    "description": "Defines sensitive personal data, including passwords, financial information, and health data.",
    "penalty": "Compensation under Section 43A",
    "example": "A company collecting health data without proper safeguards.",
    "recommendations": [
      "Classify data as sensitive",
      "Implement encryption",
      "Comply with SPDI Rules"
    ],
    "severity": "medium"
  },
  {
    "section": "SPDI Rules 5",
    "law": "Data Collection Consent",
    "keywords": ["consent", "data collection", "privacy"],
    "description": "Requires explicit consent for collecting sensitive personal data.",
    "penalty": "Compensation under Section 43A",
    "example": "Collecting financial data without user consent.",
    "recommendations": [
      "Use clear consent forms",
      "Allow opt-out options",
      "Document consent"
    ],
    "severity": "medium"
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
