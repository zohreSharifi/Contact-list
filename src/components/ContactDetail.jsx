import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
const ContactDetail = () => {
    
    const location = useLocation();
    const {name,email}=location.state
   
    return ( 
        <div>
            <h2>ContactDetail</h2>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <Link to="/">Back Home</Link>
        </div>
     );
}
 
export default ContactDetail;