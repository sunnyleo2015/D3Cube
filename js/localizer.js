let localizes = [
    {name: 'localizr-01',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}},
    {name: 'localize-02',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}},
    {name: 'localize-03',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}},
    {name: 'localize-04',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}},
    {name: 'localize-05',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}},
    {name: 'localize-06',position: {x:Math.round(Math.random() * 1500), y:Math.round(Math.random() * 1500), z:Math.round(Math.random() * 1500)}}
];

function initLocalizesList(){
    $('.localizer-list').html('');
    $.each(localizes,(index)=>{
        initLocalize(localizes[index]);
        $('.localizer-list').append(
            `
            <li class=" ${localizes[index].name}">
                <div class="name">${localizes[index].name}</div>
                <span class="position">x: ${localizes[index].position.x}</span>
                <span class="position">y: ${localizes[index].position.y}</span>
                <span class="position">z: ${localizes[index].position.z}</span>
            </li>
            `
        );
        $(`.${localizes[index].name}`).on('click',()=>{
            trackBallControls.target.set(localizes[index].position.x,localizes[index].position.y,localizes[index].position.z)
        })
    });
}