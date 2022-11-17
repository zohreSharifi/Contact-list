import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Layout from "./Layout/layout";

const App = () => {
    return (
        <Layout>
            <div className="App">
                <AddContact />
            </div>
        </Layout>
    );
};

export default App;
