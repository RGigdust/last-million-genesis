let scene, camera, renderer, cube;

init();
animate();

function init(){

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry();

let material = new THREE.MeshBasicMaterial({
color: 0xffd700
});

cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

}

function animate(){

requestAnimationFrame(animate);

cube.rotation.x += 0.01;

cube.rotation.y += 0.01;

renderer.render(scene, camera);

}
