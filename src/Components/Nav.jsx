import React from "react";
// import Logo from '../Assets/logo.png';

class Nav extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="display-6 text-light">LOGO</p>
                        </div>
                        <div className="col">
                        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                       <div className="container-fluid">
                  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Nav