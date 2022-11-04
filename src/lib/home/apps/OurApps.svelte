<script>
    import PxApp from "./PxApp.svelte";
</script>

<h1>Our Apps</h1>
<div class="apps">
    <PxApp 
        iconBg={"#18b542"}
        iconUrl={"./resources/images/apps/Evergreen.png"}
        title={"Evergreen"}
        text={"A simple finance app to keep track of your spending."}
        href={"/Evergreen"} />
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
