export const saveToLocalStorage = (newItem) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex(
        (item) =>
            item.id === newItem.id &&
            item.color === newItem.color &&
            item.size === newItem.size
    );

    if (existingIndex !== -1) {
        cart[existingIndex].count += newItem.count;
    } else {
        cart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCarts = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
};
