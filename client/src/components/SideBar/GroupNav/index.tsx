import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useGroups } from '../../../hooks/useGroups';
import { useSelectedChannel } from '../../../hooks/useSelectedChannel';
import { setSelectedChannel } from '../../../redux/selectedChannel/slice';
import { setSelectedGroup } from '../../../redux/selectedGroup/slice';
import { socket } from '../../../util/socket';
import { GroupListWrapper, GroupList, Group, GroupListDivider, AddGroupButton } from './style';

function GroupNav() {
  const { groups } = useGroups();
  const { id } = useSelectedChannel();
  const dispatch = useDispatch();
  const history = useHistory();

  const selectGroup = (group: any) => () => {
    history.push(`/Main/group/${group.id}`);
    socket.emit('leaveChannel', id);
    dispatch(setSelectedChannel({ type: '', id: null, name: '' }));
    dispatch(setSelectedGroup(group));
  };

  return (
    <GroupListWrapper>
      <GroupList>
        {groups?.map((group: any) => (
          <Group key={group.id} onClick={selectGroup(group)}>
            {group.name}
          </Group>
        ))}
      </GroupList>
      <GroupListDivider />
      <div>
        <AddGroupButton>
          <img src="/icons/addGroup.png" alt="addGroup" />
        </AddGroupButton>
      </div>
    </GroupListWrapper>
  );
}

export default GroupNav;
