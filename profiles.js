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
        <p>Trainee</p>
        <h3>Bio</h3>
        <p>Josh is a trainee focused on learning backend web development. He is building skills in server-side applications, APIs, database design, and optimization through hands-on training and mentorship from experienced developers.</p>
    `,
    denin: `
        <img src="assets/DeninHeir.JPG" alt="Denin Heir" class="panel-image" loading="lazy">
        <h2>Denin Heir</h2>
        <h3>Role</h3>
        <p>Trainee</p>
        <h3>Bio</h3>
        <p>Denin is a trainee developing skills across the full web development stack. He is learning to develop features, fix bugs, and improve code quality through practical training and guidance from the development team.</p>
    `,
    finley: `
        <img src="assets/FinleyPatterson.png" alt="Finley Patterson" class="panel-image" loading="lazy">
        <h2>Finley Patterson</h2>
        <h3>Role</h3>
        <p>Trainee</p>
        <h3>Bio</h3>
        <p>Finley is a dedicated trainee gaining hands-on experience in DevOps and web development. He is learning to manage deployment pipelines, infrastructure, and contribute to web development projects under the guidance of senior team members.</p>
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