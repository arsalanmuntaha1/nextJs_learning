import React from 'react'
type propsType ={
    name:string;
}
export default function Button(props:propsType) {
  return (
    <div>
      <button className=' border-2 py-1 px-5 rounded-3xl border-text'>{props.name}</button>
    </div>
  )
}
