import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import {random} from 'lodash';
import Movies from "./movies/Movies";

class App extends React.Component {
    render() {        
        return <Movies />;
    }
}

export default App;