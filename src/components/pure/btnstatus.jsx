import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BtnstatusComponent = ({ status }) => {

    const [conected, setConected] = useState(status);

    return (
        <div>
            <h5>
                User is {conected ? 'ONLINE' : 'OFFLINE'}
            </h5>
            <button onClick={() => setConected(!conected)}> {conected === false ? 'Sign-in' : 'Sign-out'}</button>
        </div>
    );
};


BtnstatusComponent.propTypes = {
    status: PropTypes.bool
};


export default BtnstatusComponent;
