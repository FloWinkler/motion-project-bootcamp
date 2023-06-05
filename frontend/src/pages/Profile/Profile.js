import Navigation from "../../Components/Navigation/navigation";
import ProfileBackground from "../../Components/UserProfile/ProfileBackground/ProfileBackground";
import ProfileComp from "../../Components/UserProfile/ProfileComp/ProfileComp";
import { ProfilePage } from "./profile.style";

function Profile() {
  return (
    <ProfilePage>
      <Navigation />
      <ProfileBackground />
      <ProfileComp />
    </ProfilePage>
  );
}

export default Profile;
