import React from 'react'


function Footer({ reports }) {
    const numberOfLocations = reports.length;
  
    return (
      <footer className="absolute inset-x-0 bottom-0 h-16 text-xl  bg-emerald-400">
        <p className="text-white">{numberOfLocations} Locations World Wide</p>
      </footer>
    );
  }
  
  export default Footer;