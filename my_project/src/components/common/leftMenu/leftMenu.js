import leftMenuRouter from '@/router/modules/leftMenu';
export default{
    data(){
        return{
            active:this.$route.name,
            munus:[]
        }
    },
    watch: {
        "$route": function() {
            this.active = this.$route.name
        }
    },
    created(){
        this.munus = leftMenuRouter[0].children
    },
    methods: {
        selectMenu(name) {
            this.$router.push({ name: name })
        }
    }
}