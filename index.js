(
    function(){
        let screen= document.querySelector('.display');
        let buttons= document.querySelectorAll('.btn');
        let clear= document.querySelector('.clear');
        let result= document.querySelector('.equals');
        buttons.forEach(function(button){
            button.addEventListener('click',function(e){
                let value =e.target.dataset.num;
                screen.value += value;

            })
        });
        result.addEventListener('click',function(e){
            if(screen.value===""){
                screen.value="";
            }
            else{
                let ansswer= eval(screen.value);
                screen.value=ansswer;
            }
        })
      
        clear.addEventListener('click',function(e){
            screen.value="";
        })
        



    
    })();
