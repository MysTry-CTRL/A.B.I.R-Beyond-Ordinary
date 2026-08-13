document.addEventListener("DOMContentLoaded", () => {
  // Helper function to load HTML components into target elements
  const loadComponent = (elementId, filePath) => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        }
      })
      .catch(error => console.error(error));
  };

  // Load components
  loadComponent('topbar', '/components/topbar.html');
  loadComponent('footer', '/components/footer.html');
});