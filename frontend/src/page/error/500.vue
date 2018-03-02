<template>
    <div>
        500: An Unknown Error In The System!
        <a @click="back">Back To Previous Page</a>
    </div>
</template>

<script>
    export default {
        mehtods: {
            back() {
                this.$router.go(-1);
            }
        }
    }
</script>