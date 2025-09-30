import React from 'react';
import { Group, Line, Text } from 'react-konva';
import { Connector } from '../types/diagram';

interface ConnectorLineProps {
  connector: Connector;
  isSelected: boolean;
  onClick: () => void;
}

export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  connector,
  isSelected,
  onClick,
}) => {
  const points = connector.points.flatMap(point => [point.x, point.y]);
  const midPoint = {
    x: (connector.points[Math.floor(connector.points.length / 2)].x +
      connector.points[Math.floor(connector.points.length / 2) - 1].x) / 2,
    y: (connector.points[Math.floor(connector.points.length / 2)].y +
      connector.points[Math.floor(connector.points.length / 2) - 1].y) / 2,
  };

  return (
    <Group onClick={onClick}>
      <Line
        points={points}
        stroke={isSelected ? '#0096ff' : connector.style.stroke}
        strokeWidth={isSelected ? connector.style.strokeWidth + 1 : connector.style.strokeWidth}
        tension={0.5}
        lineCap="round"
        lineJoin="round"
      />
      {connector.text && (
        <Text
          x={midPoint.x - 50}
          y={midPoint.y - 10}
          text={connector.text}
          width={100}
          align="center"
          fontSize={12}
          fill={connector.style.stroke}
        />
      )}
    </Group>
  );

}; 
};

PREFIX ockms: <https://ontologyhub.rtx.com/RTXEnterpriseOntologies/OCKMSDigitalThreadOntology#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>

SELECT ?instance
WHERE {
    ?instance rdf:type ockms:CircuitCardAssemblyIdentifier .
}
