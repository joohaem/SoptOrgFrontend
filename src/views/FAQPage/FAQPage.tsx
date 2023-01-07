import styled from '@emotion/styled';
import { Footer, Header, Layout } from '@src/components';
import Contact from './components/contact';
import FAQ from './components/faq';

function FAQPage() {
  return (
    <Layout>
      <Header />
      <Root>
        <Contact />
        <FAQ />
      </Root>
      <Footer />
    </Layout>
  );
}

export default FAQPage;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;

  /* 태블릿 뷰 */
  @media (max-width: 1280px) {
    width: 766px;
  }
  /* 모바일 뷰 */
  /* @media (max-width: 766px) {
    width: 320px;
    margin-top: 80px;
  } */
`;
