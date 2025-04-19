import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Three.js scene for background
const initBackgroundScene = () => {
  const canvas = document.querySelector('#canvas-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvas.appendChild(renderer.domElement);
  
  // Add stars
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = window.innerWidth < 768 ? 3000 : 5000; // Fewer particles on mobile
  
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);
  
  const colorPalette = [
    new THREE.Color(0xaaa6c3), // Default color
    new THREE.Color(0x8a86a3), // Slightly darker
    new THREE.Color(0x7a76b3), // Purplish
    new THREE.Color(0x4c6ef5), // Blue accent
  ];
  
  for (let i = 0; i < particlesCount; i++) {
    // Position
    posArray[i * 3] = (Math.random() - 0.5) * 10;      // x
    posArray[i * 3 + 1] = (Math.random() - 0.5) * 10;  // y
    posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;  // z
    
    // Random color from palette
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colorsArray[i * 3] = color.r;      // r
    colorsArray[i * 3 + 1] = color.g;  // g
    colorsArray[i * 3 + 2] = color.b;  // b
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.015,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Add more visual elements - floating shapes
  const shapes = [];
  const shapeGroup = new THREE.Group();
  scene.add(shapeGroup);
  
  // Create several geometric shapes
  const createShape = () => {
    const geometries = [
      new THREE.TetrahedronGeometry(0.3, 0),
      new THREE.OctahedronGeometry(0.3, 0),
      new THREE.IcosahedronGeometry(0.3, 0),
      new THREE.TorusGeometry(0.3, 0.1, 16, 32)
    ];
    
    const geometry = geometries[Math.floor(Math.random() * geometries.length)];
    const material = new THREE.MeshStandardMaterial({
      color: colorPalette[Math.floor(Math.random() * colorPalette.length)].getHex(),
      wireframe: Math.random() > 0.5,
      transparent: true,
      opacity: 0.7,
      metalness: 0.3,
      roughness: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // Random position
    mesh.position.set(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8
    );
    
    mesh.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    );
    
    // Random rotation speeds
    mesh.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      },
      floatSpeed: 0.005 + Math.random() * 0.005,
      floatDistance: 0.2 + Math.random() * 0.3,
      initialY: mesh.position.y,
      floatOffset: Math.random() * Math.PI * 2 // Random starting point in sin wave
    };
    
    shapes.push(mesh);
    shapeGroup.add(mesh);
  };
  
  // Add shapes based on screen size
  const shapeCount = window.innerWidth < 768 ? 5 : 8;
  for (let i = 0; i < shapeCount; i++) {
    createShape();
  }
  
  // Add light to scene
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8);
  pointLight.position.set(2, 3, 4);
  scene.add(pointLight);

  // Add second directional light
  const directionalLight = new THREE.DirectionalLight(0x4c6ef5, 0.5);
  directionalLight.position.set(-5, 2, 2);
  scene.add(directionalLight);
  
  // Position camera
  camera.position.z = 4;
  
  // Mouse/touch movement effect
  let mouseX = 0;
  let mouseY = 0;
  let touchStartX = 0;
  let touchStartY = 0;
  
  const handleMouseMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  };
  
  // Handle touch events for mobile
  const handleTouchStart = (event) => {
    if (event.touches.length === 1) {
      touchStartX = event.touches[0].pageX;
      touchStartY = event.touches[0].pageY;
    }
  };
  
  const handleTouchMove = (event) => {
    if (event.touches.length === 1) {
      const touchX = event.touches[0].pageX;
      const touchY = event.touches[0].pageY;
      
      mouseX = (touchX / window.innerWidth) * 2 - 1;
      mouseY = -(touchY / window.innerHeight) * 2 + 1;
      
      // Hindari mencegah scrolling default halaman
      // event.preventDefault(); -- hapus ini untuk mengizinkan scrolling normal
    }
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('touchstart', handleTouchStart, { passive: true });
  window.addEventListener('touchmove', handleTouchMove, { passive: true });
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Adjust particle count for mobile
    if (window.innerWidth < 768 && particlesCount > 3000) {
      // This won't actually change the number of particles in real-time
      // but it's a good practice to acknowledge the change
      console.log("Switched to mobile view");
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  // Animation loop
  let time = 0;
  const animate = () => {
    time += 0.01;
    requestAnimationFrame(animate);
    
    // Rotate particles slowly
    particlesMesh.rotation.y += 0.0003;
    
    // Move particles based on mouse position
    particlesMesh.rotation.x += mouseY * 0.0003;
    particlesMesh.rotation.y += mouseX * 0.0003;
    
    // Animate shapes
    shapes.forEach(shape => {
      // Rotate each shape
      shape.rotation.x += shape.userData.rotationSpeed.x;
      shape.rotation.y += shape.userData.rotationSpeed.y;
      shape.rotation.z += shape.userData.rotationSpeed.z;
      
      // Add floating animation
      shape.position.y = shape.userData.initialY + 
                        Math.sin(time + shape.userData.floatOffset) * 
                        shape.userData.floatDistance;
    });
    
    // Subtle movement of the entire shape group
    shapeGroup.rotation.y = Math.sin(time * 0.1) * 0.1;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  return { scene, camera, renderer };
};

// Initialize Three.js scene for 3D model
const init3DModelScene = () => {
  const container = document.getElementById('model-container');
  
  if (!container) return;
  
  // Set container height berdasarkan ukuran layar
  const setContainerHeight = () => {
    if (window.innerWidth <= 768) {
      container.style.height = '300px';
    } else {
      container.style.height = '500px';
    }
  };
  
  setContainerHeight();
  window.addEventListener('resize', setContainerHeight);
  
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000510); // Warna background lebih gelap untuk luar angkasa
  
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  
  // Ambient light untuk pencahayaan dasar
  const ambientLight = new THREE.AmbientLight(0x333333, 0.5);
  scene.add(ambientLight);
  
  // Point light untuk matahari
  const sunLight = new THREE.PointLight(0xffffff, 2.0, 100);
  sunLight.position.set(0, 0, 0);
  scene.add(sunLight);
  
  // Tambahkan cahaya tambahan untuk menerangi planet dari arah samping
  const additionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  additionalLight.position.set(10, 15, 10);
  scene.add(additionalLight);
  
  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.rotateSpeed = 0.8;
  controls.enableZoom = true;
  controls.zoomSpeed = 0.8;
  controls.enablePan = false; // Disable panning for better UX
  
  // Add visual indicator for interaction
  const interactionHelper = document.createElement('div');
  interactionHelper.className = 'interaction-helper';
  interactionHelper.innerHTML = `
    <div class="interaction-icon">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
        <path d="M14 8l-4 4 4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
        <path d="M10 8l4 4-4 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    </div>
    <span class="lang-text" data-lang-id="rotate-solar-system">Geser untuk memutar model tata surya</span>
  `;
  container.appendChild(interactionHelper);
  
  // Hide helper after interaction (mouse or touch)
  const hideInteractionHelper = () => {
    interactionHelper.classList.add('fadeout');
    setTimeout(() => {
      interactionHelper.style.display = 'none';
    }, 1000);
  };
  
  // Desktop event
  container.addEventListener('mousedown', hideInteractionHelper);
  
  // Mobile events
  container.addEventListener('touchstart', (e) => {
    // Jangan sembunyikan dulu, tunggu ada gerakan atau touch end
    container.touchStarted = true;
  });
  
  container.addEventListener('touchmove', (e) => {
    // Hanya sembunyikan jika sudah ada touchstart sebelumnya
    if (container.touchStarted) {
      hideInteractionHelper();
      container.touchStarted = false;
    }
  });
  
  container.addEventListener('touchend', (e) => {
    // Jika user hanya tap tanpa geser, sembunyikan juga
    if (container.touchStarted) {
      hideInteractionHelper();
      container.touchStarted = false;
    }
  });
  
  // Position camera
  camera.position.z = 30;
  camera.position.y = 15;
  camera.lookAt(0, 0, 0);
  
  // Membuat sistem tata surya
  const solarSystem = new THREE.Group();
  scene.add(solarSystem);
  
  // Texture loader
  const textureLoader = new THREE.TextureLoader();
  
  // Matahari
  const sunGeometry = new THREE.SphereGeometry(5, 32, 32); // Perbesar ukuran matahari dari 4 ke 5
  const sunMaterial = new THREE.MeshBasicMaterial({
    color: 0xffdd00,
    emissive: 0xff9900,
    emissiveIntensity: 0.7
  });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  solarSystem.add(sun);
  
  // Membuat bintang latar
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1
  });
  
  const starsVertices = [];
  for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;
    starsVertices.push(x, y, z);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Definisi planet (radius, jarak dari matahari, kecepatan orbit, warna, nama)
  const planets = [
    { radius: 0.8, distance: 7, speed: 0.01, color: 0xff6347, name: 'Merkurius' },
    { radius: 1.5, distance: 15, speed: 0.008, color: 0xffa07a, name: 'Venus' }, // Ubah jarak Venus ke 15 dari 11
    { radius: 1.6, distance: 20, speed: 0.006, color: 0x4169e1, name: 'Bumi' },  // Ubah jarak Bumi ke 20 dari 15
    { radius: 1.2, distance: 25, speed: 0.004, color: 0xff4500, name: 'Mars' },  // Ubah jarak Mars ke 25 dari 19
    { radius: 3.0, distance: 31, speed: 0.002, color: 0xffec73, name: 'Jupiter' }, // Sesuaikan posisi
    { radius: 2.5, distance: 38, speed: 0.001, color: 0xffe5b4, name: 'Saturnus' }, // Sesuaikan posisi
    { radius: 1.8, distance: 45, speed: 0.0008, color: 0x4fd3c4, name: 'Uranus' }, // Kurangi ukuran dari 2.2 ke 1.8
    { radius: 1.7, distance: 52, speed: 0.0005, color: 0x4169e1, name: 'Neptunus' } // Kurangi ukuran dari 2.1 ke 1.7
  ];
  
  // Membuat cincin Saturnus
  const createSaturnRings = (planet) => {
    const ringGeometry = new THREE.RingGeometry(planet.radius + 0.7, planet.radius + 2, 32);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    return ring;
  };
  
  // Membuat bulan untuk Bumi dengan orbit lebih besar
  const createMoon = (planet) => {
    const moonGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const moonMaterial = new THREE.MeshStandardMaterial({
      color: 0xe6e6e6,
      roughness: 0.5,
      metalness: 0.2,
      emissive: 0x555555,
      emissiveIntensity: 0.1
    });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    moon.position.x = planet.radius + 2.5; // Perbesar jarak orbit bulan dari 1.5 ke 2.5
    
    const moonSystem = new THREE.Group();
    moonSystem.add(moon);
    moonSystem.userData = { 
      speed: 0.03,
      moonObject: moon // Simpan referensi objek bulan
    };
    
    return moonSystem;
  };
  
  // Fungsi untuk membuat tekstur Bumi sederhana dengan daratan hijau dan lautan biru
  const createEarthTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna laut biru
    context.fillStyle = '#1a66cc';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan kutub Utara dan Selatan dengan warna putih
    context.fillStyle = '#ffffff';
    
    // Kutub Utara
    context.beginPath();
    context.ellipse(canvas.width / 2, 0, canvas.width / 3, 25, 0, 0, Math.PI * 2);
    context.fill();
    
    // Kutub Selatan
    context.beginPath();
    context.ellipse(canvas.width / 2, canvas.height, canvas.width / 3, 25, 0, 0, Math.PI * 2);
    context.fill();
    
    // Tambahkan daratan dengan warna hijau
    context.fillStyle = '#33cc33';
    
    // Benua Eropa dan Asia
    context.beginPath();
    context.moveTo(350, 80);
    context.lineTo(400, 60);
    context.lineTo(450, 100);
    context.lineTo(420, 150);
    context.lineTo(350, 140);
    context.fill();
    
    // Benua Afrika
    context.beginPath();
    context.moveTo(360, 150);
    context.lineTo(380, 180);
    context.lineTo(350, 220);
    context.lineTo(330, 200);
    context.lineTo(340, 150);
    context.fill();
    
    // Benua Amerika
    context.beginPath();
    context.moveTo(250, 70);
    context.lineTo(280, 100);
    context.lineTo(270, 150);
    context.lineTo(280, 200);
    context.lineTo(240, 180);
    context.lineTo(230, 120);
    context.fill();
    
    // Australia
    context.beginPath();
    context.moveTo(450, 180);
    context.lineTo(480, 190);
    context.lineTo(470, 220);
    context.lineTo(440, 210);
    context.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Mars dengan pola berupa lempeng merah dan kawah
  const createMarsTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Mars (kemerahan)
    context.fillStyle = '#c1440e';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan beberapa area gelap (lempeng)
    context.fillStyle = '#8c3310';
    
    // Area gelap utara
    context.beginPath();
    context.ellipse(canvas.width / 3, canvas.height / 4, 80, 60, 0, 0, Math.PI * 2);
    context.fill();
    
    // Area gelap selatan
    context.beginPath();
    context.ellipse(canvas.width * 0.7, canvas.height * 0.7, 100, 50, Math.PI / 4, 0, Math.PI * 2);
    context.fill();
    
    // Tambahkan es kutub dengan warna putih
    context.fillStyle = '#ffffff';
    
    // Kutub utara
    context.beginPath();
    context.ellipse(canvas.width / 2, 10, canvas.width / 4, 20, 0, 0, Math.PI * 2);
    context.fill();
    
    // Kutub selatan
    context.beginPath();
    context.ellipse(canvas.width / 2, canvas.height - 10, canvas.width / 5, 15, 0, 0, Math.PI * 2);
    context.fill();
    
    // Tambahkan beberapa kawah
    context.fillStyle = '#a03a0e';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 2 + Math.random() * 8;
      
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Venus dengan pola awan
  const createVenusTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Venus yang lebih kuning oranye
    context.fillStyle = '#f7b951';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan lapisan awan dengan gradient yang lebih kuning dan oranye
    const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f7bf5e');
    gradient.addColorStop(0.3, '#e6981c');
    gradient.addColorStop(0.6, '#f5a621');
    gradient.addColorStop(1, '#e8922a');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan pola awan dengan warna lebih oranye kuat
    context.fillStyle = '#fac969';
    
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 40 + Math.random() * 80;
      const height = 20 + Math.random() * 40;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    // Tambahkan variasi warna dengan beberapa goresan yg lebih kecoklatan
    context.fillStyle = '#e5872e';
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 30 + Math.random() * 60;
      const height = 10 + Math.random() * 30;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Jupiter dengan pola belang-belang
  const createJupiterTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Jupiter (krem)
    context.fillStyle = '#e1c47e';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan pola belang-belang
    const stripeColors = ['#d6a854', '#e1c47e', '#a67939', '#e1c47e', '#865923', '#e1c47e'];
    
    for (let i = 0; i < 6; i++) {
      context.fillStyle = stripeColors[i];
      context.fillRect(0, i * canvas.height / 6, canvas.width, canvas.height / 6);
    }
    
    // Tambahkan badai besar (seperti Great Red Spot)
    context.fillStyle = '#cc6633';
    context.beginPath();
    context.ellipse(canvas.width * 0.7, canvas.height * 0.4, 60, 30, 0, 0, Math.PI * 2);
    context.fill();
    
    // Tambahkan detail awan
    context.fillStyle = '#f3dca0';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 20 + Math.random() * 50;
      const height = 5 + Math.random() * 15;
      
      context.beginPath();
      context.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Saturnus
  const createSaturnTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Saturnus (kuning pucat)
    context.fillStyle = '#e6d9a3';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan pola belang-belang (lebih pucat dari Jupiter)
    const stripeColors = ['#e6d9a3', '#d3c78e', '#e6d9a3', '#c3b87f', '#e6d9a3'];
    
    for (let i = 0; i < 5; i++) {
      context.fillStyle = stripeColors[i];
      context.fillRect(0, i * canvas.height / 5, canvas.width, canvas.height / 5);
    }
    
    // Tambahkan detail awan yang halus
    context.fillStyle = '#f1e5b7';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 30 + Math.random() * 60;
      const height = 5 + Math.random() * 10;
      
      context.beginPath();
      context.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Merkurius dengan pola kawah
  const createMercuryTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Merkurius (abu-abu kecoklatan)
    context.fillStyle = '#8c8275';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan pola kawah
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = 2 + Math.random() * 10;
      
      // Beberapa kawah lebih terang
      if (Math.random() > 0.7) {
        context.fillStyle = '#a59c8e';
      } else {
        context.fillStyle = '#6e665c';
      }
      
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Uranus dengan pola belang-belang biru-hijau
  const createUranusTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Uranus (biru-hijau muda)
    context.fillStyle = '#b3e0e0';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan gradient warna untuk membuat efek atmosfer
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#88d8c0');
    gradient.addColorStop(0.2, '#a3e0d9');
    gradient.addColorStop(0.4, '#b3e0e0');
    gradient.addColorStop(0.6, '#a3e0d9');
    gradient.addColorStop(0.8, '#88d8c0');
    gradient.addColorStop(1, '#b3e0e0');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan beberapa pola awan halus
    context.fillStyle = '#c9f0ee';
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 40 + Math.random() * 80;
      const height = 10 + Math.random() * 20;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    // Tambahkan detail awan yang lebih terang
    context.fillStyle = '#e0ffff';
    for (let i = 0; i < 10; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 20 + Math.random() * 40;
      const height = 5 + Math.random() * 10;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Fungsi untuk membuat tekstur Neptunus dengan pola belang-belang biru tua
  const createNeptuneTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext('2d');
    
    // Warna dasar Neptunus (biru tua)
    context.fillStyle = '#1a56b8';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan gradient warna untuk membuat efek atmosfer
    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1a3a8a');
    gradient.addColorStop(0.3, '#1a56b8');
    gradient.addColorStop(0.5, '#3a6cd2');
    gradient.addColorStop(0.7, '#1a56b8');
    gradient.addColorStop(1, '#1a3a8a');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Tambahkan Great Dark Spot
    context.fillStyle = '#0d2b6b';
    context.beginPath();
    context.ellipse(canvas.width * 0.6, canvas.height * 0.4, 60, 30, 0, 0, Math.PI * 2);
    context.fill();
    
    // Tambahkan beberapa pola awan
    context.fillStyle = '#3a6cd2';
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 30 + Math.random() * 70;
      const height = 10 + Math.random() * 20;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    // Tambahkan detail awan yang lebih terang
    context.fillStyle = '#5e8be0';
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = 20 + Math.random() * 40;
      const height = 5 + Math.random() * 10;
      
      context.beginPath();
      context.ellipse(x, y, width, height, Math.random() * Math.PI, 0, Math.PI * 2);
      context.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };
  
  // Membuat cincin Uranus
  const createUranusRings = (planet) => {
    const ringGeometry = new THREE.RingGeometry(planet.radius + 0.5, planet.radius + 1.2, 32); // Kurangi ukuran cincin
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x88d8c0,
      side: THREE.DoubleSide,
    transparent: true, 
      opacity: 0.4 // Kurangi opacity dari 0.6 ke 0.4
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    // Uranus memiliki cincin yang hampir tegak lurus dengan orbit
    ring.rotation.x = Math.PI / 12;
    ring.rotation.z = Math.PI / 2;
    return ring;
  };
  
  // Membuat planet-planet
  const planetMeshes = planets.map((planetData, index) => {
    const planetGroup = new THREE.Group(); // Group untuk planet dan orbit
    
    // Membuat orbit
    const orbitGeometry = new THREE.BufferGeometry();
    const orbitMaterial = new THREE.LineBasicMaterial({
      color: 0x444444,
    transparent: true, 
      opacity: 0.3
    });
    
    const orbitPoints = [];
    const orbitSegments = 128;
    for (let i = 0; i <= orbitSegments; i++) {
      const angle = (i / orbitSegments) * Math.PI * 2;
      orbitPoints.push(
        Math.cos(angle) * planetData.distance,
        0,
        Math.sin(angle) * planetData.distance
      );
    }
    
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(orbitPoints, 3));
    const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
    solarSystem.add(orbit);
    
    // Membuat planet
    const planetGeometry = new THREE.SphereGeometry(planetData.radius, 32, 16);
    
    let planetMaterial;
    
    // Berikan tekstur khusus untuk Bumi
    if (planetData.name === 'Bumi') {
      const earthTexture = createEarthTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: earthTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else if (planetData.name === 'Mars') {
      const marsTexture = createMarsTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: marsTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else if (planetData.name === 'Venus') {
      const venusTexture = createVenusTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: venusTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissive: 0xf5a621,
        emissiveIntensity: 0.3
      });
    } else if (planetData.name === 'Jupiter') {
      const jupiterTexture = createJupiterTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: jupiterTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else if (planetData.name === 'Saturnus') {
      const saturnTexture = createSaturnTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: saturnTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else if (planetData.name === 'Merkurius') {
      const mercuryTexture = createMercuryTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
        roughness: 0.5,
        metalness: 0.4,
        emissiveIntensity: 0.1
      });
    } else if (planetData.name === 'Uranus') {
      const uranusTexture = createUranusTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: uranusTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else if (planetData.name === 'Neptunus') {
      const neptuneTexture = createNeptuneTexture();
      planetMaterial = new THREE.MeshStandardMaterial({
        map: neptuneTexture,
        roughness: 0.4,
        metalness: 0.3,
        emissiveIntensity: 0.2
      });
    } else {
      planetMaterial = new THREE.MeshStandardMaterial({
        color: planetData.color,
        roughness: 0.4,
        metalness: 0.3,
        emissive: planetData.color,
        emissiveIntensity: 0.2
      });
    }
    
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    
    // Posisi awal planet - berbeda setiap planet untuk menghindari tabrakan
    const startAngle = (index / planets.length) * Math.PI * 2;
    planet.position.x = Math.cos(startAngle) * planetData.distance;
    planet.position.z = Math.sin(startAngle) * planetData.distance;
    
    // Tambahkan planet ke group dan group ke solar system
    planetGroup.add(planet);
    solarSystem.add(planetGroup);
    
    // Tambahkan cincin Saturnus jika ini Saturnus
    if (planetData.name === 'Saturnus') {
      const rings = createSaturnRings(planetData);
      planet.add(rings);
    }
    
    // Tambahkan cincin Uranus jika ini Uranus
    if (planetData.name === 'Uranus') {
      const rings = createUranusRings(planetData);
      planet.add(rings);
    }
    
    // Tambahkan bulan jika ini Bumi
    if (planetData.name === 'Bumi') {
      const moonSystem = createMoon(planetData);
      planet.add(moonSystem);
      planetGroup.userData = { moonSystem };
    }
    
    // Simpan data planet di userData
    planetGroup.userData = { ...planetData, angle: startAngle };
    
    return planetGroup;
  });
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Animate sun (rotate)
    sun.rotation.y += 0.003; // Perlambat rotasi matahari
    
    // Simpan posisi Venus untuk pengecekan tabrakan
    let venusPosition = new THREE.Vector3();
    let venusGroup = null;
    
    // Animate planet orbits
    planetMeshes.forEach(planetGroup => {
      const planet = planetGroup.children[0];
      const data = planetGroup.userData;
      
      // Simpan referensi ke Venus
      if (data.name === 'Venus') {
        venusGroup = planetGroup;
      }
      
      // Update orbit angle - perlambat kecepatan orbit
      data.angle += data.speed * 0.3;
      
      // Update position based on angle
      planet.position.x = 0; // Reset posisi relatif terhadap planet group
      planet.position.z = 0;
      planetGroup.position.x = Math.cos(data.angle) * data.distance;
      planetGroup.position.z = Math.sin(data.angle) * data.distance;
      
      // Rotate planet - perlambat rotasi planet
      planet.rotation.y += data.speed * 0.8;
      
      // Jika ini Venus, simpan posisinya untuk pengecekan tabrakan
      if (data.name === 'Venus') {
        venusPosition.set(
          planetGroup.position.x,
          planetGroup.position.y,
          planetGroup.position.z
        );
      }
      
      // Animate moon if this is Earth
      if (data.name === 'Bumi' && data.moonSystem) {
        data.moonSystem.rotation.y += data.moonSystem.userData.speed * 0.5; // Perlambat rotasi bulan
        
        // Hitung posisi absolut bulan di ruang dunia
        if (venusGroup) {
          const moonObj = data.moonSystem.userData.moonObject;
          // Dapatkan posisi bulan dalam koordinat dunia
          const moonWorldPos = new THREE.Vector3();
          moonObj.getWorldPosition(moonWorldPos);
          
          // Hitung jarak antara bulan dan Venus
          const distanceToVenus = moonWorldPos.distanceTo(venusPosition);
          
          // Jika terlalu dekat dengan Venus (tabrakan), buat bulan "mental"
          if (distanceToVenus < 3) {
            // Ubah kecepatan dan arah rotasi bulan
            const currentSpeed = data.moonSystem.userData.speed;
            data.moonSystem.userData.speed = -currentSpeed * 1.5; // Balik arah dengan kecepatan lebih tinggi
            
            // Tambahkan efek visual tabrakan (opsional)
            moonObj.material.emissive.set(0xff0000);
            setTimeout(() => {
              moonObj.material.emissive.set(0x555555);
            }, 300);
          }
        }
      }
    });
    
    // Update controls
    controls.update();
    
    // Render the scene
    renderer.render(scene, camera);
  };
  
  // Start animation
  animate();
};

