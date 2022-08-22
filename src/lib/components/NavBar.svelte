<script>
    import Menu from "$lib/icons/Menu.svelte";

    let isCollapsed = true;
    
    function toggleDropdown() {
        isCollapsed = !isCollapsed
    }
</script>
<nav>
    <div id="root">
        <div id="content">
            <div id="nv">
                <a href="/" id="title" class="px-gradient">Peroxaan Studios</a>
                <div id="menu" on:click={toggleDropdown}>
                    <Menu/>
                </div>
            </div>
            <div id="links" class="{isCollapsed ? 'collapsed' : 'expanded'}" on:click={toggleDropdown}>
                <a class="muted-text" href="/#apps">Apps</a>
                <a class="muted-text" href="/#team">Team</a>
                <a class="muted-text" href="/downloads">Downloads</a>
                <a class="muted-text" href="https://newsroom.peroxaan.com">Newsroom</a>
            </div>
        </div>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 69420;
    }

    #title {
        font-size: 1.25rem;
        margin-right: 1rem;
        flex-grow: 1;
    }

    #root {
        display: flex;
        background-color: white;
        justify-content: center;
        padding: 0.75rem 2rem;
    }

    #content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        max-width: 720px;
    }

    #nv {
        display: inherit;
        justify-content: inherit;
        align-items: center;
        flex-grow: 1;
    }

    #links a {
        margin: 0.5rem 0rem;
        display: block;
    }

    #links {
        display: inherit;
        transition: height .35s ease;
        flex-direction: column;
	    background-clip: padding-box;
        overflow: hidden;
    }

    @media screen and (prefers-reduced-motion:reduce) {
        #links {
            transition: none
        }
    }

    .expanded {
        height: 10rem;
    }

    .collapsed {
        height: 0rem;
    }

    #menu {
        height: 1.5rem;
        width: 1.5rem;
        display: flex;
        cursor: pointer;
    }

    @media (min-width:576px) {
        #content {
            max-width: 540px;
        }
    }
    @media (min-width:768px) {
        #content {
            max-width: 720px;
            flex-direction: row;
            align-items: center;
        }

        #links {
            display: flex;
            flex-direction: row;
            height: inherit;
        }

        #links a {
            margin: 0rem 6px;
        }

        #menu {
            display: none;
        }
    }
    @media (min-width:992px) {
        #content {
            max-width: 960px
        }
    }
    @media (min-width:1200px) {
        #content {
            max-width: 1140px
        }
    }

    @media (prefers-color-scheme: dark) {
        #root {
            background-color: #181818;
        }
    }
</style>