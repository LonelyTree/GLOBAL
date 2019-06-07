import React,{Component} from 'react'
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

const LogoutButton=styled.button`
    position: absolute;
    z-index: 30;
    margin-left: 4%;
    margin-top: 2%;
    height: 4%;
    width: 9%;
    background: #2e3b762e;
    border: none;
    border-radius: 6vh;
    cursor: pointer;
    font-family: 'Lato',sans-serif;
    font-weight: 300;
    font-size: 1.6vw;
    color: #ed255373;
`


class Logout extends Component{
 handleLogout= async (e)=>{
    e.preventDefault();
        try {
            const logoutResponse= await fetch('http://localhost:9000/auth',{
                method: 'DELETE',
                credentials: 'include',
                body: JSON.stringify(this.props.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse=await logoutResponse.json();
                console.log(parsedResponse.data)
            if(parsedResponse.data==='LOGOUT SUCCESSFUL') {
                return this.props.logger({logged: false})

            } else if(parsedResponse.data==='FAILED') {
                alert("Failed to logout")
            }
        } catch (e) {
            console.log(e)
    }
}
    render() {
        if(this.props.state.logged!==true) {
            return <Redirect to='/' />
        } else {
            return (
        <LogoutButton
                    type="submit" onClick={this.handleLogout}>LOGOUT
        </LogoutButton>)
        }
    }
}

export default Logout