import { AVAIL_UPDATE } from './types';

export const availUpdate = ({ prop, value }) => {
    return {
        type: AVAIL_UPDATE,
        payload: { prop, value }
    };
};
