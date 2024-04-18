"use client";

import { Billboard, Line, ScreenSizer, Text } from "@react-three/drei";
import { Vector3, Euler } from "three";

export type RoverProps = {
  position?: Vector3;
  rotation?: Euler;
  distanceFront: number;
  distanceLeft: number;
  distanceRight: number;
  width: number;
  height: number;
  length: number;
};

export function Rover(props: RoverProps) {
  const halfLength = props.length / 2;
  const halfWidth = props.width / 2;

  return (
    <mesh position={props.position} rotation={props.rotation}>
      <pointLight position={[0, 1, 0]} intensity={1} />
      <boxGeometry args={[props.width, props.height, props.length]} />
      <meshStandardMaterial color="lightgray" />
      <RoverRay
        start={new Vector3(0, 0, -halfLength)}
        end={new Vector3(0, 0, -props.distanceFront - halfLength)}
      />
      <RoverRay
        start={new Vector3(halfWidth, 0, 0)}
        end={new Vector3(props.distanceLeft + halfWidth, 0, 0)}
      />

      <RoverRay
        start={new Vector3(-halfWidth, 0, 0)}
        end={new Vector3(-props.distanceRight - halfWidth, 0, 0)}
      />
    </mesh>
  );
}

type RoverRayProps = {
  start: Vector3;
  end: Vector3;
};

export function RoverRay(props: RoverRayProps) {
  const distance = props.start.distanceTo(props.end);

  return (
    <>
      <Billboard position={props.start.clone().add(props.end).divideScalar(2)}>
        <ScreenSizer>
          <Text fontSize={16} color="white">
            {distance.toFixed(2)}m
          </Text>
        </ScreenSizer>
      </Billboard>
      <Line color="gray" points={[props.start, props.end]} lineWidth={2} />
    </>
  );
}
