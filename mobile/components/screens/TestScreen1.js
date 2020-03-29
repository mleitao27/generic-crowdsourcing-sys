import React from 'react';
import {Platform, StyleSheet, Text, View,Alert} from 'react-native';
import Form from 'react-native-jsonschema-form'


const workSchema = {
schema: {
    type: "object",
    properties: {
      foo: {
        type: "object",
        properties: {
          bar: {type: "string"}
        }
      },
      baz: {
        type: "array",
        items: {
          type: "object",
          properties: {
            description: {
              "type": "string"
            }
          }
        }
      }
    }
  },
  uiSchema: {
    foo: {
      bar: {
        "ui:widget": "textarea"
      },
    },
    baz: {
      // note the "items" for an array
      items: {
        description: {
          "ui:widget": "textarea"
        }
      }
    }
  }
};
const TestScreen1 = props => {

    return (
        <View style={styles.container}>
            <View style={styles.notch}></View>
            <Form 
                schema={workSchema.schema} 
                // transformErrors={transformErrors} 
                onSubmit={(submited)=>{
                Alert.alert(
                "u just submitted",
                    JSON.stringify(submited.formData)          )
                }}
                uiSchema={{...workSchema.uiSchema}}
                submitTitle={"בחר"}
                noValidate={false}
                liveValidate={true}
                showErrorList={false} 
            />
        </View>
    ); 
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      padding:20
    },
    notch:{
      width:"100%" ,
       height:15
      }
  });

export default TestScreen1;