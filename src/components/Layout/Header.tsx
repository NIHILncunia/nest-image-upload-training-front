import React, { useCallback } from 'react';
import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { toast } from 'react-toastify';
import { Nav } from './Nav';
import { useSignIn, useSignOut } from '@/hooks/queries';
import { getCookie, setCookie } from '@/utils/cookie';

interface Props {
  styles?: SerializedStyles;
}

export function Header({ styles, }: Props) {
  const sign = getCookie<boolean>('sign');

  const signIn = useSignIn();
  const signOut = useSignOut();

  const onClickSignIn = useCallback(() => {
    signIn.mutate({
      email: 'nihil_ncunia@naver.com',
      password: '1234567',
    }, {
      onSuccess: (res) => {
        setCookie('sign', true, {
          expires: new Date(res.tokenExp * 1000),
        });
        setCookie('tokenExp', res.tokenExp, {
          expires: new Date(res.tokenExp * 1000),
        });
        toast.success(res.message);
      },
    });
  }, [ signIn, ]);

  const onClickSignOut = useCallback(() => {
    signOut.mutate({}, {
      onSuccess: (res) => {
        toast.success(res.message);
      },
    });
  }, [ signOut, ]);

  const style = {
    default: css([
      tw`  `,
      styles,
    ]),
  };

  return (
    <>
      <header css={style.default}>
        <div>
          <p>여기에 대충 로고</p>
          <Nav />
        </div>
        <div>
          {!sign ? (
            <button onClick={onClickSignIn}>로그인</button>
          ) : (
            <button onClick={onClickSignOut}>로그아웃</button>
          )}
        </div>
      </header>
    </>
  );
}
