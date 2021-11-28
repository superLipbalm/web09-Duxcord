import { io } from 'socket.io-client';

import { SOCKET } from '@utils/constants/SOCKET_EVENT';

export const socket = io('/');

const joinChannel = ({ channelType, id }: { channelType: 'chatting' | 'meeting'; id: number }) =>
  socket.emit(SOCKET.CHANNEL_EVENT.JOIN_CHANNEL, channelType + id);

const leaveChannel = ({ channelType, id }: { channelType: 'chatting' | 'meeting'; id: number }) =>
  socket.emit(SOCKET.CHANNEL_EVENT.LEAVE_CHANNEL, channelType + id);

const Socket = { socket, joinChannel, leaveChannel };

export default Socket;
