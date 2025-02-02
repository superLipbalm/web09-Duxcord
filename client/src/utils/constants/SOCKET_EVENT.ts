export const SOCKET = {
  CHANNEL_EVENT: {
    JOIN_CHANNEL: 'joinChannel',
    LEAVE_CHANNEL: 'leaveChannel',
  },
  CHAT_EVENT: {
    CHAT: 'chat',
    CHAT_FAIL: 'chatFail',
    LIKE: 'like',
    THREAD: 'thread',
    THREAD_UPDATE: 'threadUpdate',
  },
  GROUP_EVENT: {
    LOGIN: 'login',
    GROUP_ID: 'groupID',
    USER_CONNECTION: 'groupUserConnection',
    DELETE_GROUP: 'groupDelete',
    USER_EXIT: 'userExit',
    USER_ENTER: 'userEnter',
    DELETE_CHANNEL: 'channelDelete',
  },
  INIT_EVENT: {
    END: 'initEnd',
  },
  MEET_EVENT: {
    MEETING: 'meeting',
    MEET_CHAT: 'meetChat',
    JOIN_MEETING: 'joinMeeting',
    ALL_MEETING_MEMBERS: 'allMeetingMembers',
    CANDIDATE: 'candidate',
    OFFER: 'offer',
    ANSWER: 'answer',
    LEAVE_MEMBER: 'leaveMember',
    LEAVE_MEETING: 'leaveMeeting',
    MEETING_CHANNEL_LIST: 'MeetingChannelList',
    MEETING_USER_LIST: 'MeetingUserList',
    SOMEONE_IN: 'someoneIn',
    SOMEONE_OUT: 'someoneOut',
    SET_DEVICE_STATE: 'setDeviceState',
  },
};
