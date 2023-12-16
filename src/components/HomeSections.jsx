import React from 'react'
import pc from "../assets/images/monitor.svg"
import "../assets/styles/home.css"
import LearnMoreBtn from './buttons/LearnMoreBtn'
import search from '../assets/images/searchRight.svg'

export default function HomeSections() {
  return (
    <>
      <main className="container">

        {/* Sec 1  */}
        <section className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={pc} alt="" srcset="" className="w-100" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 default-rs-text-align d-flex flex-column justify-content-center">
            <p className="topics ">Web & Mobile App Development</p>
            <p className="para ">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <div className="w-100 rs-btn-align">
            <LearnMoreBtn />
            </div>
          </div>
        </section>

        {/* Sec 2  */}
        <section className="row mb-4">
          <div className="d-block d-md-none col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-end align-items-center ">
            <img src={search} alt="" srcset="" className="w-100"  />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6  default-rs-text-align d-flex flex-column justify-content-center">
          
            <p className="topics ">Digital Strategy Consulting</p>
            <p className="para">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix. We
              provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <div className="w-100 rs-btn-align">
            <LearnMoreBtn />
            </div>
          </div>
          <div className="d-none d-md-block col-sm-12 col-md-6 col-lg-6 col-xl-6 position ">
            <img src={search} alt="" srcset=""  className="w-100"/>
          </div>
        </section>
      </main>

    </>
  )
}
