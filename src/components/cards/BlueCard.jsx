import React from 'react'
import GetFreeBtn from '../buttons/GetFreeBtn' 
import '../../assets/styles/card.css'

export default function BlueCard() {
  return (
    <div className="card p-4 rounded-0 border border-primary no-border">
        <h1 className="d-none d-xl-block text-white " style={{  fontSize: 48 }}>We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <h1 className="d-none d-lg-block d-xl-none text-white " style={{  fontSize: 30 }}>We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <h1 className="d-none d-md-block d-lg-none text-white " style={{  fontSize: 20 }}>We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <h1 className="d-none d-sm-block d-md-none text-white " style={{  fontSize: 24 }}>We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <h1 className="d-sm-none d-block text-white " style={{  fontSize: 16 }}>We Crush Your  Competitors, Goals, And Sales Records - Without The B.S.</h1>
        <GetFreeBtn/>
    </div>
  )
}
