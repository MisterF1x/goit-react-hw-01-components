import styled from "@emotion/styled";

export const FriendStatus = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({ active }) => !active ? '#ff4c4c' : '#4ec844'};
`