const fr= document.getElementById('form');
const but= document.querySelector('.button') ;
const ip= document.getElementById('temvalue');
const tu= document.querySelector('#tempunit') ;
let conv ;

const resu= document.querySelector('.result')  ;

fr.addEventListener('submit', function(e){
    e.preventDefault();
    const va= ip.value.trim(); 
const bh= parseFloat(va);
    if(va==''){
        alert('Please enter a valid number');
    }

    else if(isNaN(bh)){
        alert('Please enter a avlid number') ;
    }
    else{
        if(tu.value=='celsius'){
conv ={
    celsius: bh,
    fahrenheit: bh * 9 / 5 + 32,
    Kelvin : bh + 273.15 
}


        }
        else if(tu.value=='fahrenheit'){
            conv ={
                celsius:(bh - 32) * 5 / 9,
                fahrenheit: bh,
                Kelvin : (bh - 32) * 5 / 9 + 273.15
            }
        }
        else{
            conv ={
                celsius: bh - 273.15,
                fahrenheit: (bh - 273.15) * 9 / 5 + 32,
                Kelvin: bh
            }
        }

    }
resu.innerHTML=`<div>
  <p>Converted temperatures:</p>

  <ul>
            <li>Celsius: ${conv.celsius.toFixed(2) + '°C'}</li>
            <li>Fahrenheit: ${conv.fahrenheit.toFixed(2) + '°F'}</li>
            <li>Kelvin: ${conv.Kelvin.toFixed(2) + 'K'}</li>
        </ul>
</div>`

})

