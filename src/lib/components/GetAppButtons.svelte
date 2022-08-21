<script>
    export let googlePlay = undefined;
    export let appStore = undefined;
    export let testflight = undefined;
    export let windows = undefined;
</script>

<div id="buttons" class="shadow">
    {#if testflight != undefined}
        <a target="_blank" href={testflight}>
            <img src='./resources/images/buttons/testflight.png' alt='Test on TestFlight' />
        </a>
    {/if}
    {#if appStore != undefined}
        <a target="_blank" href={appStore}>
            <img src='./resources/images/buttons/app_store.png' alt='Download on the App Store' />
        </a>
    {/if}
    {#if googlePlay != undefined}
        <a target="_blank" href={googlePlay}>
            <img src='./resources/images/buttons/google_play.png' alt='Get it on Google Play' />
        </a>
    {/if}
    {#if windows != undefined}
        <a target="_blank" href={windows} id="windows">
            <img src='./resources/images/buttons/windows.svg' alt='Download for Windows' />
        </a>
    {/if}
</div>

<style>
    img {
        height: 50px;
    }

    #buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-left: -4px;
        margin-top: 8px;
    }

    a {
        margin: 4px;
    }

    #windows {
        color-scheme: only light;
    }
</style>