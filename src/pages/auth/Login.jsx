import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setEmail("");
        setPassword("");
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
            <form class="space-y-6" onSubmit={handleLogin}>
              <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                Login
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
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex h-5 items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    for="remember"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?&nbsp;
                <Link
                  role="button"
                  to="/signup"
                  class="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
};

export default Login;
