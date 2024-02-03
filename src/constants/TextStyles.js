import { StyleSheet } from 'react-native';
import Colors from './Colors';


const baseStyle = {
    fontSize: 14,
    fontFamily: 'NotoSansEN',
    color: Colors.black,
};

export const TextStyles = StyleSheet.create({
    normal: {
        ...baseStyle,
        fontWeight: 'normal',
    },
    semiBold: {
        ...baseStyle,
        fontWeight: 'bold' // semi-bold
    },
    title: {
        ...baseStyle,
        fontSize: 18,
        fontWeight: 'bold',
    },
    placeholder :{
        color : Colors.grey
    },
}); 