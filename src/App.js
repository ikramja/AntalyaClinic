import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Routes";
import { useState } from "react";
import VK from "react-vk";

function App() {
	const [showContent, setShowContent] = useState(true);
	return (
		<div className="App">
			<Header setShowContent={setShowContent} />
<<<<<<< HEAD
			<VK apiId={51667816}>
				<div className="content">{showContent && <Main />}</div>
			</VK>
			<Footer />
=======

			<div className="content">{showContent && <Main />}</div>
>>>>>>> e0572270439906d2aa7cf68bb5e8dc1674efef47
		</div>
	);
}

export default App;
