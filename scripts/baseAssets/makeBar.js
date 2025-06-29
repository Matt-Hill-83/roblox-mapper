const defaultProps = {
  Size: [4, 2, 8], // Rectangle: wider and longer than tall
  Anchored: true,
  Color: [0.2, 0.4, 0.8], // Blue
  Material: "Plastic",
  Shape: "Block",
  TopSurface: "Smooth",
  BottomSurface: "Smooth",
};

export function makeBar({ id, position = [0, 0, 0], props = {} }) {
  return {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: {
        ...defaultProps,
        Position: position,
        ...props, // Spread custom props to override defaults
      },
    },
  };
}
