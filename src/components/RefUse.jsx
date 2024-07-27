// import { useReducer, useRef, useEffect, useState } from "react";
import axios from 'axios';
import React, { useReducer, useRef, useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useParams } from 'react-router-dom';

// NOTE Exercise #1

export const AppUser = () => {
    // NOTE STATES AND VARIABLES
    const userOne = useRef();
    const { name } = useParams();

    // NOTE FUNCTIONS
    useEffect(() => {
        setTimeout(() => {
            userOne.current.textContent = "Welcome Back, Timothy Branco!";
            userOne.current.style.color = "blue";
          },4000)
    }, []);

    // NOTE RETURNS
    return (
         <div>
             <h3>Username Display</h3> 
             <div ref={userOne}>{name}</div>
         </div>
    )
}

// NOTE
// create a component which takes in 1 prop which is NAME
// make ref For the the name DIV
// render Name in a div
// use effect which only once will take the DIV and OVERWRITE the textcontent

// change the TEXT color of your overwrite TextContext to blue

// NOTE Exercise #2

const moviesReducer = (state, action) => {
    console.log("Shots Fired!", state.type)
    switch (action.type){
        case 'ADD_MOVIE':
            const cloneMoviesAdd = { ...state };
            cloneMoviesAdd.push({ title: "The Matrix", year: 1999 });
            return cloneMoviesAdd;
        case 'REMOVE_MOVIE':
            const cloneMoviesRemove = { movieList: { ...state }.filter((movie) => movie !== "Rodger Rabbit")};
            return cloneMoviesRemove;
        default:
            return { ...state };
    }
}

// export const Movies = () => {
//     // NOTE STATES AND VARIABLES
//     const [state, dispatch] = useReducer(moviesReducer, { 
//         movieList: [
//             { title: "Rodger Rabbit", year: 1988},
//             { title: "Edge of Tomorrow", year: 2014},
//             { title: "The Lighthouse", year: 2019},
//             { title: "Hot Fuzz", year: 2004},
//         ]}
//     ) ;

//     // NOTE FUNCTIONS
//     const MovieHandlerDisplay = () => {
//         return state.movieList.map((item) => {
//             return <li key={item.title}>{item.title}</li>;
//         })
//     }

//     const addMovie = () => {
//         dispatch({ type: "ADD_MOVIE" });
//     }

//     const deleteMovie = () => {
//         dispatch({ type: "REMOVE_MOVIE" });
//     }
   
//     // NOTE RETURNS
//     return (
//         <div>
//             <h3>Film List</h3>
//             <ul>
//                 {MovieHandlerDisplay()}
//             </ul>
//             <button onClick={addMovie}>Add</button>
//             <button onClick={deleteMovie}>Remove</button>  
//         </div>
//     )
// }

export const Movies = () => {
    // NOTE STATES AND VARIABLES
    const [movieList, setMovieList] = useState(["Rodger Rabbit", "Edge of Tomorrow", "The Lighthouse", "Hot Fuzz"]);
    const { currentUser } = useUserContext();
    console.log("Current User:", currentUser.name);

    // NOTE FUNCTIONS
    const MovieHandlerDisplay = () => {
        return movieList.map((item) => {
            return <li key={item}>{item}</li>;
        })
    }

    const addMovie = () => {
        const newMovieList = [...movieList];
        newMovieList.push("The Matrix")
        setMovieList(newMovieList);
    }

    const deleteMovie = () => {
        const newMovieList = [...movieList].filter((movie) => movie !== "Rodger Rabbit")
        setMovieList(newMovieList);
    }
   
    // NOTE RETURNS
    return (
        <div>
            <h3>Film List</h3>
            {currentUser.name}
            <ul>
                {MovieHandlerDisplay()}
            </ul>
            <button onClick={addMovie}>Add</button>
            <button onClick={deleteMovie}>Remove</button>  
        </div>
    )
}

export function PostListReducer() {
    const [postsResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        posts: [], // empty until data is fetched
        error: '' // empty unless there was an error
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
        .then(response => {
            // object passed to dispatch holds all data needed for updating state: both type of update and associated data
            dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
        })
        .then(info => {
            // object passed to dispatch holds all data needed for updating state: both type of update and associated data
            dispatch({ type: "RELOAD_DATA", payload: info.data}) // dispatch calls reducer function and triggers re-render
        })
        .catch(error => {
            dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
        })
    }, []);

    return (
        <div className="PostList componentBox">
            {postsResult.loading ? <div>Loading posts...</div> :
                postsResult.posts.map(post => ( // list of posts is just one of the things stored in the postsResult state object
                    <div className="post" key={post.id}>
                        <h3>Post #{post.id}: {post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            <div className="error">{postsResult.error}</div>
            <button onClick={() => dispatch({ type: "CLEAR_DATA" })}>Clear Post</button>
            <button onClick={() => dispatch({ type: "RELOAD_DATA" })}>Reload Post</button>
        </div>
    )
}

function reducer (postsResult, action) {
    switch (action.type) {
    case 'FETCH_SUCCESS':
        return { loading: false, posts: action.payload, error: '' }
    case 'CLEAR_DATA':
        return { loading: false, posts: [], error: '' }
    case 'RELOAD_DATA':
        return { loading: false, posts: action.payload, error: '' }
    case 'FETCH_ERROR':
        return { loading: false, posts: [], error: action.payload }
    default:
        return { ...postsResult, loading: false }
    }
}