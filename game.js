let scene, camera, renderer;
let cub;
let introPhase = 0;
let introText;

init();
animate();
startIntro();

function init(){

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer({ antialias:true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

camera.position.z = 8;

// light
const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(0,5,5);
scene.add(light);

// cub (temporary form)
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
introText.style.fontFamily="Arial";

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

function animate(){

requestAnimationFrame(animate);

if(introPhase === 1){

cub.rotation.y += 0.01;

}

renderer.render(scene, camera);

}
