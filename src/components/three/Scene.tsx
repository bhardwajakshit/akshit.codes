import * as THREE from "three";
import { useMobile } from "@/contexts/MobileContext";
import { Theme } from "@/lib/types";
import { OrbitControls } from "@react-three/drei";
import { Canvas, Vector3, useLoader } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useMemo, useRef, useState } from "react";
// import { motion } from "framer-motion";

const iconNames = [
  "Mergent",
  "Next.js",
  "React.js",
  "Rust",
  "MongoDB",
  "TailwindCSS",
  "SendGrid",
  "Playwright",
  "Node.js",
  "Framer",
  "AWS",
  "Stripe",
  "TypeScript",
  "Svelte",
];

const fixedPositions = [
  [0.0, -0.9, -0.3],
  [0.894, -0.447, 0.0],
  [0.276, -0.447, 0.851],
  [-0.724, -0.447, 0.526],
  [-0.724, -0.447, -0.526],
  [0.276, -0.447, -0.851],
  [0.724, 0.447, 0.526],
  [-0.276, 0.447, 0.851],
  [-0.894, 0.447, 0.0],
  [-0.276, 0.447, -0.851],
  [0.724, 0.447, -0.526],
  [0, 1.0, 0.3],
  [0.0, 0.0, 1.0],
  [0.0, 0.0, -1.0],
];

const CustomGeometryParticles = (props: {
  count: any;
  shape: any;
  setHovered: any;
}) => {
  const { theme } = useTheme();
  const darkTheme = theme === Theme.Dark;
  const { count, shape, setHovered } = props;
  const points = useRef() as any;

  const pointTexture = useLoader(THREE.TextureLoader, "/disc.png");

  const textures = useLoader(THREE.TextureLoader, [
    darkTheme ? "/svgs/mergent-light-icon.svg" : "/svgs/mergent-icon.svg",
    darkTheme ? "/svgs/next-light-icon.svg" : "/svgs/next-icon.svg",
    "/svgs/react-icon.svg",
    "/svgs/rust-icon.svg",
    "/svgs/mongodb-icon.svg",
    "/svgs/tailwind-icon.svg",
    "/svgs/sendgrid-icon.svg",
    "/svgs/playwright-icon.svg",
    "/svgs/node-icon.svg",
    "/svgs/framer-icon.svg",
    darkTheme ? "/svgs/aws-light-icon.svg" : "/svgs/aws-icon.svg",
    "/svgs/stripe-icon.svg",
    "/svgs/typescript-icon.svg",
    "/svgs/svelte-icon.svg",
  ]);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(250 * 3);

    if (shape === "sphere") {
      const distance = 1;

      for (let i = 0; i < 250; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(360);

        let x = distance * Math.sin(theta) * Math.cos(phi);
        let y = distance * Math.sin(theta) * Math.sin(phi);
        let z = distance * Math.cos(theta);

        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  const handlePointerOver = (index: number) => {
    setHovered(index);
  };

  const handlePointerOut = () => {
    setHovered(null);
  };

  return (
    <group ref={points}>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color={darkTheme ? "lightblue" : "darkblue"}
          sizeAttenuation
          depthWrite={false}
          map={pointTexture}
          alphaTest={0}
          transparent
        />
      </points>
      {Array.from({ length: count }).map((_, i) => {
        const texture = textures[i % textures.length];
        return (
          <sprite
            key={i}
            position={fixedPositions[i] as Vector3}
            scale={[0.2, 0.2, 1]}
            onPointerOver={() => handlePointerOver(i)}
            onPointerOut={handlePointerOut}
          >
            <spriteMaterial attach="material" map={texture} />
          </sprite>
        );
      })}
    </group>
  );
};

export const Scene = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { isMobile } = useMobile();

  return (
    <div className="flex flex-col items-center">
      <Canvas
        camera={{ position: [1.5, isMobile ? 0 : 1.5, 1.5] }}
        style={{ width: "380px", height: isMobile ? "400px" : "500px" }}
      >
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles
          count={14}
          shape="sphere"
          setHovered={setHovered}
        />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          // minDistance={cameraZ}
          // maxDistance={cameraZ}
          autoRotate={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
      {/* {hovered !== null && !isMobile && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base font-normal"
        >
          {iconNames[hovered]}
        </motion.p>
      )} */}
    </div>
  );
};
