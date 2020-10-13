let annualyBtn = document.querySelector('.annualy-btn');
let monthlyBtn = document.querySelector('.monthly-btn');

function monthly(){
    document.querySelector('.basic h1').textContent = '$39';
    document.querySelector('.basic p').textContent = '/Monthly';

    document.querySelector('.premium h1').textContent = '$49';
    document.querySelector('.premium p').textContent = '/Monthly';

    document.querySelector('.business h1').textContent = '$59';
    document.querySelector('.business p').textContent = '/Monthly';

    monthlyBtn.style.backgroundColor = '#0ead69';
    monthlyBtn.style.color = 'white';
    annualyBtn.style.backgroundColor = '#0ead6926';
    annualyBtn.style.color = '#0ead69';
   
}

function annualy(){
    document.querySelector('.basic h1').textContent = '$468';
    document.querySelector('.basic p').textContent = '/Annualy';

    document.querySelector('.premium h1').textContent = '$588';
    document.querySelector('.premium p').textContent = '/Annualy';

    document.querySelector('.business h1').textContent = '$708';
    document.querySelector('.business p').textContent = '/Annualy';

    annualyBtn.style.backgroundColor = '#0ead69';
    annualyBtn.style.color = 'white';
    monthlyBtn.style.backgroundColor = '#0ead6926';
    monthlyBtn.style.color = '#0ead69';
    
}