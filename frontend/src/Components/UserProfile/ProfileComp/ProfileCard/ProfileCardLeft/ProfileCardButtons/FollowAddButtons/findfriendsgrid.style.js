import styled from "styled-components";

export const FollowInerDivButton = styled.div`
    mix-blend-mode: normal;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 3rem;
    width: 8rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.10);
        transition: .2s;
    }
    background: ${props => props.follow ? "linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%)" : "white" };
`

export const AddFriendsInerDivButton = styled.div`
    mix-blend-mode: normal;
    border: 1px solid #d9d9d9;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 3rem;
    width: 8rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.10);
        transition: .3s;
    }
`

export const AddFollowAddFriendButton = styled.p`
    font-size: .7rem;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: black;
`

export const TickerImage = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    opacity: .4;
`
