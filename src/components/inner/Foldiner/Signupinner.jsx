import { useContext, useState } from "react"
import { Logincontext } from "../../Context"
import { Link } from "react-router-dom"

const Signupinner = () =>{

    var {loginlist,setloginlist} = useContext(Logincontext)

    const [upnamehandle,setupnamehandle] = useState('')
    const [upemailhandle,setupemailhandle] = useState('')
    const [uppasshandle,setuppasshandle] = useState('')
    const [upcpasshandle,setupcpasshandle] = useState('')
    const [confirm,setconfirm] = useState(true)

    const upname = (event) =>{
        setupnamehandle(event.target.value)
    }
    const upemail = (event) =>{
        setupemailhandle(event.target.value)
    }
    const uppass = (event) =>{
        setuppasshandle(event.target.value)
    }
    const upcpass = (event) =>{
        setupcpasshandle(event.target.value)
    }
    console.log(loginlist);
    const signupp = () =>{
        if(uppasshandle === upcpasshandle){
            setconfirm(true)
        }
        else{
            setconfirm(false)
        }
        setloginlist([...loginlist,{email:upemailhandle,password:uppasshandle,name:upnamehandle}])
        console.log(loginlist);
        setupnamehandle('')
        setupemailhandle('')
        setuppasshandle('')
        setupcpasshandle('')
    }

    return(
        <>
            <section id="signin" className="relative px-8 py-8 md:px-14 md:py-14 lg:px-20 lg:py-20">
                <div>
                    <div className="md:w-[60%]  p-5 md:p-8 lg:w-[40%]  lg:p-10 mx-auto bg-[#f8edd1] rounded-lg">
                        <h2 className="text-4xl lg:text-5xl font-[recoleta] font-semibold text-[#725D68]">Sign Up</h2>
                        <div action="" className="mt-5">
                            <input type="text" placeholder="Name" className="px-3 py-2 w-[100%] outline-none font-[Poppins] font-medium mt-5" onChange={upname} value={upnamehandle}/>
                            <input type="email" placeholder="Email" className="px-3 py-2 w-[100%] outline-none font-[Poppins] font-medium mt-5" onChange={upemail} value={upemailhandle}/>
                            <input type="password" placeholder="password" className="px-3 py-2 w-[100%]  outline-none font-[Poppins] font-medium mt-5" onChange={uppass} value={uppasshandle}/>
                            <input type="password" placeholder="Confirm password" className="px-3 py-2 w-[100%]  outline-none font-[Poppins] font-medium mt-5" onChange={upcpass} value={upcpasshandle}/>
                            {
                                confirm?"":<p className="text-red-600 font-[Poppins] pt-2">Password Same Match</p>
                            }
                            <button type="button" className=" block bg-[#fe831d] py-2 w-[100%] font-[poppins] mt-5 font-medium text-white" onClick={signupp}>Sign Up</button>
                        </div>
                        <p className="mt-5 sm:text-[16px] text-[14px] font-[Poppins] text-[#725D68] ">Already have an account ? <Link to={'/signin'} className="underline" title="Login">Login</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signupinner