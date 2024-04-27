import React, { useEffect, useRef } from 'react';
import styles from '@/components/Earth/Earth.module.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Earth() {
  const canvasRef = useRef();
  const earthRef = useRef();

  useEffect(() => {
    // Create a new scene
    const scene = new THREE.Scene();

    // Create a new camera with a higher view distance
    const camera = new THREE.PerspectiveCamera(75, 430 / 932, 0.1, 200);
    camera.position.set(-25, 15, 20); // Adjust camera position to center the Earth

    // Create a renderer with a black background
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(430, 932);
    renderer.setClearColor(0x222222); // Greyish background

    // Create lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(300, 750, 400);
    scene.add(directionalLight);

    // Load the earth model
    const loader = new GLTFLoader();
    loader.load(
      '/planet-earth-nocloud.glb',
      function (gltf) {
        const earth = gltf.scene;
        earthRef.current = earth;
        scene.add(earth);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error(error);
      }
    );

    // Enable user control to rotate the earth
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable damping for smooth dragging
    controls.dampingFactor = 0.8; // Adjust damping factor
    controls.enableZoom = false; // Disable zooming
    controls.enableRotate = false; // Disable rotation of the camera

    // Mouse interaction for rotating the earth
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onMouseMove = (event) => {
      if (isDragging) {
        const deltaMove = {
          x: event.clientX - previousMousePosition.x,
          y: event.clientY - previousMousePosition.y
        };

        const earth = earthRef.current;
        if (earth) {
          earth.rotation.y += deltaMove.x * 0.01;
        }

        previousMousePosition = { x: event.clientX, y: event.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    canvasRef.current.addEventListener('mousedown', onMouseDown, false);
    canvasRef.current.addEventListener('mousemove', onMouseMove, false);
    canvasRef.current.addEventListener('mouseup', onMouseUp, false);

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the earth slowly from left to right
      scene.traverse(function (child) {
        if (child.isMesh) {
          child.rotation.y += 0.0005;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose(); // Dispose of the renderer to prevent memory leaks

      // Remove event listeners
      canvasRef.current.removeEventListener('mousedown', onMouseDown);
      canvasRef.current.removeEventListener('mousemove', onMouseMove);
      canvasRef.current.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className={styles.earthPosition}>
      <canvas ref={canvasRef}/>
    </div>
    
  );
}