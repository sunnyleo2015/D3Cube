/**
 * Created by Administrator on 2017/6/28.
 */
let renderer,object;
let camera;
let scene;
let light;
let trackBallControls;
let stats;
let clock = new THREE.Clock();
let delta = clock.getDelta();
let gui = new dat.GUI();
let labelList = [];
let labelNameList = [];
let lookAtMesh;
let stopRender = false;
let stopRenderController;

function initRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1300, 1000);
    renderer.setClearColor(0xFFFFFF);
    $('#WebGL').append(renderer.domElement);
}

function initCamera(){
    camera = new THREE.PerspectiveCamera(45,1300/1000,0.1,100000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2600;
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
    light.position.set(2000,2000,2000);
    scene.add(light);
}

function initFrameEightArea(){
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

        line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
        line.rotation.z = (90 * Math.PI)/180;
        line.position.x = i*10;
        scene.add(line)
    }


    let cross_geometry = new THREE.Geometry();

    cross_geometry.vertices.push(point_1);
    cross_geometry.vertices.push(point_2);
    cross_geometry.colors.push(point_color_2,point_color_2);

    let cross_lineX =  new THREE.Line(cross_geometry,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    scene.add(cross_lineX);

    let cross_lineY =  new THREE.Line(cross_geometry,material,THREE.LineSegments );
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    scene.add(cross_lineY);

    let cross_geometryZ = new THREE.Geometry();
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,-800));
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,800));
    cross_geometryZ.colors.push(new THREE.Color(0xf89406),new THREE.Color(0xf89406));
    let cross_lineZ =  new THREE.Line(cross_geometryZ,material,THREE.LineSegments );
    scene.add(cross_lineZ);
}

function initFrame(){
    let material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    let frame_geometry = new THREE.Geometry();
    let point_color_1 = new THREE.Color(0x999999);
    let point_color_2 = new THREE.Color(0xff0000);
    let point_1 = new THREE.Vector3(-300,0,0);
    let point_2 = new THREE.Vector3(1500,0,0);

    frame_geometry.vertices.push(point_1);
    frame_geometry.vertices.push(point_2);
    frame_geometry.colors.push(point_color_1,point_color_1);

    for (let i=-30;i<150;i++){
        let line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
        line.position.y = i*10;
        scene.add(line);

        line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
        line.rotation.z = (90 * Math.PI)/180;
        line.position.x = i*10;
        scene.add(line)
    }


    let cross_geometryX = new THREE.Geometry();

    cross_geometryX.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryX.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryX.colors.push(point_color_2,point_color_2);

    let cross_lineX =  new THREE.Line(cross_geometryX,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    scene.add(cross_lineX);

    let cross_geometryY = new THREE.Geometry();
    cross_geometryY.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryY.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryY.colors.push(new THREE.Color(0x0a85f3),new THREE.Color(0x0a85f3));

    let cross_lineY =  new THREE.Line(cross_geometryY,material,THREE.LineSegments );
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    scene.add(cross_lineY);

    let cross_geometryZ = new THREE.Geometry();
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,-300));
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,1500));
    cross_geometryZ.colors.push(new THREE.Color(0xf89406),new THREE.Color(0xf89406));
    let cross_lineZ =  new THREE.Line(cross_geometryZ,material,THREE.LineSegments );
    scene.add(cross_lineZ);
}

function initSphereLabel(){
    let sphereGeometry = new THREE.SphereGeometry(4,10,10);
    let sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe:true});

    let sphereLabel= new THREE.Mesh(sphereGeometry,sphereMaterial);

    sphereLabel.position.set(10,5,10);
    sphereLabel.name = `label-${labelList.length}`;

    sphereLabel.position.set(Math.round(Math.random() * 600),Math.round(Math.random() * 600),Math.round(Math.random() * 600));
    labelList.push(sphereLabel);
    labelNameList.push(sphereLabel.name);
    scene.add(sphereLabel);
}

function addSphereLabel() {
    initSphereLabel();
}

function initCameraLookAtMash(){
    let lookAtGeom = new THREE.SphereGeometry(2);
    lookAtMesh = new THREE.Mesh(lookAtGeom, new THREE.MeshLambertMaterial({color: 0x0f82de}));
    scene.add(lookAtMesh);
}

function initTrackBallControls(){
    trackBallControls = new THREE.TrackballControls(camera, renderer.domElement);
    trackBallControls.target.set(0,0,0);
    trackBallControls.rotateSpeed = 1.0;
    trackBallControls.zoomSpeed = 1.0;
    trackBallControls.panSpeed = 1.0;
}

function initStats() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.getElementById("Stats-output").appendChild(stats.domElement);
    return stats;
}

let controls = new function () {
    this.noRotate = false;
    this.noZoom = false;
    this.noPan = false;

    this.stopRender = stopRender;

    this.AddLabel = function(){
        addSphereLabel();
    };

    this.FocusOriginPoint = function(){
        trackBallControls.target.set(0,0,0)
    };
};

function initDatGUI(){
    let trackBallFolder = gui.addFolder('Trackball Setting');
    trackBallFolder.add(controls, 'noRotate');
    trackBallFolder.add(controls, 'noZoom');
    trackBallFolder.add(controls, 'noPan');
    gui.add(controls, 'AddLabel');
    gui.add(controls, 'FocusOriginPoint');


    stopRenderController = gui.add(controls, 'stopRender');
    stopRenderController.onChange(function(value){
        doRender();
    })
}

function doRender(){
    stats.update();
    trackBallControls.noRotate = controls.noRotate;
    trackBallControls.noZoom = controls.noZoom;
    trackBallControls.noPan = controls.noPan;
    trackBallControls.update(delta);

    if(!controls.stopRender){
        $('#label-position-list').html('');
        $.each(labelList,(index)=>{
            labelList[index].position.set(Math.round(Math.random() * 500),Math.round(Math.random() * 300),Math.round(Math.random() * 600));

            $('#label-position-list').append(
                `<li class=" ${labelList[index].name}">
                    <span class="name">${labelList[index].name}</span>
                    <span class="position">x: ${labelList[index].position.x}</span>
                    <span class="position">y: ${labelList[index].position.y}</span>
                    <span class="position">z: ${labelList[index].position.z}</span>
                </li>`
            );

            $(`.${labelList[index].name}`).on('click',()=>{
                trackBallControls.target.set(labelList[index].position.x,labelList[index].position.y,labelList[index].position.z)
            })
        });
    }


    requestAnimationFrame(doRender);

    renderer.render(scene, camera);
}

function threeStart(){
    initRenderer();
    initCamera();
    initScene();
    initLight();
    initFrame();
    initTrackBallControls();
    initDatGUI();
    initStats();
    initCameraLookAtMash();
    doRender();
}