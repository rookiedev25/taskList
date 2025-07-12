import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-orange-600 text-white py-3">
      <div className="logo">
        <span className="font-bold text-xl mx-8 my-2">TaskList</span>
      </div>
      <ul className="flex gap-8 mx-8 my-0.5">
        <li className="cursor-pointer hover:font-bold transition-all duration-100">
          <a href="https://github.com/rookiedev25">rookiedev25</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar