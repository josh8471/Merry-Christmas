import React, { useState } from "react";
import "./App.css"; // Add any necessary CSS here

function App() {
  const [greeting, setGreeting] = useState("");

  // Handle click event
  const handleSantaClick = () => {
    setGreeting("🎄 Merry Christmas and Happy New Year! 🎉");
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
      <h1>Welcome to the Christmas & New Year App</h1>

      <div className="santa-container">
        <img
          src="/santa.png"
          alt="Santa Claus"
          className="santa-image"
          onClick={handleSantaClick}
        />
        <p>Click Santa's hand for a surprise!</p>
      </div>

      {greeting && <div className="greeting">{greeting}</div>}

      {/* Share Button */}
      <button className="share-button" onClick={handleShare}>
        Share with Friends & Family 🎉
      </button>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Created by Josh Basumatary</p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/about-us">About Us</a>
      </footer>
    </div>
  );
}
export default App
