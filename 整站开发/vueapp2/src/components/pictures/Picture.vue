<template>
    <div>
        <common-header bgColor="rgb(63, 81, 181)">
            <span slot="title">Picture</span>
        </common-header>
        <common-footer bgColor="rgb(63, 81, 181)"></common-footer>

    </div>
</template>

<script>
import CommonHeader from '@/components/common/Header'
import CommonFooter from '@/components/common/Footer'
export default {
    components: {
        CommonHeader,
        CommonFooter
    }
}
</script>

<style scoped>

</style>
