import styled from 'styled-components';

const StyledBookPage = styled.div`
  position: relative;
`;

const BookPage = ({ type, image, caption, text, items }) => {
  if (type === 'bookPage') {
    return (
      <StyledBookPage>
        <img src={image} alt={caption} />
        <h1>
          {text}
        </h1>
        { items.map((item) =>
          
        )}
      </StyledBookPage>
    );
  } else {
    return null;
  }
};

export default BookPage;
