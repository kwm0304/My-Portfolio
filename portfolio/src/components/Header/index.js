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
        <section className='profilePic'>
            <div className='profileImg'>
                {/*<img
                src={coverImage}
                className="my-2"
                style={{ width: "100%" }}
                />*/}

                <h2>Welcome</h2>
                <p>
                    Welcome to my React portfolio. Take a look around!
                </p>
            </div>
        </section>
        </div>
    )
}

export default Header;