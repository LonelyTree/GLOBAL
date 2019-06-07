import React,{Component} from 'react'
import '../../background.css'
// import {Redirect} from 'react-router-dom'

class Login extends Component{
    state={
        username: '',
        password: '',
        reguser: '',
        regpassword: '',
    }

    handleChange=(e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    handleLogin = async (e) => {
        e.preventDefault();
        try {
            const loginResponse=await fetch('http://localhost:9000/auth',{
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse=await loginResponse.json();
                console.log(parsedResponse.data)
            if(parsedResponse.data==='LOGIN SUCCESSFUL') {
                this.props.logger({logged: true})
                this.props.history.push("/global")
            } else if(parsedResponse.data==='Please make an account to login.') {
                alert("Please make an account to login.")
            } else if(parsedResponse.data==='username taken') {
                alert('That username has already been taken. Please choose another.')
            }
        } catch (e) {
            console.log(e)
    }

    }
    render() {
        //     if(this.props.state.logged) {
        //     return <Redirect to='/global' />
        // }
            return (
                <div className="materialContainer">

                    <form id="login" onSubmit={this.handleLogin}>
                        <div className="box">

                            <div className="title">LOGIN</div>
                            <div className="input">
                                <label htmlFor="name">Username</label>
                                <input type="text" name="username" id="name" onChange={this.handleChange} />
                                <span className="spin"></span>
                            </div>

                            <div className="input">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="password" id="pass" onChange={this.handleChange} />
                                <span className="spin"></span>
                            </div>

                            <div className="button login">
                                <button type="Submit"><span>GO</span> <i className="fa fa-check"></i></button>
                            </div>
                            <a href="null" className="pass-forgot">Forgot your password?</a>
                        </div>
                        <div className="overbox">
                            <div className="material-button alt-2"><span className="shape"></span></div>
                            <div className="title">REGISTER</div>
                            <div className="input">
                                <label htmlFor="regname">Username</label>
                                <input type="text" name="regusername" id="regname" onChange={this.handleChange} />
                                <span className="spin"></span>
                            </div>
                            <div className="input">
                                <label htmlFor="regpass">Password</label>
                                <input type="password" name="regpassword" id="regpass" onChange={this.handleChange} />
                                <span className="spin"></span>
                            </div>
                            <div className="input">
                                <label htmlFor="reregpass">Repeat Password</label>
                                <input type="password" name="reregpass" id="reregpass" onChange={this.handleChange} />
                                <span className="spin"></span>
                            </div>
                            <div className="button">
                                <button type="submit"><span>NEXT</span></button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
}


export default Login