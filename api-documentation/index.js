import basicInfo from "./basicInfo.js";
import servers from "./servers.js";
import jokeCalls from "./jokes/index.js";
import components from "./components.js";
export default {
  ...basicInfo,
  ...servers,
  ...components,
  // ...tags,
  ...jokeCalls,
};
