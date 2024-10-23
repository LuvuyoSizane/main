import React from 'react';

const LandingPage = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Cash in Transit</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Register">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="jumbotron mt-4">
                <h1 className="display-4">Welcome to Cash in Transit Management System!</h1>
                <p className="lead">This is a software system to manage and track cash-in-transit operations, ensuring secure transportation and delivery of cash and valuables between locations.</p>
                <hr className="my-4" />
                <a className="btn btn-primary btn-lg" href="/Login" role="button">Login</a>
            </div>
        </div>
    );
};

export default LandingPage;
