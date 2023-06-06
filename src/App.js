import "./App.css";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Main from "./Routes";
import { useState } from "react";
import VK from "react-vk";
import "typeface-arsenal";
import "typeface-montserrat";
import "typeface-oswald";
import { ConfigProvider } from "antd";

function App() {
	const [showContent, setShowContent] = useState(true);

	return (
		<div className="App">
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: "#016245",
					},
				}}
			>
				<Header setShowContent={setShowContent} />
				<VK apiId={51667816}>
					<div className="content">{showContent && <Main />}</div>
				</VK>
			</ConfigProvider>
		</div>
	);
}

export default App;
