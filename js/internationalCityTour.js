document.addEventListener('DOMContentLoaded', ()=>{

    var form = document.querySelector('.searchBar');
    
    const clone = document.querySelector('.container').cloneNode(true);
   
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        document.getElementById('searchResult').style.display = 'block';
        let keyword =document.querySelector('#keyword').value.toLowerCase();
        let cities =  document.querySelectorAll('.container h1');
        document.querySelector('.container h2').style.display = 'none';
        console.log(document.querySelector('.container'));
        let count=0;
        cities.forEach((city)=>{
            let title = city.textContent.toLowerCase();
            if(title.indexOf(keyword)!= -1){
                city.parentElement.style.display = 'block';
                count++;
            }else{
                city.parentElement.style.display = 'none';
            }
        })
        if(count==0){
            document.querySelector('#searchResult h2').style.display = 'block';
        }else{
            document.querySelector('#searchResult h2').style.display = 'none';

        }
        
        // $('#searchResult').attr('display', 'block');
        console.log(clone);
        clone.querySelectorAll('li').forEach((li)=>{
            li.style.display = 'block';
        })
        
        $('.container').after(clone);
    })


})  