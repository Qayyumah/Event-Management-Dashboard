// collapse function nav
function toggleNav() {
    const navbar = document.getElementById('navbar');
    const section = document.querySelector('section');
    navbar.classList.toggle('collapsed');
    section.classList.toggle('collapsed');
}

//hamburger
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const hamburgerIcon = document.querySelector('#hamburger img');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');

    // Change the icon based on the navbar's state
    if (navbar.classList.contains('active')) {
        hamburgerIcon.src = 'images/icon Button.png'; 
    } else {
        hamburgerIcon.src = 'images/Vector (5).png';
    }
});


// slider effect
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// chart function
const ctx = document.getElementById('myChart').getContext('2d');

//get labels based on screen width
function getLabels() {
    if (window.innerWidth <= 600) {
        return ['Ja', 'Fe', 'Ma', 'Ap', 'May', 'Jun', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De']; 
    } else {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
}

// Initialize chart
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: getLabels(),
        datasets: [{
            label: '',
            data: [700, 990, 780, 400, 1000, 580, 900, 370, 900, 700, 1000, 600], // Adjusted values
            backgroundColor: 'rgba(133, 118, 255, 1)', // Blue color
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        if (value === 0 || value === 600 || value === 800 || value === 400 || value === 200 || value === 1000) {
                            return value;
                        }
                    }
                },
                grid: {
                    display: false 
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

window.addEventListener('resize', () => {
    myChart.data.labels = getLabels()
    myChart.update();
});
// Get the modal
const modal = document.getElementById("eventModal");
const closeButton = document.querySelector(".close-button");

// Get table rows
const rows = document.querySelectorAll(".event-table tbody tr");

// Add click event to each row
rows.forEach(row => {
    row.addEventListener("click", () => {
        const title = row.getAttribute("data-title");
        const date = row.getAttribute("data-date");

        // Set modal content
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDateValue").innerText = date;

        // Show the modal
        modal.style.display = "block";
    });
});

// Close modal when close button is clicked
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});