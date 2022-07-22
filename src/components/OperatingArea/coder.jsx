import React from "react";
import Editor from "@monaco-editor/react";

const Coder = (props) => {
  const onChange = (value, _) => {
    props.onChange && props.onChange(value);
  };

  return (
    <Editor
      height="60vh"
      width={`100%`}
      language={props.language}
      value={props.value}
      theme={props.theme}
      defaultValue="// some comment"
      onChange={onChange}
      options={{
        readOnly: props.readOnly ? true : false,
      }}
    />
  );
};

export default Coder;
