import React, { useState, useEffect } from "react";

import "./App.css"; // Add any necessary CSS here
import AdBanner from "./AdBanner"; // Import the AdBanner component
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route





function App() {

  
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.highperformanceformat.com/2d5714797bbc0cf8fabff47ce9a3bb15/invoke.js";
    script.async = true;

    document.getElementById("ad-container").appendChild(script);
  }, []);
  
  // Handle click event
  const handleSantaClick = () => {
    setGreeting("🎄 Wishing you a joyous Christmas and a prosperous New Year filled with blessings and achievements. 🎉");
  };




  const handleShare = () => {
    const shareData = {
      title: "Merry Christmas & Happy New Year",
      text: "Check out this awesome greeting app!",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log("Thanks for sharing!"))
        .catch(console.error);
    } else {
      alert("Sharing is not supported on this device. Copy the URL to share!");
    }
  };

  return (
    
    
    
    
  <div className="app-container">
    
    <div className="max"> <p style={{color:"White"}}> <b> 🎉 Click Santa's hand for a Surprise! 🎉</b></p>
    </div>

    <AdBanner />
      
    <div className="santa-container">
        <img
          src="/santa.png"
          alt="Santa Claus"
          className="santa-image"
          onClick={handleSantaClick}
        />
       
      </div>

      {greeting && <div className="greeting">{greeting}</div>}

      {/* Share Button */}
      <button className="share-button" onClick={handleShare}>
        Share with Friends & Family 🎉
      </button>

      {/* Footer */}
      
      <Routes>
          <Route path="/privacy-policy" component={PrivacyPolicy} /> {/* Privacy Policy page */}
          <Route path="/about-us" component={AboutUs} /> {/* About Us page */}
        </Routes> 
      <footer className="footer">
        <p>© 2024 Created by Josh Basumatary</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/about-us">About Us</a>
      </footer>
    </div>
   

  );
}
export default App
