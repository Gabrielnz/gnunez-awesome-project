import { createApp } from 'vue'
import Components from 'gnunez-custom-components'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.component('HelloWorldVuetify', Components.HelloWorldVuetify)
app.component('HelloWorldTailwind', Components.HelloWorldTailwind)

app.mount('#app')
