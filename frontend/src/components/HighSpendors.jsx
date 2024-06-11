import React, { useEffect, useState } from 'react';
import axios from 'axios';


const HighSpenders = () => {
  const [highSpendersTotalSpent, setHighSpendersTotalSpent] = useState([]);
  const [highSpendersTotalSpentAndVisits, setHighSpendersTotalSpentAndVisits] = useState([]);
  const [notVisitedLast3Months, setNotVisitedLast3Months] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        const data = response.data;

        const filteredCustomersTotalSpent = data.filter(order => order.totalSpent > 10000);
        setHighSpendersTotalSpent(filteredCustomersTotalSpent);

        const filteredCustomersTotalSpentAndVisits = data.filter(order => order.totalSpent > 10000 && order.noOfVisits === 3);
        setHighSpendersTotalSpentAndVisits(filteredCustomersTotalSpentAndVisits);

        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

        const notVisitedLast3Months = data.filter(order => new Date(order.datetimeVisited) < threeMonthsAgo);
        setNotVisitedLast3Months(notVisitedLast3Months);
      } catch (error) {
        console.error('Failed to fetch high spenders:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">High Spenders (Total Spent &gt; 10000)</h5>
              <ul className="list-unstyled">
                {highSpendersTotalSpent.map(order => (
                  <li key={order._id}>
                    Customer Name: {order.customerName}, Total Spent: {order.totalSpent}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">High Spenders (Total Spent &gt; 10000 and No. of Visits = 3)</h5>
              <ul className="list-unstyled">
                {highSpendersTotalSpentAndVisits.map(order => (
                  <li key={order._id}>
                    Customer Name: {order.customerName}, Total Spent: {order.totalSpent}, No. of Visits: {order.noOfVisits}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Customers Not Visited in Last 3 Months</h5>
              <ul className="list-unstyled">
                {notVisitedLast3Months.map(order => (
                  <li key={order._id}>
                    Customer Name: {order.customerName}, Last Visited: {order.datetimeVisited}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighSpenders;
