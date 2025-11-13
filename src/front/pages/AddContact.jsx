import { useState } from "react" ;
import { addContact } from "../lib/fetch";
import  useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const AddContact = () => {
    const [contactName, setContactName] = useState("");
    const [contactAddress, setContactAddress] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");

    const {store, dispatch} = useGlobalReducer();
    
    return (
        <div className="row add-contact-row">
            <div></div>
            <div className="col-6">
                <form className="contact-form d-flex row">
                    <div class="mb-3">
                        <label htmlFor="contactName" className="form-label">Full Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="contactName"
                        value={contactName}
                        onChange={e => setContactName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contactAddress" className="form-label">Address</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="contactAddress"
                        value={contactAddress}
                        onChange={e => setContactAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="contactPhone" className="form-label">Phone Number</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="contactPhone"
                        value={contactPhone}
                        onChange={e => setContactPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="contactEmail" className="form-label">Email Address</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="contactEmail"
                        value={contactEmail}
                        onChange={e => setContactEmail(e.target.value)}
                        />
                    </div>
                    <button
                    type=""
                    className=""
                    onClick={() => addContact(contactName, contactAddress, contactPhone, contactEmail, dispatch)}
                    >
                        Submit
                    </button>
                </form>
                <Link to="/">Return Home</Link>
            </div>
        </div>
    )
}