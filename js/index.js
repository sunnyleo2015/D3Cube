window.onload = threeStart();

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