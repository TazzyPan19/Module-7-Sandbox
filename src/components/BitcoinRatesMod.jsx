import { useReducer, useEffect, useState } from "react";
import { bitcoinRateData } from "../data/BitcoinRateData";
import { useDataFetch } from "../hooks/useDataFetch";

export function BitcoinRatesMod() {
  // NOTE STATES AND VARIABLES
  const [currency, setCurrency] = useState(bitcoinRateData[0]);
  const [rate, setRate] = useState(0);

  const [data, isLoading] = useDataFetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
  );

  useEffect(() => {
    if (data && !isLoading) {
      console.log(data);
      setRate(data.data.bitcoin[currency.toLowerCase()]);
    }
  }, [data, isLoading])

  const displayHandler = () => {
    if (isLoading) {
      return <p>...Loading</p>
    }
      return <div> 1 Bitcoin equals to {rate} {currency}. </div>
  }
  
  const options = bitcoinRateData.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // NOTE RETURNS
  return (
    <div className="BitcoinRates componentBox">
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
          {displayHandler()}
    </div>
  );
}


// export function PostListReducer() {
//   const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
//       loading: true, // true when loading and no data in posts
//       posts: [], // empty until data is fetched
//       error: '' // empty unless there was an error
//   })

//   useEffect(() => {
//       axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
//       .then(response => {
//           // object passed to dispatch holds all data needed for updating state: both type of update and associated data
//           dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
//       })
//       .then(info => {
//           // object passed to dispatch holds all data needed for updating state: both type of update and associated data
//           dispatch({ type: "RELOAD_DATA", payload: info.data}) // dispatch calls reducer function and triggers re-render
//       })
//       .catch(error => {
//           dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
//       })
//   }, []);

//   return (
//       <div className="PostList componentBox">
//           {postsResult.loading ? <div>Loading posts...</div> :
//               postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
//                   <div className="post" key={post.id}>
//                       <h3>Post #{post.id}: {post.title}</h3>
//                       <p>{post.body}</p>
//                   </div>
//               ))}
//           <div className="error">{postsResult.error}</div>
//           <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>Clear Post</button>
//           <button onClick={() => dispatch({ type: "RELOAD_DATA" })}>Reload Post</button>
//       </div>
//   )
// }
