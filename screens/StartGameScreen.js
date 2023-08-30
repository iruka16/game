import{TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';




function StartGameScreen(){
    return (
        <View>
            <TextInput/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>confirm</PrimaryButton>


        </View>
    );
}

export default StartGameScreen;