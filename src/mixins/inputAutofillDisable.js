
const inputAutofillDisable = {
    methods: {
        inputAutofillDisable() {
            let elements = document.querySelectorAll('[autocomplete="none"]')
            if (!elements) {
                return
            }
            elements.forEach((element) => {
                let elementOriginalId = element.getAttribute('id')
                let elementOriginalName = element.getAttribute('name')

                if (elementOriginalName !== null && elementOriginalName !== undefined && elementOriginalName !== '') {
                    element.setAttribute('id', this.hashCode(elementOriginalId))
                    element.setAttribute('name', this.hashCode(elementOriginalName))
                }
            })
        },
        hashCode(value) {
            if (!value) {
                return value
            }
            let hash = 0
            let i
            let chr
            for (i = 0; i < value.length; i++) {
                chr = value.charCodeAt(i)
                hash = (hash << 5) - hash + chr
                hash |= 0
            }
            return hash
        },
    },
}

export default inputAutofillDisable
