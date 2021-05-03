import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ClickContainer from './components/OverlaysAndJunk/ClickContainer'
import Image from './components/OverlaysAndJunk/ContainerImage';
import Wrapper from './components/OverlaysAndJunk/Wrapper';
import Shape from './components/OverlaysAndJunk/Shape';
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
      id: 2,
      type: 'bookPage',
      image: './some-image.jpg',
      caption: 'Something interesting',
      text: 'Hey yo',
    },
  ],
};

const PageContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 300px;
  border-style: dotted red;
`;

const data2 = [
  {
    id: 1,
    image: 'https://www.fillmurray.com/50/50',
    top: 0,
    left: 0,
  },
  {
    id: 2,
    image: 'https://www.fillmurray.com/200/50',
    top: 25,
    left: 25,
  },
  {
    id: 3,
    image: 'https://www.fillmurray.com/100/100',
    top: 50,
    left: 50,
  },
  {
    id: 4,
    image: 'https://www.fillmurray.com/50/100',
    top: 75,
    left: 75,
  },
  {
    id: 5,
    image: 'https://www.fillmurray.com/50/200',
    top: 100,
    left: 100,
  },
];

const config = {
  width: "500px",
  height: "100px",
};

function App() {
    return (
      
    // <ClickContainer {...config}>
    //   { data2.map((item, idx) =>
    //     <Wrapper key={item.id} top={item.top} left={item.left}>
    //       <Image src={item.image} />
    //     </Wrapper>
    //   )}
    //   <Wrapper key="shapey1" top={10} left={10} width={10} height={10}>
    //     <Shape shape="circle" />
    //   </Wrapper>
    //   <Wrapper key="shapey2" top={30} left={30} width={10} height={10}>
    //     <Shape shape="rectangle" />
    //   </Wrapper>
    // </ClickContainer>
    // <PageContainer>
    //   { data && data.pages && data.pages.map((page) =>
    //     <BookPage key={`page${page.id}`} {...page} />
    //   )}
    // </PageContainer>
  );
}

export default App;
