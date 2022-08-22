<script>
    import Header from "$lib/components/Header.svelte";
    import OurApps from "$lib/home/apps/OurApps.svelte";
    import TheTeam from "$lib/home/team/TheTeam.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<svelte:head>
    <title>Peroxaan Studios</title>
</svelte:head>

<Header>    
    <h1 class="px-gradient">Peroxaan Studios</h1>
    <p class="lead">We make cool apps, games, and services for iOS, Android, macOS, Windows, and the Web.</p>
    <div id="followTwitter">
        <Button text={"Follow on Twitter"} href="https://twitter.com/Peroxaan" hrefNewTab={true}/>
    </div>
</Header>
<div id="apps"><OurApps/></div>
<div id="team"><TheTeam/></div>

<style>
    #followTwitter {
        margin-top: 1.25rem;
    }

    #apps, #team {
        width: 100%;
        padding-top: 3rem;
    }
</style>