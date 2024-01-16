<script>
</script>

<template>
    <div class="container">
        <nav>
            <ul>
               <li>
                    <!-- con il router-link tramite la props :to posso richiamare una rotta tramite il nome  -->
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                    <router-link :to="{ name: 'projects' }">
                        Progetti
                    </router-link>
                    <router-link :to="{ name: 'contacts' }">
                        Contatti
                    </router-link>
               </li>
            </ul>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
</style>