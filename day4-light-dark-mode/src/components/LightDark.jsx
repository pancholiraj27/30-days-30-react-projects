import React, { useState } from "react";

const LightDark = () => {
  const [isDark, setIsDark] = useState(false);
  console.log(isDark);
  return (
    <div className={`insideContainer ${isDark ? "dark" : "light"}`}>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default LightDark;
