import { GridDiv, FindFriednsPageDiv } from "./findfriendsgrid.style";
import UserFindFriendInfo from "../../../../../FindFriendsGrid/UserFindFriendInfo/userFindFriendIndo";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

const FilteredUsersFriends = (props) => {
  const [listOfUsers2, setListOfUsers2] = useState([]);

  //fetch the users
  const getUsers = async () => {
    const Token = localStorage.getItem("auth-token");

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    let userList = [];

    await fetch(
      "https://motion-team1.propulsion-learn.ch/backend/api/social/friends",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (userList = result.results))
      .catch((error) => console.log("error", error));

    setListOfUsers2(userList);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <FindFriednsPageDiv>
      <GridDiv>
        {listOfUsers2.map((user) => {
          return <UserFindFriendInfo key={uuid()} userInfo={user} />;
        })}
      </GridDiv>
    </FindFriednsPageDiv>
  );
};

export default FilteredUsersFriends;
