import React from 'react'
import { View, Text } from 'react-native'
import {Router,Scene,Stack} from "react-native-router-flux"
//components imported
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Profile/Profile"
import Landing from "./Components/Auth/Landing"
const Navigation = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
            <Scene key='auth' initial>
                <Scene key='landing' hideNavBar component={Landing} initial/>
                <Scene key='login' title="Login" component={Login} />
                <Scene key='register' title="Register" component={Register} />
            </Scene>
            <Scene key='postAuth'>
                <Scene key='dashboard' title="Dashboard" lef component={Dashboard} initial/>
                <Scene key='profile' title="Profile" component={Profile} />
            </Scene>
            </Stack>
        </Router>
    )
}

export default Navigation
