import { Svg, Path } from 'react-native-svg';
import Colors from '../../../constants/Colors';
import {moderateScale, scale} from '../../../constants/Scale'

const NewPostSvg = () => {
    return (
    <Svg width={moderateScale(27)} height={moderateScale(29)} viewBox='0 0 30 32' fill={'none'}>
        <Path d="M1.35898 24.2575L5.00548 3.57699C5.07377 3.18891 5.21785 2.81808 5.42949 2.48569C5.64112 2.15329 5.91617 1.86585 6.23891 1.63978C6.56166 1.4137 6.92578 1.25342 7.31048 1.1681C7.69518 1.08277 8.09292 1.07407 8.48098 1.14249L26.208 4.26999C26.9915 4.40827 27.688 4.8521 28.1442 5.50388C28.6005 6.15565 28.7792 6.96198 28.641 7.74549L24.9945 28.426C24.9262 28.8141 24.7821 29.1849 24.5705 29.5173C24.3588 29.8497 24.0838 30.1371 23.761 30.3632C23.4383 30.5893 23.0742 30.7496 22.6895 30.8349C22.3048 30.9202 21.907 30.9289 21.519 30.8605L3.79198 27.733C3.00848 27.5947 2.31199 27.1509 1.85572 26.4991C1.39945 25.8473 1.22077 25.041 1.35898 24.2575Z" stroke={Colors.white} strokeOpacity={0.992157} strokeWidth={1.5}/>
        <Path d="M10.3935 7.573L22.212 9.6565M9.351 13.4815L21.1695 15.5665M8.31 19.39L15.696 20.6935" stroke={Colors.white} strokeOpacity={0.992157} strokeWidth={1.5} strokeLinecap='round'/>
    </Svg>
    
    )
}

export default NewPostSvg