// Scroll animations with GSAP
const initScrollAnimations = () => {
  // Hero section animations
  gsap.to('#hero-title', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5
  });
  
  gsap.to('#hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.8
  });
  
  gsap.to('#hero-button', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.1
  });
  
  gsap.to('#scroll-indicator', {
    opacity: 1,
    duration: 1,
    delay: 2
  });
  
  // About section animations with more advanced effects
  ScrollTrigger.batch('.about-card', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    },
    start: 'top 80%'
  });
  
  ScrollTrigger.batch('.about-image', {
    onEnter: (elements) => {
      gsap.to(elements, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.3
      });
      
      // Add subtle floating animation after appearing
      gsap.to(elements, {
        y: -15,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5
      });
    },
    start: 'top 80%'
  });
  
  // Skills section animations
  gsap.to('.skills-title', {
    scrollTrigger: {
      trigger: '.skills-title',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  
  // More dynamic skill cards animation
  ScrollTrigger.batch('.skill-card', {
    onEnter: (elements) => {
      // Reset any inline styles
      gsap.set(elements, {
        clearProps: "all"
      });
      
      // Main animation
      gsap.fromTo(elements, 
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotationY: 30
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.5)"
        }
      );
      
      // Add hover effect
      elements.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.4,
            ease: "power1.out"
          });
          
          // Find the image inside and animate it
          const img = card.querySelector('img');
          if (img) {
            gsap.to(img, {
              rotation: 360,
              duration: 0.8,
              ease: "power1.inOut"
            });
          }
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power1.out"
          });
        });
      });
    },
    start: 'top 85%'
  });
  
  // 3D model section animations
  gsap.to('.model-title', {
    scrollTrigger: {
      trigger: '.model-title',
      start: 'top 80%'
    },
    opacity: 1,
    duration: 1,
    y: 0,
    ease: "power2.out",
    onComplete: () => {
      // Animate Indonesia time after title animation completes
      gsap.to('#indonesia-time', {
        opacity: 1,
        y: 0,
        duration: 0.8,
    ease: "power2.out"
      });
    }
  });
  
  gsap.to('#model-container', {
    scrollTrigger: {
      trigger: '#model-container',
      start: 'top 80%'
    },
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: "power3.out"
  });
  
  gsap.to('.model-description', {
    scrollTrigger: {
      trigger: '.model-description',
      start: 'top 90%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out"
  });
  
  // Portfolio gallery animations
  gsap.to('.gallery-title', {
    scrollTrigger: {
      trigger: '.gallery-title',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  
  ScrollTrigger.batch('.portfolio-item', {
    onEnter: (elements) => {
      gsap.fromTo(elements,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.2)"
        }
      );
    },
    start: 'top 85%'
  });
  
  // Contact section animations
  gsap.to('.contact-title', {
    scrollTrigger: {
      trigger: '.contact-title',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
  
  gsap.to('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
  });
  
  // Add parallax effect to background
  if (window.innerWidth > 768) {
    document.querySelectorAll('section').forEach(section => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5
        },
        y: (i, target) => -50 * (1 - target.dataset.speed || 0.2),
        ease: "none"
      });
    });
  }
};

