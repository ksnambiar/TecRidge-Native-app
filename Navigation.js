import React from 'react'
import { View, Text } from 'react-native'
import {Router,Scene,Stack} from "react-native-router-flux"
import Icon from "react-native-vector-icons/FontAwesome"
//components imported
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile"
import Landing from "./Components/Auth/Landing"
import AddExpereince from "./Components/AddCreds/AddExperience"
const Navigation = () => {
    return (
        <Router sceneStyle={{backgroundColor:"#ffffff"}}>
            <Stack key='root' hideNavBar navigationBarStyle={{backgroundColor:"#22ccee"}}>
            <Scene key='auth' initial>
                <Scene key='landing' hideNavBar component={Landing} initial/>
                <Scene key='login' title="Login" component={Login} />
                <Scene key='register' title="Register" component={Register} />
            </Scene>
            <Scene key='postAuth'>
                <Scene key='dashboard' title="Dashboard" renderRightButton={<Icon name='bell' size={19} color='#ffffff' />} titleStyle={{color:"#ffffff"}} component={Dashboard} initial />
                <Scene key='profile' title="Profile" component={Profile} />
                <Scene key='addExperience' title="Add Experience" component={AddExpereince} />
            </Scene>
            </Stack>
        </Router>
    )
}

export default Navigation
