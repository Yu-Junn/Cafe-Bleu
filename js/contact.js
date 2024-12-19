// Form Validation with Alerts
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all the fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById("contactForm").reset(); // Clears the form
        document.getElementById("charCounter").textContent = "0 / 500 characters";
    }
});

// Function to Validate Email Format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    return re.test(email);
}

// Character Counter for Message Field
const messageInput = document.getElementById("message");
const charCounter = document.getElementById("charCounter");

messageInput.addEventListener("input", function() {
    const currentLength = messageInput.value.length;
    charCounter.textContent = `${currentLength} / 500 characters`;

    if (currentLength > 500) {
        charCounter.style.color = "red";
    } else {
        charCounter.style.color = "#555";
    }
});

// Fetch FAQs from a local JSON file
fetch('js/faqs.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Could not fetch FAQs.");
        }
        return response.json();
    })
    .then(data => {
        const faqContainer = document.getElementById("faqContainer");
        data.forEach(faq => {
            const questionElement = document.createElement("h4");
            questionElement.textContent = faq.question;

            const answerElement = document.createElement("p");
            answerElement.textContent = faq.answer;

            faqContainer.appendChild(questionElement);
            faqContainer.appendChild(answerElement);
        });
    })
    .catch(error => console.error("Error fetching FAQs:", error));