// Smooth scrolling for navigation
const initSmoothScroll = () => {
  const heroButton = document.getElementById('hero-button');
  if (heroButton) {
    heroButton.addEventListener('click', () => {
      const aboutSection = document.querySelector('section:nth-of-type(2)');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Add subtle nav indicator highlighting current section
  const sections = document.querySelectorAll('section');
  
  const updateNavIndicator = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // We'd update a nav indicator here if we had one
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });
  };
  
  window.addEventListener('scroll', updateNavIndicator);
};

// Make a dynamic cursor for desktop users
const initCustomCursor = () => {
  // Skip cursor creation for mobile devices
  if (window.innerWidth <= 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0) return;
  
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  // Ganti dengan direct positioning tanpa gsap animation untuk mengurangi delay
  const moveCursor = (e) => {
    // Gunakan direct style manipulation daripada gsap animation
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  };
  
  window.addEventListener('mousemove', moveCursor);
  
  // Change cursor style on hover over interactive elements
  const interactiveElements = document.querySelectorAll('button, .skill-card, #model-container, a, input, textarea, .social-link, .portfolio-item, .view-button');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
};

// Initialize preloader
const initPreloader = () => {
  const preloader = document.createElement('div');
  preloader.className = 'preloader';
  preloader.innerHTML = `
    <div class="preloader-content">
      <div class="spinner"></div>
      <div class="loading-text">Memuat...</div>
    </div>
  `;
  document.body.appendChild(preloader);
  
  // Buat animasi intro hujan komet yang akan dimulai setelah preloader selesai
  const createCometShower = () => {
    const cometContainer = document.createElement('div');
    cometContainer.className = 'comet-container';
    document.body.appendChild(cometContainer);
    
    // Tambahkan bintang-bintang di latar belakang
    const createStars = () => {
      const starsCount = 0; // Ubah jumlah bintang menjadi 0 untuk menghilangkan semua bintang
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = 0.5 + Math.random() * 1.5; // 0.5-2px
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = 0.5 + Math.random() * 0.5; // 0.5-1
        const blinkDuration = 1 + Math.random() * 5; // 1-6s
        
        star.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          background-color: white;
          border-radius: 50%;
          top: ${y}%;
          left: ${x}%;
          opacity: ${opacity};
          box-shadow: 0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.8);
          animation: starBlink ${blinkDuration}s infinite alternate ease-in-out;
          z-index: 998;
        `;
        
        cometContainer.appendChild(star);
      }
    };
    
    // Bintang tidak dibuat karena jumlahnya 0
    // createStars();
    
    // Titik radiant dari mana meteor terlihat berasal
    const radiantX = 70 + Math.random() * 20; // 70-90% dari kiri (kanan layar)
    const radiantY = 10 + Math.random() * 10; // 10-20% dari atas (bagian atas layar)
    
    // Fungsi untuk membuat komet realistis dengan inti dan ekor
    const createRealisticComet = (isMainComet = false, positionOffset = 0) => {
      // Parameter komet
      const startX = radiantX + (positionOffset * 10); // Gunakan offset untuk memisahkan posisi start
      const startY = radiantY + (positionOffset * 5);
      const size = isMainComet ? 6 + Math.random() * 4 : 2 + Math.random() * 3;
      const rotation = 215 + Math.random() * 15; // 215-230 derajat - arah diagonal kiri bawah
      const duration = 2.5; // Durasi tetap untuk semua komet: 2.5 detik
      const delay = isMainComet ? 0.1 : 0.1 + positionOffset * 0.2; // Delay berdasarkan offset
      
      // Buat grup komet
      const cometGroup = document.createElement('div');
      cometGroup.className = 'comet-group';
      
      // Posisi komet
      cometGroup.style.cssText = `
        position: fixed;
        top: ${startY}%;
        left: ${startX}%;
        width: 0;
        height: 0;
        z-index: 9999;
        transform-origin: center;
        transform: rotate(${rotation}deg);
        opacity: 0;
      `;
      
      // 1. Buat inti komet (nucleus)
      const nucleus = document.createElement('div');
      nucleus.className = 'comet-nucleus';
      nucleus.style.cssText = `
        position: absolute;
        width: ${isMainComet ? size * 1.5 : size}px;
        height: ${isMainComet ? size * 1.5 : size}px;
        background-color: ${isMainComet ? '#e6e6e6' : '#c4c4c4'};
        border-radius: 50%;
        top: -${size / 2}px;
        left: -${size / 2}px;
        z-index: 10001;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
      `;
      
      // 2. Buat koma (selubung cahaya di sekitar inti)
      const coma = document.createElement('div');
      coma.className = 'comet-coma';
      const comaSize = size * (isMainComet ? 10 : 6);
      coma.style.cssText = `
        position: absolute;
        width: ${comaSize}px;
        height: ${comaSize}px;
        background: radial-gradient(circle, 
          rgba(255, 255, 255, 0.9) 1%, 
          rgba(255, 255, 255, 0.7) 20%, 
          rgba(255, 255, 255, 0.3) 50%, 
          rgba(255, 255, 255, 0) 80%);
        border-radius: 50%;
        top: -${comaSize / 2}px;
        left: -${comaSize / 2}px;
        z-index: 10000;
        filter: blur(${isMainComet ? 1 : 0.5}px);
      `;
      
      // 3. Buat ekor gas (kebiruan, lurus, mengarah ke atas/belakang dari inti)
      const ionTail = document.createElement('div');
      ionTail.className = 'comet-ion-tail';
      const ionTailLength = isMainComet ? size * 30 : size * 20;
      ionTail.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${size}px;
        height: ${ionTailLength}px;
        background: linear-gradient(to top, 
          rgba(112, 173, 255, 0.8) 0%, 
          rgba(112, 173, 255, 0.5) 30%, 
          rgba(112, 173, 255, 0.2) 60%, 
          rgba(112, 173, 255, 0) 100%);
        z-index: 9999;
        transform-origin: bottom;
        transform: translateX(-${size/2}px) rotate(180deg);
        filter: blur(1px);
      `;
      
      // 4. Buat ekor debu (keputihan/kekuningan, melengkung sedikit)
      const dustTail = document.createElement('div');
      dustTail.className = 'comet-dust-tail';
      const dustTailLength = isMainComet ? size * 25 : size * 15;
      const dustTailWidth = isMainComet ? size * 8 : size * 5;
      dustTail.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: ${dustTailWidth}px;
        height: ${dustTailLength}px;
        background: linear-gradient(to top, 
          rgba(255, 246, 209, 0.7) 0%, 
          rgba(255, 246, 209, 0.4) 40%, 
          rgba(255, 246, 209, 0.1) 70%, 
          rgba(255, 246, 209, 0) 100%);
        border-radius: 50% 50% 30% 30%;
        z-index: 9998;
        transform-origin: bottom;
        transform: translateX(-${dustTailWidth/2}px) rotate(175deg);
        filter: blur(2px);
      `;
      
      // Tambahkan semua elemen ke grup komet
      cometGroup.appendChild(ionTail);
      cometGroup.appendChild(dustTail);
      cometGroup.appendChild(coma);
      cometGroup.appendChild(nucleus);
      
      // Tambahkan ke DOM
      cometContainer.appendChild(cometGroup);
      
      // Animasi dengan GSAP
      // Destinasi akhir komet (kiri bawah layar)
      const endX = startX - 100 - Math.random() * 50;
      const endY = 110 + Math.random() * 20;
      
      // Animasi muncul dan bergerak
      gsap.fromTo(cometGroup, 
        { opacity: 0 },
        {
          opacity: 1,
          delay: delay,
          duration: duration * 0.1,
          onComplete: () => {
            // Setelah muncul, animasikan pergerakan
            gsap.to(cometGroup, {
              x: `${(endX - startX) * 1.2}vw`,
              y: `${(endY - startY) * 1.2}vh`,
              opacity: 0,
              duration: duration * 0.9,
              ease: "power2.in",
              onComplete: () => {
                // Hapus elemen setelah animasi selesai
                if (cometGroup.parentNode) {
                  cometGroup.parentNode.removeChild(cometGroup);
                }
              }
            });
          }
        }
      );
    };
    
    // Buat beberapa komet dengan variasi
    createRealisticComet(true, 0); // Komet utama
    createRealisticComet(false, 1); // Komet kecil 1
    createRealisticComet(false, 2); // Komet kecil 2
    createRealisticComet(false, 3); // Komet kecil tambahan
    
    // Hapus container setelah 3 detik (lebih cepat dari 10 detik)
    setTimeout(() => {
      if (cometContainer.parentNode) {
        cometContainer.parentNode.removeChild(cometContainer);
      }
    }, 3000);
  };
  
  // Tambahkan keyframe animation ke head document
  const addCometAnimationStyles = () => {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      @keyframes starBlink {
        0% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
      
      .comet-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 999;
      }
      
      /* Hardware acceleration untuk animasi yang lebih mulus */
      .comet-group, .comet-ion-tail, .comet-dust-tail, .comet-nucleus, .comet-coma {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(styleSheet);
  };
  
  window.addEventListener('load', () => {
    // Tambahkan styles untuk animasi komet
    addCometAnimationStyles();
    
    // Debug pesan - hapus pada versi produksi
    console.log('Preloader loaded, starting animations...');
    
    // Tutup preloader dengan animasi fade out
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        preloader.remove();
        // Jalankan animasi hujan komet setelah preloader hilang
        console.log('Preloader removed, starting comet shower...');
        createCometShower();
      }
    });
  });
};

// Helper function untuk mendapatkan index item yang terlihat
const findVisibleItemIndex = (carousel, items) => {
  try {
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    
    let closestItem = 0;
    let closestDistance = Number.MAX_VALUE;
    
    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(carouselCenter - itemCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestItem = index;
      }
    });
    
    return closestItem;
  } catch (error) {
    console.error('Error finding visible item index:', error);
    return 0;
  }
};

// Initialize carousel for portfolio
const initPortfolioCarousel = () => {
  const carousel = document.getElementById('portfolio-carousel');
  if (!carousel) {
    console.error('Portfolio carousel element not found');
    return;
  }
  
  const items = Array.from(carousel.querySelectorAll('.portfolio-item'));
  console.log(`Found ${items.length} portfolio items for carousel`);
  
  // Jika tidak ada item, keluar dari fungsi
  if (items.length === 0) return;
  
  // Desktop navigation buttons
  const prevButton = document.getElementById('carousel-prev');
  const nextButton = document.getElementById('carousel-next');
  
  // Variable to track touch start position
  let touchStartX = 0;
  let touchEndX = 0;
  let isTouchScrolling = false;
  let initialScrollPosition = 0;
  
  // Threshold for swipe detection (in pixels)
  const SWIPE_THRESHOLD = 50;
  
  // Track if we are in desktop or mobile
  const isMobile = window.innerWidth <= 768;
  
  const scrollToItem = (index) => {
    try {
      if (index < 0) index = 0;
      if (index >= items.length) index = items.length - 1;
      
      const item = items[index];
      carousel.scrollTo({
        left: item.offsetLeft - (carousel.offsetWidth - item.offsetWidth) / 2,
        behavior: 'smooth'
      });
      
      // Update projects counter
      updateProjectCounter(index, items.length);
    } catch (error) {
      console.error('Error scrolling to item:', error);
    }
  };
  
  // Create and update project counter (1/7, 2/7, etc.)
  const updateProjectCounter = (currentIndex, totalItems) => {
    let counter = document.getElementById('portfolio-counter');
    
    if (!counter) {
      counter = document.createElement('div');
      counter.id = 'portfolio-counter';
      counter.className = 'portfolio-counter';
      
      // Create a container div for better positioning
      const counterContainer = document.createElement('div');
      counterContainer.className = 'counter-container';
      counterContainer.appendChild(counter);
      
      // Insert before carousel instead of appending as child
      carousel.parentNode.insertBefore(counterContainer, carousel);
    }
    
    counter.textContent = `${currentIndex + 1}/${totalItems}`;
  };
  
  // Improved touch event handlers
  const handleTouchStart = (e) => {
    try {
      // Store the initial touch position
      touchStartX = e.touches[0].clientX;
      initialScrollPosition = carousel.scrollLeft;
      isTouchScrolling = false;
    } catch (error) {
      console.error('Error in touch start handler:', error);
    }
  };
  
  const handleTouchMove = (e) => {
    try {
      // Do not prevent default scrolling if the user is swiping up/down
      const touchY = e.touches[0].clientY;
      const startTouchY = e.touches[0].initialTouchY || touchY;
      
      // Check if scrolling vertically (more vertical than horizontal)
      const touchCurrentX = e.touches[0].clientX;
      const deltaX = Math.abs(touchCurrentX - touchStartX);
      const deltaY = Math.abs(touchY - startTouchY);
      
      // If scrolling more vertically, don't interfere with page scroll
      if (deltaY > deltaX) {
        isTouchScrolling = true;
        return;
      }
      
      // For horizontal swipes in the carousel, prevent page scrolling
      if (deltaX > 10 && !isTouchScrolling) {
        // e.preventDefault(); // Commented out to allow natural scrolling
      }
    } catch (error) {
      console.error('Error in touch move handler:', error);
    }
  };
  
  const handleTouchEnd = (e) => {
    try {
      // If vertical scrolling detected, don't handle the swipe
      if (isTouchScrolling) {
        return;
      }
      
      // Calculate the final position
      touchEndX = e.changedTouches[0].clientX;
      const diffX = touchStartX - touchEndX;
      
      // Determine the direction of the swipe
      if (Math.abs(diffX) > SWIPE_THRESHOLD) {
        // Find the current visible item index
        const visibleItemIndex = findVisibleItemIndex(carousel, items);
        
        if (diffX > 0) {
          // Swipe left (next)
          scrollToItem(visibleItemIndex + 1);
    } else {
          // Swipe right (previous)
          scrollToItem(visibleItemIndex - 1);
        }
      } else {
        // If it was a small movement, restore to the initial position
        carousel.scrollTo({
          left: initialScrollPosition,
          behavior: 'smooth'
        });
      }
    } catch (error) {
      console.error('Error in touch end handler:', error);
    }
  };
  
  // Desktop navigation event listeners
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      try {
        const visibleIndex = findVisibleItemIndex(carousel, items);
        scrollToItem(visibleIndex - 1);
      } catch (error) {
        console.error('Error in prev button handler:', error);
      }
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      try {
        const visibleIndex = findVisibleItemIndex(carousel, items);
        scrollToItem(visibleIndex + 1);
      } catch (error) {
        console.error('Error in next button handler:', error);
      }
    });
  }
  
  // Add improved touch event listeners
  carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
  carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
  carousel.addEventListener('touchend', handleTouchEnd, { passive: true });
  
  // Initialize to the first item
    setTimeout(() => {
    scrollToItem(0);
  }, 100);
  
  // Update scroll position on resize
  window.addEventListener('resize', () => {
    const visibleIndex = findVisibleItemIndex(carousel, items);
    scrollToItem(visibleIndex);
  });
  
  console.log('Portfolio carousel initialized successfully');
};

// Initialize lightbox gallery
const initLightboxGallery = () => {
  const modal = document.getElementById('lightbox-modal');
  const closeButton = document.getElementById('close-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');
  const thumbnailsContainer = document.getElementById('thumbnails');
  const lightboxContent = document.getElementById('lightbox-content');
  
  if (!modal || !lightboxImage) {
    console.error('Lightbox elements not found');
    return null;
  }
  
  // Pre-load lightbox modal styling untuk menghindari lag saat pertama kali dibuka
  modal.style.display = 'none';
  
  // Certificate Lightbox Handler
  const certificateButtons = document.querySelectorAll('.certificate-button');
  certificateButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const certificateUrl = button.getAttribute('href');
      const certificateTitle = button.querySelector('span').textContent;
      
      // Reset zoom dan position
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateImageTransform();
      
      // Update lightbox content
      lightboxImage.src = certificateUrl;
      lightboxTitle.textContent = certificateTitle;
      
      // Gunakan teks yang sesuai berdasarkan bahasa
      const currentLang = localStorage.getItem('preferredLanguage') || 'id';
      if (currentLang === 'id') {
        lightboxDescription.innerHTML = 'Klik dua kali untuk memperbesar atau kecilkan. Klik dan tahan untuk menggeser gambar.';
    } else {
        lightboxDescription.innerHTML = 'Double-click to zoom in or out. Click and hold to drag the image.';
      }
      
      // Clear thumbnails
      if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
      }
      
      // Show modal
      modal.style.display = 'flex';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Portfolio data untuk lightbox
  const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
  let currentIndex = 0;
  let scale = 1;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let translateX = 0;
  let translateY = 0;
  
  // Open lightbox dengan index project
  const openLightbox = (index) => {
    console.log('Opening lightbox with index:', index);
    currentIndex = index;
    
    if (!portfolioItems[currentIndex]) {
      console.error('Portfolio item not found for index:', index);
      return;
    }
    
    const item = portfolioItems[currentIndex];
    const imageUrl = item.getAttribute('data-image') || '';
    
    console.log('Found portfolio item:', item);
    console.log('Image URL:', imageUrl);
    
    // Reset zoom dan position
    resetZoomAndPosition();
    
    // Update lightbox content - gunakan URL gambar yang tersimpan dalam atribut data-image
    if (imageUrl && imageUrl !== '') {
      lightboxImage.src = imageUrl;
      lightboxImage.alt = item.getAttribute('data-title') || '';
      console.log('Setting image src to:', imageUrl);
    } else {
      console.error('Image URL not found or empty in portfolio item');
      // Fallback ke gambar pertama di dalam item jika ada
      const image = item.querySelector('img');
      if (image) {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        console.log('Fallback setting image src to:', image.src);
      }
    }
    
    // Update title dan description
    lightboxTitle.textContent = item.getAttribute('data-title') || '';
    lightboxDescription.innerHTML = item.getAttribute('data-description') || '';
    
    // Tambahkan instruksi navigasi sesuai bahasa
    const currentLang = localStorage.getItem('preferredLanguage') || 'id';
    let navigationInstructions = '';
    
    if (currentLang === 'id') {
      navigationInstructions = '<div class="text-xs mt-2 text-gray-400">Klik dua kali untuk memperbesar atau kecilkan. Klik dan tahan untuk menggeser gambar.</div>';
    } else {
      navigationInstructions = '<div class="text-xs mt-2 text-gray-400">Double-click to zoom in or out. Click and hold to drag the image.</div>';
    }
    
    lightboxDescription.innerHTML += navigationInstructions;
    
    // Generate thumbnails
    generateThumbnails();
    
    // Show modal
    modal.classList.remove('hidden'); // Hapus hidden class jika ada
    modal.style.display = 'flex';
    modal.classList.add('active');
    console.log('Modal classes after open:', modal.className);
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    // Animasikan penutupan
    gsap.to(lightboxImage, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        modal.classList.remove('active');
        modal.style.display = 'none';
        // Restore scroll
        document.body.style.overflow = '';
        // Reset lightbox content setelah ditutup
        setTimeout(() => {
          lightboxImage.style.opacity = 1;
        }, 100);
      }
    });
    
    // Kembali ke halaman sebelumnya jika URL mengandung hash
    if (window.location.hash) {
      history.back();
    }
  };
  
  // Reset zoom and position
  const resetZoomAndPosition = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    lightboxImage.classList.remove('zoomed');
    document.getElementById('lightbox-content').style.cursor = 'grab';
  };
  
  // Update image transform
  const updateImageTransform = () => {
    lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  };
  
  // Zoom in
  const zoomIn = () => {
    if (scale < 3) {
      scale += 0.5;
      updateImageTransform();
      
      if (scale > 1) {
        lightboxImage.classList.add('zoomed');
        document.getElementById('lightbox-content').style.cursor = 'move';
      }
    }
  };
  
  // Zoom out
  const zoomOut = () => {
    if (scale > 0.5) {
      scale -= 0.5;
      
      if (scale === 1) {
        resetZoomAndPosition();
      } else {
        updateImageTransform();
      }
    }
  };
  
  // Generate thumbnails
  const generateThumbnails = () => {
    if (!thumbnailsContainer) return;
    
    thumbnailsContainer.innerHTML = '';
    
    portfolioItems.forEach((item, index) => {
      const thumbnail = document.createElement('div');
      thumbnail.className = 'thumbnail';
      if (index === currentIndex) {
        thumbnail.classList.add('active');
      }
      
      const img = document.createElement('img');
      const itemImg = item.querySelector('img');
      if (itemImg) {
        img.src = itemImg.src;
        img.alt = `Thumbnail ${index + 1}`;
      }
      
      thumbnail.appendChild(img);
      thumbnailsContainer.appendChild(thumbnail);
      
      thumbnail.addEventListener('click', () => {
        openLightbox(index);
      });
    });
  };
  
  // Update active thumbnail
  const updateActiveThumbnail = () => {
    if (!thumbnailsContainer) return;
    
    const thumbnails = thumbnailsContainer.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumb, index) => {
      if (index === currentIndex) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  };
  
  // Add event listeners
  if (closeButton) {
    closeButton.addEventListener('click', closeLightbox);
  }
  
  if (zoomInButton) {
    zoomInButton.addEventListener('click', zoomIn);
  }
  
  if (zoomOutButton) {
    zoomOutButton.addEventListener('click', zoomOut);
  }
  
  // Listen for escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Handle mouse/touch events untuk fitur drag gambar (saat zoomed)
  const handleDragStart = (e) => {
    if (scale <= 1) return; // Hanya drag saat zoomed in
    
    // Untuk mouse
    if (e.type === 'mousedown') {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      lightboxContent.style.cursor = 'grabbing';
    } 
    // Untuk touch
    else if (e.type === 'touchstart') {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
    
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    let clientX, clientY;
    
    // Untuk mouse
    if (e.type === 'mousemove') {
      clientX = e.clientX;
      clientY = e.clientY;
    } 
    // Untuk touch
    else if (e.type === 'touchmove') {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      return;
    }
    
    // Hitung jarak perpindahan
    const moveX = clientX - startX;
    const moveY = clientY - startY;
    
    // Update posisi
    translateX += moveX;
    translateY += moveY;
    
    // Batasi perpindahan berdasarkan ukuran gambar dan zoom level
    const imageRect = lightboxImage.getBoundingClientRect();
    const containerRect = lightboxContent.getBoundingClientRect();
    
    // Batas berdasarkan zoom level
    const bounds = {
      left: (imageRect.width * scale - containerRect.width) / 2,
      right: (imageRect.width * scale - containerRect.width) / 2,
      top: (imageRect.height * scale - containerRect.height) / 2,
      bottom: (imageRect.height * scale - containerRect.height) / 2
    };
    
    // Batasi perpindahan
    if (bounds.left > 0) {
      translateX = Math.max(Math.min(translateX, bounds.left), -bounds.right);
    } else {
      translateX = 0;
    }
    
    if (bounds.top > 0) {
      translateY = Math.max(Math.min(translateY, bounds.top), -bounds.bottom);
    } else {
      translateY = 0;
    }
    
    // Update transform
    updateImageTransform();
    
    // Reset start point
    startX = clientX;
    startY = clientY;
    
      e.preventDefault();
      e.stopPropagation();
  };
  
  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    isDragging = false;
    if (scale > 1) {
      lightboxContent.style.cursor = 'move';
    } else {
      lightboxContent.style.cursor = 'grab';
    }
    
      e.preventDefault();
    e.stopPropagation();
  };
  
  // Mouse events
  lightboxContent.addEventListener('mousedown', handleDragStart);
  window.addEventListener('mousemove', handleDragMove);
  window.addEventListener('mouseup', handleDragEnd);
  
  // Touch events
  lightboxContent.addEventListener('touchstart', handleDragStart, { passive: false });
  window.addEventListener('touchmove', handleDragMove, { passive: false });
  window.addEventListener('touchend', handleDragEnd);
  
  // Double click untuk cepat zoom in/out
  lightboxContent.addEventListener('dblclick', (e) => {
    e.preventDefault();
    
    if (scale > 1) {
      // Jika sudah di-zoom, reset ke normal
      resetZoomAndPosition();
    } else {
      // Jika belum di-zoom, zoom ke 2x
      scale = 2;
      updateImageTransform();
      lightboxImage.classList.add('zoomed');
      lightboxContent.style.cursor = 'move';
    }
  });
  
  // Wheel event untuk zoom
  lightboxContent.addEventListener('wheel', (e) => {
      e.preventDefault();
    
    // Tentukan sensitivitas zoom
    const zoomSpeed = 0.1;
    
    // Hitung perubahan zoom berdasarkan wheel delta
    if (e.deltaY < 0) {
      // Scroll up - zoom in
      if (scale < 3) {
        scale += zoomSpeed;
        if (scale > 1) {
          lightboxImage.classList.add('zoomed');
          lightboxContent.style.cursor = 'move';
        }
      }
    } else {
      // Scroll down - zoom out
      if (scale > 0.5) {
        scale -= zoomSpeed;
        if (scale <= 1) {
          resetZoomAndPosition();
        }
      }
    }
    
    // Update transform
    updateImageTransform();
  }, { passive: false });
  
  return {
    openLightbox,
    closeLightbox,
    resetZoomAndPosition,
    zoomIn,
    zoomOut
  };
};

// Initialize portfolio view buttons
const initPortfolioViewButtons = () => {
  console.log('Initializing portfolio view buttons');
  
  // Get all view buttons from the portfolio
  const viewButtons = document.querySelectorAll('.view-button');
  
  // Initialize lightbox elements
  const modal = document.getElementById('lightbox-modal');
  const closeButton = document.getElementById('close-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  
  if (!modal || !lightboxImage) {
    console.error('Lightbox elements not found');
    return;
  }
  
  // Pre-load lightbox modal styling
  modal.style.display = 'none';
  
  console.log('View buttons found:', viewButtons.length);
  
  // Add event listeners to each button
  viewButtons.forEach((button) => {
    console.log('Adding click event to button');
    button.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      try {
        console.log('Button clicked');
        // Ambil parent element (portfolio item)
        const portfolioItem = this.closest('.portfolio-item');
        if (!portfolioItem) {
          console.error('Could not find parent portfolio item');
          return;
        }
        
        // Simpan ID proyek yang aktif di modal untuk referensi saat switchLanguage
        const projectId = portfolioItem.getAttribute('data-id');
        modal.setAttribute('data-active-project', projectId);
        
        console.log('Portfolio item found:', portfolioItem.getAttribute('data-id'));
        
        // Ambil URL gambar
        let imageUrl = portfolioItem.getAttribute('data-image');
        if (!imageUrl) {
          const imgElement = portfolioItem.querySelector('img');
          if (imgElement) {
            imageUrl = imgElement.src;
            portfolioItem.setAttribute('data-image', imageUrl);
          } else {
            console.error('No image found in portfolio item');
            return;
          }
        }
        
        console.log('Opening lightbox with image:', imageUrl);
        
        // Reset zoom dan position
        let scale = 1;
        let translateX = 0;
        let translateY = 0;
        lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        lightboxImage.classList.remove('zoomed');
        
        // Update lightbox content
        lightboxImage.src = imageUrl;
        
        // Set title and description
        lightboxTitle.textContent = portfolioItem.getAttribute('data-title') || '';
        lightboxDescription.innerHTML = portfolioItem.getAttribute('data-description') || '';
        
        // Tambahkan instruksi navigasi sesuai bahasa
        const currentLang = localStorage.getItem('preferredLanguage') || 'id';
        let navigationInstructions = '';
        
        if (currentLang === 'id') {
          navigationInstructions = '<div class="text-xs mt-2 text-gray-400">Klik dua kali untuk memperbesar atau kecilkan. Klik dan tahan untuk menggeser gambar.</div>';
        } else {
          navigationInstructions = '<div class="text-xs mt-2 text-gray-400">Double-click to zoom in or out. Click and hold to drag the image.</div>';
        }
        
        lightboxDescription.innerHTML += navigationInstructions;
        
        // Show modal
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        console.log('Modal opened successfully');
      } catch (error) {
        console.error('Error opening lightbox:', error);
      }
    });
  });
  
  // Initialize close button functionality
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      console.log('Close button clicked');
      modal.classList.remove('active');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }, 300);
    });
  }
};

// Initialize text animation for changing subtitle
const initChangingText = () => {
  const changingTextElement = document.getElementById('changing-text');
  if (!changingTextElement) return;
  
  const texts = [
    'Web Developer',
    '3D Enthusiast',
    'IoT Developer',
    'Gamer',
    'Mobile Developer'
  ];
  
  let currentIndex = 0;
  
  const updateText = () => {
    // Fade out
    gsap.to(changingTextElement, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: () => {
        // Update text
        currentIndex = (currentIndex + 1) % texts.length;
        changingTextElement.textContent = texts[currentIndex];
        
        // Fade in
        gsap.to(changingTextElement, {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    });
  };
  
  // Set initial text
  changingTextElement.textContent = texts[0];
  
  // Start the animation cycle
  setInterval(updateText, 3000);
};

// Initialize tech stack text animation in footer
const initTechStackAnimation = () => {
  const techStackText = document.getElementById('tech-stack-text');
  if (!techStackText) return;
  
  const technologies = [
    'HTML',
    'CSS',
    'JS',
    'Three.js',
    'React.js',
    'Tailwind',
    'WebGL'
  ];
  
  let currentIndex = 0;
  
  const updateTechText = () => {
    // Typing effect
    let currentText = technologies[currentIndex];
    let i = 0;
    
    // Clear existing text
    techStackText.textContent = '';
    
    // Typing animation
    const typeChar = () => {
      if (i < currentText.length) {
        techStackText.textContent += currentText.charAt(i);
        i++;
        setTimeout(typeChar, 150); // Typing speed
        } else {
        // Once typing is done, schedule deletion after a pause
        setTimeout(deleteTech, 2000);
      }
    };
    
    // Deletion animation
    const deleteTech = () => {
      if (techStackText.textContent.length > 0) {
        techStackText.textContent = techStackText.textContent.slice(0, -1);
        setTimeout(deleteTech, 75); // Deletion speed
      } else {
        // Once deletion is done, move to next technology
        currentIndex = (currentIndex + 1) % technologies.length;
        setTimeout(updateTechText, 500);
      }
    };
    
    // Start typing
    typeChar();
  };
  
  // Set initial text and start animation
  updateTechText();
};

// Initialize Indonesia real-time clock
const initIndonesiaTime = () => {
  const dayNameEl = document.getElementById('day-name');
  const dateNumEl = document.getElementById('date-num');
  const monthNameEl = document.getElementById('month-name');
  const yearNumEl = document.getElementById('year-num');
  const timeDisplayEl = document.getElementById('time-display');
  const timeContainerEl = document.getElementById('indonesia-time');
  
  if (!dayNameEl || !dateNumEl || !monthNameEl || !yearNumEl || !timeDisplayEl) return;
  
  // Hari dalam Bahasa Indonesia dan Inggris
  const days = {
    id: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  
  // Bulan dalam Bahasa Indonesia dan Inggris
  const months = {
    id: [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ],
    en: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };
  
  // Update waktu
  const updateIndonesiaTime = () => {
    // Gunakan metode yang lebih akurat untuk mendapatkan waktu WIB (GMT+7)
    const now = new Date();
    
    // Tanggal/waktu UTC dalam milidetik
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Konversi ke WIB (UTC+7)
    // Kurangi 2000 milidetik (2 detik) untuk menyesuaikan perbedaan dengan server waktu referensi
    const wibTime = new Date(utcTime + (3600000 * 7) - 2000);
    
    const day = wibTime.getDay();
    const date = wibTime.getDate();
    const month = wibTime.getMonth();
    const year = wibTime.getFullYear();
    
    const hours = String(wibTime.getHours()).padStart(2, '0');
    const minutes = String(wibTime.getMinutes()).padStart(2, '0');
    const seconds = String(wibTime.getSeconds()).padStart(2, '0');
    
    // Dapatkan bahasa saat ini
    const currentLang = localStorage.getItem('preferredLanguage') || 'id';
    
    // Update elemen HTML dengan bahasa yang sesuai
    dayNameEl.textContent = days[currentLang][day];
    dateNumEl.textContent = date;
    monthNameEl.textContent = months[currentLang][month];
    yearNumEl.textContent = year;
    
    // Tambahkan WIB/GMT+7 sesuai bahasa
    if (currentLang === 'id') {
      timeDisplayEl.textContent = `${hours}:${minutes}:${seconds} WIB`;
        } else {
      timeDisplayEl.textContent = `${hours}:${minutes}:${seconds} GMT+7`;
    }
  };
  
  // Update pertama kali
  updateIndonesiaTime();
  
  // Tampilkan elemen waktu dengan animasi
  gsap.to(timeContainerEl, {
    opacity: 1,
    duration: 1,
    delay: 0.5
  });
  
  // Update setiap detik
  setInterval(updateIndonesiaTime, 1000);
  
  // Update juga saat bahasa berubah
  const languageSwitchHandler = () => {
    updateIndonesiaTime();
  };
  
  // Tambahkan event listener untuk perubahan bahasa
  window.addEventListener('languageChanged', languageSwitchHandler);
  
  // Bersihkan event listener saat component unmount (untuk mencegah memory leak)
  return () => {
    window.removeEventListener('languageChanged', languageSwitchHandler);
  };
};

// Fungsi untuk membuat portfolio items
function createPortfolioItems() {
  const carousel = document.getElementById('portfolio-carousel');
  if (!carousel) return;
  
  // Data proyek portfolio
  const projects = [
    {
      id: 'project1',
      title: {
        id: 'Proyek Website 3D',
        en: '3D Website Project'
      },
      description: {
        id: 'Website interaktif dengan animasi 3D dan UI modern',
        en: 'Interactive website with 3D animations and modern UI'
      },
      image: '/images/proyekwebsite3D.png',
      tags: ['Three.js', 'React', 'WebGL']
    },
    {
      id: 'project2',
      title: {
        id: 'Aplikasi Smarthome',
        en: 'Smarthome Application'
      },
      description: {
        id: 'Aplikasi kontrol rumah pintar dengan integrasi IoT. <a href="https://youtu.be/92Y9hg5lK_w?si=K2r7MVGA0904gq26" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Lihat Demo</a>',
        en: 'Smart home control application with IoT integration. <a href="https://youtu.be/92Y9hg5lK_w?si=K2r7MVGA0904gq26" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Watch Demo</a>'
      },
      image: '/images/smarthome.png',
      tags: ['ESP32', 'C++', 'Firebase']
    },
    {
      id: 'project3',
      title: {
        id: 'Game Chibi Falls',
        en: 'Chibi Falls Game'
      },
      description: {
        id: 'Game petualangan 3D dengan fisika ragdoll',
        en: '3D adventure game with ragdoll physics'
      },
      image: '/images/chibifalls.png',
      tags: ['Unity', 'C#', 'Blender']
    },
    {
      id: 'project4',
      title: {
        id: 'Aplikasi Laundry Service',
        en: 'Laundry Service App'
      },
      description: {
        id: 'Aplikasi layanan Laundry dengan fitur autentikasi pengguna, pengiriman pesanan, dan pelacakan status secara real-time.',
        en: 'Laundry service application with user authentication, order placement, and real-time status tracking.'
      },
      image: '/images/laundry.png',
      tags: ['Kotlin', 'Firebase', 'Android Studio']
    },
    {
      id: 'project5',
      title: {
        id: 'Nusa Meta',
        en: 'Nusa Meta'
      },
      description: {
        id: 'Membuat lingkungan kota virtual untuk penggunaan metaverse, mengintegrasikan objek 3D interaktif dalam platform Nusameta',
        en: 'Creating a virtual city environment for metaverse use, integrating interactive 3D objects in the Nusameta platform'
      },
      image: '/images/nusameta.png',
      tags: ['Blender', 'Nusa Meta', '3D']
    },
    {
      id: 'project6',
      title: {
        id: 'Sistem Penyiraman Tanaman Otomatis',
        en: 'Automatic Plant Watering System'
      },
      description: {
        id: 'Sistem penyiraman tanaman otomatis menggunakan sensor kelembaban tanah, relai, dan pompa air. Sistem ini dikontrol oleh Arduino.',
        en: 'Automatic plant watering system using soil moisture sensors, relays, and water pumps. This system is controlled by Arduino.'
      },
      image: '/images/penyiraman.png',
      tags: ['Arduino', 'C++', 'Embedded Systems']
    },
    {
      id: 'project7',
      title: {
        id: 'Ekstrakurikuler ARVR',
        en: 'ARVR Extracurricular'
      },
      description: {
        id: 'Pengembangan aplikasi edukasi berbasis Augmented Reality dan Virtual Reality untuk memfasilitasi pembelajaran interaktif bagi siswa. <a href="https://youtu.be/ErRdkFthJ2o?si=asARze7oB8AOiGhI" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Lihat Demo</a>',
        en: 'Development of Augmented Reality and Virtual Reality-based educational applications to facilitate interactive learning for students. <a href="https://youtu.be/ErRdkFthJ2o?si=asARze7oB8AOiGhI" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Watch Demo</a>'
      },
      image: '/images/arvr.png',
      tags: ['Blender', 'AR/VR']
    }
  ];
  
  // Bersihkan carousel
  carousel.innerHTML = '';
  
  // Dapatkan bahasa saat ini (default ke ID jika tidak ada)
  const currentLang = localStorage.getItem('preferredLanguage') || 'id';
  
  // Tambahkan item portfolio
  projects.forEach((project, index) => {
    const item = document.createElement('a');
    item.className = 'portfolio-item flex-shrink-0 snap-start w-[85vw] sm:w-[350px]';
    item.setAttribute('role', 'tabpanel');
    item.setAttribute('aria-labelledby', `tab-${project.id}`);
    item.setAttribute('data-id', project.id);
    
    // Simpan url gambar dalam data-image
    item.setAttribute('data-image', project.image);
    
    // Simpan judul dan deskripsi dalam berbagai bahasa sebagai atribut data
    item.setAttribute('data-title-id', project.title.id);
    item.setAttribute('data-title-en', project.title.en);
    item.setAttribute('data-description-id', project.description.id);
    item.setAttribute('data-description-en', project.description.en);
    
    // Gunakan bahasa yang sesuai untuk tampilan awal
    item.setAttribute('data-title', project.title[currentLang]);
    item.setAttribute('data-description', project.description[currentLang]);
    
    // Generate tags HTML
    const tagsHTML = project.tags.map(tag => 
      `<span class="px-3 py-1 text-xs rounded-full bg-black-200 text-secondary">${tag}</span>`
    ).join('');
    
    item.innerHTML = `
      <div class="rounded-xl overflow-hidden bg-tertiary shadow-card group h-full">
        <div class="relative overflow-hidden image-container">
          <img loading="lazy" src="${project.image}" alt="${project.title[currentLang]}" class="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          <div class="overlay">
            <button class="view-button btn-view-project" type="button" data-project-id="${project.id}" data-index="${index}">
              <span class="lang-text" data-lang-id="view-button">Lihat</span>
            </button>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-white-100 text-xl font-semibold mb-2">${project.title[currentLang]}</h3>
          <p class="text-secondary">${project.description[currentLang]}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
    
    carousel.appendChild(item);
  });
  
  // Init carousel setelah menambahkan items
  initPortfolioCarousel();
  
  // Tambahkan click event ke tombol view secara langsung
  const viewButtons = document.querySelectorAll('.btn-view-project');
  console.log('Found btn-view-project buttons:', viewButtons.length);
  
  // Modal setup
  const modal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  
  viewButtons.forEach((button) => {
    button.onclick = function(event) {
      event.preventDefault();
      event.stopPropagation();
      
      const projectId = this.getAttribute('data-project-id');
      const project = projects.find(p => p.id === projectId);
      
      if (!project) {
        console.error('Project not found:', projectId);
        return;
      }
      
      console.log('Opening project:', project.id);
      
      // Simpan ID proyek yang aktif di modal untuk referensi saat switchLanguage
      modal.setAttribute('data-active-project', projectId);
      
      // Reset zoom dan position
      let scale = 1;
      let translateX = 0;
      let translateY = 0;
      lightboxImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      
      // Dapatkan bahasa yang sedang aktif
      const currentLang = localStorage.getItem('preferredLanguage') || 'id';
      
      // Update lightbox content dengan data dalam bahasa yang sesuai
      lightboxImage.src = project.image;
      lightboxTitle.textContent = project.title[currentLang];
      lightboxDescription.innerHTML = project.description[currentLang];
      
      // Tambahkan instruksi navigasi
      const navigationText = currentLang === 'id' 
        ? 'Klik dua kali untuk memperbesar atau kecilkan. Klik dan tahan untuk menggeser gambar.'
        : 'Double-click to zoom in or out. Click and hold to drag the image.';
      
      lightboxDescription.innerHTML += `<div class="text-xs mt-2 text-gray-400">${navigationText}</div>`;
      
      // Show modal
      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
  });
}

