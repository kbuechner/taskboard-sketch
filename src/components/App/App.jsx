import "./App.css";
import Groups from "../Group/Groups";
import Tasks from "../Task/Tasks";
import {accessToken, groupsUrl, tasksUrl} from "../../util/apiVars"
import {Header} from 'semantic-ui-react';

 function App() {


    return (
        <div className="App">
            <Header as="h1" className="App-header">Taskboard Sketch</Header>
            <Groups accessToken={accessToken} url={groupsUrl} />
            <Tasks accessToken={accessToken} url={tasksUrl} />
        </div>
    );
}

export default App;
