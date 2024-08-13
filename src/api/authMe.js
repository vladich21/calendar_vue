import { mainApi } from "./config";
export const authMe = () => {
    return mainApi.get('authorization-status');
};
