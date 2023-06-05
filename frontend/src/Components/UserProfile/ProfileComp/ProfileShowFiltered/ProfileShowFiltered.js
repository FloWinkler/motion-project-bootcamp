import { useSelector } from "react-redux";
import LikedPosts from "../../../Social/LikedPosts/likedPosts";
import FilteredUsersFollowers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowers";
import FilteredUsersFriends from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFriends";
import { MainContainer } from "./profileShowFiltered.style";
import FilteredUsersFollowing from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowing";
import { useParams } from "react-router-dom";
import FilteredOwnPosts from "./ProfileFilteredComponents/FilteredOwnPosts/FilteredOwnPosts";

function ProfileShowFiltered(props) {
  const filter = useSelector((store) => store.profilefilter.profilefilter); //get state from redux

  //check if loading the current user or another one
  const userID = useParams().profileId;

  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (filter) {
      case "posts":
        return <FilteredOwnPosts userID={userID} />;
      case "likes":
        if (!userID) {
          return <LikedPosts />;
        }
        break;
      case "friends":
        if (!userID) {
          return <FilteredUsersFriends />;
        }
        break;
      case "followers":
        if (!userID) {
          return <FilteredUsersFollowers />;
        }
        break;
      case "following":
        if (!userID) {
          return <FilteredUsersFollowing />;
        }
        break;
      default:
        return <FilteredOwnPosts userID={userID} />;
    }
  };

  return (
    <MainContainer>
      <div>{displayComponent()}</div>
    </MainContainer>
  );
}

export default ProfileShowFiltered;
