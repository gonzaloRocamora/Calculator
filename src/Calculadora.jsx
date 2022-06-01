import {React, useState} from 'react'
import './styles.css'
import Total from './components/Total.jsx'


export default function Calculadora() {
    const[num, setNum] = useState('');

    let arrNums = [ '1','2','3','4','5','6','7','8','9','0'];
   
    const updateCalc = (value) => {
      
        setNum(num + value);
    }
   
    
    return (
    <div className='divcal'>
        
        <div className='calcu'>
        
        <span>{!num ? 0 : num}</span>
        <button type='button' onClick={() => setNum('')} >C</button>
       <button type='button' onClick={() =>updateCalc('+')}>+</button>
         <button type='button' onClick={() =>updateCalc('-')}>-</button>
        <button type='button' onClick={() =>updateCalc('/')}>/</button>
        <button type='button' onClick={() =>updateCalc('*')}>*</button>
        <button type='button' onClick={() =>updateCalc('%')}>%</button>
        
        {arrNums.map(item => {
            return <button key={item} onClick={() => updateCalc(...item)}>{item}</button>
        })}       
        
        
       <Total  total={num}/>
        </div>        
    </div>
 
 
    )
}


/*
 
 // 
*/