// Initialize CV modal
const initCVModal = () => {
  const viewCVButton = document.getElementById('view-cv-button');
  const cvModal = document.getElementById('cv-modal');
  const cvModalContent = document.getElementById('cv-modal-content');
  const closeModalButton = document.getElementById('close-cv-modal');
  
  if (!viewCVButton || !cvModal || !closeModalButton || !cvModalContent) return;
  
  const openModal = () => {
    // Show modal
    cvModal.classList.remove('hidden');
    
    // Animate content
    gsap.to(cvModalContent, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      ease: "back.out(1.5)"
    });
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    // Animate content out
    gsap.to(cvModalContent, {
      scale: 0.95,
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        // Hide modal
        cvModal.classList.add('hidden');
        
        // Restore body scrolling
        document.body.style.overflow = '';
      }
    });
  };
  
  // Open modal when button is clicked
  viewCVButton.addEventListener('click', openModal);
  
  // Close modal when close button is clicked
  closeModalButton.addEventListener('click', closeModal);
  
  // Close modal when clicking outside content
  cvModal.addEventListener('click', (e) => {
    if (e.target === cvModal) {
      closeModal();
    }
  });
  
  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !cvModal.classList.contains('hidden')) {
      closeModal();
    }
  });
  
  // Add hover animations for CV buttons
  const cvButtons = cvModal.querySelectorAll('a');
  cvButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
          y: -5,
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)',
        duration: 0.2
        });
      });
      
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        duration: 0.2
      });
    });
  });
};

