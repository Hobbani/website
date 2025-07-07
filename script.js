const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    const colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B2EBF2', '#B2DFDB', '#C8E6C9', '#DCEDC8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
