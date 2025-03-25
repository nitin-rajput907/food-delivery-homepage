// Sample data for popular dishes
const popularDishes = [
    {
        name: "Margherita Pizza",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=600&q=80",
        restaurant: "Pizza Palace"
    },
    {
        name: "Chicken Burger",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        restaurant: "Burger House"
    },
    {
        name: "Pasta Carbonara",
        price: "$14.99",
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
        restaurant: "Italian Corner"
    },
    {
        name: "Sushi Roll",
        price: "$16.99",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
        restaurant: "Sushi Master"
    }
];

// Function to create dish cards
function createDishCards() {
    const dishContainer = document.getElementById('dishContainer');
    
    popularDishes.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-info">
                <h3>${dish.name}</h3>
                <p>${dish.restaurant}</p>
                <p class="price">${dish.price}</p>
            </div>
        `;
        
        dishContainer.appendChild(dishCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createDishCards();
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Search functionality
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    searchButton.addEventListener('click', () => {
        const address = searchInput.value.trim();
        if (address) {
            alert(`Searching for restaurants near: ${address}`);
            // In a real application, this would trigger an API call to search for restaurants
        }
    });

    // Add animation to feature cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-in-out';
        observer.observe(card);
    });
});
