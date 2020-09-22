function set(event) {
  let changes = document.getElementsByName("cssprops");
  let mod = document.getElementById("modify");
  for (let i = 0; i < changes.length; i++) {
    let cssProperty = changes[i].getAttribute("id");
    let cssValue = changes[i].value;
    mod.style[cssProperty] = cssValue;
  }
}
document.getElementById("set").addEventListener("click", set);
