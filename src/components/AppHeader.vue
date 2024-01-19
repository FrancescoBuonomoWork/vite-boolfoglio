<script>
</script>

<template>
    <header class="container">
        <nav>
            <ul class="header-list">
               <li  class="header-list__item">
                    <!-- con il router-link tramite la props :to posso richiamare una rotta tramite il nome  -->
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                <li class="header-list__item">

                    <router-link :to="{ name: 'projects' }">
                        Progetti
                    </router-link>
                </li>
                
                <li class="header-list__item">
                    <router-link :to="{ name: 'contacts' }">
                        Contatti
                    </router-link>
                </li>
                
            </ul>

        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/header' as *
</style>

