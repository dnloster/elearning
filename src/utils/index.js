import queryString from "query-string";

const formUrlQuery = ({ params, key, value }) => {
    const currentUrl = queryString.parse(params);

    currentUrl[key] = value;

    return queryString.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        { skipNull: true }
    );
};

export default formUrlQuery;
