import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>THis is about js section</h2>
            <div className="flex">
                Logged in User : 
                <UserContext.Consumer>
                    {
                        ({loggedUser}) => <h3>{loggedUser}</h3>
                    }
                </UserContext.Consumer>
            </div>
            <User name= {"sowjanya k"}/>
            <UserClass name = {"Aarna s"} location = {"Bangalore"}/>
        </div>
    )
}

export default About;