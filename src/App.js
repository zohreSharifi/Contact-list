import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Layout from "./Layout/layout";
import Home from "./pages/HomePage.jsx";
import AddContacts from "./pages/addContactsPage.jsx";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/editContact";
import { getAllContacts } from "./services/getAllContactsService";
import { postContact } from "./services/postContactServices";
import { deleteOneContact } from "./services/deleteContactService";
import { putEditedContact } from "./services/putEditedContact.jsx";

const App = () => {
    // ................................. without Route
    
    // const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     const getContacts = async () => {
    //         const { data } = await getAllContacts();
    //         setContacts(data);
    //     };
    //     try {
    //         getContacts();
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);

    // const addContactHandler = async (contact) => {
    //     if (!contact) {
    //         alert("ensert name & email");
    //         return;
    //     }
    //     try {
    //         setContacts([...contacts, contact]);
    //         await postContact(contact);
    //     } catch (error) {}
    // };
    // const removeHandler = async (id) => {
    //     try {
    //         await deleteOneContact(id);
    //         const filteredcontact = contacts.filter((item) => item.id != id);
    //         setContacts(filteredcontact);
    //     } catch (error) {}
    // };
    // const editHandler = async (editContact) => {
    //     try {
    //         await putEditedContact(editContact.id, editContact);
    //         const { data } = await getAllContacts();
    //         setContacts(data);
    //     } catch (error) {}
    // };

    //   return (
    //         <Layout>
    //             <main className="App">
    //                 <section>
    //                     <AddContact onSubmit={addContactHandler} />
    //                 </section>
    //                 <section>
    //                     {contacts.map((item) => {
    //                         return <ContactList contact={item} onRemoveHandler={removeHandler} />;
    //                     })}
    //                 </section>
    //             </main>
    //         </Layout>
    //     );

    // ................................. with Route

    return (
        <Layout>
            <div className="App">
                <Routes>
                    <Route path="/add" element={<AddContacts />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/user/:id" element={<ContactDetail />}></Route>
                    <Route path="/edit/:id" element={<EditContact />}></Route>
                </Routes>
            </div>
        </Layout>
    );
};

export default App;
