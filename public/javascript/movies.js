//prevent user from selecting more than 5 movies to nominate
window.onload = function () {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        let checkedCount = Array.from(checkboxes).filter((i) => i.checked).length;
        if (checkedCount > 5) {
          this.checked = false;
          alert("You can only select 5 movies.");
        }
      });
    });
  };