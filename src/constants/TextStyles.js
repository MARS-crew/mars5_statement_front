import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const TextStyles = StyleSheet.create({
    normal: {
        fontSize: 14,
        fontWeight: 'normal',
        color: Colors.black,
    },
    semiBold: {
        fontSize: 14,
        fontWeight: '500', // semi-bold
        color: Colors.black,
    },
    bold: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.black,
    },
});