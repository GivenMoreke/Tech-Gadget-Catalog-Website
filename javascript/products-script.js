document.addEventListener('DOMContentLoaded', function() {
    // Use the same gadgets data as in the main script
    const gadgets = [
        {
            id: 1,
            title: 'iPhone 15 Pro',
            specs: '6GB RAM, 128GB Storage, A17 Pro Chip',
            price: 'R14,999',
            image: 'images/Iphone.jpeg',
            category: 'smartphone'
        },
        {
            id: 2,
            title: 'Samsung Galaxy S24',
            specs: '8GB RAM, 256GB Storage, Snapdragon 8 Gen 3',
            price: 'R12,999',
            image: 'images/SAMSUNG_Galaxy_S24.jpeg',
            category: 'smartphone'
        },
        {
            id: 3,
            title: 'MacBook Pro M3',
            specs: '16GB RAM, 512GB SSD, M3 Chip',
            price: 'R29,999',
            image: 'images/MacBookPro_M3.jpeg',
            category: 'laptop'
        },
        {
            id: 4,
            title: 'Dell XPS 13',
            specs: '16GB RAM, 1TB SSD, Intel i7',
            price: 'R19,499',
            image: 'images/DellXPS_13.jpeg',
            category: 'laptop'
        },
        {
            id: 5,
            title: 'iPad Pro 12.9',
            specs: '8GB RAM, 256GB Storage, M2 Chip',
            price: 'R16,499',
            image: 'images/IphonePro_12.jpeg',
            category: 'tablet'
        },
        {
            id: 6,
            title: 'AirPods Pro',
            specs: 'Active Noise Cancellation, 6 hours battery',
            price: 'R3,699',
            image: 'images/AirPods_Pro.jpeg',
            category: 'audio'
        },
        // Additional smartphones
        {
            id: 9,
            title: 'Google Pixel 8 Pro',
            specs: '12GB RAM, 256GB Storage, Tensor G3',
            price: 'R13,499',
            image: 'images/Google_Pixel_8_Pro.jpeg',
            category: 'smartphone'
        },
        {
            id: 10,
            title: 'OnePlus 12',
            specs: '16GB RAM, 512GB Storage, Snapdragon 8 Gen 3',
            price: 'R11,999',
            image: 'images/OnePlus_12.jpeg',
            category: 'smartphone'
        },
        {
            id: 11,
            title: 'Xiaomi 14 Ultra',
            specs: '16GB RAM, 512GB Storage, Snapdragon 8 Gen 3',
            price: 'R14,999',
            image: 'images/Xiaomi_14_Ultra.jpeg',
            category: 'smartphone'
        },
        {
            id: 12,
            title: 'Nothing Phone 2',
            specs: '12GB RAM, 256GB Storage, Snapdragon 8+ Gen 1',
            price: 'R9,999',
            image: 'images/Nothing_Phone_2.jpeg',
            category: 'smartphone'
        },
        // Additional laptops
        {
            id: 13,
            title: 'HP Spectre x360',
            specs: '16GB RAM, 1TB SSD, Intel i7',
            price: 'R22,999',
            image: 'images/HP_Spectre_x360.jpeg',
            category: 'laptop'
        },
        {
            id: 14,
            title: 'ASUS ROG Zephyrus G14',
            specs: '32GB RAM, 1TB SSD, AMD Ryzen 9',
            price: 'R28,999',
            image: 'images/ASUS_ROG_Zephyrus_G16.jpeg',
            category: 'laptop'
        },
        {
            id: 15,
            title: 'Lenovo ThinkPad X1 Carbon',
            specs: '16GB RAM, 512GB SSD, Intel i7',
            price: 'R26,999',
            image: 'images/Lenovo_ThinkPad_X1_Carbon.jpeg',
            category: 'laptop'
        },
        {
            id: 16,
            title: 'Surface Laptop 5',
            specs: '16GB RAM, 512GB SSD, Intel i7',
            price: 'R24,999',
            image: 'images/Surface_Laptop_5.jpeg',
            category: 'laptop'
        },
        // Additional tablets
        {
            id: 17,
            title: 'Samsung Galaxy Tab S9',
            specs: '12GB RAM, 256GB Storage, Snapdragon 8 Gen 2',
            price: 'R12,999',
            image: 'images/Samsung_Galaxy_Tab_S9.jpeg',
            category: 'tablet'
        },
        {
            id: 18,
            title: 'Microsoft Surface Pro 9',
            specs: '16GB RAM, 512GB SSD, Intel i7',
            price: 'R18,999',
            image: 'images/Microsoft_Surface_Pro_9.jpeg',
            category: 'tablet'
        },
        {
            id: 19,
            title: 'iPad Air 5',
            specs: '8GB RAM, 256GB Storage, M1 Chip',
            price: 'R11,999',
            image: 'images/iPad_Air_5.jpeg',
            category: 'tablet'
        },
        {
            id: 20,
            title: 'Lenovo Tab P12 Pro',
            specs: '8GB RAM, 256GB Storage, MediaTek Dimensity 7050',
            price: 'R8,999',
            image: 'images/Lenovo_Tab_P12_Pro.jpeg',
            category: 'tablet'
        },
        // Additional audio devices
        {
            id: 21,
            title: 'Sony WH-1000XM5',
            specs: 'Noise Cancelling, 30 hours battery',
            price: 'R6,999',
            image: 'images/Sony_WH-1000XM5.jpeg',
            category: 'audio'
        },
        {
            id: 22,
            title: 'Bose QuietComfort 45',
            specs: 'Noise Cancelling, 24 hours battery',
            price: 'R5,999',
            image: 'images/Bose_QuietComfort_45.jpeg',
            category: 'audio'
        },
        {
            id: 23,
            title: 'Sennheiser Momentum 4',
            specs: 'Adaptive Noise Cancellation, 60 hours battery',
            price: 'R7,499',
            image: 'images/Sennheiser_Momentum_4.jpeg',
            category: 'audio'
        },
        {
            id: 24,
            title: 'JBL Live 660NC',
            specs: 'Noise Cancelling, 50 hours battery',
            price: 'R2,999',
            image: 'images/JBL_Live_660NC.jpeg',
            category: 'audio'
        }
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentCategory = 'all';

    // DOM Elements
    const productsGrid = document.getElementById('products-grid');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartCountElement = document.getElementById('cart-count');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Event Listeners
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
    document.getElementById('checkout-cart-btn').addEventListener('click', proceedToCheckout);
    document.getElementById('checkout-icon').addEventListener('click', toggleCartVisibility);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            displayProducts(currentCategory);
        });
    });

    // Mobile menu functionality
    document.getElementById('menu-icon').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('active');
    });

    document.getElementById('close-menu').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('active');
    });

    document.getElementById('search-icon').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Initialize
    displayProducts('all');
    updateCartDisplay();
    updateCartCount();

    function displayProducts(category) {
        const filteredProducts = category === 'all' 
            ? gadgets 
            : gadgets.filter(product => product.category === category);

        productsGrid.innerHTML = '';

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <div class="specs">${product.specs}</div>
                <div class="price">${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    🛒 Add to Cart
                </button>
            `;
            productsGrid.appendChild(productCard);
        });
    }

    window.addToCart = function(productId) {
        const product = gadgets.find(p => p.id === productId);
        if (!product) return;

        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        saveCart();
        updateCartDisplay();
        updateCartCount();
        showNotification(`${product.title} added to cart!`, 'success');
    };

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartDisplay();
        updateCartCount();
    }

    function updateQuantity(productId, change) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
            updateCartCount();
        }
    }

    function updateCartDisplay() {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="placeholder">Your cart is empty</p>';
            updateCartTotal();
            return;
        }

        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price} each</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `).join('');

        updateCartTotal();
    }

    function updateCartTotal() {
        const total = cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace(/[R,]/g, ''));
            return sum + (price * item.quantity);
        }, 0);

        cartTotalElement.textContent = total.toLocaleString();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'inline' : 'none';
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function clearCart() {
        cart = [];
        saveCart();
        updateCartDisplay();
        updateCartCount();
        showNotification('Cart cleared!', 'info');
    }

    function proceedToCheckout() {
        if (cart.length === 0) {
            showNotification('Your cart is empty!', 'warning');
            return;
        }

        const total = cart.reduce((sum, item) => {
            const price = parseFloat(item.price.replace(/[R,]/g, ''));
            return sum + (price * item.quantity);
        }, 0);

        showNotification(`Processing checkout for R${total.toLocaleString()}...`, 'success');
        
        // Simulate checkout process
        setTimeout(() => {
            showNotification('Order placed successfully! Thank you for shopping with TechStore.', 'success');
            clearCart();
        }, 2000);
    }

    function toggleCartVisibility() {
        const cartSection = document.getElementById('cart-section');
        cartSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'};
            color: white;
            padding: 12px 20px;
            border-radius: 25px;
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Make functions globally available
    window.removeFromCart = removeFromCart;
    window.updateQuantity = updateQuantity;
    window.showNotification = showNotification;

    // Add CSS animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
