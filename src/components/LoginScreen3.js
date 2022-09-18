// https://dribbble.com/shots/15583314-Log-in-page/attachments/7369167?mode=media
import Logo from '../logo.svg';
const LoginScreen3 = () => {
  return (
    <div className='relative bg-gray-50 p-4 md:flex md:items-center md:justify-center lg:h-screen lg:min-h-screen lg:overflow-hidden lg:p-0'>
      <img
        src='https://images.unsplash.com/photo-1490109875367-0dbd3c96fa1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt=''
        className='absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2'
        width='1308'
      />

      <div className='relative w-full rounded-lg bg-white shadow-xl md:flex-row md:overflow-hidden lg:mx-20'>
        <div className='md:flex md:flex-row'>
          <div className='w-full px-6 py-6 pt-10 pb-8 sm:py-12 md:w-3/4 flex-shrink-0 md:flex-shrink'>
            <img src={Logo} className='h-6' alt='Tailwind Play' />
            <div className='space-y-6 pt-8 text-base leading-7 text-gray-600'>
              <form onsubmit='() => {}' className='py-28 px-0 md:px-2 xl:px-14'>
                <div className='relative'>
                  <span className='absolute top-1/2 ml-3 -translate-y-1/2'>
                    <svg
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-labelledby='personIconTitle'
                      stroke='#000000'
                      stroke-width='1'
                      stroke-linecap='square'
                      stroke-linejoin='miter'
                      fill='none'
                      color='#000000'
                    >
                      <title id='personIconTitle'>Person</title>
                      <path d='M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20' />
                    </svg>
                  </span>
                  <input
                    type='email'
                    className='w-full rounded-md border border-gray-200 p-3 pl-12'
                    value='myemail@gmail.dom'
                  />
                </div>
                <div className='relative mt-4'>
                  <span className='absolute top-1/2 ml-3 -translate-y-1/2 rotate-90'>
                    <svg
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-labelledby='keyIconTitle'
                      stroke='#000000'
                      stroke-width='1'
                      stroke-linecap='square'
                      stroke-linejoin='miter'
                      fill='none'
                      color='#000000'
                    >
                      <title id='keyIconTitle'>Key</title>
                      <polyline points='21 16 21 12 12 12' />
                      <circle cx='7' cy='12' r='4' />
                      <path d='M17,15 L17,12' />
                    </svg>
                  </span>
                  <input
                    type='password'
                    className='w-full rounded-md border border-gray-200 p-3 pl-12'
                  />
                </div>

                <div className='mt-6 flex justify-between'>
                  <div>
                    <a
                      className='hover:text-blue-800 hover:underline mr-3'
                      href='/register'
                    >
                      Register
                    </a>
                    <a
                      className='hover:text-blue-800 hover:underline'
                      href='/forgot-password'
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button className='rounded-lg bg-indigo-700 p-2 px-6 text-white'>
                    Sign in
                  </button>
                </div>
              </form>

              <div className='my-auto flex justify-between px-0 md:px-2 xl:px-14'>
                <span>Login with</span>

                <div className='space-x-3'>
                  <button className='font-semibold text-blue-800'>
                    facebook
                  </button>
                  <button className='font-semibold text-blue-800'>
                    twitter
                  </button>
                  <button className='font-semibold text-blue-800'>
                    google
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='relative hidden w-full overflow-hidden md:block'>
            <div className="absolute top-0 left-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2466&q=80')] bg-cover brightness-50"></div>
            <span className='absolute right-0 top-0 z-10 m-3 cursor-pointer'>
              <svg
                width='44px'
                height='44px'
                viewBox='0 0 24 24'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                aria-labelledby='hamburgerIconTitle'
                stroke='#FFFFFF'
                stroke-width='1'
                stroke-linecap='square'
                stroke-linejoin='miter'
                fill='none'
                color='#000000'
              >
                <title id='hamburgerIconTitle'>Menu</title>
                <path d='M6 7L18 7M6 12L18 12M6 17L18 17' />
              </svg>
            </span>

            <div className='content absolute top-32 z-10 md:px-14 lg:px-24 text-white'>
              <ul className='flex flex-row'>
                <li className='h-0.5 w-7 cursor-pointer bg-white'></li>
                <li className='ml-2 h-0.5 w-7 cursor-pointer bg-white opacity-40'></li>
              </ul>

              <div className='mt-16'>
                <p className='tracking-wide'>Start planning your</p>
                <h1 className='text-6xl'>Journey</h1>

                <div className='mt-20 flex space-x-4'>
                  <span className='inline-block cursor-pointer rounded-full bg-red-500 p-4'>
                    <svg
                      width='24px'
                      height='24px'
                      viewBox='0 0 24 24'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-labelledby='playIconTitle'
                      stroke='#FFFFFF'
                      fill='#FFFFFF'
                      stroke-width='1'
                      stroke-linecap='square'
                      stroke-linejoin='miter'
                      color='#000000'
                    >
                      <title id='playIconTitle'>Play</title>
                      <path d='M20 12L5 21V3z' />
                    </svg>
                  </span>

                  <div>
                    <p className='text-sm'>Reaching the top</p>
                    <p className='text-2xl'>John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen3;
