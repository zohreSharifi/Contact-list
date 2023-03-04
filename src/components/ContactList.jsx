import userImage from "../assets/images/user.png"
const ContactList = ({ contact, onRemoveHandler }) => {
    const {name,email,id}=contact
    return (
        <div className="contactList">
            <div className="inputUserSection">
            <img src={userImage} className="userImage" />
            <div className="contactUser">
                <p className="userName">{name}</p>
                <p>{email}</p>
            </div>
            </div>
            <button
                onClick={(e) => onRemoveHandler(e.target.id)}
                id={id}
                className="deleteBtn"
            >
            
                delete
            </button>
        </div>
    );
};

export default ContactList;
