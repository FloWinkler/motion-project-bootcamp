import Navigation from "../../Components/Navigation/navigation";
import EditProfileComp from "../../Components/UserProfile/EditProfileComp/EditProfileComp";
import ProfileBackground from "../../Components/UserProfile/ProfileBackground/ProfileBackground";
import { ProfilePage } from "./profile.style";

function EditProfile() {
  return (
    <ProfilePage>
      <Navigation />
      <ProfileBackground />
      <EditProfileComp />
    </ProfilePage>
  );
}

export default EditProfile;
