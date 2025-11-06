import React from 'react'
import "./botao.css"

export const Botao = (props) => {
  return (
    <>
      <button className={props.class_btn}>
        {props.nomeBotao}
      </button>
    </>
  )
}
