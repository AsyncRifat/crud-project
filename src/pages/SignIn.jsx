import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  // console.log(createUser);

  // user signIn email & password
  const handleSignin = e => {
    e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);

    const form = e.target;
    const formData = new FormData(form);
    // const email = formData.get('email');
    // const password = formData.get('password');
    // console.log(email, password);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );
    // console.log(email, password, userProfile);

    createUser(email, password)
      .then(result => {
        // Signed up
        const user = result.user;
        console.log(user);

        // send user info in db
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(userProfile),
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your account is created',
                showConfirmButton: false,
                timer: 1500,
              });
              console.log('user added in "users" collection', data);
              form.reset();
            }
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // google signIn
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error?.message || 'Something went wrong');
      });
  };

  return (
    <>
      <div className="mx-auto max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-50 text-gray-800 raleway mt-5 md:mt-20">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Don't have account?{' '}
          <Link className="focus:underline hover:underline text-blue-600">
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FcGoogle size={28} />
            <p>Login with Google</p>
          </button>
        </div>

        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-600" />
          <p className="px-3 text-gray-600">OR</p>
          <hr className="w-full text-gray-600" />
        </div>

        <form onSubmit={handleSignin} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your eMail"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Link className="text-xs hover:underline text-gray-600">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-2 font-semibold rounded-md bg-[#D2B48C] text-[#331A15] rancho text-2xl"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
