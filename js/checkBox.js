function checkSelectAll() {
  const checkboxes = document.querySelectorAll('input[name="agreement"]');
  const checked = document.querySelectorAll('input[name="agreement"]:checked');
  const selectAll = document.querySelector('input[name="selectall"]');

  if (checkboxes.length === checked.length) {
    selectAll.checked = true;
  } else {
    selectAll.checked = false;
  }
}

function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("agreement");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}
