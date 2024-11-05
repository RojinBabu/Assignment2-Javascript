// Select the elements
const featuredImage = document.getElementById("featured-image");
const imageCaption = document.getElementById("image-caption");
const thumbnailList = document.getElementById("thumbnail-list");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

// Update the featured image and caption
function updateFeaturedImage(src, caption) {
	featuredImage.style.opacity = 0; // Start fade-out
	setTimeout(() => {
		featuredImage.src = src;
		imageCaption.textContent = caption;
		featuredImage.style.opacity = 1; // Fade-in
	}, 250); // Delay to allow fade-out effect
}

// Function to open the lightbox
function openLightbox(src) {
	lightboxImage.src = src;
	lightbox.classList.add("visible");
}

// Function to close the lightbox
closeLightbox.addEventListener("click", () => {
	lightbox.classList.remove("visible");
});

// Handle thumbnail clicks
thumbnailList.addEventListener("click", (event) => {
	if (event.target.tagName === "IMG") {
		const fullImageSrc = event.target.getAttribute("data-full-image");
		const caption = event.target.alt;

		updateFeaturedImage(fullImageSrc, caption);

		// Update the active thumbnail's appearance
		document.querySelectorAll("#thumbnail-list img").forEach(img => img.classList.remove("active"));
		event.target.classList.add("active");
	}
});

// Lightbox functionality for the featured image
featuredImage.addEventListener("click", () => {
	openLightbox(featuredImage.src);
});
