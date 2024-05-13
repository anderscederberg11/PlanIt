import React, { useEffect, useRef, useState } from 'react';
import styles from '@/components/Earth/Earth.module.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Earth({ animateEarth }) {
  const canvasRef = useRef();
  const earthRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 430 / 932, 0.1, 200);

    camera.position.set(-25, 15, 20);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(430, 932);

    // Load the background texture
    const loader = new THREE.TextureLoader();
    loader.load('/images/sky.png', function (texture) {
      texture.minFilter = THREE.LinearFilter; // Optional: Set the min filter for the texture
      texture.magFilter = THREE.LinearFilter; // Optional: Set the mag filter for the texture
      scene.background = texture;
    });

    // Create lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.set(300, 750, 400);
    scene.add(directionalLight);

    // Load the earth model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      '/planet-earth-nocloud.glb',
      function (gltf) {
        const earth = gltf.scene;
        earthRef.current = earth;
        earth.position.set(-10, 0, 15);
        scene.add(earth);
        setIsLoading(false);
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      function (error) {
        console.error(error);
        setIsLoading(false);
      }
    );

    // User control to rotate the earth
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.8;
    controls.enableZoom = false;
    controls.enableRotate = false;

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

    if (canvasRef.current) {
      canvasRef.current.addEventListener('mousedown', onMouseDown, false);
      canvasRef.current.addEventListener('mousemove', onMouseMove, false);
      canvasRef.current.addEventListener('mouseup', onMouseUp, false);
    }

    // Render the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the earth slowly from left to right
      scene.traverse(function (child) {
        if (child.isMesh) {
          child.rotation.y += 0.0005;
        }
      });

      // Animate the Earth's position towards the target position
      setTimeout(() => {
        if (animateEarth && earthRef.current) {
          const currentPosition = earthRef.current.position;
          const targetPosition = animateEarth ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(-10, 0, 15);
          const distance = currentPosition.distanceTo(targetPosition);
          if (distance > 0.1) {
            const direction = targetPosition.clone().sub(currentPosition).normalize();
            const speed = 0.1;
            const newPosition = currentPosition.clone().add(direction.multiplyScalar(speed));
            earthRef.current.position.copy(newPosition);
          } else {
            earthRef.current.position.copy(targetPosition);
          }
        }
      }, 1);

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      if (canvasRef.current) {
        canvasRef.current.removeEventListener('mousedown', onMouseDown, false);
        canvasRef.current.removeEventListener('mousemove', onMouseMove, false);
        canvasRef.current.removeEventListener('mouseup', onMouseUp, false);
      }
    };
  }, [animateEarth, isLoading]);

  return (
    <div className={styles.earthPosition}>
      {isLoading ? (
        <div className={styles.loadingMessageBackground}>
          <h1 className={styles.loadingMessage}>Loading your PlanIt...</h1>
        </div>
      ) : (
        <canvas ref={canvasRef} />
      )}
    </div>
  );
}
