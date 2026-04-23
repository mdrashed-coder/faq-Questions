const accordiam = document.querySelectorAll(".accordiam");

accordiam.forEach(accordiam => {
    const icon = accordiam.querySelector(".icon");
    const answer = accordiam.querySelector(".answer");


    accordiam.addEventListener('click', () => {
        icon.clissList.toggle('active');
        answer.clissList.toggle('active');
    })

})
const accordiams = document.querySelectorAll('.accordiam');

accordiams.forEach((accordiam) => {
    accordiam.addEventListener("click", () => {
        accordiam.classList.toggle("active");
    });
});
