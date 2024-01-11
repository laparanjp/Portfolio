		const modeToggle = document.getElementById('mode');
		const modeImage = document.getElementById('modeImage');
		const menuToggle = document.getElementById('menu');
		
		var svgNight = '<svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path 		fill-rule="evenodd" clip-rule="evenodd" d="M16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8ZM11.5278 			16C10.5777 14.9385 10 13.5367 10 12C10 10.4633 10.5777 9.06151 11.5278 8H8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16H11.5278ZM2 12C2 8.68629 4.68629 6 8 			6H16C19.3137 6 22 8.68629 22 12C22 15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12Z" fill="white"/></svg>';
    		
		var svgDay = '<svg width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"><path fill-			rule="evenodd" clip-rule="evenodd" d="M12.4722 8H16C18.2091 8 20 9.79086 20 12C20 14.2091 18.2091 16 16 16H12.4722C13.4223 14.9385 14 13.5367 14 12C14 10.4633 13.4223 			9.06151 12.4722 8ZM8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16C10.2091 16 12 14.2091 12 12C12 9.79086 10.2091 8 8 8ZM8 6H16C19.3137 6 22 8.68629 22 12C22 			15.3137 19.3137 18 16 18H8C4.68629 18 2 15.3137 2 12C2 8.68629 4.68629 6 8 6Z" fill="#000000"/></svg>';
		
		mode.addEventListener('click', function() {
 	 		document.body.classList.toggle('night-mode');
			if (document.body.classList.contains('night-mode')) {
    				mode.innerHTML = svgNight;
  			} 
			else {
    				mode.innerHTML = svgDay; 
  			}
		});
		document.getElementById("navHome").addEventListener('click', function() {
 	 		var links = document.querySelector('.links');
            		links.classList.toggle('collapsed');
		});
		
		function reloadPage() {
			window.location.href = "Portfolio.html";
		}

		function toggleMenu() {
            		var links = document.querySelector('.links');
            		links.classList.toggle('collapsed');
        	}
