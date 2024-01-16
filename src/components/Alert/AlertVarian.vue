<template>
    <div>
        <div :class="`alert alert-${color}`">
            {{ label }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlertVarian",
        props: {
            label: String,
            color: {
                validator(value) {
                    return ["green", "light-blue", "red", "yellow"].includes(value);
                },
            },
        },
    };
</script>