const Feedback =({feedbacks, totalFeedback, positiveFeedbackPercentage}) => {
    return (
        <>
        <p>Good: {feedbacks.good}</p>
        <p>Neutral: {feedbacks.neutral}</p>
        <p>Bad: {feedbacks.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedbackPercentage}%</p>
        </>
    );
};
export default Feedback;