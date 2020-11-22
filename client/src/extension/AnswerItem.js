import React from 'react';
import { IoIosRemoveCircle } from "react-icons/io";

const AnswerItem = props => {
    return (
        <React.Fragment>
            <div style={styles.itemContainer}>
                <div style={styles.textContainer}>
                    <p> Username: {props.item.user}</p>
                    <p> Date: {props.item.date}</p>
                    {props.item.data.map((d, i) => {
                        return (<p key={i}>{d.name} {d.value}</p>)
                    })}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <IoIosRemoveCircle style={{color: '#cc0000', fontSize: 36}} onClick={props.props.removeAnswer.bind(this, props.item._id)} />
                </div>
            </div>
        </React.Fragment>
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
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        width: '100%'
    },
    cropImage: {
        width: window.innerWidth*0.1,
        height: window.innerWidth*0.1,
        overflow: 'hidden'
    }
};

export default AnswerItem;