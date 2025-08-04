    // Poemas almacenados en una sola variable
    const content = {
        poemas: `
            <div class="block">
            <p>El invierno ha llegado y no sabes las tremendas ganas que quiero que estés a mi lado, abrazados.</p>
        </div>
        <div class="block">
            <p>Tus ojos relucen tanto que me ciegan de pasión, me llega hasta el alma y me derrite el corazón.</p>
        </div>
        <div class="block">
            <p>Cuando pruebe tus labios, serás la mujer más feliz y yo él más afortunado.</p>
        </div>
        <div class="block">
            <p>Realmente eres mi único deseo, lo que más anhelo en el mundo entero</p>
        </div>
        <div class="block">
            <p>Con tu luz, mejoraste mi vida y mis ganas de vivir mejor cada día </p>
        </div>
        <div class="block">
            <p>Te dedico mil canciones para expresarte mi amor en mil emociones.</p>
        </div>
        <div class="block">
            <p>Ahora te veo en mis sueños, viviendo a mi lado pero queriendo que no se acabe el tiempo.</p>
        </div>
        <div class="block">
            <p>Cada día de pienso, es tan grande este sentimiento que no dejaría que se lo lleve el viento.</p>
        </div>
        <div class="block">
            <p>Cada mensaje, cada oración, cada palabra, son hechas desde la inspiración de mi corazón.</p>
        </div>
        <div class="block">
            <p>No quiero que se separen nuestros caminos, porque me sentiría vacío.</p>
        </div>
        <div class="block">
            <p>Te escribo de noche y de día, con ganas de ver en tu sonrisa.</p>
        </div>
        <div class="block">
            <p>Despierto con tu mensaje de buenos días y desde ahí mi día ya se siente muy bonita.</p>
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
                <p>"Amo Dejarte Así" - Gustavo Cerati</p>
                <a href="https://www.youtube.com/watch?v=SbH6X5578Ac" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Nothing's Gonna Hurt You Baby" - CAS</p>
                <a href="https://youtu.be/8cYyOOAYD50?si=EYk5oukEWoXJp3QB" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Te Quiero" - Amen</p>
                <a href="https://www.youtube.com/watch?v=HYsmQ7voYpw" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Te Llevo Para Que Me Lleves" - Gustavo Cerati</p>
                <a href="https://youtu.be/jiKGUnzCAKo?si=XvfTo1RawicJnj9G" target="_blank">Escuchar</a>
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
                <p>"Yebba's Heartbreak (feat. Yebba)" - Drake</p>
                <a href="https://youtu.be/AgH3SckiC5I?si=WlIU7xdllkSiT_b9" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Die For You" - The Weeknd</p>
                <a href="https://www.youtube.com/watch?v=SvizVoNjv7A" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Chachachá" - Jósean Log</p>
                <a href="https://www.youtube.com/watch?v=sDMxQF18yvA" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Lover, You Should've Come Over" - Jeff Buckley</p>
                <a href="https://youtu.be/-CivutLP68w?si=oW1AxVI3b5wjrkYy" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Red" - Taylor Swift</p>
                <a href="https://youtu.be/52redn2ybxQ?si=f7nhJHWESZfImlIc" target="_blank">Escuchar</a>
            </div>
            <div class="block">
                <p>"Lover is a Day" - Cuco</p>
                <a href="https://youtu.be/9wiEM0s4aCQ?si=QF8dJ_KweLbzazNv" target="_blank">Escuchar</a>
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


