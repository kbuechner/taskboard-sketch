import { React, useState, useEffect } from "react";
import { Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

const Groups = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { accessToken, url, ...children } = props;
    const requestHeaders = {
        "Access-Token": accessToken,
        Authorization: `Bearer ${accessToken}`,
    };
    const requestOptions = {
        method: "GET",
        headers: requestHeaders,
        redirect: "follow",
    };

    useEffect(() => {
        fetch(url, requestOptions)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error status ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                console.error("error :", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <Heading>Groups</Heading>
            {console.log(data)}
            {loading && <Text>A moment please...</Text>}
            {error && (
                <Text>{`There is a problem fetching data - ${error}`}</Text>
            )}
            {data && (
                <Grid
                    templateRows="repeat(1, 1fr)"
                    templateColumns={`repeat(${data.length}, 1fr)`}
                    gap={2}
                >
                    {data.map(({ id, name, description }) => (
                        <GridItem colSpan={1} key={id} id={id}>
                            <Heading as="h3" fontSize="xl">
                                {name}
                            </Heading>
                            <Text>{description}</Text>
                        </GridItem>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Groups;
