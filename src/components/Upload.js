import React, { createRef, useState } from "react";

const Upload = () => {

	const fileInput = createRef();
	const [image, setImage] = useState();

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.set("avatar", fileInput.current.value)

		try {
			const response = await fetch('/upload', {
				method:"POST",
				body: formData
			});

			const paresedResponse = await response.json();
			console.log(paresedResponse);
			if(response.ok) {
				alert("File is upload");
			}
			else {
				console.error("some went wrong");
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	const handleImage = (e) => {
		console.log(e);
		setImage(e.target.file[0]); 
		console(image);
	};

	return (
		<div className=" w-full">
			<div className="flex bg-slate-100 justify-center border-b shadow-sm border-slate-500 items-center w-full py-5">
				<div className=" text-2xl font-semibold text-slate-800 ">
					Video Details{" "}
				</div>
			</div>
			<div class="flex items-center justify-center p-12">
				<div class="mx-auto w-full max-w-[550px]">
					{/* from is replace by div tag and action & method also removeds */}
					<form onSubmit={onSubmit} method="POST">
						<div class="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">
								Title
							</label>
							<input
								type="text"
								name="title"
								placeholder="Title"
								className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-600 focus:shadow-md"
							/>
						</div>

						<div class="mb-5">
							<label
								className="mb-3 block text-base font-medium text-[#07074D]">
								Description
							</label>
							<textarea
								rows="4"
								name="discription"
								id="discription"
								placeholder="Write discription"
								className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-600 focus:shadow-md"></textarea>
						</div>

						<div className="mb-5 ">
							<label class="mb-3 block text-base font-medium text-[#07074D]">
								Thumbnail
							</label>
							<input
								type="file"
								name="thumbnail"
								placeholder="Thumbnail"
								onChange={(e) => handleImage(e)}
								className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-slate-600 focus:shadow-md"
							/>
							<i className=" font-semibold text-xs text-gray-400 pt-2 ">
								Image Formats - JPG and PNG only
							</i>
						</div>

						<div class="mb-5">
							<label className="mb-3 block text-base font-medium text-[#07074D]">
								Video
							</label>
							<div className=" border border-dashed p-5 border-slate-300 rounded-xl">
								<input
									type="file"
									name="video"
									ref={fileInput}
									placeholder="Video"
									className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-slate-600 focus:shadow-md"
								/>
								<i className=" font-semibold text-xs text-gray-400 pt-2 ">
									Video file format - MPG, AVI, MP4 only
								</i>
							</div>
						</div>
						<div>
							<button className="hover:shadow-form rounded-md bg-slate-600 hover:bg-slate-700 py-3 px-8 text-base font-semibold text-white outline-none">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Upload;
