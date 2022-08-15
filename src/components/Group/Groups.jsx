import { React, useState, useEffect } from "react";
import {
    Container,
    Grid,
    Header,
    Item,
    ItemDescription,
    Segment,
} from "semantic-ui-react";

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
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
            <Header as="h2" attached="top">
                Groups
            </Header>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                {loading && <div>A moment please...</div>}
                {error && (
                    <div>{`There is a problem fetching the post data - ${error}`}</div>
                )}
                <Item.Group divided>
                    {data &&
                        data.map(({ id, name, description }) => (
                          <Grid.Column>
                            <Item key={id}>
                                <Item.Content verticalAlign="middle">
                                    <Item.Header as="h3">{name}</Item.Header>
                                    <ItemDescription>
                                        {description}
                                    </ItemDescription>
                                    {console.log(url)}
                                </Item.Content>
                            </Item>
                            </Grid.Column>
                        ))}
                </Item.Group>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Groups;
