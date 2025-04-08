function pesquisarNoGoogle() {
    const filme = document.getElementById('pesquisaFilme').value.trim();
    if (filme) {
      const query = encodeURIComponent(filme + " filme significado das cores");
      const url = `https://www.google.com/search?q=${query}`;
      window.open(url, '_blank');
    } else {
      alert("Por favor, digite o nome de um filme!");
    }
  }

  document.getElementById('pesquisaFilme').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      pesquisarNoGoogle();
    }
  });
  