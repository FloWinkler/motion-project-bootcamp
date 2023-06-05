//import { useSelector } from "react-redux";
import {
  AvatarImg,
  MainContainer,
} from "./profileCardLeft.style";
import avatarImage from "../../../../../assets/svgs/avatar.svg";
import UpdateImageButton from "./ProfileCardButtons/EditProfileButton/UpdateImageButton";

function ProfileCardLeft(props) {

  return (
    <MainContainer>
      {props.userdata.avatar ? (
        <AvatarImg alt="avatar" src={props.userdata.avatar} />
      ) : (
        <AvatarImg alt="avatar" src={avatarImage} />
      )}
      <UpdateImageButton />
    </MainContainer>
  );
}

export default ProfileCardLeft;
