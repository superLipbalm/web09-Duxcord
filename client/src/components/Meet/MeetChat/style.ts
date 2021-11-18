import styled from 'styled-components';
import Colors from '../../../styles/Colors';

const ChatWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: ${Colors.White};
  padding: 10px;
`;

const ChatList = styled.ul`
  overflow-y: scroll;
  width: 300px;
  height: calc(100% - 52px);

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.Gray2};
    border-radius: 10px;
  }

  &:hover::-webkit-scrollbar {
    display: block;
    width: 10px;
  }
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  & div:first-child {
    font-weight: bold;
    font-size: 15px;
    margin-right: 3px;
  }
  & div:last-child {
    color: ${Colors.Gray1};
    font-size: 12px;
  }
`;

const Chat = styled.li`
  margin-top: 5px;
  & div {
    display: flex;
    & img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: ${Colors.Gray2};
      margin-right: 5px;
    }
  }
`;

const Message = styled.span`
  display: inline-block;
  margin-left: 30px;
  padding: 12px;
  background-color: ${Colors.Gray3};
  border-radius: 15px;
  overflow-wrap: break-word;
`;

const ShowChatButton = styled.button`
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 10px;
  background: none;
  border: none;

  svg {
    width: 25px;
    height: 25px;
  }
`;

const CloseChatButton = styled.button`
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const InputWrap = styled.form`
  width: 100%;
`;

const Input = styled.input`
  background-color: ${Colors.Gray3};
  padding: 10px;
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
`;

export {
  ChatWrap,
  ChatList,
  ChatHeader,
  ShowChatButton,
  CloseChatButton,
  Message,
  Chat,
  Input,
  InputWrap,
};
