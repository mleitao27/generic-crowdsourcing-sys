import React from 'react';

const UserItem = props => {

    const toggleType = () => {
        if (props.user.type === 'normal') {
            props.changeUserType(props.user.email, 'researcher');
        }
        else if (props.user.type === 'researcher') {
            props.changeUserType(props.user.email, 'normal');
        }
    };

    return (
        <div style={styles.itemContainer}>
            <p style={{display: 'flex', alignItems: 'center'}}>{props.user.name}{' - '}{props.user.email}{' - '}{props.user.type}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label className="switch">
                    <input type="checkbox" onClick={toggleType}/>
                    <span className="slider round"></span>
                </label>
                <button className="redButton" onClick={props.removeUser.bind(this, props.user.email)}>Remove</button>
            </div>
        </div>
    );
};

// Styling
const styles = {
    itemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
        padding: 10,
        borderBottom: '1px #ccc dotted',
        fontSize: 16
    }
};

export default UserItem;