"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";

const LOADER_DURATION = 5200;
const EXIT_DURATION = 800;

type SceneRefs = {
  camera: THREE.Camera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  material: THREE.ShaderMaterial;
  geometry: THREE.PlaneGeometry;
  uniforms: {
    time: { value: number };
    resolution: { value: THREE.Vector2 };
  };
  animationId: number;
};

export default function PageLoader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<SceneRefs | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const visibleTimer = window.setTimeout(
      () => setIsVisible(false),
      prefersReducedMotion ? 900 : LOADER_DURATION
    );
    const mountedTimer = window.setTimeout(
      () => setIsMounted(false),
      prefersReducedMotion ? 1200 : LOADER_DURATION + EXIT_DURATION
    );

    return () => {
      window.clearTimeout(visibleTimer);
      window.clearTimeout(mountedTimer);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform vec2 resolution;
      uniform float time;

      float ringLayer(vec2 uv, float t, float channelOffset) {
        float layer = 0.0;
        for (int i = 0; i < 5; i++) {
          float fi = float(i);
          float wave = fract(t + channelOffset + fi * 0.01) * 5.0;
          float grid = mod(uv.x + uv.y, 0.2);
          layer += 0.0024 * fi * fi / abs(wave - length(uv) + grid);
        }

        return layer;
      }

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.05;

        vec3 color = vec3(
          ringLayer(uv, t, 0.0),
          ringLayer(uv, t, -0.01),
          ringLayer(uv, t, -0.02)
        );

        vec3 brandTint = vec3(0.21, 0.57, 0.80);
        vec3 deepBlue = vec3(0.02, 0.05, 0.13);
        color = mix(color, color * brandTint + deepBlue, 0.35);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const camera = new THREE.Camera();
    camera.position.z = 1;

    const scene = new THREE.Scene();
    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    };
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    const onWindowResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.resolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height
      );
    };

    const animate = () => {
      const animationId = window.requestAnimationFrame(animate);
      uniforms.time.value += 0.05;
      renderer.render(scene, camera);

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    sceneRef.current = {
      camera,
      scene,
      renderer,
      material,
      geometry,
      uniforms,
      animationId: 0,
    };

    onWindowResize();
    window.addEventListener("resize", onWindowResize, false);
    animate();

    return () => {
      window.removeEventListener("resize", onWindowResize);

      if (sceneRef.current) {
        window.cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.scene.remove(mesh);
        sceneRef.current.renderer.dispose();
        sceneRef.current.geometry.dispose();
        sceneRef.current.material.dispose();
      }

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sceneRef.current = null;
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#020712] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: EXIT_DURATION / 1000, ease: "easeInOut" }}
          aria-label="Loading AK IT Solutions"
          role="status"
        >
          <div
            ref={containerRef}
            className="absolute inset-0 h-full w-full overflow-hidden"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,7,18,0.16)_42%,rgba(2,7,18,0.82)_100%)]" />

          <div className="relative z-10 flex w-full max-w-[min(88vw,520px)] flex-col items-center px-6 text-center">
            <motion.h1
              className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 26, letterSpacing: "0.18em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0em" }}
              transition={{ delay: 1.9, duration: 0.85, ease: "easeOut" }}
            >
              AK IT Solutions
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
