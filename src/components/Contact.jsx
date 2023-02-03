import React, {useState} from "react";
import Model from './Modal';

const Contact = () => {


    const [state,setState] = useState({ display: "none" })


    const [inputData,setInputData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });


    const [formData,setFormData] =useState();

    const InputEvent = (event) => {

        let {name, value} = event.target;
        setInputData((Prev)=>{
            return {
                ...Prev,
                [name]: value,
            }
        });
    }


    const SubmintForm = (event)=>{

        console.log(inputData);
        setFormData(inputData);
        setState({ display: "block"});

        setInputData({
            fname: '',
            lname: '',
            email: '',
            phone: ''
        });

        event.preventDefault();
    }

    return (<>

            <Model inputdata={formData} state={state} setSate={setState} />
            <div className="container-fluid contact_us bck_img">
                <div className="contact_form d-flex align-items-center">
                    <form onSubmit={SubmintForm}>
                        <div className="mb-3">
                            <label htmlFor="exampleFirstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" name="fname" value={inputData.fname}
                                   id="exampleFirstName" aria-describedby="emailHelp" required="true"
                                   onChange={InputEvent}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFirstName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" onChange={InputEvent} name="lname"
                                   value={inputData.lname} id="exampleFirstName" aria-describedby="emailHelp"
                                   required="true"/>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" name="email" onChange={InputEvent}
                                   value={inputData.email} required="true"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                            <input type="number" name="phone" onChange={InputEvent} value={inputData.phone}
                                   className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </>

    );

}
export default Contact