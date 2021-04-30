const AudioComponent = ({ src, targetId }) => {
  const myAudioElement = new Audio(src);
  myAudioElement.addEventListener("canplaythrough", () => {
    document.getElementById(targetId).onclick = () => myAudioElement.play();
  });
  return null;
};

export default AudioComponent;
