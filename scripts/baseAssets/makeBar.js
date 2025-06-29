import { colors } from "../colors.js";

console.log(`colors`, colors);
const defaultProps = {
  Size: [4, 2, 8],
  Anchored: true,
  Color: [0.2, 0.4, 0.8],
  Material: "Concrete",
  Shape: "Block",
  TopSurface: "Smooth",
  BottomSurface: "Smooth",
  Transparency: 0,
};

const pointSize = 1;

function makeSurfaceGui(face, label, blockColor) {
  return {
    $className: "SurfaceGui",
    $properties: {
      Face: face,
      SizingMode: "PixelsPerStud",
      PixelsPerStud: 50,
    },
    [`${label}TextBox`]: {
      $className: "TextBox",
      $properties: {
        Text: label,
        TextSize: 48,
        Font: "SourceSans",
        // Size: { X: { Scale: 1, Offset: 0 }, Y: { Scale: 1, Offset: 0 } }, // added later with a plugin
        BackgroundColor3: blockColor,
        TextColor3: [0, 0, 0],
        BorderSizePixel: 10,
      },
    },
  };
}

function makeAttachment(name, offset) {
  return {
    $className: "Attachment",
    $properties: {
      Position: [0, 0, offset],
    },
  };
}

function makeCircle(name, x, y, z, color) {
  return {
    $className: "Part",
    $properties: {
      Size: [0.4, 0.4, 0.4],
      Position: [x, y, z],
      Anchored: true,
      Color: color,
      Material: "Neon",
      Shape: "Ball",
    },
  };
}

export function makeBar({
  id,
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: -30, z: 0 },
  props = {},
}) {
  const finalProps = {
    ...defaultProps,
    ...props,
  };

  const barLength = finalProps.Size[2];
  const frontFaceOffset = barLength / 2;
  const backFaceOffset = -barLength / 2;

  const radY = (rotation.y * Math.PI) / 180;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  const frontX = position.x + sinY * frontFaceOffset;
  const frontZ = position.z + cosY * frontFaceOffset;
  const backX = position.x + sinY * backFaceOffset;
  const backZ = position.z + cosY * backFaceOffset;

  // Use the block color for the SurfaceGui background
  const blockColor = finalProps.Color;

  const bar = {
    [`Rectangle${id}`]: {
      $className: "Part",
      $properties: {
        ...finalProps,
        Position: [position.x, position.y, position.z],
        Orientation: [rotation.x, rotation.y, rotation.z],
      },
      FrontAttachment: makeAttachment("FrontAttachment", frontFaceOffset),
      BackAttachment: makeAttachment("BackAttachment", backFaceOffset),
      FrontSurfaceGui: makeSurfaceGui("Front", "Front", blockColor),
      BackSurfaceGui: makeSurfaceGui("Back", "Back", blockColor),
      FrontCircle: makeCircle(
        "FrontCircle",
        frontX,
        position.y,
        frontZ,
        [0, 1, 0]
      ),
      BackCircle: makeCircle("BackCircle", backX, position.y, backZ, [1, 0, 0]),
    },
  };

  return bar;
}
