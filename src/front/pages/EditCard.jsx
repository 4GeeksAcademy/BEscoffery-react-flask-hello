import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { editContact as editContactFetch} from "../lib/fetch";

export const EditCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { store, dispatch } = useGlobalReducer();
    
    const cardToEdit = store.contacts.find(c => c.id === parseInt(id));
    
    const [form , setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        if (cardToEdit) {
            setForm(cardToEdit);
        }
    }, [cardToEdit]);


    const handleChange = () => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            editContactFetch(id, form, dispatch);
            navigate("/");
    };

    return (
        <div className="container">
            <h2>
                Edit
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                value="{form.name}"
                onChange={handleChange}
                placeholder="Name"
                />
                <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                />
                <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
                />
                <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                />
                <button>Save</button>
            </form>
        </div>
    )
}