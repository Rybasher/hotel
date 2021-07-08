
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 46.4871177, lng: 30.7366792 },
        zoom: 16,
        mapId: '41ff5b65aa282771'
    });
    let operniy =
        "<div class='info-window'>" +
        "<img src='operniy.png' class='info-window__img'>" +
        "</div>";


    const opern_mark = new google.maps.Marker({
        position: { lat: 46.4871177, lng: 30.7366792 },
        map,
        title: "Youshi house!",
        icon: {
            url: "circle.svg",
        },
        animation: google.maps.Animation.DROP,

    });

    const infowindow = new google.maps.InfoWindow({
        content: operniy,
    });

    opern_mark.addListener("mouseover", () => {
        infowindow.open(map, opern_mark);
    });


}