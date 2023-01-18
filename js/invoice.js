document.addEventListener("DOMContentLoaded", function() { 
    var orders = JSON.parse(localStorage.getItem("orders"));
    console.log(orders);
    var subtotal = 0;
    var total=0;
    for(let i = 0; i < orders.length; i++) {
        if(i==0){
            document.querySelector('#productName').textContent=orders[i].productName;
            document.querySelector('#quantity').textContent=orders[i].quantity;
            let price =orders[i].price;
            document.querySelector('#price').textContent= price +"$";
            subtotal+=price;
        }else{

            let newContent = document.querySelector('.invoice-content').cloneNode(true);
           
            newContent.querySelector('#productName').textContent=orders[i].productName;
            newContent.querySelector('#quantity').textContent=orders[i].quantity;
            let price =orders[i].price;
            newContent.querySelector('#price').textContent=price+"$";
            subtotal+=price;
          
            $('#invoice-total').before(newContent);

        }
    }
    document.querySelector('#subtotal').textContent=subtotal+"$";
    let QST =(subtotal*0.09975).toFixed(2);
    document.querySelector('#QST').textContent=QST+"$";
    let GST =(subtotal*0.05).toFixed(2)
    document.querySelector('#GST').textContent= GST +"$";
    total = (Number(subtotal)+Number(QST)+Number(GST)).toFixed(2)+"$";
    $('#total').text(total);
   
    document.querySelector('#totalPurchase').textContent=total;




    //validation for Payment
    var pattern ={
        cardNumber:/^\d{15,16}$/,
        CVC: /^[0-9]{3,4}$/,
        nameOnCard: /^[a-zA-Z][a-z\sA-Z]*$/,
        
        expirationDate: /^(((0[8-9]|1[0-2])[-/\s]?22)|((0[1-9]|1[0-2])[-/\s]?(2[3-9]|[3-9][3-9])))$/,
        
        name:/^[a-zA-Z][a-z-\sA-Z]*$/,
        address:/^[a-zA-Z0-9][a-zA-Z0-9,\s-]*$/,
        address2:/^\w*$/,
        city: /^[a-zA-Z][a-zA-Z\s]*$/,
        postalCode: /^[a-zA-Z][0-9][a-zA-Z][\s]?[0-9][a-zA-Z][0-9]$/,
        province: /^[a-zA-Z][a-zA-Z\s]*$/,
        country: /^[a-zA-Z][a-zA-Z\s]*$/
    }
    function validate(field, regEx){
        if(regEx.test(field.value)){
            field.className = 'valid';
        }
        else{
            field.className = 'invalid';                
        }
    }

    var inputs = document.querySelectorAll('input');
   
    inputs.forEach((input)=>{
        input.addEventListener('keyup', (e)=>{
            validate(e.target, pattern[e.target.attributes.name.value]);  
        })
    })

    var placeOrder = document.querySelector('#placeOrder');
    
    placeOrder.addEventListener('click', ()=>{
        for(let i=0; i<inputs.length; i++) {
            let name = inputs[i].attributes.name.value;
          
            if(inputs[i].value == '' && name != 'address2'){
                
                alert('Please enter all the information with * !');
                return false;
            }
            if(inputs[i].className == "invalid"){
                
                switch(name){
                    case 'cardNumber': alert('Please enter valid card number!');return false;
                    case 'CVC': alert('please enter valid CVC !');return false;
                    case 'nameOnCard':  alert('Please enter valid name on the card !'); return false;
                    case 'expirationDate': alert('Please enter valid expiration date !'); return false;
                    case 'name': alert('Please enter your valid name !'); return false;
                    case 'address': alert('Please enter your address !'); return false;
                    case 'city': alert('Please enter valid city !'); return false;
                    case 'postalCode':   alert('Please enter your valid postalCode !');return false;
                    case 'province':   alert('Please enter your valid province !');return false;
                    case 'country': alert('Please enter your valid country!');return false;
                }   
            }       
        }
     
    
        if(!(document.querySelector('#checkbox').checked)){
            alert('Please agree with the terms and conditions !');
            return false;
        }else{
            alert('Thanks for your purchase !');
            return true;
        }      
    })



 })