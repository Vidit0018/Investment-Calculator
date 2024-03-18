import Header from "./components/header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [initialInvestment, setinitalAmt]=useState(1000);
  const [annualInvestment, setannualInvestment]=useState(100);
  const [expectedReturn, setexpReturn]=useState(10);
  const [duration, setduration]=useState(10);

  
  function changeAmt(event){
    setinitalAmt(+(event.target.value));
  }
  function changeAnnual(event){
    setannualInvestment(+(event.target.value));
  }
  function changeReturn(event){
    setexpReturn(+(event.target.value));
  }
  function changeDuration(event){
    setduration(+(event.target.value));
  }
  
  const inputData={
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  }
  const inputIsValid = inputData.duration >=1;
   
  return (

    <>
    <Header/>
    <UserInput
      input={inputData}
      amtchange={changeAmt} 
     annualchange={changeAnnual} 
     returnchange={changeReturn} 
     durationchange={changeDuration}
    />
    {inputIsValid&&<Result input={inputData} />}
    </>
  )
}

export default App
