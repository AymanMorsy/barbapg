import './style.scss';
import barba from '@barba/core';
import gsap from "gsap"

barba.init({
  transitions: [
    {
      name: 'default-transition',
      leave: ({ current }) => {
        return gsap.to(current.container, { opacity: 0 });
      },
      enter({next}) {
         gsap.from(next.container, { opacity: 0 });
        // create your amazing enter animation here
      },
    },
  ],
});
