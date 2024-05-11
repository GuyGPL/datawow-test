import axios from "axios";

export const fetchUsersHistory = async (): Promise<unknown> => {
    return await axios.get("/users/history").then(({ data }) => data);
};

export const fetchUserHistory = async (user: string): Promise<unknown> => {
    return await axios.get(`/users/${user}/history`).then(({ data }) => data);
};
