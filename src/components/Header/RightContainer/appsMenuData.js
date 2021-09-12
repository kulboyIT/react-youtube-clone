import React from 'react';
import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';
import {
  StyledMenuItem,
  StyledListItemIcon
} from '../StyledMenuItem';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export const AppsMenuTop = ({ onClick }) => {
  return menuItems.slice(0, 1).map((item) => {
    const { Icon, text } = item;
    return <AppsMenuRow key={text} Icon={Icon} text={text} onClick={onClick} />;
  });
};

export const AppsMenuMiddle = ({ onClick }) => {
  return menuItems.slice(1, 3).map((item) => {
    const { Icon, text } = item;
    return <AppsMenuRow key={text} Icon={Icon} text={text} onClick={onClick} />;
  });
};

export const AppsMenuBottom = ({ onClick }) => {
  return menuItems.slice(3).map((item) => {
    const { Icon, text } = item;
    return <AppsMenuRow key={text} Icon={Icon} text={text} onClick={onClick} />;
  });
};

const RedYouTubeIcon = styled(YouTubeIcon)`
  color: red;
`;

const YouTubeMusicLogo = styled(PlayCircleOutlineIcon)`
  color: red;
`;

const YouTubeKidsLogo = () => {
  // How to create a component and style it at the same time using styled-components instead of doing inline styling like below?
  return (
    <img
      style={{ height: '20px' }}
      src="https://upload.wikimedia.org/wikipedia/commons/4/48/YT_kids.png"
      alt="YouTube Kids Logo" />
  );
};

const menuItems = [
  { Icon: RedYouTubeIcon, text: 'YouTube TV' },
  { Icon: YouTubeMusicLogo, text: 'YouTube Music' },
  { Icon: YouTubeKidsLogo, text: 'YouTube Kids' },
  { Icon: RedYouTubeIcon, text: 'Creator Academy' },
  { Icon: RedYouTubeIcon, text: 'YouTube for Artists' },
];

const AppsMenuRow = ({ Icon, text, onClick }) => {
  return (
    <StyledMenuItem onClick={onClick}>
      <StyledListItemIcon>
        <Icon fontSize="small" />
      </StyledListItemIcon>
      <ListItemText primary={text} />
    </StyledMenuItem>
  );
};