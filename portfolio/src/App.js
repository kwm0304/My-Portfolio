import "./App.css";
import React, { useState } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import About from "../src/components/pages/About";
import Project from "../src/components/pages/Project";
import Contact from "../src/components/pages/Contact";
import Resume from "../src/components/pages/Resume";


function App() {
	const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Project />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return <About />;
		}
	};

	return (
		<>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
				<Footer></Footer>
			</div>
			</>
	);
}

export default App;