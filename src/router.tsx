import { createBrowserRouter } from "react-router-dom"
import SearchPage from "./components/search/SearchPage";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
        
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
]);