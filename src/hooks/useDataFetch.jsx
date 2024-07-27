import { useReducer, useEffect, useState } from "react";
import axios from "axios";

export const fetchDataActions = {
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
    FETCH_LOADING: "FETCH_LOADING",
};

export const useDataFetch = (url) => {
    const [data, dispatch] = useReducer(dataReducer, { 
        loading: true, 
        data: [], 
        error: ''
    })

    useEffect(() => {
        if (url) {
        let ignore = false;
        dispatch({ type: fetchDataActions.FETCH_LOADING })
            axios
                .get(url)
                .then(response => {
                    dispatch({ type: fetchDataActions.FETCH_SUCCESS, payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: fetchDataActions.FETCH_ERROR, payload: error.message })
                })
            
            return () => {
                ignore = true;
            };
        }
    }, [url]); 
   
    return [data, data.loading];
}

function dataReducer (state, action) {
    switch (action.type) {
    case 'FETCH_SUCCESS':
        return { loading: false, data: action.payload, error: '' }
    case 'FETCH_ERROR':
        return { loading: false, data: [], error: action.payload }
    case 'FETCH_LOADING':
        return { ...state, loading: true }
    default:
        return { ...state, loading: false }
    }
}

    // useEffect(() => {
    //     if (url) {
    //     let ignore = false;
    //     setLoading(true)
    //         axios.get(url)
    //             .then(response => response.json())
    //             .then(json => {
    //                 if (!ignore) {
    //                     setLoading(false)
    //                     setData(json);
    //                     }
    //                     console.log(json)
    //                 });
    //         // cleanup function, in case url changes before complete
    //         return () => {
    //             ignore = true;
    //         };
    //     }