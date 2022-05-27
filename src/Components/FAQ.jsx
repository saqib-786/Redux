import React from 'react'

function FAQ() {
    const show_question_1=()=>{
        let container = document.getElementById('ans_1');
        if(container.className == 'hidden'){
          container.className = 'show_container'
        }else{
          container.className = 'hidden'
        }
      }
      const show_question_2=()=>{
          let container = document.getElementById('ans_2')
          if(container.className == 'hidden'){
              container.className = 'show_container'
          }else{
              container.className = 'hidden'
          }
      }
      const show_question_3 =()=>{
          let container = document.getElementById('ans_3');
          if(container.className == 'hidden'){
              container.className = 'show_container';
          }else{
              container.className = 'hidden'
          }
      }
      const show_question_4 =()=>{
          let container = document.getElementById('ans_4');
          if(container.className == 'hidden'){
              container.className = 'show_container';
          }else{
              container.className = 'hidden'
          }
      }
      const show_question_5 = ()=>{
          let container = document.getElementById('ans_5');
          if(container.className == 'hidden'){
              container.className = 'show_container';
          }else{
              container.className = 'hidden'
          }
      }
      const show_question_6 =()=>{
          let container = document.getElementById('ans_6');
          if(container.className == 'hidden'){
              container.className = 'show_container'
          }else{
              container.className = 'hidden'
          }
      }
  return (
    <>
    <div className="container-fluid bg_dark">
      <div className="container">
        <div className="row">
          <div className="col-sm-lg-xl-xxl d-flex flex-column align-items-center  mt-5">
            <h1 className='text-light fw-bolder mt-2'>Frequently Asked Questions</h1>
            {/* Question Container starts */}
            <div className='d-flex align-items-center justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>What is Netfilx?</p>
              <button onClick={show_question_1}  className='btn fs-1 text-light add_btn'>+</button>
            </div>
{/* 
            Question Container ends */}

            {/* Answer Container starts */}

            <div id='ans_1' className='hidden bg-secondary w-75 m-2 p-2'>
              <p className='fs-5 p-2 text-light fw-bold'>
              Netflix is a streaming service that offers a wide variety 
              of <br/> award-winning TV shows, movies, anime, documentaries,
               and more on thousands of internet-connected devices.
              </p>

              <p className='text-light fs-5  p-2'>
              You can watch as much as you want, whenever you want without a single
               commercial – all for one low monthly price. There's always something
               new to discover and new TV shows and movies are added every week!
              </p>

            </div>

            {/* Answer Container ends */}

            <div className='d-flex align-items-center mt-2 justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>How much does Netfilx cost?</p>
              <button onClick={show_question_2}  className='btn fs-1 text-light add_btn'>+</button>
            </div>

            <div id='ans_2' className='hidden'>
              <p className='text-light fs-5  p-2'>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop,
               or streaming device, all for one fixed monthly fee. Plans 
               range from Rs250 to Rs1,100 a month. No extra costs, no contracts.
              </p>
            </div>


            <div className='d-flex align-items-center mt-2 justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>Where can I watch?</p>
              <button onClick={show_question_3}  className='btn fs-1 text-light add_btn'>+</button>
            </div>

            <div id='ans_3' className='hidden'>
                <p className='text-light fs-5 m-2'>
                Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                 on the web at netflix.com from your personal computer or on any internet-connected
                  device that offers the Netflix app,
                 including smart TVs, smartphones, tablets, streaming media players and game consoles.  
                </p>
                <p className='text-light fs-5 m-2'>
                You can also download your favorite shows with the iOS, Android, or Windows 10 app.
                 Use downloads to watch while you're on the go and without an internet connection.
                  Take Netflix with you anywhere.

                </p>

            </div>

            <div className='d-flex align-items-center mt-2 justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>How do I cancel?</p>
              <button onClick={show_question_4}  className='btn fs-1 text-light add_btn'>+</button>
            </div>

            <div className='hidden' id='ans_4'>

                <p className='text-light fs-5 m-2'>
                Netflix is flexible. There are no pesky contracts and no commitments.
                 You can easily cancel your account online in two clicks. There are no 
                 cancellation fees – start or stop your account anytime.

                </p>

            </div>


            <div className='d-flex align-items-center mt-2 justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>What can I watch on Netflix?</p>
              <button onClick={show_question_5}  className='btn fs-1 text-light add_btn'>+</button>
            </div>

            <div id='ans_5'className='hidden'>
                <p className='text-light fs-5 m-2'>
                Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                 award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </p>

            </div>


            <div className='d-flex align-items-center mt-2 justify-content-between bg-secondary w-75'>
              <p className='fs-5 m-2  text-light'>Is Netfilx good for kids?</p>
              <button onClick={show_question_6}  className='btn fs-1 text-light add_btn'>+</button>
            </div>

            <div className='hidden' id='ans_6'>
                <p className='text-light fs-5 m-2' >
                The Netflix Kids experience is included in your membership to give parents control
                 while kids enjoy family-friendly TV shows and movies in their own space.
                </p>
                <p className='text-light fs-5 m-2'>
                Kids profiles come with PIN-protected parental controls that let you restrict the
                 maturity rating of content kids can watch and block specific titles you don’t want kids to see.

                </p>
            </div>

            <p className='text-light mt-5'>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='container  input-container mb-5  mt-2 d-flex justify-content-center'>
            <input  className='form-control-lg email w-50' placeholder='Email address' type="text"  />
            <button className='btn fs-4 get_started btn-danger'>Get Started</button>
              </div> 
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQