import style from "./Options.module.css"

const Options = ({ onGood, onNeutral, onBad, onReset, totalFeedback}) => {
    return (
    <div className={style.list}>
    <button onClick={onGood}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={onBad}>Bad</button>
    {totalFeedback > 0 && (<button onClick={onReset}>Reset</button>)}
    </div>
    );
};
export default Options;