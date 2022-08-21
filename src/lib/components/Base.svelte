<div id="root">
    <div id="content">
        <slot></slot>
    </div>
</div>

<style>    
    #root {
        display: flex;
        margin: 0px 2rem;
        justify-content: center;
    }

    #content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 720px;
    }

    @media (min-width:576px) {
        #content {
            max-width: 540px
        }
    }
    @media (min-width:768px) {
        #content {
            max-width: 720px
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
</style>