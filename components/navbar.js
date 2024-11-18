function loadNavbar() {
    console.log('Navbar component is loading...');
    
    // Detect mobile OS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    console.log('Device detection:', { isIOS, isAndroid });

    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="./index.html">Kris Turk</a>
                <button class="navbar-toggler navbar-light bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="./index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="./youtube.html">YouTube</a></li>
                        <li class="nav-item"><a class="nav-link" href="./contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        console.log('Found navbar placeholder, inserting navbar...');
        navbarPlaceholder.innerHTML = navbar;

        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            if (isIOS) {
                // iOS-specific behavior
                console.log('Using iOS navigation behavior');
                navbarToggler.addEventListener('click', () => {
                    navbarCollapse.classList.toggle('show');
                });

                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        navbarCollapse.classList.remove('show');
                    });
                });
            } else if (isAndroid) {
                // Android-specific behavior
                console.log('Using Android navigation behavior');
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });

                navbarToggler.addEventListener('click', () => {
                    bsCollapse.toggle();
                });

                document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                    link.addEventListener('click', () => {
                        bsCollapse.hide();
                    });
                });
            } else {
                // Desktop behavior
                console.log('Using desktop navigation behavior');
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });

                navbarToggler.addEventListener('click', () => {
                    bsCollapse.toggle();
                });
            }
        }
    } else {
        console.error('Could not find navbar-placeholder element!');
    }
} 