
var dataList =  [
    "Makan Siang",
    "Makan Malam",
    "Tidur"
];


// Mmebuat Function 
function showNamaList() {
    var namaList = document.getElementById("nama-list");

    // Clear Nama List
    namaList.innerHTML = "";


    // Cetak Semua Barang 
    for(let i= 0; i < dataList.length; i++) {
        var btnEdit = "<a href='#' onclick='editList("+i+")'>Edit</a>";
        var btnDelete = "<a href='#' onclick='deleteList("+i+")'>Delete</a>";

        namaList.innerHTML += "<li>" + dataList[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
    }

}