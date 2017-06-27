let renderer,object;
let width, height;
let camera;
let scene;
let light;
let cube;
function initThree() {
    //width = document.getElementById('3dFrame').clientWidth;
    //height = document.getElementById('3dFrame').clientHeight;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);
    document.body.appendChild(renderer.domElement);
}


function initCamera(){
    camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.1,100000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 800;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x:0,
        y:0,
        z:0
    });
}


function initScene() {
    scene = new THREE.Scene();
}


function initLight(){
    light = new THREE.DirectionalLight(0xFF0000,1.0,0);
    light.position.set(100,100,200);
    scene.add(light);
}


function initFrame(){
    let material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    let frame_geometry = new THREE.Geometry();
    let point_color_1 = new THREE.Color(0x999999);
    let point_color_2 = new THREE.Color(0xff0000);
    let point_1 = new THREE.Vector3(-1000,0,0);
    let point_2 = new THREE.Vector3(1000,0,0);

    frame_geometry.vertices.push(point_1);
    frame_geometry.vertices.push(point_2);
    frame_geometry.colors.push(point_color_1,point_color_1);

    for (let i=-100;i<100;i++){
        let line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
        line.position.y = i*10;
        scene.add(line);
    }

    for (let i=-100;i<100;i++){
        let line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
        line.rotation.z = (90 * Math.PI)/180;
        line.position.x = i*10;
        scene.add(line)
    }

    let cross_geometry = new THREE.Geometry();

    cross_geometry.vertices.push(point_1);
    cross_geometry.vertices.push(point_2);
    cross_geometry.colors.push(point_color_2,point_color_2);
    let cross_lineX =  new THREE.Line(cross_geometry,material,THREE.LineSegments );
    let cross_lineY =  new THREE.Line(cross_geometry,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    scene.add(cross_lineX);
    scene.add(cross_lineY);
}

function threeStart(){
    initThree();
    initCamera();
    initScene();
    initLight();
    initFrame();
    renderer.clear();
    renderer.render(scene, camera);
}

window.onload = threeStart();