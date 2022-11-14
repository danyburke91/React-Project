import React, { Component } from 'react'
import {Container} from 'bootstrap-4-react';

const About = () => {
    return (
        <div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">Saving a life will change yours. Adopt! Find your next best friend at the animal shelter.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-muted">
                go to search
            </div>
        </div>

    );
};

export default About;