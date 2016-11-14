import { Route, IndexRoute} from 'react-router';
import React from 'react';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import GoogleMap from './components/googlemap/GoogleMap';
import App from './App';





export default (
        <Route path="/" component={App}>
           <IndexRoute component={HomePage}/>
           <Route path="/about" component={AboutPage}/>
           <Route path="/googlemap" component={GoogleMap}/>
        </Route>
    )

