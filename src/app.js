import React from 'react';
import ReactDOM from "react-dom";
import MoviePage from "./components/MoviePage";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    

    render() {
        return (
            <MoviePage />
        );
    }
}

export default App;