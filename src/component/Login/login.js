import React,{Component} from 'react'
import '../../background.css'
// import video from "../../Nebula_8.mp4"

class Login extends Component{
    state={
    }

    liftMeUp=(e) => {
    e.preventDefault();
    this.props.login(this.state)
}

    handleChange=(e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <div className="materialContainer">
                <form id="login" onSubmit={this.liftMeUp}>
                    <div className="box">

                    <div className="title">LOGIN</div>
                        <div className="input">
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" id="name" onChange={this.handleChange} />
                        <span className="spin"></span>
                        </div>

                        <div className="input">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" onChange={this.handleChange} />
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
                            <input type="text" name="regname" id="regname" onChange={this.handleChange}/>
                            <span className="spin"></span>
                        </div>
                        <div className="input">
                            <label htmlFor="regpass">Password</label>
                            <input type="password" name="regpass" id="regpass" onChange={this.handleChange}/>
                            <span className="spin"></span>
                        </div>
                        <div className="input">
                            <label htmlFor="reregpass">Repeat Password</label>
                            <input type="password" name="reregpass" id="reregpass" onChange={this.handleChange}/>
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