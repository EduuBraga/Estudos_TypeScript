import React, { ChangeEvent, useState } from 'react'

export const ChangeState = () => {
  const [inputVal, setInputVal] = useState<string>('pessoa.')
  
  const changeValInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  return (
    <div>
      <h4>Qual seu nome?</h4>
      <input type="text" onChange={changeValInput}/>
      <p>Seu nome: {inputVal}</p>
    </div>
  )
}