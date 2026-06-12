const WEB3FORMS_ACCESS_KEY = "5776d154-027a-4e0c-95df-a2b89c89264c";

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const year = document.querySelector("[data-year]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (year) {
  year.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : "Send Project Request";

    const data = new FormData(form);
    const name = data.get("name") || "";
    const business = data.get("business") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const packageSelection = data.get("package") || "";
    const message = data.get("message") || "";

    const mailtoSubject = `Website project request from ${business || name}`;
    const mailtoBody = [
      "New website project request",
      "",
      `Name: ${name}`,
      `Business Name: ${business}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Package Selection: ${packageSelection}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const triggerMailtoFallback = () => {
      const subject = encodeURIComponent(mailtoSubject);
      const body = encodeURIComponent(mailtoBody);
      window.location.href = `mailto:LittlefieldSolutions2026@outlook.com?subject=${subject}&body=${body}`;
      if (formStatus) {
        formStatus.textContent = "Your email app should open with your project details ready to send.";
        formStatus.className = "form-status";
      }
    };

    // If access key is empty or placeholder, fallback immediately
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      triggerMailtoFallback();
      return;
    }

    // Visual loading state
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }
    if (formStatus) {
      formStatus.textContent = "Sending your message...";
      formStatus.className = "form-status";
    }

    // Build the request object for Web3Forms
    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name,
      email: email,
      subject: mailtoSubject,
      from_name: "Littlefield Solutions Website",
      "Business Name": business,
      "Phone": phone,
      "Package Selection": packageSelection,
      message: message,
    };

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          if (formStatus) {
            formStatus.textContent = "Thank you! Your project request has been sent successfully.";
            formStatus.className = "form-status success";
          }
          form.reset();
        } else {
          console.log(response);
          if (formStatus) {
            formStatus.textContent = json.message || "Something went wrong. Opening your email app instead...";
            formStatus.className = "form-status error";
          }
          setTimeout(triggerMailtoFallback, 1500);
        }
      })
      .catch((error) => {
        console.error(error);
        if (formStatus) {
          formStatus.textContent = "Connection error. Opening your email app instead...";
          formStatus.className = "form-status error";
        }
        setTimeout(triggerMailtoFallback, 1500);
      })
      .finally(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      });
  });
}

