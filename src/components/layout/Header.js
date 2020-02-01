// Will Make it a Functional Component
import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1><i className="fas fa-clock"></i> Clock App</h1>
        </header>
    )
}

// CSS Styling for Header
const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px"
}

export default Header;
