// Hi there, this is simple, achieve the goal and you are closer to be iTexican.
// Step 1: Fork this Fiddle
// Step 2: Add the necessary JS code to fill HTML form with the data in the below JSON.
// Step 3: Save your results and share it back

// Success criteria:
// 1. The most dynamic script, the most points you get.
// 2. Extra points for creativity
// 3. Score may be affected by the used logic, so be extra careful

const keys = Object.keys(data);
const values = Object.values(data);
const tbody = document.querySelector("body table > tbody");

for (let index = 0; index < tbody.children.length; index++) {
  let tr = tbody.children.item(index);

  let label = tr.querySelector("td#input_" + (index + 1) + "_label");
  if (label) label.innerText = keys[index];
  let input = tr.querySelector("input#input_" + (index + 1));
  if (input) {
    input.value = values[index];
    input.readOnly = true;
  }

  let i = document.createElement("i");
  i.className = "fas fa-edit";
  i.onclick = () => {
    if (i.className === "fas fa-save") {
      data[keys[index]] = input.value;
    }
    input.readOnly = !input.readOnly;
    i.className = input.readOnly ? "fas fa-edit" : "fas fa-save";
  };
  tr.insertBefore(i, tr.firstChild);
}
