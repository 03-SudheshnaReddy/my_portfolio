// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(900), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 18;
//       ref.current.rotation.y -= delta / 24;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#ffffff"
//           size={0.0025}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-full absolute inset-0 z-[-1] pointer-events-none">
//       <Canvas
//         frameloop="demand"
//         dpr={[1, 1]}
//         camera={{ position: [0, 0, 1] }}
//         gl={{ antialias: false, powerPreference: "high-performance" }}
//       >
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
import { useMemo } from "react";

const StarsCanvas = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 280 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.6 + 0.25,
    }));
  }, []);

  return (
    <div className="contact-random-stars">
      {stars.map((star) => (
        <span
          key={star.id}
          className="contact-random-star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarsCanvas;