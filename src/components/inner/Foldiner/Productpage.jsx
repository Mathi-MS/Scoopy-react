import { useState } from "react"

const Productpage = () => {
    const [productlist,setproductlist] = useState(
        [
            {
                img:require('../../../Assests/images/cate-1.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/cate-2.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/cate-3.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/cate-4.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-1.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-2.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-3.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-4.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-5.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-6.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallery-7.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallerytwo-1.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallerytwo-2.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallerytwo-3.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallerytwo-4.jpg'),
                name:'lorem1',
                prize:2
            },
            {
                img:require('../../../Assests/images/gallerytwo-5.jpg'),
                name:'lorem1',
                prize:2
            },
        ]
    )
    return(
        <>
            <section id="products" class="px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20 ">
                <div class="relative w-[80%] m-auto">
                    <input type="text" placeholder="Search" class=" outline-none w-[100%]  block py-2 px-3 text-[16px] font-[Poppins] border border-black" />
                    <div class="absolute bg-black top-0 right-0 w-[40px] h-[100%] flex items-center justify-center cursor-pointer">
                        <i class="fa-solid fa-magnifying-glass text-white"></i>
                    </div>
                </div>
                <div class="mt-14 flex flex-wrap md:gap-5 justify-between">
                    {/* <div class="basis-[47%] md:basis-[31%] lg:basis-[22%]">
                        <div class="w-[100%] h-[200px] sm:h-[250px]">
                            <img src={cateone} alt="products" class="w-[100%] h-[100%] object-cover" />
                        </div>
                        <h1 class="font-[recoleta] text-[18px] sm:text-2xl mt-4 mb-1">Lorem cream</h1>
                        <p class="font-[Poppins] text-[16px] mb-4">$2</p>
                    </div> */}
                    {
                        productlist.map((item,index)=>{
                            return(
                                <>
                                    <div class="basis-[47%] md:basis-[31%] lg:basis-[22%]" key={index}>
                                        <div class="w-[100%] h-[200px] sm:h-[250px]">
                                            <img src={item.img} alt="products" class="w-[100%] h-[100%] object-cover" />
                                        </div>
                                        <h1 class="font-[recoleta] text-[18px] sm:text-2xl mt-4 mb-1">{item.name}</h1>
                                        <p class="font-[Poppins] text-[16px] mb-4">${item.prize}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
            </section>
        </>
    )
}

export default Productpage