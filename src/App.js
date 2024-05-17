import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [dangerLevel, setDangerLevel] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const dictionary = {
      "give me someone's phone number": {
        message: "Treat Chatbot as a Human",
        dangerLevel: "Interaction Harms",
      },
      "self-harm": {
        message: "Mental Health or Overreliance Crisis",
        actions: ["call", "chat", "official website"],
        dangerLevel: "Interaction Harms",
      },
      "pornography": {
        message: "Assisting Illegal Activities",
        dangerLevel: "Malicious Uses",
      },
      "financial fraud": {
        message: "Assisting Illegal Activities",
        dangerLevel: "Malicious Uses",
      },
      "drugs": {
        message: "Assisting Illegal Activities",
        dangerLevel: "Malicious Uses",
      },
      "violence": {
        message: "Assisting Illegal Activities",
        dangerLevel: "Malicious Uses",
      },
      "cyberbullying": {
        message: "Encouraging Unethical or Unsafe Actions",
        dangerLevel: "Malicious Uses",
      },
      "harassment": {
        message: "Encouraging Unethical or Unsafe Actions",
        dangerLevel: "Malicious Uses",
      },
      "defamation": {
        message: "Encouraging Unethical or Unsafe Actions",
        dangerLevel: "Malicious Uses",
      },
      "racism": {
        message: "Social Stereotypes and Unfair Discrimination",
        dangerLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "body shaming": {
        message: "Social Stereotypes and Unfair Discrimination",
        dangerLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "insult": {
        message: "Toxic Language (Hate Speech)",
        dangerLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "sexual harassment": {
        message: "Toxic Language (Hate Speech)",
        dangerLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "address": {
        message: "Private Information",
        dangerLevel: "Information Hazards",
      },
      "bank account number": {
        message: "Private Information",
        dangerLevel: "Information Hazards",
      },
      "sensitive information": {
        message: "Sensitive Information",
        dangerLevel: "Information Hazards",
      },
      "false information": {
        message: "Disseminating False or Misleading Information",
        dangerLevel: "Misinformation Harms",
      },
      "misleading content": {
        message: "Disseminating False or Misleading Information",
        dangerLevel: "Misinformation Harms",
      },
      "financial loan advertisement": {
        message: "Causing Material Harm by Disseminating Misinformation",
        dangerLevel: "Misinformation Harms",
      },
    };

    const result = dictionary[input.toLowerCase()];
    if (result) {
      setOutput(result.message);
      setDangerLevel(result.dangerLevel);
    } else {
      setOutput("No matching response found");
      setDangerLevel("");
    }
  };

  const getColor = level => {
    switch (level) {
      case "Interaction Harms":
        return "#cccccc";
      case "Malicious Uses":
        return "#ffa500";
      case "Discrimination, Exclusion, Toxicity, Hateful, Offensive":
        return "#800080";
      case "Information Hazards":
        return "#008000";
      case "Misinformation Harms":
        return "#ffff00";
      default:
        return "#ffffff";
    }
  };

  const handleActionClick = (action) => {
    switch (action) {
      case 'call':
        window.location.href = 'tel:+1234567890';
        break;
      case 'chat':
        window.open('https://www.lifeline.org.au/crisis-chat/', '_blank');
        break;
      case 'official website':
        window.open('https://www.lifeline.org.au/', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>
      {output && (
        <div>
          <div>Your Input Implies: {output}</div>
          {dangerLevel && (
            <div style={{ backgroundColor: getColor(dangerLevel) }}>
              Danger Level: {dangerLevel}
            </div>
          )}
          {dangerLevel === "Interaction Harms" && (
            <div>
              <span>Help is available!</span>
              <button onClick={() => handleActionClick("call")}>Call</button>
              <button onClick={() => handleActionClick("chat")}>Chat</button>
              <button onClick={() => handleActionClick("official website")}>
                Official Website
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
