import React from 'react'
import GetFreeBtn from '../buttons/GetFreeBtn' 
import '../../assets/styles/card.css'

export default function BlueCard() {
  return (
    <div className="card p-4 rounded-0 border border-primary no-border">
        <h1 className="d-none d-md-block text-white fs-1">We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <h1 className="d-md-none d-block text-white fs-2">We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <GetFreeBtn/>
    </div>
  )
}
