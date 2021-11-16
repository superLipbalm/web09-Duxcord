import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useSelectedGroup } from '@hooks/index';
import { URL } from 'src/api/URL';
import { setSelectedChannel } from '../../../../redux/selectedChannel/slice';
import { ChannelChattingIcon, ChannelMeetingIcon, GroupDeleteIcon } from '../../../common/Icons';
import { ListItem } from './style';

interface Props {
  channelType: 'chatting' | 'meeting';
  id: number;
  name: string;
}

function ChannelListItem({ channelType, id, name }: Props) {
  const selectedGroup = useSelectedGroup();
  const history = useHistory();
  const dispatch = useDispatch();
  const joinChannel = () => {
    history.push(URL.channelPage(selectedGroup?.id, channelType, id));
    dispatch(setSelectedChannel({ type: channelType, id, name }));
  };

  return (
    <ListItem onClick={joinChannel}>
      <div>
        {channelType === 'meeting' ? (
          <ChannelMeetingIcon />
        ) : channelType === 'chatting' ? (
          <ChannelChattingIcon />
        ) : null}
        <p>{name}</p>
      </div>
      <GroupDeleteIcon />
    </ListItem>
  );
}

export default ChannelListItem;
