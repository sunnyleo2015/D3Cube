$(()=>{
    threeStart();
    $('[data-toggle="popover"]').popover()
});

function threeStart(){
    initRenderer();
    initCamera();
    initScene();
    initLight();
    initFrame();
    initLocalizesList();
    initTrackBallControls();
    initDatGUI();
    initStats();
    doRender();
}

$('#reset-camera').on('click', ()=>{
    resetCamera();
});

$('#camera-xy').on('click',()=>{
    resetCameraXYArea();
});

$('#camera-yz').on('click',()=>{
    resetCameraYZArea();
});

$('#camera-xz').on('click',()=>{
    resetCameraXZArea();
});