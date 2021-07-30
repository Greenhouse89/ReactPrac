import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 7, 30);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67;


  return (
    <div className="expense-item">
      <div>{expsenseDate.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2> 
        <div className= "expense-item_price">${expenseAmount}</div>
      </div>
    </div>
  );
  }
  
  export default ExpenseItem;
