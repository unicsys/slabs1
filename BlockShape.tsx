import React from 'react';
import { Group, Rect, Circle, Text, RegularPolygon } from 'react-konva';
import { Block, Point } from '../types/diagram';

interface BlockShapeProps {
  block: Block;
  isSelected: boolean;
  onDragMove: (id: string, position: Point) => void;
  onClick: () => void;
}

export const BlockShape: React.FC<BlockShapeProps> = ({
  block,
  isSelected,
  onDragMove,
  onClick,
}) => {
  const shapeProps = {
    x: 0,
    y: 0,
    width: block.size.width,
    height: block.size.height,
    fill: block.style.fill,
    stroke: isSelected ? '#0096ff' : block.style.stroke,
    strokeWidth: isSelected ? 3 : block.style.strokeWidth,
  };

  const renderShape = () => {
    switch (block.type) {
      case 'rectangle':
        return <Rect {...shapeProps} />;
      case 'circle':
        return (
          <Circle
            {...shapeProps}
            radius={Math.min(block.size.width, block.size.height) / 2}
          />
        );
      case 'diamond':
        return (
          <RegularPolygon
            {...shapeProps}
            sides={4}
            radius={Math.min(block.size.width, block.size.height) / 2}
            rotation={45}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Group
      x={block.position.x}
      y={block.position.y}
      draggable
      onDragMove={(e) => {
        onDragMove(block.id, { x: e.target.x(), y: e.target.y() });
      }}
      onClick={onClick}
    >
      {renderShape()}
      <Text
        text={block.text}
        width={block.size.width}
        height={block.size.height}
        align="center"
        verticalAlign="middle"
        fontSize={14}
      />
    </Group>
  );
}; 