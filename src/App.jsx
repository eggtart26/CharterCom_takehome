import React, { useEffect, useState } from "react";
import fetch from "./api/mockApi";
import RewardsTable from "../src/components/RewardTable.jsx";
import TransactionTable from "./components/TransactionTable.jsx";

function App() {
  const [transactionData, setTransactionData] = useState(null);
  const [rewardsData, setRewardsData] = useState({});

  useEffect(() => {
    fetch().then((data) => {
      const rewards = {};

      // Iterate through the transactions and calculate the rewards
      for (const transaction of data) {
        const customerId = transaction.cusid;
        const month = new Date(transaction.date).getMonth();

        // Initialize the rewards data for the current customer and month if it doesn't exist
        if (!rewards[customerId]) {
          rewards[customerId] = [];
        }
        if (!rewards[customerId][month]) {
          rewards[customerId] = 0;
        }

        let points = 0;
        if (transaction.amount > 100) {
          points += 2 * (transaction.amount - 100);
        }
        if (transaction.amount > 50) {
          points += 1 * Math.min(transaction.amount - 50, 50);
        }
        rewards[customerId] += points;
      }

      let finalRewards = [];
      for (const ele in rewards) {
        let newObj = {};
        newObj["id"] = ele;
        newObj["amount"] = rewards[ele];
        console.log("newObj", newObj);
        finalRewards.push(newObj);
      }

      // Update the component's state with the calculated rewards data
      setTransactionData(data);
      setRewardsData(finalRewards);
    });
  }, []);

  return (
    <div className="App">
      <RewardsTable rewardsData={rewardsData} />
      <TransactionTable transactionData={transactionData} />
    </div>
  );
}

export default App;
