import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledMainPage from './styles';

export default function MainPage() {
  const Anglais = '/img/Drapeaux/EN.png';
  const Francais = '/img/Drapeaux/FR.png';
  const Chinois = '/img/chinois.jpeg';
  const Espagnol = '/img/Drapeaux/ES.png';
  const Russe = '/img/Drapeaux/RU.png';
  const Bulgare = '/img/Drapeaux/BG.png';
  return (
    <StyledMainPage>
      <div className="LogoContainer">
        <p className="titlesiteweb">COURS DE LANGUES EN LIGNE</p>
        <p className="citation">“ Osez vous améliorer ! ”</p>
      </div>

      <div className="ValeurContainer">
        <div className="valeur">
          <p className="title">Titre 1</p>
          <p className="textValeur">
            Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            forsitan, si contigerit, quamobrem cum oratio ad ea monstranda
            deflexerit quae Romae gererentur, nihil praeter seditiones narratur
            et tabernas et vilitates harum similis alias, summatim causas
            perstringam nusquam a veritate sponte propria digressurus.
          </p>
        </div>
        <div className="valeur">
          <p className="title">Titre 2</p>
          <p className="textValeur">
            Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            forsitan, si contigerit, quamobrem cum oratio ad ea monstranda
            deflexerit quae Romae gererentur, nihil praeter seditiones narratur
            et tabernas et vilitates harum similis alias, summatim causas
            perstringam nusquam a veritate sponte propria digressurus.
          </p>
        </div>
        <div className="valeur">
          <p className="title">Titre 3</p>
          <p className="textValeur">
            Et quoniam mirari posse quosdam peregrinos existimo haec lecturos
            forsitan, si contigerit, quamobrem cum oratio ad ea monstranda
            deflexerit quae Romae gererentur, nihil praeter seditiones narratur
            et tabernas et vilitates harum similis alias, summatim causas
            perstringam nusquam a veritate sponte propria digressurus.
          </p>
        </div>
      </div>

      <div className="ContactSection">
        <div className="texts">
          <p className="accroche">Prêt à embarquer ?</p>
          <p className="accroche"> Osez vous améliorer avec nous !</p>
        </div>
        <div className="buttonSection">
          <button type="button" className="buttonContact">
            <NavLink to="/contact">Demande d&apos;informations</NavLink>
          </button>
        </div>
      </div>

      <div className="FormulesPresentation">
        <p className="titleFormule">NOS FORMULES</p>
        <p className="textFormule">
          Choisissez la langue que vous souhaitez apprendre
        </p>
      </div>

      <div className="BigContainer">
        <div className="Bloc">
          <div className="blocImage">
            <img src={Anglais} alt="english" />
          </div>
          <div className="blocText">
            <p className="langue">Anglais</p>
            <p className="text">
              La quasi-totalité des étudiants du monde entier sont forcés
              d’apprendre l’anglais à l’école. Toutefois l’anglais scolaire est
              souvent bien différent de l’anglais parlé par des locuteurs
              natifs. Ce n’est pas pour rien que la France est l’un des plus
              mauvais élèves en ce qui concerne l’anglais au sein de l’Union
              Européenne. Nos éducateurs sont là pour vous aider à vous
              améliorer.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
        <div className="Bloc">
          <div className="blocImage">
            <img src={Francais} alt="french" />
          </div>
          <div className="blocText">
            <p className="langue">Français</p>
            <p className="text">
              Quel que soit votre niveau de langue en français, nous sommes là
              pour vous aider à développer vos capacités et réaliser vos
              objectifs. Le français est parlé en France mais également au
              Canada, en Guyane Française, en Polynésie Française ainsi que dans
              de nombreux pays d’Afrique. Bien que moins populaire que
              l’anglais, le français reste une langue internationale qui peut
              vous offrir de très nombreuses opportunités.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
        <div className="Bloc">
          <div className="blocImage">
            <img src={Chinois} alt="chinese" />
          </div>
          <div className="blocText">
            <p className="langue">Chinois</p>
            <p className="text">
              Le chinois est une langue parlée par plus d’un milliard de
              personnes dans le monde. Tout comme l’anglais, il existe une
              grande variété d’accents et de dialectes chinois. Cependant, le
              mandarin est reconnu à l’internationale comme le chinois standard
              et ça tombe bien, parce que c’est exactement ce que nous
              enseignons.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
        <div className="Bloc">
          <div className="blocImage">
            <img src={Espagnol} alt="spanish" />
          </div>
          <div className="blocText">
            <p className="langue">Espagnol</p>
            <p className="text">
              Lorsque l’on évoque l’espagnol comme langue étrangère, on a
              tendance à penser à l’Espagne. Ce serait oublier les vingt autres
              pays dans lesquels l’espagnol est la langue officielle ! Que vous
              souhaitez voyager, vous expatrier en Argentine où décrocher de
              meilleures notes dans votre cursus scolaire, nos professeurs sont
              là pour vous aider à révéler vos réelles capacités.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
        <div className="Bloc">
          <div className="blocImage">
            <img src={Russe} alt="russian" />
          </div>
          <div className="blocText">
            <p className="langue">Japonais</p>
            <p className="text">
              Le japonais est une langue qui a gagné en popularité aux cours de
              ces dernières décennies. Ne vous laissez pas repousser par le
              petit nombre de personnes parlant japonais dans le monde, ou par
              la difficulté de la langue. Si votre but est de partir au Japon,
              il vous sera indispensable de parler japonais. Maîtriser le
              japonais est une expérience gratifiante qui vous permettra de
              découvrir une culture riche et fascinante avec aisance.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
        <div className="Bloc">
          <div className="blocImage">
            <img src={Bulgare} alt="bulgarian" />
          </div>
          <div className="blocText">
            <p className="langue">Bulgare</p>
            <p className="text">
              Haec igitur lex in amicitia sanciatur, ut neque rogemus res turpes
              nec faciamus rogati. Turpis enim excusatio est et minime
              accipienda cum in ceteris peccatis, tum si quis contra rem
              publicam se amici causa fecisse fateatur. Etenim eo loco, Fanni et
              Scaevola, locati sumus ut nos longe prospicere oporteat futuros
              casus rei publicae. Deflexit iam aliquantum de spatio curriculoque
              consuetudo maiorum.
            </p>
          </div>
          <div className="buttonSection">
            <button type="button">
              <NavLink to="/">En savoir plus </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="About">
        <p className="titleAbout">A PROPOS DE NOUS</p>
        <p className="accrocheAbout">
          Choisissez la langue que vous souhaitez apprendre
        </p>
        <div className="textSection">
          <p className="textAbout">
            Tempore quo primis auspiciis in mundanum fulgorem surgeret victura
            dum erunt homines Roma, ut augeretur sublimibus incrementis, foedere
            pacis aeternae Virtus convenit atque Fortuna plerumque dissidentes,
            quarum si altera defuisset, ad perfectam non venerat summitatem.
            Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
            atrox interceperat casus, et Serenianus dignus exsecratione
            cunctorum, innoxius, modo non reclamante publico vigore, discessit.
            Dein Syria per speciosam interpatet diffusa planitiem. hanc
            nobilitat Antiochia, mundo cognita civitas, cui non certaverit alia
            advecticiis ita adfluere copiis et internis, et Laodicia et Apamia
            itidemque Seleucia iam inde a primis auspiciis florentissimae.
          </p>
          <p className="textAbout">
            Saepissime igitur mihi de amicitia cogitanti maxime illud
            considerandum videri solet, utrum propter imbecillitatem atque
            inopiam desiderata sit amicitia, ut dandis recipiendisque meritis
            quod quisque minus per se ipse posset, id acciperet ab alio
            vicissimque redderet, an esset hoc quidem proprium amicitiae, sed
            antiquior et pulchrior et magis a natura ipsa profecta alia causa.
            Amor enim, ex quo amicitia nominata est, princeps est ad
            benevolentiam coniungendam. Nam utilitates quidem etiam ab iis
            percipiuntur saepe qui simulatione amicitiae coluntur et observantur
            temporis causa, in amicitia autem nihil fictum est, nihil simulatum
            et, quidquid est, id est verum et voluntarium.
          </p>
          <p className="textAbout">
            Quid? qui se etiam nunc subsidiis patrimonii aut amicorum
            liberalitate sustentant, hos perire patiemur? An, si qui frui
            publico non potuit per hostem, hic tegitur ipsa lege censoria; quem
            is frui non sinit, qui est, etiamsi non appellatur, hostis, huic
            ferri auxilium non oportet? Retinete igitur in provincia diutius
            eum, qui de sociis cum hostibus, de civibus cum sociis faciat
            pactiones, qui hoc etiam se pluris esse quam collegam putet, quod
            ille vos tristia voltuque deceperit, ipse numquam se minus quam
            erat, nequam esse simularit. Piso autem alio quodam modo gloriatur
            se brevi tempore perfecisse, ne Gabinius unus omnium nequissimus
            existimaretur.
          </p>
        </div>
      </div>
    </StyledMainPage>
  );
}
