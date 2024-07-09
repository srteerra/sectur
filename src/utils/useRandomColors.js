const colors = [
  '166, 32, 140, .5',
  '229, 38, 25, .5',
  '236, 6, 139, .5',
  '253, 167, 0, .5',
  '136, 194, 67, .5',
  '3, 160, 175, .5'
];

const useRandomColors = () => {
  const setColor = `rgba(${colors[Math.floor(Math.random() * 6)]})`;
  return setColor;
};

export default useRandomColors;