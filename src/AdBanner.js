import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    // This will add the ad script dynamically
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//www.highperformanceformat.com/2d5714797bbc0cf8fabff47ce9a3bb15/invoke.js";
    script.async = true;

    const adContainer = document.getElementById("ad-container");
    adContainer.appendChild(script);
  }, []); // Runs only once after the component loads

  return (
    <div className="ad-banner" id="ad-container">
      {/* Ad script will load here */}
    </div>
  );
};

export default AdBanner;
