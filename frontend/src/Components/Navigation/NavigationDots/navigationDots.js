import profileImage from "../../../assets/svgs/ShapeProfileImage.svg"
import logoutImage from "../../../assets/svgs/ShapeLogout.svg"
import { NavigationDotsUl,
    NavigationDotsLi,
    NavigationDotsImg,
    DotsInnerP} from "../navigation.style"
import { useNavigate } from "react-router-dom";

const NavigationDots = () => {

    const navigate = useNavigate()
    const handleClickProfile = () => {
        navigate("/profile")
    }

    const handleClickLogout = () => {
        localStorage.removeItem("auth-token")
        localStorage.removeItem("user")
        navigate("/signin")
    }

    return (
        <NavigationDotsUl>
            <NavigationDotsLi onClick={handleClickProfile}>
                <NavigationDotsImg alt="profileLogo Image" src={profileImage}/>
                <DotsInnerP>Profile</DotsInnerP>
            </NavigationDotsLi>
            <NavigationDotsLi onClick={handleClickLogout}>
                <NavigationDotsImg alt="Logout Image" src={logoutImage}/>
                <DotsInnerP>Logout</DotsInnerP>
            </NavigationDotsLi>
        </NavigationDotsUl>
    )
}

export default NavigationDots