import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { useSelectedChannel, useToast } from '@hooks/index';
import { socket, uploadFile } from '@utils/index';
import { SOCKET, TOAST_MESSAGE } from '@constants/index';
import { FileSelectIcon } from '@components/common/Icons';
import { FileInputWrapper, ChatInputWrapper, Wrapper } from './style';
import FileItem from '../FileItem';

function ChatInput({ onInput }: { onInput: () => void }) {
  const { id } = useSelectedChannel();
  const { fireToast } = useToast();
  const chatInputRef = useRef<HTMLInputElement>(null);

  const onSubmitChat = async (e: FormEvent) => {
    e.preventDefault();

    if (chatInputRef.current === null) return;
    const content = chatInputRef.current ? chatInputRef.current.value.trim() : '';
    if ((content === '' && !fileURL.length) || id === null) return;
    chatInputRef.current.value = '';
    setFileURL([]);
    socket.emit(SOCKET.CHAT_EVENT.CHAT, { content, files: fileURL, chattingChannelID: id });
    onInput();
  };
  const [fileURL, setFileURL] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLDivElement>(null);
  const onUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target as HTMLInputElement;
      if (!target.files) return;
      const file: File = (target.files as FileList)[0];
      const uploadedFileURL = await uploadFile(file);
      if (uploadedFileURL && fileInputRef && fileInputRef.current) {
        setFileURL([...fileURL, uploadedFileURL]);
        fireToast({ message: TOAST_MESSAGE.SUCCESS.FILE_UPLOAD, type: 'success' });
      }
    } catch (error) {
      if (typeof error === 'string') fireToast({ message: error, type: 'warning' });
      else {
        fireToast({ message: TOAST_MESSAGE.ERROR.FILE_UPLOAD, type: 'warning' });
        console.log(error);
      }
    }
  };

  useEffect(() => {
    socket.on('chatFail', () => {
      fireToast({ message: TOAST_MESSAGE.ERROR.POST_CHAT_FAIL, type: 'warning' });
    });
  });

  return (
    <Wrapper onSubmit={onSubmitChat}>
      <FileInputWrapper ref={fileInputRef}>
        <FileSelectIcon />
        <input
          type="file"
          id="chat_upload"
          onChange={onUploadFile}
          accept="image/jpeg, image/png"
        />
      </FileInputWrapper>
      <ChatInputWrapper>
        <input ref={chatInputRef} placeholder="Message to channel" type="text" maxLength={255} />
        {fileURL.length !== 0 && (
          <div>
            {fileURL.map((src) => (
              <FileItem key={src} src={src} alt="chat input file" itemType="chatInput" />
            ))}
          </div>
        )}
      </ChatInputWrapper>
    </Wrapper>
  );
}

export default ChatInput;
