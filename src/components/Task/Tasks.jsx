import { React, useState, useEffect } from "react";
import { Grid, Box, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const Tasks = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { accessToken, url, boardId, ...children } = props;

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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid container>
            <h2>Tasks</h2>
            {loading && <Grid item>A moment please...</Grid>}
            {error && (
                <Grid
                    item
                >{`There is a problem fetching the post data - ${error}`}</Grid>
            )}
            {data &&
                data.map(({ id, name, body }) => (
                    <Grid item xs={4} key={id}>
                        <Item>
                            <h3>{name}</h3>
                            <div>{body}</div>
                        </Item>
                    </Grid>
                ))}
        </Grid>
    );
};

export default Tasks;
