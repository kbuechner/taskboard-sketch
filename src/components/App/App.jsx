import "./App.css";
import Groups from "../Group/Groups";
import Tasks from "../Task/Tasks";
import {accessToken, groupsUrl, tasksUrl} from "../../util/apiVars"

 function App() {


    return (
        <div className="App">
            <header className="App-header">Taskboard Sketch</header>
            <Groups accessToken={accessToken} url={groupsUrl} />
            <Tasks accessToken={accessToken} url={tasksUrl} />
        </div>
    );
}

export default App;
