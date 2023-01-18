document.addEventListener("DOMContentLoaded", function() {
    var totalPrice =0;
    var count = 0;
    $('.addToChart').on('submit', function(e) {
        e.preventDefault();
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        count =0;
        if(checkboxes.length >4 || checkboxes.length==0){
            alert('Please select at least 1 and maximum 4 city tours!');
        }else{
            let quantity = 0;
           
            checkboxes.forEach(function(checkbox){
                quantity = checkbox.nextElementSibling.nextElementSibling.value;
                if(quantity==0){
                    alert('Please enter at least 1 for the item quantity!');
                    count++;
                    return false;
                }
              
                totalPrice+=parseInt(checkbox.previousElementSibling.children[0].textContent)*quantity;             
            })
            if(count==0){
                document.querySelector('#total').textContent=totalPrice;
            }
        }
    })

    $('#main').on('submit', function(e) {
        
        let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
       
        if(checkboxes.length >4 || checkboxes.length==0){
            alert('Please select at least 1 and maximum 4 city tours!');
            return false;
        }else{
            let quantity = 0;
            let productName ='';
            let price = 0;
            let orders = new Array();
            count = 0;
            checkboxes.forEach(function(checkbox){

                productName = checkbox.previousElementSibling.previousElementSibling.previousElementSibling.textContent +": " +checkbox.previousElementSibling.previousElementSibling.textContent ;
                console.log(productName);
              
                quantity = checkbox.nextElementSibling.nextElementSibling.value;
                console.log(quantity);
                if(quantity==0){
                    alert('Please enter at least 1 for the item quantity!');
                    count++;
                    return false;
                }
                price =parseInt(checkbox.previousElementSibling.children[0].textContent)*quantity;
                console.log(price);
                let order = {
                    'productName':productName,
                    'quantity':quantity,
                    'price':price,
                }
                orders.push(order);
             })
             
            
             if(count>0){             
                e.preventDefault();
                
             }else{
                localStorage.setItem('orders',JSON.stringify(orders));
                return true;
             }
           
             
          
        }
    })
})