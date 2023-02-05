import React, { useState, useEffect } from "react";
import image from "../Assets/login1.png";
import Footer from '../Footer';



const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.entries(data));
      });
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleConvert = () => {
    if (fromCurrency === toCurrency) {
      alert("Choose Different Currencies");
    } else {
      fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      )
        .then((response) => response.json())
        .then((data) => {
          setConvertedAmount(Object.values(data.rates)[0]);
        });
    }
  };

  return (
    <div style={{height: '500px', width: 'auto', backgroundSize: 'cover', 
    backgroundColor: '#F6EBFA'}}>
            <div className="container ">
            <div className="row" style={{paddingTop: '10vh'}}>
                
            <div className="exchange" style={{paddingTop: '20px', paddingLeft: '10px' }}>
            <div className="about-text" >
            <div style={{backgroundColor: '#220633', color: '#FFFFFF', fontSize: '55px'}} className=" py-3 text-center rounded">
                    <h2>Currency Converter</h2>
                    </div><br/>
                    <div className="currencytable" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>

                    <select
                  className="currency"
          value={fromCurrency}
        onChange={handleFromCurrencyChange}
                style={{width: '200px', height: '40px', fontSize: '16px', marginRight: '2vw', backgroundColor: '#FFFFFF'}}
>
  {currencies.map((currency) => (
    <option key={currency[0]} value={currency[0]}>
      {currency[0]}
    </option>
  ))}
</select>
<input
  type="number"
  value={amount}
  onChange={handleAmountChange}
  style={{width: '100px', height: '40px', fontSize: '16px', marginRight: '2vw', backgroundColor: '#FFFFFF'}}
/>

<select
  className="currency"
  value={toCurrency}
  onChange={handleToCurrencyChange}
  style={{width: '200px', height: '40px', fontSize: '16px', marginRight: '2vw', backgroundColor: '#FFFFFF'}}
>
  {currencies.map((currency) => (
    <option key={currency[0]} value={currency[0]}>
      {currency[0]}
    </option>
  ))}
</select>

<input
  type="text"
  value={convertedAmount}
  disabled
  style={{width: '100px', height: '40px', fontSize: '16px', backgroundColor: '#FFFFFF'}}
/>

</div>
<div className="currencytable" style={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingBottom: '200px'}}>

            <button style={{ display: 'flex', justifyContent: 'center', width: '20vw', backgroundColor: '#220633', color: '#FFFFFF' }} className="btn-btn" onClick={handleConvert}>
            Convert
          </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    <Footer />

    </div>
  );
  
};

export default CurrencyConverter;
