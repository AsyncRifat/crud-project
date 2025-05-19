import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-1.5 mb-5">
      <NavLink to="/" className="p-2 bg-red-200">
        Home
      </NavLink>
      <NavLink to="/addCoffee" className="p-2 bg-amber-200">
        Add Coffee data
      </NavLink>
      <NavLink to="/users" className="p-2 bg-orange-200">
        Users
      </NavLink>
      <NavLink to="/sign-in" className="p-2 bg-gray-300 ml-10">
        Sign In
      </NavLink>
      <NavLink to="/sign-up" className="p-2 bg-green-400">
        Sign Up
      </NavLink>
      {/* {import.meta.env.VITE_name} */}
    </div>
  );
};

export default Header;
