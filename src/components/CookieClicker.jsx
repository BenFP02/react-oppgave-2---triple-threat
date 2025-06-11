import { useState } from "react";

function CookieClicker() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="widget-card">
      <h2>Cookie Clicker</h2>
      <img
        src="cookie.png"
        alt="cookie"
        className="cookie-image"
        onClick={handleClick}
      />
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Cookies clicked: {count}
      </p>
    </div>
  );
}

export default CookieClicker;
