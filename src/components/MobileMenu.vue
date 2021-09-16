<template>
    <header class="navbar navbar-expand-md navbar-light bd-navbar">
        <div id="back-layer" class="back-layer" @click="closeNav"></div>
        <nav class="container-xxl flex-wrap flex-md-nowrap">
            <router-link class="navbar-brand d-block d-md-none" to="/">
                <img
                    src="../assets/images/risksis-mobile-logo.png"
                    alt="Risksis logo"
                    width=""
                    height="35"
                />
            </router-link>
            <div>
                <search-button></search-button>
                <button @click="openNav" class="menu-toggler" type="button">
                    <mdicon name="menu" class="menu-toggler-icon" />
                </button>
            </div>
        </nav>
        <div id="sidenav" class="sidenav">
            <ul class="list-group">
                <li class="nav-link li-btn">
                    <button @click="closeNav" class="my-btn">
                        <mdicon name="close" />
                    </button>
                </li>

                <div v-for="item in menuItems" :key="item.title">
                    <li
                        v-if="item.subItems.length > 0"
                        @click="openNested(item.id + '-mobile')"
                        class="list-group-item list-group-item-action nav-link"
                    >
                        <mdicon class="menu-icon" name="chevron-left" />
                        {{ item.title }}
                    </li>

                    <li
                        v-else
                        @click="closeNav"
                        class="list-group-item list-group-item-action"
                    >
                        <router-link class="nav-link" :to="item.path">
                            {{ item.title }}
                        </router-link>
                    </li>
                </div>

                <li
                    @click="closeNav"
                    class="list-group-item list-group-item-action"
                >
                    <router-link class="nav-link" to="/about">
                        Sign In
                        <mdicon
                            size="20"
                            style="font-weight: 100;"
                            name="login-variant"
                        />
                    </router-link>
                </li>
            </ul>
        </div>

        <div v-for="item in menuItems" :key="item.title">
            <div
                v-if="item.subItems.length > 0"
                :id="item.id + '-mobile'"
                class="sidenav"
            >
                <ul class="list-group">
                    <li class="nav-link li-btn">
                        <button
                            @click="closeNested(item.id + '-mobile')"
                            id="close-nested"
                            class="my-btn close-nested"
                        >
                            <span class="small">
                                {{ item.title }}
                            </span>
                            <mdicon name="chevron-right" />
                        </button>

                        <button @click="closeNav" class="my-btn">
                            <mdicon name="close" />
                        </button>
                    </li>

                    <div v-for="sub in item.subItems" :key="sub.title">
                        <li
                            v-if="sub.title !== '$hr'"
                            @click="closeNav"
                            class="list-group-item list-group-item-action"
                        >
                            <router-link :to="sub.path" class="nav-link">
                                {{ sub.title }}
                            </router-link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import SearchButton from './SearchButton.vue'

export default {
    components: {
        SearchButton
    },
    data() {
        return { menuItems: this.$menuItems }
    },
    methods: {
        openNav() {
            document.getElementById('sidenav').style.width = '250px'
            document.getElementById('sidenav').style.borderLeft =
                '1px solid rgba(255, 255, 255, 0.205)'
            document.getElementById('back-layer').style.display = 'block'
        },
        closeNav() {
            var navs = document.getElementsByClassName('sidenav')
            for (var n = 0; n < navs.length; n++) {
                navs[n].style.width = '0'
                navs[n].style.borderLeft = '0'
            }
            document.getElementById('back-layer').style.display = 'none'
        },
        openNested(id) {
            console.log(document.getElementById(id))
            document.getElementById(id).style.width = '250px'
            document.getElementById(id).style.borderLeft =
                '1px solid rgba(255, 255, 255, 0.205)'
        },
        closeNested(id) {
            document.getElementById(id).style.width = '0'
            document.getElementById(id).style.borderLeft = '0'
        }
    }
}
</script>

<style scoped>
.container-xxl {
    padding: 0.3rem 0.75rem;
}
.navbar {
    background-color: white;
    border-bottom: 1px solid rgb(230 230 230);
    padding-top: 0;
}

.bd-navbar {
    padding: 0;
}

.navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2;
    bottom: 0;
    right: 0;
    background-color: #0054aa;
    overflow-x: hidden;
    transition: width 0.5s;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-left: 0;
}

.back-layer {
    z-index: 1;
    background: #464646;
    opacity: 0.3;
    filter: alpha(opacity=30);
    -moz-opacity: 0.2;
    height: 100%;
    width: 100%;
    position: fixed;
    display: none;
}

.nav-link {
    padding: 0;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 0.9em;
    display: block;
    text-align: right;
    transition: 0.3s;
}

.nav-link:active {
    color: #6293c4;
}

.li-btn {
    padding: 0.5rem 1rem;
}

.menu-toggler {
    border: 0;
    height: 35px;
    width: 35px;
    border-radius: 100%;
    background: transparent;
}

.menu-toggler:focus:hover {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    background-color: #e6f3ff;
}

.list-group {
    border-radius: 0;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.02);
}

.list-group-item-action:hover {
    color: white;
    background-color: rgba(255, 255, 255, 0.09);
}

.menu-icon {
    float: left;
}

.my-btn {
    color: white;
    border: 0;
    background: none;
    padding-right: 0;
    padding-left: 0;
}

.my-btn:focus {
    color: #bfc8d1;
}

.close-nested {
    float: left;
}
</style>
