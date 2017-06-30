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

$('#add-wall-btn').on('click', ()=>{
    let x1 = $('#wall-start-x').val();
    let x2 = $('#wall-end-x').val();
    let y1 = $('#wall-start-y').val();
    let y2 = $('#wall-end-y').val();
    let z1 = $('#wall-start-height').val();
    let z2 = $('#wall-end-height').val();
    addNewWall(x1,y1,z1,x2,y2,z2);
});