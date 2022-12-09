import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';


function App() {
  return (
    <div>
    <main>
      <Header>
        <Navigation></Navigation>
      </Header>
      <Project>
        <section className='about'>
          <h2 className='subheader'>About Me</h2>
          <div>My name is Kenan blah blah blah</div>
        </section>
      </Project>
      <Footer />

    </main>
    </div>
  );
}

export default App;
