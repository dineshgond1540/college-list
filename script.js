// Dummy JSON data
const colleges = [
    { rank: 1, name: "IIT Madras - Indian Institute of Technology (IITM), Chennai", courseFee: 209550, placement: 2148000, userReview: 8.6, reviews: 289, rating: 3, ranking: "#3rd/131 in India", featured: true },
    { rank: 2, name: "IIT Delhi - Indian Institute of Technology (IITD), New Delhi", courseFee: 254650, placement: 2582000, userReview: 8.7, reviews: 312, rating: 1, ranking: "#1st/35 in India", featured: false },
    { rank: 3, name: "Parul University, Vadodara", courseFee: 149000, placement: 400000, userReview: 8.1, reviews: 198, rating: 99, ranking: "#99th/147 in India", featured: true },
    { rank: 4, name: "IIT Bombay - Indian Institute of Technology (IITB), Mumbai", courseFee: 229300, placement: 2182000, userReview: 8.8, reviews: 450, rating: 2, ranking: "#2nd/35 in India", featured: false },
    { rank: 5, name: "IIT Kanpur - Indian Institute of Technology (IITK), Kanpur", courseFee: 225000, placement: 2200000, userReview: 8.5, reviews: 390, rating: 4, ranking: "#4th/35 in India", featured: false },
    { rank: 6, name: "BITS Pilani - Birla Institute of Technology and Science, Pilani", courseFee: 350000, placement: 2400000, userReview: 8.9, reviews: 275, rating: 5, ranking: "#5th/35 in India", featured: true },
    { rank: 7, name: "IIT Kharagpur - Indian Institute of Technology (IITKGP), Kharagpur", courseFee: 220000, placement: 2300000, userReview: 8.4, reviews: 310, rating: 6, ranking: "#6th/35 in India", featured: false },
    { rank: 8, name: "IIT Roorkee - Indian Institute of Technology (IITR), Roorkee", courseFee: 240000, placement: 2000000, userReview: 8.3, reviews: 220, rating: 7, ranking: "#7th/35 in India", featured: false },
    { rank: 9, name: "IIT Guwahati - Indian Institute of Technology (IITG), Guwahati", courseFee: 230000, placement: 2100000, userReview: 8.2, reviews: 315, rating: 8, ranking: "#8th/35 in India", featured: true },
    { rank: 10, name: "IIT Hyderabad - Indian Institute of Technology (IITH), Hyderabad", courseFee: 220000, placement: 1900000, userReview: 8.0, reviews: 280, rating: 9, ranking: "#9th/35 in India", featured: false },
    { rank: 11, name: "NIT Trichy - National Institute of Technology (NITT), Trichy", courseFee: 150000, placement: 1700000, userReview: 7.9, reviews: 265, rating: 10, ranking: "#10th/35 in India", featured: false },
    { rank: 12, name: "VIT Vellore - Vellore Institute of Technology, Vellore", courseFee: 290000, placement: 1600000, userReview: 7.8, reviews: 350, rating: 11, ranking: "#11th/35 in India", featured: true },
    { rank: 13, name: "SRM University, Chennai", courseFee: 275000, placement: 1500000, userReview: 7.7, reviews: 300, rating: 12, ranking: "#12th/35 in India", featured: false },
    { rank: 14, name: "Manipal Institute of Technology (MIT), Manipal", courseFee: 300000, placement: 1800000, userReview: 7.6, reviews: 325, rating: 13, ranking: "#13th/35 in India", featured: true },
    { rank: 15, name: "Thapar Institute of Engineering and Technology (TIET), Patiala", courseFee: 310000, placement: 1400000, userReview: 7.5, reviews: 205, rating: 14, ranking: "#14th/35 in India", featured: false },
    { rank: 16, name: "Amrita School of Engineering, Coimbatore", courseFee: 280000, placement: 1300000, userReview: 7.4, reviews: 240, rating: 15, ranking: "#15th/35 in India", featured: false },
    { rank: 17, name: "BITS Goa - Birla Institute of Technology and Science, Goa", courseFee: 350000, placement: 2500000, userReview: 9.0, reviews: 330, rating: 16, ranking: "#16th/35 in India", featured: true },
    { rank: 18, name: "NIT Warangal - National Institute of Technology (NITW), Warangal", courseFee: 170000, placement: 1850000, userReview: 8.8, reviews: 375, rating: 17, ranking: "#17th/35 in India", featured: false },
    { rank: 19, name: "IIT Bhubaneswar - Indian Institute of Technology (IITBBS), Bhubaneswar", courseFee: 210000, placement: 1950000, userReview: 8.1, reviews: 290, rating: 18, ranking: "#18th/35 in India", featured: true },
    { rank: 20, name: "NIT Surathkal - National Institute of Technology (NITS), Surathkal", courseFee: 160000, placement: 1750000, userReview: 8.7, reviews: 315, rating: 19, ranking: "#19th/35 in India", featured: false }
];

let displayedColleges = [];
const rowsPerPage = 10;
let currentPage = 1;
let sortOrder = {
    rating: true,
    courseFee: true,
    userReview: true
};

