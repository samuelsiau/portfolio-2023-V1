export function initGA() {
    if (import.meta.env.MODE === 'production') {
      `
      <script is:inline async src="https://www.googletagmanager.com/gtag/js?id=G-2GZ9350WYG"></script>
		<script is:inline>
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-2GZ9350WYG');
        </script>	
      `
    } else {
      console.log('Google Analytics not loaded in development mode');
    }
}