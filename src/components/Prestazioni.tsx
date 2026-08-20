export default function Prestazioni() {
  return (
    <section id="prestazioni" className="services">
      <h2 className="section-title">Prestazioni</h2>
      <p className="prestazioni-intro">
        Un programma personalizzato di Ginnastica Posturale e Funzionale,
        direttamente a casa tua.
        <br />
        Senza spostamenti. Senza attrezzatura. Senza scuse.
      </p>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🧍</div>
          <h3>Ginnastica Posturale</h3>
          <p className="service-lead">
            La ginnastica posturale ti insegna ad abitare il tuo corpo nel modo
            giusto.
          </p>
          <p>
            Lavora sull&rsquo;allineamento del corpo, sciogliendo tensioni
            muscolari e abitudini scorrette per ritrovare un equilibrio naturale
            nella posizione statica e nel movimento quotidiano.
          </p>
          <span className="service-tag">A domicilio</span>
        </div>
        <div className="service-card">
          <div className="service-icon">🏋️</div>
          <h3>Ginnastica Funzionale</h3>
          <p className="service-lead">
            La ginnastica funzionale ti insegna a muoverti di pi&ugrave;, meglio
            e senza dolore.
          </p>
          <p>
            &Egrave; un tipo di allenamento che aiuta il corpo a compiere meglio
            i gesti della vita reale &mdash; alzarsi, portare pesi, salire le
            scale &mdash; migliorando forza, mobilit&agrave; e coordinazione in
            modo pratico e applicato.
          </p>
          <span className="service-tag">A domicilio</span>
        </div>
      </div>
    </section>
  );
}
