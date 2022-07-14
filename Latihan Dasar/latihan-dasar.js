var nama = "Sumiaji";
var usia = 45;
var alamat = "Jl. Gunung Agung";
const hobi = ["Memancing", "Bersepeda", "Memasak"];
var sosmed = {
    facebook: "Sumiaji",
    twitter: "sumiaji_tweet"
};

//ubah data pertama dalam array [hobi]
hobi[0] = "Berkebun";

const infoSaya = {
    nama: nama,
    usia: usia,
    alamat: alamat,
    hobi: hobi,
    sosmed: sosmed
}

function cetakNama(nama) {
    console.log("Hello nama saya " + nama);
}

function penjumlahan(a1, a2) {
    return a1 + a2;
}

function cetakHobi() {
    var res = "Hobi : ";
    hobi.forEach(
        function(e) {
            res += "\n\t" + e;
        }
    )
    console.log(res);
}