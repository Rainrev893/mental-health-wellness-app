<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="quote">
        "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity."
      </p>
      <p class="contact">
        Need support? Call the Crisis Helpline: <strong>988</strong> (US) | Text "HELLO" to <strong>741741</strong>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(to right, #f3e8ff, #dbeafe);
  padding: 2rem 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.quote {
  color: #7c3aed;
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.contact {
  color: #6b7280;
  font-size: 0.9rem;
}

.contact strong {
  color: #7c3aed;
}

@media (max-width: 768px) {
  .quote {
    font-size: 1rem;
  }

  .contact {
    font-size: 0.85rem;
  }
}
</style>
