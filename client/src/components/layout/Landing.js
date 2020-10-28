import React from 'react'

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">IDB DevConnector Portal</h1>
            <p className="lead">
              weolcome to IDB DevConnector Portal 
            </p>
            <p className="lead">
            share posts and get help from other developers
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">Sign Up</a>
              <a href="login.html" className="btn btn-light">Login</a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Landing