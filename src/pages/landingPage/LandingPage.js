import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { kittenActions } from '../../containers/landingPage';

const styles = (theme) => ({
    button: {
        backgroundColor: 'black',
        color: 'white'
    },
    input: {
        backgroundColor: 'orange'
    },
    root: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
})

const LandingPage = (props) => {
    const { classes, getKittenPhoto, isLoading, hasBeenLoaded, kittenPhoto } = props;
    const { button, input, root } = classes;

    const [counter, setCounter] = useState(0);
    const [photo, setPhoto] = useState(kittenPhoto);

    // useEffect(() => {
    //     if (!isLoading) {
    //         getKittenPhoto();
    //     }
    // }, [getKittenPhoto, isLoading]);

    console.log('photo', photo);
    console.log('kittenphoto', kittenPhoto);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    const handleKittenPhoto = () => {
        getKittenPhoto();
        setPhoto(kittenPhoto)
    }

    return (
        <div className={root}>
            <Input value={counter} className={input}></Input>
            <Button className={button} onClick={incrementCounter}>Click Me!</Button>
            <div>
                <img src={photo || ''} />
                <Button onClick={handleKittenPhoto}>Get Kitten Photo</Button>
            </div>
        </div>
    )
};

LandingPage.propTypes = {
    classes: PropTypes.object,
    getKittenPhoto: PropTypes.func,
    isLoading: PropTypes.bool,
    hasBeenLoaded: PropTypes.bool,
    kittenPhoto: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        kittenPhoto: state.kittenReducer.get('kittenPhoto'),
        isLoading: state.kittenReducer.get('isLoading'),
        hasBeenLoaded: state.kittenReducer.get('hasBeenLoaded')
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getKittenPhoto: () => {
            dispatch(kittenActions.getKittenPhoto())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LandingPage));