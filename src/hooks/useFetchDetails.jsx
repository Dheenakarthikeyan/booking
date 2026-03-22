import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";

const useFetchDetails = (url) => {

    const [data, setdata] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setdata(res.data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, [url]);
    return {
        data
    }


}


export default useFetchDetails