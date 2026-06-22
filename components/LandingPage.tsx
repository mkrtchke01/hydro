import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { LeadForm } from "@/components/LeadForm";
import { MachineVisual } from "@/components/MachineVisual";
import { SiteHeader } from "@/components/SiteHeader";
import { common, pages, type PageKey } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

interface LandingPageProps {
  pageKey: PageKey;
}

export function LandingPage({ pageKey }: LandingPageProps) {
  const page = pages[pageKey];

  return (
    <>
      <SiteHeader
        companyName={siteConfig.companyName}
        phone={siteConfig.phone}
        phoneHref={siteConfig.phoneHref}
        navigation={common.nav}
      />
      <main>
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow">{page.hero.eyebrow}</p>
              <h1>{page.hero.title}</h1>
              <p className="hero__lead">{page.hero.lead}</p>
              <div className="hero__actions">
                <ButtonLink>{page.hero.primary}</ButtonLink>
                <ButtonLink href="#parameters" secondary>{page.hero.secondary}</ButtonLink>
              </div>
              <ul className="hero__tags">
                {page.hero.tags.map((tag) => <li key={tag}><Icon name="check" />{tag}</li>)}
              </ul>
            </div>
            <div className="hero-visual">
              <div className="hero-visual__top"><span>Схема решения</span><strong>{page.hero.visualTitle}</strong></div>
              <MachineVisual pageKey={pageKey} />
              <div className="hero-visual__metrics">
                {page.hero.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Ключевые преимущества">
          <div className="container proof-strip__grid">
            {page.proof.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{title}</h2><p>{text}</p></div></article>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Продукция</p><h2>{page.products.title}</h2></div>
              <p>{page.products.lead}</p>
            </div>
            <div className="product-grid">
              {page.products.items.map(([title, text, number]) => (
                <article className="product-card" key={title}>
                  <span className="product-card__number">{number}</span>
                  <div className="product-card__icon"><span /><i /></div>
                  <h3>{title}</h3><p>{text}</p>
                  <Link href="#contact">Обсудить задачу <Icon name="arrow" /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark" id="parameters">
          <div className="container parameter-layout">
            <div className="section-heading">
              <p className="eyebrow">{page.parameters.kicker}</p>
              <h2>{page.parameters.title}</h2>
              <p>{page.parameters.lead}</p>
              <ButtonLink>Получить консультацию</ButtonLink>
            </div>
            <div className="parameter-grid">
              {page.parameters.items.map(([title, text], index) => (
                <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="production">
          <div className="container production-layout">
            <div className="photo-placeholder">
              <span className="photo-placeholder__label">Фото заказчика</span>
              <strong>{common.production.imageLabel}</strong>
              <small>Не используйте стоковое изображение</small>
            </div>
            <div className="production-content">
              <p className="eyebrow">{common.production.kicker}</p>
              <h2>{common.production.title}</h2>
              <p>{common.production.text}</p>
              <ol>
                {common.production.steps.map((step) => <li key={step}><span><Icon name="check" /></span>{step}</li>)}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section--accent" id="solutions">
          <div className="container custom-layout">
            <div>
              <p className="eyebrow">{page.custom.kicker}</p>
              <h2>{page.custom.title}</h2>
              <p>{page.custom.text}</p>
              <ButtonLink>{page.custom.cta}</ButtonLink>
            </div>
            <ul>
              {page.custom.items.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Почему с нами удобно работать</p><h2>Инженерный подход без лишней неопределенности</h2></div>
              <p>Фиксируем исходные данные, состав решения и результат каждого этапа.</p>
            </div>
            <div className="advantage-grid">
              {page.advantages.map(([title, text], index) => (
                <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Этапы работы</p><h2>Понятный путь от задачи до оборудования</h2></div>
            <ol className="workflow">
              {page.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Кейсы</p><h2>Покажите решение через задачу и результат</h2></div>
              <p>Ниже подготовлены карточки-структуры. Перед публикацией замените их подтвержденными проектами и реальными фотографиями.</p>
            </div>
            <div className="case-grid">
              {(page.cases as [string, string, string[]][]).map(([title, text, tags], index) => (
                <article className="case-card" key={title}>
                  <div className="case-card__visual"><span>Кейс {String(index + 1).padStart(2, "0")}</span><small>Добавить фото проекта</small></div>
                  <div className="case-card__body"><h3>{title}</h3><p>{text}</p><ul>{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--dark">
          <div className="container documents-layout">
            <div className="section-heading"><p className="eyebrow">Комплектность</p><h2>Документы для эксплуатации и приемки</h2><p>Фактический комплект согласуется для конкретного изделия и проекта.</p></div>
            <div className="document-list">
              {common.documents.map(([title, text]) => <article key={title}><Icon name="file" /><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-layout">
            <div className="section-heading"><p className="eyebrow">FAQ</p><h2>Частые вопросы</h2><p>Не нашли нужного ответа? Отправьте параметры или описание задачи.</p><ButtonLink>Задать вопрос</ButtonLink></div>
            <div className="faq-list">
              {page.faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary><span>{question}</span><i /></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">Обсудить проект</p><h2>{page.contact.title}</h2><p>{page.contact.text}</p>
              <div className="contact-details">
                <Link href={siteConfig.phoneHref || "#contact"}><span>Телефон</span><strong>{siteConfig.phone}</strong></Link>
                <Link href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong></Link>
                <div><span>Производство</span><strong>{siteConfig.address}</strong></div>
              </div>
            </div>
            <LeadForm fileLabel={page.contact.file} />
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container site-footer__grid">
          <Link className="brand brand--footer" href="/"><span className="brand__mark">H</span><span><strong>{siteConfig.companyName}</strong><small>Инженерные гидросистемы</small></span></Link>
          <div><span>Направления</span><Link href="/test-stands">Испытательные стенды</Link><Link href="/hydraulic-stations">Гидростанции</Link><Link href="/hydraulic-cylinders">Гидроцилиндры</Link></div>
          <div><span>Контакты</span><Link href={siteConfig.phoneHref || "#contact"}>{siteConfig.phone}</Link><Link href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link></div>
          <p>© {new Date().getFullYear()} {siteConfig.companyName}<br />Информация на сайте не является публичной офертой.</p>
        </div>
      </footer>
    </>
  );
}
