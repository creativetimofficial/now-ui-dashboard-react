import React, { useState } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import ChatbotIcon from "./chatbot.jpg"; // Import your specific chatbot icon
import ChatBot from "react-simple-chatbot"; // Import react-simple-chatbot

function Icons() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleQuery = query => {
    // Handle the query here, you can send it to your backend or process it using GPT-3
    // Respond to the query and update the chat window accordingly
    // This function will be responsible for handling the queries from the user
  };

  const steps = [
    {
      id: "1",
      message: "Welcome to Bahria University LMS! How can I assist you?",
      trigger: "2" // Triggers step '2'
    },
    {
      id: "2",
      message: "Having a woderful day are we?"
      // Add the next trigger or action here...
    }
    // Add more conversation steps as needed...
  ];

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h5 className="title">Chatbot</h5>
                <p className="category">
                  Click the icon below to start chatting
                </p>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  <Col lg={2} md={3} sm={4} xs={6} className="font-icon-list">
                    <div className="font-icon-detail" onClick={toggleChatbot}>
                      <img src={ChatbotIcon} alt="Chatbot" />
                      <p>Chat</p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {showChatbot && (
          <div className="chatbot-container">
            <ChatBot
              steps={steps}
              handleEnd={() => setShowChatbot(false)}
              userDelay={1000}
              handleUserInput={input => handleQuery(input)}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Icons;
