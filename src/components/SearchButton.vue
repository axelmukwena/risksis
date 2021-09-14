<template>
    <button class="search">
        <mdicon name="magnify" />
        <slot></slot>
    </button>
</template>

<style scoped>
.search {
    border: 0;
    background: none;
    color: #2c3e50;
    font-weight: 500;
    font-size: 0.9em;
    padding: 0.5rem 1rem;
    margin-top: 0.3em;
}

.search:hover {
    color: #70a9d8;
}
</style>
