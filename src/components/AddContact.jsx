import { useEffect, useState } from "react";
import ContactList from "./ContactList";

const AddContact = () => {
    const [user, setUser] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("contacts")) || []);
    }, []);

    const addContactHandler = (e) => {
        e.preventDefault();
        setUser([...user, { name, email, id: Math.floor(Math.random() * 100) }]);
    };
    const changeHandler = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else {
            setEmail(e.target.value);
        }
    };
    const removeHandler = (id) => {
        const filteredUser=user.filter((item) => item.id != id)
        setUser(filteredUser);
        localStorage.setItem("contacts", JSON.stringify(filteredUser));
    };

    return (
        <section>
            <h2>Add Contact</h2>
            <form action="">
                <div className="formInput">
                    <label htmlFor="">Name</label>
                    <input onChange={changeHandler} name="name" type="text" placeholder="name" />
                </div>
                <div className="formInput">
                    <label htmlFor="">Email</label>
                    <input onChange={changeHandler} type="email" name="email" placeholder="email" />
                </div>
                <button className="addBtn" onClick={addContactHandler}>
                    Add
                </button>
            </form>
            {user.map((item) => {
                localStorage.setItem("contacts", JSON.stringify(user));
                return <ContactList user={item} onRemoveHandler={removeHandler} />;
            })}
        </section>
    );
};

export default AddContact;
