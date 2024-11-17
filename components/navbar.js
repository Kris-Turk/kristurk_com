function loadNavbar() {
    // Check if we're on the YouTube page
    const isYoutubePage = window.location.pathname.includes('youtube');    


    const navbar = `
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Kris Turk</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="youtube.html">YouTube</a>
                        </li>
                        ${blogLink}
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.getElementById('navbar-placeholder').innerHTML = navbar;
} 