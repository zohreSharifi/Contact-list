import { useState } from "react";

const AddContact = ({ onSubmit }) => {
    const [contact, setContact] = useState({ name: "", email: "", id: null });

    const changeHandler = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
            id: Math.floor(Math.random() * 100),
        });
    };

    const submitHandler = (e) => {
        if (!contact.name || !contact.email) {
            alert("all fildes are mandatory  ! ");
            return;
        }
        e.preventDefault();
        onSubmit(contact);
        setContact({ name: "", email: "", id: null });
    };

    return (
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
                    Add
                </button>
            </form>
        </section>
    );
};

export default AddContact;
