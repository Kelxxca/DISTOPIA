const recomendacion = document.getElementById('recomendacionFlotante');

let temporizador;

window.addEventListener('scroll', () => {

    if(window.scrollY > 600){

        // Mostrar la ventana
        recomendacion.classList.add('mostrar');

        // Reiniciar el temporizador
        clearTimeout(temporizador);

        // Ocultar después de 5 segundos
        temporizador = setTimeout(() => {
            recomendacion.classList.remove('mostrar');
        }, 5000);

    }

});