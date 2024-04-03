import Dashboard from "./pages/Dashboard/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
}
 from "react-router-dom";
 
 import  React from "react"; 

import TarnsactionPage from "./pages/Transaction/TransactionPage";
import SupportPage from "./pages/Support/SupportPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <TarnsactionPage />,
    },
    {
      path: "/support",
      element: <SupportPage />,
    },
  ]);


  return (
    <>
    <RouterProvider router={router} />
      
    </>
  )
}

export default App
