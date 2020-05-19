import ActivationJSON from './activationJSON.json';
import ExtensionJSON from '../extension/ExtensionJSON';

const configActivation = props => {

    // Activation JSON 

    ActivationJSON.ActivationModes.map((ActivationMode, ActivationModeIndex) => {
        if(ActivationMode.status === 'active'){
            if(ActivationMode.mode === 'null'){}
            else if(ActivationMode.mode === 'area'){}
            else if(ActivationMode.mode === 'delta'){}
            else if(ActivationMode.mode === 'activity'){}
            else if(ActivationMode.mode === 'time'){}
        }
     })

     // Extension JSON
     ExtensionJSON.map((ext, extIndex) => {
     })


};

export default configActivation;