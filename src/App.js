import "./App.css";
import Group from "./components/Group/Group";

function App() {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const boardId = process.env.REACT_APP_BOARD_ID;
    const url = `https://dev-game-services.objectiveed.com/boards/${boardId}/groups`;

    return (
        <div className="App">
            <header className="App-header">Taskboard Sketch</header>
            <Group accessToken={accessToken} url={url}>
                "HI"
            </Group>
        </div>
    );
}

export default App;
