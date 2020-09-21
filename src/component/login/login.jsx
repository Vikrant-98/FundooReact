import React from "react";
import "./login.scss";
import TextField from '@material-ui/core/TextField';
import user_service from '../../services/userService';

export default class Login extends React.Component {

    constructor(props)
    {
        super(props)
        
        let loggin =false;

        this.state={
            email:'',
            password:'',
            loggin
        }
    }
    
    ChangeEmail = (e) => {
        this.setState({
            email:e.target.value
        },() => {console.log(this.state);})         
      }

      ChangePassword = (e) => {
        this.setState({
            password:e.target.value
        },() => {console.log(this.state);})         
      }

      onLogin = () =>{
        let userData = {
            email: this.state.email,
            password: this.state.password
          };
          user_service.login(userData).then((data) =>{
                console.log('data after login',data);
                localStorage.setItem('token', data.data.id);
                localStorage.setItem('email', data.data.email);
                localStorage.setItem('first', data.data.firstName);
                localStorage.setItem('last', data.data.lastName);
                this.setState({
                    loggin:true
                })
                this.redirectToDashboard();
          }).catch(error=>{

          })
      }

      redirectToDashboard(){
        this.props.history.push("/dashboard")
      }

    render() {
        const{email,password} = this.state;
    return(   
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

                <TextField 
                    className="input" 
                    label="Email" 
                    placeholder="Email" 
                    variant="outlined"
                    value={email}
                    onChange={this.ChangeEmail}/>

                <TextField
                    className="input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={this.ChangePassword}/>
                <div className="create-account">
                    create account
                </div>
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
