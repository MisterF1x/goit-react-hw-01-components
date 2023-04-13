import styled from '@emotion/styled';

export const FriendsListItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
`;
export const FriendItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 5px 9px 0px rgba(139, 139, 139, 0.8);
  overflow: hidden;
`;
