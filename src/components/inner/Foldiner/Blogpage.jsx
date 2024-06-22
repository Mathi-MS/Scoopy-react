import { useState } from "react"

const Blogpage = () =>{
    const [bloglist,setbloglist] =useState(
        [
            {
                img:require("../../../Assests/images/Blog/blog-1.jpg"),
                title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus obcaecati corrupti id. Incidunt, blanditiis aut.",
                content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sequi alias, quas expedita natus quibusdam voluptatum inventore velit eos facilis. Expedita dolorem unde ipsam deleniti pariatur? Tenetur fugit quas omnis blanditiis saepe et ullam in? Impedit eos, alias quis ipsam quibusdam mollitia adipisci at eum voluptas ducimus. Corrupti maiores quas voluptatibus! Sapiente, laudantium. Quidem facilis perspiciatis vitae quod assumenda! Vero, cupiditate delectus cum magnam blanditiis rerum deleniti necessitatibus itaque sunt?",
                date:"May-12-2024"
            },
            {
                img:require("../../../Assests/images/Blog/blog-1.jpg"),
                title:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus obcaecati corrupti id. Incidunt, blanditiis aut.",
                content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat sequi alias, quas expedita natus quibusdam voluptatum inventore velit eos facilis. Expedita dolorem unde ipsam deleniti pariatur? Tenetur fugit quas omnis blanditiis saepe et ullam in? Impedit eos, alias quis ipsam quibusdam mollitia adipisci at eum voluptas ducimus. Corrupti maiores quas voluptatibus! Sapiente, laudantium. Quidem facilis perspiciatis vitae quod assumenda! Vero, cupiditate delectus cum magnam blanditiis rerum deleniti necessitatibus itaque sunt?",
                date:"May-12-2024"
            },
            
        ]
    )
    return(
        <>
            <section id="blog" class="lg:px-20 lg:py-20 md:px-14 md:py-14 px-8 py-8">
                <div>
                    {
                        bloglist.map((item) =>{
                            return(
                                <>
                                    <div class="flex lg:flex-row flex-col items-center mt-5">
                                        <div class="w-[100%]">
                                            <img src={item.img} alt="blog" class="w-[100%] md:h-[400px] object-cover" />
                                        </div>
                                        <div class="w-[100%] py-5 md:py-10 lg:pl-10">
                                            <h2 class="text-2xl md:text-3xl font-[recoleta] font-bold md:text-left">{item.title}</h2>
                                            <p class="font-[recoleta] mt-2 md:mt-5">{item.content}</p>
                                            <p class="font-[recoleta] mt-2">{item.date}</p>
                                        </div>
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

export default Blogpage