document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center fw-bold text-primary" href="index.html">
                <span class="material-symbols-outlined me-2 fs-1">travel_explore</span> Kerala Tourism
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Destinations</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="destinations.html?type=hills"><span class="material-symbols-outlined">terrain</span> Hills</a></li>
                            <li><a class="dropdown-item" href="destinations.html?type=backwaters"><span class="material-symbols-outlined">waves</span> Backwaters</a></li>
                            <li><a class="dropdown-item" href="destinations.html?type=waterfalls"><span class="material-symbols-outlined">waterfall_chart</span> Waterfalls</a></li>
                            <li><a class="dropdown-item" href="destinations.html?type=beaches"><span class="material-symbols-outlined">beach_access</span> Beaches</a></li>
                            <li><a class="dropdown-item" href="destinations.html?type=wildlife"><span class="material-symbols-outlined">pets</span> Wildlife</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="experiences.html">Experiences</a></li>
                    <li class="nav-item"><a class="nav-link" href="plan.html">Plan Your Trip</a></li>
                </ul>
            </div>
        </div>
    </nav>`;
    
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});