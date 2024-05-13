// import { Navbar } from "../Header/Navbar"
import '../../styles/Body/body.css'
import { Link } from "react-router-dom"
import img1 from "../../../image/img1.jpg"
import img2 from "../../../image/img2.jpg"
import img3 from "../../../image/img3.jpg"
import img4 from "../../../image/img4.jpg"
import img5 from "../../../image/img5.jpeg"
import img6 from "../../../image/img6.jpeg"
import img7 from "../../../image/img7.jpeg"
import img8 from "../../../image/img8.jpg"
import img9 from "../../../image/img99.jpg"
import img10 from "../../../image/img10.jpg"
import img11 from "../../../image/img11.jpg"
import img12 from "../../../image/img12.jpg"

export const Body = () => {
    return (
        <>
      {/* <Navbar/> */}
    <div>
          <div className='head2'>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
    <div className="carousel-item active c1">
        <div className="text"><h1>TEST RIDE THE 2024</h1>
        <h1>MOTORCYCLE LINEUP</h1>
        <p>Including the all-new Road Glide<sup>TM</sup>and Street Glide<sup>TM</sup>.</p>
        <button><Link to="/user">BOOK A TEST RIDE TODAY </Link><i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c2">
    <div className="text2">
      <h5>MEET OUR 2024</h5>
      <h1>CRUISER MOTORCYCLES</h1>
        <button><Link to="/motorcycle">SEE THE BIKES </Link><i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src={img2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c3">
    <div className="text3">
      <h5>A NEW ERA OF</h5>
      <h1>GRAND AMERICAN</h1>
      <h1>TOURING</h1>
        <button><Link to="/motorcycle">SEE THE BIKES </Link><i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src={img3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item c4">
    <div className="text4">
      <h5>JULY 25-28,2024 | MILWAUKEE, WI | USA</h5>
      <h1>2024 HARLEY-DAVIDSON</h1>
      <h1>HOMECOMING<sup>TM</sup></h1>
      <h1>FESTIVAL</h1>
        <button>BUY TICKETS <i className="fa-solid fa-arrow-right arrow"></i></button>
        </div>
      <img src={img4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" id="ca1" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" id="ca2" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
    <div className="b1">
      <h5><Link to="/bike">HARLEY-DAVIDSON X</Link></h5>
      <p>|</p>
      <h5><Link to="/bike">GRAND AMERICAN TOURING</Link></h5>
      <p>|</p>
      <h5><Link to="/bike">CRUISER</Link></h5>
      <p>|</p>
      <h5><Link to="/bike">ADVENTURE TOURING</Link></h5>
      <p>|</p>
      <h5><Link to="/bike">SPORT</Link></h5>
    </div>

    <div className="card1">
      <h1>Explore the 2024 motorcycle lineup</h1>
      <br/>
      <div className="card2">

      <div className="card-img">
        <img src={img5} alt="img"/>
        <h5>BREAKOUT</h5>
        <p>Dripping with chrome and packing Milwaukee-Eight<sup>TM</sup> 117-Twin muscle, the 2024 Breakout<sup>TM</sup>turns every night into bike night</p>
       <br/>
        <button><Link to="/bike">SEE THE BIKE <i className="fa-solid fa-arrow-right arrow"></i></Link></button>
      </div>

      <div className="card-img">
        <img src={img6} alt="img"/>
        <h5>STREET GLIDE<sup>TM</sup></h5>
        <p>Revolutionary tech and an athletic stance redefine the all-new 2024 Street Glide<sup>TM</sup>.</p>
        <br/>
        <br/>
        <button><Link to="/bike">SEE THE BIKE <i className="fa-solid fa-arrow-right arrow"></i></Link></button>
      </div>

      <div className="card-img">
        <img src={img7} alt="img"/>
        <h5>SPORTSTER<sup>TM</sup>S</h5>
        <p>Building on a legacy in 1957, the sophisticatedly brutish 2024 Sportster S is Wickedly quick, impressively nimble, and way too much fun.<sup>TM</sup>.</p>
        <br/>
        <button><Link to="/bike">SEE THE BIKE <i className="fa-solid fa-arrow-right arrow"></i></Link></button>
      </div>
      
    </div>
      </div>

      <div className="dd1">
        <div className="para">
          <h1><Link to="">LEARN TO RIDE</Link></h1>
          <p>Whether it's first time throwing a leg over a bike, or you just want to brush up on your skills, H-D offers courses that will have you commanding a motorcycle with confidence in no time</p>
          <h5><Link to="/motorcycle">EXPLORE MORE </Link><i className="fa-solid fa-arrow-right arrow"></i></h5>
        </div>
        <div className="img1">
          <img src={img8} alt="logo"/>
        </div>

      </div>

      <div className="btw1">
        <h1>Shop Parts & Apparel</h1>
        <div className="btw-main">
        <div className="ch1">
            <Link to="/men"><img src={img9} alt="mens"/></Link>
            <h4><Link to="">SHOP MEN'S GEAR & APPAREL</Link></h4>
          </div>
          <div className="ch1">
            <Link to=""><img src={img10} alt="parts"/></Link>
            <h4><Link to="">SHOP PARTS & ACCESSORIES</Link></h4>
          </div>

          <div className="ch1">
            <Link to="/women"><img src={img11} alt="Womens"/></Link>
            <h4><Link to="/women">SHOP WOMEN'S GEAR & APPAREL</Link></h4>
          </div>

          <div className="ch1">
            <Link to=""><img src={img12} alt="bikes"/></Link>
            <h4><Link to="">GEAR UP FOR THE RIDE</Link></h4>
          </div>

          
        </div>
      </div>
        </>
  )
}
