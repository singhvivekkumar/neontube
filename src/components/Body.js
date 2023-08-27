import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
	return (
		<div className=" h-2/3">
			<div className=" border-b border-slate-600 shadow-sm">
				<div className=" px-40 py-10 text-4xl font-semibold">
					Choose service{" "}
				</div>
			</div>
			<div className="h-96 flex text-4xl text-white font-semibold py-14 px-40 justify-around">
				<Link to="/upload">
					<div className="  bg-slate-600 p-12 rounded-2xl hover:bg-blue-600 hover:shadow-2xl cursor-pointer  ">
						UPLOAD
					</div>
				</Link>
				<Link to="/listing">
					<div className="  bg-slate-600 p-12 rounded-2xl hover:bg-blue-600 hover:shadow-2xl cursor-pointer  ">
						LISTING
					</div>
				</Link>
				<Link to="/display">
					<div className="  bg-slate-600 p-12 rounded-2xl hover:bg-blue-600 hover:shadow-2xl cursor-pointer  ">
						DISPLAY
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Body;
