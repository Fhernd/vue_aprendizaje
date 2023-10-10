<template>
     <header class="header" id="header">
        <router-link :to="{name: 'Home'}" class="logo">
            <img src="../assets/svg/vueschool-logo.svg" alt="Logo">
        </router-link>

        <div class="btn-hamburger">
            <div class="top bar"></div>
            <div class="middle bar"></div>
            <div class="bottom bar"></div>
        </div>

        <nav class="navbar">
            <ul>
                <li class="navbar-user">
                    <a href="#">
                        <img src="../assets/svg/arrow-profile.svg" alt="User">
                        <span>
                            John Ortiz Ordoñez
                            <img src="../assets/svg/arrow-profile.svg" alt="User    " class="icon-profile">
                        </span>
                    </a>

                    <div id="user-dropdown">
                        <div class="triangle-menu"></div>
                        <ul class="dropdown-menu">
                            <li class="dropdown-menu-item"><a href="#">View profile</a></li>
                            <li class="dropdown-menu-item"><a href="#">Log out</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
     </header>
</template>

<script>
export default {
    
}
</script>

<style lang="">
    
</style>