// Initialize language switcher
const initLanguageSwitcher = () => {
  const langButtons = document.querySelectorAll('.language-btn');
  const langTexts = document.querySelectorAll('.lang-text');
  
  if (!langButtons.length || !langTexts.length) return;
  
  // Translations dictionary
  const translations = {
    // Header & Hero Section
    'view-portfolio': {
      id: 'Lihat Portofolio',
      en: 'View Portfolio'
    },
    'view-cv': {
      id: 'Lihat CV Saya',
      en: 'View My CV'
    },
    // About Section
    'about-me': {
      id: 'Tentang Saya',
      en: 'About Me'
    },
    'about-p1': {
      id: 'Halo! Saya adalah seorang web developer dengan minat kuat dalam pengembangan 3D interaktif, serta kemampuan di bidang hardware dan IoT. Saya senang menggabungkan kreativitas dengan keahlian teknis untuk menciptakan pengalaman web yang menarik, imersif, dan inovatif.',
      en: 'Hello! I am a web developer with a strong interest in interactive 3D development, as well as skills in hardware and IoT. I enjoy combining creativity with technical expertise to create engaging, immersive, and innovative web experiences.'
    },
    'about-p2': {
      id: 'Saya punya pengalaman dalam HTML, CSS, JavaScript, serta teknologi 3D seperti Three.js. Di sisi lain, saya juga bisa mengembangkan sistem berbasis mikrokontroler seperti Arduino dan ESP32, serta mampu mengintegrasikan perangkat keras seperti sensor, relay ke dalam solusi digital yang cerdas.',
      en: 'I have experience in HTML, CSS, JavaScript, and 3D technologies like Three.js. Additionally, I can develop microcontroller-based systems such as Arduino and ESP32, and am able to integrate hardware like sensors and relays into smart digital solutions.'
    },
    'about-p3': {
      id: 'Saya percaya bahwa masa depan teknologi adalah perpaduan antara software dan hardware yang saling terhubung. Karena itu, saya terus belajar, bereksperimen, dan menciptakan solusi kreatif yang bisa menjawab tantangan nyata. Terbuka untuk kolaborasi dan selalu siap untuk membawa ide menjadi kenyataan.',
      en: 'I believe that the future of technology is a combination of interconnected software and hardware. Therefore, I continuously learn, experiment, and create creative solutions that can address real challenges. Open to collaboration and always ready to bring ideas to reality.'
    },
    // CV Modal
    'choose-cv': {
      id: 'Pilih CV',
      en: 'Choose CV'
    },
    'cv1': {
      id: 'CV 1',
      en: 'CV 1'
    },
    'cv2': {
      id: 'CV 2',
      en: 'CV 2'
    },
    'close': {
      id: 'Tutup',
      en: 'Close'
    },
    // Section titles
    'my-skills': {
      id: 'Keterampilan Saya',
      en: 'My Skills'
    },
    'solar-system': {
      id: 'Model Tata Surya 3D',
      en: '3D Solar System Model'
    },
    'model-desc': {
      id: 'Model tata surya interaktif ini dapat dirotasi dengan mouse atau jari. Silakan eksplorasi dari berbagai sudut untuk melihat matahari, planet-planet beserta orbit mereka.',
      en: 'This interactive solar system model can be rotated with the mouse or finger. Feel free to explore from different angles to see the sun, planets and their orbits.'
    },
    'portfolio': {
      id: 'Portofolio',
      en: 'Portfolio'
    },
    'portfolio-desc': {
      id: 'Beberapa proyek yang telah saya kerjakan, meliputi desain UI/UX, pengembangan website, dan aplikasi mobile.',
      en: 'Some projects I have worked on, including UI/UX design, website development, and mobile applications.'
    },
    // Certificate sections
    'cert-cloud': {
      id: 'Sertifikat Cloud',
      en: 'Cloud Certificate'
    },
    'cert-cyber': {
      id: 'Sertifikat Cybersecurity',
      en: 'Cybersecurity Certificate'
    },
    'cert-se': {
      id: 'Sertifikat Software Engineering',
      en: 'Software Engineering Certificate'
    },
    'cert-rwd': {
      id: 'Sertifikat Web Design',
      en: 'Web Design Certificate'
    },
    'cert-js': {
      id: 'Sertifikat JS Algoritma',
      en: 'JS Algorithm Certificate'
    },
    'swipe-instruction': {
      id: '← Geser untuk melihat lebih banyak →',
      en: '← Swipe to see more →'
    },
    'contact': {
      id: 'Hubungi Saya',
      en: 'Contact Me'
    },
    // Form inputs
    'name': {
      id: 'Nama',
      en: 'Name'
    },
    'email': {
      id: 'Email',
      en: 'Email'
    },
    'subject': {
      id: 'Subjek',
      en: 'Subject'
    },
    'message': {
      id: 'Pesan',
      en: 'Message'
    },
    'terms': {
      id: 'Saya menyetujui penggunaan data untuk keperluan komunikasi',
      en: 'I agree to the use of data for communication purposes'
    },
    'send-message': {
      id: 'Kirim Pesan',
      en: 'Send Message'
    },
    // Footer sections
    'contact-info': {
      id: 'Kontak',
      en: 'Contact'
    },
    'social-media': {
      id: 'Media Sosial',
      en: 'Social Media'
    },
    'built-with': {
      id: 'Built using HTML, CSS, JS, and Three.js',
      en: 'Built using HTML, CSS, JS, and Three.js'
    },
    // Thank you page
    'thank-you': {
      id: 'Terima Kasih!',
      en: 'Thank You!'
    },
    'thank-you-message': {
      id: 'Pesan Anda telah berhasil terkirim ke Ferry Maulana Malik Ibrahim. Saya akan menghubungi Anda kembali secepatnya.',
      en: 'Your message has been successfully sent to Ferry Maulana Malik Ibrahim. I will get back to you as soon as possible.'
    },
    'back-to-portfolio': {
      id: 'Kembali ke Portofolio',
      en: 'Back to Portfolio'
    },
    // Add translations for view button
    'view-button': {
      id: 'Lihat',
      en: 'View'
    },
    // Solar system interaction text
    'rotate-solar-system': {
      id: 'Geser untuk memutar model tata surya',
      en: 'Drag to rotate the solar system model'
    }
  };
  
  // Switch language function
  const switchLanguage = (lang) => {
    // Update active button
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    // Update text content for all elements
    langTexts.forEach(el => {
      const key = el.getAttribute('data-lang-id');
      if (key && translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update placeholders for inputs
    if (lang === 'id') {
      const nameInput = document.getElementById('name');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      if (nameInput) nameInput.placeholder = 'Masukkan nama Anda';
      if (subjectInput) subjectInput.placeholder = 'Subjek pesan';
      if (messageInput) messageInput.placeholder = 'Ketik pesan Anda di sini...';
    } else {
      const nameInput = document.getElementById('name');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      if (nameInput) nameInput.placeholder = 'Enter your name';
      if (subjectInput) subjectInput.placeholder = 'Message subject';
      if (messageInput) messageInput.placeholder = 'Type your message here...';
    }
    
    // Update portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      const titleKey = `data-title-${lang}`;
      const descKey = `data-description-${lang}`;

      if (item.hasAttribute(titleKey) && item.hasAttribute(descKey)) {
        // Update data attributes yang digunakan oleh lightbox
        item.setAttribute('data-title', item.getAttribute(titleKey));
        item.setAttribute('data-description', item.getAttribute(descKey));

        // Update judul dan deskripsi yang ditampilkan
        const titleElement = item.querySelector('h3');
        const descElement = item.querySelector('p.text-secondary');

        if (titleElement) {
          titleElement.innerHTML = item.getAttribute(titleKey);
        }
        
        if (descElement) {
          descElement.innerHTML = item.getAttribute(descKey);
        }
      }
    });
    
    // Update teks di lightbox jika sedang terbuka
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal && lightboxModal.style.display !== 'none' && lightboxModal.style.display !== '') {
      const activeProjectId = lightboxModal.getAttribute('data-active-project');
      if (activeProjectId) {
        // Cari project item berdasarkan ID
        const activeItem = document.querySelector(`.portfolio-item[data-id="${activeProjectId}"]`);
        if (activeItem) {
          const lightboxTitle = document.getElementById('lightbox-title');
          const lightboxDescription = document.getElementById('lightbox-description');
          
          if (lightboxTitle) {
            // Gunakan atribut data untuk bahasa yang dipilih
            lightboxTitle.textContent = activeItem.getAttribute(`data-title-${lang}`);
          }
          
          if (lightboxDescription) {
            // Gunakan atribut data untuk bahasa yang dipilih
            lightboxDescription.innerHTML = activeItem.getAttribute(`data-description-${lang}`);
            
            // Tambahkan kembali instruksi navigasi
            const navigationText = lang === 'id' 
              ? '<div class="text-xs mt-2 text-gray-400">Klik dua kali untuk memperbesar atau kecilkan. Klik dan tahan untuk menggeser gambar.</div>'
              : '<div class="text-xs mt-2 text-gray-400">Double-click to zoom in or out. Click and hold to drag the image.</div>';
            
            lightboxDescription.innerHTML += navigationText;
          }
        }
      }
    }
    
    // Trigger event untuk update tanggal dan waktu
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
  };
  
  // Add click event listeners to language buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });
  
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferredLanguage');
  if (savedLang) {
    switchLanguage(savedLang);
  }
};

