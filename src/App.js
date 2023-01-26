
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, Outlet, Link, RouterProvider} from 'react-router-dom'
import Home from './components/Home';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Header from './components/Header';
import Footer from './components/Footer';
import {FetchedData, dataLoader} from './components/FetchedData';

function App(props) {

const costumeRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Root />} >
      <Route index element = {<Home />}   />
      <Route path='/component1' element = {<Component1 />}   />
      <Route path='/component2' element = {<Component2 />}   />
      <Route path='/header'   element = {<Header />}   />
      <Route path='/footer'  element = {<Footer />}   />
      <Route path='/fetchdata'  element = {<FetchedData />} loader={dataLoader}  />

    </Route>

  )
)

  return (
    <div className="App">

      <RouterProvider router={costumeRouter} />
     
    </div>
  );
}

export default App;

const Root = () => {
  return <> 
  <div> 
    <Link to="/" >Home</Link>
    <Link to="/component1" >Component1</Link>
    <Link to="/component2" >Component2</Link>
    <Link to="/header" >Header</Link>
    <Link to="/footer" >Footer</Link>
    <Link to="/fetchdata" >FetchData</Link>
     </div> 
     <div>
      <Outlet />
     </div>
     </>
}
