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
                    ul>
                      <li>Image Caption RNN Generator</li>
                      <li>Neural Network Dependency Parser</li>
                      <li>Financials Visualizer</li>
                      <li>Lexical Substitution</li>
                    </ul>

                    <button onclick="loadContent('home')">Back to Home</button>
                </section>
            `;
            break;
        case 'painting':
            content.innerHTML = `
                <section id="painting">
                    <h2>Paintings</h2>
                    <img src="ArtWorks/cello.jpg" alt="cello">
                    <img src="ArtWorks/man-with-hat.jpeg" alt="manwithhat"/>
                    <img src="ArtWorks/smile-guy.png" alt="smileguy">
                    <img src="ArtWorks/abstract2.png" alt="abstract2">
                   
                    <button onclick="loadContent('home')">Back to Home</button>
                </section>
            `;
            break;

        <!--    
        case 'contact':
            content.innerHTML = `
                <section id="contact">
                    <a href="mailto:consonantresearch@gmail.com"></a>
                    <button onclick="loadContent('home')">Back to Home</button>
                </section>
            `;
        -->

            
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
                    <a href="mailto:consonantresearch@gmail.com" class="button">Happy to chat!</a>
                </section>
            `;
    }
}
