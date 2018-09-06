import './testAPI.scss';
import JSONEditor from 'jsoneditor';
import '../node_modules/jsoneditor/dist/jsoneditor.css';
import 'bulma/css/bulma.css';

let container = document.querySelector("#jsonEditor");
let options = {};
let editor = new JSONEditor(container, options);

new Vue({
    el: 'main>div:first-child',
    data: {
        inputURL: '',
        inputStr: ''
    },
    methods: {
        handleClick() {
            axios.get(this.inputURL).then(resp => {
                editor.set(resp.data);
            }).catch(error => {
                alert(error);
            });
        },
        formatStr(){
            editor.set(JSON.parse(this.inputStr));
        }
    }
});


