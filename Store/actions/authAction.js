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

const storeKey = async(key,value)=>{
    try {
        await AsyncStorage.setItem(key, value)
      } catch (e) {
        console.log(e);
      }
}
