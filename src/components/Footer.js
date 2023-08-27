import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center p-5 text-center bg-slate-700 h-20">
			<div className=" text-2xl text-slate-100 ">
				Design By Vivek Kumar Singh
			</div>
			<p className=" text-slate-100 py-3">
				Copyright © 2022 -
				<a className="font-semibold" href="mailto:singhvivekkumar309@gmail.com">
					singhvivekkumar309@gmail.com
				</a>
			</p>
		</div>
	);
};

export default Footer;
