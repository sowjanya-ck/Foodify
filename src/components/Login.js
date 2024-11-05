import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from '../utils/UserContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loggedUser, setUserName} = useContext(UserContext);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login
      if (username === "sowjanya" && password === "sow") {
        alert("Login successful!");
        history('/');
      } else {
        alert("Invalid username or password");
      }
    } else {
      // Simulate signup
      if (username && password) {
        alert("Signup successful!");
        history("/");
      } else {
        alert("Please fill in all fields");
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-gray-300 shadow-md py-10 px-16">
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;