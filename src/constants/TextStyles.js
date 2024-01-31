import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const TextStyles = StyleSheet.create({
    normal: {
        fontSize: 14,
        fontWeight: 'normal',
        fontFamily: 'NotoSansEN',
        color: Colors.black,
    },
    semiBold: {
        fontSize: 14,
        fontWeight: '500', // semi-bold를 나타내는 숫자 값
        fontFamily: 'NotoSansEN',
        color: Colors.black,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'NotoSansEN',
        color: Colors.black,
    },
});