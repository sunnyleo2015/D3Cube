function initControlBox(){

}

let resetCamera = function () {
    initCamera();
    initTrackBallControls();
};

let resetCameraXYArea = function () {
    camera.position.set(0,0,2600);
    initTrackBallControls();
};

let resetCameraYZArea = function () {
    camera.position.set(2600,0,0);
    initTrackBallControls();
};

let resetCameraXZArea = function () {
    camera.position.set(0,2600,0);
    initTrackBallControls();
};

let wallList = [];

let addNewWall = function(x1,y1,z1,x2,y2,z2){
    let vertices = [
      new THREE.Vector3(x1,y1,0),
      new THREE.Vector3(x1,y1,z1>0?z1:1500),
      new THREE.Vector3(x2,y2,0),
      new THREE.Vector3(x2,y2,z2>0?z2:1500),
    ];

    let  faces = [
        new THREE.Face3(0, 1, 2),
        new THREE.Face3(1, 2, 3),
        new THREE.Face3(2, 1, 0),
        new THREE.Face3(3, 2, 1)
    ];

    let wallGeometry = new THREE.Geometry();
    wallGeometry.vertices = vertices;
    wallGeometry.faces= faces;
    let wallMaterial = new THREE.MeshBasicMaterial({color: 0x5bc0de,transparent: true, opacity: 0.8});
    let wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.name = `wall-${Date.parse(new Date())}`;
    wallList.push(wall);
    scene.add(wall);
};