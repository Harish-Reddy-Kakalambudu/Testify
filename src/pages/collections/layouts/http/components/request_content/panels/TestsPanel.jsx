import Editor from "../../../../../../../components/editor/Editor";

const TestsPanel = () => {
  return (
    <Editor
      language="javascript"
      value={`pm.test("Status code is 200", () => {
  pm.response.to.have.status(200);
});`}
    />
  );
};

export default TestsPanel;