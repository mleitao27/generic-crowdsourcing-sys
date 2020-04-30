import React from 'react';
import FormScreenExtension from '../../extension/FormScreenExtensionG';

const FormScreen = props => {
    return (
        <FormScreenExtension navigation={props.navigation} />
    );
};

export default FormScreen;