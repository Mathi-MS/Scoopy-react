import { useState } from 'react'
import banner from '../../../Assests/images/About/banner.png'
import { useLocation } from 'react-router-dom'

const Bannerpage = () =>{

    const [banneritem,setbanneritem] = useState(
        [
            {
                name:"/about",
                img:require("../../../Assests/images/About/banner.png"),
                title:"About Us"
            },
            {
                name:"/products",
                img:require("../../../Assests/images/Products/banner.png"),
                title:"Products"
            },
            {
                name:"/blog",
                img:require("../../../Assests/images/Contact/banner.png"),
                title:"Blog"
            },
            {
                name:"/contact",
                img:require("../../../Assests/images/Contact/banner-1.png"),
                title:"Contact Us"
            },
        ]
    )
    const location = useLocation()
    const path = location.pathname

    const newitem = banneritem.filter((data)=>{
        if(data.name == path){
            return true
        }
        else{
            return false
        }
    })
    const [bimage,setbimage] = useState(newitem[0].img)
    const [btitle,setbtitle] = useState(newitem[0].title)
    
    return(
        <>
            <section id="contactbanner">
                <div class="relative sm:h-auto h-[300px]">
                    <img src={bimage} alt="banner" class="w-[100%] h-[100%] object-cover" />
                    <div class="absolute top-0 bg-[#000000ab] w-[100%] h-[100%] flex items-center justify-center">
                        <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-[Poppins] text-white font-bold">{btitle}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bannerpage