import BookPage from './components/BookPage/BookPage'
const data = {
  pages: [
    {
      type: 'bookPage',
      image: 'http://www.fillmurray.com/g/200/300',
      caption: 'Something interesting',
      text: 'Hey yo',
      components: [
        {
          type: 'shape',
          shape: 'circle',
          width: 40,
          height: 40,
          x: 0,
          y: 0
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
        <BookPage {...page} />
      )}
    </div>
  );
}

export default App;
