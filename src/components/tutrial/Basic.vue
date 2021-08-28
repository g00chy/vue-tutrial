<template>
    <div>
        
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export interface Data {
    hoge: string
}

Data data = ({
    hoge: 'min'
})

export default Vue.extend({
    data
})
</script>
