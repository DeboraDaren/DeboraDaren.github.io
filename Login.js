const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
    label.innerHTML = label.innerText
    .split("")
    .map(
        (latter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${latter}</span>`
    )
    .join("");
});

function changeTheme() {
    var checkbox = document.getElementById('tema');

    if (checkbox.checked) {
        var element = document.body;
        element.className = "dark";
    }
    else {
        var element = document.body;
        element.className = "light";
    }
}
