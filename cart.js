// 购物车管理系统
class ShoppingCart {
    constructor() {
        this.storageKey = 'neighborpark_cart';
        this.init();
    }

    init() {
        // 监听storage变化
        window.addEventListener('storage', () => {
            this.updateCartCount();
        });
    }

    // 获取购物车数据
    getCart() {
        try {
            const cartData = localStorage.getItem(this.storageKey);
            return cartData ? JSON.parse(cartData) : [];
        } catch (e) {
            console.error('Get cart error:', e);
            return [];
        }
    }

    // 保存购物车数据
    saveCart(cart) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(cart));
            this.updateCartCount();
            return true;
        } catch (e) {
            console.error('Save cart error:', e);
            alert('购物车保存失败');
            return false;
        }
    }

    // 添加到购物车
    addToCart(productId, name, price, imageUrl = '') {
        const cart = this.getCart();
        
        // 检查是否已存在
        const existingItem = cart.find(item => item.productId === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                productId,
                name,
                price: parseFloat(price),
                imageUrl,
                quantity: 1,
                addedAt: new Date().toISOString()
            });
        }

        if (this.saveCart(cart)) {
            this.showNotification('已加入购物车！');
        }
    }

    // 更新商品数量
    updateQuantity(productId, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.productId === productId);
        
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart(cart);
            }
        }
    }

    // 从购物车移除
    removeFromCart(productId) {
        let cart = this.getCart();
        cart = cart.filter(item => item.productId !== productId);
        this.saveCart(cart);
    }

    // 清空购物车
    clearCart() {
        this.saveCart([]);
    }

    // 获取购物车总数
    getCartCount() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    // 获取购物车总价
    getCartTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // 更新购物车数量显示
    updateCartCount() {
        const countElement = document.getElementById('cart-count');
        if (countElement) {
            const count = this.getCartCount();
            countElement.textContent = count;
            countElement.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    // 显示通知
    showNotification(message) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #000;
            color: #fff;
            padding: 15px 25px;
            border-radius: 4px;
            font-size: 14px;
            z-index: 9999;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        
        // 添加动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(400px); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        // 3秒后移除
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// 创建全局购物车实例
const cart = new ShoppingCart();
