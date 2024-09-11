import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import stars from './stars.jpg';
import sunTexture from './sun texture.jpg';
import mercuryTexture from './mercury texture.jpeg';
import venusTexture from './venus texture.jpeg';
import earthTexture from './earth texture.jpg';
import marsTexture from './mars texture.jpg';
import jupitorTexture from './jupiter texture.jpg';
import saturnTexture from './saturn texture.jpg';
// import saturnRingTexture from './saturnring texture.jpg';
import urenusTexture from './uranus texture.jpg';
import neptuneTexture from './neptune texture.jpg';


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.set(-20, 5, 10);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
// scene.add(ambientLight);

const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(stars);
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([stars, stars, stars, stars, stars, stars]);


/////////////////////////////////      PLANETS        //////////////////////////////////

const sunGeometry = new THREE.SphereGeometry(5, 50, 50);
const sunMaterial = new THREE.MeshBasicMaterial({ map: textureLoader.load(sunTexture) });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const pointLight = new THREE.PointLight(0xffffff, 600, 300);
// pointLight.castShadow = true;
scene.add(pointLight);

const mercuryGeometry = new THREE.SphereGeometry(0.05, 50, 50);
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(mercuryTexture) });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
const mercuryObj = new THREE.Object3D();
mercuryObj.add(mercury);
scene.add(mercuryObj);

const venusGeometry = new THREE.SphereGeometry(0.2, 50, 50);
const venusMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(venusTexture) });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
const venusObj = new THREE.Object3D();
venusObj.add(venus);
scene.add(venusObj);

const earthGeometry = new THREE.SphereGeometry(0.25, 50, 50);
const earthMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(earthTexture) });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
const earthObj = new THREE.Object3D();
earthObj.add(earth);
scene.add(earthObj);

const marsGeometry = new THREE.SphereGeometry(0.1, 50, 50);
const marsMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(marsTexture) });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
const marsObj = new THREE.Object3D();
marsObj.add(mars);
scene.add(marsObj);

const jupitorGeometry = new THREE.SphereGeometry(1, 50, 50);
const jupitorMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(jupitorTexture) });
const jupitor = new THREE.Mesh(jupitorGeometry, jupitorMaterial);
const jupitorObj = new THREE.Object3D();
jupitorObj.add(jupitor);
scene.add(jupitorObj);

const saturnGeometry = new THREE.SphereGeometry(0.7, 50, 50);
const saturnMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(saturnTexture) });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
const saturnObj = new THREE.Object3D();
saturnObj.add(saturn);
scene.add(saturnObj);
const saturnRingGeometry = new THREE.RingGeometry(0.8, 1.4, 35);
const saturnRingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(saturnTexture), side: THREE.DoubleSide });
const saturnRing = new THREE.Mesh(saturnRingGeometry, saturnRingMaterial);
saturnObj.add(saturnRing);

const urenusGeometry = new THREE.SphereGeometry(0.5, 50, 50);
const urenusMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(urenusTexture) });
const urenus = new THREE.Mesh(urenusGeometry, urenusMaterial);
const urenusObj = new THREE.Object3D();
urenusObj.add(urenus);
scene.add(urenusObj);
const urenusRingGeometry = new THREE.RingGeometry(0.6, 0.8, 35);
const urenusRingMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(saturnTexture), side: THREE.DoubleSide });
const urenusRing = new THREE.Mesh(urenusRingGeometry, urenusRingMaterial);
urenusObj.add(urenusRing);

const neptuneGeometry = new THREE.SphereGeometry(0.4, 50, 50);
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(neptuneTexture) });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
const neptuneObj = new THREE.Object3D();
neptuneObj.add(neptune);
scene.add(neptuneObj);

// sun.add(earth,mars);
mercury.position.x = 6;
venus.position.x = 7;
earth.position.x = 8;
mars.position.x = 9;
jupitor.position.x = 11;
saturn.position.x = 14;
saturnRing.rotation.x = -0.5 * Math.PI;
saturnRing.position.x = 14;
urenus.position.x = 17;
urenusRing.position.x = 17;
urenusRing.rotation.x = -0.5 * Math.PI;
neptune.position.x = 19;


function animate() {
    sun.rotateY(0.005);
    mercury.rotateY(0.01);
    mercuryObj.rotateY(0.015);
    venus.rotateY(0.01);
    venusObj.rotateY(0.013);
    earth.rotateY(0.01);
    earthObj.rotateY(0.012);
    mars.rotateY(0.01);
    marsObj.rotateY(0.01);
    jupitor.rotateY(0.01);
    jupitorObj.rotateY(0.012);
    saturn.rotateY(0.01);
    saturnObj.rotateY(0.015);
    urenus.rotateY(0.01);
    urenusObj.rotateY(0.016);
    neptune.rotateY(0.01);
    neptuneObj.rotateY(0.014);

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);