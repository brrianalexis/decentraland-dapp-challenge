import { Link } from 'react-router-dom';
import { Button, Center, Footer, Header, Navbar, Page } from 'decentraland-ui';

const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <Page>
        <Center>
          <Header>This page doesn't exist</Header>
          <Link to="/">
            <Button basic>Go back to your wallet</Button>
          </Link>
        </Center>
      </Page>
      <Footer />
    </>
  );
};

export default NotFound;
