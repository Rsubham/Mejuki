const leftArrow = document.querySelector(".arrownav .fa-circle-chevron-left");
const rightArrow = document.querySelector(".arrownav .fa-circle-chevron-right");
const cardsContainer = document.querySelector(".explore-products-cards");
const card = document.querySelector(".explore-products-card");

function getCardScrollWidth() {
  return card
    ? card.offsetWidth + parseInt(getComputedStyle(card).marginRight)
    : 0;
}

function updateArrowState() {
  const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;

  if (cardsContainer.scrollLeft <= 0) {
    leftArrow.classList.add("disabled");
  } else {
    leftArrow.classList.remove("disabled");
  }

  if (cardsContainer.scrollLeft >= maxScroll - 1) {
    rightArrow.classList.add("disabled");
  } else {
    rightArrow.classList.remove("disabled");
  }
}

leftArrow.addEventListener("click", () => {
  if (!leftArrow.classList.contains("disabled")) {
    cardsContainer.scrollBy({
      left: -getCardScrollWidth(),
      behavior: "smooth",
    });
  }
});

rightArrow.addEventListener("click", () => {
  if (!rightArrow.classList.contains("disabled")) {
    cardsContainer.scrollBy({ left: getCardScrollWidth(), behavior: "smooth" });
  }
});

cardsContainer.addEventListener("scroll", updateArrowState);
window.addEventListener("load", updateArrowState);
window.addEventListener("resize", updateArrowState);

// testimonial

    const testiLeftArrow = document.querySelector('.testimonia-arrownav .fa-circle-chevron-left');
    const testiRightArrow = document.querySelector('.testimonia-arrownav .fa-circle-chevron-right');
    const testiCardsContainer = document.querySelector('.testimonial-cards');
    const testiCard = document.querySelector('.testimonial-card');

    function getTestimonialCardWidth() {
        return testiCard ? testiCard.offsetWidth + parseInt(getComputedStyle(testiCard).marginRight) : 0;
    }

    function updateTestimonialArrowState() {
        const maxScroll = testiCardsContainer.scrollWidth - testiCardsContainer.clientWidth;

        if (testiCardsContainer.scrollLeft <= 0) {
            testiLeftArrow.classList.add('testi-disabled');
        } else {
            testiLeftArrow.classList.remove('testi-disabled');
        }

        if (testiCardsContainer.scrollLeft >= maxScroll - 1) {
            testiRightArrow.classList.add('testi-disabled');
        } else {
            testiRightArrow.classList.remove('testi-disabled');
        }
    }

    testiLeftArrow.addEventListener('click', () => {
        if (!testiLeftArrow.classList.contains('testi-disabled')) {
            testiCardsContainer.scrollBy({ left: -getTestimonialCardWidth(), behavior: 'smooth' });
        }
    });

    testiRightArrow.addEventListener('click', () => {
        if (!testiRightArrow.classList.contains('testi-disabled')) {
            testiCardsContainer.scrollBy({ left: getTestimonialCardWidth(), behavior: 'smooth' });
        }
    });

    testiCardsContainer.addEventListener('scroll', updateTestimonialArrowState);
    window.addEventListener('load', updateTestimonialArrowState);
    window.addEventListener('resize', updateTestimonialArrowState);