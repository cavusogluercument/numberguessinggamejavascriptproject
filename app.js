// Değişkenler
let min = 1, 
  max = 10,
  kazananSayi = rastgeleKazananSayi(min, max),
  tahminHakki = 3;

// Elemanların değerlerini bir değişkene aktaralım
const minSayi = document.querySelector(".min"), 
  maxSayi = document.querySelector(".max"),
  tahminInput = document.querySelector("#tahmin-input"),
  tahminbtn = document.querySelector("#tahmin-btn"),
  oyun = document.querySelector(".oyun"),
  mesaj = document.querySelector(".mesaj");
  

  // min ve max sayilari değerleri belirleyelim
  minSayi.textContent = min;
  maxSayi.textContent = max;

// Oyun bittiğinde yeniden başlatalım
oyun.addEventListener("mousedown",function(e){
   if(e.target.className === "tekrar-oyna"){
    window.location.reload();
   }
})


// Tahmine başlayalım

tahminbtn.addEventListener("click",function () {

    const tahminEdilenSayi = tahminInput.value; 

    if (
        tahminEdilenSayi === "" ||
        tahminEdilenSayi < min || 
        tahminEdilenSayi > max
        ) {
        mesajYazdir(
         "Hata ! Boş alan bıraktın veya min - max sayı oranını geçtin...","red"
        );
    }else if(tahminEdilenSayi == kazananSayi)
    {
      oyunBitti(false,"Başarılı !! Doğru Tahmin...");
    }
    else {
    tahminHakki -= 1;
    if(tahminHakki == 0) {
       //Oyun Bitti
      oyunBitti(true,`Tahmin Hakkınız Kalmadı ... Kazanan Sayi : ${kazananSayi}`);
     }else {
        // Oyun Devam ediyor
        mesajYazdir(`Tahmin Hakkınız ${tahminHakki} kaldı...`,
        "red");
     }
    }
});

// Oyun Bitti Fonksiyonu

function oyunBitti(kontrol,msj){


    let color;

    kontrol == true ? (color = "red") : (color = "green") ;

    tahminInput.disabled = true;
    tahminInput.style.borderColor = color;
    mesajYazdir(msj, color);

    // Buton olayını değiştirelim
    tahminbtn.textContent = "Tekrar Oyna";
    tahminbtn.className = "tekrar-oyna";
}

// Mesaj Yazdır Fonksiyonu

function mesajYazdir(msj,color) {
    // Renk değiştirelim
    mesaj.style.color = color ;
    // Mesaj parametresi
    mesaj.textContent = msj;
}


// Rastgele Kazanan Sayi Üretme

function rastgeleKazananSayi(min, max ){
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}
