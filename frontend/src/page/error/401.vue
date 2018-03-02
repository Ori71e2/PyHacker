<template>
    <div>
        401: No Permission To Access!
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