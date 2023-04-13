import { IconSize } from 'constant';
import PropTypes from 'prop-types';
import { AiOutlineEye,AiOutlineUser,AiOutlineLike } from "react-icons/ai";
import { ProfileBlock, ProfileDescription, ProfileImg, ProfileInfo, ProfileName, StatsBlock, StatsItem, StatsQuantity } from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileBlock>
      <ProfileDescription>
        <ProfileImg src={avatar} alt={username} width="150" />
        <ProfileName>{username}</ProfileName>
        <ProfileInfo>@{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </ProfileDescription>
      <StatsBlock>
        <StatsItem>
          <AiOutlineUser size={IconSize.md} title='followers' />          
          <StatsQuantity title='followers'>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <AiOutlineEye size={IconSize.md} title='views' />
          <StatsQuantity title='views'>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <AiOutlineLike size={IconSize.md} title='likes' />
          <StatsQuantity title='likes'>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsBlock>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  }).isRequired  
}
