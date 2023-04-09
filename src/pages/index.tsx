import React from 'react';
import tw, { css } from 'twin.macro';
import Link from 'next/link';
import { AppLayout } from '@/layouts';
import { usePosts } from '@/hooks/queries';

export default function IndexPage() {
  // TODO: 홈페이지부터 꾸미고 다른 페이지로 만들어보자.
  // TODO: 회원가입 페이지 만들기
  // TODO: 로그인 페이지 만들기
  // TODO: 게시판 페이지 만들기

  const posts = usePosts();

  const style = {
    default: css([
      tw` py-4 `,
    ]),
  };

  return (
    <>
      <AppLayout title='홈'>
        <div css={style.default}>
          <h1>최근 10개의 글</h1>
          {posts.data.map((post) => (
            <div key={post.id}>
              <h2>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </h2>
            </div>
          )).slice(0, 10)}
        </div>
      </AppLayout>
    </>
  );
}
