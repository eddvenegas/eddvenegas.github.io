    // Poemas almacenados en una sola variable
    const content = {
        poemas: `
            <div class="block">
                <p>El verano ha llegado, pero no se siente tan increíble como cuando tú estás a mi lado.</p>
            </div>
            <div class="block">
                <p>Tus ojos relucen tanto que me ciegan de pasión, me llega hasta el alma y me derrite el corazón.</p>
            </div>
            <div class="block">
                <p>Aquella primera unión de nuestros labios, crearon un lazo que me hace quererte tanto.</p>
            </div>
            <div class="block">
                <p>Los momentos que pasamos, en mi corazón los tengo guardado como lo mejor que he vivido en estos años.</p>
            </div>
            <div class="block">
                <p>Extraño tus besos, dulces como la miel; también tus caricias, manos suaves como pétalos al amanecer, que rozan mi piel con ternura y estremecen mi ser.</p>
            </div>
            <div class="block">
                <p>Te dedico mil canciones para expresarte mi amor en mil emociones.</p>
            </div>
            <div class="block">
                <p>Aquella noche en el auto, sin contención, revivimos el fuego de nuestra pasión.</p>
            </div>
            <div class="block">
                <p>Cada día necesito de tus abrazos pero no me dices si tú quieres que esté a tu lado.</p>
            </div>
            <div class="block">
                <p>Te conozco en tantas maneras, como mis manos al recorrer en tu silueta y tus zonas secretas.</p>
            </div>
            <div class="block">
                <p>No quiero que olvides todo lo que vivimos porque habrá un vacío en nuestros caminos.</p>
            </div>
            <div class="block">
                <p>Extraño tus labios, la curva de tus cejas, el brillo de tus ojos, la suavidad de tu cabello; extraño, en verdad, todo de ti.</p>
            </div>
            <div class="block">
                <p>Lo intentaría mil veces contigo, cumpliendo mi promesa de ser tu pareja y abrigo. Eres lo que mereces en esta vida tan cruel y fría, 
                mi razón, mi esperanza, mi eterna alegría.</p>
            </div>
        `,
        canciones: `
            <div class="block">
                <p>"Love Me Like You Do" - Ellie Goulding (Sub. Español)</p>
                <a href="https://www.youtube.com/watch?v=OmLPRemq3Dc" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Die With A Smile" - Lady Gaga & Bruno Mars (Sub. Español)</p>
                <a href="https://www.youtube.com/watch?v=LocWjiSWBLo&ab" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Amo Dejarte Así" - Gustavo Cerati (para nuestra ocasión especial)</p>
                <a href="https://www.youtube.com/watch?v=SbH6X5578Ac" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"En Esta Habitación" - Libido</p>
                <a href="https://www.youtube.com/watch?v=LSV3O18mjjI" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Te Quiero" - Amen</p>
                <a href="https://www.youtube.com/watch?v=HYsmQ7voYpw" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"La Chata" - Amen</p>
                <a href="https://www.youtube.com/watch?v=pc9F1GSk8nw" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Comenzar de nuevo" - Jhovan Tomasevich</p>
                <a href="https://www.youtube.com/watch?v=VEsf5CfpLMI" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Francés Limón" - Enanitos Verdes</p>
                <a href="https://www.youtube.com/watch?v=ibmrEMeCkSo" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Estoy Azulado" - Soda Stereo</p>
                <a href="https://www.youtube.com/watch?v=ZKcE3iitIEA" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Prófugos" - Soda Stereo</p>
                <a href="https://www.youtube.com/watch?v=sKo_-hNfB5Q" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Die For You" - The Weeknd (Sub. Español)</p>
                <a href="https://www.youtube.com/watch?v=SvizVoNjv7A" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Chachachá" - Jósean Log</p>
                <a href="https://www.youtube.com/watch?v=sDMxQF18yvA" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>. . .</p>
            </div>
            <div class="block">
                <p>"Cositas Que Hacíamos" - Farruko (Para no perder la costumbre)</p>
                <a href="https://www.youtube.com/watch?v=6uX-y8RDTgw" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>. . .</p>
            </div>
        `,
        dibujos: `
            <div class="block">
                <p>Próximamente...</p>
            </div>
            <div class="block">
                <p>Próximamente...</p>
            </div>
            <div class="block">
                <p>Próximamente...</p>
            </div>
        `
    };

    // Función para cambiar el contenido del contenedor
    function showContent(category) {
        const container = document.getElementById('container');
        container.innerHTML = content[category]; // Inyecta el HTML almacenado en la categoría
    }

    // Mostrar "Poemas" por defecto
    document.addEventListener('DOMContentLoaded', () => {
        showContent('poemas');
    });
