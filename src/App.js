import React from 'react';
import Snowfall from 'react-snowfall';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Countdown from './components/Countdown';



function App() {
  return (
    <div className="App">
      <Snowfall color="white" snowflakeCount={200} />
      <Header />
      <Countdown />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
