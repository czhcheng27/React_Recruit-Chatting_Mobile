import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavBar, Button, InputItem, TextareaItem, WhiteSpace } from 'antd-mobile'

import HeaderSelector from '../../components/header-selector/header-selector'

class EmployeeInfo extends Component {

    state = {
        header: '',
        post: '',
        info: '',
        salary: '',
    }

    setHeader = (text) => {
        this.setState({
            header: text
        })
    }

    handle = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    clickSave = () => {
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <NavBar>Complete Employee Infomation</NavBar>

                <HeaderSelector setHeader = {this.setHeader} />

                <InputItem labelNumber={7} onChange={(val) => this.handle('post', val)}>Position Applied:</InputItem>

                <InputItem 
                labelNumber={7} 
                onChange={(val) => this.handle('salary', val)} 
                moneyKeyboardAlign="left" 
                autoAdjustHeight 
                clear
                extra="$"
                type='money'>&nbsp;&nbsp;Expect&nbsp;Salary&nbsp;&nbsp;: $ </InputItem>

                <TextareaItem labelNumber={7} title='Self-description&nbsp;:' onChange={(val) => this.handle('info', val)} autoHeight />

                <WhiteSpace size='xl' />

                <Button type='primary' onClick={this.clickSave}>Save</Button>
            </div>
        )
    }
}

export default connect(

)(EmployeeInfo)