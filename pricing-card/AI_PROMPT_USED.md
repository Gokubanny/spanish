Refactor and fix this broken pricing card snippet into a reusable component. Goals:

- Fix HTML/CSS bugs (typos like `box-shdow`, unclosed `<h2>`, better spacing, responsiveness).
- Make it responsive (grid for multiple cards, mobile-friendly, readable font sizing).
- Add an accessible, interactive button with a working click handler.
- Expose a small JS factory `createPricingCard({ title, price, features, ctaLabel, onClick })` to build cards dynamically.
- Keep styles self-contained with a clear class prefix `.pricing-card` and CSS custom properties for easy theming.
- Provide a demo that renders multiple cards and logs clicks.

Original broken snippet:

```
<!DOCTYPE html>
<html>
<head>
<style>
.pricing {
width: 300px;
margin: auto;
background-color: #fff;
box-shdow: 0 0 10px #ccc;
padding: 10px;
text-align: left;
}

.title {
font-size: 22px;
font-weight: bold;
}

.price {
font-size: 18px;
color: green;
}

.features {
list-style: none;
padding-left: 0;
}

.features li {
padding: 4px;
border-bottom: 1px solid #eee;
}

.btn {
background: blue;
color: white;
padding: 10px 20px;
border: none;
margin-top: 10px;
}

.btn:hover {
background: darkblue;
}
</style>
</head>
<body>

<div class="pricing">
<h2 class="title">Basic Plan<h2>
<p class="price">$9.99 /month</p>

<ul class="features">
<li>1 GB Storage</li>
<li>Basic Support</li>
<li>All Core Features</li>
</ul>

<button class="btn">Start Trial</button>
</div>

</body>
</html>
```