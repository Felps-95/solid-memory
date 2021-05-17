 function change(){
            var elem = document.getElementById('div1');
            var color = 'rgba('.concat(Math.random()*256,',',Math.random()*256,',',Math.random()*256,',',Math.random(),')')
            elem.style.color = color;
        }
