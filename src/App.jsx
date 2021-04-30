import BookPage from './components/BookPage/BookPage'
const data = {
  pages: [
    {
      id: 1,
      type: 'bookPage',
      image: 'http://www.fillmurray.com/g/200/300',
      caption: 'Something interesting',
      text: 'Hey yo',
      components: [
        {
          id: 1,
          type: 'shape',
          shape: 'circle',
          width: 40,
          height: 40,
          x: 50,
          y: 50,
        },
        {
          id: 2,
          type: 'shape',
          shape: 'rectangle',
          width: 50,
          height: 30,
          x: 25,
          y: 25
        },
        {
          id: 3,
          type: 'shape',
          shape: 'triangle',
          width: 50,
          height: 50,
          x: 75,
          y: 75
        },
        {
          id: 4,
          type: 'audio',
          src: 'https://www.soundjay.com/human/fart-01.mp3',
          targetId: 2,
        },
        {
          id: 5,
          type: 'audio',
          src: 'https://www.soundjay.com/human/fart-squeak-01.mp3',
          targetId: 1,
        },
        {
          id: 6,
          type: 'audio',
          src: 'https://www.soundjay.com/button/button-3.mp3',
          targetId: 3,
        }
      ]
    },
    {
      type: 'bookPage',
      image: './some-image.jpg',
      caption: 'Something interesting',
      text: 'Hey yo',
    },
  ],
};

function App() {
  return (
    <div>
      { data && data.pages && data.pages.map((page) =>
        <BookPage key={`page${page.id}`} {...page} />
      )}
    </div>
  );
}

export default App;
