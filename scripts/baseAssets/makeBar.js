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

  // Calculate the positions for attachments on the SHORT faces
  // Find which dimension is shortest (excluding height/Y)
  const xDim = finalProps.Size[0]; // Width
  const zDim = finalProps.Size[2]; // Length
  
  let faceOffset, isXAxis;
  if (xDim <= zDim) {
    // X dimension is shorter, so short faces are perpendicular to X-axis
    faceOffset = xDim / 2;
    isXAxis = true;
  } else {
    // Z dimension is shorter, so short faces are perpendicular to Z-axis  
    faceOffset = zDim / 2;
    isXAxis = false;
  }
  
  const frontFaceOffset = faceOffset;
  const backFaceOffset = -faceOffset;

  // Calculate rotated positions for the circles based on the correct axis
  const radY = (rotation.y * Math.PI) / 180;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);
  
  let frontX, frontZ, backX, backZ;
  if (isXAxis) {
    // Circles on faces perpendicular to X-axis
    frontX = position.x + (cosY * frontFaceOffset);
    frontZ = position.z + (-sinY * frontFaceOffset);
    backX = position.x + (cosY * backFaceOffset);
    backZ = position.z + (-sinY * backFaceOffset);
  } else {
    // Circles on faces perpendicular to Z-axis
    frontX = position.x + (sinY * frontFaceOffset);
    frontZ = position.z + (cosY * frontFaceOffset);
    backX = position.x + (sinY * backFaceOffset);
    backZ = position.z + (cosY * backFaceOffset);
  }

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
          Position: isXAxis ? [frontFaceOffset, 0, 0] : [0, 0, frontFaceOffset], // Relative to parent center
        },
      },
      BackAttachment: {
        $className: "Attachment",
        $properties: {
          Position: isXAxis ? [backFaceOffset, 0, 0] : [0, 0, backFaceOffset], // Relative to parent center
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
