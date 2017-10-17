import Toast from 'react-native-root-toast';
import _ from 'lodash';
import {ToastAndroid, Platform} from 'react-native';


var defaultOption = {
    duration: Toast.durations.SHORT,
    position: -100,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0
};

export var SimpleToast = {
    show: function (message, option) {
        if(_.isEmpty(option)){
            option = defaultOption;
        }

        if(typeof message === "object"){
            message = JSON.stringify(message);
        }

        if(Platform.OS === 'ios'){
            Toast.show(message, option);
        }else{
            ToastAndroid.show(message, ToastAndroid.LONG);
        }
    }
};
