import "./App.css";
import Header from "./Layouts/Header";
import MenuTab from "./Components/MenuTabs";
import Footer from "./Layouts/Footer";
import Doctor from "./Pages/Doctor";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <MenuTab /> */}
			<Home />
			<Footer />

			{/* <header className="App-header">
      </header> */}
		</div>
	);
}

export default App;
