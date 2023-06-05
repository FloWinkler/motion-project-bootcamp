import React from 'react'
import { MainContainer, Avatar, Name, Time, PostText, Component, HeartIcon, ActionButton, ShareIcon, LikeCount } from './sharedPosts.style';


const SharedPosts = () => {
  return (
    <MainContainer>
      <Avatar>Avatar</Avatar>
      <Name>Name</Name>
      <Time>Time</Time>
      <PostText>
        Text
      </PostText>
      <Component>Component OtherPosts</Component>
      <HeartIcon>Heart</HeartIcon>
      <ActionButton>Like Text</ActionButton>
      <ShareIcon>SharePic</ShareIcon>
      <ActionButton>Share Text</ActionButton>
      <LikeCount>CountLikes</LikeCount>
    </MainContainer>
  );
}

export default SharedPosts