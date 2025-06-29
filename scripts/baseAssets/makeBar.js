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
// Helper function to create a point with common properties
function createPoint(name, pointPosition, color) {
  return {
    [name]: {
      $className: "Part",
      $properties: {
        Size: [pointSize, pointSize, pointSize], // Size of the point
        Position: pointPosition,
        Anchored: true,
        Color: color,
        Material: "Neon",
        Shape: "Ball",
      },
    },
    [`${name}Attachment`]: {
      $className: "Attachment",
      $properties: {
        Position: pointPosition, // Same position as the point
      },
    },
  };
}

export function makeBar({
  id,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  props = {},
}) {
  const finalProps = {
    ...defaultProps,
    Position: position,
    Orientation: rotation, // Use Orientation instead of Rotation for proper CFrame handling
    ...props,
  };

  // Calculate the positions for points on faces perpendicular to X axis
  const barWidth = finalProps.Size[0]; // X dimension
  const frontFaceOffset = barWidth / 2; // Front face (positive X)
  const backFaceOffset = -barWidth / 2; // Back face (negative X)

  return {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: finalProps,
      FrontPoint: {
        $className: "Part",
        $properties: {
          Size: [0.4, 0.4, 0.4],
          Position: [frontFaceOffset, 0, 0], // Relative to parent (local coordinates)
          Anchored: true,
          Color: [0, 1, 0], // Green color for front face
          Material: "Neon",
          Shape: "Ball",
        },
        FrontPointAttachment: {
          $className: "Attachment",
          $properties: {
            Position: [0, 0, 0], // Center of the point part
          },
        },
      },
      BackPoint: {
        $className: "Part",
        $properties: {
          Size: [0.4, 0.4, 0.4],
          Position: [backFaceOffset, 0, 0], // Relative to parent (local coordinates)
          Anchored: true,
          Color: [1, 0, 0], // Red color for back face
          Material: "Neon",
          Shape: "Ball",
        },
        BackPointAttachment: {
          $className: "Attachment",
          $properties: {
            Position: [0, 0, 0], // Center of the point part
          },
        },
      },
    },
  };
}
