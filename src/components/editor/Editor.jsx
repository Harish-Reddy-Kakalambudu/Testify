import MonacoEditor from "@monaco-editor/react";

const Editor = ({
  value = "",
  onChange,
  language = "json",
  height = "100%",
  readOnly = false,
  minimap = false,
  theme = "light",
}) => {
  return (
    <MonacoEditor
      language={language}
      value={value}
      onChange={onChange}
      theme={
        theme === "dark"
          ? "vs-dark"
          : "vs"
      }
      height={height}
      options={{
        readOnly,

        minimap: {
          enabled: minimap,
        },

        fontSize: 13,

        automaticLayout: true,

        wordWrap: "on",

        formatOnPaste: true,

        formatOnType: true,
      }}
    />
  );
};

export default Editor;