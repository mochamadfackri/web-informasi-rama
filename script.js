const buttonUpdate = document.getElementsByTagName('a')[8]

buttonUpdate.addEventListener('click', function () {
    const namaWeb = document.querySelector('h1.judul')
    const namaWebBaru = prompt('masukan NAMA WEBSITE anda :')
    namaWeb.innerHTML = namaWebBaru
    
    
    const judulArtikel = document.querySelector('.main h2')
    const judulArtikelBaru = prompt('masukan JUDUL ARTIKEL anda :')
    judulArtikel.innerHTML = judulArtikelBaru
    
    
    const penulisA = document.querySelector('.main p.penulis a')
    const penulisH3 = document.querySelector('.sidebar h3')
    const penulisBaru = prompt('masukan NAMA PENULIS :')
    penulisA.innerHTML = penulisBaru
    penulisH3.innerHTML = penulisBaru

    return
})



const tanggal = document.querySelector('span.time #tanggal')
const bulan = document.querySelector('span.time #bulan')
const tahun = document.querySelector('span.time #tahun')
const jam = document.querySelector('span.time #jam')
const menit = document.querySelector('span.time #menit')
const detik = document.querySelector('span.time #detik')

var currentTime = new Date();
var year = currentTime.getFullYear();
var month = currentTime.getMonth() + 1;
var date = currentTime.getDate();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

tanggal.innerHTML = date
bulan.innerHTML = month
tahun.innerHTML = year
jam.innerHTML = hours
menit.innerHTML = minutes
detik.innerHTML = seconds


const close = document.querySelector('.ads a.close')
const ads = document.querySelector('.ads')

close.addEventListener('click', function () {
    ads.style.display = 'none'
})