import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div class="">
        <div class="flex h-screen items-center justify-center bg-gray-100">
          <div class="w-full max-w-lg space-y-4 rounded-lg border border-gray-200 bg-white p-5 shadow-md md:p-6">
            <form class="space-y-6" onSubmit={handleSignUp}>
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                Create Account
              </h5>
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Enter your Email Address"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Account
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Alredy have an account?&nbsp;
                <Link
                  role="button"
                  to="/login"
                  class="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <label>Enter Username:</label>
        <input
          type="email"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Enter Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Account</button>
      </form> */}
    </div>
  );
};

export default SignUp;
