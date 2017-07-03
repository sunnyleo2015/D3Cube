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

