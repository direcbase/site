
<script >
	import '../app.postcss';
	import { onMount } from 'svelte';
	import Navbar from "$lib/components/Navbar.svelte";
	onMount(async () => {
	});
</script>
<div class="flex flex-col content-center" >
	<Navbar />
	<div class="bg-blueGray-100 content-center">
		<slot />
	</div>
</div>
