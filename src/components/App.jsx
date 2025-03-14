import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [feedbacks, setfeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem('feedbacks');
    return savedFeedbacks ? JSON.parse(savedFeedbacks) : { good: 0, neutral: 0, bad: 0 };
  });
  
  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setfeedbacks(prevFeedbacks => ({
      ...prevFeedbacks, [feedbackType]: prevFeedbacks[feedbackType] + 1
    }));
  };
  
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 
  ? Math.round((feedbacks.good / totalFeedback) * 100) 
  : 0;

  return (
    <>
      <Description />
      <Options onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
        onReset={() => setfeedbacks({good: 0, neutral: 0, bad: 0})}
        totalFeedback={totalFeedback}
        positiveFeedbackPercentage={positiveFeedbackPercentage}/>
      
      {totalFeedback > 0 ? (<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedbackPercentage={positiveFeedbackPercentage}/>) : (<Notification />)}
    </>
  );
};

export default App;