// Fungsi untuk mendeteksi dan mencegah inspect element
const preventInspect = () => {
  // Mencegah klik kanan
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Mencegah keyboard shortcuts untuk dev tools
  document.addEventListener('keydown', (e) => {
    // F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+I / Cmd+Option+I
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.metaKey && e.altKey && e.key === 'i')) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+J / Cmd+Option+J
    if ((e.ctrlKey && e.shiftKey && e.key === 'J') || 
        (e.metaKey && e.altKey && e.key === 'j')) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+C / Cmd+Option+C
    if ((e.ctrlKey && e.shiftKey && e.key === 'C') || 
        (e.metaKey && e.altKey && e.key === 'c')) {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+U / Cmd+Option+U (View Source)
    if ((e.ctrlKey && e.key === 'u') || 
        (e.metaKey && e.altKey && e.key === 'u')) {
      e.preventDefault();
      return false;
    }
  });

  // Deteksi ketika DevTools dibuka
  const detectDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = '<h1 style="text-align:center;margin-top:40vh">Inspeksi Halaman Tidak Diizinkan</h1>';
    }
  };

  setInterval(detectDevTools, 1000);
};

// Inisialisasi ketika website dimuat
window.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi fitur-fitur website
  initBackgroundScene();
  init3DModelScene();
  initScrollAnimations();
  initSmoothScroll();
  initCustomCursor();
  initPreloader();
  initPortfolioCarousel();
  initLightboxGallery();
  initPortfolioViewButtons();
  initChangingText();
  initTechStackAnimation();
  initIndonesiaTime();
  createPortfolioItems();
  initCVModal();
  initLanguageSwitcher();
  initContactForm();
  initAnimatedUnderlines();
  
  // Terapkan perlindungan terhadap inspeksi (hapus komentar untuk mengaktifkan)
  // preventInspect();
  
  // Tampilkan pesan warning jika DevTools dibuka
  console.log("%cStop!", "color:red;font-size:50px;font-weight:bold;");
  console.log("%cWebsite ini dilindungi. Menggunakan DevTools dapat melanggar ketentuan penggunaan.", "font-size:20px;");
});

