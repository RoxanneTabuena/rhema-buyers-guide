import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root }from "./components/root/Root"
import { Article } from './components/Article/Article';
import { Research } from './components/Research/Research';
import { Map } from './components/Map/Map';
import { Timeline } from './components/Timeline/Timeline';

import './App.css';


const router = 

createBrowserRouter( createRoutesFromElements(
  <Route 
    path="/" 
    element={<Root/>}>
        <Route
          index
          element={<Article art={'intro'}
          state={{preserveScroll: false}}
          />}
        />
        <Route
          path='mission'
          element={<Article art={'mission'}/>}
        />
        <Route 
          path="market-research" 
          element={<Research/> }/>
        <Route 
          path="proposal" 
          element={<Article art={'proposal'}/> }/>
        <Route 
          path="map" 
          element={<Map/> }/>
        <Route 
          path="inventory" 
          element={<Article art={'inventory'}/> }/>
        <Route 
          path="themes" 
          element={<Article art={'themes'}/> }/>
        <Route 
          path="logos" 
          element={<Article art={'logos'}/> }/>
        <Route 
          path="graphics" 
          element={<Article art={'graphics'}/> }/>
        <Route 
          path="scope" 
          element={<Article art={'scope'}/> }/>
        <Route 
          path="maintenance" 
          element={<Article art={'maintenance'}/> }/>
        <Route 
          path="timeline" 
          element={<Timeline /> }/>
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
