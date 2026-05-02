const panel = document.getElementById("slidePanel");
const overlay = document.getElementById("overlay");
const panelContent = document.getElementById("panelContent");
const panelClose = document.getElementById("panelClose");

const profileData = {
    janet: `
        <img src="assets/JanetSmith.png" alt="Janet Smith" class="panel-image" loading="lazy">
        <h2>Janet Smith</h2>
        <h3>Role</h3>
        <p>Lead Full Stack Developer</p>
        <h3>Bio</h3>
        <p>Janet specializes in architecting scalable web applications and mentoring junior developers. With expertise 
        in both frontend and backend technologies, she leads the development of our core platform infrastructure and 
        ensures best practices across all projects.</p>
    `,
    david: `
        <img src="assets/DavidJackson.png" alt="David Jackson" class="panel-image" loading="lazy">
        <h2>David Jackson</h2>
        <h3>Role</h3>
        <p>Frontend Web Developer</p>
        <h3>Bio</h3>
        <p>David creates beautiful and responsive user interfaces using modern web frameworks. He focuses on user 
        experience and accessibility, transforming design mockups into interactive web applications that users love.</p>
    `,
    josh: `
        <img src="assets/JoshFrancis.jpg" alt="Josh Francis" class="panel-image" loading="lazy">
        <h2>Josh Francis</h2>
        <h3>Role</h3>
        <p>Backend Web Developer</p>
        <h3>Bio</h3>
        <p>Josh builds robust server-side applications and APIs that power our web services. He specializes in 
        database design, optimization, and creating efficient backend systems that handle millions of requests reliably.</p>
    `,
    denin: `
        <img src="assets/DeninHeir.JPG" alt="Denin Heir" class="panel-image" loading="lazy">
        <h2>Denin Heir</h2>
        <h3>Role</h3>
        <p>Web Developer</p>
        <h3>Bio</h3>
        <p>Denin is a versatile web developer who works across the full stack. He develops features, fixes bugs, 
        and continuously improves our codebase. His passion for clean code and problem-solving makes him an invaluable team member.</p>
    `,
    finley: `
        <img src="assets/FinleyPatterson.png" alt="Finley Patterson" class="panel-image" loading="lazy">
        <h2>Finley Patterson</h2>
        <h3>Role</h3>
        <p>DevOps & Web Developer</p>
        <h3>Bio</h3>
        <p>Finley manages our deployment pipelines and infrastructure while also contributing to web development. 
        He ensures our applications run smoothly in production and collaborates with the team to optimize performance and reliability.</p>
    `
};

document.querySelectorAll(".profile, .profile-center").forEach(card => {
    card.addEventListener('click', () => {
        const id = card.dataset.id;
        panelContent.innerHTML = profileData[id];
        panel.classList.add("active");
        overlay.classList.add("active");
    });
});

panelClose.addEventListener("click", closePanel);
overlay.addEventListener("click", closePanel);

function closePanel() {
    panel.classList.remove("active");
    overlay.classList.remove("active");
}