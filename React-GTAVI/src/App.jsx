import React, { useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
const App = () => {
   const [showContent , setShowContent] = useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group" , {
      rotate : 10,
      ease : "Power4.easeInOut",
      duration : 2, 
      transformOrigin : "50% 50%",
    }).to(".vi-mask-text" , {
      scale : 10,
      duration : 2,
      delay : -1.8,
      ease : "Expo.easeInOut",
      transformOrigin : "50% 50%",
      opacity : 0,
      onUpdate : function() {
        if(this.progress()>=0.9) {
          document.querySelector("svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(()=>{

    if(!showContent) {
      return;
    }

    gsap.to(".main" , {
      rotate : 0, 
      scale : 1,
      duration : 2,
      delay: -1,
      ease : "Expo.easeInOut",
     
    });
    gsap.to(".sky", {
      rotate: 0,
      scale: 1.4,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",

    });
    gsap.to(".bg", {
      rotate: 0,
      scale: 1.4,
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",

    });
    gsap.to(".character", {
      rotate: 0,
      scale: 1,
      x:"-50%",
      duration: 2,
      delay: -.8,
      ease: "Expo.easeInOut",
      bottom : "20%"

    })
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove" , function(e) {
       const xMove = (e.clientX/window.innerWidth - 0.5)*40
       gsap.to(".imgDiv .text" , {
        x : `${xMove}%`
       });
       gsap.to(".sky",{
        x : xMove
       });
      gsap.to(".bg", {
        x: xMove*1.7
      });
        
       
    })
  } , [showContent]);

  return (
    <>
    <div className='fixed z-[100] w-full overflow-hidden bg-black top-0 left-0 flex justify-center items-center'>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className='vi-mask-group'>
              <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className='vi-mask-text' fontSize="250" fill='white' fontFamily='Arial Black'>VI</text>
            </g>


          </mask>
        </defs>
        <image href='./bg.png' width="100%" height="100%" mask="url(#viMask)" preserveAspectRatio='xMidYMid slice'/>
      </svg>
    </div>
    {showContent && <div className='main w-full rotate-[-10deg] scale-[1.7]'>
<div className='landing overflow-hidden relative w-full h-screen bg-black'>
  <div className='navbar absolute top-0 left-0 w-full z-[10] py-8 px-8 '>
    <div className='logo flex items-center gap-7'>
      <div className='lines flex flex-col gap-1'>

        <div className='bg-white h-2 w-15'></div>
                <div className='bg-white h-2 w-8'></div>
                <div className='bg-white h-2 w-5'></div>
      </div>
      <h3 className='text-4xl -mt-[11px] text-white '>Rockstar</h3>
    </div>

  </div>
        <div className='imgDiv relative overflow-hidden h-screen w-full '>
            <img className='sky scale-[1.5] rotate-[-20deg] w-full h-full absolute top-0 left-0 object-cover' src='./sky.png' alt='skyimage' />
            <div className='text text-white flex flex-col gap-2 absolute top-1/6 left-1/2 -translate-1/2 '>
              <h1 className='text-9xl  leading-none  -ml-20 mt-45' >grand</h1>
              <h1 className='text-9xl  leading-none ml-10'>theft</h1>
              <h1 className='text-9xl leading-none  -ml-10'>auto</h1>
            </div>
            <img className=' bg scale-[1.8] rotate-[-3deg] w-full h-full absolute top-0 left-0 object-cover ' src='./bg.png' alt='backgoundimage'/>
           <img className='character rotate-[-20deg] absolute top-0 left-1/2 overflow-hidden  -translate-x-1/2 -bottom-[150%] scale-[3] '  src='./girlbg.png'/>
          
       
        </div>
        <div className='bottom absolute bottom-0 left-0 px-10 py-10  w-full bg-gradient-to-t from-black to-transparent'>
          <div className='flex flex-col gap-4 items-center'>
            <i className='ri-arrow-down-line text-2xl text-white'></i>
            <h3 className='font-[Helvetica_Now_Display] text-2xl text-white'>
              Scroll Down
            </h3>
         
          <img src='./ps5.png' className='h-[45px]'/>
          </div>
        </div>
        </div>
        <div className='w-full h-full flex items-center justify-center p-10 bg-black'>
<div className='cntnr  w-full h-[80%] flex text-white'>
  <div className='limg w-1/2 h-full relative'>
     <img className='absoulute top-1/2 left-1/2 -translate-x-1/12 -translate-y-1/6' src='./imag.png' />
  </div>
  <div className='rg w-[30%]'>
    <h1 className='text-6xl'>Still Running</h1>
     <h1 className='text-6xl'>Not Hunting</h1>
     <p className='mt-10 text-md font-[Helvetica_Now_Display]'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis eos facere nihil cupiditate voluptatem reiciendis amet, provident animi suscipit odio saepe quam temporibus mollitia molestias fugit ullam, corrupti molestiae voluptate ipsa facilis. Doloremque, possimus!
     </p>
              <p className='mt-10 text-md font-[Helvetica_Now_Display]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis eos facere nihil cupiditate voluptatem reiciendis amet, provident animi suscipit odio saepe quam temporibus mollitia molestias fugit ullam, corrupti molestiae voluptate ipsa facilis. Doloremque, possimus!
              </p>
              <p className='mt-10 text-md font-[Helvetica_Now_Display]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perspiciatis eos facere nihil cupiditate voluptatem reiciendis amet, provident animi suscipit odio saepe quam temporibus mollitia molestias fugit ullam, corrupti molestiae voluptate ipsa facilis. Doloremque, possimus!
              </p>
           <button className='text-black bg-yellow-300 px-10 py-5 text-xl mt-4 rounded-lg'>Download Now</button>


  </div>

</div>

        </div>
      </div>
      }
    </>
  )

}

export default App
