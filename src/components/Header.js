import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
	<div className=' w-full flex justify-between h-16 items-center bg-slate-700 border-b-[0.2px] border-slate-500 shadow-md '>
		<div className=' justify-center md:pl-10 pl-2 '>
			<div className=' cursor-pointer text-white text-base font-bold '>NeonTube</div>
		</div>
		<div className=' w-1/3 text-slate-100'>
			<ul className=' font-semibold font-serif flex justify-around text-lg'>
				<Link to="/">
					<li className=' hover:bg-slate-200 hover:text-slate-700 hover:shadow-md rounded-md cursor-pointer px-2 '>Home</li>
				</Link>
				<Link to="/about">
					<li className=' hover:bg-slate-200 hover:text-slate-700 hover:shadow-md rounded-md cursor-pointer px-2 '>About</li>
				</Link>
				<Link to="/contact">
					<li className=' hover:bg-slate-200 hover:text-slate-700 hover:shadow-md rounded-md cursor-pointer px-2 '>Contact us</li>
				</Link>
			</ul>
		</div>
		<div>
			<p className=' md:pr-10 pr-2 text-white '>User</p>
		</div>
	</div>
  )
}

export default Header;