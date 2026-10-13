function bukaDetail(judul, penulis, cover, status) {

    document.getElementById("detailJudul").textContent = judul;

    document.getElementById("detailPenulis").textContent =
        "Penulis: " + penulis;

    document.getElementById("detailCover").src = cover;

    document.getElementById("detailStatus").textContent = status;

    document.getElementById("detail").style.display = "flex";
}


function tutupDetail() {

    document.getElementById("detail").style.display = "none";
}