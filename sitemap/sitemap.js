document.addEventListener("DOMContentLoaded", function() {
    const rectmain = document.getElementById("rectmain");
    const rectcontentpage = document.getElementById("rectcontentpage");
    const rectbuyproducts = document.getElementById("rectbuyproducts");
    const rectqueryform = document.getElementById("rectqueryform");
    const rectquiz = document.getElementById("rectquiz");
    const rectstudentdetails = document.getElementById("rectstudentdetails");
    const rectsitemap = document.getElementById("rectsitemap");
    const rectgallery = document.getElementById("rectgallery");
    
    rectmain.addEventListener("click", function() {
        document.location.href = "../Homepage/Homepage.html";
    });
    
    
    rectcontentpage.addEventListener("click", function() {
        document.location.href = "../contentpage/contentpage.html";
    });
    
    rectbuyproducts.addEventListener("click", function() {
        document.location.href = "../BuyProducts/BuyProducts.html";
    });
    
    rectqueryform.addEventListener("click", function() {
        document.location.href = "../FormPage/formPage.html";
    });
    
    rectquiz.addEventListener("click", function() {
        document.location.href = "../quiz/quiz.html";
    });
    
    rectstudentdetails.addEventListener("click", function() {
        document.location.href = "../aboutus/aboutus.html";
    });
    
    rectsitemap.addEventListener("click", function() {
        document.location.href = "../sitemap/sitemap.html";
    });
    
    rectgallery.addEventListener("click", function() {
        document.location.href = "../gallery/gallery.html";
    });
});
