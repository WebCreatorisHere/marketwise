"use client"
import React, { useState, useRef, useEffect } from "react";
import { useHover } from "@uidotdev/usehooks";
import Navbar from "./component/navbar";
import Footer from "./component/footer.js"
export default function Home() {
  const vidRef = useRef();
  const [clicked, setclicked] = useState(false)
  const [colorhandler, setcolorhandler] = useState({ color1: "#5D5D5D", color2: "#5D5D5D", color3: "#5D5D5D", color4: "#5D5D5D", othercolor1: "", othercolor2: "", othercolor3: "", othercolor4: "" })

  useEffect(() => { vidRef.current.play(); }, []);


  const [background, setBackground] = useState({ bluurr: "blur(0)", color: "trabsparent", display: "0", position: "-0.6rem", invert: "invert(0)", bodycolor: "#000", navtext: "white", usingtext: "white" });

  const handlescroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);

    if (scrollTop > 2300) {
      setBackground({ ...background, bodycolor: "white", bluurr: "blur(0)", invert: "invert(1)", color: "#fff", navtext: "black", usingtext: "black" })
    }
    else {
      if (scrollTop > 333) {
        setBackground({ color: "#0007", bodycolor: "black", bluurr: "blur(9px)", display: "1", invert: "invert(0)", position: "0rem", navtext: "white", usingtext: "white" })
      }
      else {
        setBackground({ color: "transparent", bodycolor: "black", bluurr: "blur(0)", display: "0", invert: "invert(0)", position: "-0.6rem", usingtext: "white", navtext: "white" })
      }
    }
    if (scrollTop > 4147) {
      setBackground({ color: "#0007", bodycolor: "black", bluurr: "blur(9px)", display: "1", invert: "invert(0)", position: "0rem", navtext: "white", usingtext: "white" })
    }
    else {

    } console.log(scrollTop)
  }

  const hoverhandle1 = (e) => {

    if (e.target.style.backgroundColor !== "") {
      console.log("eat 4star do nothing")
    }
    else {
      if (e.target.matches(":hover") == true) {
        setcolorhandler({ ...colorhandler, color1: "#CAB2FF" })
      }
      else {
        setcolorhandler({ ...colorhandler, color1: "#5D5D5D" })
      }
    }

  }
  const hoverhandle2 = (e) => {
    if (e.target.style.backgroundColor !== "") {
      console.log("eat 4star do nothing")
    }
    else {
      if (e.target.matches(":hover") == true) {
        setcolorhandler({ ...colorhandler, color2: "#72E6FF" })
      }
      else {
        setcolorhandler({ ...colorhandler, color2: "#5D5D5D" })
      }
    }
  }
  const hoverhandle3 = (e) => {
    if (e.target.style.backgroundColor !== "") {
      console.log("eat 4star do nothing")
    }
    else {
      if (e.target.matches(":hover") == true) {
        setcolorhandler({ ...colorhandler, color3: "white" })
      }
      else {
        setcolorhandler({ ...colorhandler, color3: "#5D5D5D" })
      }
    }
  }
  const hoverhandle4 = (e) => {
    if (e.target.style.backgroundColor !== "") {
      console.log("eat 4star do nothing")
    }
    else {
      if (e.target.matches(":hover") == true) {
        setcolorhandler({ ...colorhandler, color4: "#20FFC5" })
      }
      else {
        setcolorhandler({ ...colorhandler, color4: "#5D5D5D" })
      }
    }

  }
  const handleclickment = (e) => {
    let id = e.target.id
    // console.log(id.split("er")[1])
    if (e.target.style.backgroundColor == "") {
      e.target.style.backgroundColor = colorhandler[id.split("er")[1]]
      e.target.style.color = "#000"
      // setcolorhandler({...colorhandler,[id]:colorhandler[id.split("er")[1]]})
      // setclicked(!clicked)
    }
    else {
      e.target.style.backgroundColor = ""
      e.target.style.color = colorhandler[id.split("er")[1]]
    }
  }


  return (
    <div style={{ "backgroundColor": background.bodycolor }} className={`baap flex bg-black transition-all overflow-x-hidden flex-col items-end overflow-y-scroll h-[100vh] justify-between z-10 relative`} onScroll={handlescroll}>
      <Navbar bg={background} />
      <div className="upper-1 relative w-full h-full">
        <div className="container mb-96 overflow-hidden max-w-full w-full flex justify-center items-center flex-col relative z-[100] font-medium mt-[13%] text-white hilo">
          <div className="topa">Our job is</div>
          <div className="mida font-extrabold text-[#20FFC5]">to get songs heard. </div>
          <div className="bota text-[1.5rem]">Marketing for the Music Industry</div>
          <div className="buttons flex gap-5 mt-16">
            <button className="btn relative rounded-full flex justify-between w-[12.5rem] hover:w-[18rem] gap-2 items-center bg-black text-[#20FFC5] px-4 py-1.5 pb-0.[0.175rem] text-[1.35rem] font-bold hover:bg-[#20FFC5] hover:text-black"><h3>YouTube<small className="text-sm relative bottom-[0.35rem] ml-1 font-[450]">Ads</small></h3>
              <div className="chupa hidden opacity-0 text-[black] font-normal text-sm text-nowrap">GET VIEWS</div>
              <img className="innotech absolute right-3 w-[30px]" src="/equippments/east.svg" alt="" />
            </button>

            <button className="btn relative rounded-full flex justify-between w-[12rem] hover:w-[16rem] gap-3 items-center bg-black text-[#20FFC5] px-4 py-1.5 pb-0.[0.175rem] text-[1.35rem] font-bold hover:bg-[#20FFC5] hover:text-black"><h3>TikTok<small className="text-sm relative bottom-[0.35em] ml-1 font-[450]">Ads</small></h3>
              <div className="chupa hidden opacity-0 text-[black] font-normal text-sm text-nowrap">GO VIRAL</div>
              <img className="innotech absolute right-3 w-[30px]" src="/equippments/east.svg" alt="" />
            </button>

            <button className="btn relative rounded-full flex justify-between w-[12.5rem] hover:w-[20rem] gap-4 items-center bg-black text-[#20FFC5] px-4 py-1.5 pb-0.[0.175rem] text-[1.35rem] font-bold hover:bg-[#20FFC5] hover:text-black"><h3>Spotify<small className="text-sm relative bottom-[0.35rem] ml-1 font-[450]">Promo</small></h3>
              <div className="chupa hidden opacity-0 text-[black] font-normal text-sm text-nowrap">GAIN STREAM</div>
              <img className="innotech absolute right-3 w-[30px]" src="/equippments/east.svg" alt="" />
            </button>


          </div>
        </div>

        <div className="background absolute top-0 w-full h-full">
          <div className="backvideo z-[-10] w-full h-full absolute opacity-[0.15] left-0"><video className="object-cover h-full w-full"
            src="hirovid.mp4"
            ref={vidRef}
            muted
            autoPlay
            loop
          />
          </div>

          <div className="noise w-full h-full opacity-[0.07] absolute z-[-5]"></div>

          <div className="waves z-[-1] absolute w-full h-full flex justify-center items-center">
            <div style={{ "--delay": "0ms", "--strength": 1 }} className="wave h-[100px] w-[100px] rounded-full absolute border filter blur-[5px] border-slate-300"></div>

            <div style={{ "--delay": "500ms", "--strength": 0.5 }} className="wave h-[100px] w-[100px] rounded-full absolute border filter blur-[5px] border-slate-300"></div>


            <div style={{ "--delay": "1000ms", "--strength": 1 }} className="wave h-[100px] w-[100px] rounded-full absolute border filter blur-[5px] border-slate-300"></div>

            <div style={{ "--delay": "1500ms", "--strength": 0.5 }} className="wave h-[100px] w-[100px] rounded-full absolute border filter blur-[5px] border-slate-300"></div>
          </div>
        </div>
      </div>

      <div className="max-w-[100%] mb-[30rem] h-full m-auto pt-48 upper-2 relative z-50 bg-black text-white text-5xl font-medium">
        <div className="chain text-center flex flex-col gap-4">

          <div className="min-w-[100%] max-w-[800px] flex flex-col gap-4"><span>You choose the territories, we</span> <span>identify your future <span>listeners there.</span></span></div>
          <div className="text-[#20FFC5] font-extrabold text-[3.375rem]"> We are market explorers.</div>
        </div>

        <div className="floatings w-[1418px] mt-[150px] relative">

          <div>
            <button id="othercolor1" onClick={handleclickment} onMouseOver={hoverhandle1} onMouseOut={hoverhandle1} style={{ "--floatdelay": "500ms", "--roata": "6.3284deg", "color": colorhandler.color1, "border": `4px solid ${colorhandler.othercolor1 == "" ? colorhandler.color1 : colorhandler.othercolor1}` }} className="case-1 text-3xl  px-9 py-5 font-normal absolute left-[-1.1rem] top-0 rounded-full fbuttons">Results</button>
            <button id="othercolor1" onClick={handleclickment} onMouseOver={hoverhandle1} onMouseOut={hoverhandle1} style={{ "--floatdelay": "500ms", "--roata": "47.4884deg", "color": colorhandler.color1, "border": `4px solid ${colorhandler.othercolor1 == "" ? colorhandler.color1 : colorhandler.othercolor1}` }} className="case-1 text-3xl  px-10 py-5 font-normal absolute left-[20.5rem] top-12 rounded-full fbuttons">Target audience</button>
            <button id="othercolor1" onClick={handleclickment} onMouseOver={hoverhandle1} onMouseOut={hoverhandle1} style={{ "--floatdelay": "500ms", "--roata": "9.7784deg", "color": colorhandler.color1, "border": `4px solid ${colorhandler.othercolor1 == "" ? colorhandler.color1 : colorhandler.othercolor1}` }} className="case-1 text-3xl  px-9 py-5 font-normal absolute right-48 top-0 rounded-full fbuttons">Optimization</button>
          </div>
          <div>
            <button id="othercolor2" onClick={handleclickment} onMouseOut={hoverhandle2} onMouseOver={hoverhandle2} style={{ "--floatdelay": "650ms", "--roata": "-20.2757deg", "color": colorhandler.color2, "border": `4px solid ${colorhandler.othercolor2 == "" ? colorhandler.color2 : colorhandler.othercolor2}` }} className="text-3xl  px-9 py-5 font-normal absolute left-16 top-[7rem] text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[#72E6FF] hover:border-[#72E6FF]">Listeners</button>
            <button id="othercolor2" onClick={handleclickment} onMouseOut={hoverhandle2} onMouseOver={hoverhandle2} style={{ "--floatdelay": "650ms", "--roata": "30deg", "color": colorhandler.color2, "border": `4px solid ${colorhandler.othercolor2 == "" ? colorhandler.color2 : colorhandler.othercolor2}` }} className="text-3xl  px-10 py-5 font-normal absolute right-[22rem] top-[3.25rem] text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[#72E6FF] hover:border-[#72E6FF]">Engagement</button>
          </div>
          <div>
            <button id="othercolor3" onClick={handleclickment} onMouseOut={hoverhandle3} onMouseOver={hoverhandle3} style={{ "--floatdelay": "250ms", "--roata": "16.9587deg", "color": colorhandler.color3, "border": `4px solid ${colorhandler.othercolor3 == "" ? colorhandler.color3 : colorhandler.othercolor3}` }} className="border-4 text-3xl  px-10 py-5 font-normal absolute left-48 top-[0rem] text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[white] hover:border-[white]">Views</button>
            <button id="othercolor3" onClick={handleclickment} onMouseOut={hoverhandle3} onMouseOver={hoverhandle3} style={{ "--floatdelay": "250ms", "--roata": "-173.029deg", "color": colorhandler.color3, "border": `4px solid ${colorhandler.othercolor3 == "" ? colorhandler.color3 : colorhandler.othercolor3}` }} className="border-4 text-3xl  px-9 py-5 font-normal absolute left-[32rem] top-[-1.5rem] text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[white] hover:border-[white]">Viral</button>
            <button id="othercolor3" onClick={handleclickment} onMouseOut={hoverhandle3} onMouseOver={hoverhandle3} style={{ "--floatdelay": "250ms", "--roata": "-1.38719deg", "color": colorhandler.color3, "border": `4px solid ${colorhandler.othercolor3 == "" ? colorhandler.color3 : colorhandler.othercolor3}` }} className="border-4 text-3xl  px-9 py-5 font-normal absolute right-[32rem] top-32 text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[white] hover:border-[white]">Fanbase</button>
            <button id="othercolor3" onClick={handleclickment} onMouseOut={hoverhandle3} onMouseOver={hoverhandle3} style={{ "--floatdelay": "250ms", "--roata": "-17.2859deg", "color": colorhandler.color3, "border": `4px solid ${colorhandler.othercolor3 == "" ? colorhandler.color3 : colorhandler.othercolor3}` }} className="border-4 text-3xl  px-9 py-5 font-normal absolute right-[2rem] top-0 text-[#5D5D5D] rounded-full border-[#5D5D5D] fbuttons hover:text-[white] hover:border-[white]">Viral</button>
          </div>
          <div>
            <button id="othercolor4" onClick={handleclickment} onMouseOver={hoverhandle4} onMouseOut={hoverhandle4} style={{ "--floatdelay": "0ms", "--roata": "156.955deg", "color": colorhandler.color4, "border": `4px solid ${colorhandler.othercolor4 == "" ? colorhandler.color4 : colorhandler.othercolor4}` }} className="border-4 text-3xl  px-10 py-5 font-normal absolute left-[17rem] top-[7.2rem] text-[#5D5D5D] hover:text-[#20FFC5] rounded-full border-[#5D5D5D] hover:border-[#20FFC5] fbuttons">Traffic</button>
            <button id="othercolor4" onClick={handleclickment} onMouseOver={hoverhandle4} onMouseOut={hoverhandle4} style={{ "--floatdelay": "0ms", "--roata": "-22.3292deg", "color": colorhandler.color4, "border": `4px solid ${colorhandler.othercolor4 == "" ? colorhandler.color4 : colorhandler.othercolor4}` }} className="border-4 text-3xl  px-10 py-4 font-normal absolute left-[37rem] top-[3rem] text-[#5D5D5D] hover:text-[#20FFC5] rounded-full border-[#5D5D5D] hover:border-[#20FFC5] fbuttons">Visibility</button>
            <button id="othercolor4" onClick={handleclickment} onMouseOver={hoverhandle4} onMouseOut={hoverhandle4} style={{ "--floatdelay": "0ms", "--roata": "-20.7574deg", "color": colorhandler.color4, "border": `4px solid ${colorhandler.othercolor4 == "" ? colorhandler.color4 : colorhandler.othercolor4}` }} className="border-4 text-3xl  px-10 py-5 font-normal absolute right-[8rem] top-[7.5rem] text-[#5D5D5D] hover:text-[#20FFC5] rounded-full border-[#5D5D5D] hover:border-[#20FFC5] fbuttons">Results</button>
          </div>

        </div>
      </div>

      <div className="upper-3 mb-[20rem] w-full min-h-full relative z-[80] text-white text-center">
        <h1 className="text-white text-[3.575rem] ml-2 font-[450] text-center">MarketWise Solutions</h1>

        <div className="boxes flex justify-center gap-4 mt-12">

          <div className="box-1 box cursor-auto relative bg-[#141414] hover:bg-[#262626] text-white w-[27%] rounded-[1.25rem] h-[458px] pt-[56px] pl-[43px] pr-5">
            <h2 className="relative text-[#07F2B4] text-[2.15rem] text-left font-[650]">YouTube<small className="text-lg absolute top-0.5 ml-0.5 font-medium">Ads</small></h2>
            <p className="text-left text-[22px] mt-4">Boost your music visibility and reach genuine fans.</p>
            <button className="px-10 mt-[10.5rem] py-1 flex justify-center gap-2 rounded-full items-center bg-[#07F2B4] text-black font-[600] text-[14px] relative z-50">WANT IT
              <img className="w-8" src="/equippments/arrow_right.svg" alt="" />
            </button>
            <img className="atrangire absolute bottom-0 right-0 " src="https://www.marketwise.io/images/youtube.svg" alt="" />
          </div>


          <div className="box-2 box cursor-auto relative bg-[#141414] hover:bg-[#262626] text-white w-[27%] rounded-[1.25rem] h-[458px] pt-[56px] pl-[43px] pr-5">
            <h2 className="relative text-[#07F2B4] text-[2.15rem] text-left font-[650]">Spotify<small className="text-lg absolute top-0.5 ml-0.5 font-medium">Promo</small></h2>
            <p className="text-left text-[22px] mt-4">Ads that drive a flow of streams and potential listeners to your release.</p>
            <button className="px-10 mt-[8.5rem] py-1 flex justify-center gap-2 rounded-full items-center bg-[#07F2B4] text-black font-[600] text-[14px] relative z-50">WANT IT
              <img className="w-8" src="/equippments/arrow_right.svg" alt="" />
            </button>
            <img className="atrangire-1 absolute bottom-0 right-0 w-[11.5rem]" src="https://www.marketwise.io/images/spotify.svg" alt="" />
          </div>


          <div className="box-3 box cursor-auto relative bg-[#141414] hover:bg-[#262626] text-white w-[27%] rounded-[1.25rem] h-[458px] pt-[56px] pl-[43px] pr-5">
            <h2 className="relative text-[#07F2B4] text-[2.15rem] text-left font-[650]">TikTok<small className="text-lg absolute top-0.5 ml-0.5 font-medium">Promo</small></h2>
            <p className="text-left text-[22px] mt-4">This is the key to get your song viral.</p>
            <button className="px-10 mt-[10.5rem] py-1 flex justify-center gap-2 rounded-full items-center bg-[#07F2B4] text-black font-[600] text-[14px] relative z-50">WANT IT
              <img className="w-8" src="/equippments/arrow_right.svg" alt="" />
            </button>
            <img className="atrangire-2 absolute bottom-0 right-0 " src="https://www.marketwise.io/images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="grow relative w-[83%] mx-auto h-40 mt-20 outline gap-8 outline-[#6B6B6B] rounded-xl flex flex-col items-center justify-center outline-2">
          <p className="text-2xl tracking-wider -mb-2">Need to grow your playlist?</p>
          <button className="px-8 -mb-3 py-2 flex justify-center gap-2 rounded-full items-center bg-[#141414] text-[#07F2B4] font-[600] text-[13px] relative z-50">CONTACT US
            <img className="w-8" src="/equippments/arrowa-right-changed.svg" alt="not found" />
          </button>
          <img className=" absolute bottom-0 left-0 " src="https://www.marketwise.io/images/playlist.svg" alt="" />
        </div>
      </div>

      <div style={{ "color": background.usingtext }} className="middle mb-[14rem] text-white text-5xl container pt-[16.5rem] ">
        <div className="text font-medium w-[64rem] m-auto text-center leading-[4rem]">
          <p className="text-[#8D44FF] font-bold">We don't waste your budget doing testing</p>
          <p>We base our service on pre-tested audience and content strategies, doing continuous experimentation <span className="underline underline-[#fff] underline-offset-[9px]">but with our own funds.</span></p>
        </div>
        <div className="down mt-[13rem]">
          <h1 className="flex font-semibold gap-6 justify-center items-center">The <svg className="mt-4" xmlns="http://www.w3.org/2000/svg" width="105" height="22" viewBox="0 0 105 22" fill="none">
            <path d="M2 17.9989L16.3729 3.85938L30.7458 17.9989L45.1186 3.85938L59.4915 17.9989L73.8644 3.85938L88.6864 17.9989L102.826 3.85949" stroke="black" strokeWidth="5" />
          </svg> Team</h1>

          <div className="corusel mt-16">
            <img className="w-[95%]" src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg" alt="" />
          </div>
          <div className="twoflexi flex py-[8rem] px-24">
            <div className="1st leading-[3.7rem] w-1/2">
              <p className="text-[2.89rem] font-medium">
                Industry leaders,
              </p>
              <p className="text-[2.89rem] font-medium text-[#00E5A9]">with a human touch.
              </p>
            </div>
            <div className="2nd w-1/2 space-y-10">
              <p className="text-2xl w-[27rem] font-medium">
                Our personalized approach values <span className="underline underline-offset-4">human connection</span>, while our dedicated campaign managers track your evolving journey.
              </p>
              <p className="text-2xl w-[27rem] font-medium">
                We nurture your creativity, identify promotion opportunities, and amplify your music's reach to the right audience, at the right time
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="downwards-1 container relative h-auto text-white">
        <div className="buttone mb-52 flex flex-col justify-center w-[53.5rem] text-white m-auto ">
          <div className="flex self-end">
            <button className="bg-transparent cursor-default border-4 px-[2rem] py-1.5 text-[2.4rem] rounded-full border-[#CBCBCB]">WE ARE</button>
            <button className="bg-[#CBCBCB] cursor-default px-[2rem] py-1.5 text-[2.4rem] text-black rounded-full border-white">BACKING</button>
            <button className="bg-transparent cursor-default border-4 px-[2rem] py-1.5 text-[2.4rem] rounded-full border-[#CBCBCB]">THE MARKETING</button>
          </div>
          <div className="flex self-start">
            <button className="bg-[#CBCBCB] cursor-default px-[2rem] py-1.5 text-[2.4rem] text-black rounded-full border-white">EFFORTS</button>
            <button className="bg-transparent cursor-default border-4 px-[2rem] py-1.5 text-[2.4rem] rounded-full border-[#CBCBCB]">OF BOOMING</button>
            <button className="bg-[#CBCBCB] cursor-default px-[2rem] py-1.5 text-[2.4rem] text-black rounded-full border-white">ARTISTS</button>
          </div>
          <div className="flex self-center">
            <button className="bg-[#CBCBCB] cursor-default px-[2rem] py-1.5 text-[2.4rem] text-black rounded-full border-white">THAT YOU</button>
            <button className="bg-transparent cursor-default border-4 px-[2rem] py-1.5 text-[2.4rem] rounded-full border-[#CBCBCB]">HAVE HEARD.</button>
          </div>
        </div>
        <div className="bottompart">
          <h3 className="font-bold text-[3.4rem] w-[60rem] m-auto leading-[4.2rem] text-center">
            <span className="text-[#8D44FF] font-[650]">Our solutions</span> work for every stage of your career or music company.
          </h3>
          <p className="text-[#6A6A6A] font-medium text-[1.75rem] text-center mt-10 w-[52rem] m-auto">
            Our work is actually requested by Record Labels, Music Distributors and PR Companies that you have probably seen...
          </p>
        </div>
        <div className="trusters flex w-[55rem] m-auto gap-12 mt-20">
          <img src="https://www.marketwise.io/icons/warnermusic.svg" alt="" />
          <img src="https://www.marketwise.io/icons/onerpm.svg" alt="" />
          <img src="https://www.marketwise.io/icons/universal.svg" alt="" />
          <img src="https://www.marketwise.io/icons/zil.svg" alt="" />
          <img src="https://www.marketwise.io/icons/liberty.svg" alt="" />
        </div>
      </div>

      <div className="downwards-2 -z-20 text-white m-auto mt-36 mb-36 min-h-[34rem] rounded-[20px] gradient flex flex-col justify-center gap-y-14 items-center w-[70rem]">
        <h1 className="text-[55px] text-center mt-10 mr-3 leading-[3.97rem] w-[42rem] font-medium">Invest with <span className="text-[#20FFC5] w-full">Market Wises</span> instead of marketeers</h1>
        <button className="bg-[#20FFC5] w-fit h-fit text-black py-4 px-16 font-bold rounded-full">CONTACT US</button>
      <div className="rashes -z-10"></div>
        <img style={{"--delay-2":"1s"}} className="figure bottom-[100px] z-40 left-[140px] absolute" src="https://www.marketwise.io/icons/squarefill.svg" alt="" />
        <img style={{"--delay-2":"2s"}} className="figure bottom-[80px] z-[40] left-[60px] absolute" src="https://www.marketwise.io/icons/triangle.svg" alt="" />
      <img style={{"--delay-2":"0s"}} className="figure top-[50px] z-[40] right-[50px] absolute" src="https://www.marketwise.io/icons/circlefill.svg" alt="" />
      <img style={{"--delay-2":"1s"}} className="figure top-[79px] z-[40] right-[84px] absolute" src="https://www.marketwise.io/icons/arrowthin.svg" alt="" />
      <img style={{"--delay-2":"0s"}} className="figure bottom-[96px] z-[40] right-[88px] absolute" src="https://www.marketwise.io/icons/trianglefill.svg" alt="" />
      <svg width="315" height="83" viewBox="0 0 315 83" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[96px] right-[1px] z-50 pointer-events-none select-none">
      <path className="stroke astro-P7TGVQXD" d="M314 81L234.904 2L156.158 81L77.4186 2L1 78.6568" stroke="#20FFC5" strokeWidth="2" strokeMiterlimit="10" strokeDasharray="5 5"></path>
    </svg>
      </div>
      
<Footer/>

    </div>
  );
}
