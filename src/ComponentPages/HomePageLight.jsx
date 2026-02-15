import TextAnimation from '../Buttons/TextAnimation/TextAnimation'
import MyworkButton from '../Buttons/MyworkButton'
import { bgImageLight, MyPicLightmood } from '../ImportImages/ImportImages'
import DownloadButtonLight from '../Buttons/DownloadButtonLight'
import SocialMediaButton from '../Buttons/SocialMediaButton'

const bgStyle = {
     backgroundImage: `url(${bgImageLight})`,
     backgroundRepeat: " no-repeat ",
     backgroundPosition: "right top",
     
}

const HomePageLight = () => {
     return (
          <section className=' min-h-screen' style={bgStyle} >

               <div className=' container  ' >

               {/* DESKTOP */}

               <div className=' hidden lg:block ' >
                    <div className=' container flex items-center justify-between ' >
                         <div className=' grid items-center ' >
                              <div>
                                   {/*Excellence */}
                                   <div className="flex">
                                        <div className="relative group mb-5 ">
                                             <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                                             <div className="relative flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-blue-300 backdrop-blur-xl">
                                                  <span className="relative flex h-3 w-3">
                                                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
                                                       <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-300" />
                                                  </span>
                                                  <span className="text-slate-800 text-xs font-bold tracking-widest uppercase">1 Years of Excellence</span>
                                             </div>
                                        </div>
                                   </div>
                                   {/*Excellence */}

                                   <div className=' text-slate-950 text-[40px] font-extrabold  font-open-sans ' > HELLO </div> 

                                   <div>
                                        <h1 className=' text-slate-900 mt-7 text-6xl font-black font-open-sans ' >I’M Shahriar Noyon a</h1>
                                        <br />
                                        <h1> <TextAnimation /> </h1>
                                   </div>

                                   <div>
                                        <SocialMediaButton/>
                                   </div>

                                   <p className=' text-slate-600 max-w-[490px] text-[20px] mt-4 ' > Web Designer & Developer specializing in creating stunning, user-centric digital solutions that drive results.</p>
                              </div>
                         </div>

                         <div className=' relative z-10 ' >
                              <div className=' absolute translate-y-[120px] translate-x-[-140px]  ' >
                                   <h1 className=' webdesinlight text-nowrap ' >WEB DEVELOPER
                                   </h1>
                              </div>
                             
                              <div className=' relative translate-y-[39px] z-10 ' >
                                   <img className='  overflow-hidden z-40 ' src={MyPicLightmood} alt="pic" />
                              </div>
                              <div className=' absolute translate-y-[-127px] translate-x-[-140px] z-50 ' >
                                   <h1 className=' webdsinlight text-nowrap ' >WEB DEVELOPER
                                   </h1>
                              </div>
                         </div>
                    </div>

                    <div className=' flex gap-10 items-center translate-y-[-90px] justify-start'>
                         <button className='  z-30 ' >
                              <MyworkButton />
                         </button>
                         <button className='  z-30' >
                              <DownloadButtonLight />
                         </button>
                    </div>

               </div>

               {/* DESKTOP */}

               {/* MOBILE */}

               <div className=' lg:hidden container grid justify-center items-center ' >
                         <div className=' grid items-center ' >

                              <div className=' container '>

                                   <div className=' text-slate-950 text-[30px] font-extrabold  font-open-sans ' > HELLO </div> 

                                   <div>
                                        <h1 className=' text-black mt-5 text-5xl font-black font-open-sans ' >I’M Noyon a</h1>
                                        <br />
                                        <h1> <TextAnimation /> </h1>
                                   </div>

                                   <div>
                                        <SocialMediaButton/>
                                   </div>

                                   <p className=' text-slate-300 font-bold text-[15px] mt-4 ' > Web Designer & Developer specializing in creating stunning, user-centric digital solutions that drive results.</p>
                              </div>

                              <div className=' container ml-3 flex gap-10 items-center translate-y-[-140px] justify-start absolute '>
                         <button className=' z-50 cursor-pointer ' >
                              <MyworkButton />
                         </button>
                         <button className='  z-50 cursor-pointer ' >
                              <DownloadButtonLight/>
                         </button>
                    </div>

                              <div className='relative grid justify-center items-center mt-35 z-10 ' >
                              <div className='  absolute translate-y-[-190px] ' >
                                   <h1 className=' smesinlight text-nowrap ' >WEB DEVELOPER
                                   </h1>
                              </div>

                              <div className='  relative ' >
                                   <img className='  overflow-hidden translate-x-28 h-[410px] z-40 ' src={MyPicLightmood} alt="pic" />
                              </div>
                              <div className=' relative translate-y-[-100px] z-50 ' >
                                   <h1 className=' wesinlight text-nowrap '>WEB DEVELOPER
                                   </h1>
                              </div>
                         </div>

                         </div>

                    </div>

               {/* MOBILE */}

               </div>
          </section>
     )
}

export default HomePageLight
