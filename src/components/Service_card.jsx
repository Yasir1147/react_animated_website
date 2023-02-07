import React from "react";

const Service_card = (props) => {
    return (<>
        <div className="col-md-4">
            <div className="card-group">
                <div className="card">
                    <div className="card_img">
                        <img src={props.img} className="card-img-top" alt="test.png"/>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text">{props.desc.substring(0, 90)}</p>
                        <a href={props.link}>Check Now</a>
                    </div>
                </div>
            </div>

        </div>
    </>);

}
export default Service_card;