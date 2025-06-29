const defaultProps = {
  Size: [4, 2, 8], // Rectangle: wider and longer than tall
  Anchored: true,
  Color: [0.2, 0.4, 0.8], // Blue
  Material: "Concrete",
  Shape: "Block",
  TopSurface: "Smooth",
  BottomSurface: "Smooth",
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

  // Create the complete bar structure with attachments
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
    },
  };

  return bar;
}
