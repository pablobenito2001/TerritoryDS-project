<template>
    <ul class="Links" ref="$ulList" @click="changeLink">
        <li>
            <RouterLink to="/" class="Links-link isActive">
                <svg width="20" height="20" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="Links-svg">
                    <path d="M16.8125 8.5375V2.5875C16.8125 1.275 16.2525 0.75 14.8612 0.75H11.3263C9.935 0.75 9.375 1.275 9.375 2.5875V8.5375C9.375 9.85 9.935 10.375 11.3263 10.375H14.8612C16.2525 10.375 16.8125 9.85 16.8125 8.5375ZM7.625 10.4625V16.4125C7.625 17.725 7.065 18.25 5.67375 18.25H2.13875C0.7475 18.25 0.1875 17.725 0.1875 16.4125V10.4625C0.1875 9.15 0.7475 8.625 2.13875 8.625H5.67375C7.065 8.625 7.625 9.15 7.625 10.4625ZM16.8125 16.4125V13.9625C16.8125 12.65 16.2525 12.125 14.8612 12.125H11.3263C9.935 12.125 9.375 12.65 9.375 13.9625V16.4125C9.375 17.725 9.935 18.25 11.3263 18.25H14.8612C16.2525 18.25 16.8125 17.725 16.8125 16.4125ZM7.625 5.0375V2.5875C7.625 1.275 7.065 0.75 5.67375 0.75H2.13875C0.7475 0.75 0.1875 1.275 0.1875 2.5875V5.0375C0.1875 6.35 0.7475 6.875 2.13875 6.875H5.67375C7.065 6.875 7.625 6.35 7.625 5.0375Z"/>
                </svg>
                Dashboard
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/tasks" class="Links-link">
                <svg width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="Links-svg" style="fill: none;">
                    <path d="M18.445 7.5075V13.4925C18.445 14.4725 17.92 15.3825 17.0713 15.8812L11.8738 18.8825C11.025 19.3725 9.97502 19.3725 9.11752 18.8825L3.92002 15.8812C3.50157 15.6386 3.15434 15.2902 2.9132 14.8709C2.67206 14.4516 2.54551 13.9762 2.54627 13.4925V7.5075C2.54627 6.5275 3.07127 5.6175 3.92002 5.11875L9.11752 2.1175C9.96627 1.6275 11.0163 1.6275 11.8738 2.1175L17.0713 5.11875C17.92 5.6175 18.445 6.51875 18.445 7.5075Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 14.5775C14 13.0025 12.4338 11.725 10.5 11.725C8.56625 11.725 7 13.0025 7 14.5775M10.5 9.625C11.0407 9.625 11.5593 9.4102 11.9416 9.02786C12.324 8.64553 12.5387 8.12696 12.5387 7.58625C12.5387 7.04554 12.324 6.52698 11.9416 6.14464C11.5593 5.7623 11.0407 5.5475 10.5 5.5475C9.95929 5.5475 9.44073 5.7623 9.05839 6.14464C8.67605 6.52698 8.46125 7.04554 8.46125 7.58625C8.46125 8.12696 8.67605 8.64553 9.05839 9.02786C9.44073 9.4102 9.95929 9.625 10.5 9.625Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Salidas
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/captains" class="Links-link">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="Links-svg" style="fill: none;">
                    <path d="M1.75 7.44188H19.25M5.25 14.4419H7M9.1875 14.4419H12.6875" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.635 3.06688H15.3562C18.4712 3.06688 19.25 3.83688 19.25 6.90813V14.0919C19.25 17.1631 18.4712 17.9331 15.365 17.9331H5.635C2.52875 17.9419 1.75 17.1719 1.75 14.1006V6.90813C1.75 3.83688 2.52875 3.06688 5.635 3.06688Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Capitanes
            </RouterLink>
        </li>
    </ul>
</template>
<script lang='ts' setup>
    import { ref } from 'vue';

    const $ulList = ref<HTMLUListElement>();

    function changeLink(e: Event){
        const $item = e.target as HTMLElement;
        
        $ulList.value?.childNodes.forEach((elem: Node) => {
            const node = elem as HTMLElement;
            console.log(node);
            
            if(node.contains($item)) $item.classList.add('isActive')
            else node.classList.remove('isActive');    
        })
    }
</script>
<style lang='scss' scoped>
     

    .Links{
    display: grid;
    gap: .625rem;
        &-link{
            display: flex;
            align-items: center;
            gap: .3125rem;
            padding: 1.25rem 2.5rem 1.25rem .625rem;
            border-radius: .9375rem;
            cursor: pointer;
            color: var(--alpha-50);
            transition: color .6s cubic-bezier(0.075, 0.82, 0.165, 1), background-color .6s cubic-bezier(0.075, 0.82, 0.165, 1);
            &:hover{
                color: var(--dark-color);
            }
        }
        &-svg{
            width: unset;
            fill: var(--dark-color);
            stroke: var(--dark-color);
        }
    }
    .isActive{
        color: var(--dark-color);
        background-color: var(--alpha-20);
    }
</style>