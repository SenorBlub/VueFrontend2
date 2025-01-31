<script setup lang="ts">
import { computed, defineProps, onMounted, onUnmounted, ref } from "vue"

// version 1 of this component

const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.matchMedia("(max-width: 768px)").matches;
};

const props = defineProps({

    /* Sizing */
    width: { 
        type: String,
         default: "",
        validator: (val: string) => ["xs", "sm", "md", "lg", "xl", "screenwide-sm", "screenwide-lg"].includes(val)
     },
    height: { 
        type: String,
         default: "",
        validator: (val: string) => ["xs", "sm", "md", "lg", "xl", "2xl"].includes(val) },

    /* Variant & Styling */
    variant: { 
        type: String, 
        default: "filled", 
        validator: (val: string) => ["filled", "empty", "text"].includes(val)
    }, 
    colorScheme: { 
        type: String,
         default: "primary",
        validator: (val: string) => 
        [
            "confirm", "edit", "cancel", "primary", "secondary", "tertiary",
            "warning", "caution", "alert", "success", "info",
            "priority-urgent", "priority-high", "priority-medium", "priority-low", "priority-future",
            "node", "icon", "dark"
        ].includes(val)
    }, // Handles bgColor & accentColor
    border: { 
        type: String,
         default: "none",
        validator: (val: string) => ["none", "dotted", "dashed", "solid", "heavy-dotted", "heavy-dashed", "heavy-solid"].includes(val)
     },
    rounded: { 
        type: String, 
        default: "lg", 
        validator: (val: string) => ["none", "sm", "normal", "lg", "full"].includes(val)
    }, 
    textSize: {
        type: String,
        default: "lg",
        validator: (val: string) => ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].includes(val)
    },

    /* States */
    disabled: { type: Boolean, default: false }, 
});

const computedTextSizeClass = computed(() => {
    switch (props.textSize){
        case ("xs"):
            return "text-[1.5rem]"
        case ("sm"):
            return "text-[1.875rem]"
        case ("md"):
            return "text-[2.25rem]"
        case ("lg"):
            return "text-[3rem]"
        case ("xl"):
            return "text-[3.75rem]"
        case ("2xl"):
            return "text-[4.5rem]"
        case ("3xl"):
            return "text-[6rem]"
        default:
            return "text-[2.25rem]"
    }
})

const computedRoundingClass = computed(() => {
    switch(props.rounded){
        case ("none"):
            return ""
        case ("sm"):
            return "rounded-[.5vw]"
        case ("md"):
            return "rounded-[1vw]"
        case ("lg"):
            return "rounded-[1.5vw]"
        case ("full"):
            return "rounded-full"
        default:
            return ""
    }
})

const computedBorderClass = computed(() => {
    switch(props.border){
        case "none":
            return "border-none"
        case "solid":
            return "border-4 border-current bg-clip-padding"
        case "dotted":
            return "border-4 border-dotted border-current bg-clip-padding"
        case "dashed":
            return "border-4 border-dashed border-current bg-clip-padding"
        case "heavy-solid":
            return "border-8 border-current bg-clip-padding"
        case "heavy-dotted":
            return "border-8 border-dotted border-current bg-clip-padding"
        case "heavy-dashed":
            return "border-8 border-dashed border-current bg-clip-padding"
        default:
            return "border-4 border-current bg-clip-padding"
    }
});


const computedColorSchemeClass = computed(() => {
    switch(props.colorScheme){
        case ("confirm"):
            return "bg-secondary text-success border-success"
        case ("success"):
            return "bg-secondary text-success border-success"
        case ("cancel"):
            return "bg-secondary text-danger border-danger"
        case ("danger"):
            return "bg-secondary text-danger border-danger"
        case ("edit"):
            return "bg-secondary text-caution border-caution"
        case ("caution"):
            return "bg-secondary text-caution border-caution"
        case ("alert"):
            return "bg-secondary text-alert border-alert"
        case ("primary"):
            return "bg-secondary text-primary border-primary"
        case ("secondary"):
            return "bg-secondary text-secondary border-secondary"
        case ("tertiary"):
            return "bg-secondary text-tertiary border-tertiary"
        case ("info"):
            return "bg-secondary text-secondary border-secondary"
        case ("priority-urgent"):
            return "bg-secondary text-danger border-danger"
        case ("priority-high"):
            return "bg-secondary text-caution border-caution"  
        case ("priority-medium"):
            return "bg-secondary text-alert border-alert"
        case ("priority-low"):
            return "bg-secondary text-success border-success"
        case ("priority-future"):
            return "bg-secondary text-secondary border-secondary"
        case ("node"):
            return "bg-primary text-bg-secondary border-bg-secondary"
        case ("icon"):
            return "bg-opacity-0 text-tertiary border-tertiary"
        case ("dark"):
            return "bg-primary text-bg-secondary border-bg-secondary"
        default:
            return "bg-secondary text-danger border-danger"


    }
})

const computedVariantClass = computed(() => {
    switch(props.variant){
        case ("filled"):
            return "bg-opacity-100"
        case ("empty"):
            return "bg-opacity-0"
        case ("text"):
            return "bg-opacity-0"
        default:
            return "bg-opacity-100"
    }
})

const computedWidthClass = computed(() => {
    switch(props.width){
        case "xs": 
            return "w-[5vw]" // 8 in figma
        case "sm":
            return "w-[6.25vw]" // 10 in figma
        case "md":
            return "w-[8.125vw]" // 13 in figma
        case "lg":
            return "w-[9.375vw]" // 15 in figma
        case "xl":
            return "w-[11.25vw]" // 18 in figma
        case "screenwide-sm":
            return "w-[56.875vw]" // 91 in figma
        case "screenwide-lg":
            return "w-[59.375vw]" // 95 in figma
        default: 
            return "w-[8.125vw]"
    }
})

const computedHeightClass = computed(() =>{
    switch(props.height){
        case "xs": 
            return "h-[5.556vh]" // 5 in figma
        case "sm":
            return "h-[6.667vh]" // 6 in figma
        case "md":
            return "h-[7.778vh]" // 7 in figma
        case "lg":
            return "h-[8.889vh]" // 8 in figma
        case "xl":
            return "h-[9vh]" // 10 in figma
        case "2xl":
            return "h-[24.444vh]" // 22 in figma
        default: 
            return "h-[6.667vh]"
    }
})

const computedDisabledClass = computed(() => {
    return props.disabled ? "u-disabled" : "";
}) 
const computedClasses = computed(() => {
     
    return [
    /* Sizing */
    computedWidthClass.value,
    computedHeightClass.value,
    

    /* Variant & Styling */
    computedVariantClass.value,
    computedColorSchemeClass.value,
    computedBorderClass.value,
    computedRoundingClass.value,
    computedTextSizeClass.value,

    /* States */
    computedDisabledClass.value,
    "flex items-center justify-center text-center"
    ]
})

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

</script>

<template>
    <button :class="computedClasses"><slot></slot></button>
</template>

<style scoped>
/* Apply logic based on props */
</style>
