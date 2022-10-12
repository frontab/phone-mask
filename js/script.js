const phoneInputs = document.querySelectorAll('.field__input[type="tel"]');
phoneInputs.forEach(input => {
   new PhoneMask(input);
});
