import React, { createContext, useEffect, useState } from "react";

export const SidebarContext = createContext();
const ThemeContext = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const updateSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <SidebarContext.Provider value={{ sidebar, updateSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default ThemeContext;
