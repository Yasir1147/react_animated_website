import React from "react";

import card_data from './card.json'
import Service_card from './Service_card'



const Services = () => {
    return (

        <>
            <div className="container">
                <div className="services mb-5">
                    <h1 className="heading">Our Services</h1>
                    <div className="row gy-3">
                        {card_data.map((val, index) => {
                            return <Service_card title={val.title} desc={val.desc} img={val.img} key={index}/>
                        })}


                    </div>

                </div>

            </div>
        </>

    );
}
export default Services;