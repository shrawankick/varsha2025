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
            };

            // Format start and end dates for Google Calendar with timezone conversion
            const formatGoogleCalendarDate = (date) => {
                return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'; // UTC format for time zone support
            };

            const startDateFormatted = formatGoogleCalendarDate(eventDetails.startDate);
            const endDateFormatted = formatGoogleCalendarDate(eventDetails.endDate);

            // Construct Google Calendar event URL
            const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
                eventDetails.title
            )}&dates=${startDateFormatted}/${endDateFormatted}&details=${encodeURIComponent(
                eventDetails.description
            )}&location=${encodeURIComponent(eventDetails.location)}`;

            // Open the calendar URL in a new tab
            window.open(calendarUrl, '_blank');
        });
    } else {
        console.error('Save the Date button not found!');
    }
});
