import React from 'react'
import '../styles.css'

export default function Total({total}) {
           
    const result = (arg)  =>{
      let evalution = eval(arg);
    
    console.log(evalution)
    }
    return (
      
    <div className='equalBtn'>
     
<button type='button' onClick={() => result(total)}>=</button>
    </div>
  )
}
