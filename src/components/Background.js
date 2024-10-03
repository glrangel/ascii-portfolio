import React, {useRef} from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import {AsciiRenderer} from '@react-three/drei'

const Box = () => {
    const boxRef = useRef();
    const { mouse } = useThree();
    const viewport = useThree((state) => state.viewport)
  
  
    useFrame(() => {
      // boxRef.current.rotation.x += mouse.y / 30;
      // boxRef.current.rotation.y += mouse.x / 30;
      boxRef.current.rotation.y += 0.005;
      boxRef.current.rotation.x += 0.01;


      // console.log(mouse.x*10);

    });

    return (
        <mesh scale={Math.min(viewport.width, viewport.height) / 5} ref={boxRef}>
            <torusKnotGeometry args={[1, 0.2, 128, 32]} />
            <meshStandardMaterial  color={"white"} />
        </mesh>
    )
}


const Background = () => {

  return (
    <Canvas id="canvas" style={{position: "absolute"}}>
        <color attach="background" args={['black']} />
        <AsciiRenderer fgColor="white" bgColor="transparent" resolution='0.15'/>
        {/* <ambientLight position={[0, 0, 0]} /> */}
        <directionalLight
          position={[0,0,1]}
          intensity={0.1}
          color={"white"}
        />                
        {/* <pointLight position={[5, 5, 5]} /> */}
        <Box />
    </Canvas>
  );
};

export default Background;
