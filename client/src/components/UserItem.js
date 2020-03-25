import React from 'react';

const UserItem = props => {

    // Default operation button (no buttons)
    let buttons = <React.Fragment></React.Fragment>;

    // For pending users
    if (props.user.type === 'pending')
        // Approve and remove buttons
        buttons = (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <button className="greenButton" onClick={props.approveResearcher.bind(this, props.user.email, 'researcher')}>Approve</button>
                {' '}
                <button className="redButton" onClick={props.removeUser.bind(this, props.user.email)}>Remove</button>
            </div>
        );
    // For researchers
    else if (props.user.type === 'researcher')
        // Only remove button
        buttons = (
            <React.Fragment>
                <button className="redButton" onClick={props.removeUser.bind(this, props.user.email)}>Remove</button>
            </React.Fragment>
        );

    return (
        <div style={styles.itemContainer}>
            <p style={{display: 'flex', alignItems: 'center'}}>{props.user.name}{' - '}{props.user.email}{' - '}{props.user.type}</p>
            {buttons}
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