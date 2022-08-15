export const getFetchRequestOptions = (accessToken) => {
    const requestHeaders = {
        "Access-Token": accessToken,
        Authorization: `Bearer ${accessToken}`,
    };
    const requestOptions = {
        method: "GET",
        headers: requestHeaders,
        redirect: "follow",
    };
    return requestOptions;
};
