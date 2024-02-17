import React, { useMemo, useState } from 'react'

function Practice() {
    const [counter, setCounter]=useState(0)
    const [money, setMoney]=useState(100)
    
    const increaseCounter=()=>{
        setCounter(counter+1)

    }

    const moneyincrease=()=>{
        setMoney(money+100)
    }

    const multiple =useMemo(()=>{
        console.log('hello world')
        return 14500*counter
    }, [counter])
  return (
  <>
    <div>Mutiply {multiple}</div>
    <h1>Counter {counter}</h1>
    <button onClick={increaseCounter}>Increase Counter</button>
    <h1>Money {money}</h1>
    <button onClick={moneyincrease}>Increase Money</button>

  </>
  )
}

export default Practice