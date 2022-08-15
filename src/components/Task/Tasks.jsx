import { React, useState, useEffect } from "react";

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
    return (
        <div className="App">
            <h2>Tasks</h2>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <ul>
                {data &&
                    data.map(({ id, name, body }) => (
                        <li key={id}>
                            <h3>{name}</h3>
                            <div>{body}</div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Tasks;
