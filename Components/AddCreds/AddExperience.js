import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Input, Button,CheckBox} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import DatePicker from 'react-native-datepicker'
import {connect} from "react-redux"
import {addNewExperience} from "../../Store/actions/profileAction"
import {Actions} from 'react-native-router-flux'
// import console = require('console');

class AddExperience extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             company:"",
             domain:"",
             location:"",
             from:"",
             to:"",
             description:"",
             current:false       
        }
        this.changeValue=this.changeValue.bind(this)
        this.submitExperience=this.submitExperience.bind(this)
    }
    changeValue(name,value){
        this.setState({[name]:value})
    }
    submitExperience(){
        const {auth} = this.props
        const data = this.state
        console.log(auth,data)
        this.props.addNewExperience(auth.user.uid,data,Actions)
    }
    render() {
        return (
            <View>
                <Input placeholder='Company Name' leftIcon={<Icon name='bank' size={20} color='black'/>} value={this.state.company} onChangeText={(text)=>this.changeValue('company',text)} />
                <Input placeholder='Post' leftIcon={<Icon name='briefcase' size={20} color='black'/>} value={this.state.domain} onChangeText={(text)=>this.changeValue('domain',text)} />
                <Input placeholder='Describe your internship experience' leftIcon={<Icon name='align-left' size={20} color='black' />} value={this.description} onChangeText={(text)=>this.changeValue('description',text)} />
                <DatePicker
        style={{width: "100%"}}
        date={this.state.from}
        mode="date"
        placeholder="from ?"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) =>this.changeValue('from',date)}
      />
      {/* <CheckBox
      center
  title='Click Here'
  checked={this.state.current}
  onPress={this.setState({current:!this.state.current})}
/> */}
      <DatePicker
        style={{width: "100%"}}
        date={this.state.to}
        mode="date"
        placeholder="to ?"
        format="YYYY-MM-DD"
        minDate="2019-05-01"
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) =>this.changeValue('to',date)}
      />
      <Button title='Submit' onPress={this.submitExperience} type='outline' />
            </View>
        )
    }
}
const mapStateToProps = state=>({
    auth:state.auth,
    profile:state.profile
})

export default connect(mapStateToProps,{addNewExperience})(AddExperience)