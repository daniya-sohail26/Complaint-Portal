import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class RegisterPage extends Component {
  state = {
    profilePicture: null
  };

  handleFileChange = (event) => {
    const profilePicture = event.target.files[0];
    this.setState({
      profilePicture,
      formHeight: profilePicture ? 'auto' : '80vh' // Adjust the form height dynamically
    });
  };

  render() {
    const { profilePicture, formHeight } = this.state;

    return (
      <>
        <div className="application">
          <Helmet>
            <style>{`
    body {
      background: linear-gradient(45deg, #263E39, #32514D, #3E647F, #4C7690, #5A8AA2);
      background-size: 300% 300%;
      animation: gradientAnimation 4s ease infinite;
    }

    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
          </Helmet>
          <div className="bg-[#6E9794]"></div>
          <form
            className='bg-[#D9D9D9] rounded-lg w-[40%] md:w-[50%] sm:w-[90%] max-w-[600px] h-80vh md:h-auto my-20 mx-auto flex flex-col justify-around items-center p-6 opacity-75'
            style={{ height: formHeight }}
          >
            <h1 className='text-4xl font-bold text-center mb-10'>Create An Account</h1>
            <div className='flex flex-col w-3/4'>
              <label htmlFor="name" className='font-Poppins font-bold text-left mb-2'>
                Name
              </label>
              <input type="text" name="name" className="w-full rounded border border-gray-400 py-2 px-3"></input>
            </div>
            <div className='flex flex-col w-3/4'>
              <label htmlFor="email" className='font-Poppins font-bold text-left mb-2'>
                Email Address
              </label>
              <input type="email" name="email" className="w-full rounded border border-gray-400 py-2 px-3"></input>
            </div>
            <div className='flex flex-col w-3/4'>
              <label htmlFor="password" className='font-Poppins font-bold text-left mb-2'>
                Password
              </label>
              <input type="password" name="password" className="w-full rounded border border-gray-400 py-2 px-3"></input>
            </div>
            <div className='flex flex-col w-3/4'>
              <label htmlFor="mobile-number" className='font-Poppins font-bold text-left mb-2'>
                Mobile Number
              </label>
              <input type="number" name="mobile-number" className="w-full rounded border border-gray-400 py-2 px-3"></input>
            </div>
            <div className='flex flex-col w-3/4'>
              <label htmlFor="profile-pic" className='font-Poppins font-bold text-left mb-2'>
                Set Your Profile Picture
              </label>
              <input type="file" accept="image/*" onChange={this.handleFileChange} />
              {profilePicture && (
                <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="w-20 h-20 mx-auto mt-2" />
              )}
            </div>
            <button className="bg-[#6E9794] hover:bg-[#70aca8] text-white font-bold py-2 px-4 rounded w-1/2 md:w-1/2 mt-4">
              Register
            </button>
            <div className="mt-4 text-center">
              Already Have An Account? <a href="#" className='text-blue-500 underline'>Sign In</a>
            </div>
          </form>
        </div>
      </>
    );
  }
}






