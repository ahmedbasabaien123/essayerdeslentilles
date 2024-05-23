let companykey = "xlei4EaTNrAe5kMVsNGXDyxXkfeozeWx47YAJ6ub8SEZfDYFZ7J/E3HcG5WGmKGJ";

function toggleDropdown(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function tryOZIA(productKey) {
    startFitting(productKey);
}

function tryQueens(productKey) {
    startFitting(productKey);
}

function tryDeminiac() {
    startFitting('product-deminiac');
}

function startFitting(productKey) {
    var productkey = productKey;
    checkProductKey(function (result) {
        if (result == 0) {
            $('.fm-fitting-btn').show();
            console.log("success");
        } else {
            $('.fm-fitting-btn').hide();
            console.log("Erreur avec les clés");
        }
    });
}

fmCaptureFilename = 'fm-fitting-capture.png';
lensAlpha = 50;
