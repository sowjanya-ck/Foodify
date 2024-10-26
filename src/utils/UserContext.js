import { createContext } from "react"

const UserContext = createContext({
    loggedUser : "default USer"
})

export default UserContext;