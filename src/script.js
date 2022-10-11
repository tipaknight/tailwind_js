const button = document.querySelector('#button-1');

const block_1 = document.querySelector('#block-1');

button.addEventListener('click', function () {

  // block_1.classList.toggle('hidden');
  // if (block_1.classList.contains('hidden')) {
  //   button.textContent = 'Открыть блок';
  // } else {
  //   button.textContent = 'Закрыть блок';
  // }

  if (block_1.classList.toggle('hidden')) {
    button.textContent = 'Открыть блок';
  } else {
    button.textContent = 'Закрыть блок';
  }
});

//Accordion
const titleAcc = document.querySelectorAll('dt');

titleAcc.forEach(function (itemAcc) {
  // Вариант-1
  // itemAcc.addEventListener('click', function () {
  //   this.nextElementSibling.classList.toggle('hidden');
  // });

  // Вар-2
  itemAcc.addEventListener('click', showContent);

});
// Вар-2
function showContent() {
  this.nextElementSibling.classList.toggle('hidden');
}

// Табы
const tabHeaders = document.querySelectorAll('[data-tab]');

const contentTabs = document.querySelectorAll('[data-tab-cont');

tabHeaders.forEach(function (itemTab) {
  itemTab.addEventListener('click', showTabs);
});

function showTabs() {
  contentTabs.forEach(function (item) {
    item.classList.add('hidden');
  });
  const contentTab = document.querySelector('#' + this.dataset.tab);
  contentTab.classList.remove('hidden');
}

//Modal
const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClose = document.querySelectorAll('[data-modal-closed]');

modalButtons.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalId = this.dataset.modalButton;
    const modal = document.querySelector('#' + modalId);
    modal.classList.remove('hidden');
  });
});

modalClose.forEach(function (item) {
  item.addEventListener('click', function () {
    const modalCl = this.closest('[data-modal]');
    modalCl.classList.add('hidden');
  });

});

//Mask-telephone-form
window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('.mask-tel'), function (input) {
    let keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = '+7 (___) ___ ____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, ''),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf('_');
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      let reg = matrix
        .substring(0, this.value.length)
        .replace(/_+/g, function (a) {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58))
        this.value = new_value;
      if (event.type == 'blur' && this.value.length < 5) this.value = '';
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});