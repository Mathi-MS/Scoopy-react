import { useContext,useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Logincontext } from "../../Context";

const Signininner = () =>{

    const navigate = useNavigate()
    var {loginlist,setloginlist} = useContext(Logincontext)


    const [emailval,setemailval] = useState()
    const [passval,setpassval] = useState()
    const [show,setshow] = useState(true)
    

    const login = () =>{
        loginlist.filter((item) =>{
            if(item.email == emailval && item.password == passval){
                console.log("Login Successfull");
                navigate('/cart')
                setshow(true)
            }
            else{
                console.log("Login Failed");
                setshow(false)
            }
        })
        setemailval('')
        setpassval('')
    }
    const handleemail = (event) =>{
        setemailval(event.target.value);
    }
    const handlepass = (event) =>{
        setpassval(event.target.value);
    }
    return(
        <>  
            <section id="signin" className="relative px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20">
                <div>
                    <div className="md:w-[60%]  p-5 md:p-8 lg:w-[40%]  lg:p-10 mx-auto bg-[#f8edd1] rounded-lg">
                        <h2 className="text-4xl lg:text-5xl font-[recoleta] font-semibold text-[#725D68]">Sign in</h2>
                        {
                            show?<p className="my-3 font-[Poppins] text-[14px] text-[#725D68]">I help you manage your activities after you login :)</p>:<p className="text-[#ff4141] my-3 font-[Poppins] text-[14px]">Sign up Before You Log in</p>
                        }
                        <div>
                            <input type="email" placeholder="Email" className="px-3 py-2 w-[100%] outline-none font-[Poppins] font-medium mt-5" onChange={handleemail} value={emailval}/>
                            <input type="password" placeholder="password" className="px-3 py-2 w-[100%]  outline-none font-[Poppins] font-medium mt-5" onChange={handlepass} value={passval}/>
                            <button type="button" className=" block bg-[#fe831d] py-2 w-[100%] font-[poppins] mt-5 font-medium text-white" onClick={login}>Log in</button>
                        </div>
                        <p className="mt-5 sm:text-[16px] text-[14px] font-[Poppins] text-[#725D68]">Don't have an account ? <Link to={'/signup'} title="Signup" className="underline">Sign Up</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Signininner