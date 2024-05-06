import { useState, useRef, useMemo } from 'react'
import Line from './components/Line'
import Anchor from './components/Anchor'
import TypingAnimation from './components/Name'
import androidstudio from './assets/android-studio.png'
import android from './assets/android.png'
import arrow from './assets/arrow.png'
import C from './assets/C.png'
import Cplus from './assets/C++.png'
import Slider from './components/Slider'
import Code from './assets/Code.png'
import crypto from './assets/crypto.mp4'
import dsa from './assets/dsa.png'
import firedb from './assets/firedb.png'
import frame from './assets/frame.png'
import telegram from './assets/telegram.png'
import Instagram from './assets/Instagram.png'
import java from './assets/java.png'
import Kt from './assets/Kt.png'
import lines from './assets/lines.jpg'
import skillbg from './assets/skillsbg.png'
import myphoto from './assets/my-photo.png'
import postman from './assets/postman.png'
import rightarrow from './assets/right-arrow.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import gmail from './assets/gmail.png'
import resume from './assets/resume.png'
import contactbg from './assets/contactbg.png'
import windealer from './assets/windealer.mp4'
import education from './assets/education.png'
import windeal from './assets/windeal.mp4'
import web from './assets/web.png'
import './responsive.css'
import './App.css'

function App() {
 const [num, setNum] = useState(0)
  const cards = useMemo(() => {return [
  <div className='!w-inherit h-inherit !flex max-lg:flex-col-reverse max-lg:gap-5 max-lg:!text-center items-center justify-between '>
    <div className="leftpart w-full flex flex-col gap-5">
      <h1 className="tangerine-bold max-sm:text-3xl text-yellow-600 font-bold text-5xl">1. Crypto - current values of crypto currency</h1>
      <p className="aboutproject text-base max-sm:text-sm font-[400] text-justify max-lg:text-center">I am learning application development with kotlin language. Here, I'm sharing screenshots of my new application "Crypto" which shows current values of crypto currency. There is a searching bar, by which we can search a perticular crypto currency.
      </p>
      <h2 className='font-bold max-sm:text-sm text-sky-500 text-xl'>These are the tools has used in Crypto Project</h2>
      <div className="projectools max-lg:justify-center flex gap-2 ">
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={androidstudio} alt="" />
          <h2 className='font-bold'>Android studio</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={Kt} alt="" />
          <h2 className='font-bold'>Kotlin</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={postman} alt="" />
          <h2 className='font-bold'>Postman</h2>
        </div>
      </div>
    </div>
    <div className="rightpart w-full grid justify-items-center justify-center">
      <img src={frame} alt="" className="frame w-52 max-sm:w-48" />
      <video src={crypto} autoPlay muted loop className="projectinterface max-sm:w-48 w-52 rounded-[30px]"></video>
      <a href="http://" target="_blank" rel="noopener noreferrer" className='mt-3 font-medium text-xs text-white hover:border-indigo-700 transition border-2 p-[3px] rounded-md'>View full video</a>
    </div>
  </div>,
  <div className='!w-inherit h-inherit !flex max-lg:flex-col-reverse max-lg:gap-5 max-lg:!text-center items-center justify-between '>
    <div className="leftpart w-full flex flex-col gap-5">
      <h1 className="tangerine-bold max-sm:text-3xl text-sky-600 font-extrabold text-5xl">2. Windeal - a deal with your own dealer</h1>
      <p className="aboutproject text-base max-sm:text-sm font-[400] text-justify max-lg:text-center">"Windeal" seems like a convenient tool for consumers looking to find the best deals and dealers in their local area for products they want to purchase on EMI (Equated Monthly Installments). It could help users make informed decisions and potentially save money on their purchases. And "Windealer" sounds like it could complement Windeal by perhaps offering services or features tailored more towards dealers or sellers.
      </p>
      <h2 className='font-bold max-sm:text-sm text-green-500 text-xl'>These are the tools has used in Windeal Project</h2>
      <div className="projectools max-lg:justify-center flex gap-2 ">
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={androidstudio} alt="" />
          <h2 className='font-bold'>Android studio</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={Kt} alt="" />
          <h2 className='font-bold'>Kotlin</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={firedb} alt="" />
          <h2 className='font-bold'>Firebase</h2>
        </div>
      </div>
    </div>
    <div className="rightpart w-full grid justify-items-center justify-center">
      <img src={frame} alt="" className="frame w-52 max-sm:w-48" />
      <video src={windeal} autoPlay muted loop className="projectinterface max-sm:w-[180px] w-[194px] rounded-[30px]"></video>
      <a href="http://" target="_blank" rel="noopener noreferrer" className='mt-3 font-medium text-xs text-white hover:border-indigo-700 transition border-2 p-[3px] rounded-md'>View full video</a>
    </div>
  </div>,
  <div className='!w-inherit h-inherit !flex max-lg:flex-col-reverse max-lg:gap-5 max-lg:!text-center items-center justify-between '>
    <div className="leftpart w-full flex flex-col gap-5">
      <h1 className="tangerine-bold max-sm:text-3xl text-red-600 font-bold text-5xl">3. Windealer - make a deal easily</h1>
      <p className="aboutproject text-base max-sm:text-sm font-[400] text-justify max-lg:text-center">I've Created "Windealer" an Android application empowering dealers to efficiently manage stock, customer information, and EMI transactions. Implemented features facilitating online inquiries from the companion Windeal app, streamlining communication and sales processes.</p>
      <h2 className='font-bold max-sm:text-sm text-sky-500 text-xl'>These are the tools has used in Windealer Project</h2>
      <div className="projectools max-lg:justify-center flex gap-2 ">
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={androidstudio} alt="" />
          <h2 className='font-bold'>Android studio</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={Kt} alt="" />
          <h2 className='font-bold'>Kotlin</h2>
        </div>
        <div className="tool border-gray-500 max-sm:size-16 size-20 bg-black rounded-full">
          <img src={firedb} alt="" />
          <h2 className='font-bold'>Firebase</h2>
        </div>
      </div>
    </div>
    <span className="rightpart w-full inline-grid justify-items-center justify-center">
      <img src={frame} alt="" className="frame w-52 max-sm:w-48" />
      <video src={windealer} autoPlay muted loop className="projectinterface w-[192px] max-sm:w-[180px] rounded-[30px]"></video>
      <a href="http://" target="_blank" rel="noopener noreferrer" className='mt-3 font-medium text-xs text-white hover:border-indigo-700 transition border-2 p-[3px] rounded-md'>View full video</a>
    </span>
  </div>]}
, [num]);
  const toggleNav = (element) => {
    let arrow = document.getElementById('arrow');
    let toggle = document.getElementById('toggle-nav');
    if (element.style.top != '60px') {
      element.style.top = '60px'
      toggle.style.top = '120px'
    } else {
      element.style.top = '0px'
      toggle.style.top = '60px'
    }

    if (arrow.style.rotate != '90deg') {
      arrow.style.rotate = '90deg'
    } else {
      arrow.style.rotate = '0deg'
    }
  }

  return (
    <>
      <header className="m-auto py-2 flex justify-between h-[60px] items-center fixed top-0 bg-gray-900 z-10 border-b-2 px-3 border-gray-800 w-[100%]" id='top'>
        <nav className="left-nav"><h1 className='text-5xl tangerine-bold font-bold'>Anuj Vishwakarma</h1></nav>
        <nav className="right-nav flex gap-5">
          <Anchor href={"#education"} value={"Eduacation"} />
          <Anchor href={"#skills"} value={"Skills"} />
          <Anchor href={"#projects"} value={"Projects"} />
          <Anchor href={"#contact"} value={"Contact me"} />
        </nav>
      </header>
      <div id='res-nav' className="hidden h-[60px] transition-all duration-200 font-bold overflow-scroll z-50 items-center justify-center !bg-gray-800 !p-0 sticky top-[0px] gap-3 w-full">
        <Anchor href={"#education"} value={"Eduacation"} />
        <Anchor href={"#skills"} value={"Skills"} />
        <Anchor href={"#projects"} value={"Projects"} />
        <Anchor href={"#contact"} value={"Contact me"} />
      </div>
      <div id='toggle-nav' onClick={() => toggleNav(document.getElementById('res-nav'))} className="hidden toggle transition-all duration-200 sticky z-50 top-[60px] gap-2 items-center bg-slate-800 rounded-br-full p-2 w-28">
        <h2 className="text-xl font-medium">Navlist</h2>
        <img src={arrow} className="size-4 transition invert" alt='' id="arrow" />
      </div>
      <Line />
      <main className='container m-auto'>
        <section className="scroll-mt-11 about-me flex flex-col justify-around text-center gap-5 items-center" id="top">
          <div className="left-about min-w-[380px] max-w-[60%] flex items-center flex-col gap-1">
            <div className='flex flex-col items-center'>
              <div className="photo grid items-center justify-items-center grid-rows-[255px] grid-cols-[255px]">
                <img src={myphoto} className="my-photo border-solid rounded-full" alt="" />
                <div className="rgb-backlight"></div>
              </div>
              <div className="thought italic">
                <h2 className='text-xl font-bold'>By me,</h2>
                <h3 className='text-base font-bold'>The Practice makes the man perfect! Keep Exploring and Learning</h3>
              </div>
            </div>
            <h2 className="text-xl font-bold text-green-600 italic">Hey There! I am,</h2>
            <h1 className="name flex text-3xl font-bold italic">
              <TypingAnimation text={"Anuj Vishwakarma"} />
              <div id="blinker" className='blinker rounded  font-semibold'>|</div>
            </h1>
            <h2 className="description text-xl font-bold italic">Android Developer. <span className="text-blue-700 font-bold text-xl italic">A self taught programmer with interest in
              Electronics</span></h2>
            <p className="pointsm flex items-center text-base font-semibold"><img className='size-4' src={rightarrow} alt="" />&nbsp;&nbsp;Striving to learn and
              Explore new technologies</p>
            <p className="pointsm flex items-center text-base font-semibold"><img className='size-4' src={rightarrow} alt="" />&nbsp;&nbsp;Indian Institute of
              Information Technology (IIIT), Bhopal</p>
          </div>
          <div className="right-about flex flex-col min-w-[60px] max-w-[90%] gap-5 items-center">
            <h2 className="text-green-400 text-[28px] font-bold">About</h2>
            <p className="text-[17px] text-justify">Hey I m, Anuj Vishwakarma a 21 year old tech enthusiast from Bhopal, Madhya Pradesh. I've
              been close to computers since an early age, and been passionate about them ever since.</p>
            <p className="text-[17px] text-justify">I am an undergraduate student at Indian Institute of Information Technology, Bhopal
              currently pursuing B.tech. in Electronics and Communication. I am a programmer and constantly striving
              to explore new technologies in order to upgrade my skills.I do programming in various languages and
              technologies including no-code-tools.</p>
            <p className="text-[17px] text-justify">I'm interested in building something awesome with code and automate tasks
              with code,
              currently focused on Mobile Development, Open Source and Competitive Programming.</p>
            <div className="buttons flex gap-3 max-md:flex-col max-md:w-full items-center">
              <div className='max-md:w-full'><a className='flex items-center max-md:w-full justify-center gap-2 text-black bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition border-[2.5px]' href="https://www.linkedin.com/in/anuj-vishwakarma-5488ab24a" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className='size-6 invert' /><span className="font-semibold ">Linkedin</span></a></div>
              <div className='max-md:w-full'><a className='flex items-center max-md:w-full justify-center gap-2 text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition border-[2.5px]' href="https://github.com/anuj-C0d3" target="_blank" rel="noopener noreferrer"><img src={github} alt="" className='size-6 invert' /><span className="font-semibold ">Github</span></a></div>
              <div className='max-md:w-full'><a className='flex items-center max-md:w-full justify-center gap-2 text-black bg-gradient-to-r from-lime-500 to-green-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition border-[2.5px]' href="https://mail.google.com/mail/u/0/#search/.amvj111tbpl%40gmail.com" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="" className='size-6 invert' /><span className="font-semibold ">Gmail</span></a></div>
              <div className='max-md:w-full'><a className='flex items-center max-md:w-full justify-center gap-2 text-black bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition border-[2.5px]' href="https://drive.google.com/file/d/1Umro9i93_UBRzXGpWAGdGWFrIDvIdzvJ/view?usp=drivesdkhttps://drive.google.com/file/d/1Umro9i93_UBRzXGpWAGdGWFrIDvIdzvJ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><img src={resume} alt="" className='size-6 invert' /><span className="font-semibold ">Resume</span></a></div>
            </div>
          </div>

        </section>
        <Line />
        <section className='scroll-mt-11 flex justify-around items-center gap-6' id="education">
          <div className="left-education flex flex-col gap-5">
            <h1 className="text-green-400 text-[24px] font-bold">Education</h1>
            <div className="main flex">
              <div className="figure">
                <img src={lines} alt="" />
              </div>
              <div className="educations flex flex-col gap-[85px]">
                <div className="education text-[18px] font-semibold">
                  <p className="place">Indian Institute of Information Technology, Bhopal</p>
                  <p className="work">B.Tech | Electronics and Communication | 2026</p>
                </div>
                <div className="education text-[18px] font-semibold">
                  <p className="place">Surbhi Vidhya Niketan HR SEC School, Bhopal</p>
                  <p className="work">Class XII | 95.4% | 2021</p>
                </div>
                <div className="education text-[18px] font-semibold">
                  <p className="place">Surbhi Vidhya Niketan HR SEC School, Bhopal</p>
                  <p className="work">Class X | 94.2% | 2019</p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-education">
            <img src={education} className='size-96' alt="" />
          </div>
        </section>
        <Line />
        <section className="scroll-mt-11 flex gap-2 items-center justify-around" id="skills">
          <div className="leftside flex flex-col gap-2">
            <h1 className="text-green-400 text-[24px] font-bold">Skills, Tools & Languages</h1>
            <h2 className="text-orange-400 text-[21px] font-bold">Here is my some skills & tools will I have used</h2>
            <h1 className="text-blue-400 text-[19px] font-bold">Tools</h1>
            <div className="tools">
              <div className="tool">
                <img src={postman} alt=""
                  className="tool-logo" />
                <h3 className="tool-name">Postman</h3>
              </div>
              <div className="tool">
                <img src={androidstudio} alt="" className="tool-logo" />
                <h3 className="tool-name">Android Studio</h3>
              </div>
              <div className="tool">
                <img src={firedb} alt="" className="tool-logo" />
                <h3 className="tool-name">Firebase</h3>
              </div>
              <div className="tool">
                <img src={Code} alt="" className="tool-logo" />
                <h3 className="tool-name">VS Code</h3>
              </div>
            </div>
            <h1 className="text-blue-400 text-[19px] font-bold">Languages</h1>
            <div className="languages">
              <div className="language">
                <img src={java} alt="" className="lang-img" />
                <h3 className="lang-name">Java</h3>
              </div>
              <div className="language">
                <img src={Kt} alt="" className="lang-img" />
                <h3 className="lang-name">Kotlin</h3>
              </div>
              <div className="language">
                <img src={C} alt="" className="lang-img" />
                <h3 className="lang-name">C</h3>
              </div>
              <div className="language">
                <img src={Cplus} alt="" className="lang-img" />
                <h3 className="lang-name">C++</h3>
              </div>
            </div>
            <h1 className="text-blue-400 text-[19px] font-bold">Skills</h1>
            <div className="skills">
              <div className="skill">
                <img src={android} alt="" className="skillimg" />
                <h3 className="skillname">App Development</h3>
              </div>
              <div className="skill">
                <img src={web} alt="" className="skillimg" />
                <h3 className="skillname">Web Development</h3>
              </div>
              <div className="skill">
                <img src={dsa} alt="" className="skillimg" />
                <h3 className="skillname">DSA with Java</h3>
              </div>
            </div>
          </div>
          <div className="rightside">
            <img src={skillbg} className='size-96' alt="" />
          </div>
        </section>
        <Line />
        <section className="scroll-mt-11 relative flex flex-col flex-nowrap justify-center gap-8" id="projects">
          <div className="flex flex-col gap-1">
            <h1 className="text-green-400 text-[24px] font-bold">Projects</h1>
            <h3 className="text-blue-400 text-[20px] font-bold">Here are some projects on which I have worked.</h3>
          </div>
          <Slider cards={cards} />
        </section>
        <Line />
        <section className="scroll-mt-11 !py-24 flex m-h-[450px] justify-around gap-3 items-center" id="contact">
          <div className="left-contact flex flex-col gap-3">
            <h1 className="text-green-400 text-[24px] font-bold">Contact with me</h1>
            <form action="https://api.web3forms.com/submit" className='gap-2 flex flex-col' method="POST">
              <div><input type="hidden" name="access_key" value="df4fb01d-4630-4adf-abd2-8cd8919aed7d" /></div>
              <div><input type="text" name="name" id="name" className="input text-gray-950 focus-within:border-none focus:border-none" aria-autocomplete="none" required placeholder="Enter Your Name" /></div>
              <div><input type="email" name="email" id="email" className="input text-gray-950 focus-within:border-none focus:border-none" aria-autocomplete='none' required placeholder="Enter Your email" /></div>
              <div><textarea name="message" id="message" className="input text-gray-950 focus-within:!border-none" aria-autocomplete='none' required placeholder="Enter Your Message" cols="30" rows="10"></textarea></div>
              <div><button id="send" type="submit">Send</button></div>
            </form>
          </div>
          <div className="right-contact">
            <img src={contactbg} className='size-96' alt="" />
          </div>
        </section>
      </main>
      <Line />
      <footer className="footer flex flex-col items-center justify-center text-center bg-gray-900 py-5 gap-2">
        <div className="links flex gap-2">
          <a href="" id="intagram"><img src={Instagram} alt="" className='size-9 border-gray-400 border-[3px] border-solid rounded-full active:border-orange-400 hover:border-white transition' /></a>
          <a href="" id="telegram"><img src={telegram} alt="" className='size-9 border-gray-400 border-[3px] border-solid rounded-full active:border-orange-400 hover:border-white transition' /></a>
        </div>
        <div className="text flex flex-col items-center justify-center font-semibold text-slate-100">
          <p>Developed and designed by <span className="text-blue-500">Anuj Vishwakarma</span></p>
          <p>Developed Using <span className="text-green-500">VS Code</span> and Depoyed on <span className="text-green-500">Vercel</span></p>
          <p>Copyright &copy; 2024 | <span className="text-orange-500">Anuj Vishwakarma</span> | All rights reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
