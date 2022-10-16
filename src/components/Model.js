import React from 'react';
import {  ContextProvider } from "../Global/Context";

const Model = () => {
    const {model} = React.useContext(ContextProvider);
    
  return  <>{model ? <div className="model">
    <div className='model__container'>
    <div className='model__model__form'>
        <form>
            <div className='model__group'>
                <img src='/images/instaName.png' alt='' />
            </div>
            <div className='model__group'>
                <input type="text" name='name' className='model__input' placeholder='Name...'/>    
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



        </form>

    </div>

    </div>
  </div> : ""}</>;

};

export default Model;