<template>
    <div>
        <button type="button" class="btn btn-primary" @click="modal.show()">
            Launch demo modal
        </button>
        <div
            class="modal fade"
            ref="exampleModal"
            tabindex="-1"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            @click="modal.hide()"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="modal.hide()"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                </li>
            </ul>
        </div>
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
                            v-if="sub.class === 'nav-link dropdown-link'"
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
    </div>
</template>

<script>
import { Modal } from 'bootstrap'
var hovering = 0
var hovering2 = 0

export default {
    name: 'Home',
    modal: null,
    data() {
        return {
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
                },
                {
                    title: 'Food & Services',
                    path: '/about',
                    class: 'dropdown',
                    id: 'food',
                    id2: [{ title: 'food-dropdown' }],
                    tg: 'dropdown-toggle', // Dropdown toggle varialble
                    subItems: [
                        {
                            title: 'food All',
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
                }
            ]
        }
    },
    mounted() {
        this.modal = new Modal(this.$refs.exampleModal)
        var navItems = document.getElementsByClassName('dropdown-toggle')
        var e
        for (e = 0; e < navItems.length; e++) {
            navItems[e].addEventListener('mouseover', function() {
                this.click()
                hovering2 = 4
            })

            navItems[e].addEventListener('mouseleave', function() {
                hovering = 1
                hovering2 = 1
                setTimeout(() => {
                    if (hovering === 1 && hovering2 !== 4) {
                        this.click()
                    }
                }, 10)
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
