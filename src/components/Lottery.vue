<template>
    <div>
        <ul>
            <li :class="i.active ? 'active' : ''" v-for="(i,index) in data" :key="index">{{i.name}}</li>
        </ul>
        <button @click="start">start</button>
    </div>
</template>

<script>
    export default {
        name : "Lottery",
        data(){
            return{
                data:[
                    {
                        name:'1',
                        active:true
                    },
                    {
                        name:'2',
                        active:false
                    },
                    {
                        name:'3',
                        active:false
                    },
                    {
                        name:'4',
                        active:false
                    },
                    {
                        name:'5',
                        active:false
                    },
                    {
                        name:'6',
                        active:false
                    },
                    {
                        name:'7',
                        active:false
                    },
                    {
                        name:'8',
                        active:false
                    }
                ],
                speed : 500,
                Max_Speed : 1000,
                Min_Speed : 500,
                current:0,
                isFinish:false,
                step:false
            }
        },
        methods:{
            speedUp() {
                this.speed -= 50;
            },
            speedDown() {
                this.speed += 150;
            },
            speedControl(){
                console.log(this.speed)

                if(!this.step && this.speed > 0){
                    this.speedUp();
                }

                if(!this.step && this.speed <= 0){
                    this.step = true
                    this.speedDown();
                }

                if(this.step && this.speed > 0){
                    this.speedDown();
                }

                if(this.step && this.speed >= this.Max_Speed + this.Max_Speed*Math.random()){
                    this.isFinish = true;
                }

            },
            addIdx(){
                this.getActiveItem();
                if(this.current == this.data.length - 1){
                    this.$set(this.data[0], "active", true);
                }else{
                    this.$set(this.data[this.current + 1], "active", true);
                }
            },
            getActiveItem(ifGetItem){
                this.data.forEach((item,index)=>{
                    if (item.active){
                        this.current = index
                    }
                    if(!ifGetItem){
                        item.active = false
                    }

                });
            },
            run(){
                this.isFinish = false;
                this.speedControl();
                setTimeout(()=>{
                    if(!this.isFinish){
                        this.addIdx();
                        this.run();
                    }else{
                        this.getActiveItem(true);
                        alert(this.data[this.current].name);
                    }
                },this.speed);

            },
            start(){
                this.speed = this.Min_Speed;
                this.step = false;
                this.run();
            }
        }
    }
</script>

<style lang="scss">
    ul{
        padding:0;
        margin:0;
        display: flex;
        flex-direction: row;
        li{
            padding:30px;
            &.active{color:red}
            font-size: 40px;
        }
    }
</style>
