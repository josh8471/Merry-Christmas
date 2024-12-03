import React, { useState, useEffect } from "react";
import "./App.css"; // Add any necessary CSS here
import AdBanner from "./AdBanner"; // Import the AdBanner component
import PrivacyPolicy from './PrivacyPolicy';
import AboutUs from './AboutUs';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route

function App() {
  // Array of greetings
  const greetings = [



    
    "🎄 Wishing you a joyous Christmas and a prosperous New Year filled with blessings and achievements. 🎉",
    "🎅 Ho Ho Ho! Merry Christmas and a joyful New Year to you and your family! 🌟",
    "✨ May your holidays sparkle with love, laughter, and cheer! Happy New Year! 🎆",
    "❄️ Warm wishes for a Christmas full of peace and a New Year full of happiness! 🎁",
    "🎉 Cheers to a wonderful year ahead and happy holiday moments with loved ones! 🥂",
    "❤️May your Christmas be merry and bright... and may your New Year be full of laughter and light!🎉" ,
    "😍😍😍क्रिसमस की ढेर सारी शुभकामनाएं! उम्मीद है, सांता आपको ढेर सारे तोहफे लाएगा! 🎉🎉🎉 Click on Santa's hand", 
    "😍😍नया साल मुबारक हो! उम्मीद है, ये साल पिछले साल से ज्यादा अच्छा होगा (क्योंकि बुरा तो नहीं हो सकता!😂😂 Click on Santa's hand"



  ];

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.highperformanceformat.com/2d5714797bbc0cf8fabff47ce9a3bb15/invoke.js";
    script.async = true;

    document.getElementById("ad-container").appendChild(script);
  }, []);

  // Handle click event
  const handleSantaClick = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length); // Select a random greeting
    setGreeting(greetings[randomIndex]); // Update the greeting
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
      <div className="max">
        <p style={{ color: "White" }}>
          <b> 🎉🎆❤️🎉😍 Click Santa's hand for a Surprise! 🎉🎆❤️🎉😍</b>
        </p>
      </div>

      <AdBanner />

      <div className="santa-container">
        <img
          src="/santa.png"
          alt="Santa Claus"
          className="santa-image"
          onClick={handleSantaClick} // Add the click handler
        />
      </div>

      {/* Display the greeting */}
      {greeting && <div className="greeting">{greeting}</div>}

      {/* Share Button */}
      <button className="share-button" onClick={handleShare}>
        Share with Friends & Family 🎉
      </button>

      {/* Footer */}
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* Privacy Policy page */}
        <Route path="/about-us" element={<AboutUs />} /> {/* About Us page */}
      </Routes>
      <footer className="footer">
        <p>© 2024 Created by Josh Basumatary</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/about-us">About Us</a>
      </footer>
    </div>
  );
}

export default App;
