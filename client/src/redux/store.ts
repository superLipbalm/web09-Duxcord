import { configureStore } from '@reduxjs/toolkit';
import groupConnectionReducer from './groupConnection/slice';
import selectedChannelReducer from './selectedChannel/slice';
import selectedChatReducer from './selectedChat/slice';
import selectedGroupReducer from './selectedGroup/slice';
import selectedOtherUserReducer from './selectedOtherUser/slice';
import userDeviceReducer from './userDevice/slice';

const store = configureStore({
  reducer: {
    selectedGroup: selectedGroupReducer,
    selectedChannel: selectedChannelReducer,
    selectedChat: selectedChatReducer,
    selectedOtherUser: selectedOtherUserReducer,
    userDevice: userDeviceReducer,
    groupConnection: groupConnectionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
