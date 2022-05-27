import React from 'react'
import Logo from '../Assets/Logo.png';
import TV from '../Assets/tv.png';
import Video from '../Assets/video.m4v';
import Mobile from '../Assets/mobile.jpg';
import Kids from '../Assets/kids.png';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
import './style.css'

function Netfilx() {
  
  return (
    <>
    <div className="container-fluid bg_header">
      <div className="row">
        <div className="col-sm-lg-xl-xxl">
          <div className='d-flex align-items-center justify-content-between'>
          <img className='img-fluid' width={200} height={100} src={Logo} alt="" />
          <button className=' sigin'>Sign in</button>
          </div>

          <div className="container flex-column align-items-center d-flex justify-content-center mt-3">
            <h1 className='mt-5 fw-bolder text-light heading'>Unlimited movies,TV</h1>
            <h1 className='text-light fw-bolder heading'>shows, and more.</h1>
            <p className='text-light fs-5'>Watch anywhere. Cancel anytime.</p>
            <p className='text-light'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='container  input-container flex-wrap  mt-2 d-flex justify-content-center'>
            <input  className='form-control-lg email w-50' placeholder='Email address' type="text"  />
            <button className='btn fs-4 get_started btn-danger'>Get Started</button>
              </div> 
          
          </div>

        </div>
      </div>
    </div>

    <div className="container-fluid bg_dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-lg-xl-xxl mt-5 d-flex flex-wrap justify-content-around">
          <div >
          <h1 className='fw-bolder text-light mt-5'>Enjoy on your TV.</h1>
          <p className='text-light fs-4'>Watch on Smart TV's Playstation, Xbox, <br/> Chromecast,Apple TV, Blue-ray
          players, and <br/> more.
          </p>
          </div>
         <div>
          <video id='video' src={Video}   loop />
          <img id='tv' src={TV} alt="" />
         </div>
        </div>
      </div>
    </div>
    </div>

    <div className="container-fluid bg_dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-lg-xl-xxl d-flex align-items-center justify-content-around">
            <div>
              <img width={400} src={Mobile} alt="" />
            </div>
            <div>
              <h1 className='text-light fw-bolder'>Download your shows <br/> to watch offline.</h1>
              <p className='text-light fs-5'>Save your favroites easily and always have <br/> something to watch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid bg_dark">
      <div className="container">
        <div className="row">
          <div className="co-sm-lg-xl-xxl ">
            <h1 className='text-light fw-bolder '>Watch everywhere.</h1>
            <p className='text-light fs-5'>Stream unlimited movies and TV shows on <br/> your phone, tablet, loptop, and TV.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid bg_dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-lg-xl-xxl d-flex align-items-center justify-content-around mt-5">
            <div>
              <img width={400} src={Kids} alt="" />
            </div>
            <div>
              <h1 className='text-light fw-bolder'>Create profiles for kids.</h1>
              <p className='text-light fs-5'>Send kids on adventures with their favroit <br/> chracters in space made
              just for them____ <br/> free with your membership
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>

    <FAQ/>

    <Footer/>
    </>
  )
}

export default Netfilx