import {Dimensions} from 'react-native';

export const {width: w, height: h} = Dimensions.get('window');

export const W = (v = 1) => (w * v) / 100;

export const H = (v = 1) => (h * v) / 100;