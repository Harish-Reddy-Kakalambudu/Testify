import { useState } from "react";

import KeyValueTable from "../../../../components/key_value_table/KeyValueTable";
import RequestEditor from "../request_editor/RequestEditor";
import AuthPanel from "./panels/AuthPanel";
import TestsPanel from "./panels/TestsPanel";
import SettingsPanel from "./panels/SettingsPanel";
import RequestConfigTabs from "../request_config_tabs/RequestConfigsBar";

const RequestContent = () => {
  const [activeTab, setActiveTab] =
    useState("Body");

  return (
    <>
      <RequestConfigTabs
        value={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "Params" && (
        <KeyValueTable />
      )}

      {activeTab === "Headers" && (
        <KeyValueTable />
      )}

      {activeTab === "Auth" && (
        <AuthPanel />
      )}

      {activeTab === "Body" && (
        <RequestEditor />
      )}

      {activeTab === "Tests" && (
        <TestsPanel />
      )}

      {activeTab === "Settings" && (
        <SettingsPanel />
      )}
    </>
  );
};

export default RequestContent;