
document.addEventListener('DOMContentLoaded', () => {
    const guides = document.querySelectorAll('#guide-list a');
    const content = document.querySelector('#guide-content');

    guides.forEach(guide => {
        guide.addEventListener('click', (e) => {
            e.preventDefault();
            content.innerHTML = `<h2>${guide.textContent}</h2><p>Content for ${guide.textContent} will be here.</p>`;
        });
    });
});
    