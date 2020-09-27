import React from 'react';
import { render } from '@testing-library/react';
import Login from './login';
import renderer from 'react-test-renderer';

it('Email is be valid with on error',()=>{
    const instanceOf = renderer.create(<Login/>).getInstance();
    instanceOf.onChangeEmail({target: {
        value: "vikrantchitte1234@gmail.com"
     }});
    expect(instanceOf.state.email).toBe("vikrantchitte1234@gmail.com");
    expect(instanceOf.state.error.errorEmail).toBe("");
});

it('Email is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Login/>).getInstance();
    instanceOf.onChangeEmail({target: {
        value: "vik1234"
     }});
    expect(instanceOf.state.email).toBe("vik1234");
    expect(instanceOf.state.error.errorEmail).toBe("Enter Valid Email");
    
});

it('Password is be valid with on error',()=>{
    const instanceOf = renderer.create(<Login/>).getInstance();
    instanceOf.onChangePassword({target: {
        value: "Vikrant@1234"
     }});
    expect(instanceOf.state.password).toEqual("Vikrant@1234");
    expect(instanceOf.state.error.errorPassword).toBe("");
});

it('Password is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Login/>).getInstance();
    instanceOf.onChangePassword({target: {
        value: "vik1234"
     }});
    expect(instanceOf.state.password).toBe("vik1234");
    expect(instanceOf.state.error.errorPassword).toBe("Enter Valid password");
    
});

// it('Submit Email and Password Succesfully',()=>{
//     const instanceOf = renderer.create(<Login/>).getInstance();
//     instanceOf.onChangeEmail({target: {
//         value: "vikrantchitte5398@gmail.com"
//      }});
//     instanceOf.onChangePassword({target: {
//         value: "vik98CH!"
//      }});
//     instanceOf.onLogin();
//     expect(instanceOf.state.password).toBe("vik98CH!");
//     expect(instanceOf.state.error.errorPassword).toBe("");
//     expect(instanceOf.state.error.errorEmail).toBe("");
//     expect(instanceOf.state.loggin).toBe(true);
    
// });