import React from "react";
import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist";
import { customStyles } from "../../constants/customStyles";

const ThemeDropdown = ({ handleThemeChange, theme, showCssOutputHandler }) => {
  return (
    <div className="d-flex">
      <Select
        className="theme-dropdown"
        placeholder={`Select Theme`}
        // options={languageOptions}
        options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
          label: themeName,
          value: themeId,
          key: themeId,
        }))}
        value={theme}
        styles={customStyles}
        onChange={handleThemeChange}
      />
      <button className="main-btn" onClick={showCssOutputHandler} styles={customStyles}>Show css output</button>
    </div>
  );
};

export default ThemeDropdown;
