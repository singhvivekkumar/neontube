import "./App.css";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Errorpage from "./components/Errorpage";
import Footer from "./components/Footer";
import Header from "./components/Header";

const AppLayout = () => {
	return (
		<div className="border-2 border-red-900 w-full">
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
		],
	},
]);

function App() {
	return (
			<RouterProvider router={appRouter} />
	);
}

export default App;