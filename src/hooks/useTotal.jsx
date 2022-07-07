import { React, useState } from "react";

const useTotal = () => {
	const [result, setResult] = useState("");
	const [numer, setNumer] = useState("");
  let operators = ["*", "+", "-", "/", "%"];
  const calcu = (args) => {
 
		setNumer(numer + args);
    
  };
  const totale = () => {
   	if (operators.includes(numer.slice(-1)))
	{
		alert("Operation not valid");
	}
    else
	{
		 setResult(eval(numer));
	}
  };
  const back = () => {
    setNumer(numer.slice(0, 5));
  };

  return {
    result,
    back,
    setNumer,
    calcu,
    totale,
    numer,
  };
};

export default useTotal;
