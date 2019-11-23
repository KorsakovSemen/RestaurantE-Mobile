import { Platform } from 'react-native';

export const baseUrl = Platform.OS === 'android' ?
    'http://192.168.1.52:3001/'
    :
    'http://localhost:3001/';
