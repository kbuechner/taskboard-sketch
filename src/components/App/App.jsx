import "./App.css";
import Groups from "../Group/Groups";
import Tasks from "../Task/Tasks";
import { accessToken, groupsUrl, tasksUrl } from "../../util/apiVars";
import { Grid, GridItem, Heading } from "@chakra-ui/react";


function App() {
    return (
        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={"50px 1fr 30px"}
            gridTemplateColumns={"150px 1fr"}
            h="200px"
            gap="1"
            color="blackAlpha.700"
            className="App"
        >
            <GridItem pl="2" area={"header"}>
                <Heading as="h1" noOfLines={1}>Taskboard Sketch</Heading>
            </GridItem>
            <GridItem pl="2" bg="pink.300" area={"nav"}>
                Nav
            </GridItem>
            <GridItem pl="2" area={"main"}>
                <Groups accessToken={accessToken} url={groupsUrl} />
                <Tasks accessToken={accessToken} url={tasksUrl} />
            </GridItem>
            <GridItem pl="2" bg="blue.300" area={"footer"}>
                Footer
            </GridItem>
        </Grid>
    );
}

export default App;
