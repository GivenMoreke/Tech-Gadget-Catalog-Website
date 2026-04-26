document.addEventListener('DOMContentLoaded', function() {
  // Comprehensive gadget database
  const gadgets = [
    {
      id: 1,
      title: 'iPhone 15 Pro',
      specs: '6GB RAM, 128GB Storage, A17 Pro Chip',
      price: 'R14,999',
      image: 'images/Iphone.jpeg',
      category: 'smartphone',
      details: {
        ram: '6GB',
        storage: '128GB',
        battery: '3274mAh',
        display: '6.1-inch OLED',
        camera: '48MP Triple Camera',
        os: 'iOS 17'
      }
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24',
      specs: '8GB RAM, 256GB Storage, Snapdragon 8 Gen 3',
      price: 'R12,999',
      image: 'images/SAMSUNG_Galaxy_S24.jpeg',
      category: 'smartphone',
      details: {
        ram: '8GB',
        storage: '256GB',
        battery: '4000mAh',
        display: '6.2-inch Dynamic AMOLED',
        camera: '50MP Triple Camera',
        os: 'Android 14'
      }
    },
    {
      id: 3,
      title: 'MacBook Pro M3',
      specs: '16GB RAM, 512GB SSD, M3 Chip',
      price: 'R29,999',
      image: 'images/MacBookPro_M3.jpeg',
      category: 'laptop',
      details: {
        ram: '16GB',
        storage: '512GB SSD',
        battery: '70Wh',
        display: '14-inch Liquid Retina XDR',
        processor: 'Apple M3',
        os: 'macOS Sonoma'
      }
    },
    {
      id: 4,
      title: 'Dell XPS 13',
      specs: '16GB RAM, 1TB SSD, Intel i7',
      price: 'R19,499',
      image: 'images/DellXPS_13.jpeg',
      category: 'laptop',
      details: {
        ram: '16GB',
        storage: '1TB SSD',
        battery: '52Wh',
        display: '13.4-inch FHD+',
        processor: 'Intel Core i7',
        os: 'Windows 11'
      }
    },
    {
      id: 5,
      title: 'iPad Pro 12.9',
      specs: '8GB RAM, 256GB Storage, M2 Chip',
      price: 'R16,499',
      image: 'images/IphonePro_12.jpeg',
      category: 'tablet',
      details: {
        ram: '8GB',
        storage: '256GB',
        battery: '40.88Wh',
        display: '12.9-inch Liquid Retina XDR',
        processor: 'Apple M2',
        os: 'iPadOS 17'
      }
    },
    {
      id: 6,
      title: 'AirPods Pro',
      specs: 'Active Noise Cancellation, 6 hours battery',
      price: 'R3,699',
      image: 'images/AirPods_Pro.jpeg',
      category: 'audio',
      details: {
        battery: '6 hours (24 with case)',
        connectivity: 'Bluetooth 5.3',
        features: 'Active Noise Cancellation',
        water: 'IPX4 Rated',
        chip: 'H2 Chip',
        charging: 'Lightning/Wireless'
      }
    },
    {//h
      id: 7,
      title: 'Apple Watch Series 9',
      specs: '64GB Storage, Always-On Display',
      price: 'R5,999',
      image: 'images/gamingPC.jpeg',
      category: 'wearable',
      details: {
        storage: '64GB',
        battery: '18 hours',
        display: '45mm Always-On Retina',
        health: 'ECG, Blood Oxygen',
        connectivity: 'GPS + Cellular',
        water: '50m Water Resistant'
      }
    },
    {
      id: 8,
      title: 'Gaming Desktop PC',
      specs: '32GB RAM, RTX 4080, Intel i9',
      price: 'R37,599',
      image: 'images/apple-watch.jpeg',
      category: 'desktop',
      details: {
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD',
        gpu: 'NVIDIA RTX 4080',
        processor: 'Intel Core i9-13900K',
        cooling: 'Liquid Cooling',
        os: 'Windows 11 Pro'
      }
    },
    // Additional smartphones
    {
      id: 9,
      title: 'Google Pixel 8 Pro',
      specs: '12GB RAM, 256GB Storage, Tensor G3',
      price: 'R13,499',
      image: 'images/Google_Pixel_8_Pro.jpeg',
      category: 'smartphone',
      details: {
        ram: '12GB',
        storage: '256GB',
        battery: '5050mAh',
        display: '6.7-inch LTPO OLED',
        camera: '50MP Triple Camera',
        os: 'Android 14'
      }
    },
    {
      id: 10,
      title: 'OnePlus 12',
      specs: '16GB RAM, 512GB Storage, Snapdragon 8 Gen 3',
      price: 'R11,999',
      image: 'images/OnePlus_12.jpeg',
      category: 'smartphone',
      details: {
        ram: '16GB',
        storage: '512GB',
        battery: '5400mAh',
        display: '6.82-inch AMOLED',
        camera: '50MP Triple Camera',
        os: 'OxygenOS 14'
      }
    },
    {
      id: 11,
      title: 'Xiaomi 14 Ultra',
      specs: '16GB RAM, 512GB Storage, Snapdragon 8 Gen 3',
      price: 'R14,999',
      image: 'images/Xiaomi_14_Ultra.jpeg',
      category: 'smartphone',
      details: {
        ram: '16GB',
        storage: '512GB',
        battery: '5300mAh',
        display: '6.73-inch AMOLED',
        camera: '50MP Quad Camera',
        os: 'MIUI 15'
      }
    },
    {
      id: 12,
      title: 'Nothing Phone 2',
      specs: '12GB RAM, 256GB Storage, Snapdragon 8+ Gen 1',
      price: 'R9,999',
      image: 'images/Nothing_Phone_2.jpeg',
      category: 'smartphone',
      details: {
        ram: '12GB',
        storage: '256GB',
        battery: '4700mAh',
        display: '6.7-inch OLED',
        camera: '50MP Dual Camera',
        os: 'Nothing OS 2.0'
      }
    },
    // Additional laptops
    {
      id: 13,
      title: 'HP Spectre x360',
      specs: '16GB RAM, 1TB SSD, Intel i7',
      price: 'R22,999',
      image: 'images/HP_Spectre_x360.jpeg',
      category: 'laptop',
      details: {
        ram: '16GB',
        storage: '1TB SSD',
        battery: '66Wh',
        display: '13.5-inch OLED',
        processor: 'Intel Core i7-1355U',
        os: 'Windows 11'
      }
    },
    {
      id: 14,
      title: 'ASUS ROG Zephyrus G14',
      specs: '32GB RAM, 1TB SSD, AMD Ryzen 9',
      price: 'R28,999',
      image: 'images/ASUS_ROG_Zephyrus_G16.jpeg',
      category: 'laptop',
      details: {
        ram: '32GB',
        storage: '1TB SSD',
        battery: '76Wh',
        display: '14-inch QHD',
        processor: 'AMD Ryzen 9 7940HS',
        os: 'Windows 11'
      }
    },
    {
      id: 15,
      title: 'Lenovo ThinkPad X1 Carbon',
      specs: '16GB RAM, 512GB SSD, Intel i7',
      price: 'R26,999',
      image: 'images/Lenovo_ThinkPad_X1_Carbon.jpeg',
      category: 'laptop',
      details: {
        ram: '16GB',
        storage: '512GB SSD',
        battery: '57Wh',
        display: '14-inch FHD',
        processor: 'Intel Core i7-1365U',
        os: 'Windows 11 Pro'
      }
    },
    {
      id: 16,
      title: 'Surface Laptop 5',
      specs: '16GB RAM, 512GB SSD, Intel i7',
      price: 'R24,999',
      image: 'images/Surface_Laptop_5.jpeg',
      category: 'laptop',
      details: {
        ram: '16GB',
        storage: '512GB SSD',
        battery: '47.4Wh',
        display: '13.5-inch PixelSense',
        processor: 'Intel Core i7-1255U',
        os: 'Windows 11'
      }
    },
    // Additional tablets
    {
      id: 17,
      title: 'Samsung Galaxy Tab S9',
      specs: '12GB RAM, 256GB Storage, Snapdragon 8 Gen 2',
      price: 'R12,999',
      image: 'images/Samsung_Galaxy_Tab_S9.jpeg',
      category: 'tablet',
      details: {
        ram: '12GB',
        storage: '256GB',
        battery: '8000mAh',
        display: '11-inch Dynamic AMOLED',
        processor: 'Snapdragon 8 Gen 2',
        os: 'Android 13'
      }
    },
    {
      id: 18,
      title: 'Microsoft Surface Pro 9',
      specs: '16GB RAM, 512GB SSD, Intel i7',
      price: 'R18,999',
      image: 'images/Microsoft_Surface_Pro_9.jpeg',
      category: 'tablet',
      details: {
        ram: '16GB',
        storage: '512GB SSD',
        battery: '47.36Wh',
        display: '13-inch PixelSense',
        processor: 'Intel Core i7-1255U',
        os: 'Windows 11'
      }
    },
    {
      id: 19,
      title: 'iPad Air 5',
      specs: '8GB RAM, 256GB Storage, M1 Chip',
      price: 'R11,999',
      image: 'images/iPad_Air_5.jpeg',
      category: 'tablet',
      details: {
        ram: '8GB',
        storage: '256GB',
        battery: '28.6Wh',
        display: '10.9-inch Liquid Retina',
        processor: 'Apple M1',
        os: 'iPadOS 17'
      }
    },
    {
      id: 20,
      title: 'Lenovo Tab P12 Pro',
      specs: '8GB RAM, 256GB Storage, MediaTek Dimensity 7050',
      price: 'R8,999',
      image: 'images/Lenovo_Tab_P12_Pro.jpeg',
      category: 'tablet',
      details: {
        ram: '8GB',
        storage: '256GB',
        battery: '10200mAh',
        display: '12.7-inch 3K OLED',
        processor: 'MediaTek Dimensity 7050',
        os: 'Android 13'
      }
    },
    // Additional audio devices
    {
      id: 21,
      title: 'Sony WH-1000XM5',
      specs: 'Noise Cancelling, 30 hours battery',
      price: 'R6,999',
      image:'images/Sony_WH-1000XM5.jpeg',
      category: 'audio',
      details: {
        battery: '30 hours',
        connectivity: 'Bluetooth 5.2',
        features: 'Active Noise Cancelling',
        drivers: '30mm',
        charging: 'USB-C Quick Charge',
        weight: '250g'
      }
    },
    {
      id: 22,
      title: 'Bose QuietComfort 45',
      specs: 'Noise Cancelling, 24 hours battery',
      price: 'R5,999',
      image: 'images/Bose_QuietComfort_45.jpeg',
      category: 'audio',
      details: {
        battery: '24 hours',
        connectivity: 'Bluetooth 5.1',
        features: 'Active Noise Cancelling',
        drivers: 'TriPort acoustic',
        charging: 'USB-C',
        weight: '238g'
      }
    },
    {
      id: 23,
      title: 'Sennheiser Momentum 4',
      specs: 'Adaptive Noise Cancellation, 60 hours battery',
      price: 'R7,499',
      image: 'images/Sennheiser_Momentum_4.jpeg',
      category: 'audio',
      details: {
        battery: '60 hours',
        connectivity: 'Bluetooth 5.2',
        features: 'Adaptive Noise Cancellation',
        drivers: '42mm transducer',
        charging: 'USB-C',
        weight: '293g'
      }
    },
    {
      id: 24,
      title: 'JBL Live 660NC',
      specs: 'Noise Cancelling, 50 hours battery',
      price: 'R2,999',
      image: 'images/JBL_Live_660NC.jpeg',
      category: 'audio',
      details: {
        battery: '50 hours',
        connectivity: 'Bluetooth 5.0',
        features: 'Active Noise Cancelling',
        drivers: '40mm',
        charging: 'USB-C',
        weight: '220g'
      }
    }
  ];

  let selectedGadgets = [];
  let favorites = [];
  let currentGadget = null;
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // DOM Elements
  const gadgetListElement = document.getElementById('gadget-list');
  const gadgetDetailsElement = document.getElementById('gadget-details');
  const favoritesElement = document.getElementById('favorites');
  const comparisonTableElement = document.getElementById('comparison-table');
  const searchBar = document.getElementById('search-bar');
  const mobileMenu = document.getElementById('mobile-menu');
  const cartCountElement = document.getElementById('cart-count');

  // Event Listeners
  document.getElementById('search-btn').addEventListener('click', searchGadgets);
  document.getElementById('clear-btn').addEventListener('click', clearSearch);
  document.getElementById('compare-btn').addEventListener('click', showComparison);
  document.getElementById('clear-comparison-btn').addEventListener('click', clearComparison);
  document.getElementById('print-btn').addEventListener('click', printSpecs);
  document.getElementById('search-icon').addEventListener('click', toggleSearchFocus);
  document.getElementById('checkout-icon').addEventListener('click', showCheckout);
  document.getElementById('menu-icon').addEventListener('click', toggleMobileMenu);
  document.getElementById('close-menu').addEventListener('click', closeMobileMenu);

  // Search on Enter key
  searchBar.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchGadgets();
    }
  });

  // Mobile menu links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Initialize displays
  updateFavoritesDisplay();
  updateSelectionCount();
  updateCartCount();

  function searchGadgets() {
    const query = searchBar.value.toLowerCase().trim();
    
    if (!query) {
      gadgetListElement.innerHTML = '<p class="placeholder">Enter a search term to find gadgets</p>';
      return;
    }

    const filteredGadgets = gadgets.filter(gadget =>
      gadget.title.toLowerCase().includes(query) ||
      gadget.category.toLowerCase().includes(query) ||
      gadget.specs.toLowerCase().includes(query)
    );
    
    displayGadgetList(filteredGadgets);
  }

  function clearSearch() {
    searchBar.value = '';
    gadgetListElement.innerHTML = '<p class="placeholder">Enter a search term to find gadgets</p>';
    clearSelectedGadgets();
  }

  function displayGadgetList(gadgetList) {
    if (gadgetList.length === 0) {
      gadgetListElement.innerHTML = '<p class="placeholder">No gadgets found matching your search</p>';
      return;
    }

    gadgetListElement.innerHTML = '';
    gadgetList.forEach(gadget => {
      const gadgetItem = document.createElement('div');
      gadgetItem.className = 'gadget-item';
      gadgetItem.dataset.gadgetId = gadget.id;
      
      gadgetItem.innerHTML = `
        <div class="gadget-title">${gadget.title}</div>
        <div class="gadget-preview">${gadget.specs}</div>
        <div class="gadget-price" style="color: #00f2fe; font-weight: 600; margin-top: 0.5rem;">${gadget.price}</div>
      `;
      
      gadgetItem.addEventListener('click', (e) => {
        if (!e.ctrlKey && !e.metaKey) {
          showGadgetDetails(gadget);
        }
      });
      
      gadgetItem.addEventListener('dblclick', () => toggleGadgetSelection(gadget, gadgetItem));
      gadgetItem.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey) {
          toggleGadgetSelection(gadget, gadgetItem);
        }
      });
      
      gadgetListElement.appendChild(gadgetItem);
    });
  }

  function showGadgetDetails(gadget) {
    currentGadget = gadget;
    const isBookmarked = favorites.some(fav => fav.id === gadget.id);
    
    gadgetDetailsElement.innerHTML = `
      <div class="gadget-detail-card">
        <img src="${gadget.image}" alt="${gadget.title}" />
        <h3>${gadget.title}</h3>
        <div class="specs-detail">
          ${Object.entries(gadget.details).map(([key, value]) => 
            `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</p>`
          ).join('')}
        </div>
        <p class="price">${gadget.price}</p>
        <div class="detail-buttons">
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}">
            ${isBookmarked ? 'Bookmarked' : ' Bookmark'}
          </button>
          <button class="add-to-cart-btn">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    `;
    
    const bookmarkBtn = gadgetDetailsElement.querySelector('.bookmark-btn');
    bookmarkBtn.addEventListener('click', () => toggleBookmark(gadget));
    
    const addToCartBtn = gadgetDetailsElement.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(gadget));
  }

  function addToCart(gadget) {
    const existingItem = cart.find(item => item.id === gadget.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...gadget,
        quantity: 1
      });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${gadget.title} added to cart!`, 'success');
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    cartCountElement.style.display = totalItems > 0 ? 'inline' : 'none';
  }

  function toggleBookmark(gadget) {
    const existingIndex = favorites.findIndex(fav => fav.id === gadget.id);
    
    if (existingIndex > -1) {
      favorites.splice(existingIndex, 1);
      showNotification(`${gadget.title} removed from favorites!`, 'info');
    } else {
      favorites.push(gadget);
      showNotification(`${gadget.title} added to favorites!`, 'success');
    }
    
    updateFavoritesDisplay();
    
    if (currentGadget && currentGadget.id === gadget.id) {
      showGadgetDetails(gadget);
    }
  }

  function updateFavoritesDisplay() {
    if (favorites.length === 0) {
      favoritesElement.innerHTML = '<p class="placeholder">No favorites added yet</p>';
      return;
    }

    favoritesElement.innerHTML = favorites.map(gadget => `
      <div class="favorite-item">
        <div>
          <strong>${gadget.title}</strong>
          <div style="font-size: 0.9rem; color: rgba(255,255,255,0.7);">${gadget.price}</div>
        </div>
        <button class="remove-favorite" data-gadget-id="${gadget.id}">Remove</button>
      </div>
    `).join('');

    favoritesElement.querySelectorAll('.remove-favorite').forEach(btn => {
      btn.addEventListener('click', () => {
        const gadgetId = parseInt(btn.dataset.gadgetId);
        const gadget = gadgets.find(g => g.id === gadgetId);
        if (gadget) toggleBookmark(gadget);
      });
    });
  }

  function toggleGadgetSelection(gadget, element) {
    const index = selectedGadgets.findIndex(g => g.id === gadget.id);
    
    if (index > -1) {
      selectedGadgets.splice(index, 1);
      element.classList.remove('selected');
    } else if (selectedGadgets.length < 2) {
      selectedGadgets.push(gadget);
      element.classList.add('selected');
    } else {
      showNotification('You can only select 2 gadgets for comparison', 'warning');
    }
    
    updateSelectionCount();
  }

  function showComparison() {
    if (selectedGadgets.length !== 2) {
      showNotification('Please select exactly 2 gadgets to compare', 'warning');
      return;
    }

    const [gadget1, gadget2] = selectedGadgets;
    const allKeys = new Set([...Object.keys(gadget1.details), ...Object.keys(gadget2.details)]);
    
    comparisonTableElement.innerHTML = `
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>${gadget1.title}</th>
              <th>${gadget2.title}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Price</strong></td>
              <td>${gadget1.price}</td>
              <td>${gadget2.price}</td>
            </tr>
            ${Array.from(allKeys).map(key => `
              <tr>
                <td><strong>${key.charAt(0).toUpperCase() + key.slice(1)}</strong></td>
                <td>${gadget1.details[key] || 'N/A'}</td>
                <td>${gadget2.details[key] || 'N/A'}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    
    document.querySelector('.comparison-section').scrollIntoView({ behavior: 'smooth' });
  }

  function clearComparison() {
    comparisonTableElement.innerHTML = '<p class="placeholder">Select 2 gadgets to compare them side-by-side</p>';
    clearSelectedGadgets();
  }

  function clearSelectedGadgets() {
    selectedGadgets = [];
    document.querySelectorAll('.gadget-item.selected').forEach(item => {
      item.classList.remove('selected');
    });
    updateSelectionCount();
  }

  function updateSelectionCount() {
    const countElement = document.getElementById('selection-count');
    const count = selectedGadgets.length;
    countElement.textContent = `${count} gadget${count !== 1 ? 's' : ''} selected`;
    countElement.style.color = count === 2 ? '#00f2fe' : count === 1 ? '#ffa726' : '#4facfe';
  }

  function toggleSearchFocus() {
    searchBar.focus();
    searchBar.select();
  }

  function showCheckout() {
    if (cart.length === 0) {
      showNotification('Your cart is empty!', 'info');
      return;
    }

    const total = cart.reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[R,]/g, ''));
      return sum + (price * item.quantity);
    }, 0);

    showNotification(`Proceeding to checkout with ${cart.reduce((sum, item) => sum + item.quantity, 0)} items (Total: R${total.toLocaleString()})`, 'success');
  }

  function toggleMobileMenu() {
    mobileMenu.classList.add('active');
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
  }

  function printSpecs() {
    if (!currentGadget) {
      showNotification('Please select a gadget to print its specifications', 'warning');
      return;
    }
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${currentGadget.title} - Specifications</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #333; }
            .spec-item { margin: 10px 0; }
            .price { font-size: 1.5em; color: #4CAF50; font-weight: bold; }
          </style>
        </head>
        <body>
          <h1>${currentGadget.title}</h1>
          <div class="specifications">
            ${Object.entries(currentGadget.details).map(([key, value]) => 
              `<div class="spec-item"><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${value}</div>`
            ).join('')}
            <div class="spec-item price">Price: ${currentGadget.price}</div>
          </div>
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
  }

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
    .bookmarked {
      background: linear-gradient(45deg, #4CAF50, #45a049) !important;
    }
    .detail-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 1.5rem;
    }
    .add-to-cart-btn {
      background: linear-gradient(45deg, #FF9800, #F57C00);
      border: none;
      color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 25px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
    }
    .add-to-cart-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 152, 0, 0.5);
    }
  `;
  document.head.appendChild(style);

});
 // Mobile menu functionality
        document.getElementById('menu-icon').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('active');
        });

        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.remove('active');
        });

        // Search icon functionality
        document.getElementById('search-icon').addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Checkout icon functionality
        document.getElementById('checkout-icon').addEventListener('click', function() {
            alert('Checkout functionality - redirecting to cart...');
        });

          // Mobile menu functionality
        document.getElementById('menu-icon').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('active');
        });

        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.remove('active');
        });

        // Search icon functionality
        document.getElementById('search-icon').addEventListener('click', function() {
            window.location.href = 'index.html';
        });

        // Checkout icon functionality
        document.getElementById('checkout-icon').addEventListener('click', function() {
            alert('Checkout functionality - redirecting to cart...');
        });