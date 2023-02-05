import React, { useState, useEffect } from "react";
import jsPDF from 'jspdf'
import "jspdf-autotable";
import logoImgData from '../Assets/navicon.png';
const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const userId = localStorage.getItem("userId");
    fetch(`http://localhost:8080/api/transactions/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);
  const filteredTransactions = transactions.filter(transaction =>
    (transaction.type.toLowerCase() === "credit" && filter === "credit") ||
    (transaction.type.toLowerCase() === "debit" && filter === "debit") ||
    filter === ""
  )
    .filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  const handleExportToPDF = () => {
    const pdf = new jsPDF();
    pdf.addImage(logoImgData, 'PNG', 10, 10, 50, 50);
    pdf.text('Your credit card summary', 10, 10);
    pdf.autoTable({
      startY: 20,
      head: [['Date', 'Amount', 'Type', 'Description']],
      body: filteredTransactions.map(transaction => [
        transaction.date,
        transaction.amount,
        transaction.type,
        transaction.description
      ]),
    });
    pdf.save('transactions.pdf');
  };
  const handleExportToCSV = () => {
  const csvData = filteredTransactions.map(
    ({ date, amount, type, description }) => `${date},${amount},${type},${description}`
  );
  const csvContent = `Date,Amount,Type,Description\n${csvData.join("\n")}`;
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "transactions.csv");
  document.body.appendChild(link);
  link.click();
};
    return (
      <div style={{ backgroundColor: '#220633', height: '800px'}}><br/>
<div className="search-container"  style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
      
      <input
            type="text" style={{width: '300px', justifyContent: 'center', display: 'flex'}}
            placeholder="Search by description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

<select value={filter} onChange={(e) => setFilter(e.target.value)} style={{width: '300px', justifyContent: 'center', display: 'flex', marginLeft: '10px'}}>
            <option value="">All</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select><br/>
        </div><br/>
        <div className="centertable" style={{ justifyContent: 'center', display: 'flex'}}>
        <table className="table table-bordered" style={{backgroundColor: '#DCD0E7', borderColor: '#89888A', color: '#101010' }} >
  <thead >
    <tr >
    <th scope="col" style={{width: '90px', fontSize: '20px'}}>Date</th>
      <th scope="col" style={{width: '90px', fontSize: '20px'}}>Amount</th>
      <th scope="col" style={{width: '90px', fontSize: '20px'}}>Type</th>
      <th scope="col" style={{width: '90px', fontSize: '20px'}}>Description</th>
    </tr>
  </thead>
  <tbody>
    {filteredTransactions.map(transaction => (
      <tr key={transaction.id}>
        <td style={{width: '70px', fontSize: '15px'}}>{transaction.date}</td>
        <td style={{width: '70px', fontSize: '15px'}}>{transaction.amount}</td>
        <td style={{width: '70px', fontSize: '15px'}}>{transaction.type}</td>
        <td style={{width: '70px', fontSize: '15px'}}>{transaction.description}</td>
      </tr>
    ))}
  </tbody>
</table>
      </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={handleExportToPDF} style={{ background: '#f2f2f2', color: 'black',
        padding: '10px 20px', paddingLeft: '20px', border: 'none', borderRadius: '5px',}}>Export to PDF</button> 

        <button onClick={handleExportToCSV} style={{ background: '#f2f2f2', color: 'black',
        padding: '10px 20px', paddingLeft: '20px', border: 'none', borderRadius: '5px', marginLeft: '10px'}}>Export to CSV</button> 


        </div>
    
    
  </div>
    );
  };
  export default TransactionsTable;
