class Karyawan {
    constructor (nama, gaji) { 
        this.nama = nama;
        this.gaji = gaji;
    }
    hitungBonus() {
        return 0;
    }
    totalGaji() {
        return this.gaji + this.hitungBonus();
    }
}

class KaryawanTetap extends Karyawan{
    hitungBonus() {
        return this.gaji * 0.10;

    }
}
 class KaryawanKontrak extends Karyawan{
    hitungBonus() {
        return this.gaji * 0.05;
    }
 }

 const daftarKaryawan = [
    new KaryawanTetap("Budi",8000000),
    new KaryawanKontrak("Sita",6000000)
 ];

 daftarKaryawan.forEach(karyawan =>{
    const bonus = karyawan.hitungBonus();
    const total = karyawan.totalGaji();
    console.log(`Gaji ${karyawan.nama} Rp. ${karyawan.gaji} dan mendapatkan bonus Rp. ${bonus} jadi total Rp. ${total}`);

 })
