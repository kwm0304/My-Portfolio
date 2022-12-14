import React from 'react';
import Navigation from '../Navigation';
//Appears on multiple pages with nav component inside that 
//conditionally renders About Me, Portfolio, Contact, Resume
//rendered sections need to be highlighted if selected?
function Header(props) {
    const { currentTab, setCurrentTab } = props;

    return(
        <div>
        <section>
            <header className='flex-row px-1'>
                <div>
                <h1>Kenan McKenzie</h1>
            </div>
                <Navigation
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            ></Navigation>
            </header>
        </section>
        <section className='profilePic'>
            <div className='profileImg'>
                {/*<img
                src={coverImage}
                className="my-2"
                style={{ width: "100%" }}
                />*/}

                <h2 className='welcome'>Welcome</h2>
                <p>
                    Welcome to my React portfolio. 
                    Take a look around!
                </p>
            </div>
        </section>
        </div>
    )
}

export default Header;