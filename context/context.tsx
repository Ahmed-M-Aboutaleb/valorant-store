import { createContext } from 'react';

export const UserContext = createContext({
    id: null,
    accessToken: null,
    entitlementToken: null,
    region: null,
});

export function userReducer(state, action) {
    switch (action.type) {
        case 'setUser': {
            return {
                id: action.id,
                accessToken: action.accessToken,
                entitlementToken: action.entitlementToken,
                region: state.region,
            };
        }
        case 'setRegion': {
            return {
                id: state.id,
                accessToken: state.accessToken,
                entitlementToken: state.entitlementToken,
                region: action.region,
            };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}
