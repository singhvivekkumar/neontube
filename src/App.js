import "./App.css";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Listing from "./components/Listing";
import Display from "./components/Display";

const AppLayout = () => {
	return (
		<div className="w-full h-full">
			<Header />
			<Outlet />
      		<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Errorpage />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/upload",
				element: <Upload/>,
			},
			{
				path: "/listing",
				element: <Listing/>,
			},
			{
				path: "/display",
				element: <Display/>
			}
		],
	},
]);

function App() {
	return (
			<RouterProvider router={appRouter} />
	);
}

export default App;