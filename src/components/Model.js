import React, { useState } from 'react';
import {  ContextProvider } from "../Global/Context";

const Model = () => {
    const {model, closeModel} = React.useContext(ContextProvider);
    const [state, setState] = useState({
        register: true,
        login: false
})
 
const formsToggle =() =>{
    setState({
        ...state,
    register: !state.register,
    login: !state.login

    });
        
};

  return  <>
  {model ? <div className="model" onClick={closeModel}>
    <div className='model__container'>
    {state.register? <div className='model__form'>
        <form>
            <div className='model__group'>
                <img src='/images/instaName.png' alt='' />
            </div>
            <div className='model__group'>
                <input type="text" name='username' className='model__input' placeholder='Username...'/>    
            </div>

            <div className='model__group'>
                <input type="email" name='email' className='model__input' placeholder='Email...'/>    
            </div>

            <div className='model__group'>
                <input type="password" name='password' className='model__input' placeholder='Password...'/>    
            </div>

            <div className='model__group'>
                <input type="submit" value='Register' className='btn btn-smart'/>    
            </div>

            <div className='model__group'>
                <span onClick={formsToggle}>Already have an account ?</span>
            </div>



        </form>

    </div>
     : <div className='model__form'>
        <form>
            <div className='model__group'>
                <img src='/images/instaName.png' alt='' />
            </div>

            <div className='model__group'>
                <input type="email" name='email' className='model__input' placeholder='Email...'/>    
            </div>

            <div className='model__group'>
                <input type="password" name='password' className='model__input' placeholder='Password...'/>    
            </div>

            <div className='model__group'>
                <input type="submit" value='Login ' className='btn btn-smart'/>    
            </div>

            <div className='model__group'>
                <span onClick={formsToggle}>Create a new account</span>
            </div>



        </form>

    </div> }
    

    </div>
  </div> : ""}</>;

};

export default Model;