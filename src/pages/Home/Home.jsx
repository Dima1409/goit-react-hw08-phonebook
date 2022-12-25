import { Title, Text} from "./Home.styled";
import useAuth from "hooks/useAuth";

const Home = () => {
    const {isLoggedIn} = useAuth();
    return (
        <>
        <Title>Welcome to Phonebook!</Title> 
        {isLoggedIn ? null : <Text>If you want to get started, you need to login or register as a new user</Text>}    
        
        </>
    )
}

export default Home;