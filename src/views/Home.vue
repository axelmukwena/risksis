<template>
    <div>
        <div
            class="wave"
            v-wave="{
                color: 'currentColor',
                easing: 'ease-out',
                duration: 0.4,
                initialOpacity: 0.2,
                finalOpacity: 0.1,
                cancellationPeriod: 75
            }"
        >
            Example
        </div>
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
    </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {
    name: 'Home',
    modal: null,
    mounted() {
        this.modal = new Modal(this.$refs.exampleModal)
    }
}
</script>

<style>
.wave {
    background: #fff;
    width: 150px;
    height: 150px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    cursor: pointer;
}
</style>
