import React, { useState } from "react";
import {
  Avatar,
  ColumnWrapperDiv,
  ContentWrapperDiv,
  MainContainer,
  RowWrapperDiv,
  PictureGrid,
  UploadWrapperDiv,
  FileUploadButton,
  SubmitButtonStyle,
  TextField,
  SubmitButtonIcon,
  UploadButtonIcon,
  BorderLineDiv,
} from "./createPost.style";
import sendIcon from "../../../assets/svgs/send_button.svg";
import uploadIcon from "../../../assets/svgs/Shape.svg";

const CreatePost = (props) => {
  const [content, setContent] = useState(props.input);
  const [title, setTitle] = useState("")
  const [pictures, setPictures] = useState([]);
  const [images, setImages] = useState([]);


  const Token = localStorage.getItem("auth-token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${Token}`);

    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", title)
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch(
        "https://motion-team1.propulsion-learn.ch/backend/api/social/posts/",
        {
          method: "POST",
          headers: myHeaders,
          body: formData,
          redirect: "follow",
        }
      );

      console.log("File upload response:", response);
    } catch (error) {
      console.error("Error uploading file:", error);
    }

    document.forms[0].submit();
  };


  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePictureChange = (e) => {
    const files = e.target.files;
    const fileList = Array.from(e.target.files);
    setImages(fileList);

    const newPictures = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[i]);

      fileReader.onload = (event) => {
        newPictures.push(event.target.result);
        console.log(event.target.result);
        setPictures([...newPictures]);
      };
    }
  };

  return (
    <MainContainer>
      <ColumnWrapperDiv>
        <form onSubmit={handleSubmit}>
          <BorderLineDiv>
            <RowWrapperDiv>
              <Avatar src={props.avatar} />
              <ContentWrapperDiv>
                <TextField
                  id="title"
                  cols="1"
                  rows="1"
                  name="content"
                  value={title}
                  onChange={handleTitleChange}
                />
                <TextField
                  id="content"
                  cols="40"
                  rows="5"
                  name="content"
                  value={content}
                  onChange={handleContentChange}
                />
              </ContentWrapperDiv>
            </RowWrapperDiv>
            <PictureGrid>
              {pictures.map((picture, index) => (
                <img
                  key={index}
                  src={picture}
                  alt={`Picture ${index}`}
                  style={{ maxWidth: "200px" }}
                />
              ))}
            </PictureGrid>
          </BorderLineDiv>
          <UploadWrapperDiv>
            <label htmlFor="pictures">
              <UploadButtonIcon src={uploadIcon} />
            </label>
            <FileUploadButton
              type="file"
              id="pictures"
              name="pictures"
              accept="image/*"
              multiple
              onChange={handlePictureChange}
            />
            <SubmitButtonStyle type="submit">
              <SubmitButtonIcon src={sendIcon} />
            </SubmitButtonStyle>
          </UploadWrapperDiv>
        </form>
      </ColumnWrapperDiv>
    </MainContainer>
  );
};

export default CreatePost;
