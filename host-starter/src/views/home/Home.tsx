// TODO: Import the Front component from the front_and_sidebar mfe
// TODO: Import the useMediaContext hook from the mediastore mfe
import { useMediaContext } from 'mediastore/contextHooks';
import { Front } from 'front_and_sidebar/Front';

const Home = () => {
  const { mediaItems } = useMediaContext();
  console.log(mediaItems);

  return <div>{mediaItems && <Front mediaItems={mediaItems} />}</div>;
};

export default Home;
