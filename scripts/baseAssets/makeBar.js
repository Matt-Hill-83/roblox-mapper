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
  rotation = { x: 0, y: 0, z: 0 },
  props = {},
}) {
  const finalProps = {
    ...defaultProps,
    Position: [position.x, position.y, position.z],
    Orientation: [rotation.x, rotation.y, rotation.z], // Use Orientation instead of Rotation for proper CFrame handling
    ...props,
  };

  // Calculate the positions for points on faces perpendicular to X axis
  const barWidth = finalProps.Size[0]; // X dimension
  const frontFaceOffset = barWidth / 2; // Front face (positive X)
  const backFaceOffset = -barWidth / 2; // Back face (negative X)

  // Create points using the helper function
  const frontPoint = createPointWithAttachment({
    name: "FrontPoint",
    position: { x: frontFaceOffset, y: 0, z: 0 },
    color: { r: 0, g: 1, b: 0 }, // Green
  });
  const backPoint = createPointWithAttachment({
    name: "BackPoint",
    position: { x: backFaceOffset, y: 0, z: 0 },
    color: { r: 1, g: 0, b: 0 }, // Red
  });

  return {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: finalProps,
      ...frontPoint,
      ...backPoint,
    },
  };
}

// Helper function to create a point with attachment for child parts
function createPointWithAttachment({ name, position, color }) {
  return {
    [name]: {
      $className: "Part",
      $properties: {
        Size: [0.4, 0.4, 0.4],
        Position: [position.x, position.y, position.z], // Relative to parent (local coordinates)
        Anchored: true,
        Color: [color.r, color.g, color.b],
        Material: "Neon",
        Shape: "Ball",
      },
      [`${name}Attachment`]: {
        $className: "Attachment",
        $properties: {
          Position: [0, 0, 0], // Center of the point part
        },
      },
    },
  };
}
