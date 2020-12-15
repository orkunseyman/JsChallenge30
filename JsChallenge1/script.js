// window.addEventListener('keyup',function (e) {
//     switch(e.code){
//         case'KeyA':
//         const key= document.querySelector('.key[data-key="65"]');
//         key.style.border=".4rem solid black";
//         console.log(e);
//         break;
//     }


// }
    
    
    
    // )

    window.addEventListener('keydown',function (e) {
            
            const key = document.querySelector(`#${e.key}`);
            key.style.border="thick solid #e25822";
            const sound = document.querySelector(`#${e.key}sound`);
            sound.play();
    }

        )

    window.addEventListener('keyup',function (e) {
            
            const key = document.querySelector(`#${e.key}`);
            key.style.border=".4rem solid black";
            const sound = document.querySelector(`#${e.key}sound`);
            sound.play();
    }

        )