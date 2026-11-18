document.getElementById("f").addEventListener("submit",function(e){e.preventDefault();var d=new FormData(e.target);
location.href="mailto:iamhollyhennie@gmail.com?subject="+encodeURIComponent("Shopify project enquiry")+"&body="+encodeURIComponent("Name: "+d.get("n")+"\nStore type: "+d.get("t")+"\n\n"+d.get("m"))});
