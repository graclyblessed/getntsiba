
<section class="hero">
<div class="container">
<h1>Data-Driven Insights & Strategic Market Analysis.</h1>
<p>I help businesses navigate complex markets through rigorous research, competitive intelligence, and actionable business planning.</p>
</div>
</section>

<section id="work" class="portfolio-section">
<div class="container">
<p class="section-title">Selected Case Studies</p>

<div class="portfolio-grid">
{% for item in site.portfolio %}
<a href="{{ item.url | relative_url }}" class="card">
<div class="card-image">
<img src="{{ item.thumbnail | relative_url }}" alt="{{ item.title }}">
</div>
<div class="card-content">
<span class="card-tag">{{ item.category }}</span>
<h2 class="card-title">{{ item.title }}</h2>
<p class="card-desc">{{ item.excerpt }}</p>
</div>
</a>
{% endfor %}
</div>
</div></section>
