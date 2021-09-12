<template>
    <header class="navbar navbar-expand-md navbar-light bd-navbar">
        <nav class="container-xxl flex-wrap flex-md-nowrap">
            <router-link class="navbar-brand d-none d-md-block" to="/">
                <img
                    src="../assets/images/risksis-logo.png"
                    alt="Risksis logo"
                    width=""
                    height="20"
                />
            </router-link>
            <router-link class="navbar-brand d-block d-md-none" to="/">
                <img
                    src="../assets/images/risksis-mobile-logo.png"
                    alt="Risksis logo"
                    width=""
                    height="30"
                />
            </router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Products & Services
                        </a>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Something else here</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">
                            Research
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">
                            Investors
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="about">
                            Contact Us
                        </router-link>
                    </li>
                </ul>
                <mdicon class="search" name="magnify" />
            </div>
        </nav>
    </header>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
    background-color: white;
    border-bottom: 1px solid rgb(230 230 230);
}

.bd-navbar {
    padding: 0.75rem 0;
}

.navbar-light .navbar-nav .nav-link {
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.9em;
    margin-top: 0.3em;
}

.navbar-light .navbar-nav .nav-link.active {
    color: #70a9d8;
}

.navbar-light .navbar-nav .nav-link:hover {
    color: #70a9d8;
}

@media (min-width: 768px) {
    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: 0.8rem;
        padding-left: 0.8rem;
    }
}

.navbar-toggler {
    color: rgba(0, 0, 0, 0.55);
    border: 0;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: 0 0 0 0.00025rem;
}
</style>
