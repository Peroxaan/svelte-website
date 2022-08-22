<script>
    import DownloadIcon from "$lib/icons/DownloadIcon.svelte";

    export let iconUrl;
    export let title;
    export let description;
    export let downloadUrl;
</script>

<div id="root" class="shadow-light">
    <div id="content">
        <img id="icon" src={iconUrl} alt={title} />
        <div id="body">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <a target="_blank" href={downloadUrl}>
            <div id="downloadIcon">
                <DownloadIcon size={38}/>
            </div>
        </a>
    </div>
</div>

<style>
    #content {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: .5rem;
        padding: 2rem 2rem 0rem 2rem;
        flex-grow: 1;
    }
    
    #body {    
        flex-grow: 1;
        margin: 1rem 0rem 0rem 0rem;
    }

    #icon {
        width: 75px;
        border-radius: 16px;
    }

    #downloadIcon {
        height: 50px;
        width: 50px;
        padding: 12px;
        border-radius: 100px;
        transition: background-color 100ms linear;
    }

    #downloadIcon:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    @media (prefers-color-scheme: dark) {
        #content {
            background-color: #181818;
        }
    }

    @media (min-width: 768px) {
        #content {
            flex-direction: row;
            padding: 2rem;
        }
    
        #body {    
            flex-grow: 1;
            margin: 0px 2rem;
            text-align: left;
        }
    }
</style>