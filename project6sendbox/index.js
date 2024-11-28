// GSAP animations
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("nav", { duration: 1, y: -50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from("section", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    this.reset(); // Reset form after submission
});
