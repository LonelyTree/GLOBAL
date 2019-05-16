import React,{Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'


const Wrapper=styled.div`
    position: absolute;
    box-shadow: inset 0 0 15px #000000;
    margin-top: 1vh;
    margin-left: 39.98vw;
    border-radius: 12vh 12vh 2vh 2vh;
    width: 40vh;
    height: 17vh;
    background: #2828497a;
    -webkit-mask-image: radial-gradient(circle 5vh at center 412px,transparent 0,transparent 361px,#1b1f2c 21px);
`
const AccountButtons=styled.button`
    cursor: pointer;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    line-height: 18vh;
    font-size: 20px;
    transition: 0.5s;
    margin-left: 0.67vh;
    margin-top: 0.9vw;
    padding-left: 0vh;
    height: 3.5vw;
    width: 19vh;
    border-radius: 100% 100% 40% 40%;
    box-shadow: inset 0 0 36px #00000000;
    background: #27277008;
    border: none;
    color: white;
    line-height: 2vh;
    &:hover {
    box-shadow: inset 0 0 36px #0c99862e;
    }
`
// #0c99862e
// save: dates, coordinates, notes

class UserMenu extends Component{
    state={
        backpack: false,
        account: false
    }

    clickAccount=(e) => {
        e.preventDefault();
        this.setState({account:!this.state.account})
    return <Redirect to="/account"/>
}
    clickBackpack=(e) => {
        e.preventDefault();
        this.setState({backpack:!this.state.backpack})
}

    render() {
        if(this.state.backpack) {
            return <Redirect to="/backpack" />
        }
        if(this.state.account) {
            return <Redirect to="/account" />
        }
        return (
            <Wrapper>
                <AccountButtons style={{transform: 'rotate(-12deg)'}} type="submit" onClick={this.clickAccount}>ACCOUNT</AccountButtons>
                <AccountButtons style={{transform: 'rotate(12deg)'}} type="submit" onClick={this.clickBackpack}>BACKPACK</AccountButtons>
            </Wrapper>
        )
    }
}

export default UserMenu