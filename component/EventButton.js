import React, {Component} from 'react';
import { Alert,AppRegistry, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class EventButton extends Component{
    constructor(props){
        super(props);
        this.state = {text:''};
        // this._onPressButton = this._onPressButton.bind(this);
    }

    _onPressButton = () => {
        Alert.alert('test');
    }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={this._onPressButton}
                        title="test"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
AppRegistry.registerComponent('favoriteCoffee', () => EventButton);