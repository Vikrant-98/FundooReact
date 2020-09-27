import React from "react";
import "./login.scss";
import TextField from '@material-ui/core/TextField';
import user_service from '../../services/userService';
import { Link } from "react-router-dom";


export default class Login extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            loggin:false,
            error: {
                errorEmail: '',
                errorPassword: ''
            }
        }
    }

    onChangeEmail = e => {
        this.setState({
            email: e.target.value
        })
        let emailValidation = /^([a-zA-Z0-9]*[.]*[a-zA-Z0-9]*@[a-zA-Z0-9]*.{1}[a-zA-Z0-9]*[.]*[a-zA-Z0-9]*)$/;
        let inputs = this.state.error;
        inputs.errorEmail = emailValidation.test(e.target.value) === true ? "" : "Enter Valid Email";
    }

    onChangePassword = e => {
        this.setState({
            password: e.target.value
        })
        let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
        let inputs = this.state.error;
        inputs.errorPassword = passwordValidation.test(e.target.value) === true ? "" :
            "Enter Valid password";
    }

    onLogin = () => {
        if(this.state.error.errorPassword ==="" 
        && this.state.error.errorEmail ===""){
        let userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.setState({
            loggin:false
        })

        user_service.login(userData).then((data) => {
            console.log('data after login', data);
            localStorage.setItem('token', data.data.id);
            localStorage.setItem('email', data.data.email);
            localStorage.setItem('first', data.data.firstName);
            localStorage.setItem('last', data.data.lastName);
            this.setState({
                loggin: true
            })
            this.redirectToDashboard();
        }).catch(error => {

            })
        }else{
            this.setState({
                errorEmail:"Enter Valid Email",
                errorPassword:"Enter Valid Password"
            })
        }
    }

    redirectToDashboard() {
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div className="body">
                <div className="frame">
                    <div className="fundoo">
                        <span className="f">F</span>
                        <span className="u">u</span>
                        <span className="n">n</span>
                        <span className="d">d</span>
                        <span className="o">o</span>
                        <span className="u">o</span>
                    </div>
                    <span className="sign-in">
                        Sign in
                </span>
                    <span className="fundoo-text">
                        Use your Fundoo Account
                </span>
                    <div>
                        <TextField
                            className="input"
                            label="Email"
                            onChange={(e) => this.onChangeEmail(e)}
                            placeholder="abc@example.com"
                            variant="outlined" />
                        <p className="error-msg-login">{this.state.error.errorEmail}</p>
                    </div>
                    <div>
                        <TextField
                            className="input"
                            label="Password"
                            type="password"
                            onChange={(e) => this.onChangePassword(e)}
                            placeholder="Password"
                            variant="outlined" />
                        <p className="error-msg-login">{this.state.error.errorPassword}</p>
                    </div>

                    {/* <Link to="/register"> */}
                        <div className="create-account">
                            Create account
                        </div>
                    {/* </Link> */}
                    <button
                        className="login"
                        onClick={this.onLogin}>
                        Login
                </button>
                </div>
            </div>
        )
    }
}
