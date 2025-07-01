document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('tracking-ids-container');
    const addBtn = document.getElementById('add-tracking-id');
    let count = 1;

    addBtn.addEventListener('click', function () {
        if (count >= 4) {
            alert("You can only enter up to 4 Tracking IDs.");
            return;
        }

        count++;
        const wrapper = document.createElement('div');
        wrapper.className = 'tracking-id-wrapper';

        const label = document.createElement('label');
        label.setAttribute('for', `tracking-id-${count}`);
        label.textContent = ``;

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `tracking-id-${count}`;
        input.name = 'tracking-ids[]';
        input.placeholder = 'Enter Tracking ID';
        input.required = true;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = '✕';
        removeBtn.title = 'Remove';
        removeBtn.style.marginLeft = '8px';
        removeBtn.onclick = function () {
            container.removeChild(wrapper);
            count--;
        };

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        wrapper.appendChild(removeBtn);
        container.appendChild(wrapper);
    });

    document.getElementById("tracking-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = container.querySelectorAll('input[name="tracking-ids[]"]');
        let urlsToOpen = [];

        inputs.forEach(input => {
            const trackingId = input.value.trim();
            if (trackingId !== "") {
                switch (trackingId) {
                    case "10086000000001":
                        urlsToOpen.push("On_Route.html");
                        break;
                    case "10086000000002":
                        urlsToOpen.push("LIT.html");
                        break;
                    case "10086000000003":
                        urlsToOpen.push("damaged.html");
                        break;
                    case "10086000000004":
                        urlsToOpen.push("cuttoff.html");
                        break;
                    default:
                        urlsToOpen.push("Invalid.html");
                        break;
                }
            }
        });

        if (urlsToOpen.length === 0) {
            alert("Please enter at least one valid Tracking ID.");
            return;
        }

        // Open all valid URLs in new tabs (synchronously)
        urlsToOpen.forEach(url => {
            window.open(url, '_blank');
        });
    });
});
