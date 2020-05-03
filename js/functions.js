//READ ME İÇERİSİNDE NERELERDE KULLANILDIĞINDAN BAHSEDİLDİ



//üye ol butonları içn pop-up
function uyeOl() {
    alert("Üyelik fırsatlarınızdan faydalanmak için mail kutunuzu kontrol ediniz!");
  }

//kayan yazı
KayanYazi=function(nesne,zaman){
    let yaziNesne=nesne;
   
   setInterval(function(){
       let yazi  = yaziNesne.innerHTML;
       let harf  = yazi.substring(0,1);
       let kalan = yazi.substring(1,yazi.length);
       kalan=kalan+harf
       yaziNesne.innerHTML=kalan;
   }, zaman);
}
   
var nesne=document.getElementById("yazi"); 
KayanYazi(nesne,750);  


//search 
function searchControl(){
    var form1=document.getElementById("degerkontrol");

    var kelime=form1[0].value.trim();
    
    if(kelime.length<=3){
       document.getElementById("sonuc").innerHTML="3 harften daha fazla, anlamlı bir kelime girmelisiniz.";
        return false;
    }

    return true;
}

//giriş yap kontrol paneli
function loginFormControl(){
    //validity nesnesinden yararlanarak bazi kontrol yapacagiz

    var emailadresi=document.getElementById("gırısyapemail");
    var sifre=document.getElementById("gırısyappass");

    var mesaj2="",mesaj3="";

  
    if(emailadresi.validity.typeMismatch){
        mesaj2="Bu deger Mail adresi gibi gorunmuyor";
    }else if(emailadresi.validity.valueMissing){
        mesaj2="Giriş yapabilmeniz için gerekli.";
    }


    if(sifre.validity.valueMissing){
        mesaj3="Giriş yapabilmeniz için gerekli.";
    }else if(sifre.validity.patternMismatch){
        mesaj3="Şifreniz kurallara uygun değil.";
    }else{

    }

    emailadresi.setCustomValidity(mesaj2);
    sifre.setCustomValidity(mesaj3);

}

//scroll top
topbutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}