import { LeftSide,MotionLogoP,ConectMessageP,StoreContainerDiv,StoreIconImg,StoreIconDiv, 
    SocialLinksImg,DisclaimerP,LogoContainerDiv,LogoDiv,SocialLinksContainterDiv,SocialLinksDiv  } from "./signIn.style"
import MotionLogoWhite from "../../../assets/images/logo_white.png"
import AppleLogo from "../../../assets/svgs/apple.svg"
import GoogleLogo from "../../../assets/svgs/google.svg"
import TwitterLogo from "../../../assets/svgs/twitter_icon.svg"
import FacebookLogo from "../../../assets/svgs/facebook_icon.svg"
import InstagramLogo from "../../../assets/svgs/instagram_icon.svg"

const SignInLeft = () => {

    return (
        <LeftSide>
            <LogoContainerDiv>
                <LogoDiv>
                    <img src={MotionLogoWhite} alt="logo"/>
                    <MotionLogoP >Motion</MotionLogoP >
                </LogoDiv>
                <ConectMessageP >
                        Connect with friends and the world <br/> around you with Motion.
                </ConectMessageP >
                <StoreContainerDiv>
                    <StoreIconDiv>
                        <StoreIconImg src={AppleLogo} alt="Apple Logo"/>
                    </StoreIconDiv>
                    <StoreIconDiv>
                        <StoreIconImg src={GoogleLogo} alt="Google Logo"/>
                    </StoreIconDiv>
                </StoreContainerDiv>
            </LogoContainerDiv>
            <SocialLinksContainterDiv >
                <SocialLinksDiv>
                    <SocialLinksImg src ={TwitterLogo} alt="Twiter Icon"/>
                    <SocialLinksImg src ={FacebookLogo} alt="Facebook Icon"/>
                    <SocialLinksImg src ={InstagramLogo} alt="Instagram Icon"/>
                </SocialLinksDiv>
                <DisclaimerP>© Motion 2018. All rights reserved. </DisclaimerP>
            </SocialLinksContainterDiv >
        </LeftSide>
    )
}

export default SignInLeft