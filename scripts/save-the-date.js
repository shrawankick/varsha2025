document.addEventListener('DOMContentLoaded', function () {
    const saveTheDateButton = document.getElementById('save-the-date');

    if (saveTheDateButton) {
        saveTheDateButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const eventDetails = {
                title: 'Varun & Prathyusha Wedding',
                location: 'Cherukuri Function Hall',
                description: 'We Are Getting Married! Save the date for this special occasion.',
                startDate: new Date('2025-02-07T21:29:00+05:30'), // Use ISO format with IST offset
                endDate: new Date('2025-02-08T00:00:00+05:30') // Use ISO format with IST offset
                //startDate: '2025-02-07T21:29:00', // YYYY-MM-DDTHH:mm:ss format
                //endDate: '2025-02-08T00:00:00' // YYYY-MM-DDTHH:mm:ss format
            };

            // Construct a dynamic Google Calendar event URL
            const startDateFormatted = eventDetails.startDate.replace(/[-:]/g, '') + 'Z'; // UTC format
            const endDateFormatted = eventDetails.endDate.replace(/[-:]/g, '') + 'Z';
            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;

            // Open the calendar URL in a new tab (works on all devices)
            window.open(calendarUrl, '_blank');
        });
    } else {
        console.error('Save the Date button not found!');
    }
});



