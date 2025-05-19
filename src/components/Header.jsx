import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-1.5">
      <NavLink to="/" className="p-2 bg-red-200">
        Home
      </NavLink>
      <NavLink to="/addCoffee" className="p-2 bg-amber-200">
        Add Coffee data
      </NavLink>
      {/* {import.meta.env.VITE_name} */}
    </div>
  );
};

export default Header;
