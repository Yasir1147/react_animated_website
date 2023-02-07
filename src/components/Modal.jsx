import React, {useState} from "react";


const Modal = (props) => {
    console.log(props.inputdata);
    const [formData, setFormData] = useState({});

    const closeModal =() => {
            props.setSate({display: 'none'});
            document.body.classList.remove('body')
        }

    const saveData = () => {
        setFormData((PreVal) => {
            return [props.inputdata, ...PreVal];
        });
    }

    return (<>
        <div className="modal fade show" style={props.state} id="myModal" tabIndex="-1" arial-modal="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.fname}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>

                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>

                            </tr>
                            </thead>

                            <tbody>

                            {props.inputdata.map((val, index) => {

                                return (
                                            
                                        <tr>        
                                        <td>{index+1}</td>
                                        <td>{val.fname}</td>
                                        <td>{val.lname}</td>
                                        <td>{val.email}</td>
                                        </tr>
                                    
                                  )
                            })}


                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}   >Close</button>
                        {/*<button type="button" className="btn btn-primary" onClick={saveData}>Save changes</button>*/}
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Modal;