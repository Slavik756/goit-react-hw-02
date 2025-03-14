const Options = ({ onGood, onNeutral, onBad, onReset, totalFeedback}) => {
    return (
    <>
    <button onClick={onGood}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={onBad}>Bad</button>
    {totalFeedback > 0 && (<button onClick={onReset}>Reset</button>)}
    </>
    );
};
export default Options;