// File: javascript/load-flight-results.js

// Ban đầu ẩn kết quả chuyến bay
document.addEventListener('DOMContentLoaded', function() {
    // Đợi cho đến khi form tìm kiếm được tải
    const checkFormExist = setInterval(() => {
        const searchForm = document.querySelector('.search-flight-form');
        if (searchForm) {
            clearInterval(checkFormExist);
            
            // Ẩn flight-results ban đầu
            const flightResultsPlaceholder = document.getElementById('flight-results-placeholder');
            if (flightResultsPlaceholder) {
                flightResultsPlaceholder.style.display = 'none';
            }
            
            // Thêm event listener cho form tìm kiếm
            searchForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                // Ẩn form tìm kiếm và phần destinations
                document.getElementById('search-flight-placeholder').style.display = 'none';
                document.getElementById('destinations-placeholder').style.display = 'none';
                
                // Hiển thị kết quả chuyến bay
                flightResultsPlaceholder.style.display = 'block';
                
                // Tải nội dung kết quả chuyến bay nếu chưa được tải
                if (flightResultsPlaceholder.innerHTML === '') {
                    fetch('html/body/danhsachchuyenbay/flight-results.html')
                        .then(response => response.text())
                        .then(data => {
                            flightResultsPlaceholder.innerHTML = data;
                            
                            // Tải script xử lý chọn chuyến bay sau khi nội dung đã được tải
                            const flightSelectionScript = document.createElement('script');
                            flightSelectionScript.src = 'javascript/flight-selection.js';
                            document.body.appendChild(flightSelectionScript);
                        })
                        .catch(error => {
                            console.error('Error loading flight results content:', error);
                        });
                } else {
                    // Nếu nội dung đã được tải, đảm bảo phần thông tin tổng hợp bị ẩn
                    const flightSummary = document.querySelector('.flight-summary');
                    if (flightSummary) {
                        flightSummary.style.display = 'none';
                    }
                    
                    // Bỏ chọn tất cả các chuyến bay
                    const flightItems = document.querySelectorAll('.flight-item');
                    flightItems.forEach(item => {
                        item.classList.remove('selected');
                    });
                }
            });
        }
    }, 300); // Kiểm tra mỗi 300ms
});