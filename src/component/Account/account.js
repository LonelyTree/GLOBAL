import React,{Component} from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
    position: absolute;
    box-shadow: inset 0 0 15px #000000;
    margin-top: 1vh;
    margin-left: 39.98vw;
    border-radius: 2vh;
    width: 40vh;
    height: 11vh;
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

class Account extends Component{
    render() {
        return (
            <Wrapper>
                <AccountButtons style={{transform: 'rotate(-12deg)'}} type="submit">ACCOUNT</AccountButtons>
                <AccountButtons style={{transform: 'rotate(12deg)'}} type="submit">BACKPACK</AccountButtons>
            </Wrapper>
        )
    }
}

export default Account