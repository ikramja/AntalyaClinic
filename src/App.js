import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Routes";
import { useState } from "react";
import ContactForm from "./Layouts/ContactForm";
function App() {
	const [showContent, setShowContent] = useState(true);
	return (
		<div className="App">
			<Header setShowContent={setShowContent} />

			<div className="content">{showContent && <Main />}</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default App;
