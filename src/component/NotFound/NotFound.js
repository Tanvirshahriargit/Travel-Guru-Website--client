import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className="fs-1 text-warning">404</h1>
            <h1>Not Found Anything</h1>
            <Link to="/"><button className ="btn btn-primary">Back To Home</button></Link>
        </div>
    );
};

export default NotFound;