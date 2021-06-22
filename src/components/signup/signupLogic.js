import { useEffect,useRef,useState } from "react";
import axios from 'axios';



export function useSignUp(firstName,lastName,email,password,click,render){
    const [msgRender, setmsgRender] = useState(false);

    
    // const signUpApi= async ()=>{
    //     try{

    //         const loginfo = {username,password};
    //         const {data}= await axios.post("https://fakestoreapi.com/auth/login",loginfo)
    //         console.log(data);

    //     }catch(err){
    //         console.log(err);
    //     }
    // }
    

    useEffect(() => {
        if(click && firstName.length &&  lastName.length &&  email.length &&  password.length){
            // signUpApi();
            console.log("API Call");
        }else{
            setmsgRender(!msgRender)
        }

    }, [click,render]);

    return msgRender;

}