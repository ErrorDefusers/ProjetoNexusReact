import React from 'react'
import "./botao.css"

export const Botao = (props) => {
  return (
    <>
      <button className='botao'>
        {props.nomeBotao}
      </button>
    </>
  )
}
