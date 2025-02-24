function updateCountdown() {
    const targetDate = new Date('2025-05-23T09:00:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = 'Event Started';
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = `
        ${days} <span class="text-yellow-200">d <span class="font-extralight">/</span> </span>
        ${hours} <span class="text-yellow-200">h <span class="font-extralight">/</span> </span>
        ${minutes} <span class="text-yellow-200">m </span>
    `;
}

updateCountdown();
