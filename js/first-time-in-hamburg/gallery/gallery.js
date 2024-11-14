    const galleryContainer = document.getElementById('gallery-container');
    
    for (let i = 1; i <= 44; i++) {
        const link = document.createElement('a');
        link.target = "_blank";
        link.href = `assets/first-hamburg/gallery/gallery_image_${i}.jpg`;
        
        const img = document.createElement('img');
        img.src = `assets/first-hamburg/gallery/gallery_image_${i}.jpg`;
        img.width = 400;

        link.appendChild(img);
        galleryContainer.appendChild(link);
    }