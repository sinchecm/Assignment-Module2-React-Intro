

import MySelf from "./Myself";
import Section from "./component/Section";
import "./style.css";


function App() {
  return (
    <div className="App">
      <div>
        <MySelf/>
        
        <div>
           
           <h1><strong>Che Chiat Ming</strong></h1>
           <h2>Proprietary Futures Trader</h2>
          </div>
        
        <Section
        
        name = "About me"
        content=" I am a Spread Futures Trader focus in Asia Equity indices and Commodities"

       />
        <Section
        name="Contact me"
        content="Email: chechiatming@icloud.com | LinkedIn: https://www.linkedin.com/"
      
      />

    

  
      </div>
      
     
       
       
       
     
    </div>
  );
}

export default App;
