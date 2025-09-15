document.addEventListener('DOMContentLoaded', () => {
    const slideTitle = document.querySelector('.slide-footer .title');
    if (slideTitle) {
        slideTitle.textContent = 'AI 时代的开发者进化论';
    }

    window.addEventListener('keydown', (e) => {
        const currentPath = window.location.pathname;
        const match = currentPath.match(/slide-(\d+)\.html/);
        if (!match) return;
        
        const currentNum = parseInt(match[1]);
        let nextNum;

        if (e.key === 'ArrowRight') {
            nextNum = currentNum + 1;
            if (nextNum > 20) return; 
        } else if (e.key === 'ArrowLeft') {
            nextNum = currentNum - 1;
            if (nextNum < 1) return;
        } else {
            return;
        }

        const nextFile = `slide-${String(nextNum).padStart(2, '0')}.html`;
        window.location.href = nextFile;
    });
});