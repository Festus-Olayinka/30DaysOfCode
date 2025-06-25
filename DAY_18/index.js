     // Simple hover effect enhancement
        document.querySelectorAll('a, .recent p, .seasons img, .Trailer img').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = this.style.transform || 'scale(1.03)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
        
        // Search input focus effect
        const searchInput = document.getElementById('search');
        searchInput.addEventListener('focus', () => {
            searchInput.style.boxShadow = '0 0 15px rgba(255, 64, 129, 0.5)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.style.boxShadow = '';
        });