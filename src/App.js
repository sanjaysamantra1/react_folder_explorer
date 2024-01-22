import "./App.css";
import Folder from "./components/Folder";
import jsonData from "./data/data.json";

function App() {
  return (
    <div>
      <Folder folderInfo={jsonData} />
    </div>
  );
}

export default App;
