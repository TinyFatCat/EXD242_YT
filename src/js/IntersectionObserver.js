const options = {
  root: null,
  rootMargin: '750px 0px 0px 0px',
  threshold: [0.45],
};

const callback = (triggers, observer) => {
  triggers.forEach((trigger) => {
    if (trigger.isIntersecting) {
      trigger.target.classList.add('triggered');
    } else {
      trigger.target.classList.remove('triggered');
    }
  });
};

const observer = new IntersectionObserver(callback, options);

const animTriggers = document.querySelectorAll('.animTrigger');
animTriggers.forEach((animTrigger) => {
  observer.observe(animTrigger);
});
