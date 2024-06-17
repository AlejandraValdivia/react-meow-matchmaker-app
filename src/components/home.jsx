import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <>
      <Container className="home" id="home">
        <div className="home-content">
          <h1>
            Hello!, Welcome to <span>Meow Matchmaker</span>
          </h1>
          <h2>Ready to make a new friend?</h2>
          <h3>
            Having a cat means{" "}
            <span className="multiple-text">Meow Matchmaker</span>!
          </h3>
          <p>Share your love for animals and meet new friends.</p>
          <p>Sign in or sign up to get started!</p>
          <p>Don't have an account yet?</p>
          <div className="services-container">
            <a href="/auth/login" className="btn btn-primary ml-6">
              Sign in
            </a>
            <a href="/auth/signup" className="btn btn-primary ml-6">
              Sign up
            </a>
          </div>
        </div>
        <div className="home-img">
        <Image src="https://i.imgur.com/ozEaj1Z.png" alt="image of a cat" thumbnail />
        </div>
      </Container>
    </>
  );
};

export default Home;
