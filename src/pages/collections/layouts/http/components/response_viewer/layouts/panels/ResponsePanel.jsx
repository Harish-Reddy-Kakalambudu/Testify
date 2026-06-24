import Editor from "../../../../../../../../components/editor/Editor";

const ResponsePanel = () => {
  return (
    <Editor
      readOnly
      language="json"
      value={`{
  "success": true,
  "message": "Login successful"
}`}
    />
  );
};

export default ResponsePanel;