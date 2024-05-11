import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useContext,
    useState,
} from "react";

type RoleContextValues = {
    isAdmin: boolean;
    setIsAdmin: (role: boolean) => void;
};

type UseRoleReturnTypes = RoleContextValues & { displayRole: string };

const RoleContext = createContext<RoleContextValues | undefined>(undefined);

export const UserProvider = ({ children }: PropsWithChildren): ReactElement => {
    const [isAdmin, setIsAdmin] = useState<boolean>(true);

    return (
        <RoleContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = (): UseRoleReturnTypes => {
    const { isAdmin, setIsAdmin } = useContext(
        RoleContext
    ) as RoleContextValues;

    const displayRole = isAdmin ? "admin" : "user";
    return { isAdmin, setIsAdmin, displayRole };
};
