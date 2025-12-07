import { useEffect, useState } from "react";

const useFetch = (apiFunc, params = null) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await apiFunc(params);

                if (isMounted) {
                    setData(res.data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err?.response?.data?.message ||
                        err.message ||
                        "Something went wrong!"
                    );
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };

    }, [apiFunc, params]);

    return { data, loading, error };

};

export default useFetch;
