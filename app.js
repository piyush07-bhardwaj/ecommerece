// Global State Management
const AppState = {
    currentUser: null,
    currentPage: 'homepage',
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
    products: [],
    categories: [],
    currentCategory: null,
    currentProduct: null,
    searchQuery: '',
    filters: {
        priceRange: null,
        brand: [],
        rating: null
    },
    sortBy: 'relevance',
    currentPageNum: 1,
    productsPerPage: 12,
    orders: JSON.parse(localStorage.getItem('orders') || '[]')
};

// Mock Data from the provided JSON
const mockData = {
    categories: [
        {"id": "kitchen", "name": "Kitchen", "description": "Kitchen essentials and appliances", "icon": "fas fa-utensils"},
        {"id": "electronics", "name": "Electronics", "description": "TVs, laptops, headphones and gadgets", "icon": "fas fa-tv"},
        {"id": "clothes", "name": "Clothes", "description": "Men's, Women's and Kids' fashion", "icon": "fas fa-tshirt"},
        {"id": "mobiles", "name": "Mobiles", "description": "Smartphones and accessories", "icon": "fas fa-mobile-alt"},
        {"id": "books", "name": "Books", "description": "Fiction, educational and reference books", "icon": "fas fa-book"},
        {"id": "furniture", "name": "Furniture", "description": "Chairs, tables, beds and home furniture", "icon": "fas fa-couch"},
        {"id": "sports", "name": "Sports", "description": "Gym equipment and outdoor games", "icon": "fas fa-football-ball"},
        {"id": "beauty", "name": "Beauty", "description": "Skincare, makeup and cosmetics", "icon": "fas fa-palette"},
        {"id": "toys", "name": "Toys", "description": "Toys for all age groups", "icon": "fas fa-puzzle-piece"},
        {"id": "automotive", "name": "Automotive", "description": "Car accessories and tools", "icon": "fas fa-car"}
    ],
    sampleProducts: [
        {"id": 1, "name": "Non-Stick Frying Pan", "description": "Premium non-stick coating for healthy cooking", "price": 2499, "originalPrice": 3299, "discount": 24, "brand": "Prestige", "category": "kitchen", "rating": 4.5, "reviewCount": 128, "stock": 45, "images": ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop"], "isFeatured": true},
        {"id": 2, "name": "Smart LED TV 55\"", "description": "4K Ultra HD Smart LED TV with Android", "price": 45999, "originalPrice": 55999, "discount": 18, "brand": "Samsung", "category": "electronics", "rating": 4.7, "reviewCount": 256, "stock": 12, "images": ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"], "isFeatured": true},
        {"id": 3, "name": "Cotton T-Shirt", "description": "100% cotton round neck t-shirt", "price": 599, "originalPrice": 999, "discount": 40, "brand": "Allen Solly", "category": "clothes", "rating": 4.2, "reviewCount": 89, "stock": 67, "images": ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"], "isFeatured": false},
        {"id": 4, "name": "iPhone 15", "description": "128GB storage with A17 chip", "price": 79999, "originalPrice": 89999, "discount": 11, "brand": "Apple", "category": "mobiles", "rating": 4.8, "reviewCount": 412, "stock": 8, "images": ["https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop"], "isFeatured": true},
        {"id": 5, "name": "The Alchemist", "description": "International bestseller by Paulo Coelho", "price": 299, "originalPrice": 399, "discount": 25, "brand": "HarperCollins", "category": "books", "rating": 4.6, "reviewCount": 324, "stock": 89, "images": ["https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop"], "isFeatured": false}
    ],
    brands: ["Apple", "Samsung", "LG", "Sony", "Nike", "Adidas", "Levi's", "Allen Solly", "Prestige", "Hawkins"],
    priceRanges: [
        {"label": "Under ₹500", "min": 0, "max": 500},
        {"label": "₹500 - ₹1000", "min": 500, "max": 1000},
        {"label": "₹1000 - ₹5000", "min": 1000, "max": 5000},
        {"label": "₹5000 - ₹10000", "min": 5000, "max": 10000},
        {"label": "₹10000+", "min": 10000, "max": 999999}
    ],
    coupons: [
        {"code": "SAVE10", "discount": 10, "type": "percentage", "minAmount": 500},
        {"code": "FLAT50", "discount": 50, "type": "fixed", "minAmount": 1000},
        {"code": "WELCOME20", "discount": 20, "type": "percentage", "minAmount": 0}
    ]
};

// Generate more products for each category
function generateProducts() {
    const products = [...mockData.sampleProducts];
    let nextId = 6;

    // Generate additional products for each category
    const additionalProducts = [
        // Kitchen
        {"name": "Microwave Oven", "description": "20L convection microwave with multiple cooking modes", "price": 12999, "originalPrice": 15999, "brand": "LG", "category": "kitchen", "rating": 4.3, "reviewCount": 89, "stock": 23},
        {"name": "Mixer Grinder", "description": "750W motor with 3 jars for all grinding needs", "price": 3499, "originalPrice": 4999, "brand": "Prestige", "category": "kitchen", "rating": 4.4, "reviewCount": 156, "stock": 34},
        {"name": "Electric Kettle", "description": "1.8L capacity with auto shut-off feature", "price": 1299, "originalPrice": 1799, "brand": "Havells", "category": "kitchen", "rating": 4.1, "reviewCount": 67, "stock": 78},

        // Electronics
        {"name": "Wireless Headphones", "description": "Active noise cancellation with 30hr battery", "price": 8999, "originalPrice": 12999, "brand": "Sony", "category": "electronics", "rating": 4.6, "reviewCount": 234, "stock": 45},
        {"name": "Gaming Laptop", "description": "Intel i7, 16GB RAM, RTX 3060 graphics", "price": 89999, "originalPrice": 99999, "brand": "ASUS", "category": "electronics", "rating": 4.5, "reviewCount": 123, "stock": 8},
        {"name": "Bluetooth Speaker", "description": "Portable speaker with deep bass and waterproof design", "price": 2999, "originalPrice": 4499, "brand": "JBL", "category": "electronics", "rating": 4.4, "reviewCount": 189, "stock": 56},

        // Clothes
        {"name": "Denim Jacket", "description": "Classic blue denim jacket for casual wear", "price": 1999, "originalPrice": 2999, "brand": "Levi's", "category": "clothes", "rating": 4.3, "reviewCount": 78, "stock": 23},
        {"name": "Formal Shirt", "description": "Slim fit formal shirt for office wear", "price": 1299, "originalPrice": 1899, "brand": "Allen Solly", "category": "clothes", "rating": 4.2, "reviewCount": 92, "stock": 45},
        {"name": "Running Shoes", "description": "Lightweight running shoes with air cushioning", "price": 4999, "originalPrice": 6999, "brand": "Nike", "category": "clothes", "rating": 4.7, "reviewCount": 167, "stock": 34},

        // Mobiles
        {"name": "Samsung Galaxy S24", "description": "256GB storage with triple camera setup", "price": 69999, "originalPrice": 79999, "brand": "Samsung", "category": "mobiles", "rating": 4.6, "reviewCount": 298, "stock": 12},
        {"name": "Wireless Earbuds", "description": "True wireless earbuds with charging case", "price": 3999, "originalPrice": 5999, "brand": "OnePlus", "category": "mobiles", "rating": 4.3, "reviewCount": 145, "stock": 67},
        {"name": "Phone Case", "description": "Shockproof case with military grade protection", "price": 799, "originalPrice": 1299, "brand": "Spigen", "category": "mobiles", "rating": 4.4, "reviewCount": 89, "stock": 156},

        // Books
        {"name": "Rich Dad Poor Dad", "description": "Personal finance and investing guide", "price": 349, "originalPrice": 450, "brand": "Plata", "category": "books", "rating": 4.5, "reviewCount": 567, "stock": 123},
        {"name": "Atomic Habits", "description": "Proven way to build good habits and break bad ones", "price": 399, "originalPrice": 500, "brand": "Random House", "category": "books", "rating": 4.7, "reviewCount": 789, "stock": 89},
        {"name": "Think and Grow Rich", "description": "Classic self-help and personal development book", "price": 299, "originalPrice": 399, "brand": "Jaico", "category": "books", "rating": 4.4, "reviewCount": 234, "stock": 67},

        // Furniture
        {"name": "Office Chair", "description": "Ergonomic chair with lumbar support", "price": 8999, "originalPrice": 12999, "brand": "Featherlite", "category": "furniture", "rating": 4.3, "reviewCount": 89, "stock": 23},
        {"name": "Study Table", "description": "Wooden study table with drawers", "price": 6999, "originalPrice": 9999, "brand": "Urban Ladder", "category": "furniture", "rating": 4.2, "reviewCount": 67, "stock": 34},
        {"name": "Bookshelf", "description": "5-tier wooden bookshelf for home/office", "price": 4999, "originalPrice": 6999, "brand": "Pepperfry", "category": "furniture", "rating": 4.1, "reviewCount": 45, "stock": 56}
    ];

    additionalProducts.forEach(product => {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        const imageCategory = product.category === 'mobiles' ? 'phone' : product.category === 'clothes' ? 'fashion' : product.category;
        
        products.push({
            id: nextId++,
            ...product,
            discount,
            images: [`https://images.unsplash.com/photo-1${Math.random().toString().substr(2,12)}?w=400&h=400&fit=crop`],
            isFeatured: Math.random() > 0.7
        });
    });

    return products;
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price).replace('₹', '₹');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.getElementById('toast-container').appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Navigation Functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
    AppState.currentPage = pageId;
    
    // Update URL hash
    window.location.hash = pageId;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function updateBreadcrumb(items) {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    breadcrumb.innerHTML = items.map((item, index) => {
        if (index === items.length - 1) {
            return `<span>${item.name}</span>`;
        } else {
            return `<a href="#" onclick="navigateTo('${item.link}')">${item.name}</a> / `;
        }
    }).join('');
}

function navigateTo(page, data = null) {
    switch (page) {
        case 'homepage':
            showPage('homepage');
            loadHomepage();
            break;
        case 'products':
            AppState.currentCategory = data?.category || null;
            showPage('products-page');
            loadProductsPage();
            break;
        case 'product-details':
            AppState.currentProduct = data?.product || null;
            showPage('product-details-page');
            loadProductDetails();
            break;
        case 'cart':
            showPage('cart-page');
            loadCartPage();
            break;
        case 'checkout':
            if (AppState.cart.length === 0) {
                showToast('Your cart is empty', 'error');
                return;
            }
            showPage('checkout-page');
            loadCheckoutPage();
            break;
        case 'account':
            if (!AppState.currentUser) {
                showLoginModal();
                return;
            }
            showPage('account-page');
            loadAccountPage();
            break;
        case 'admin':
            if (!AppState.currentUser || AppState.currentUser.role !== 'admin') {
                showToast('Admin access required', 'error');
                return;
            }
            showPage('admin-page');
            loadAdminPage();
            break;
    }
}

// Product Functions
function getFilteredProducts() {
    let filtered = [...AppState.products];
    
    // Filter by category
    if (AppState.currentCategory) {
        filtered = filtered.filter(p => p.category === AppState.currentCategory);
    }
    
    // Filter by search
    if (AppState.searchQuery) {
        const query = AppState.searchQuery.toLowerCase();
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.brand.toLowerCase().includes(query)
        );
    }
    
    // Filter by price range
    if (AppState.filters.priceRange) {
        filtered = filtered.filter(p => 
            p.price >= AppState.filters.priceRange.min && 
            p.price <= AppState.filters.priceRange.max
        );
    }
    
    // Filter by brand
    if (AppState.filters.brand.length > 0) {
        filtered = filtered.filter(p => AppState.filters.brand.includes(p.brand));
    }
    
    // Filter by rating
    if (AppState.filters.rating) {
        filtered = filtered.filter(p => p.rating >= AppState.filters.rating);
    }
    
    // Sort products
    switch (AppState.sortBy) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
        default: // relevance
            if (AppState.searchQuery) {
                // Simple relevance scoring
                filtered.sort((a, b) => {
                    const aScore = (a.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ? 2 : 0) +
                                  (a.description.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ? 1 : 0);
                    const bScore = (b.name.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ? 2 : 0) +
                                  (b.description.toLowerCase().includes(AppState.searchQuery.toLowerCase()) ? 1 : 0);
                    return bScore - aScore;
                });
            }
            break;
    }
    
    return filtered;
}

function renderProductCard(product, showActions = true) {
    const isInWishlist = AppState.wishlist.some(item => item.id === product.id);
    const isInCart = AppState.cart.some(item => item.productId === product.id);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image-container">
                <img src="${product.images[0]}" alt="${product.name}" class="product-image" onclick="navigateTo('product-details', {product: ${product.id}})">
                ${showActions ? `<button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>` : ''}
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                    <span class="discount">${product.discount}% off</span>
                </div>
                <div class="product-rating">
                    <div class="rating-stars">${generateStars(product.rating)}</div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                ${showActions ? `<div class="product-actions">
                    <button class="btn btn--primary" onclick="addToCart(${product.id})" ${isInCart ? 'disabled' : ''}>
                        ${isInCart ? 'In Cart' : 'Add to Cart'}
                    </button>
                    <button class="btn btn--outline" onclick="navigateTo('product-details', {product: ${product.id}})">View</button>
                </div>` : ''}
            </div>
        </div>
    `;
}

// Cart Functions
function addToCart(productId, quantity = 1) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.stock === 0) {
        showToast('Product is out of stock', 'error');
        return;
    }
    
    const existingItem = AppState.cart.find(item => item.productId === productId);
    
    if (existingItem) {
        if (existingItem.quantity + quantity > product.stock) {
            showToast(`Only ${product.stock} items available`, 'error');
            return;
        }
        existingItem.quantity += quantity;
    } else {
        AppState.cart.push({
            productId: productId,
            quantity: quantity,
            addedAt: Date.now()
        });
    }
    
    saveToLocalStorage('cart', AppState.cart);
    updateCartCount();
    showToast('Product added to cart');
    
    // Update UI
    updateProductCardButtons();
}

function removeFromCart(productId) {
    AppState.cart = AppState.cart.filter(item => item.productId !== productId);
    saveToLocalStorage('cart', AppState.cart);
    updateCartCount();
    loadCartPage();
    showToast('Product removed from cart');
}

function updateCartItemQuantity(productId, newQuantity) {
    const product = AppState.products.find(p => p.id === productId);
    const cartItem = AppState.cart.find(item => item.productId === productId);
    
    if (!cartItem || !product) return;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > product.stock) {
        showToast(`Only ${product.stock} items available`, 'error');
        return;
    }
    
    cartItem.quantity = newQuantity;
    saveToLocalStorage('cart', AppState.cart);
    loadCartPage();
}

function updateCartCount() {
    const count = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function calculateCartSummary() {
    let subtotal = 0;
    let totalDiscount = 0;
    
    AppState.cart.forEach(item => {
        const product = AppState.products.find(p => p.id === item.productId);
        if (product) {
            subtotal += product.price * item.quantity;
            totalDiscount += (product.originalPrice - product.price) * item.quantity;
        }
    });
    
    const deliveryCharges = subtotal > 500 ? 0 : 40;
    const total = subtotal + deliveryCharges;
    
    return { subtotal, totalDiscount, deliveryCharges, total };
}

// Wishlist Functions
function toggleWishlist(productId) {
    const isInWishlist = AppState.wishlist.some(item => item.id === productId);
    
    if (isInWishlist) {
        AppState.wishlist = AppState.wishlist.filter(item => item.id !== productId);
        showToast('Removed from wishlist');
    } else {
        const product = AppState.products.find(p => p.id === productId);
        if (product) {
            AppState.wishlist.push(product);
            showToast('Added to wishlist');
        }
    }
    
    saveToLocalStorage('wishlist', AppState.wishlist);
    updateWishlistCount();
    updateProductCardButtons();
}

function updateWishlistCount() {
    document.getElementById('wishlist-count').textContent = AppState.wishlist.length;
}

function updateProductCardButtons() {
    document.querySelectorAll('.product-card').forEach(card => {
        const productId = parseInt(card.dataset.productId);
        const wishlistBtn = card.querySelector('.wishlist-btn');
        const addToCartBtn = card.querySelector('.product-actions .btn--primary');
        
        if (wishlistBtn) {
            const isInWishlist = AppState.wishlist.some(item => item.id === productId);
            wishlistBtn.classList.toggle('active', isInWishlist);
        }
        
        if (addToCartBtn) {
            const isInCart = AppState.cart.some(item => item.productId === productId);
            addToCartBtn.disabled = isInCart;
            addToCartBtn.textContent = isInCart ? 'In Cart' : 'Add to Cart';
        }
    });
}

// Authentication Functions
function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function showRegisterModal() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('register-modal').classList.remove('hidden');
}

function hideModals() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('register-modal').classList.add('hidden');
}

function login(email, password) {
    // Mock authentication
    let user = null;
    if (email === 'admin@example.com' && password === 'admin123') {
        user = { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' };
    } else if (email && password) {
        user = { id: 2, name: 'John Doe', email: email, role: 'customer' };
    }
    
    if (user) {
        AppState.currentUser = user;
        updateUserUI();
        hideModals();
        showToast('Login successful');
        return true;
    } else {
        showToast('Invalid credentials', 'error');
        return false;
    }
}

function register(name, email, password) {
    // Mock registration
    const user = { id: Date.now(), name, email, role: 'customer' };
    AppState.currentUser = user;
    updateUserUI();
    hideModals();
    showToast('Registration successful');
}

function logout() {
    AppState.currentUser = null;
    updateUserUI();
    navigateTo('homepage');
    showToast('Logged out successfully');
}

function updateUserUI() {
    const userNameEl = document.getElementById('user-name');
    const loginLink = document.getElementById('login-link');
    const profileLink = document.getElementById('profile-link');
    const ordersLink = document.getElementById('orders-link');
    const adminLink = document.getElementById('admin-link');
    const logoutLink = document.getElementById('logout-link');
    
    if (AppState.currentUser) {
        userNameEl.textContent = AppState.currentUser.name;
        loginLink.classList.add('hidden');
        profileLink.classList.remove('hidden');
        ordersLink.classList.remove('hidden');
        logoutLink.classList.remove('hidden');
        
        if (AppState.currentUser.role === 'admin') {
            adminLink.classList.remove('hidden');
        } else {
            adminLink.classList.add('hidden');
        }
    } else {
        userNameEl.textContent = 'Account';
        loginLink.classList.remove('hidden');
        profileLink.classList.add('hidden');
        ordersLink.classList.add('hidden');
        adminLink.classList.add('hidden');
        logoutLink.classList.add('hidden');
    }
}

// Page Loading Functions
function loadHomepage() {
    // Load categories
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = AppState.categories.map(category => `
            <a href="#" class="category-card" onclick="navigateTo('products', {category: '${category.id}'})">
                <div class="category-icon">
                    <i class="${category.icon}"></i>
                </div>
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </a>
        `).join('');
    }
    
    // Load featured products
    const featuredProducts = AppState.products.filter(p => p.isFeatured);
    const featuredGrid = document.getElementById('featured-products');
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredProducts.map(product => renderProductCard(product)).join('');
    }
}

function loadProductsPage() {
    // Update breadcrumb
    const breadcrumbItems = [{ name: 'Home', link: 'homepage' }];
    if (AppState.currentCategory) {
        const category = AppState.categories.find(c => c.id === AppState.currentCategory);
        breadcrumbItems.push({ name: category.name, link: '' });
    }
    updateBreadcrumb(breadcrumbItems);
    
    // Load filters
    loadFilters();
    
    // Load products
    const filteredProducts = getFilteredProducts();
    const startIndex = (AppState.currentPageNum - 1) * AppState.productsPerPage;
    const endIndex = startIndex + AppState.productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Update results count
    document.getElementById('results-count').textContent = `${filteredProducts.length} products`;
    
    // Render products
    const productsGrid = document.getElementById('products-grid');
    if (paginatedProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
    } else {
        productsGrid.innerHTML = paginatedProducts.map(product => renderProductCard(product)).join('');
    }
    
    // Load pagination
    loadPagination(filteredProducts.length);
    
    // Update active category in navigation
    document.querySelectorAll('.category-list a').forEach(link => {
        link.classList.remove('active');
    });
    if (AppState.currentCategory) {
        const activeLink = document.querySelector(`[data-category="${AppState.currentCategory}"]`);
        if (activeLink) activeLink.classList.add('active');
    }
}

function loadFilters() {
    // Price filters
    const priceFilters = document.getElementById('price-filters');
    if (priceFilters) {
        priceFilters.innerHTML = mockData.priceRanges.map(range => `
            <label>
                <input type="radio" name="price" value="${range.min}-${range.max}">
                ${range.label}
            </label>
        `).join('');
    }
    
    // Brand filters
    const brandFilters = document.getElementById('brand-filters');
    if (brandFilters) {
        const availableBrands = [...new Set(AppState.products.map(p => p.brand))];
        brandFilters.innerHTML = availableBrands.map(brand => `
            <label>
                <input type="checkbox" value="${brand}">
                ${brand}
            </label>
        `).join('');
    }
}

function loadPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / AppState.productsPerPage);
    const pagination = document.getElementById('pagination');
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <button onclick="changePage(${AppState.currentPageNum - 1})" ${AppState.currentPageNum === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= AppState.currentPageNum - 2 && i <= AppState.currentPageNum + 2)) {
            paginationHTML += `
                <button onclick="changePage(${i})" ${i === AppState.currentPageNum ? 'class="active"' : ''}>
                    ${i}
                </button>
            `;
        } else if (i === AppState.currentPageNum - 3 || i === AppState.currentPageNum + 3) {
            paginationHTML += '<span>...</span>';
        }
    }
    
    // Next button
    paginationHTML += `
        <button onclick="changePage(${AppState.currentPageNum + 1})" ${AppState.currentPageNum === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    const filteredProducts = getFilteredProducts();
    const totalPages = Math.ceil(filteredProducts.length / AppState.productsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    AppState.currentPageNum = page;
    loadProductsPage();
}

function loadProductDetails() {
    const product = AppState.products.find(p => p.id === AppState.currentProduct);
    if (!product) return;
    
    const productDetails = document.getElementById('product-details');
    const isInWishlist = AppState.wishlist.some(item => item.id === product.id);
    const cartItem = AppState.cart.find(item => item.productId === product.id);
    const currentQuantity = cartItem ? cartItem.quantity : 1;
    
    productDetails.innerHTML = `
        <div class="product-images">
            <img src="${product.images[0]}" alt="${product.name}" class="main-image">
        </div>
        <div class="product-details-info">
            <div class="product-brand">${product.brand}</div>
            <h1>${product.name}</h1>
            <div class="product-rating">
                <div class="rating-stars">${generateStars(product.rating)}</div>
                <span class="rating-count">(${product.reviewCount} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
                <span class="discount">${product.discount}% off</span>
            </div>
            <div class="quantity-selector">
                <label>Quantity:</label>
                <div class="quantity-controls">
                    <button onclick="changeQuantity(-1)">−</button>
                    <span class="quantity-display" id="product-quantity">${currentQuantity}</span>
                    <button onclick="changeQuantity(1)">+</button>
                </div>
                <span class="stock-info">(${product.stock} available)</span>
            </div>
            <div class="product-actions-detail">
                <button class="btn btn--primary" onclick="addToCartFromDetails()" id="add-to-cart-detail">
                    Add to Cart
                </button>
                <button class="btn btn--outline" onclick="buyNow()">
                    Buy Now
                </button>
                <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-description">
            <h3>Description</h3>
            <p>${product.description}</p>
        </div>
    `;
}

let productDetailQuantity = 1;

function changeQuantity(delta) {
    const product = AppState.products.find(p => p.id === AppState.currentProduct);
    const newQuantity = productDetailQuantity + delta;
    
    if (newQuantity < 1 || newQuantity > product.stock) return;
    
    productDetailQuantity = newQuantity;
    document.getElementById('product-quantity').textContent = productDetailQuantity;
}

function addToCartFromDetails() {
    addToCart(AppState.currentProduct, productDetailQuantity);
    productDetailQuantity = 1;
    document.getElementById('product-quantity').textContent = productDetailQuantity;
}

function buyNow() {
    addToCart(AppState.currentProduct, productDetailQuantity);
    navigateTo('cart');
}

function loadCartPage() {
    const cartItems = document.getElementById('cart-items');
    const summary = calculateCartSummary();
    
    if (AppState.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started.</p>
                <button class="btn btn--primary" onclick="navigateTo('homepage')">Start Shopping</button>
            </div>
        `;
    } else {
        cartItems.innerHTML = AppState.cart.map(item => {
            const product = AppState.products.find(p => p.id === item.productId);
            return `
                <div class="cart-item">
                    <img src="${product.images[0]}" alt="${product.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <h3>${product.name}</h3>
                        <div class="product-brand">${product.brand}</div>
                        <div class="product-price">
                            <span class="current-price">₹${product.price.toLocaleString()}</span>
                        </div>
                        <div class="cart-item-controls">
                            <div class="quantity-controls">
                                <button onclick="updateCartItemQuantity(${product.id}, ${item.quantity - 1})">−</button>
                                <span class="quantity-display">${item.quantity}</span>
                                <button onclick="updateCartItemQuantity(${product.id}, ${item.quantity + 1})">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-btn" onclick="removeFromCart(${product.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <div class="item-total">₹${(product.price * item.quantity).toLocaleString()}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Update summary
    document.getElementById('cart-item-count').textContent = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('subtotal').textContent = summary.subtotal.toLocaleString();
    document.getElementById('discount-amount').textContent = summary.totalDiscount.toLocaleString();
    document.getElementById('delivery-charges').textContent = summary.deliveryCharges === 0 ? 'FREE' : `₹${summary.deliveryCharges}`;
    document.getElementById('total-amount').textContent = summary.total.toLocaleString();
}

function loadCheckoutPage() {
    const summary = calculateCartSummary();
    
    // Update checkout items
    const checkoutItems = document.getElementById('checkout-items');
    checkoutItems.innerHTML = AppState.cart.map(item => {
        const product = AppState.products.find(p => p.id === item.productId);
        return `
            <div class="checkout-item" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px;">
                <img src="${product.images[0]}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                <div style="flex: 1;">
                    <div style="font-weight: 500; margin-bottom: 4px;">${product.name}</div>
                    <div style="color: var(--color-text-secondary); font-size: 14px;">Qty: ${item.quantity} × ₹${product.price.toLocaleString()}</div>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('checkout-total').textContent = summary.total.toLocaleString();
    
    // Reset to first step
    showCheckoutStep(1);
}

function showCheckoutStep(step) {
    // Update step indicators
    document.querySelectorAll('.step').forEach((el, index) => {
        el.classList.toggle('active', index + 1 === step);
    });
    
    // Show/hide step content
    document.querySelectorAll('.checkout-step').forEach((el, index) => {
        el.classList.toggle('hidden', index + 1 !== step);
    });
}

function placeOrder() {
    if (!AppState.currentUser) {
        showToast('Please login to place order', 'error');
        return;
    }
    
    const order = {
        id: Date.now(),
        userId: AppState.currentUser.id,
        items: [...AppState.cart],
        total: calculateCartSummary().total,
        status: 'pending',
        createdAt: Date.now(),
        address: {
            name: document.getElementById('address-name').value,
            phone: document.getElementById('address-phone').value,
            line1: document.getElementById('address-line1').value,
            line2: document.getElementById('address-line2').value,
            city: document.getElementById('address-city').value,
            pincode: document.getElementById('address-pincode').value
        },
        paymentMethod: document.querySelector('input[name="payment"]:checked').value
    };
    
    AppState.orders.push(order);
    saveToLocalStorage('orders', AppState.orders);
    
    // Clear cart
    AppState.cart = [];
    saveToLocalStorage('cart', AppState.cart);
    updateCartCount();
    
    showToast('Order placed successfully!');
    navigateTo('account');
}

function loadAccountPage() {
    const accountUserName = document.getElementById('account-user-name');
    accountUserName.textContent = AppState.currentUser.name;
    
    // Load profile data
    document.getElementById('profile-name').value = AppState.currentUser.name;
    document.getElementById('profile-email').value = AppState.currentUser.email;
    document.getElementById('profile-phone').value = AppState.currentUser.phone || '';
    
    // Load orders
    loadUserOrders();
    
    // Load wishlist
    loadUserWishlist();
}

function loadUserOrders() {
    const ordersList = document.getElementById('orders-list');
    const userOrders = AppState.orders.filter(order => order.userId === AppState.currentUser.id);
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box"></i>
                <h3>No orders yet</h3>
                <p>Start shopping to see your orders here.</p>
            </div>
        `;
    } else {
        ordersList.innerHTML = userOrders.map(order => `
            <div class="order-item">
                <div class="order-header">
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-status ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
                </div>
                <div class="order-details">
                    <div>Items: ${order.items.length}</div>
                    <div>Total: ₹${order.total.toLocaleString()}</div>
                    <div>Date: ${new Date(order.createdAt).toLocaleDateString()}</div>
                </div>
            </div>
        `).join('');
    }
}

function loadUserWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    
    if (AppState.wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>Your wishlist is empty</h3>
                <p>Add products to your wishlist to see them here.</p>
            </div>
        `;
    } else {
        wishlistItems.innerHTML = AppState.wishlist.map(product => renderProductCard(product)).join('');
    }
}

function switchAccountTab(tabName) {
    // Update nav
    document.querySelectorAll('.account-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabName);
    });
    
    // Show/hide tabs
    document.querySelectorAll('.account-tab').forEach(tab => {
        tab.classList.toggle('hidden', tab.id !== `${tabName}-tab`);
    });
}

function loadAdminPage() {
    loadAdminStats();
    loadAdminProducts();
    loadAdminOrders();
    loadAdminUsers();
    loadAdminAnalytics();
}

function loadAdminStats() {
    document.getElementById('total-products').textContent = AppState.products.length;
    document.getElementById('total-orders').textContent = AppState.orders.length;
    document.getElementById('total-users').textContent = 100; // Mock data
    document.getElementById('total-revenue').textContent = `₹${AppState.orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}`;
}

function loadAdminProducts() {
    const adminProductsList = document.getElementById('admin-products-list');
    adminProductsList.innerHTML = AppState.products.map(product => `
        <div class="admin-product-item" style="display: flex; align-items: center; padding: 16px; border: 1px solid var(--color-border); margin-bottom: 8px; border-radius: 8px;">
            <img src="${product.images[0]}" alt="${product.name}" style="width: 60px; height: 60px; object-fit: cover; margin-right: 16px;">
            <div style="flex: 1;">
                <h4>${product.name}</h4>
                <p>Price: ₹${product.price.toLocaleString()} | Stock: ${product.stock}</p>
            </div>
            <div>
                <button class="btn btn--outline btn--sm" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn--outline btn--sm" onclick="deleteProduct(${product.id})" style="margin-left: 8px;">Delete</button>
            </div>
        </div>
    `).join('');
}

function loadAdminOrders() {
    const adminOrdersList = document.getElementById('admin-orders-list');
    adminOrdersList.innerHTML = AppState.orders.map(order => `
        <div class="admin-order-item" style="padding: 16px; border: 1px solid var(--color-border); margin-bottom: 8px; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4>Order #${order.id}</h4>
                    <p>Customer ID: ${order.userId} | Total: ₹${order.total.toLocaleString()}</p>
                    <p>Date: ${new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <div>
                    <select onchange="updateOrderStatus(${order.id}, this.value)" class="form-control">
                        <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                        <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                        <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </div>
            </div>
        </div>
    `).join('');
}

function loadAdminUsers() {
    const adminUsersList = document.getElementById('admin-users-list');
    adminUsersList.innerHTML = `
        <div class="admin-users-table">
            <div class="user-item" style="padding: 16px; border: 1px solid var(--color-border); margin-bottom: 8px; border-radius: 8px;">
                <h4>John Doe</h4>
                <p>Email: john@example.com | Role: Customer</p>
                <p>Joined: January 2024</p>
            </div>
            <div class="user-item" style="padding: 16px; border: 1px solid var(--color-border); margin-bottom: 8px; border-radius: 8px;">
                <h4>Admin User</h4>
                <p>Email: admin@example.com | Role: Admin</p>
                <p>Joined: December 2023</p>
            </div>
        </div>
    `;
}

function loadAdminAnalytics() {
    // Simple chart using Chart.js
    const ctx = document.getElementById('sales-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Sales (₹)',
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '₹' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

function updateOrderStatus(orderId, newStatus) {
    const order = AppState.orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveToLocalStorage('orders', AppState.orders);
        showToast('Order status updated');
    }
}

function switchAdminTab(tabName) {
    // Update nav
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.classList.toggle('active', link.dataset.tab === tabName);
    });
    
    // Show/hide tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.toggle('hidden', tab.id !== `${tabName === 'products' ? 'admin-products' : tabName}-tab`);
    });
}

// Search Functions
function performSearch(query) {
    AppState.searchQuery = query;
    AppState.currentCategory = null;
    AppState.currentPageNum = 1;
    navigateTo('products');
}

function updateSearchSuggestions(query) {
    const suggestions = document.getElementById('search-suggestions');
    
    if (!query.trim()) {
        suggestions.classList.add('hidden');
        return;
    }
    
    const matchedProducts = AppState.products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    if (matchedProducts.length > 0) {
        suggestions.innerHTML = matchedProducts.map(product => `
            <div class="search-suggestion" onclick="navigateTo('product-details', {product: ${product.id}})">
                ${product.name} - ${product.brand}
            </div>
        `).join('');
        suggestions.classList.remove('hidden');
    } else {
        suggestions.classList.add('hidden');
    }
}

// Theme Functions
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-color-scheme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-color-scheme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Event Listeners
function initEventListeners() {
    // Logo click to go home
    document.querySelector('.logo').addEventListener('click', () => {
        navigateTo('homepage');
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // User menu toggle
    document.getElementById('user-menu-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('user-dropdown');
        dropdown.classList.toggle('hidden');
    });
    
    // Close user dropdown when clicking outside
    document.addEventListener('click', () => {
        document.getElementById('user-dropdown').classList.add('hidden');
    });
    
    // Navigation links
    document.getElementById('login-link').addEventListener('click', showLoginModal);
    document.getElementById('profile-link').addEventListener('click', () => navigateTo('account'));
    document.getElementById('orders-link').addEventListener('click', () => navigateTo('account'));
    document.getElementById('admin-link').addEventListener('click', () => navigateTo('admin'));
    document.getElementById('logout-link').addEventListener('click', logout);
    document.getElementById('cart-btn').addEventListener('click', () => navigateTo('cart'));
    document.getElementById('wishlist-btn').addEventListener('click', () => navigateTo('account'));
    
    // Search
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (e) => {
        updateSearchSuggestions(e.target.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(e.target.value);
            document.getElementById('search-suggestions').classList.add('hidden');
        }
    });
    
    document.querySelector('.search-btn').addEventListener('click', () => {
        performSearch(searchInput.value);
        document.getElementById('search-suggestions').classList.add('hidden');
    });
    
    // Hide search suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            document.getElementById('search-suggestions').classList.add('hidden');
        }
    });
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', hideModals);
    });
    
    // Modal backgrounds
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModals();
        });
    });
    
    // Auth forms
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        login(email, password);
    });
    
    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        register(name, email, password);
    });
    
    document.getElementById('show-register').addEventListener('click', showRegisterModal);
    document.getElementById('show-login').addEventListener('click', () => {
        document.getElementById('register-modal').classList.add('hidden');
        document.getElementById('login-modal').classList.remove('hidden');
    });
    
    // Filters
    document.getElementById('clear-filters').addEventListener('click', () => {
        AppState.filters = { priceRange: null, brand: [], rating: null };
        document.querySelectorAll('.filter-options input').forEach(input => input.checked = false);
        loadProductsPage();
    });
    
    // Sort
    document.getElementById('sort-select').addEventListener('change', (e) => {
        AppState.sortBy = e.target.value;
        AppState.currentPageNum = 1;
        loadProductsPage();
    });
    
    // Checkout button - Fix the critical bug
    document.getElementById('checkout-btn').addEventListener('click', () => {
        navigateTo('checkout');
    });
    
    // Checkout steps
    document.getElementById('continue-to-payment').addEventListener('click', () => {
        showCheckoutStep(2);
    });
    
    document.getElementById('continue-to-review').addEventListener('click', () => {
        showCheckoutStep(3);
    });
    
    document.getElementById('place-order').addEventListener('click', placeOrder);
    
    // Account tabs
    document.querySelectorAll('.account-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchAccountTab(link.dataset.tab);
        });
    });
    
    // Admin tabs
    document.querySelectorAll('.admin-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchAdminTab(link.dataset.tab);
        });
    });
    
    // Apply coupon
    document.getElementById('apply-coupon').addEventListener('click', () => {
        const couponCode = document.getElementById('coupon-input').value.trim().toUpperCase();
        const coupon = mockData.coupons.find(c => c.code === couponCode);
        
        if (coupon) {
            const summary = calculateCartSummary();
            if (summary.subtotal >= coupon.minAmount) {
                showToast('Coupon applied successfully!');
                loadCartPage(); // Refresh cart to show discount
            } else {
                showToast(`Minimum order amount ₹${coupon.minAmount} required`, 'error');
            }
        } else {
            showToast('Invalid coupon code', 'error');
        }
    });
}

// Filter event listeners
function initFilterListeners() {
    // Price filters
    document.addEventListener('change', (e) => {
        if (e.target.name === 'price') {
            const [min, max] = e.target.value.split('-').map(Number);
            AppState.filters.priceRange = { min, max };
            AppState.currentPageNum = 1;
            loadProductsPage();
        }
    });
    
    // Brand filters
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.closest('#brand-filters')) {
            if (e.target.checked) {
                AppState.filters.brand.push(e.target.value);
            } else {
                AppState.filters.brand = AppState.filters.brand.filter(b => b !== e.target.value);
            }
            AppState.currentPageNum = 1;
            loadProductsPage();
        }
    });
    
    // Rating filters
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.closest('#rating-filters')) {
            if (e.target.checked) {
                AppState.filters.rating = parseInt(e.target.value);
                // Uncheck other rating filters
                document.querySelectorAll('#rating-filters input').forEach(input => {
                    if (input !== e.target) input.checked = false;
                });
            } else {
                AppState.filters.rating = null;
            }
            AppState.currentPageNum = 1;
            loadProductsPage();
        }
    });
}

// Initialize App
function initApp() {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-color-scheme', savedTheme);
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    // Initialize data
    AppState.categories = mockData.categories;
    AppState.products = generateProducts();
    
    // Update UI
    updateCartCount();
    updateWishlistCount();
    updateUserUI();
    
    // Load category navigation
    const categoryNav = document.getElementById('category-nav');
    categoryNav.innerHTML = AppState.categories.map(category => 
        `<a href="#" data-category="${category.id}" onclick="navigateTo('products', {category: '${category.id}'})">${category.name}</a>`
    ).join('');
    
    // Initialize event listeners
    initEventListeners();
    initFilterListeners();
    
    // Load initial page
    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
        if (hash === 'products-page') loadProductsPage();
        else if (hash === 'homepage') loadHomepage();
    } else {
        showPage('homepage');
        loadHomepage();
    }
    
    console.log('ShopEasy app initialized successfully!');
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);