const container = document.getElementById('container');
let div;
for (let i = 0; i < 5; i++) {
    div = document.createElement("div");
    div.onclick = function() {
        alert("This box #" + i);
    };
    container.appendChild(div)
}

// Область видимости переменной i защищена оператором let
