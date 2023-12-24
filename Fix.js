/*            TRANG CHU        */
document.addEventListener("DOMContentLoaded", function() {
    var parent = document.getElementById("CT");
    var child = document.getElementById("Trangchu");
    
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1.0]
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.target.id === "Trangchu") {
                child.classList.remove("highlight");
                
                if (entry.isIntersecting) {
                    parent.classList.add("highlight");
                } else {
                    parent.classList.remove("highlight");
                }
            }
        });
    }, options);
    
    observer.observe(parent);
    observer.observe(child);
});

/*            THONG TIN        */
document.addEventListener("DOMContentLoaded", function() {
    var parent = document.getElementById("TT");
    var child = document.getElementById("Thongtin");
    
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1.0]
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.target.id === "Thongtin") {
                child.classList.remove("highlight");
                
                if (entry.isIntersecting) {
                    parent.classList.add("highlight");
                } else {
                    parent.classList.remove("highlight");
                }
            }
        });
    }, options);
    
    observer.observe(parent);
    observer.observe(child);
});

/*         SAN PHAM         */
document.addEventListener("DOMContentLoaded", function() {
    var parent = document.getElementById("SP");
    var child = document.getElementById("Sanpham");
    
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 1.0]
    };
    
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.target.id === "Sanpham") {
                child.classList.remove("highlight");
                
                if (entry.isIntersecting) {
                    parent.classList.add("highlight");
                } else {
                    parent.classList.remove("highlight");
                }
            }
        });
    }, options);
    
    observer.observe(parent);
    observer.observe(child);
});



// //<script language="javascript">
// var button = document.getElementById("SP");
// button.onclick = function(){
//     alert("Lỗi rồi! Chưa có thông tin");
// }
// </script>