import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getOneContact } from "../services/getOneContact";
import { putEditedContact } from "../services/putEditedContact";

const EditContact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [contact, setContact] = useState(location.state);

    const changeHandler = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = async(e) => {
        if (!contact.name || !contact.email) {
            alert("all fildes are mandatory  ! ");
            return;
        }
        e.preventDefault();
        try {
            await putEditedContact(contact.id,contact)
         } catch (error) { }
        
        navigate("/");
    };
    
    return (
        <div className="editInput">
            <section>
                <h2>Add Contact</h2>
                <form onSubmit={submitHandler}>
                    <div className="formControl">
                        <label>Name</label>
                        <input
                            onChange={changeHandler}
                            value={contact.name}
                            name="name"
                            type="text"
                            placeholder="name"
                        />
                    </div>
                    <div className="formControl">
                        <label htmlFor="">Email</label>
                        <input
                            onChange={changeHandler}
                            value={contact.email}
                            type="email"
                            name="email"
                            placeholder="email"
                        />
                    </div>
                    <button className="addBtn" type="submit">
                        Update Contact
                    </button>
                </form>
            </section>
        </div>
    );
};

export default EditContact;
