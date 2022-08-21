<script>
    import PxApp from "./PxApp.svelte";
</script>

<h1>Our Apps</h1>
<div class="apps">
    <PxApp 
        iconBg={"#FF688A"}
        iconUrl={"./resources/images/apps/Aerosketch.png"}
        title={"Aerosketch"}
        text={"A new, fun, multiplayer drawing game, currently in beta."}
        href={"/Aerosketch"} />
    <PxApp 
        iconBg={"#BB22B9"}
        iconUrl={"./resources/images/apps/Talon.png"}
        title={"Talon"}
        text={"Talon is designed to make your life easier. Webhooks, made simple."} 
        href={"/Talon"} />
    <PxApp 
        iconBg={"#b00909"}
        iconUrl={"./resources/images/apps/Ruby.png"}
        title={"Ruby"}
        text={"Ruby is a News app with a customizable experience, built for you."} 
        href={"/Ruby"} />
</div>

<style>
    h1 {
        text-align: center;
    }

    .apps {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-bottom: 3rem !important;
    }
</style>