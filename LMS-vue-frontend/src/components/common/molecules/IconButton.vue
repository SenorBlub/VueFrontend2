



hasDivider: { type: Boolean, default: false }, 
dividerPosition: { 
    type: String, 
    default: "left", 
    validator: (val: string) => ["left", "right", "center"].includes(val)
},

/* Icon Handling */
hasIcon: { type: Boolean, default: false },
iconPosition: { 
    type: String, 
    default: "center", 
    validator: (val: string) => ["left", "right", "center"].includes(val)
},
iconSize: {
    type: String,
    dafault: "md",
    validator: (val: string) => ["sm", "md", "lg"].includes(val)
}






const computedIconClass = computed(() => {
    if(props.hasIcon){
        let tempIconClass = ""
        switch(props.iconPosition){
            case ("left"):
                tempIconClass = "";
                break;
            case ("center"):
                tempIconClass = "";
                break;
            case ("right"):
                tempIconClass = "";
                break;
            default:
                tempIconClass = "";
        }
        switch(props.iconSize){
            case ("sm"):
                tempIconClass += "";
            case ("md"):
                tempIconClass += "";
            case ("lg"):
                tempIconClass += "";
        }
    }
})

const computedDeviderClass = computed(() => {
    if(props.hasDivider){
        switch(props.dividerPosition){
            case ("left"):
                return ""
            case ("center"):
                return ""
            case ("right"):
                return ""
            default:
                return ""
        }
    }
})