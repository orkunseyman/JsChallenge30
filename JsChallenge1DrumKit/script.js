

    window.addEventListener('keydown',function (e) {
            
            const key = document.querySelector(`#${e.key}`);
            key.style.border="thick solid #e25822";
            const sound = document.querySelector(`#${e.key}sound`);
            if(!sound) return; 
            sound.currentTime = 0; 
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