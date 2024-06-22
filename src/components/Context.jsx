import {createContext,useState } from "react"
const Logincontext = createContext()

const Context = (props) =>{
    const [loginlist,setloginlist] = useState(
        [
            {
                email:"Mathi@gmail",
                password:"@123",
                name:"Mathi"
            },
            {
                email:"Praba@gmail",
                password:"123",
                name:"Praba"
            },
        ]
    )
    return(
        <>
            <Logincontext.Provider value={{loginlist,setloginlist}}>
                {props.children}
            </Logincontext.Provider>
        </>
    )
}

export default Context

export {Logincontext}
