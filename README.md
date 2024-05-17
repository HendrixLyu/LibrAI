Please run the quick demo by:


```bash
npm install 
```

```bash
npm start
```



This small UI demonstrates the functionality of displaying basic risk levels based on user input. 
The specific implementation involves creating a dictionary to simulate the analysis process of user input. 
For example, when the user inputs "bank account number," in a real scenario, the actual bank account number would be sent to the backend via an API. The backend, after receiving this request, would process it through an AI model such as LLM or other AI models to determine that this is "Private Information," triggering a risk level assessment as "Information Hazards."

To complete the entire task, it would take approximately 4-8 hours. 
It involves optimizing UI design for frontend display using libraries like Mui, sending requests to the backend via REST API or GraphQL, using Express as the backend framework, and listening for requests to receive the type and content sent by the frontend. 
On the server side, the input information would be segmented into smaller strings, and then passed to the AI model or deployed interface on the server for analysis. 
The AI model would determine the risk level, such as "Human-Chatbot Interaction Harms" or "Malicious Uses," as well as the category of information involved, such as "Sensitive Information (Organization/Government)" or "Toxic Language (Hate Speech)." 
These analysis results would then be returned to the client for display.
