import {GET_PROFILE,PROFILE_LOADING,GET_ERRORS,CLEAR_CURRENT_PROFILE, GET_PROFILES, SET_CURRENT_USER} from './types';
import {GET_GUIDE_PROFILE,GET_GUIDE_PROFILES,CLEAR_CURRENT_GUIDE_PROFILE} from './types';
import AsyncStorage from "@react-native-community/async-storage"
import {dataBase} from "../../utils/firebase";
//get current profile
export const getCurrentProfile = ()=>dispatch=>{
    dispatch(setProfileLoading)
    let uid =getItem('uid')
    dataBase.ref("profiles/"+uid).once("value").then(snapshot=>{
        dispatch({
            type:GET_PROFILE,
            payload:snapshot.val()
        })
    })
}
export const setProfileLoading = ()=>{
    return{
        type:PROFILE_LOADING
    }
}
const getItem = async(key)=>{
    try{
        const result = await AsyncStorage(key)
        return result
    }catch(e){
        console.log(e)
    }
}