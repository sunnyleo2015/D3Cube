function initControlBox(){

}

let resetCamera = function () {
    initCamera();
    initTrackBallControls();
};

let resetCameraXYArea = function () {
    //initCamera();
    camera.position.set(0,0,2600);
    initTrackBallControls();
};

let resetCameraYZArea = function () {
    //initCamera();
    camera.position.set(2600,0,0);
    initTrackBallControls();
};

let resetCameraXZArea = function () {
    //initCamera();
    camera.position.set(0,2600,0);
    initTrackBallControls();
};