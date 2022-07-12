import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Dictionary from "./Components/Dictionary";
import Home from "./Components/Home";

function App() {
    return (
        <div className="container-fluid pt-0 m-0">
            <div className="row">
                <div className="col-md-12 p-0">
                    <div className="app-navbar">
                        <div className="app-brand">
                            <Link to={"/"}>Dictionary</Link>
                        </div>
                        <ul className="app-nav">
                            <li>
                                <Link to={"/dictionary/essential"}>
                                    Essential Words 4000
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dictionary/elementar"}>
                                    Elementar Words 4000
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dictionary/global"}>
                                    Global Education Words
                                </Link>
                            </li>
                            <li>
                                <Link to={"/dictionary/headway"}>
                                    Headway Words
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <Switch>
                        <Route exact path={'/'}>
                            <Home />
                        </Route>
                        <Route path={'/dictionary/essential'}>
                            <Dictionary />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
