import { BrowserRouter, Route, Switch } from "react-router-dom"
import Orders from "./Orders"
import Home from "./Home"
import Navbar from "./Nav"
function Routes(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path="/orders">
            <Orders/>
        </Route>   
        
        <Route path="/">
            <Home/> 
        </Route>  

        </Switch> 
        
        </BrowserRouter>
    )

}

export default Routes