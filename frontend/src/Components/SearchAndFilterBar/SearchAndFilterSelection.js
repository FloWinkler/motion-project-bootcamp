import { useSelector } from "react-redux";
import LikedPosts from "../../../Social/LikedPosts/likedPosts";
import OwnPosts from "../../../Social/OwnPosts/ownPosts";
import FilteredUsersFollowers from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowers";
import FilteredUsersFriends from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFriends";
import { MainContainer } from "./profileShowFiltered.style";
import FilteredUsersFollowing from "./ProfileFilteredComponents/FilteredUsers/FilteredUsersFollowing";

function SearchAndFilterSelection() {
  const filter = useSelector((store) => store.postsFilter.postsFilter); //get state from redux


  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (filter) {
      case "posts":
        return <OwnPosts />;
      case "likes":
        return <LikedPosts />;
      default:
        return <OwnPosts />;
    }
  };

  return (
    <MainContainer>
      <div>{displayComponent()}</div>
    </MainContainer>
  );
}

export default SearchAndFilterSelection;
