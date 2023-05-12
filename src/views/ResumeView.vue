<template>
    <div class="Resume">
        <div class="Resume-container Resume-container--nav">
            <div class="Resume-container">
                <router-link class="Resume-button" :to="{ name: 'list' }">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="150"><path d="M149.825 776Q137 776 128.5 767.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 606 128.5 597.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm0-170Q137 436 128.5 427.325q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM290 776v-60h550v60H290Zm0-170v-60h550v60H290Zm0-170v-60h550v60H290Z"/></svg>
                </router-link>
                <router-link class="Resume-button" :to="{ name: 'table' }">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960" width="150"><path d="M120 936V216h720v720H120Zm60-500h600V276H180v160Zm220 220h160V496H400v160Zm0 220h160V716H400v160ZM180 656h160V496H180v160Zm440 0h160V496H620v160ZM180 876h160V716H180v160Zm440 0h160V716H620v160Z"/></svg>
                </router-link>
            </div>
        </div>
        <div class="Resume-info">
            <router-view />
        </div>
    </div>
</template>
<script lang='ts' setup>
    
</script>
<styles lang='scss' scoped>
    .Resume{
        &-container{
            display: flex;
            gap: .625rem;
            align-items: center;
            &--nav{
                justify-content: space-between;
            }
        }
        &-button{
            padding: .3125rem;
            border-radius: .5rem;
            border: solid 1px var(--white);
            max-width: 35px;
            cursor: pointer;
            transition: background-color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), color 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                background-color: var(--white);
                color: var(--black);
            }
        }   
        &-info{
            margin-top: 1.25rem;
        }
        &-select{
            padding: 5px 10px;
            border-radius: 5px;
            background-color: var(--dark-red);
        }
    }
</styles>