// Function to initialize the table with initial data
function initializeTable() {
    displayedColleges = colleges.slice(0, rowsPerPage); // Show only the first 10 rows
    renderTable(displayedColleges);
}

// Function to render the table with given data
function renderTable(data) {
    const tbody = document.querySelector('#college-table tbody');
    tbody.innerHTML = '';

    data.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.rank}</td>
            <td>
                <a href="${getCollegeWebsite(college.name)}" target="_blank">${college.name}${college.featured ? ' <span class="featured">Featured</span>' : ''}</a><br>
                <span class="course-info">B.Tech Computer Science Engineering ▼ <br>JEE-Mains / Advanced 2024</span>
                <br>
                <span class="apply">⇒ Apply Now</span>
                <span class="down">⍗ Download Brochure</span>
                <span class="add">☐ Add to Compare</span>
            </td>
            <td class="course-fee">₹${college.courseFee.toLocaleString()} <br><span>BE/B.Tech</span><br><span>►1st year fee</span><br> <span style="color: #FF7F50; cursor: pointer; font-weight: bold;">⇄CompareFees</span></td>
            <td class="placement">
                Average: <span class="label">₹${college.placement.toLocaleString()}</span><br>
                Highest: <span class="label">₹${(college.placement * 2.1).toLocaleString()}</span><br>
                <span class="compare-placement">⇄ComparePlacement</span>
            </td>
            <td>🔹${college.userReview.toFixed(1)}/ 10<br>
                <span class="review-info">(based on ${college.reviews} user reviews)</span><br>
                <span class="best-in-social">✔ Best in social life ▼</span>
            </td>
            <td>${college.ranking}<br><span>2023</span><br><span class="more">+10 more ▼</span></td>
        `;
        tbody.appendChild(row);
    });
}

// Function to get the college website URL
function getCollegeWebsite(collegeName) {
    const collegeWebsites = {
        "IIT Madras - Indian Institute of Technology (IITM), Chennai": "https://www.iitm.ac.in",
        "IIT Delhi - Indian Institute of Technology (IITD), New Delhi": "https://home.iitd.ac.in/",
        "Parul University, Vadodara": "https://paruluniversity.ac.in/",
        "IIT Bombay - Indian Institute of Technology (IITB), Mumbai": "https://www.iitb.ac.in",
        "IIT Kanpur - Indian Institute of Technology (IITK), Kanpur": "https://www.iitk.ac.in",
        "BITS Pilani - Birla Institute of Technology and Science, Pilani": "https://www.bits-pilani.ac.in",
        "IIT Kharagpur - Indian Institute of Technology (IITKGP), Kharagpur": "http://www.iitkgp.ac.in",
        "IIT Roorkee - Indian Institute of Technology (IITR), Roorkee": "https://www.iitr.ac.in",
        "IIT Guwahati - Indian Institute of Technology (IITG), Guwahati": "https://www.iitg.ac.in",
        "IIT Hyderabad - Indian Institute of Technology (IITH), Hyderabad": "https://www.iith.ac.in",
        "NIT Trichy - National Institute of Technology (NITT), Trichy": "https://www.nitt.edu",
        "VIT Vellore - Vellore Institute of Technology, Vellore": "https://www.vit.ac.in",
        "SRM University, Chennai": "https://www.srmist.edu.in",
        "Manipal Institute of Technology (MIT), Manipal": "https://manipal.edu",
        "Thapar Institute of Engineering and Technology (TIET), Patiala": "https://www.thapar.edu",
        "Amrita School of Engineering, Coimbatore": "https://www.amrita.edu",
        "BITS Goa - Birla Institute of Technology and Science, Goa": "https://www.bits-pilani.ac.in/goa",
        "NIT Warangal - National Institute of Technology (NITW), Warangal": "https://www.nitw.ac.in",
        "IIT Bhubaneswar - Indian Institute of Technology (IITBBS), Bhubaneswar": "https://www.iitbbs.ac.in",
        "NIT Surathkal - National Institute of Technology (NITS), Surathkal": "https://www.nitk.ac.in"
    };

    return collegeWebsites[collegeName] || '#';
}

// Infinite scroll functionality
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreColleges();
    }
});

// Function to load more colleges for infinite scroll
function loadMoreColleges() {
    currentPage++;
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = currentPage * rowsPerPage;
    const nextSetOfColleges = colleges.slice(startIndex, endIndex);
    displayedColleges = displayedColleges.concat(nextSetOfColleges);
    renderTable(displayedColleges);
}

// Function to sort the table by given key
function sortTable(key) {
    sortOrder[key] = !sortOrder[key];
    let sortedColleges = [...displayedColleges];

    sortedColleges.sort((a, b) => {
        return sortOrder[key] ? a[key] - b[key] : b[key] - a[key];
    });

    displayedColleges = sortedColleges;
    renderTable(displayedColleges);
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function () {
    const searchString = this.value.trim().toLowerCase();
    displayedColleges = colleges.filter(college =>
        college.name.toLowerCase().includes(searchString)
    ).slice(0, rowsPerPage); // Reset to show first page after filtering
    currentPage = 1;
    renderTable(displayedColleges);
});

// Initialize the table on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeTable();
});
