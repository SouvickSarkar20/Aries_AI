import React, { useEffect, useRef, useState } from "react";
import "./NewPrompt.css";
import { ArrowBigRight, CirclePlus } from "lucide-react";
import model from "../../lib/Model";

const NewPrompt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    const text = e.target.text.value.trim(); // Get user input
    if (!text) return;
    add(text); // Pass the input text to the add function
    e.target.reset(); // Reset the form after submission
  };

  const add = async (text) => {
    console.log("Inside add function");
    try {
      setQuestion(text); // Update the question state
      const result = await model.generateContent(text); // Call the API
      console.log("API Response:", result);
      setAnswer(result.text || "No response generated."); // Update the answer state
    } catch (error) {
      console.error("Error generating content:", error);
      setAnswer("Error generating response. Please try again.");
    }
  };

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [question, answer]);

  return (
    <>
      {question && <div className="message user">{question}</div>}
      {answer && <div className="message">{answer}</div>}
      <div ref={endRef} className="endChat">
        <form className="newForm" onSubmit={handleSubmit}>
          <label htmlFor="file">
            <CirclePlus color="gray" size={16} />
          </label>
          <input type="file" multiple={false} hidden />
          <input className="query" name="text" type="text" placeholder="Ask me anything" />
          <button type="submit">
            <ArrowBigRight color="gray" size={16} />
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPrompt;
