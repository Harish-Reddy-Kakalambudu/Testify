import Tabs from "../../../../../../components/tabs/Tabs"
import { apiRequestTabsConfig } from "../../../../../../config/tabs_config"

const RequestTabs = () => {
  return (
    <Tabs
      tabs={apiRequestTabsConfig}
      closable
      onAdd={() => console.log("new request")}
      onClose={(id) => console.log(id)}
    />
  );
};

export default RequestTabs;