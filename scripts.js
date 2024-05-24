let companykey = "xlei4EaTNrAe5kMVsNGXD26eCMwfSXsNveYjl4BpV+wFnyNMR6ij/X3vKIrTDKyX";

function toggleDropdown(id) {
    const element = document.getElementById(id);
    const dropdowns = document.querySelectorAll('.submenu-content');
    
    dropdowns.forEach(dropdown => {
        if (dropdown !== element) {
            dropdown.style.display = 'none'; // Fermer tous les autres sous-menus
        }
    });
    
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function tryOZIA(productKey) {
    closeAllSubmenus(); // Fermer tous les sous-menus avant d'ouvrir l'essai
    if (productKey === 'product-1ton') {
        window.location.href = "https://apilive.fittingmonster.com/client/index_v2.html";
    } else {
        startFitting(productKey);
    }
}

function tryQueens(productKey) {
    closeAllSubmenus(); // Fermer tous les sous-menus avant d'ouvrir l'essai
    startFitting(productKey);
}

function tryDeminiac() {
    closeAllSubmenus(); // Fermer tous les sous-menus avant d'ouvrir l'essai
    startFitting('product-deminiac');
}

function closeAllSubmenus() {
    const submenus = document.querySelectorAll('.submenu-content');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
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







document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    var button = dropdown.querySelector('.dropbtn');
    var content = dropdown.querySelector('.dropdown-content');

    button.addEventListener('click', function() {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            content.style.display = 'none';
        }
    });
});
