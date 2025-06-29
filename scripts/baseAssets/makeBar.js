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
  // First create the bar properties WITHOUT rotation
  const finalProps = {
    ...defaultProps,
    Position: [position.x, position.y, position.z],
    // No rotation here - create unrotated first
    ...props,
  };

  // Calculate the positions for points on faces perpendicular to Z axis (short faces)
  const barLength = finalProps.Size[2]; // Z dimension
  const frontFaceOffset = barLength / 2; // Front face (positive Z)
  const backFaceOffset = -barLength / 2; // Back face (negative Z)

  // Create points using the helper function with world coordinates
  const frontPoint = createPointWithAttachment({
    name: "FrontPoint",
    position: { x: position.x, y: position.y, z: position.z + frontFaceOffset },
    color: { r: 0, g: 1, b: 0 }, // Green
  });
  const backPoint = createPointWithAttachment({
    name: "BackPoint",
    position: { x: position.x, y: position.y, z: position.z + backFaceOffset },
    color: { r: 1, g: 0, b: 0 }, // Red
  });

  // Create the complete bar structure
  const bar = {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: finalProps,
      ...frontPoint,
      ...backPoint,
    },
  };

  // NOW apply rotation to the main bar part
  const barKey = Object.keys(bar)[0];
  bar[barKey].$properties.Orientation = [rotation.x, rotation.y, rotation.z];

  return bar;
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
