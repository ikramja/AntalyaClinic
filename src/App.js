import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Doctor from "./Pages/Doctor";
import Main from "./Routes";
import { useState } from "react";

function App() {
	const [showContent, setShowContent] = useState(true);
	return (
		<div className="App">
			<Header setShowContent={setShowContent} />
			{/* <Doctor /> */}
			{showContent && <Main />}
			<Footer />

			{/* <header className="App-header">
      </header> */}
		</div>
	);
}

export default App;
