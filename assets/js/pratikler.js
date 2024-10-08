//soru1 : Basit İndirim Hesaplama
// let fiyat = Number(prompt('Ürün fiyatı : '));
// let indirim = Number(prompt('İndirim yüzdesi : '));;
// let tutar = Number(fiyat - (fiyat*indirim /100));
// alert('Ödemeniz gereken tutar : ' + tutar);

//soru2 : Vize ve Final Notu ile Ortalama
// let vizeNotu = Number(prompt('Vize notu : '));
// let finalNotu = Number(prompt('Final notu : '));
// let ort = Number(vizeNotu * 40/ 100) + Number(finalNotu * 60 / 100);
// if(ort>=50 && ort<=100){
//   alert('Ortalamanız :  '+ ort + ', geçtiniz');
// } 
// else if(ort>=40 && ort<50){
//   alert('Ortalamanız :  '+ ort + ', şartlı geçtiniz');
// }
// else if(ort=>0 && ort<40) {
//   alert('Ortalamanız :  '+ ort + ', kaldınız');
// }
// else {
//   alert('Girdiğiniz notlar hesaplamaya uygun değil');
// }

//sor3 : Haftanın Günü
// let sayı = Number(prompt('Bir sayı giriniz : '));
// switch(sayı) {
//   case 1 : alert('Bu sayıya karşılık gelen gün : Pazartesi');
//   break;
//   case 2 : alert('Bu sayıya karşılık gelen gün : Salı');
//   break;
//   case 3 : alert('Bu sayıya karşılık gelen gün : Çarşamba');
//   break;
//   case 4 : alert('Bu sayıya karşılık gelen gün : Perşembe');
//   break;
//   case 5 : alert('Bu sayıya karşılık gelen gün : Cuma');
//   break;
//   case 6 : alert('Bu sayıya karşılık gelen gün : Cumartesi');
//   break;
//   case 7 : alert('Bu sayıya karşılık gelen gün : Pazar');
//   break;
// }

//soru4 : Büyük Sayıyı Bulma
// let max = 1;
// let ilkSayi = Number(prompt('1. sayıyı giriniz : '));
// let ikinciSayi = Number(prompt('2. sayıyı giriniz : '));
// let ucuncuSayi = Number(prompt('3. sayıyı giriniz : '));
// if( ilkSayi>=max){
//   max=ilkSayi;
//   if(ikinciSayi>=max){
//     max=ikinciSayi;
//   }
//   if(ucuncuSayi>=max){
//     max=ucuncuSayi;
//   }
// }
// alert('Max sayı : ' + max);

/**/ 
// soru5 : Saniyeyi Saate Çevirme
// let sayi = Number(prompt('Saniye değeri : '));
// let dakika = 0;
// let saat = 0;
// let saniye = sayi%60;
// for(let i = 1 ; i<=sayi ; i++) {
//   if(i%60==0){
//     dakika++;
//     dakika = dakika%60;
//   }
//   if(i%3600==0) {
//     saat++;
//   }
// }
// alert (sayi +' saniye :  ' + saat +' saat ' + dakika +' dakika ' + saniye + ' saniye ');

// alert('Girdiğiniz saniye : ' + saat + " saat " + dakika + " dakika " + saniye + " saniye ");

/*?patliyor*/ 
//soru6 : Güncel Yaş Hesaplama
// let dogumGunu = prompt('Doğum gününüz giriniz : ');
// let dogumAyi = prompt('Doğum ayınızı giriniz : ');
// let dogumYili = prompt('Doğum yılınızı giriniz : ');

// let gun = new Date().getDate();
// let ay = new Date().getMonth();
// let yil = new Date().getFullYear();

// let yasYil = yil - dogumYili;
// let yasGun = gun - dogumGunu;
// let yasAy = ay - dogumAyi + 1 ;


//   if(ay<dogumAyi-1) 
//   {
//     yasYil--;
//   }
//   else if(ay==dogumAyi-1 && gun<dogumGunu-1) 
//   {
//     yasYil --;
//     yasAy--;
//   }

//   // if(gun<dogumGunu) 
//   // {

//   // }


// console.log('gün : ' + gun);

//   console.log('doğum tarihi : ' + dogumGunu + '/' + dogumAyi + '/' + dogumYili);
//   console.log('Dünyada bulunduğunuz süre: ' + yasYil +  ' yıl '  + yasAy + ' ay ');
// alert('Yaşınız : ' +  let_yılYas + " yıl " + let_ayYas + " ay " + let_günYas + " gün ");

//soru7 : Saatlik Ücret Hesaplama
// let saat = Number(prompt('Çalıştığınız saat : '));
// let saatBasiUcret = Number(prompt('Saat başı ücret : '));
// let toplamKazanc = saat * saatBasiUcret;
// alert('Toplam kazanç : ' + toplamKazanc);

//soru8 : Aylık Taksit Hesaplama
// let krediMiktari = Number(prompt('Kredi miktarı : '));
// let taksitSayisi = Number(prompt('Taksit sayısı : '));
// let faizOrani = Number(prompt('Faiz oranı : '));
// let aylikTaksit = Number(krediMiktari/taksitSayisi);
// let aylikFaizliTaksit = Number(aylikTaksit + (aylikTaksit * faizOrani / 100));
// alert('Aylık taksit : ' + aylikTaksit + '\nFaizli aylık taksit : ' + aylikFaizliTaksit);

//soru9 : Kullanıcı Adı ve Şifre Kontrolü
// let kullaniciAdi = prompt('Kullanıcı adı : ');
// let sifre = Number(prompt('Şifre : ')) ;
// if(kullaniciAdi == 'admin' && sifre == 1234) {
//   alert('Giriş başarılı');
// }
// else {
//   alert('Kullanıcı adı veya şifre hatalı');
// }


//soru10 : Net Kar Hesaplama
// let maliyet = Number(prompt('Maliyet :  '));
// let satisBedeli = Number(prompt('Satış bedeli'));
// let gelirVergisi = Number(satisBedeli * 25 / 100);
// let fark = Number(satisBedeli - maliyet);
// let kar = Number(fark + (fark*20/100)) - gelirVergisi;
// console.log('Maliyet : ' + maliyet);
// console.log('Satış bedeli : ' + satisBedeli);
// console.log('Gelir vergisi : ' + gelirVergisi);
// console.log('Net kar : ' + kar);
// alert('Maliyet : ' + maliyet +'\nSatış bedeli : '+ satisBedeli + '\nGelir vergisi : ' + gelirVergisi + '\nNet kar : ' + kar);