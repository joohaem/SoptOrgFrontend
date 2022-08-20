import styled from '@emotion/styled';
import Sopt404 from '@src/assets/images/sopt_404.png';
import Header from '@src/components/common/Header';
import RoundButton from '@src/components/common/RoundButton';
import theme from '@src/styles/theme';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function recruit() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <Header />
      <Styled.Root>
        <Image
          src={Sopt404.src}
          width={296}
          height={78}
          alt="솝트"
          blurDataURL={Sopt404.src}
          placeholder="blur"
        />
        <span>아직 지원 기간이 아니에요!</span>
        {/* <RoundButton isReverse={true} onClick={handleClick}>
        홈으로 가기
      </RoundButton> */}
      </Styled.Root>
    </>
  );
}

export default recruit;

const Styled = {
  Root: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    & span {
      margin-top: 99px;
      margin-bottom: 99px;
      line-height: 56px;
      color: ${theme.colors.soptWhite};
      font-family: 'SUIT';
      font-size: 45px;
      font-weight: 400;
      font-style: normal;
    }
  `,
};
