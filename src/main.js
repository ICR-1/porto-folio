import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initAvatarSelector } from './avatar-selector';

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
      
      // Prevent page scrolling when interacting with the canvas
      event.preventDefault();
    }
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('touchstart', handleTouchStart, { passive: false });
  window.addEventListener('touchmove', handleTouchMove, { passive: false });
  
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
  scene.background = new THREE.Color(0x090325);
  
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  
  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Add rim light for dramatic effect
  const rimLight = new THREE.DirectionalLight(0x4c6ef5, 0.7);
  rimLight.position.set(-2, 1, -1);
  scene.add(rimLight);
  
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
    <span>Geser untuk memutar</span>
  `;
  container.appendChild(interactionHelper);
  
  // Hide helper after interaction
  container.addEventListener('mousedown', () => {
    interactionHelper.classList.add('fadeout');
    setTimeout(() => {
      interactionHelper.style.display = 'none';
    }, 1000);
  });
  
  // Position camera
  camera.position.z = 5;
  
  // Create a complex 3D object instead of simple cube
  // Creating a "dynamic" shape that resembles a portfolio logo/icon
  const shapes = new THREE.Group();
  
  // Create center cube
  const centerGeometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
  const centerMaterial = new THREE.MeshStandardMaterial({
    color: 0x4c6ef5,
    metalness: 0.8,
    roughness: 0.2,
  });
  const centerCube = new THREE.Mesh(centerGeometry, centerMaterial);
  shapes.add(centerCube);
  
  // Add orbiting shapes
  const orbitingGeometries = [
    new THREE.TetrahedronGeometry(0.4),
    new THREE.OctahedronGeometry(0.4),
    new THREE.DodecahedronGeometry(0.4)
  ];
  
  const orbitingMaterials = [
    new THREE.MeshStandardMaterial({ color: 0xff5252, metalness: 0.5, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0x69f0ae, metalness: 0.5, roughness: 0.4 }),
    new THREE.MeshStandardMaterial({ color: 0xffeb3b, metalness: 0.5, roughness: 0.4 })
  ];
  
  const orbitingShapes = [];
  
  for (let i = 0; i < 3; i++) {
    const mesh = new THREE.Mesh(orbitingGeometries[i], orbitingMaterials[i]);
    
    // Position in orbit
    const angle = (i / 3) * Math.PI * 2;
    const radius = 2.2;
    
    mesh.position.x = Math.cos(angle) * radius;
    mesh.position.z = Math.sin(angle) * radius;
    
    // Store initial position and orbit data
    mesh.userData = {
      initialAngle: angle,
      orbitSpeed: 0.3 + Math.random() * 0.3,
      orbitRadius: radius,
      floatAmplitude: 0.1 + Math.random() * 0.2,
      floatOffset: Math.random() * Math.PI * 2
    };
    
    shapes.add(mesh);
    orbitingShapes.push(mesh);
  }
  
  // Add connecting lines
  const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0xaaa6c3, 
    transparent: true, 
    opacity: 0.5 
  });
  
  const lineConnections = [];
  
  const updateConnections = () => {
    // Remove old connections
    lineConnections.forEach(line => shapes.remove(line));
    lineConnections.length = 0;
    
    // Create new connections
    orbitingShapes.forEach(shape => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        centerCube.position,
        shape.position
      ]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      shapes.add(line);
      lineConnections.push(line);
    });
  };
  
  updateConnections();
  scene.add(shapes);
  
  // Handle window resize
  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  };
  
  window.addEventListener('resize', handleResize);
  
  // Animation loop
  let time = 0;
  const animate = () => {
    time += 0.01;
    requestAnimationFrame(animate);
    
    // Rotate center cube
    centerCube.rotation.x += 0.003;
    centerCube.rotation.y += 0.005;
    
    // Animate orbiting shapes
    orbitingShapes.forEach(shape => {
      const userData = shape.userData;
      
      // Orbit motion
      const newAngle = userData.initialAngle + time * userData.orbitSpeed;
      
      shape.position.x = Math.cos(newAngle) * userData.orbitRadius;
      shape.position.z = Math.sin(newAngle) * userData.orbitRadius;
      
      // Floating motion
      shape.position.y = Math.sin(time + userData.floatOffset) * userData.floatAmplitude;
      
      // Self rotation
      shape.rotation.x += 0.02;
      shape.rotation.y += 0.01;
    });
    
    // Update connecting lines
    updateConnections();
    
    controls.update();
    renderer.render(scene, camera);
  };
  
  animate();
  
  return { scene, camera, renderer };
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
    ease: "power2.out"
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
  
  window.addEventListener('load', () => {
    gsap.to(preloader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        preloader.remove();
      }
    });
  });
};

// Initialize carousel for portfolio
const initPortfolioCarousel = () => {
  const carousel = document.getElementById('portfolio-carousel');
  if (!carousel) return;
  
  const prevButton = document.getElementById('carousel-prev');
  const nextButton = document.getElementById('carousel-next');
  const carouselItems = carousel.querySelectorAll('.portfolio-item');
  
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  
  const deviceInfo = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768
  };
  
  const isMobileDevice = () => deviceInfo.isMobile;
  
  const getItemWidth = () => {
    // In mobile, we want to show single item at a time with proper spacing
    if (isMobileDevice()) {
      const item = carouselItems[0];
      if (!item) return window.innerWidth * 0.85; // Fallback size
      
      const itemStyle = window.getComputedStyle(item);
      const marginRight = parseInt(itemStyle.marginRight || 0);
      return item.offsetWidth + marginRight;
    }
    // Default behavior for desktop
    return carousel.offsetWidth / 3;
  };
  
  const getTotalItems = () => carouselItems.length;
  
  const getCurrentIndex = () => {
    // Calculate current index based on scroll position
    if (carousel.scrollLeft === 0) return 0;
    
    // For mobile, calculate index based on scroll snap points
    if (isMobileDevice()) {
    const itemWidth = getItemWidth();
      const index = Math.round(carousel.scrollLeft / itemWidth);
      return Math.max(0, Math.min(index, getTotalItems() - 1));
    }
    
    // Desktop calculation
    const percentageScrolled = carousel.scrollLeft / (carousel.scrollWidth - carousel.offsetWidth);
    const index = Math.round(percentageScrolled * (getTotalItems() - 3));
    return Math.max(0, Math.min(index, getTotalItems() - 3));
  };
  
  const updateNavigationButtons = () => {
    // Only update buttons if they exist and we're on desktop
    if (!isMobileDevice() && prevButton && nextButton) {
      const currentIndex = getCurrentIndex();
      
      // Update previous button
      prevButton.disabled = currentIndex <= 0;
      prevButton.classList.toggle('opacity-50', currentIndex <= 0);
      prevButton.classList.toggle('cursor-not-allowed', currentIndex <= 0);
      
      // Update next button
      const maxIndex = getTotalItems() - 3;
      const isAtEnd = currentIndex >= maxIndex;
      
      nextButton.disabled = isAtEnd;
      nextButton.classList.toggle('opacity-50', isAtEnd);
      nextButton.classList.toggle('cursor-not-allowed', isAtEnd);
    }
  };
  
  const scrollToIndex = (index, duration = 0.3) => {
    if (!carousel) return;
    
    const itemWidth = getItemWidth();
    let targetPosition;
    
    // Mobile scrolling - scroll to specific item with snap
    if (isMobileDevice()) {
      targetPosition = index * itemWidth;
    } else {
      // Desktop scrolling
      const maxScroll = carousel.scrollWidth - carousel.offsetWidth;
      const totalVisibleItems = getTotalItems() - 3;
      targetPosition = (index / totalVisibleItems) * maxScroll;
    }
    
    // Use scrollTo for immediate positioning or smooth scroll with animation
    carousel.scrollTo({
      left: targetPosition,
      behavior: duration === 0 ? 'auto' : 'smooth'
    });
    
    currentIndex = index;
    updateNavigationButtons();
  };
  
  const scrollPrev = () => {
    const newIndex = Math.max(0, getCurrentIndex() - 1);
    scrollToIndex(newIndex);
  };
  
  const scrollNext = () => {
    const totalItems = getTotalItems();
    const maxIndex = isMobileDevice() ? totalItems - 1 : totalItems - 3;
    const newIndex = Math.min(maxIndex, getCurrentIndex() + 1);
    scrollToIndex(newIndex);
  };
  
  // Add event listeners to navigation buttons (desktop only)
  if (!isMobileDevice()) {
    if (prevButton) {
      prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        createRippleEffect(e, prevButton);
        scrollPrev();
      });
    }
    
    if (nextButton) {
  nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
    createRippleEffect(e, nextButton);
    scrollNext();
  });
    }
  }
  
  // Touch events for mobile swipe
  if (isMobileDevice()) {
    // Touch events for mobile scroll
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      
      // Detect swipe direction if the movement is significant
      if (touchStartX - touchEndX > 50) {
        // Swipe left - show next
        scrollNext();
      } else if (touchEndX - touchStartX > 50) {
        // Swipe right - show previous
    scrollPrev();
      }
    }, { passive: true });
  }
  
  // Update navigation on scroll
  carousel.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
      updateNavigationButtons();
    });
  }, { passive: true });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    setTimeout(() => {
      const currentIndex = getCurrentIndex();
      scrollToIndex(currentIndex, 0);
      updateNavigationButtons();
    }, 200);
  });
  
  // Initialize
  updateNavigationButtons();
  
  // Hide swipe instruction after user interacts with carousel
  const swipeInstruction = document.querySelector('.swipe-instruction');
  if (swipeInstruction && isMobileDevice()) {
    const hideInstruction = () => {
      swipeInstruction.style.opacity = 0;
      setTimeout(() => {
        swipeInstruction.style.display = 'none';
      }, 500);
      
      // Remove event listeners
      carousel.removeEventListener('touchstart', hideInstruction);
    };
    
    carousel.addEventListener('touchstart', hideInstruction, { passive: true });
  }

  // Efek ripple untuk tombol
  function createRippleEffect(e, button) {
    // Cek jika tombol sudah memiliki ripple yang aktif
    if (button.querySelector('.ripple')) return;
    
    const circle = document.createElement('div');
    
    // Tentukan ukuran efek ripple berdasarkan ukuran tombol
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    circle.style.width = circle.style.height = `${diameter}px`;
    
    // Posisikan ripple sesuai koordinat klik/tap
    if (e.type.includes('touch')) {
      if (e.touches && e.touches[0]) {
        circle.style.left = `${e.touches[0].clientX - button.getBoundingClientRect().left - diameter / 2}px`;
        circle.style.top = `${e.touches[0].clientY - button.getBoundingClientRect().top - diameter / 2}px`;
      }
    } else {
      circle.style.left = `${e.clientX - button.getBoundingClientRect().left - diameter / 2}px`;
      circle.style.top = `${e.clientY - button.getBoundingClientRect().top - diameter / 2}px`;
    }
    
    circle.classList.add('ripple');
    button.appendChild(circle);
    
    // Hapus efek ripple setelah animasi selesai
    setTimeout(() => {
      circle.remove();
    }, 600);
  }

  return {
    scrollToIndex,
    scrollNext,
    scrollPrev,
    getCurrentIndex,
    updateNavigationButtons
  };
};

// Initialize lightbox gallery for portfolio
const initLightboxGallery = () => {
  const modal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const closeButton = document.getElementById('close-lightbox');
  const zoomInButton = document.getElementById('zoom-in');
  const zoomOutButton = document.getElementById('zoom-out');
  const prevButton = document.getElementById('prev-project');
  const nextButton = document.getElementById('next-project');
  const thumbnailsContainer = document.getElementById('thumbnails');
  const lightboxContent = document.getElementById('lightbox-content');
  
  if (!modal || !lightboxImage) return;
  
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
    const image = item.querySelector('img');
    
    console.log('Found portfolio item:', item);
    console.log('Image element:', image);
    
    // Reset zoom dan position
    resetZoomAndPosition();
    
    // Update lightbox content
    if (image) {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      console.log('Setting image src to:', image.src);
    } else {
      console.error('Image not found in portfolio item');
    }
    
    // Update title dan description
    lightboxTitle.textContent = item.getAttribute('data-title') || '';
    lightboxDescription.textContent = item.getAttribute('data-description') || '';
    
    // Generate thumbnails
    generateThumbnails();
    
    // Show modal
    modal.classList.remove('hidden'); // Hapus hidden class jika ada
    modal.classList.add('active');
    console.log('Modal classes after open:', modal.className);
    document.body.style.overflow = 'hidden';
  };
  
  // Close lightbox
  const closeLightbox = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
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
  
  // Navigation ke project sebelumnya
  const prevProject = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = portfolioItems.length - 1;
    }
    openLightbox(newIndex);
  };
  
  // Navigation ke project berikutnya
  const nextProject = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= portfolioItems.length) {
      newIndex = 0;
    }
    openLightbox(newIndex);
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
  
  if (prevButton) {
    prevButton.addEventListener('click', prevProject);
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', nextProject);
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
    zoomOut,
    prevProject,
    nextProject
  };
};

// Initialize portfolio view buttons
const initPortfolioViewButtons = () => {
  // Get all view buttons from the portfolio
  const viewButtons = document.querySelectorAll('.view-button');
  
  // Get the lightbox gallery instance
  const lightboxGallery = initLightboxGallery();
  
  if (!lightboxGallery) {
    console.error('Lightbox gallery could not be initialized');
    return;
  }
  
  console.log('View buttons found:', viewButtons.length);
  
  // Add event listeners to each button
  viewButtons.forEach((button, buttonIndex) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      
      // Get the index of the portfolio item from the button's data attribute
      const index = parseInt(button.getAttribute('data-index'), 10);
      
      console.log('View button clicked, index:', index);
      
      // Open the lightbox with the corresponding index
      if (!isNaN(index)) {
        lightboxGallery.openLightbox(index);
      } else {
        console.error('Invalid portfolio index:', button.getAttribute('data-index'));
      }
        });
      });
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

// Fungsi untuk membuat portfolio items
function createPortfolioItems() {
  const carousel = document.getElementById('portfolio-carousel');
  if (!carousel) return;
  
  // Data proyek portfolio
  const projects = [
    {
      id: 'project1',
      title: 'Proyek Website 3D',
      description: 'Website interaktif dengan animasi 3D dan UI modern',
      image: '/images/proyekwebsite3D.png',
      tags: ['Three.js', 'React', 'WebGL']
    },
    {
      id: 'project2',
      title: 'Aplikasi Smarthome',
      description: 'Aplikasi kontrol rumah pintar dengan integrasi IoT',
      image: '/images/smarthome.png',
      tags: ['ESP32', 'C++', 'Firebase']
    },
    {
      id: 'project3',
      title: 'Game Chibi Falls',
      description: 'Game petualangan 3D dengan fisika ragdoll',
      image: '/images/chibifalls.png',
      tags: ['Unity', 'C#', 'Blender']
    },
    {
      id: 'project4',
      title: 'Aplikasi Laundry Service',
      description: 'Aplikasi layanan Laundry dengan fitur autentikasi pengguna, pengiriman pesanan, dan pelacakan status secara real-time.',
      image: '/images/laundry.png',
      tags: ['Kotlin', 'Firebase', 'Android Studio']
    },
    {
      id: 'project5',
      title: 'Nusa Meta',
      description: 'Membuat lingkungan kota virtual untuk penggunaan metaverse, mengintegrasikan objek 3D interaktif dalam platform Nusameta',
      image: '/images/nusameta.png',
      tags: ['Blender', 'Nusa Meta', '3D']
    },
    {
      id: 'project6',
      title: 'Sistem Penyiraman Tanaman Otomatis',
      description: 'Sistem penyiraman tanaman otomatis menggunakan sensor kelembaban tanah, relai, dan pompa air. Sistem ini dikontrol oleh Arduino.',
      image: '/images/penyiraman.png',
      tags: ['Arduino', 'C++', 'Embedded Systems']
    },
    {
      id: 'project7',
      title: 'Ekstrakurikuler ARVR',
      description: 'Pengembangan aplikasi edukasi berbasis Augmented Reality dan Virtual Reality untuk memfasilitasi pembelajaran interaktif bagi siswa',
      image: '/images/arvr.png',
      tags: ['Blender', 'AR/VR']
    }
  ];
  
  // Bersihkan carousel
  carousel.innerHTML = '';
  
  // Tambahkan item portfolio
  projects.forEach((project, index) => {
    const item = document.createElement('a');
    item.href = `#${project.id}`;
    item.className = 'portfolio-item flex-shrink-0 snap-start w-[85vw] sm:w-[350px]';
    item.setAttribute('role', 'tabpanel');
    item.setAttribute('aria-labelledby', `tab-${project.id}`);
    item.setAttribute('data-id', project.id);
    item.setAttribute('data-title', project.title);
    item.setAttribute('data-description', project.description);
    
    // Generate tags HTML
    const tagsHTML = project.tags.map(tag => 
      `<span class="px-3 py-1 text-xs rounded-full bg-black-200 text-secondary">${tag}</span>`
    ).join('');
    
    item.innerHTML = `
      <div class="rounded-xl overflow-hidden bg-tertiary shadow-card group h-full">
        <div class="relative overflow-hidden image-container">
          <img loading="lazy" src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover transition-all duration-500 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-tertiary to-transparent opacity-0 group-hover:opacity-70 transition-all duration-300"></div>
          <div class="overlay">
            <button class="view-button" type="button" data-index="${index}">View</button>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-white-100 text-xl font-semibold mb-2">${project.title}</h3>
          <p class="text-secondary">${project.description}</p>
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
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Urutan inisialisasi penting untuk memastikan semua fungsi portfolio bekerja dengan baik
  
  // 1. Inisialisasi dasar UI dan animasi
  initPreloader();
  const { scene, camera, renderer } = initBackgroundScene();
  init3DModelScene();
  initScrollAnimations();
  initSmoothScroll();
  initCustomCursor();
  initAvatarSelector();
  initChangingText();
  
  // 2. Buat portfolio items terlebih dahulu
  createPortfolioItems();
  
  // 3. Inisialisasi lightbox (harus setelah portfolio items dibuat)
  initLightboxGallery();
  
  // 4. Inisialisasi tombol view untuk lightbox
  initPortfolioViewButtons();
  
  // 5. Inisialisasi form kontak
  initContactForm();
  
  // 6. Log untuk debugging
  console.log('Portfolio gallery initialized');
  console.log('View buttons:', document.querySelectorAll('.view-button').length);
  console.log('Portfolio items:', document.querySelectorAll('.portfolio-item').length);
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
      submitButton.innerHTML = '<span>Mengirim...</span> <div class="spinner-small ml-2"></div>';
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