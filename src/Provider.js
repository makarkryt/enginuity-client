import { createContext, useContext, useState } from "react";

export const SoundContext = createContext(true);

const Provider = ({children})=>{

    const [isSound, setIsSound] = useState(true)
    return(
        <SoundContext.Provider value = {[isSound, setIsSound]}>
            {children}
        </SoundContext.Provider>
    )
}
export default Provider