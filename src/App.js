import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Routes";
import { useState } from "react";

function App() {
	const [showContent, setShowContent] = useState(true);
	return (
		<div className="App">
			<Header setShowContent={setShowContent} />
			{showContent && <Main />}
			<Footer />
		</div>
	);
}

export default App;
