import "../assets/styles/home.css"
import Img from "../assets/images/main.png"
import BlueCard from "../components/cards/BlueCard"
import HomeSections from "../components/HomeSections"

export default function Home() {
  return (
    <>
      <main class="w-100 position-relative">
      <img src={Img} alt="background image" class="w-100 hero-img" />
      <div class="text-overlay d-none d-md-block px-5 py-3">
        <div class="w-100 h-100 d-flex flex-column justify-content-end">
          <div className="w-50">
              <BlueCard/>   
          </div>
        </div>
       </div>
    </main>

    {/* Blue color card (SM, MD) */}
    <main class="d-block d-md-none">
      <BlueCard />
    </main>

     {/* Sections  */}

      <HomeSections/>
      {/* <Footer/> */}


    </>
  )
}
