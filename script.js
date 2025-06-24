function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
// document.getElementById('shareButton').addEventListener('click', async () => {
//     if (navigator.share) {
//         try {
//             await navigator.share({
//                 title: 'Perfil de Erminio Guerrero',
//                 text: 'Conoce el perfil profesional de Erminio Guerrero.',
//                 url: window.location.href
//             });
//         } catch (error) {
//             console.error('Error al compartir:', error);
//         }
//     } else {
//         alert('La función de compartir no es compatible con tu navegador.');
//     }
// });
  