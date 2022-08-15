export const getTasks = async (url, accessToken) => {
    const requestHeaders = {
        "Access-Token": accessToken,
        Authorization: `Bearer ${accessToken}`,
    };
    const requestOptions = {
        method: "GET",
        headers: requestHeaders,
        redirect: "follow",
    };

    fetch(url, requestOptions)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => console.error("error :", error));
};
