import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {connect} from "react-redux"
import {checkSession} from "../../Store/actions/authAction"
import {Actions} from "react-native-router-flux"
class Landing extends Component {
    componentWillMount(){
        this.props.checkSession(Actions)
    }
    render() {
        return (
            <View>
                <Text> Landing </Text>
            </View>
        )
    }
}
const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{checkSession})(Landing)