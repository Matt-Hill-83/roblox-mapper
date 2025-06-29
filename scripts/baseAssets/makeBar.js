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
          Position: [0, 0, frontFaceOffset],
        },
      },
      BackAttachment: {
        $className: "Attachment",
        $properties: {
          Position: [0, 0, backFaceOffset],
        },
      },
      FrontSurfaceGui: {
        $className: "SurfaceGui",
        $properties: {
          Face: "Front",
          SizingMode: "PixelsPerStud",
          PixelsPerStud: 50,
        },
        FrontTextBox: {
          $className: "TextBox",
          $properties: {
            Text: "Front",
            TextSize: 14,
            Font: "SourceSans",
            // Size: { X: { Scale: 1, Offset: 0 }, Y: { Scale: 1, Offset: 0 } }, // added later with a plugin
            BackgroundColor3: [1, 1, 1],
            TextColor3: [0, 0, 0],
          },
        },
      },
      BackSurfaceGui: {
        $className: "SurfaceGui",
        $properties: {
          Face: "Back",
          SizingMode: "PixelsPerStud",
          PixelsPerStud: 50,
        },
        BackTextBox: {
          $className: "TextBox",
          $properties: {
            Text: "Back",
            TextSize: 14,
            Font: "SourceSans",
            // Size: { X: { Scale: 1, Offset: 0 }, Y: { Scale: 1, Offset: 0 } }, // added later with a plugin
            BackgroundColor3: [1, 1, 1],
            TextColor3: [0, 0, 0],
          },
        },
      },
      FrontCircle: {
        $className: "Part",
        $properties: {
          Size: [0.4, 0.4, 0.4],
          Position: [frontX, position.y, frontZ],
          Anchored: true,
          Color: [0, 1, 0],
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
          Color: [1, 0, 0],
          Material: "Neon",
          Shape: "Ball",
        },
      },
    },
  };

  return bar;
}
