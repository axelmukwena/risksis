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
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <div v-for="item in menuItems" :key="item.title">
                        <li
                            v-if="item.subItems.length > 0"
                            class="nav-item dropdown"
                        >
                            <router-link
                                class="nav-link dropdown-toggle"
                                :to="item.path"
                                data-bs-toggle="dropdown"
                                :id="item.id"
                                aria-expanded="false"
                            >
                                {{ item.title }}
                            </router-link>

                            <ul
                                class="dropdown-menu"
                                :aria-labelledby="item.id"
                                :id="item.id + '-dropdown'"
                            >
                                <li
                                    v-for="sub in item.subItems"
                                    :key="sub.title"
                                >
                                    <hr
                                        v-if="sub.title === '$hr'"
                                        class="dropdown-divider"
                                    />
                                    <router-link
                                        v-else
                                        :to="sub.path"
                                        class="nav-link dropdown-link"
                                    >
                                        {{ sub.title }}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-else class="nav-item">
                            <router-link class="nav-link" :to="item.path">
                                {{ item.title }}
                            </router-link>
                        </li>
                    </div>
                </ul>
                <search-button>Search</search-button>
                <button-wave>Sign In</button-wave>
            </div>
        </nav>
    </header>
</template>

<script>
import ButtonWave from './ButtonWave.vue'
import SearchButton from './SearchButton.vue'

export default {
    name: 'main-menu',
    components: {
        ButtonWave,
        SearchButton
    },
    data() {
        return {
            menuItems: this.$menuItems
        }
    },
    methods: {}
}
</script>

<style scoped>
.navbar {
    background-color: white;
    border-bottom: 1px solid rgb(230 230 230);
}

.bd-navbar {
    padding: 0.75rem 0;
}

.navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
}

.navbar-light .navbar-nav .nav-link {
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.9em;
    margin-top: 0.3em;
}
.dropdown-link {
    margin-top: -0.4em !important;
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

.dropdown-toggle:focus {
    outline: none !important;
    box-shadow: none !important;
}

.dropdown:hover .dropdown-menu {
    display: grid;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    z-index: 1000;
    display: none;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid rgb(230 230 230);
    border-radius: 0.25rem;
}

.dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid rgb(173 171 171);
}

.navbar-toggler {
    border: 0;
    height: 35px;
    width: 35px;
    border-radius: 100%;
}

.navbar-toggler:focus:hover {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    color: #70a9d8;
    background-color: #e6f3ff;
}

.custom-toggler-icon {
    margin-left: -6.5px;
}

.custom-toggler-icon:focus {
    color: #70a9d8;
}
</style>
