const calculateBackgroundColor = (windowScroll) => {
  if (windowScroll > 466) {
    return "rgba(0, 0, 0, 1)";
  } else if (windowScroll > 366) {
    return "rgba(0, 0, 0, 0.9)";
  } else if (windowScroll > 266) {
    return "rgba(0, 0, 0, 0.8)";
  } else if (windowScroll > 166) {
    return "rgba(0, 0, 0, 0.7)";
  } else if (windowScroll > 66) {
    return "rgba(0, 0, 0, 0.6)";
  } else {
    return "rgba(0, 0, 0, 0.5)";
  }
};

export default calculateBackgroundColor;
