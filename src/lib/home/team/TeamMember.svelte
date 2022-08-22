<script>
    import Button from "$lib/components/Button.svelte";
    export let iconBg;
    export let iconUrl;
    export let name;
    export let description;
    export let twitterUsername;
    export let email;
</script>

<div id="root">
    <div id="content">
        <div id="icon">
            <svg id="icon-bg"
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="xMidYMid slice" 
                focusable="false" 
                role="img">
                <rect fill="{iconBg}" width="100%" height="100%"></rect>
            </svg>
            <img id="icon-img" src="{iconUrl}" alt="{name}'s picture" />
        </div>
        <div id="content-body">
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div id="buttons">
                <Button 
                    borderRadius={'8px 0px 0px 8px'}
                    small={true}
                    text={'Twitter'}
                    hrefNewTab={true}
                    href="https://twitter.com/{twitterUsername}"/>
                <Button 
                    borderRadius={'0px 8px 8px 0px'}
                    small={true}
                    text={'Email'}
                    href="mailto:{email}"/>
            </div>
        </div>
    </div>
</div>

<style>
    #root {
        width: 100%;
        display: grid;
        align-content: stretch;
    }

    #content {
        background-color: white;
        margin: 16px;
        box-shadow: 0 1rem 3rem rgba(140, 140, 140, .0) !important;
        display: flex;
        flex-direction: column;
        word-wrap: break-word;
        background-clip: border-box;
        border-radius: .25rem;
    }

    #icon {
        width: 100%;
        height: 225px;
        position: relative;
    }

    #icon-bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
    }

    #icon-img {
        position: absolute;
        z-index:2;
        height: 150px;
        width: 150px;
        left:0;
        top: 0;
        bottom: 0;
        right:0;
        margin-right:auto;
        margin-top: auto;
        margin-bottom: auto;
        margin-left:auto;
        border-radius: 100px;
    }
    
    #content-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin: 1.25rem;
    }
    
    #buttons {
        display: flex;
        flex-direction: row;
    }

    h2 {
        font-weight: normal;
    }
    
    @media (min-width: 768px) {
        #root {
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
    
    @media (prefers-color-scheme: dark) {
        #content  {
            background-color: #181818;
        }
    }
</style>