export const getPosition = (e) => {
    let rect = e.target.getBoundingClientRect();
    console.log(JSON.stringify(rect))
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let percentX = x / rect.width * 100;
    let percentY = y / rect.height * 100;
    console.log(`[${x}, ${y}]`);
    console.log(`[${percentX}%, ${percentY}%]`)
    return {percentX, percentY};
};
