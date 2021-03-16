import React from 'react';
import './App.scss';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Post from './components/Post';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="app">
                <Menu />
                <Switch>
                    <Route exact path={["/home", "/"]} component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/post/:id" component={Post} />
                </Switch>
            </div>
        </Router>
    )
}
export default App;