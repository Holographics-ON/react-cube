import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Canvas = ({colour}) => {
    const refContainer = useRef(null);
    useEffect(() => {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        let renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        refContainer.current.appendChild(renderer.domElement);

        let geometry = new THREE.BoxGeometry();
        let material = new THREE.MeshBasicMaterial({color: colour});
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
    

        camera.position.z = 5;

        let animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };
        animate();
    },[colour]);
    
    return (
    
    <div  ref={refContainer}></div>
    )
};
