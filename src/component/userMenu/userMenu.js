import React,{Component} from 'react'
import styled from 'styled-components'


const Wrapper=styled.div`
    position: absolute;
    box-shadow: inset 0 0 15px #000000;
    margin-top: 2.5vh;
    margin-left: 39.5vw;
    border-radius: 12vh 12vh 2vh 2vh;
    width: 21%;
    height: 12vh;
    background: #2828497a;
    -webkit-mask-image: radial-gradient(circle 5vh at center 412px,transparent 0,transparent 373px,#1b1f2c 21px);
`
const AccountButtons=styled.button`
    cursor: pointer;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    font-size: 1.4vw;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    margin-left: 1.67%;
    margin-top: .4vw;
    height: 55%;
    width: 48%;
    border-radius: 100% 100% 40% 40%;
    box-shadow: inset 0 0 36px #00000000;
    background: #27277008;
    border: none;
    color: white;
    line-height: 10%;
    &:hover {
    box-shadow: inset 0 0 36px #0c99862e;
    }
`

class UserMenu extends Component{
    state={
        backpack: false,
        account: false
    }

    clickAccount=(e) => {
        e.preventDefault();
        this.setState({account: !this.state.account})
        if(this.state.account) {
            this.props.history.push("/account")
        }
}
    clickBackpack=(e) => {
        e.preventDefault();
        this.setState({backpack: !this.state.backpack})
        if(this.state.backpack) {
            this.props.history.push("/backpack")
        }
}

    render() {
        return (

            <Wrapper>
                <AccountButtons style={{transform: 'rotate(-12deg)'}} type="submit" onClick={this.clickAccount}>ACCOUNT</AccountButtons>
                <AccountButtons style={{transform: 'rotate(12deg)'}} type="submit" onClick={this.clickBackpack}>BACKPACK</AccountButtons>
            </Wrapper>
        )
    }
}

export default UserMenu