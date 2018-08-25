import Vue from 'vue'
import Component from './component.vue'

export default {
    show(params = {}) {
        let ScrollToTop = Vue.extend(Component),
            element = document.createElement('div'),
            propsData = Object.assign({
                active: true,
                opacity: 0
            }, params)

        return new ScrollToTop({
            el: element,
            propsData: propsData
        })
    }
}
