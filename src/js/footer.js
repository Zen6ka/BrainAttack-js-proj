import axios from 'axios';

import { RequestToTheServer } from './filters';

const refs = {
  // ---------------for form subscription--------------

  formSubscription: document.querySelector('.footer-form'),

  // ----------------for modal window_____________

  openModalPolicy: document.querySelector('.js-modal-policy-open'),
  openModalTerms: document.querySelector('.js-modal-terms-open'),
  closeModalPolicyBtn: document.querySelector('.js-policy-close'),
  closeModalTermsBtn: document.querySelector('.js-terms-close'),
  policyLink: document.querySelector('.js-policy'),
  termsLink: document.querySelector('.js-terms'),
};

//==============form subscription=========

refs.formSubscription.addEventListener('submit', onFormSubscriptSubmit);

const postRequest = new RequestToTheServer();
postRequest.endPoint = 'subscription';

function onFormSubscriptSubmit(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;

  addUserForSubscription(email);

  e.currentTarget.reset();
}

async function addUserForSubscription(email) {
  axios.defaults.baseURL = postRequest.baseUrl;
  const config = {
    method: 'post',
    url: postRequest.endPoint,
    headers: {
      'Content-Type': 'application/json',
    },
    data: { email: email },
  };
  try {
    const response = await axios.request(config);
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
}

//==============open and close modal policy and terms========

refs.openModalPolicy.addEventListener('click', () => {
  onPolicyClick(refs.policyLink);
  changeListenerPolicy();
  window.addEventListener('keydown', closeModalPolicyByEsc);
});

refs.openModalTerms.addEventListener('click', () => {
  onPolicyClick(refs.termsLink);
  changeListenerTerms();
  window.addEventListener('keydown', closeModalPolicyByEsc);
});

function onPolicyClick(link) {
  link.classList.remove('is-hidden-policy');
  document.body.classList.add('.no-scroll');
}

function changeListenerPolicy() {
  refs.closeModalPolicyBtn.addEventListener('click', onClosePolicyBtn);
}

function onClosePolicyBtn() {
  refs.policyLink.classList.add('is-hidden-policy');
  document.body.classList.remove('.no-scroll');
  removeListenerPolicy();
}

function removeListenerPolicy() {
  refs.closeModalPolicyBtn.removeEventListener('click', onClosePolicyBtn);
  window.removeEventListener('keydown', closeModalPolicyByEsc);
}

function changeListenerTerms() {
  refs.closeModalTermsBtn.addEventListener('click', onCloseTermsBtn);
}

function onCloseTermsBtn() {
  refs.termsLink.classList.add('is-hidden-policy');
  document.body.classList.remove('.no-scroll');
  removeListenerTerms();
}
function removeListenerTerms() {
  refs.closeModalTermsBtn.removeEventListener('click', onCloseTermsBtn);
  window.removeEventListener('keydown', closeModalPolicyByEsc);
}

function closeModalPolicyByEsc({ code }) {
  if (code === 'Escape') {
    onClosePolicyBtn();
    onCloseTermsBtn();
  }
}
