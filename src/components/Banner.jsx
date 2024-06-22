import cone from '../Assests/images/cone.png'
import bannerone from '../Assests/images/banner-2.png'
import bannertwo from '../Assests/images/banner-1.png'
import bannerthree from '../Assests/images/banner-3.png'
import { useState } from 'react'
const Banner = () =>{

    const [bannerimg,setbannerimg] =useState(bannerone)
    const [bgcolor,setbgcolor] =useState('bg-[#7B4B41]')
    const [overlay,setoverlay] =useState('bg-[#ce9184]')
    const [dotone,setdotone] =useState('opacity-50')
    const [dottwo,setdottwo] =useState()
    const [dotthree,setdotthree] =useState()
    const [animation,setanimation] =useState()
    const navone = () =>{
        console.log("navone")
        setbannerimg(bannerone)
        setbgcolor("bg-[#7B4B41]")
        setoverlay('bg-[#ce9184]')
        setdotone('opacity-50')
        setdottwo('')
        setdotthree('')
        setanimation('anime')
        setTimeout( () =>{
            setanimation('')
        },1000)
    }
    const navtwo = () =>{
        console.log("twio")
        setbannerimg(bannertwo)
        setbgcolor("bg-[#ff677d]")
        setoverlay('bg-[#fcb3beec]')
        setdotone('')
        setdottwo('opacity-50')
        setdotthree('')
        setanimation('anime')
        setTimeout( () =>{
            setanimation('')
        },1000)
    }
    const navthree = () =>{
        console.log("three")
        setbannerimg(bannerthree)
        setbgcolor("bg-[#446F25]")
        setoverlay('bg-[#498b19]')
        setdotone('')
        setdottwo('')
        setdotthree('opacity-50')
        setanimation('anime')
        setTimeout( () =>{
            setanimation('')
        },1000)
    }

    return(
        <>
            <section id="banner" className="bg-red-500  relative overflow-hidden">
                <div className={`banner__one p-52 lg:p-72 duration-700 ${bgcolor}`}>
                    <div className="image absolute m-auto left-0 right-0 top-0 bottom-0 z-10 lg:w-max lg:h-max w-[40%] h-[40%] scale-[1.3]">
                        <img src={bannerimg} alt="banner-1" className={`w-full h-full ${animation} bannerimg object-contain`} />
                    </div>
                    <div className={`overlay_one absolute m-auto left-0 right-0 top-0 bottom-0 w-[50%] h-[70%] rounded-full ${overlay} blur-[100px]`}></div>
                    <div className="extra absolute top-[-70px] opacity-55 left-[-50px] lg:left-10 scale-50 lg:scale-75">
                        <img src={cone} alt="cone" />
                    </div>
                    <div className="extra absolute bottom-[5%] opacity-55 right-[-50px] lg:right-10 scale-50 lg:scale-75 rotate-90">
                        <img src={cone} alt="cone" />
                    </div>
                </div>
                <div className="navigate flex gap-1 absolute bottom-14 left-14">
                    <div className={`navigate__one w-[15px] h-[15px] bg-white rounded-full cursor-pointer ${dotone}`} onClick={navone}></div>
                    <div className={`navigate__two w-[15px] h-[15px] bg-white rounded-full cursor-pointer ${dottwo}`} onClick={navtwo}></div>
                    <div className={`navigate__three w-[15px] h-[15px] bg-white rounded-full cursor-pointer ${dotthree}`} onClick={navthree}></div>
                </div>
            </section>
        </>
    )
}

export default Banner