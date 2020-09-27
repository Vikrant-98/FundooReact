import React from 'react';
import { render } from '@testing-library/react';
import Register from './register';
import renderer from 'react-test-renderer'

it('First Name should be valid with on error',()=>{
        const instanceOf = renderer.create(<Register/>).getInstance();
        instanceOf.onChangeFirstName({target: {
            value: "Vikrant"
         }});
        expect(instanceOf.state.firstName).toBe("Vikrant");
        expect(instanceOf.state.error.errorFirstName).toBe("");
        
});

it('First Name is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangeFirstName({target: {
        value: "nt"
     }});
    expect(instanceOf.state.firstName).toBe("nt");
    expect(instanceOf.state.error.errorFirstName).toBe("Name Start with caps and atleast 3");
    
});

it('Last Name is be valid with on error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangeLastName({target: {
        value: "Chitte"
     }});
    expect(instanceOf.state.lastName).toBe("Chitte");
    expect(instanceOf.state.error.errorLastName).toEqual("");
});

it('Last Name is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangeLastName({target: {
        value: "Ch"
     }});
    expect(instanceOf.state.lastName).toBe("Ch");
    expect(instanceOf.state.error.errorLastName).toBe("Name Start with caps and atleast 3");
    
});

it('Email is be valid with on error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangeEmail({target: {
        value: "vikrantchitte1234@gmail.com"
     }});
    expect(instanceOf.state.email).toBe("vikrantchitte1234@gmail.com");
    expect(instanceOf.state.error.errorEmail).toBe("");
});

it('Email is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangeEmail({target: {
        value: "vik1234"
     }});
    expect(instanceOf.state.email).toBe("vik1234");
    expect(instanceOf.state.error.errorEmail).toBe("Enter Valid Email");
    
});

it('Password is be valid with on error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangePassword({target: {
        value: "Vikrant@1234"
     }});
    expect(instanceOf.state.password).toEqual("Vikrant@1234");
    expect(instanceOf.state.error.errorPassword).toBe("");
});

it('Password is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangePassword({target: {
        value: "vik1234"
     }});
    expect(instanceOf.state.password).toBe("vik1234");
    expect(instanceOf.state.error.errorPassword).toBe("Enter Valid password");
    
});

it('Confirm password is be valid with on error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
     instanceOf.onChangePassword({target: {
        value: "Vikrant@1234"
     }});
     instanceOf.onChangeConfirmPassword({target: {
        value: "Vikrant@1234"
     }});
    expect(instanceOf.state.confirmPassword).toEqual(instanceOf.state.password);
    expect(instanceOf.state.error.errorConfirmPassword).toBe("");
});

it('Confirm Password is not be valid gives error',()=>{
    const instanceOf = renderer.create(<Register/>).getInstance();
    instanceOf.onChangePassword({target: {
        value: "Vikrant@1234"
     }});
    instanceOf.onChangeConfirmPassword({target: {
        value: "vik1234"
     }});
     expect(instanceOf.state.confirmPassword).toEqual("vik1234");
     expect(instanceOf.state.error.errorConfirmPassword).toBe("Enter Valid password or not match");
    
});