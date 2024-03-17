export function Side2({ total }) {
  function calculateTipAmount() {}
  function calculateTotalPerPerson() {}
  return (
    <div className="side__2">
      <div className="side__2__numbox">
        <div className="side__2__numbox-textbox">
          <div className="side__2__numbox-text-1">Tip Amount</div>
          <div className="side__2__numbox-text-2">/ person </div>
        </div>
        <div className="side__2__numbox-num">
          ${chatgbt make this in to the tip Amount}
        </div>
      </div>
      <div className="side__2__numbox">
        <div className="side__2__numbox-textbox">
          <div className="side__2__numbox-text-1">Total</div>
          <div className="side__2__numbox-text-2">/ person </div>
        </div>
        <div className="side__2__numbox-num-2">
          ${Number.isFinite(total) ? total.toFixed(2) : "0.00"}
        </div>
      </div>
      <ResetButton />
    </div>
  );
}

function ResetButton() {
  return (
    <button
      className="side__2-btn" //onClick={resetCalculator}
    >
      RESET
    </button>
  );
}
