import landingimg from '../Assests/images/layer.png'
const Landingabout = () =>{
    return(
        <>
            <section id="about" className="relative lg:px-20 lg:py-20 md:px-14 md:py-14 px-8 py-8 text-center">
                <h2 className="text-5xl font-[recoleta] font-semibold mt-[10%]  sm:mt-[18%] lg:mt-[20%] xl:mt-[22%] mb-3 text-[#725D68] relative z-20">About <span className="text-[#fe831d]">Us</span></h2>
                <p className=" font-[poppins] text-[#725D68] relative z-20">All ingredients are hand-picked, the fruits are manually cleaned and whole fruits are used in production. That’s the reason why we call it 'Handcrafted Ice Creams’. Since there are no preservatives in our ice cream, the shelf life of our product is just 60 days. When compared with other brands, which have a longer shelf life, it is a herculean effort to manufacture, distribute and sell our ice cream across the nation within 60 days. With more experience and better processes, we have been successful in overcoming various challenges to bring Scoopy to you, making every challenge worth it and after tasting Scoopy you surely would agree!</p>
                <img src={landingimg} alt="layer" className="absolute top-0 left-0 w-[100%] z-10"/>
                <div className="flex justify-between mt-10 md:flex-row flex-col md:gap-0 gap-5">
                    <div className="box bg-[#f8edd1] w-[100%] md:w-[45%] px-10 py-5 rounded-lg font-[Poppins] ">
                        <h2 className="text-4xl font-[recoleta] font-bold text-[#fe831d]">Mission</h2>
                        <p className="text-[#725D68]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae eveniet dicta omnis eligendi perferendis, laborum quasi odit delectus quam nulla itaque saepe? Rerum, sequi. Alias consectetur maxime sit beatae?</p>
                    </div>
                    <div className="box bg-[#f8edd1] w-[100%] md:w-[45%] px-10 py-5 rounded-lg font-[Poppins]">
                        <h2 className="text-4xl font-[recoleta] font-bold text-[#fe831d]">Vision</h2>
                        <p className="text-[#725D68]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque repudiandae eveniet dicta omnis eligendi perferendis, laborum quasi odit delectus quam nulla itaque saepe? Rerum, sequi. Alias consectetur maxime sit beatae?</p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Landingabout