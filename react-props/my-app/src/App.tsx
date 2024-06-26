import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const image = '/starry-sky.jpeg';
const caption = 'A beautiful Image of Space';
const description = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
        incidunt sit dolorum accusantium sapiente reiciendis maxime dolores
        ullam delectus, commodi placeat eveniet, quam voluptates facere et
        magnam architecto quaerat velit voluptas rerum quos asperiores quis in!
        Nemo aut aliquam quas dolore quaerat, error numquam odio modi eos vero.
        Modi nisi eos autem? Iusto hic impedit aspernatur labore quos nesciunt?
        Ad dolore pariatur aperiam nemo, maiores laboriosam quam quod nisi
        ipsum, dicta sunt laborum similique repellat?`;
const buttonText = 'Click For Next Image';

function App() {
  return (
    <>
      <Header text={headerText} />
      <ImageContainer image={image} />
      <ImageCaption caption={caption} />
      <ImageDescription description={description} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}

export default App;
