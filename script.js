window.onload = () => {
	const faqList = document.querySelector('.faq-list');

	faqList.addEventListener('click', (e) => {
		let parentLi = e.target.parentNode.tagName === 'BUTTON' ? e.target.parentNode.parentNode : e.target.parentNode;

		if (parentLi.tagName === 'LI') {
			const faqAnswer = parentLi.querySelector('.faq-answer');
			const faqIcon = parentLi.querySelector('.faq-question-icon');
			const classList = Array.from(faqAnswer.classList);

			if ((classList.includes('closed'))) {
				faqAnswer.classList.remove('closed');
				faqAnswer.classList.add('open');
				faqIcon.classList.add('open');
			} else if ((classList.includes('open'))) {
				faqAnswer.classList.remove('open');
				faqAnswer.classList.add('closed');
				faqIcon.classList.remove('open');
			}
		}
	})
}