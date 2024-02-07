import axios from "axios";
import { useState } from "react";

const useFetch = () => {

    const [apiData, setapiData] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [hasError, sethasError] = useState(false);

    const getApi = url => {
        axios.get(url)
            .then(res => setapiData(res.data))
            .catch(err => console.log(err))
            .finally(() => {
                setisLoading(false);
            });
    }
    return [apiData, getApi, isLoading, hasError];
}

export default useFetch;