let scene, camera, renderer;
let cub;
let introPhase = 0;
let introText;

let moveX = 0;
let moveZ = 0;

let touchStartX = 0;
let touchStartY = 0;

init();
animate();
startIntro();
setupControls();

function init(){

scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer({ antialias:true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.set(0,5,10);

// light
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0,10,10);
scene.add(light);

// ground
const groundGeometry = new THREE.PlaneGeometry(100,100);

const groundMaterial = new THREE.MeshStandardMaterial({
color:0x001100
});

const ground = new THREE.Mesh(groundGeometry, groundMaterial);

ground.rotation.x = -Math.PI/2;

scene.add(ground);

// cub
const geometry = new THREE.SphereGeometry(1, 32, 32);

const material = new THREE.MeshStandardMaterial({
color:0xffd700,
emissive:0x442200
});

cub = new THREE.Mesh(geometry, material);

cub.visible = false;

scene.add(cub);

// intro text
introText = document.createElement("div");

introText.style.position="absolute";
introText.style.top="40%";
introText.style.width="100%";
introText.style.textAlign="center";
introText.style.fontSize="28px";
introText.style.color="gold";

document.body.appendChild(introText);

}

function startIntro(){

setTimeout(()=>{
introText.innerHTML="In a world controlled by the Collector...";
},1000);

setTimeout(()=>{
introText.innerHTML="One Lost Cub carries the LAST Dust...";
},4000);

setTimeout(()=>{
introText.innerHTML="Survive. Grow. Become King.";
},7000);

setTimeout(()=>{
introText.innerHTML="";
cub.visible = true;
introPhase = 1;
},10000);

}

function setupControls(){

document.addEventListener("touchstart",(e)=>{

touchStartX = e.touches[0].clientX;
touchStartY = e.touches[0].clientY;

});

document.addEventListener("touchend",(e)=>{

let touchEndX = e.changedTouches[0].clientX;
let touchEndY = e.changedTouches[0].clientY;

let dx = touchEndX - touchStartX;
let dy = touchEndY - touchStartY;

if(Math.abs(dx) > Math.abs(dy)){

if(dx > 0){

moveX = 0.2;

}else{

moveX = -0.2;

}

}else{

if(dy > 0){

moveZ = 0.2;

}else{

moveZ = -0.2;

}

}

});

}

function animate(){

requestAnimationFrame(animate);

if(introPhase === 1){

cub.position.x += moveX;
cub.position.z += moveZ;

moveX *= 0.9;
moveZ *= 0.9;

// camera follows cub

camera.position.x = cub.position.x;
camera.position.z = cub.position.z + 10;

camera.lookAt(cub.position);

}

renderer.render(scene, camera);

}
