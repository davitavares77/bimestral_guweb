// script.js
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Captura os dados do formulário
    const productName = document.getElementById("productName").value;
    const productDesc = document.getElementById("productDesc").value;
    const productPrice = document.getElementById("productPrice").value;
    const productImage = document.getElementById("productImage").value;
  
    // Cria um novo item do cardápio
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
  
    // Adiciona o item ao cardápio
    document.getElementById("menu").appendChild(menuItem);
  
    // Limpa o formulário
    document.getElementById("productForm").reset();
  });
  
