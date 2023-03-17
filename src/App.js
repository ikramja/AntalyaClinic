import "./App.css";
import Header from "./Layouts/Header";
import MenuTab from "./Components/MenuTabs";
import Footer from "./Layouts/Footer";
import Doctor from "./Pages/Doctor";

function App() {
	return (
		<div className="App">
			<Header />
			{/* <MenuTab /> */}
			<Doctor />
			<Footer />

			{/* <header className="App-header">
      </header> */}
		</div>
	);
}

export default App;
