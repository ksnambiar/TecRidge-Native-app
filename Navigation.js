import React from 'react'
import { View, Text } from 'react-native'
import {Router,Scene,Stack} from "react-native-router-flux"

//components imported
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
const Navigation = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
            <Scene key='auth' initial>
                <Scene key='login' title="Login" component={Login} initial />
                <Scene key='register' title="Register" component={Register} />
            </Scene>
            <Scene key='postAuth'>
                <Scene key='dashboard' title="Dashboard" component={Dashboard} initial/>
            </Scene>
            </Stack>
        </Router>
    )
}

export default Navigation
