import { createContext, useState } from "react";

export const LoaderContext = createContext(null)

export const LoaderProvider = (props) => {
    const [loading, setLoading] = useState(0)
    return (
        <LoaderContext.Provider value={{ loading, setLoading }} >
            {props.children}
        </LoaderContext.Provider>
    )
}