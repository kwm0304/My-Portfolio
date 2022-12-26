import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}><a
				href='#about'
					 onClick={() => setCurrentTab("about")}>About Me </a>
				</li>
				<li className={currentTab === "Portfolio" ? "mx-2 navActive" : "mx-2"}><a
				href='#portfolio'
					 onClick={() => setCurrentTab("Portfolio")}>Portfolio</a>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}> <a
				href='#contact'
					 onClick={() => setCurrentTab("contact")}>Contact</a>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}><a
				href='#resume'
					  onClick={() => setCurrentTab("resume")}>Resume</a> 
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;

 




