const actionButton = document.querySelector('.action-button');
const warningButton = document.querySelector('.action-button-warning');
const dangerButton = document.querySelector('.action-button-danger');
const successButton = document.querySelector('.action-button-success');

const modal = (body = {}) => {
	return `<div class="modal-container">
  <div tabindex="10" class="modal">
    <p class="modal-title ${body.state}">
      <i class="modal-title-icon" data-feather="${body.icon || 'info'}"></i>
      ${body.title}
    </p>
    <p class="modal-description">
    ${body.description}
    </p>
    <div class="modal-buttons">
      <button class="modal-accept modal-action-button">${body.acceptButton}</button>
      <button class="modal-decline modal-action-button">${body.declineButton}</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
  </div>
</div>`;
};

function createModal(value) {
	const modalContainer = document.createElement('div');
	modalContainer.className = 'modal-container';
	modalContainer.innerHTML = modal(value);
	document.body.appendChild(modalContainer);
	feather.replace();

	const closeIcon = document.querySelector('.modal-close-icon');
	closeIcon.addEventListener('click', () => {
		const modal = document.querySelector('.modal-container');
		modal.remove();
		document.body.style.overflow = 'auto';
	});
	const acceptModalButton = document.querySelectorAll('.modal-action-button');
	acceptModalButton.forEach(button =>
		button.addEventListener('click', () => {
			const modal = document.querySelector('.modal-container');
			modal.remove();
			document.body.style.overflow = 'auto';
		})
	);

	const modalActive = document.querySelector('.modal');
	modalActive.focus();
	modalActive.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			const modal = document.querySelector('.modal-container');
			modal.remove();
			document.body.style.overflow = 'auto';
		}
	});

	const modalActiveContainer = document.querySelector('.modal-container');
	modalActiveContainer.addEventListener('click', e => {
		if (e.target.classList.contains('modal-container')) {
			const modal = document.querySelector('.modal-container');
			modal.remove();
			document.body.style.overflow = 'auto';
		}
	});

	document.body.style.overflow = 'hidden';
}

actionButton.addEventListener('click', () => {
	createModal({
		title: 'Lorem ipsum dolor sit amet.',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur eum hic possimus dolore, ab ratione corporis iure reprehenderit nobis cum consequatur, deleniti blanditiis. Repellendus.',
		acceptButton: 'Accept',
		declineButton: 'Decline',
		state: 'info',
		icon: 'info',
	});
});

warningButton.addEventListener('click', () => {
	createModal({
		title: 'Lorem ipsum dolor sit amet.',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur eum hic possimus dolore, ab ratione corporis iure reprehenderit nobis cum consequatur, deleniti blanditiis. Repellendus.',
		acceptButton: 'Accept',
		declineButton: 'Decline',
		state: 'warning',
		icon: 'alert-triangle',
	});
});

dangerButton.addEventListener('click', () => {
	createModal({
		title: 'Lorem ipsum dolor sit amet.',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur eum hic possimus dolore, ab ratione corporis iure reprehenderit nobis cum consequatur, deleniti blanditiis. Repellendus.',
		acceptButton: 'Accept',
		declineButton: 'Decline',
		state: 'danger',
		icon: 'alert-octagon',
	});
});

successButton.addEventListener('click', () => {
	createModal({
		title: 'Lorem ipsum dolor sit amet.',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aspernatur eum hic possimus dolore, ab ratione corporis iure reprehenderit nobis cum consequatur, deleniti blanditiis. Repellendus.',
		acceptButton: 'Accept',
		declineButton: 'Decline',
		state: 'success',
		icon: 'check-circle',
	});
});
