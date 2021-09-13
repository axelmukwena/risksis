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
                    <li
                        class="nav-item"
                        v-for="item in menuItems"
                        :key="item.title"
                        v-bind:class="item.class"
                    >
                        <router-link
                            class="nav-link"
                            :to="item.path"
                            :data-bs-toggle="item.class"
                            :id="item.id"
                            v-bind:class="item.tg"
                            aria-expanded="false"
                            ref="dropdown"
                        >
                            {{ item.title }}
                        </router-link>

                        <ul
                            v-for="i in item.id2"
                            :key="i.title"
                            class="dropdown-menu"
                            :aria-labelledby="item.id"
                            :id="i.title"
                        >
                            <li v-for="sub in item.subItems" :key="sub.title">
                                <router-link
                                    v-if="
                                        sub.class === 'nav-link dropdown-link'
                                    "
                                    :to="sub.path"
                                    :class="sub.class"
                                >
                                    {{ sub.title }}
                                </router-link>
                                <hr v-else :class="sub.class" />
                            </li>
                        </ul>
                    </li>
                </ul>
                <button class="search nav-link">
                    <mdicon class="search-icon" name="magnify" />
                </button>
                <button
                    type="button"
                    width="100"
                    class="btn btn-outline-primary"
                >
                    Sign In
                </button>
            </div>
        </nav>
    </header>
</template>

<script>
var hovering = 0
export default {
    data() {
        return {
            // hovering: 0,
            menuItems: [
                {
                    title: 'Products & Services',
                    path: '/about',
                    class: 'dropdown',
                    id: 'products',
                    id2: [{ title: 'products-dropdown' }],
                    tg: 'dropdown-toggle', // Dropdown toggle varialble
                    subItems: [
                        {
                            title: 'View All',
                            path: '/about',
                            class: 'nav-link dropdown-link'
                        },
                        { title: 'hr', path: '', class: 'dropdown-divider' },
                        {
                            title: 'Data',
                            path: '/about',
                            class: 'nav-link dropdown-link'
                        },
                        {
                            title: 'Infrastructure',
                            path: '/about',
                            class: 'nav-link dropdown-link'
                        },
                        {
                            title: 'Research',
                            path: '/about',
                            class: 'nav-link dropdown-link'
                        },
                        {
                            title: 'Analytics',
                            path: '/about',
                            class: 'nav-link dropdown-link'
                        }
                    ]
                },
                {
                    title: 'Research',
                    path: '/about',
                    class: '',
                    id: '',
                    tg: ''
                },
                {
                    title: 'Investors',
                    path: '/about',
                    class: '',
                    id: '',
                    tg: ''
                },
                {
                    title: 'About',
                    path: '/about',
                    class: '',
                    id: '',
                    tg: ''
                },
                {
                    title: 'Contact Us',
                    path: '/about',
                    class: '',
                    id: '',
                    tg: ''
                }
            ]
        }
    },
    computed: {},
    methods: {},
    mounted() {
        var navItems = document.getElementsByClassName('dropdown-toggle')
        var e
        for (e = 0; e < navItems.length; e++) {
            navItems[e].addEventListener('mouseover', function() {
                this.click()
            })

            navItems[e].addEventListener('mouseleave', function() {
                hovering = 1
                setTimeout(() => {
                    if (hovering === 1) {
                        this.click()
                    }
                }, 50)
            })
        }

        var dropMenus = document.getElementsByClassName('dropdown-menu')
        for (e = 0; e < dropMenus.length; e++) {
            dropMenus[e].addEventListener('mouseover', function() {
                hovering = 2
            })

            dropMenus[e].addEventListener('mouseleave', function() {
                this.click()
            })
        }
    }
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

.dropdown-toggle:focus {
    outline: none !important;
    box-shadow: none !important;
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
    background-color: #fff;
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

.search {
    border: 0;
    background: none;
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.9em;
}

.search:hover {
    color: #70a9d8;
}

.btn-outline-primary {
    color: #0054aa;
    border-color: #0054aa;
    width: 6em;
}

.btn-outline-primary:hover {
    background-color: #0054aa;
    border-color: #0054aa;
    color: white;
}

.btn:focus {
    outline: none !important;
    box-shadow: none !important;
}
</style>
