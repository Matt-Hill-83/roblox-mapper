const defaultProps = {
  Size: [4, 2, 8], // Rectangle: wider and longer than tall
  Anchored: true,
  Color: [0.2, 0.4, 0.8], // Blue
  Material: "Concrete",
  Shape: "Block",
  TopSurface: "Smooth",
  BottomSurface: "Smooth",
  Transparency: 0.5, // 50% transparency
};

const pointSize = 1;

export function makeBar({
  id,
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: -30, z: 0 },
  props = {},
}) {
  // First create the bar properties
  const finalProps = {
    ...defaultProps,
    ...props,
  };

  // Calculate the positions for attachments on faces perpendicular to Z axis (short faces)
  const barLength = finalProps.Size[2]; // Z dimension
  const frontFaceOffset = barLength / 2; // Front face (positive Z)
  const backFaceOffset = -barLength / 2; // Back face (negative Z)

  // Calculate rotated positions for the circles
  const radY = (rotation.y * Math.PI) / 180;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  // Rotate the front and back offsets around Y axis
  const frontX = position.x + sinY * frontFaceOffset;
  const frontZ = position.z + cosY * frontFaceOffset;
  const backX = position.x + sinY * backFaceOffset;
  const backZ = position.z + cosY * backFaceOffset;

  // Create the complete bar structure with attachments and indicator circles
  const bar = {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: {
        ...finalProps,
        Position: [position.x, position.y, position.z],
        Orientation: [rotation.x, rotation.y, rotation.z],
      },
      FrontAttachment: {
        $className: "Attachment",
        $properties: {
          Position: [0, 0, frontFaceOffset], // Relative to parent center
        },
      },
      BackAttachment: {
        $className: "Attachment",
        $properties: {
          Position: [0, 0, backFaceOffset], // Relative to parent center
        },
      },
      FrontCircle: {
        $className: "Part",
        $properties: {
          Size: [0.4, 0.4, 0.4],
          Position: [frontX, position.y, frontZ],
          Anchored: true,
          Color: [0, 1, 0], // Green
          Material: "Neon",
          Shape: "Ball",
        },
      },
      BackCircle: {
        $className: "Part",
        $properties: {
          Size: [0.4, 0.4, 0.4],
          Position: [backX, position.y, backZ],
          Anchored: true,
          Color: [1, 0, 0], // Red
          Material: "Neon",
          Shape: "Ball",
        },
      },
    },
  };

  return bar;
}
