import React, { useEffect, useState } from "react";
import fetch from "./api/mockApi";
import TransactionTable from "./components/TransactionTable.jsx";

function App() {
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    fetch().then((data) => {
      setTransactionData(data);
    });
  }, []);

  console.log("transactionData", transactionData);

  return (
    <div className="App">
      <TransactionTable transactionData={transactionData} />
    </div>
  );
}

export default App;
