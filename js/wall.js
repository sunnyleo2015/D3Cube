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
    wall.name = `wall-${Date.parse(new Date())}${wallList.length}`;
    wallList.push({wall:wall,checked: false});
    scene.add(wall);
};

let initWallList = function () {
    $('#wall-list').html('');
    $.each(wallList, (index)=>{
        let wall = wallList[index];
        $('#wall-list').append(`
            <li id="wall-item-${wall.wall.name}">
              <div>
                <input type="checkbox" name="deleteWallLists" value="${wall.wall.name}" ${wall.checked?'checked': ''}>
                name:<span>${wall.wall.name}</span>
                <button class="btn btn-sm btn-default" type="button">Delete</button>
              </div>
            </li>
          `);
        $(`#wall-item-${wall.wall.name}`).find('button').on('click', ()=>{
            deleteWall(wall.wall.name);
        });
        $(`#wall-item-${wall.wall.name}`).find('input').on('change', ()=>{
            wall.checked = $(`#wall-item-${wall.wall.name}`).find('input').is(':checked');
            if(wall.checked){
                scene.getObjectByName(wall.wall.name).material = new THREE.MeshBasicMaterial({color: 0x0f82de, transparent: true,opacity:0.8});
            }else {
                scene.getObjectByName(wall.wall.name).material = new THREE.MeshBasicMaterial({color: 0x5bc0de, transparent: true,opacity:0.8})
            }
        })
    });
};

function deleteWall(name) {
    $(`#wall-item-${name}`).remove();

    scene.remove(scene.getObjectByName(name));

    wallList = _.remove(wallList, (item)=>{
        return item.wall.name !== name;
    });
}

let deleteChooseWalls = function () {
    let chooseWalls = [];
    $('[name=deleteWallLists]:checked').each(function(){
       chooseWalls.push($(this).val());
    });
    $.each(chooseWalls, (index)=>{
        deleteWall(chooseWalls[index]);
    });
};

let deleteAllWalls = function(){
    $.each(wallList, (index)=>{
        scene.remove(scene.getObjectByName(wallList[index].name));
    });
    $('#wall-list').html('');
    wallList = [];
};