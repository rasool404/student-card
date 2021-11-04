import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./layouts/home";
import Form from "./layouts/form";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/form' component={Form}/>
            <Redirect to='/'/>
        </Switch>
    </BrowserRouter>

);

export default App;
