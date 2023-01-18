document.addEventListener('DOMContentLoaded', ()=>{

    var images=document.querySelectorAll('.gallery-image');
    console.log(images);
    images.forEach(function(image) {
        image.addEventListener('click', (e)=>{  
         
            image.setAttribute('width','80%');
            image.setAttribute('height','400px');
            image.parentElement.nextElementSibling.style.display="block";  
            let link = $( "<a href='./media/gallery/"+image.id+".jpg' target='_blank'></a>");
            link.appendTo(image.parentElement);
            link.append(image);
            console.log(link);
          
           

          
        } )
    })

})  
