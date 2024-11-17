document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
  

    const productName = document.getElementById("productName").value;
    const productDesc = document.getElementById("productDesc").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImage = document.getElementById("productImage").value;
  
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    menuItem.innerHTML = `
      <img src="${productImage}" alt="${productName}">
      <div>
        <h3>${productName}</h3>
        <p>${productDesc}</p>
        <p><strong>Preço:</strong> R$ ${productPrice}</p>
      </div>
    `;
  
    document.getElementById("menu").appendChild(menuItem);
    document.getElementById("productForm").reset();
  });
  
