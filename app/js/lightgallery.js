import lightGallery from 'lightgallery';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'


let lightgallery = document.querySelectorAll(".lightgallery");

for (let i = 0; i < lightgallery.length; i++) {
    const element = lightgallery[i];
    lightGallery(element, {
        thumbnail: true,
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
    });
}

