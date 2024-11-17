function loadFooter() {
    const footer = `
        <footer class="bg-dark text-white py-4">
            <div class="container">
                <!-- Social Links Section -->
                <div class="row text-center mb-4">
                    <div class="col-md-4 mb-3">
                        <a href="https://github.com/Kris-Turk" target="_blank" class="text-white text-decoration-none">
                            <i class="bi bi-github fs-1"></i>
                            <p>GitHub</p>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://www.linkedin.com/in/kristurk/" target="_blank" class="text-white text-decoration-none">
                            <i class="bi bi-linkedin fs-1"></i>
                            <p>LinkedIn</p>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://www.youtube.com/@kristurk1" target="_blank" class="text-white text-decoration-none">
                            <i class="bi bi-youtube fs-1"></i>
                            <p>YouTube</p>
                        </a>
                    </div>
                </div>
                
                <!-- Copyright -->
                <div class="text-center">
                    <p>&copy; 2024 Kris Turk. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footer;
} 