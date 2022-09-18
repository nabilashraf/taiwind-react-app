// https://dribbble.com/shots/15108292--Sign-In-Form-New-Countly-UI

import React, { useState } from 'react';

const LoginScreen1 = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className='relative md:flex h-screen md:flex-1 items-center justify-center md:overflow-hidden bg-gray-50 py-6 sm:py-12'>
      <div
        alt=''
        className="absolute top-0 left-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1490109875367-0dbd3c96fa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover brightness-75"
      ></div>

      <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <div className='mx-auto max-w-md'>
          <h1 className='mb-8 text-center text-4xl font-medium'>Sign In</h1>

          <div>
            <div className='space-y-6 py-8 text-base leading-7 text-gray-600'>
              <button className='w-full rounded-lg bg-sky-600 py-4 px-12 text-center text-xl text-white transition-colors duration-150 hover:bg-sky-800'>
                Sign In using Open ID Connect
              </button>
            </div>
            <div className='relative flex items-center'>
              <div className='flex-grow border-t border-gray-400'></div>
              <span className='mx-4 flex-shrink text-gray-400'>
                or sign in with your email
              </span>
              <div className='flex-grow border-t border-gray-400'></div>
            </div>
            <div className='pt-8 text-base font-semibold leading-7'>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='text-left'>
                  <label for='field_email'>
                    Email address
                    <input
                      id='field_email'
                      className='block w-full rounded-lg border py-2 px-4 focus:border-sky-600'
                      type='email'
                      placeholder='Enter email'
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </label>
                </div>

                <div className='text-left'>
                  <label for='field_email'>
                    Password
                    <input
                      id='field_email'
                      className='block w-full rounded-lg border py-2 px-4 focus:border-sky-600'
                      type='password'
                      placeholder='Enter password'
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </label>
                </div>

                <button
                  className='w-full rounded-lg bg-green-600 py-4 px-12 text-xl text-white transition-colors duration-150 hover:bg-green-800'
                  type='submit'
                >
                  Sign In
                </button>
                <div className='text-center font-normal'>
                  Already have an account?{' '}
                  <a
                    href='/signup'
                    className='font-medium text-sky-600 hover:underline'
                  >
                    Sign up here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen1;
