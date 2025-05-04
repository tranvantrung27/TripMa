fetch('html/search-flight/search-flight.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('search-flight-placeholder').innerHTML = data;
    });
