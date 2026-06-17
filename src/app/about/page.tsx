import styles from "@/app/about/about.module.scss";

export default function About() {
  return (
    <main className={styles.about}>
      {/* ── Page Header ── */}
      <div className={styles.about__header}>
        <p className={styles.about__eyebrow}>The Photographer</p>
        <h1 className={styles.about__title}>Justin Hebenstreit</h1>
      </div>

      {/* ── Two Column Layout ── */}
      <div className={styles.about__layout}>
        {/* ── Bio Column ── */}
        <div className={styles.about__bio}>
          <p className={styles.bio__lead}>
            I studied photography at Webster University, graduating in December
            2012, and have been chasing light — through viewfinders, darkrooms,
            and editing suites — ever since.
          </p>

          <p className={styles.bio__body}>
            My work spans landscapes, studio portraits, product photography,
            architecture, and analog film. There's something about the
            discipline of shooting on 35mm that sharpens how you see — every
            frame costs something, so you learn to slow down and get it right in
            camera. I've been scanning and editing my own film negatives using
            an Epson V300 Perfection scanner, working through both black and
            white and color scans in Adobe Photoshop.
          </p>

          <p className={styles.bio__body}>
            On the digital side I shoot with Canon DSLR equipment — a 50D and
            30D — and use Adobe Lightroom for processing and batch work. I've
            been active in the St. Louis photography community, attending studio
            events and collaborative shoots with other photographers and models
            over the years.
          </p>

          <p className={styles.bio__body}>
            Automotive photography is where I'm headed next. Cars have always
            been a passion, and the discipline of finding the right angle on a
            machine — dealing with reflections, ambient light, and motion — is a
            challenge I'm drawn to. That work lives over at{" "}
            <a
              href="https://steelandshutter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bio__externalLink}
            >
              Steel &amp; Shutter
            </a>
            .
          </p>

          <p className={styles.bio__body}>
            Eventually I want to add videography to this portfolio as well. The
            plan is to keep my Canon EF lenses and move to a body that can do
            both — but that's a future chapter. For now, every frame here is
            still photography, shot with intention.
          </p>
        </div>

        {/* ── Sidebar ── */}
        <aside className={styles.about__sidebar}>
          <div className={styles.sidebar__card}>
            <h3 className={styles.sidebar__heading}>Equipment</h3>
            <ul className={styles.sidebar__list}>
              <li>Canon EOS 50D</li>
              <li>Canon EOS 30D</li>
              <li>Canon EF Lens Collection</li>
              <li>Epson V300 Perfection Scanner</li>
              <li>Adobe Lightroom</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>

          <div className={styles.sidebar__card}>
            <h3 className={styles.sidebar__heading}>Education</h3>
            <ul className={styles.sidebar__list}>
              <li>Webster University — Photography</li>
              <li>B.A. December 2012</li>
            </ul>
          </div>

          <div className={styles.sidebar__card}>
            <h3 className={styles.sidebar__heading}>Specialties</h3>
            <ul className={styles.sidebar__list}>
              <li>Landscapes &amp; Outdoors</li>
              <li>Studio Portraiture</li>
              <li>Product Photography</li>
              <li>Architecture</li>
              <li>35mm Film &amp; Darkroom</li>
              <li>Automotive (Steel &amp; Shutter)</li>
            </ul>
          </div>

          <div className={styles.sidebar__card}>
            <h3 className={styles.sidebar__heading}>Other Work</h3>
            <ul className={styles.sidebar__list}>
              <li>
                <a
                  href="https://steelandshutter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.sidebar__link}
                >
                  Steel &amp; Shutter →
                </a>
              </li>
              <li>
                <a href="#" className={styles.sidebar__link}>
                  IT Dev Portfolio →
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}