import { useState } from "react";
// eslint-disable-next-line react/prop-types
export function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        border: "2px solid red",
        padding: "10px",
        borderRadius: "5px",
        maxWidth: "500px",
      }}
    >
      <h2
        style={{
          color: "blue",
          margin: "0 0 10px",
        }}
        onClick={handleToggleCollapse}
      >
        {title}
      </h2>
      {!collapsed && <div>{children}</div>}
    </div>
  );
}
