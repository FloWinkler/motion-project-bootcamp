import {
  Avatar,
  MainContainer,
  InputField,
  WrapperDiv,
} from "./createOwnPost.style";

import { useSelector } from "react-redux";
import CreatePostForm from "../../Forms/createPostForm";
import { useState } from "react";

const CreateOwnPost = () => {

  const userData = useSelector((state) => state.currentuser); 
  const [input, setInput] = useState('')
  
  let avatar = '';
  if (userData.currentuser.avatar === null) {
    avatar =
      "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg";
  } else {
    avatar = userData.currentuser.avatar;
  }



  const handleInput = (e) => {
    setInput(e.target.value)
    
  }
  
  
  return (
    <MainContainer>
      <WrapperDiv>
        <Avatar src={avatar} />
        <InputField
          type="text"
          placeholder={`What's on your mind, ` + userData.currentuser.first_name}
          onChange={handleInput} />
        <CreatePostForm input={input} avatar={avatar} />
        
      </WrapperDiv>
    </MainContainer>
  );
};

export default CreateOwnPost;
