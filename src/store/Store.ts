import { action, createStore, createTypedHooks } from "easy-peasy";
import ModelInit from "../models/ModelInit";

const store = createStore({
    ...ModelInit,
    reset: action(() => ({
        ...initialState
    }))
})
let initialState = {};
initialState = store.getState();
const typeHooks = createTypedHooks<typeof ModelInit>();

export const appState = typeHooks.useStoreState;
export const appAction = typeHooks.useStoreActions;
export default store;