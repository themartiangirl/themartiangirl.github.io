document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded');
});

function loadContent(page) {
    const content = document.getElementById('content');
    switch(page) {
        case 'projects':
            content.innerHTML = `
                <section id="projects">
                    <h2>Fun Projects</h2>
                    <button onclick="loadContent('home')">Back to Home</button>
                </section>
            `;
            break;
        case 'painting':
            content.innerHTML = `
                <section id="painting">
                    <h2>Paintings</h2>
                    <img src="ArtWorks/cello.jpg" alt="cello" />
                    <img src="ArtWorks/abstract1.png" alt="abstrat1" />
                    <img src="ArtWorks/smile-guy.png" alt="smileguy" />
                    <img src="ArtWorks/abstract2.png" alt="abstract2" />
                    <img src="ArtWorks/man-with-hat.jpeg" alt="manwithhat"/>
                   
                    <button onclick="loadContent('home')">Back to Home</button>
                </section>
            `;
            break;
        default:
            content.innerHTML = `
                <img src="ArtWorks/epsilon.png" alt="epsilon.png">
                <section id="welcome">
                    <h1>Cyberspace of the Martian Girl - A Small but Positive Quantity :)</h1>
                    <p>Columbia grad with background in Computer Science and Math primarily in ML/AI, bits in finance</p>
                    <p>Love to empower human connection through technology and talk to LLMs ;) </p>
                    <button onclick="loadContent('projects')">Fun Projects</button>
                    <button onclick="loadContent('painting')">I paint, sometimes lol</button>
                    <a href="mailto:consonantresearch@gmail.com" class="button">Happy to chat :)</a>
                </section>
            `;
    }
}
