import { gallery, services, site, trustPoints } from '../content/site'

export function HomePage() {
  const asset = (url: string) => url

  return (
    <main>
      <section className="hero" id="top">
        <img className="hero-image" src={asset(site.heroUrl)} alt="Интерьер салона Элит" />
        <div className="hero-shade" />
        <div className="hero-content">
          <header className="site-header">
            <a className="brand" href="#top" aria-label="Элит, на главную"><img src={asset(site.logoUrl)} alt="Элит" /></a>
            <nav aria-label="Основная навигация">
              <a href="#services">Услуги</a><a href="#reviews">Отзывы</a><a href="#contacts">Контакты</a>
            </nav>
            <a className="header-phone" href={site.contact.phoneHref}>{site.contact.phone}</a>
          </header>
          <div className="hero-copy">
            <p className="eyebrow">Салон красоты · Перово</p>
            <h1>{site.tagline}</h1>
            <p className="lede">{site.description}</p>
            <div className="hero-actions"><a className="button button-yellow" href={site.whatsappUrl} target="_blank" rel="noreferrer">Записаться в WhatsApp <span>→</span></a><a className="text-link" href="#services">Смотреть услуги <span>↓</span></a></div>
          </div>
          <div className="hero-footer"><span>ELIT / 01</span><span>Уход за собой<br />рядом с домом</span></div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="intro-stamp">EL<br /><span>IT</span></div>
        <div><p className="eyebrow">О салоне</p><h2>Красота без лишнего пафоса.</h2><p className="intro-copy">Здесь можно обновить образ, привести в порядок руки или просто выделить время для себя. В одной точке работают парикмахерская, ногтевая студия и барбершоп.</p></div>
        <div className="trust-grid">{trustPoints.map((point) => <div key={point.value}><strong>{point.value}</strong><span>{point.label}</span></div>)}</div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="eyebrow">01 / услуги</p><p>Выберите направление,<br />с которого начнём</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.index}><span className="service-index">{service.index}</span><h3>{service.title}</h3><p>{service.summary}</p><strong className="service-price">{service.price}</strong></article>)}</div>
      </section>

      <section className="review-band" id="reviews">
        <div className="review-mark">5,0</div><div><p className="eyebrow">02 / клиенты говорят</p><blockquote>«Очень уютный салон, приветливые сотрудники и внимательные мастера. Результат каждый раз радует»</blockquote><p className="review-source">Рейтинг сформирован на основе 489 оценок</p></div><a className="outline-button" href={site.mapsUrl} target="_blank" rel="noreferrer">Все отзывы <span>→</span></a>
      </section>

      <section className="gallery section" id="photos">
        <div className="section-heading"><p className="eyebrow">03 / пространство</p><p>Тёплая атмосфера<br />и спокойный ритм</p></div>
        <div className="gallery-grid">{gallery.map((image, index) => <img className={`gallery-image gallery-image-${index + 1}`} key={image.src} src={asset(image.src)} alt={image.alt} />)}</div>
      </section>

      <section className="contact" id="contacts">
        <div className="contact-inner"><div><p className="eyebrow">04 / контакты</p><h2>До встречи<br />в «Элит»</h2><p>{site.contact.hours}</p></div><div className="contact-details"><p>{site.contact.address}</p><a href={site.contact.phoneHref}>{site.contact.phone}</a><a href={site.routeUrl} target="_blank" rel="noreferrer">Построить маршрут <span>→</span></a><div className="contact-actions"><a className="button button-yellow" href={site.whatsappUrl} target="_blank" rel="noreferrer">Написать в WhatsApp</a><a className="button button-ghost" href={site.telegramUrl} target="_blank" rel="noreferrer">Telegram</a></div></div></div>
      </section>
      <footer className="site-footer"><img src={asset(site.logoUrl)} alt="Элит" /><span>{site.contact.address}</span><span>© Элит</span></footer>
    </main>
  )
}
