import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Coursesanalyties from './components/Coursesanalyties/Coursesanalyties';
import Blog from './components/Blog/Blog';
import Main from './pages/Main';
import Quiz from './components/Quiz/Quiz';
import Allcourses from './components/Allcourses/Allcourses';

function App() {
  const router =createBrowserRouter([
    {path:'/',element:<Main></Main>, children:[
      {
        path:'home',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>
      },
      {
        path:'allcourses',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Allcourses></Allcourses>
      },
      {
        path:'/',
        loader:async()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
        },
        element: <Home></Home>
      },
      {path:'coursesanalyties',
      loader:async()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz');
      },
      element:<Coursesanalyties></Coursesanalyties>
    },
      {path:'blog',element:<Blog></Blog>},
      {
        path:'/course/:id',
        loader:async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        },
        element:<Quiz></Quiz>
      }
    ] },
    {path:'*',element:<h1>opps sumthing is wroooong</h1>}
  ]) 
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
