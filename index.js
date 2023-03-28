window.onload = submitForm;

var formHandle = document.forms.form;
var form__field = formHandle.form__field;
var form__field_error = document.getElementById("form__field_error");

var form__pattern = formHandle.form__pattern;
var form__pattern_error = document.getElementById("form__pattern_error");

var form__testtype = formHandle.form__testtype;
var form__testtype_error = document.getElementById("form__testtype_error");

var form__testcase = formHandle.form__testcase;
var form__testcase_error = document.getElementById("form__testcase_error");

var form__spec = formHandle.form__spec;
var form__spec_error = document.getElementById("form__spec_error");

var LetterRange = /^[A-Za-z]+$/;
var LetterAndNum = /^[A-Za-z0-9]+$/;
var RegxForRegx = /^[a-zA-Z0-9!@#$%^&*()_+\-={}[\]\\|:;"'<>,.?\/]+$/;


function submitForm() {
  formHandle.onsubmit = function (event) {
    event.preventDefault();
    specInfo();

  };

  //Accessing elements by name through the form.




  function specInfo() {
    // Reset error message to empty string
    form__field_error.innerHTML = "";
    form__pattern_error.innerHTML = "";
    form__testtype_error.innerHTML = "";
    form__testcase_error.innerHTML = "";
    form__spec_error.innerHTML = "";

    //first field validation
    if (!LetterRange.test(form__field.value)) {
      form__field_error.style.background = "red";
      form__field_error.style.color = "white";
      form__field_error.innerHTML = "*Please enter your field name in letters only!";
      form__field.focus();
      return false;
    }

    if (!RegxForRegx.test(form__pattern.value)) {
      form__pattern_error.style.background = "red";
      form__pattern_error.style.color = "white";
      form__pattern_error.innerHTML = "*Please enter RegEX(Example: /^[A-Za-z]+$/) pattern only!";
      form__pattern.focus();
      return false;
    }

    if (form__testtype.value === '--Choose--') {
      form__testtype_error.style.background = "red";
      form__testtype_error.style.color = "white";
      form__testtype_error.innerHTML = "*Please select type of test you are intrested!";
      form__testtype.focus();
      return false;
    }
    if (isNaN(form__testcase.value) || form__testcase.value < 1 || form__testcase.value > 10) {
      form__testcase_error.style.background = "red";
      form__testcase_error.style.color = "white";
      form__testcase_error.innerHTML = "*Please enter a valid number of test cases between 1 and 10!";
      form__testcase.focus();
      return false;
    }
    if (isNaN(form__spec.value) || form__spec.value < 1 || form__spec.value > 10) {
      form__spec_error.style.background = "red";
      form__spec_error.style.color = "white";
      form__spec_error.innerHTML = "*Please enter a valid number of specs between 1 and 10!";
      form__spec.focus();
      return false;
    }

    console.log("Field:", form__field.value);
    console.log("Regex Pattern:", form__pattern.value);
    console.log("Test Case Type:", form__testtype.value);
    console.log("Number of Test Cases:", form__testcase.value);
    console.log("Number of Specs:", form__spec.value);

    return true;

  }

}
