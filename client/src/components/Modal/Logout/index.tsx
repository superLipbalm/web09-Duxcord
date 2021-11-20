import React from 'react';
import { useHistory } from 'react-router';

import { ModalController } from '@customTypes/modal';
import Colors from '@styles/Colors';
import { postLogout } from 'src/api/postLogout';
import { URL } from 'src/api/URL';
import Modal from '..';
import { MiddlePart } from './style';

function LogoutModal({ controller: { hide, show } }: { controller: ModalController }) {
  const history = useHistory();
  const finishModal = () => hide();
  const logOut = async () => {
    const isSuccess = await postLogout();
    if (isSuccess) history.replace(URL.loginPage);
    window.location.reload();
  };

  const middleContent = <MiddlePart>정말로 로그아웃 하시겠습니까?</MiddlePart>;
  return (
    <Modal
      props={{
        title: '로그아웃',
        middleContent,
        bottomRightButton: {
          text: '로그아웃',
          color: Colors.Blue,
          onClickHandler: logOut,
        },
      }}
      controller={{ hide: finishModal, show }}
    />
  );
}

export default LogoutModal;
