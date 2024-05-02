document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:4000/certificate', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            const certificates = await response.json();
            console.log('Certificates:', certificates);

            // Select the container element where you want to append the certificates
            const container = document.querySelector('#certificateContainer');

            // Iterate over each certificate and create HTML elements dynamically
            certificates.forEach(certificate => {
                // Create elements for each certificate
                const courseCard = document.createElement('div');
                courseCard.classList.add('course_card', 'list_layout');

                // Add HTML content dynamically using certificate data
                courseCard.innerHTML = `
                    <div class="item_image">
                        <a href="course_details.html" data-cursor-text="View">
                            <img src="assets/images/course/course_image_2.jpg" >
                        </a>
                    </div>
                    <div class="item_content">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <ul class="item_category_list unordered_list">
                                <li><a href="#!">${certificate.name}</a></li>
                            </ul>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <ul class="item_category_list unordered_list">
                                <li><a href="#!">${certificate.category}</a></li>
                            </ul>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                        <ul class="item_category_list unordered_list">
                            <li><a href="#!">${certificate.subCategory}</a></li>
                        </ul>
                    </div>
                        <ul class="meta_info_list unordered_list">
                            <li>
                                <i class="fas fa-clock"></i>
                                <span>${certificate.createdAt}</span>
                            </li>
                        </ul>
                        <h3 class="item_title">
                            <a href="course_details.html">aaaa</a>
                        </h3>
                        <a class="btn_unfill" href="course_details.html">
                            <span class="btn_text">View Course</span>
                            <span class="btn_icon">
                                <i class="fas fa-long-arrow-right"></i>
                                <i class="fas fa-long-arrow-right"></i>
                            </span>
                        </a>
                    </div>
                `;

                // Append the course card to the container
                container.appendChild(courseCard);
            });

        } else {
            console.error('Error retrieving certificates:', response.statusText);
            // Handle error response from the backend
        }
    } catch (error) {
        console.error('Error retrieving certificates:', error);
        // Handle network errors or exceptions
    }
});
