import styled from 'styled-components';
import Container from "../components/Container";
import Layout from "../components/Layout";
import ThemeContext from '../context/ThemeContext';

function About({ className }) {
  return (
    <ThemeContext.Provider value="dark">
      <Layout>
        <Container className={className}>
          <div>
            Tel: <a href="tel:+1(714) 746-9946">+1(714) 746-9946</a>
          </div>
          <div>
            <a href="tel:+91 9818499521">+91 9818499521</a>
          </div>
          <div>
            <a href="mailto:contact@kaustubh.tv">contact@kaustubh.tv</a>
          </div>
        </Container>
      </Layout>
    </ThemeContext.Provider>
  );
}

export default styled(About)`
  div {
    margin: 10px;
  }

  @media only screen and (max-width: 768px) {
    padding: 25% 15%;
  }
`;