// Initialize contact form submission
const initContactForm = () => {
  const contactForm = document.getElementById('contact-form');
  const thankYouPage = document.getElementById('thank-you-page');
  const closeThankYouButton = document.getElementById('thank-you-close');
  
  if (!contactForm || !thankYouPage || !closeThankYouButton) return;
  
  // Validasi formulir sebelum pengiriman
  contactForm.addEventListener('submit', (e) => {
    // FormSubmit.co akan menangani pengiriman dan validasi dasar
    
    // Tambahkan animasi pengiriman
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (submitButton) {
      // Dapatkan bahasa saat ini
      const currentLang = localStorage.getItem('preferredLanguage') || 'id';
      const sendingText = currentLang === 'id' ? 'Mengirim...' : 'Sending...';
      
      submitButton.innerHTML = `<span>${sendingText}</span> <div class="spinner-small ml-2"></div>`;
      submitButton.disabled = true;
    }
  });
  
  // URL search params handling untuk thank you page redirect
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('thanks') === 'true') {
    showThankYouPage();
    
    // Hapus parameter dari URL untuk mencegah halaman terima kasih muncul saat refresh
    const url = new URL(window.location.href);
    url.searchParams.delete('thanks');
    window.history.replaceState({}, document.title, url.toString());
  }
  
  // Show thank you page function
  function showThankYouPage() {
    thankYouPage.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Tambahkan animasi untuk halaman terima kasih
    gsap.from('#thank-you-page > div', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.2)"
    });
  }
  
  // Close thank you page function
  function closeThankYouPage() {
    gsap.to('#thank-you-page > div', {
      y: 30,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        thankYouPage.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Event listener for close button
  closeThankYouButton.addEventListener('click', closeThankYouPage);
  
  // Update form to use current page for redirect
  const hiddenNextInput = contactForm.querySelector('input[name="_next"]');
  if (hiddenNextInput) {
    // Dapatkan URL lengkap saat ini (termasuk protokol dan host)
    const currentUrl = new URL(window.location.href);
    // Hapus semua parameter yang mungkin ada
    for (const key of [...currentUrl.searchParams.keys()]) {
      currentUrl.searchParams.delete(key);
    }
    // Tambahkan parameter thanks
    currentUrl.searchParams.set('thanks', 'true');
    hiddenNextInput.value = currentUrl.toString();
  }
};

// Initialize animated underlines for titles
const initAnimatedUnderlines = () => {
  const underlines = document.querySelectorAll('.animated-underline');
  
  // Add class to hero title immediately for instant animation
  const heroUnderline = document.querySelector('#hero-title .animated-underline');
  if (heroUnderline) {
    setTimeout(() => {
      heroUnderline.classList.add('active');
    }, 1500); // Delay sedikit setelah animasi opacity
  }
  
  // Handle other section titles with scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };
  
  const underlineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('active');
        }, 300);
        
        // Stop observing after animation
        underlineObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing each underline
  underlines.forEach(underline => {
    // Skip hero title as we handle it separately
    if (!underline.closest('#hero-title')) {
      underlineObserver.observe(underline);
    }
  });
};

// Tambahkan ini di service-worker.js
self.addEventListener('fetch', event => {
  if (event.request.url.includes('devtools')) {
    event.respondWith(new Response('', { status: 403 }));
  }
}); 