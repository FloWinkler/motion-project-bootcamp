import { CardMainContainer, ProfileCardRightContainer } from "./profileCard.style";
import ProfileCardLeft from "./EditProfileCardLeft/ProfileCardLeft";
import EditProfileData from "./ProfileData/EditProfileData";

function EditProfileCard() {
  const userdata = JSON.parse(localStorage.getItem("user"));
  return (
    <CardMainContainer>
      <ProfileCardLeft userdata={userdata} />
      <ProfileCardRightContainer>
        <EditProfileData userdata={userdata} />
      </ProfileCardRightContainer>
    </CardMainContainer>
  );
}

export default EditProfileCard;
