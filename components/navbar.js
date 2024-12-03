function loadNavbar() {
    console.log('Navbar component is loading...');
    
    // Add CSS for hover functionality
    const style = document.createElement('style');
    style.textContent = `
        @media (min-width: 992px) {
            .dropdown:hover .dropdown-menu {
                display: block;
            }
            .dropdown-menu {
                margin-top: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Determine if we're in a subdirectory
    const isInBlogPosts = window.location.pathname.includes('blog-posts');
    const prefix = isInBlogPosts ? '../' : './';
    
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="${prefix}index.html">Kris Turk</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #ff8c00;">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="${prefix}index.html">Home</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="resourcesDropdown" role="button" aria-expanded="false">
                                Resources
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="resourcesDropdown">
                                <li><a class="dropdown-item" href="${prefix}youtube.html">YouTube</a></li>
                                <li><a class="dropdown-item" href="${prefix}blog.html">Blog</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${prefix}contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        console.log('Found navbar placeholder, inserting navbar...');
        navbarPlaceholder.innerHTML = navbar;
    } else {
        console.error('Could not find navbar-placeholder element!');
    }
} 