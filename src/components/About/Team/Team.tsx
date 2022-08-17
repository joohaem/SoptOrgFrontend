import StudyNetworkingImg from '@src/assets/images/study_networking.svg';
import Footer from '@src/components/common/Footer';
import UnderlinedTitle from '@src/components/common/UnderlinedTitle';
import { ABOUT_INFO } from '@src/constants/about';
import Image from 'next/image';

import AboutWrapper from '../AboutWrapper';
import * as S from './Team.style';
function Team() {
  return (
    <AboutWrapper height={'calc(100vh-163px)'}>
      <AboutWrapper.Top
        leftProps={
          <>
            <S.Description>{ABOUT_INFO.TEAM.description}</S.Description>
            <UnderlinedTitle fontSize="40px">{ABOUT_INFO.TEAM.title}</UnderlinedTitle>
            <S.Contents>{ABOUT_INFO.TEAM.contents}</S.Contents>
          </>
        }
        rightProps={
          <Image src={StudyNetworkingImg.src} width={475} height={250} alt="스터디 네트워킹" />
        }
      />
    </AboutWrapper>
  );
}

export default Team;
