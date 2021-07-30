import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>July 30 2021</div>
      <div className="expense-item_description">
        <h2>Car Insurance</h2>
        <div className= "expense-item_price">$294.67</div>
      </div>
    </div>
  );
  }
  
  export default ExpenseItem;
