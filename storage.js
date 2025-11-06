// 统一的存储管理系统 - 使用 localStorage
window.storage = {
    get: function(key) {
        return new Promise((resolve) => {
            try {
                const value = localStorage.getItem(key);
                resolve(value ? { value: value } : null);
            } catch (e) {
                resolve(null);
            }
        });
    },
    
    set: function(key, value) {
        return new Promise((resolve) => {
            try {
                localStorage.setItem(key, value);
                resolve(true);
            } catch (e) {
                resolve(false);
            }
        });
    },
    
    remove: function(key) {
        return new Promise((resolve) => {
            try {
                localStorage.removeItem(key);
                resolve(true);
            } catch (e) {
                resolve(false);
            }
        });
    }
};
