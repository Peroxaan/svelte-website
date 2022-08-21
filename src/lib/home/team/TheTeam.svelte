<script>
    import TeamMember from "./TeamMember.svelte";
</script>

<h1>The Team</h1>
<div id="apps" class="shadow">
    <TeamMember 
        iconBg={"#d79cf7"}
        iconUrl={"./resources/images/people/Michael.png"}
        name={"Michael"}
        description={"CEO. Head of iOS Development."}
        twitterUsername={"tme_michael"}
        email={"michael@peroxaan.com"} />
    <TeamMember 
        iconBg={"#79358c"}
        iconUrl={"./resources/images/people/TheLBall.png"}
        name={"TheLBall"}
        description={"Head of Windows Development."}
        twitterUsername={"TheLBall"}
        email={"thelball@peroxaan.com"} />
    <TeamMember 
        iconBg={"#FF9AF5"}
        iconUrl={"./resources/images/people/ktsnme.png"}
        name={"Pink Kitsune"}
        description={"Head of Android Development."}
        twitterUsername={"pinkktsn"}
        email={"ktsnme@peroxaan.com"} />
</div>

<style>
    h1 {
        text-align: center;
    }
    
    #apps {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-bottom: 3rem !important;
    }
</style>