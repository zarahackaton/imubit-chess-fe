import axios from 'axios';

const serverUrl = 'http://localhost:3001';

export function isValidMovement(sourcePos, destinationPos) {
    return axios.get(`${serverUrl}/isValidMovement?source=${sourcePos}&dest=${destinationPos}`);
}