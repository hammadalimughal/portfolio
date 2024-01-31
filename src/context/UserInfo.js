import { createContext, useState } from "react";

export const UserInfoContext = createContext(null)

export const UserInfoProvider = (props) => {
    const [ipAddress, setIpAddress] = useState(null)
    const [userInfo, setUserInfo] = useState(null)

    return (
        <UserInfoContext.Provider value={{ ipAddress, setIpAddress, userInfo, setUserInfo }} >
            {props.children}
        </UserInfoContext.Provider>
    )
}