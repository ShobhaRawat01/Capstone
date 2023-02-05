import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';

function CreditCardData() {
    var firstname = localStorage.getItem("firstname");
    var tlimit = localStorage.getItem("tlimit");
    var rlimit = localStorage.getItem("rlimit");
const [contryname, setCountryname] = useState([]);
const [medal, setMedal] = useState([]);
useEffect(() => {
  const getdata = async () => {
      const countryname = [];
      const getmedal = [];

      const creditcardnumber = localStorage.getItem("creditcardnumber");
      

      const reqData = await fetch(`http://localhost:8080/api/v2/user/${creditcardnumber}`); 
      const resData = await reqData.json();
      localStorage.setItem('tlimit', resData.totallimit);
      localStorage.setItem('rlimit', resData.remlimit);

      countryname.push("Food");
      getmedal.push(parseInt(resData.food));

      countryname.push("Movie");
      getmedal.push(parseInt(resData.movie));

      countryname.push("Bills");
      getmedal.push(parseInt(resData.bills));

      countryname.push("Shopping");
      getmedal.push(parseInt(resData.shopping));

      setCountryname(countryname);
      setMedal(getmedal);
  }
  getdata();
}, []);

return(
  <React.Fragment>
      <div className='container-fluid mt-3 mb-3'>        
      <h3 style ={{paddingLeft: '20px', font: 'bold', paddingBottom: '10px'}}> Welcome {firstname} </h3>
      <label style ={{paddingLeft: '20px', font: 'bold', color: '#43015A', fontSize: '30px'}}><h5>Total Limit Rs.{tlimit}</h5></label>
      <label style ={{paddingLeft: '20px', font: 'bold',color: '#055429', fontSize: '30px'}}><h5>Remaining Limit Rs.{rlimit}</h5></label>

          <div style={{paddingTop: '30px'}}>
          </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => {window.location.href="/transaction"}} style={{ background: '#f2f2f2', color: 'black',
        padding: '10px 20px', paddingLeft: '20px', border: 'none', borderRadius: '5px', backgroundColor: '#A26CB5'}}>View Transactions</button> 

        <button onClick={() => {window.location.href="/TravelNotes"}}style={{ background: '#f2f2f2', color: 'black',
        padding: '10px 20px', paddingLeft: '20px', border: 'none', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#A26CB5' }}>Travel Note</button> 
        
        <button onClick={() => {window.location.href="/CurrencyConverter"}} style={{ background: '#f2f2f2', color: 'black',
        padding: '10px 20px', paddingLeft: '20px', border: 'none', borderRadius: '5px', marginLeft: '10px', backgroundColor: '#A26CB5'}}>Currency Exchange</button>

        </div>
          <Chart 
              type="donut"
              width={1100}
              height={ 420}
              series={medal}
              options={{
                  labels: contryname, 
                  title: {
                      text: "Your Monthly spending trend"
                  },
                  plotOptions: {
                      pie: {
                          donut: {
                              labels: {
                                  show: true,
                                  total: {
                                      show: true,
                                      showAlways: true,
                                      fontSize: 25,
                                      color: '#f90000',
                                      label:'Total amount in ₹'
                                                                         
                                  }
                              }

                    
                }
             }

             },

             dataLabels:{
                enabled:true,
             }


            }}

            
            
            />

            </div>
            
        </React.Fragment>
    );
}
export default CreditCardData;
