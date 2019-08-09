//starting from scratch
import {dataBase,auth} from "../../utils/firebase"
import {SET_CURRENT_USER} from "./types"
import AsyncStorage from "@react-native-community/async-storage"
export const loginUser = (email,password,Actions)=>dispatch=>{
auth.signInWithEmailAndPassword(email,password).then(authentication=>{
    let temp_details={}
    temp_details.email=email;
    temp_details.uid=authentication.user.uid;
    temp_details.utype="dev"
    dispatch({
        type:SET_CURRENT_USER,
        payload:temp_details
    })
    storeKey('uid',authentication.user.uid);
    Actions.postAuth({uid:temp_details.uid})
})
.catch(err=>{
    console.log(err)
})
}

export const checkSession = (Actions)=>dispatch=>{
    getData('uid').then(uid=>{
       if(uid){
           let temp_details={}
           temp_details.uid=uid;
           dispatch({
           type:SET_CURRENT_USER,
           payload:temp_details
           })
           Actions.dashboard({uid:uid})
       }else{
           Actions.login()
       }
    })
   }


const getData = async(key)=>{
    let data=null
    try{
        data= await AsyncStorage.getItem(key)
    } catch(e){
        console.log(e)
    }
    return data;
}

const storeKey = async(key,value)=>{
    try {
        await AsyncStorage.setItem(key, value)
      } catch (e) {
        console.log(e);
      }
}
