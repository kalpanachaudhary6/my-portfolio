var typed= new Typed(".text", {
    strings:["Future Software Engineer", "Frontend Developer", "Artist"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    const skills = [
        { class: "cpp", percentage: 90 },
        { class: "python", percentage: 90 },
        { class: "c", percentage: 80 },
        { class: "html", percentage: 70 },
        { class: "css", percentage: 70 },
        { class: "javascript", percentage: 40 },
        { class: "django", percentage: 40 },
        { class: "sql", percentage: 80 }
    ];

    skills.forEach(skill => {
        const circle = document.querySelector(`.progress-bar.${skill.class}`);
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (skill.percentage / 100) * circumference;

        circle.style.strokeDashoffset = offset;
    });
});




