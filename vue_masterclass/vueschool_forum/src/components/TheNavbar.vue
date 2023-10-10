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
                        <img src="https://pbs.twimg.com/profile_images/1188775562657091594/5mgkg44t_400x400.jpg" alt="User" class="avatar-small">
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
