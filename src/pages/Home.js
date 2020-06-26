import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import firework from '../images/firework-logo.svg';
import astrounatsImg from '../images/astronauts.svg';

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img
                                src={firework}
                                alt="Firework Logo"
                                className="img-fluid mb-2"
                            />

                            <h1>Badge Management System</h1>
                            <Link className="btn btn-primary" to="/badges">
                                Comenzar
                        </ Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img
                                src={astrounatsImg}
                                alt="Astrounats Logo"
                                className="img-fluid p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
