(function() {
    var rotator = document.getElementById('photo1');  
   
    var delayInSeconds = 1;                           
   
    var images = ['1.jpg','2.jpg', '3.jpg','4.jpg','9.jpg', '10.jpg'];
    
    
    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 2000);
    })();

    (function() {
        var rotator = document.getElementById('photo2');  
       
        var delayInSeconds = 1;                           
       
        var images = ['3.jpg','10.jpg', '7.jpg','4.jpg','9.jpg', '1.jpg'];
        
        
        var num = 0;
        var changeImage = function() {
            var len = images.length;
            rotator.src = images[num++];
            if (num == len) {
                num = 0;
            }
        };
        setInterval(changeImage, delayInSeconds * 2000);
        })();

        (function() {
            var rotator = document.getElementById('photo3');  
           
            var delayInSeconds = 1;                           
           
            var images = ['2.jpg','5.jpg', '7.jpg','9.jpg','10.jpg', '1.jpg'];
            
            
            var num = 0;
            var changeImage = function() {
                var len = images.length;
                rotator.src = images[num++];
                if (num == len) {
                    num = 0;
                }
            };
            setInterval(changeImage, delayInSeconds * 2000);
            })();

            (function() {
                var rotator = document.getElementById('photo4');  
               
                var delayInSeconds = 1;                           
               
                var images = ['10.jpg','9.jpg', '7.jpg','6.jpg','5.jpg', '4.jpg'];
                
                
                var num = 0;
                var changeImage = function() {
                    var len = images.length;
                    rotator.src = images[num++];
                    if (num == len) {
                        num = 0;
                    }
                };
                setInterval(changeImage, delayInSeconds * 2000);
                })();