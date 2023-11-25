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

//==============form subscription========

refs.formSubscription.addEventListener('submit', onFormSubscriptSubmit);

const postRequest = new RequestToTheServer();
postRequest.endPoint = 'subscription';

const user = {};

function onFormSubscriptSubmit(e) {
  e.preventDefault();
  user.email = e.currentTarget.elements.email.value;
  console.log(user.email);

  addUserForSubscription();
}

async function addUserForSubscription() {
  axios.defaults.baseURL = postRequest.baseUrl;
  const config = {
    method: 'post',
    url: postRequest.endPoint,
    message: user.email,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//==============open and close modal policy and terms========

refs.openModalPolicy.addEventListener('click', () => {
  onPolicyClick();
  refs.closeModalPolicyBtn.addEventListener('click', onPolicyClick);
});

refs.openModalTerms.addEventListener('click', () => {
  onTermsClick();
  refs.closeModalTermsBtn.addEventListener('click', onTermsClick);
});

function onPolicyClick() {
  refs.policyLink.classList.toggle('is-hidden-policy');
}
function onTermsClick() {
  refs.termsLink.classList.toggle('is-hidden-policy');
}
document.body.classList.add('.no-scroll');
document.body.classList.remove('.no-scroll');
