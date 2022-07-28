import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import BtnstatusComponent from './btnstatus';

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Name: {contact.name}
            </h2>
            <h3>
                Lastname: {contact.lastname}
            </h3>
            <h4>
                Email: {contact.email}
            </h4>
            <BtnstatusComponent status={contact.conected}></BtnstatusComponent>


        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
