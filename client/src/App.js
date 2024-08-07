import './App.scss';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/Signin/SignIn";
import { Order } from './components/Order/Order';

function App() {
  const Layout = () => {
    return (
      <div className='app'>
        <NavBar />
        <Outlet />
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/dashboard",
          element: "Saad",
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <SignIn/>,
        },
        {
          path: "/order",
          element: <Order/>
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
