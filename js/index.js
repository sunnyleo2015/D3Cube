$(()=>{
    threeStart();
    $('[data-toggle="popover"]').popover();
});

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