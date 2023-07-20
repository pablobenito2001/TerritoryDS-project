<template>
    <nav class="Nav" :class="$attrs.class">
        <div class="Nav-content">
            <div class="Branch-branch">
                <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="Branch-svg">
                    <path class="Branch-logo" d="M23.1833 10.8333V46.0416M42.6021 17.9291V54.1666M6.20209 21.0708V47.4229C6.20209 52.5687 9.85834 54.6812 14.3 52.1354L20.6646 48.5062C22.0458 47.7208 24.3479 47.6396 25.7833 48.3708L40.0021 55.4937C41.4375 56.1979 43.7396 56.1437 45.1208 55.3583L56.8479 48.6416C58.3375 47.775 59.5833 45.6625 59.5833 43.9291V17.5771C59.5833 12.4312 55.9271 10.3187 51.4854 12.8646L45.1208 16.4937C43.7396 17.2791 41.4375 17.3604 40.0021 16.6291L25.7833 9.53331C24.3479 8.82914 22.0458 8.88331 20.6646 9.66872L8.9375 16.3854C7.42084 17.2521 6.20209 19.3646 6.20209 21.0708Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h1 class="Branch-title">Terr</h1>
            </div>
            <NavLinks />
        </div>
        <div>
            <Toggle/>
        </div>
    </nav>
</template>
<script lang='ts' setup>
    import NavLinks from './NavLinks.vue';
    import Toggle from './Toggle.vue';
</script>
<style lang='scss' scoped>
    .Nav{
        @include flex(space-between, center, 0px, nowrap, column);
        border-right: solid 1px var(--alpha-20);
        &-content{
            display: grid;
            gap: 1.875rem;
            width: 100%;
        }
    }

    .Branch{
        &-branch{
            @include flex(center, center, .625rem);
        }
        &-logo{
            stroke: map-get($colors, "secundary-one");
            stroke-width: 5;
            fill: none;
        }
        &-svg{
            max-width: 4.0625rem;
        }
        &-title{
            font-size: 3.125em;
            font-weight: 500;
            line-height: 100%;
            color: var(--dark-color);
        }
    }
</style>