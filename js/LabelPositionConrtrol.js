function renderLabelPositionInfo(infoList){
    $('#label-position-list').html('');
    for(let i=0; i<infoList.length; i++){
        $('#label-position-list').append(
            `<li>
                <span class="name">${infolist[i].name}</span>
                <span class="position">x: ${infolist[i].position.x};y: ${infolist[i].position.y};z: ${infolist[i].position.z}</span>
             </li>`
        )
    }
}