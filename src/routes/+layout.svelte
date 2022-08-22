<script>
    import '../app.css';
    import Base from '$lib/components/Base.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<Base>
    <main>
        <slot />
    </main>
    <Footer />
</Base>