exports.hitungJarak = (waktuAwal, waktuAkhir, kecepatanAwal) => {
    let jarak = 0;
    let waktu = 0;
    let count = 0;
    let arrWaktuAwal = [];
    let arrWaktuAkhir = [];
    let strWaktuAwal = "";
    let strWaktuAkhir = "";
    let kecepatan = kecepatanAwal;


    for(let i=0; i<waktuAwal.length; i++){
        strWaktuAwal += waktuAwal[i];
        strWaktuAkhir += waktuAkhir[i];
        if(waktuAwal[i]===":" || i===waktuAkhir.length-1){
            arrWaktuAwal[count] = parseInt(strWaktuAwal);
            arrWaktuAkhir[count] = parseInt(strWaktuAkhir);
            strWaktuAwal = "";
            strWaktuAkhir = "";
            count++;
        }
    }

    let detikMulai = (arrWaktuAwal[0] * 3600) + (arrWaktuAwal[1] * 60) + arrWaktuAwal[2];
    let detikSelesai = (arrWaktuAkhir[0] * 3600) + (arrWaktuAkhir[1] * 60) + arrWaktuAkhir[2];


    waktu = 5 * 60;
    jarak += kecepatan * waktu;
    
    detikMulai += waktu;
    
    kecepatan += 2;
    waktu = 10 * 60;
    jarak += kecepatan * waktu;
    
    detikMulai += waktu;
    
    let waktuTotal = detikSelesai - detikMulai;
    let kecepatanRataRata = kecepatan;
    
    for(let x=0; x<=waktuTotal; x+=10*60){
        kecepatanRataRata += 1;
    }
    jarak += kecepatanRataRata * waktuTotal;

    // jarak /= 1000;

    return jarak + "m";
}