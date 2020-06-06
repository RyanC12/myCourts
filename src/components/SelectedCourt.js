import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 500,
        height: 250,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    thumbnail: {
        width: '50px',
        height: '50px'
    },
    courtPreview: {
        width: '100%',
        height: '100%'
    }
}));

const SelectedCourt = ({ image }) => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <a href="#">
                <img onClick={handleOpen} className={classes.thumbnail} src={image.img} alt={image.name} />
            </a>
            <Modal
                open={isOpen}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <img onClick={handleOpen} className={classes.courtPreview} src={image.img} alt={image.name} />
                </div>
            </Modal>
        </div>
    );
}

export default SelectedCourt;
