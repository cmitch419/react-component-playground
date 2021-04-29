import BookPage from './components/BookPage/BookPage'
const data = {
  pages: [
    {
      type: 'bookPage',
      image: './some-image.jpg',
      caption: 'Something interesting',
      text: 'Hey yo',
      components: [
        {
          type: 'shape',
          shape: 'circle',
          width: 100,
          height: 100,
          x: 0,
          y: 100
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
    <>
      { data && data.pages && data.pages.map((page) =>
        <BookPage {...page} />
      )}
    </>
  );
}

export default App;
