import { React, useState } from "react";

const useTotal = () => {
  const [numer, setNumer] = useState("");
  let operators = ['*', '+', '-', '/', '%'];
  const calcu = (args) => {
    //if(operators.includes(args))
      //return;
    setNumer(numer + args);
  };
  const totale = () => {
    setNumer(eval(numer));
  };
  const back = () => {
  
    setNumer(numer.slice(0,5));
  };
 
  return {
    back,
    setNumer,
    calcu,
    totale,
    numer,
  };
};

export default useTotal;
