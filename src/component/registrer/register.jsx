import React from "react";
import '../registrer/register.scss';
import TextField from '@material-ui/core/TextField';
import user_service from '../../services/userService';
import Snackbar from '../snackbar/snackbar';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: "",
            error: {
                errorFirstName: '',
                errorLastName: '',
                errorEmail: '',
                errorPassword: '',
                errorConfirmPassword: "",
            },
            flag:0,
            snackbarStatus:false,
            text:""
        }

    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        this.setState({
            snackbarStatus:false,
            text:""
        })
      };

    onChangeFirstName = e => {
        this.setState({
            firstName: e.target.value,
            flag:1
        })


        let nameValidation = /^[A-Z]{1}[a-z]{2}[a-z]*$/;
        let inputs = this.state.error;

        inputs.errorFirstName = nameValidation.test(e.target.value) === true ? "" : "Name Start with caps and atleast 3";
    }
    onChangeLastName = e => {
        this.setState({
            lastName: e.target.value,
            flag:1
        })

        let nameValidation = /^[A-Z]{1}[a-z]{2}[a-z]*$/;
        let inputs = this.state.error;

        inputs.errorLastName = nameValidation.test(e.target.value) === true ? "" : "Name Start with caps and atleast 3";
    }
    onChangeEmail = e => {
        this.setState({
            email: e.target.value,
            flag:1
        })

        let emailValidation = /^([a-zA-Z0-9]*[.]*[a-zA-Z0-9]*@[a-zA-Z0-9]*.{1}[a-zA-Z0-9]*[.]*[a-zA-Z0-9]*)$/;
        let inputs = this.state.error;

        inputs.errorEmail = emailValidation.test(e.target.value) === true ? "" : "Enter Valid Email";
    }
    onChangePassword = e => {
        this.setState({
            password: e.target.value,
            flag:1
        })

        let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
        let inputs = this.state.error;

        inputs.errorPassword = passwordValidation.test(e.target.value) === true ? "" :
            "Enter Valid password";
    }
    onChangeConfirmPassword = e => {
        this.setState({
            confirmPassword: e.target.value,
            flag:1
        })

        let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,15}$/;
        let inputs = this.state.error;

        inputs.errorConfirmPassword = passwordValidation.test(e.target.value) && 
        (this.state.password === e.target.value) === true ? ""
            : "Enter Valid password or not match";


    }

    onSubmit = (event) =>{
        event.preventDefault();
        console.log("password",this.state.password);
        console.log("confirm-password",this.state.confirmPassword);

        if(this.state.flag === 1
            && this.state.error.errorConfirmPassword ==="" 
            && this.state.error.errorEmail ===""
            && this.state.error.errorFirstName ===""
            && this.state.error.errorLastName ===""
            && this.state.error.errorPassword ==="")
        {
            if(this.state.password === this.state.confirmPassword){
            let userData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                service: 'advance',
            };
                user_service.register(userData).then((data) =>{
                    console.log('data after register',data);
                    this.setState({
                        snackbarStatus:true,
                        text:"Succesfull"
                    })
              }).catch(error=>{
                    console.log('Error',error);
                    // return <Snackbar text="hello"></Snackbar>
            })
            }else{
                // alert("Password not Matching");  
                // return <Snackbar text="hello"></Snackbar>
            }
        }
        else{
            this.setState({
                snackbarStatus:true,
                text:"Something went wrong"
            })
            // this.handleClose();
            
        }



    }

    render() {
        const { error } = this.state;
        return (
            <div className="register">
                <div className="register-frame">
                    <div className="reg-fundoo">
                        <span className="f">F</span>
                        <span className="u">u</span>
                        <span className="n">n</span>
                        <span className="d">d</span>
                        <span className="o">o</span>
                        <span className="u">o</span>
                    </div>
                    <div className="reg-input-body">
                        <div className="input-info">
                            <div className="reg-fundoo-account">
                                Create your Fundoo Account
                    </div>
                            <form>
                                <div className="reg-name">
                                    <div className="f-name">
                                        <TextField
                                            className="input-name"
                                            label="First Name"
                                            onChange={(e)=>this.onChangeFirstName(e)}
                                            placeholder="First Name"
                                            variant="outlined" />
                                        <p className="error-msg">{error.errorFirstName}</p>
                                    </div>
                                    <div className="f-name">
                                        <TextField
                                            className="input-name"
                                            label="Last Name"
                                            onChange={(e)=>this.onChangeLastName(e)}
                                            placeholder="Last Name"
                                            variant="outlined" />
                                        <p className="error-msg">{error.errorLastName}</p>
                                    </div>
                                </div>
                                <div className="reg-email-div">
                                    <div className="f-name">
                                        <TextField
                                            className="reg-email"
                                            label="Email"
                                            onChange={(e)=>this.onChangeEmail(e)}
                                            placeholder="abc@example.com"
                                            variant="outlined" />
                                        <p className="error-msg">{error.errorEmail}</p>
                                    </div>
                                </div>
                                <span className="email-text">you can use letters,numbers & periods</span>
                                <div className="reg-name reg-password">
                                    <div className="f-name">
                                        <TextField
                                            className="input-name"
                                            label="Password"
                                            type="password"
                                            onChange={(e)=>this.onChangePassword(e)}
                                            placeholder="Password"
                                            variant="outlined" />
                                        <p className="error-msg">{error.errorPassword}</p>
                                    </div>
                                    <div className="f-name">
                                        <TextField
                                            className="input-name"
                                            label="Confirm Password"
                                            onChange={(e)=>this.onChangeConfirmPassword(e)}
                                            placeholder="Confirm Password"
                                            type="password"
                                            variant="outlined" />
                                        <p className="error-msg">{error.errorConfirmPassword}</p>
                                    </div>
                                </div>
                                <span className="email-text">
                                    Use 8 or more characters with a mix of letters,numbers & symbols
                                </span>
                                <div className="direction-div">
                                    <span className="signin">
                                        Sign in instead
                                </span>
                                    <button
                                        onClick={this.onSubmit}
                                        className="next">
                                        Next
                                    </button>
                                </div>
                            </form>
                            <Snackbar text={this.state.text} 
                            openStatus={this.state.snackbarStatus}
                            closeStatus={this.handleClose}></Snackbar>
                        </div>
                        <div className="reg-logo">
                            <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" />
                            <span className="account-text">
                                One account. All of Fundoo working for you.
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
