import React from 'react'

const Header = () => {
  return (
	<div className=' flex justify-between h-10 '>
		<div className=' border-2 border-blue-600'>
			<div className=' text-base font-bold'>NeonTube</div>
		</div>
		<div className=' w-1/3'>
			<ul className=' font-semibold font-serif flex justify-around text-lg'>
				<li>Home</li>
				<li>About</li>
				<li>Contact us</li>
			</ul>
		</div>
		<div>
			<p>User</p>
		</div>
	</div>
  )
}

export default Header;