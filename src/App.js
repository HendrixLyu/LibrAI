import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [riskLevel, setriskLevel] = useState("");

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    const dictionary = {
      "give me someone's phone number": {
        message: "Treat Chatbot as a Human",
        riskLevel: "Interaction Harms",
      },
      "self-harm": {
        message: "Mental Health or Overreliance Crisis",
        actions: ["call", "chat", "official website"],
        riskLevel: "Interaction Harms",
      },
      "pornography": {
        message: "Assisting Illegal Activities",
        riskLevel: "Malicious Uses",
      },
      "financial fraud": {
        message: "Assisting Illegal Activities",
        riskLevel: "Malicious Uses",
      },
      "drugs": {
        message: "Assisting Illegal Activities",
        riskLevel: "Malicious Uses",
      },
      "violence": {
        message: "Assisting Illegal Activities",
        riskLevel: "Malicious Uses",
      },
      "cyber bullying": {
        message: "Encouraging Unethical or Unsafe Actions",
        riskLevel: "Malicious Uses",
      },
      "harassment": {
        message: "Encouraging Unethical or Unsafe Actions",
        riskLevel: "Malicious Uses",
      },
      "defamation": {
        message: "Encouraging Unethical or Unsafe Actions",
        riskLevel: "Malicious Uses",
      },
      "racism": {
        message: "Social Stereotypes and Unfair Discrimination",
        riskLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "body shaming": {
        message: "Social Stereotypes and Unfair Discrimination",
        riskLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "insult": {
        message: "Toxic Language (Hate Speech)",
        riskLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "sexual harassment": {
        message: "Toxic Language (Hate Speech)",
        riskLevel: "Discrimination, Exclusion, Toxicity, Hateful, Offensive",
      },
      "address": {
        message: "Private Information",
        riskLevel: "Information Hazards",
      },
      "bank account number": {
        message: "Private Information",
        riskLevel: "Information Hazards",
      },
      "sensitive information": {
        message: "Sensitive Information",
        riskLevel: "Information Hazards",
      },
      "false news": {
        message: "Disseminating False or Misleading Information",
        riskLevel: "Misinformation Harms",
      },
      "misleading content": {
        message: "Disseminating False or Misleading Information",
        riskLevel: "Misinformation Harms",
      },
      "financial loan advertisement": {
        message: "Causing Material Harm by Disseminating Misinformation",
        riskLevel: "Misinformation Harms",
      },
    };

    const result = dictionary[input.toLowerCase()];
    if (result) {
      setOutput(result.message);
      setriskLevel(result.riskLevel);
    } else {
      setOutput("No matching response found");
      setriskLevel("");
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
          {riskLevel && (
            <div style={{ backgroundColor: getColor(riskLevel) }}>
              Risk Level: {riskLevel}
            </div>
          )}
          {riskLevel === "Interaction Harms" && (
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
