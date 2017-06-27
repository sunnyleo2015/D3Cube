let renderer, camera, scene, light, object;
let width, height;
function initRenderer(){
    _canvas = document.getElementById('3dCube');
    width = document.getElementById('3dCube').clientWidth;
    height = document.getElementById('3dCube').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias:true,
        canvas: _canvas
    });
    _canvas.width = 2*width;
    _canvas.height = 2*height;
    renderer.setSize(2*width,2*height);
    renderer.setClearColor(0x000000);
}

function initScene() {
    scene = new THREE.Scene();
}

function initCamera() {
    camera = new THREE.PerspectiveCamera(20, 400/300, 1, 10);
    camera.position.set(0,0,5);

    camera.up.x = 0;
    camera.up.y = 20;
    camera.up.z = 0;

    camera.lookAt({x:0,y:0,z:0});
}

function initCube() {
    let geometry = new THREE.CubeGeometry(1, 1, 1, 4,4,4);
    let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function render() {
    requestAnimationFrame(render);
    cube.rotation.x +=0.01;
    cube.rotation.y +=0.01;
    cube.rotation.z +=0.01;
    renderer.render(scene,camera);
}

function threeStart(){
    initRenderer();
    initCamera();
    initScene();
    initCube();
    render();
}
/*

window.onload = threeStart();*/
