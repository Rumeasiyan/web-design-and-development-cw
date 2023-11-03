document.addEventListener("DOMContentLoaded", function() {
    const whitecolor = document.getElementById("white");
    const red = document.getElementById("red");
    const random = document.getElementById("random");

    
    document.getElementById("smaller").addEventListener("click", function() {
        document.getElementById("galleryHeading").style.fontSize = "100px";
        
        const description = document.getElementsByClassName("paragraphText");
        for (let index = 0; index < description.length; index++) {
            description[index].style.fontSize = "12px";
        }
        description.length = 0;

        const headingTwo = document.getElementsByClassName("heading");
        for (let index = 0; index < headingTwo.length; index++) {
            headingTwo[index].style.fontSize = "18px";
        }
        headingTwo.length = 0;
    });
    
    document.getElementById("regular").addEventListener("click", function() {
        document.getElementById("galleryHeading").style.fontSize = "150px";
        
        const description = document.getElementsByClassName("paragraphText");
        for (let index = 0; index < description.length; index++) {
            description[index].style.fontSize = "16px";
        }
        description.length = 0;

        const headingTwo = document.getElementsByClassName("heading");
        for (let index = 0; index < headingTwo.length; index++) {
            headingTwo[index].style.fontSize = "26px";
        }
        headingTwo.length = 0;

    });
    
    document.getElementById("larger").addEventListener("click", function() {
        document.getElementById("galleryHeading").style.fontSize = "200px";
        
        const description = document.getElementsByClassName("paragraphText");
        for (let index = 0; index < description.length; index++) {
            description[index].style.fontSize = "24px";
        }
        description.length = 0;

        const headingTwo = document.getElementsByClassName("heading");
        for (let index = 0; index < headingTwo.length; index++) {
            headingTwo[index].style.fontSize = "36px";
        }
        headingTwo.length = 0;
    });

    red.addEventListener("click", function() {
        document.body.style.setProperty('background', 'linear-gradient(to bottom right, #8B0000, #000000)');
    });

    whitecolor.addEventListener("click", function() {
        document.body.style.setProperty('background', 'linear-gradient(to bottom right, #2c3e50, #ffffff)');
    });

    random.addEventListener("click", function() {
        // reference: https://www.w3schools.com/jsref/jsref_random.asp
        // reference: https://www.scaler.com/topics/javascript-string-format/
        let red1 = Math.random() * 256;
        let red2 = Math.random() * 256;
        let blue1 = Math.random() * 256;
        let blue2 = Math.random() * 256;
        let green1 = Math.random() * 256;
        let green2 = Math.random() * 256;
        let rgb1 = `rgb(${red1}, ${green1}, ${blue1})`;
        let rgb2 = `rgb(${red2}, ${green2}, ${blue2})`;
        document.body.style.setProperty(`background`, `linear-gradient(to bottom right, ${rgb1}, ${rgb2})`);
    });
});