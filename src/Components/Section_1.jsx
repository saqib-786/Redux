import React from "react";

class Sectoin_1 extends React.Component{
    render(){
        return(
            <div>
                <div className="container d-flex justify-content-center align-items-center  ">
                    <div className="row">
                        <div className="col">
                            <p className="display-6">Free Your Time</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, Vero,
                                 cumque? Quas modi laboriosam totam illo corrupti.</p>
                        </div>
                        <div className="col p-2 mt-5">
                            <button  className="mt-4 m-2 btn btn-warning">Get Started</button>
                            <button className="mt-4 m-2 btn btn-outline-info">More Info</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sectoin_1