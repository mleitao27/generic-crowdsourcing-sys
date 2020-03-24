import React from 'react';

const MainButton = props => {
    return (
        <div style={styles.container}>
            <button style={styles.button} onClick={props.onClick}>{props.title}</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    button: {
        color: '#ccc',
        backgroundColor: '#333',
        borderWidth: 5,
        borderColor: '#333',
        borderRadius: 20,
        borderStyle: 'solid',
        outline: 'none',
        width: 120,
        fontSize: 18,
        fontWeight: 'bold'
    }
};

export default MainButton;