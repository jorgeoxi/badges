import React from 'react';

import './styles/NotFound.css';
import error from '../images/404error.svg'

function NotFound() {
    return (
        <div className="NotFound">
                    <div className="text-center">
                        <img
                            src={error}
                            alt="404"
                            className="img-responsive center-block p-4"
                        />
                        <h1>404: Not Found</h1>
                    </div>
                </div>
    )
}

export default NotFound;