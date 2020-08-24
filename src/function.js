exports.hitungJarak = (waktuAwal, waktuAkhir, kecepatanAwal) => {
    let jarak = 0;
    let waktu = 0;
    let count = 0;
    let arrWaktuAwal = [];
    let arrWaktuAkhir = [];
    let strWaktuAwal = "";
    let strWaktuAkhir = "";
    let kecepatan = kecepatanAwal;
    let waktuTotal = 0 ;


    for(let i=0; i<waktuAwal.length; i++){
        if(waktuAwal[i]===":" || i===waktuAkhir.length-1){
            arrWaktuAwal[count] = parseInt(strWaktuAwal);
            arrWaktuAkhir[count] = parseInt(strWaktuAkhir);
            strWaktuAwal = "";
            strWaktuAkhir = "";
            count++;
        }else{
            strWaktuAwal += waktuAwal[i];
            strWaktuAkhir += waktuAkhir[i];
        }
    }

    let detikMulai = (arrWaktuAwal[0] * 3600) + (arrWaktuAwal[1] * 60) + arrWaktuAwal[2];
    let detikSelesai = (arrWaktuAkhir[0] * 3600) + (arrWaktuAkhir[1] * 60) + arrWaktuAkhir[2];

    

    
    for(let i = 0; i <= 10 * 60; i++){
        if(i === (10*60)){
            kecepatan += 2;
            jarak += kecepatan * waktu;
            detikMulai += waktu;
            waktuTotal = detikSelesai - detikMulai;
            for(let j=0; j <= waktuTotal; j+=10*60){
                if(j === waktuTotal){
                    jarak += kecepatan * waktuTotal;
                }else{
                    kecepatan += 1;
                }
            }
        }else{
            if(i === (5*60)){
                waktu += 1;
                jarak += kecepatan * waktu;
                detikMulai += waktu;
            }else{
                waktu += 1;
            }
        }
    }
    // jarak /= 1000;

    return jarak + "m";
}