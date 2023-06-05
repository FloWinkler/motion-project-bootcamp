import { useDispatch, useSelector } from "react-redux";
import { setProfileFilter } from "../../../../../redux/slices/profileFilter";
import {
  MainContainer,
  ProfileCounterAmount,
  ProfileCounterDiv,
  ProfileCounterTag,
} from "./profileCounters.style";

function ProfileCounters(props) {
  //toggle state of button for styling
  let postsActive = true;
  let likesActive = false;
  let friendsActive = false;
  let followersActive = false;
  let followingActive = false;
  //retrieve active view from redux store
  const isActive = useSelector((store) => store.profilefilter.profilefilter); //get state from redux
  const switchActive = () => {
    switch (isActive) {
      case "posts":
        postsActive = true;
        break;
      case "likes":
        likesActive = true;
        postsActive = false;
        break;
      case "friends":
        friendsActive = true;
        postsActive = false;
        break;
      case "followers":
        followersActive = true;
        postsActive = false;
        break;
      case "following":
        followingActive = true;
        postsActive = false;
        break;
      default:
        postsActive = true;
    }
  };
  switchActive()

  //updates redux store to change view
  const dispatch = useDispatch();

  const handleOnClickPosts = () => {
    dispatch(setProfileFilter("posts"));
  };

  const handleOnClickLikes = () => {
    dispatch(setProfileFilter("likes"));
  };

  const handleOnClickFriends = () => {
    dispatch(setProfileFilter("friends"));
  };

  const handleOnClickFollowers = () => {
    dispatch(setProfileFilter("followers"));
  };

  const handleOnClickFollowing = () => {
    dispatch(setProfileFilter("following"));
  };

  return (
    <MainContainer>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_posts}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickPosts} active={postsActive}>
          Posts
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_likes}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickLikes} active={likesActive}>
          Likes
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_friends}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFriends} active={friendsActive}>
          Friends
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_of_followers}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFollowers} active={followersActive}>
          Followers
        </ProfileCounterTag>
      </ProfileCounterDiv>
      <ProfileCounterDiv>
        <ProfileCounterAmount>{props.userdata.amount_following}</ProfileCounterAmount>
        <ProfileCounterTag onClick={handleOnClickFollowing} active={followingActive}>
          Following
        </ProfileCounterTag>
      </ProfileCounterDiv>
    </MainContainer>
  );
}

export default ProfileCounters;
