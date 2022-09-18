// https://dribbble.com/shots/14259828-Login-UI

import Logo from '../logo.svg';

const LoginScreen2 = () => {
  return (
    <div className='relative md:flex lg:h-screen md:items-center md:justify-center bg-gray-50 p-4 lg:min-h-screen lg:p-0 lg:overflow-hidden'>
      <img
        src='https://images.unsplash.com/photo-1490109875367-0dbd3c96fa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt=''
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        width='1308'
      />

      <div className='relative w-full md:overflow-hidden rounded-lg bg-white shadow-xl md:flex-row lg:w-2/3'>
        <div className='md:flex md:flex-row'>
          <div className='w-full md:w-2/3 flex-grow px-6 py-6 pt-10 pb-8 sm:py-12'>
            <img src={Logo} className='h-6' alt='Tailwind Play' />
            <div className='divide-y divide-gray-300/50'>
              <div className='space-y-6 pt-8 text-base leading-7 text-gray-600'>
                <h2 className='font-serif text-3xl font-semibold'>
                  The Creative Adult is the child who survived.
                </h2>
                <p>Welcome back! Please login to your account to continue</p>

                <form onsubmit='() => {}'>
                  <div className='rounded-t-lg border border-l-4 border-gray-200 border-l-sky-400'>
                    <label className='block pl-3 pt-3 text-sm'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      className='w-full pl-3 pb-3 outline-none'
                      value='wayne.enterprises@gotham.com'
                    />
                  </div>
                  <div className='rounded-b-lg border border-t-0 border-gray-200'>
                    <label className='block pl-3 pt-3 text-sm'>Password</label>
                    <input
                      type='password'
                      className='w-full rounded-lg pl-3 pb-3 outline-none'
                    />
                  </div>

                  <div className='flex justify-between mt-2'>
                    <label className='text-gray-400 text-sm cursor-pointer'>
                      <input type='checkbox' name='rememberMe' /> Remember me
                    </label>

                    <a
                      className='text-sm text-sky-800 font-medium hover:underline'
                      href='/forgot-password'
                    >
                      Forgot password
                    </a>
                  </div>

                  <div className='mt-8'>
                    <button className='p-2 bg-sky-500 text-white rounded-lg px-10 uppercase'>
                      Login
                    </button>
                    <button className='p-2 border border-sky-500 text-sky-500 rounded-lg px-10 uppercase ml-2'>
                      Signup
                    </button>
                  </div>
                </form>

                <p>
                  By signing up, you agree to our company's{' '}
                  <a href='/terms' className='font-medium hover:underline'>
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href='/privacy' className='font-medium hover:underline'>
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='hidden md:block flex-grow-1 relative w-full flex-shrink-0 overflow-hidden md:w-1/2'>
            <div className="absolute top-0 left-0 h-full w-full bg-[url('https://picsum.photos/seed/picsum/1200/2000')] bg-cover"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen2;
