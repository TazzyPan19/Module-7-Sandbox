import { useState, useEffect } from "react";

export const ActivityFinder = () => { // Fetches a random activity
    const [catFactLength, setCatFactLength] = useState(20);

    // uses custom hook to handle the effect for loading external data
    const [data, isLoading] = useData(
        `https://catfact.ninja/facts?max_length=${catFactLength}`
      );

    const dropDownListHandler = (e) => {
        setCatFactLength(e.target.value);
    }

    const catDisplayHandler = () => {
        if (isLoading) {
            return <p>...Loading</p>
        }
        return data?.data.map((fact, index) => <p key={index}>{fact.fact}</p>);
    }

    return (
    <div className="ActivityFinder componentBox">
        <h3>Activity Finder</h3>
        <label>Choose number of participants:
            <select value={catFactLength}
                onChange={dropDownListHandler}>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
            </select>
        </label>
        <div>
            <strong>Suggested Activity: </strong>{catDisplayHandler()}</div>
    </div>
    )
} 

// ++ Add a second use of useData to fetch activities based on type

export const useData = (url) => {
    // state variable for holding fetched json data
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (url) {
        let ignore = false;
        setLoading(true)
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setLoading(false)
                        setData(json);
                        }
                    });
            // cleanup function, in case url changes before complete
            return () => {
                ignore = true;
            };
        }
    }, [url]); // re-run effect if url changes
    // return the data fetched from the given url
    return [data, loading];
}