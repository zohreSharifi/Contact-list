const ContactList = ({ user, onRemoveHandler }) => {
    return (
        <div className="contactList">
            <div className="contactUser">
                <p className="userName">{user.name}</p>
                <p>{user.email}</p>
            </div>
            <button
                onClick={(e) => onRemoveHandler(e.target.id)}
                id={user.id}
                className="deleteBtn"
            >
                {" "}
                delete
            </button>
        </div>
    );
};

export default ContactList;
