import './index.css';
import Header from "./components/Header";
import Body from './components/Body';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';
import {Provider} from "react-redux";
import store from "./utils/store";
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

function App() {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Body />,
      children: [
        {
          path:"/",
          element: <VideoContainer />
        },
        {
          path: "/watch",
          element: <WatchPage />
        },
        {
          path:"/demo",
          element: 
          <>
           <Demo />
           <Demo2/>
          </>
        }
      ]
    }
  ]);

  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
      {
        /**
         * 
         * Header
         * Body
         *   SideBar
         *   (based on route and use Outlet)
         *   VideoContainer
         *      ButtonList
         *      VideoCards
         *   WatchPage
         */
      }
    </div>
  );
}

export default App;
