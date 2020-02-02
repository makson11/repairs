let close = document.querySelector('.close'),
    banner = document.querySelector('.map__banner'),
    hideBanner = document.querySelector('.map__hide-banner'),
    arrow = document.querySelector('.arrow');

close.addEventListener('click', ()=>{
    banner.style.transform = 'translateY(-150%)';
    hideBanner.style.transform = 'translateY(0%)';
});

hideBanner.addEventListener('mouseover', ()=>{
    arrow.classList.add('bounce');
});
hideBanner.addEventListener('mouseout', ()=>{
    arrow.classList.remove('bounce');
});

hideBanner.addEventListener('click', () =>{
    hideBanner.style.transform = 'translateY(-100%)';
    banner.style.transform = 'translateY(0)';
});