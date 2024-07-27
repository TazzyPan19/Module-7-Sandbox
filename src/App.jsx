import './App.css'
import { UserContext, UserProvider } from './context/userContext';
import { WelcomePage } from './containers/WelcomePage';
import { Routes, Route } from 'react-router-dom';
import { slideWorkData, Square } from './data/SlideData';
import { SlideWork } from './containers/SlideWork';
import { AppUser, Movies } from './components/RefUse';
import { NavBar } from './components/NavBar';
 
function App() {
  // NOTE STATES AND VARIABLES

  // NOTE FUNCTIONS

  // NOTE RETURNS
  return (
    <UserProvider>
      <NavBar />
        <Routes>
          <Route index element={ <WelcomePage />} />

          <Route path='slide-work'>
            <Route index element={slideWorkData[0].element} />
            <Route path='name-ref/:name' element={<AppUser name={"Timothy"} />}/>
            <Route path='movie-list' element={<Movies />}/>
          </Route>
          <Route path={slideWorkData[1].path} element={slideWorkData[1].element } />
          <Route path={slideWorkData[2].path} element={slideWorkData[2].element } />
          <Route path={slideWorkData[3].path} element={slideWorkData[3].element } />
          <Route path={slideWorkData[4].path} element={slideWorkData[4].element } />
          <Route path={slideWorkData[5].path} element={slideWorkData[5].element } />
          <Route path="square">
            <Route index element={slideWorkData[6].element} />
            <Route path=':fill' element={<Square />}/>
            </Route>

          <Route path="*" element={ <p>Something suppose to be here!</p> } />
        </Routes>
    </UserProvider>
  )
}

export default App


// function App() {
//   // NOTE STATES AND VARIABLES

//   // NOTE FUNCTIONS

//   const routeConstructor = () => {
//     const routeList = slideWorkData.map((content, index) => {
//       return (
//         <Route key={index} path={content.path} element={content.element} />
//       )
//     })
    
//     return routeList;
//   };

//   // NOTE RETURNS
//   return (
//     <UserProvider>
//       <Routes>
//         <Route index element={ <WelcomePage />} />
//           {routeConstructor()}
//         <Route path="*" element={ <p>Something suppose to be here!</p> } />
//       </Routes>
//     </UserProvider>
//   )
// }

// export default App

// NOTE - Mini Task 1

// 1.) look into "local storage + react"
// 2.) see if you can take the modified provider state that we have
//  built, and every time it updates, store it in the local storage of the browser.


// NOTE - Mini Task 2 Routes

// build me a new path, called /square which will draw a square on the page. I want you to choose a path param 
// or a query param to make 2 params in the path which will change the color of the STROKE or line of the square, 
// and the FILL or fill of the square
