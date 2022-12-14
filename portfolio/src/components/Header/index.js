import React from 'react';
import Navigation from '../Navigation';
//Appears on multiple pages with nav component inside that 
//conditionally renders About Me, Portfolio, Contact, Resume
//rendered sections need to be highlighted if selected?
function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return(
        <section>
            <div>
                <h1>Kenan McKenzie</h1>
            </div>
            <div>
                <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            ></Navigation>
            </div>
        </section>
    )
}

export default Header;