import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userImage from "../assets/images/user.png";
import { deleteOneContact } from "../services/deleteContactService";
import { getAllContacts } from "../services/getAllContactsService";
const Home = () => {
    const [contacts, setContacts] = useState(null);
    const [allContacts, setAllContacts] = useState(null);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const { data } = await getAllContacts();
                // console.log(data)
                setContacts(data);
                setAllContacts(data);
            } catch (error) {}
        };
        getContacts();
    }, []);
    const removeHandler = async (e) => {
        const id = e.target.id;
        try {
            await deleteOneContact(id);
            const filteredcontact = contacts.filter((item) => item.id != id);
            setContacts(filteredcontact);
        } catch (error) {}
        // localStorage.setItem("contacts", JSON.stringify(filteredcontact));
    };

    const searchHandler = (e) => {
        const value = e.target.value;
        const filtered = allContacts.filter((c) =>
            Object.values(c).join("").toLowerCase().includes(value.toLowerCase())
        );
        setContacts(filtered);
    };

    return (
        <>
            <div className="contactHeader">
                <h2>Contacts :</h2>
                <Link to="/add">
                    <button className="addBtn">Add </button>
                </Link>
            </div>
            <div className="searchBox">
                <input type="text" onChange={searchHandler} />
            </div>
            {contacts ? (
                contacts.map((item) => {
                    return (
                        <div className="contactList">
                            <div>
                                <Link to={`/user/${item.id}`} state={item} className="contactLink">
                                    <img src={userImage} className="userImage" />
                                    <div className="contactUser">
                                        <p className="userName">{item.name}</p>
                                        <p>{item.email}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="btnSection">
                                <Link to={`/edit/${item.id}`} state={item} className="editBtn">
                                    {" "}
                                    Edit
                                </Link>

                                <button onClick={removeHandler} id={item.id} className="deleteBtn">
                                    delete
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>Loading ...</p>
            )}
        </>
    );
};

export default Home;
