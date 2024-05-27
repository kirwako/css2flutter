import React, { useCallback, useEffect, useState } from "react";
import Coder from "./coder";
import convert2Flutter from "../../service/convert/converter";
import { defineTheme } from "../../lib/defineTheme";
import ThemeDropdown from "../UI/ThemeDropdown";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as FlutterIcon } from "../../assets/icons/flutter.svg";
import "./OperatingArea.css";

const cssDefaultValue = `
.text-style {
  background-color: #1E293B;
  width: 320px;
  height: 200px;
  border:5px solid white;
  font: 900 24px Georgia;
  padding: 20px 22px;
  margin: 3px;
  border-radius: 10px;
  text-decoration: underline wavy red;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
`.trim();

const OperatingArea = () => {
  let cssOptions = { mode: "css" };

  let dartOptions = { mode: "dart" };

  const [cssVal, setCssVal] = useState(cssDefaultValue);
  const [dartVal, setDartVal] = useState("");
  const [theme, setTheme] = useState("vs-dark");
  const [showCssoutput, setShowCssoutput] = useState(false);

  const showCssOutputHandler = () => {
    console.log("showCssoutput", showCssoutput);
    setShowCssoutput((_) => !showCssoutput);
  };

  const updateCoder = useCallback(({ cssVal, dartVal }) => {
    if (dartVal !== undefined && dartVal !== null) setDartVal(dartVal);
    if (cssVal !== undefined && cssVal !== null) setCssVal(cssVal);
  }, []);

  const convertAndUpdateDartCoder = useCallback(async () => {
    const dartVal = await convert2Flutter(cssVal);
    updateCoder({ dartVal });
  }, [cssVal, updateCoder]);

  useEffect(() => {
    async function init() {
      // make the oceanic-next is the default theme
      defineTheme("oceanic-next")
        .then((_) => {
          setTheme({ value: "oceanic-next", label: "Oceanic Next" });
          // console.log("theme", theme);
        })
        .catch((err) => {
          console.log(err);
        });
      // convert the default css value to dart on first render
      await convertAndUpdateDartCoder();
    }
    init();
  }, [convertAndUpdateDartCoder]);

  const codeChangeHadler = async (value) => {
    const dartVal = await convert2Flutter(value);
    updateCoder({ cssVal: value, dartVal: dartVal });
  };

  const handleThemeChange = (th) => {
    const theme = th;
    // console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  };

  return (
    <div className="opearating-area-container">
      <div>
        <ThemeDropdown
          handleThemeChange={handleThemeChange}
          showCssOutputHandler={showCssOutputHandler}
          theme={theme}
        />
        {/* <button>Convert to Flutter</button> */}
      </div>
      <div className="opearating-area-row">
        <div span={12} className="coder-con">
          <div className="coder-title">
            <CssIcon width={20} height={20} /> Css{" "}
          </div>
          <Coder
            options={cssOptions}
            value={cssVal}
            onChange={codeChangeHadler}
            language="css"
            theme={theme.value}
          />
        </div>

        <div span={12} className="coder-con">
          <div className="coder-title">
            <FlutterIcon width={20} height={20} /> Flutter
          </div>
          <Coder
            options={dartOptions}
            value={dartVal}
            language="dart"
            theme={theme.value}
            readOnly={true}
          />
          <div
            className="avatar-container"
            style={{
              bottom: showCssoutput ? "10%" : "100vh",
            }}
          >
            <div id="avator">Hello World</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingArea;
