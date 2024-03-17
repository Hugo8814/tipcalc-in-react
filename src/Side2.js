export function Side2() {
  return (
    <div className="side__2">
      <div className="side__2__numbox">
        <div className="side__2__numbox-textbox">
          <div className="side__2__numbox-text-1">Tip Amount</div>
          <div className="side__2__numbox-text-2">/ person Total</div>
        </div>
        <div className="side__2__numbox-num">
          $
          {
            //calculateTipAmount().toFixed(2)
          }
        </div>
      </div>
      <div className="side__2__numbox">
        <div className="side__2__numbox-textbox">
          <div className="side__2__numbox-text-1">Total</div>
          <div className="side__2__numbox-text-2">/ person Total</div>
        </div>
        <div className="side__2__numbox-num-2">
          $
          {
            //calculateTotalPerPerson().toFixed(2)
          }
        </div>
      </div>
      <button
        className="side__2-btn" //onClick={resetCalculator}
      >
        RESET
      </button>
    </div>
  );
}
