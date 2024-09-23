document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const historyList = document.getElementById('history-list');
    const clearHistoryButton = document.getElementById('clear-history-button');

    // Load search history from localStorage
    function loadSearchHistory() {
        const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        historyList.innerHTML = '';

        searchHistory.forEach(term => {
            const li = document.createElement('li');
            li.textContent = term;
            historyList.appendChild(li);
        });
    }

    // Save search term to history
    function saveSearchTerm(term) {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        loadSearchHistory();
    }

    // Event listener for search button
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            saveSearchTerm(searchTerm);
            searchInput.value = '';
        }
    });

    // Event listener for clear history button
    clearHistoryButton.addEventListener('click', function() {
        localStorage.removeItem('searchHistory');
        loadSearchHistory();
    });

    // Load history on page load
    loadSearchHistory();
});
