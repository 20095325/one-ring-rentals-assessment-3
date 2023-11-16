'use client';
import Modal from '@/components/modal/Modal';
import { useState, useEffect } from 'react';
// user can login using any userName and password and it will show the userName in the header
const LoginModal = () => {
// use States
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  // check if user is logged in by checking local storage and setting states when nessesary
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let userName = localStorage.getItem('user') ? localStorage.getItem('user') : ''
      setUserName(userName);
      setLoggedIn(true ? localStorage.getItem('user') : false);
    }
  }, []);
// open modal
  const openModalHanlder = () => {
    setShowModal(true);
  };
// close modal
  const closeModalHanlder = () => {
    setShowModal(false);
  };
// submit form and set states and stor username in local storage
  const formSubmitHandler = () => {
    if (userName === '' || password === '') {
      alert('Please fill all inputs');
    } else {
        localStorage.setItem('user', userName)
        setLoggedIn(true);
        setShowModal(false);
    }
  };
// logout - set states and delete user from local storage
  const logout = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
    };

  return (
    // if user is logged in display there username and a logout button otherwise show login and register button
    isLoggedIn ? (
        <>
        <li>Hi {userName}</li>
        <li><a href="#" onClick={logout}>Logout</a></li>
        </>
      ) : (
        <>
        <li>
        <a href="#" onClick={openModalHanlder}><i className="fa fa-sign-in"></i> Login</a>
        {/** display login form using the Modal component we created */}
      <Modal
        isOpen={showModal}
        onDismiss={closeModalHanlder}
        title='Login'
      >
        <div className='my-4 w-[600px] max-w-full'>
          <form className='flex flex-col gap-6'>
            
            <div className='flex flex-col justify-center items-start gap-1'>
              <label>User Name</label>
              <input
                type='text'
                name='username'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                className='w-full outline-none border-2 border-blue-300 bg-white focus:border-blue-600 px-2 py-1 rounded-lg'
              />
            </div>
            <div className='flex flex-col justify-center items-start gap-1'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className='w-full outline-none border-2 border-blue-300 bg-white focus:border-blue-600 px-2 py-1 rounded-lg'
              />
            </div>
            <div className='flex justify-center items-center gap-4'>
              <button
                className='px-4 py-2 bg-green-900 text-white rounded-lg'
                type='button'
                onClick={formSubmitHandler}
              >
                Submit
              </button>
              <button
                className='px-4 py-2 bg-red-900 text-white rounded-lg'
                type='button'
                onClick={closeModalHanlder}
              >
                Dismiss
              </button>
            </div>
          </form>
        </div>
      </Modal>
      </li>
      <li><a href="#"><i className="fa fa-pencil-square-o"></i> Register</a></li>
      </>
    )
    
    
  );
};

export default LoginModal;