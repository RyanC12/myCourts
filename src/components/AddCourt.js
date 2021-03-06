import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import { Button, Container } from '@material-ui/core/';

import ButtonAppBar from './Nav'

import Map from '../components/Map';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    contianer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        backgroundColor: '#303132',
        height: '100vh'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: 'auto',
        padding: '20px',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: '#edebeb'
    },
    addCourtTitle: {
        textAlign: 'center',
        color: '#edebeb'
    },
    mapPreview: {
        border: '1px solid black',
        width: '50%',
        margin: 'auto',
        padding: '20px'
    }

}));

const AddCourt = ({ images, addCourt }) => {
    const classes = useStyles();

    const [newBusinessName, setNewBusinessName] = useState('');
    const [newBusinessAddress, setNewBusinessAddress] = useState('');
    const [newBusinessHours, setNewBusinessHours] = useState('');
    const [newBusinessDescription, setNewBusinessDescription] = useState('');
    const [newCity, setNewCity] = useState('');
    const [newZipcode, setNewZipcode] = useState('');
    const [newImage, setNewImage] = useState();
    const [locations, setLocations] = useState([]);
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');
    console.log({ locations })

    useEffect(
        () => {
            const geocode = () => {
                axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
                    params: {
                        address: newBusinessAddress,
                        key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                    }
                })
                    .then(response => {
                        setLat(response.data.results[0].geometry.location.lat || null)
                        setLng(response.data.results[0].geometry.location.lng || null)

                    })
                    .catch(error => console.log(error))
            }
            geocode()
        },
        [newBusinessAddress]
    )

    // function for encoding images submitted by user

    const handleName = (e) => {
        setNewBusinessName(e.target.value)
    };
    const handleAddress = (e) => {
        setNewBusinessAddress(e.target.value)
    };
    const handleHours = (e) => {
        setNewBusinessHours(e.target.value)
    };
    const handleDescription = (e) => {
        setNewBusinessDescription(e.target.value)
    };
    const handleCity = (e) => {
        setNewCity(e.target.value)
    };
    const handleZipcode = (e) => {
        setNewZipcode(e.target.value)
    };
    const handleImage = (e) => {
        setNewImage(e.target.value)
    };
    const handleSubmit = () => {
        let id = locations.length + 1;
        const location = [{
            id,
            newBusinessName,
            newBusinessAddress,
            newCity,
            newZipcode,
            newBusinessHours,
            newBusinessDescription,
            newImage
        }]
        setLocations(location)
    }

    return (
        <Container className={classes.container} >
            <h1 style={{ textAlign: 'center' }}>Add Court</h1>
            <form className={classes.formContainer} >
                <TextField onChange={handleName} style={{ margin: '10px' }} id="standard-basic" label="Name" />
                <TextField onBlur={handleAddress} style={{ margin: '10px' }} id="standard-basic" label="Address" />
                <TextField onChange={handleCity} style={{ margin: '10px' }} id="standard-basic" label="city,st" />
                <TextField onChange={handleZipcode} style={{ margin: '10px' }} id="standard-basic" label="zipcode" />
                <TextField onChange={handleHours} style={{ margin: '10px' }} id="standard-basic" label="Hours" />
                <TextField onChange={handleDescription} style={{ margin: '10px' }} id="standard-basic" label="Description" />
                <TextField onChange={handleImage} type='file' style={{ margin: '10px' }} id="standard-basic" label="Court Image" />
                <Button style={{ margin: '10px' }} onClick={handleSubmit} variant="contained">Save</Button>
            </form>
            {newBusinessAddress ? 
                <div className={classes.mapPreview}>
                <Map
                lat={lat}
                lng={lng}
                />
                </div>
                :
                null
            }
        </Container>
    );
}

export default AddCourt;