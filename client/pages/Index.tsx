import {
  ArrowRight,
  BadgeCheck,
  Bell,
  ChevronDown,
  CircleHelp,
  Headphones,
  Heart,
  House,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Truck,
  UserRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const categories = [
  ["Mode", "👜"], ["Électronique", "💻"], ["Téléphones", "📱"], ["Maison & Déco", "🛋️"],
  ["Santé", "🧴"], ["Supermarché", "🛒"], ["Services", "⚙️"], ["Immobilier", "🏠"], ["Auto & Moto", "🛞"],
];

const products = [
  { name: "Baskets Premium AXE229", price: "25 000 FCFA", old: "35 000 FCFA", discount: "-20%", art: "👟", tone: "rose" },
  { name: "Laptop HP 15s", price: "285 000 FCFA", old: "350 000 FCFA", discount: "-18%", art: "💻", tone: "blue" },
  { name: "iPhone 14 Pro Max", price: "685 000 FCFA", old: "790 000 FCFA", discount: "-13%", art: "📱", tone: "purple" },
  { name: "Parfum Noir Intense", price: "15 000 FCFA", old: "20 000 FCFA", discount: "-25%", art: "🧴", tone: "amber" },
  { name: "Air Fryer 5L", price: "45 000 FCFA", old: "55 000 FCFA", discount: "-18%", art: "♨️", tone: "slate" },
];

const offers = [
  ["Samsung Galaxy A54", "165 000 FCFA", "📱", "-10%"], ["Écouteurs Bluetooth", "15 000 FCFA", "🎧", "-40%"],
  ["Smart Watch Series", "55 000 FCFA", "⌚", "-24%"], ["Camera HD 1080p", "28 000 FCFA", "📷", "-29%"],
  ["Sac à main mode", "28 000 FCFA", "👜", "-20%"],
];

function Logo() {
  return <div className="brand"><span className="brand-mark">X</span><span>AXE<span className="brand-number">229</span><small>VOTRE MARCHÉ PREMIUM AFRICAIN</small></span></div>;
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <main>
      <header className="site-header">
        <div className="topbar shell">
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">{menuOpen ? <X /> : <Menu />}</button>
          <Logo />
          <div className="search-area">
            <button className="category-select">Toutes les catégories <ChevronDown size={13} /></button>
            <div className="search-field"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un produit, une boutique..." /><button aria-label="Rechercher"><Search size={18} /></button></div>
          </div>
          <div className="location"><span>🇧🇯</span><div>Livraison au<br /><b>Bénin</b></div><ChevronDown size={13} /></div>
          <button className="seller">Devenir vendeur</button>
          <div className="header-actions">
            <button><Heart /><small>Favoris</small></button><button className="has-badge"><ShoppingCart /><i>2</i><small>Panier</small></button><button className="has-badge"><Bell /><i>3</i><small>Notifications</small></button><button><UserRound /><small>Adri</small></button>
          </div>
        </div>
        <nav className={`category-nav ${menuOpen ? "is-open" : ""}`}><div className="shell">{categories.map(([name, emoji]) => <button key={name}><span>{emoji}</span>{name}</button>)}<button><span>•••</span>Plus</button></div></nav>
      </header>

      <section className="hero">
        <div className="hero-dots" />
        <div className="shell hero-content">
          <div className="hero-copy"><h1>Tout le Bénin,<br /><em>en un seul marché.</em></h1><p>Achats sécurisés, livraison rapide et<br />des opportunités infinies.</p><div className="hero-buttons"><button className="yellow-btn">Découvrir <ArrowRight size={17} /></button><button className="outline-btn">Comment ça marche ? <span>▶</span></button></div></div>
          <div className="hero-showcase" aria-label="Aperçu de l'application AXE229">
            <div className="floating-card headphones">🎧<span>Écouteurs Pro<br /><b>15 000 FCFA</b></span></div><div className="floating-card perfume">🧴<span>Parfum Intense<br /><b>15 000 FCFA</b></span></div>
            <div className="phone"><div className="phone-notch" /><div className="phone-head"><Logo /><div><Heart size={13}/><ShoppingCart size={13}/><Bell size={13}/></div></div><div className="phone-search"><Search size={10}/> Rechercher</div><div className="phone-banner"><b>Tout le Bénin,</b><br />en un seul marché.<button>Découvrir maintenant</button></div><div className="phone-icons"><span>◌<small>Catégories</small></span><span>▦<small>Offres</small></span><span>⌂<small>Boutiques</small></span><span>◉<small>Services</small></span></div><p className="phone-label">Offres flash <b>Voir tout →</b></p><div className="mini-products"><span>👟<small>Sneakers</small></span><span>🧴<small>Parfum</small></span><span>👜<small>Mode</small></span></div></div>
            <div className="floating-card shoes">👟<span>Sneakers Premium<br /><b>25 000 FCFA</b></span></div><div className="boxes"><i /><i /><i /></div>
          </div>
        </div>
        <div className="hero-bottom shell"><div><ShieldCheck />Paiement sécurisé</div><div><Truck />Livraison rapide</div><div><BadgeCheck />Vendeurs vérifiés</div><div><Headphones />Support 24/7</div></div>
      </section>

      <section className="shell category-strip">{categories.map(([name, emoji]) => <button key={name}><span>{emoji}</span>{name}</button>)}<button><span>⌘</span>Voir tout</button></section>

      <section className="shell assurances"><article className="secure"><ShieldCheck /><div><b>Paiement 100% sécurisé</b><p>Transactions protégées avec nos partenaires de confiance</p><div className="payment-methods">VISA <small>mastercard</small> <strong>MoMo</strong> <strong>Flooz</strong></div></div></article><article className="delivery"><div><b>Livraison rapide partout au Bénin</b><p>Recevez vos produits en 24h à 72h<br />partout au Bénin</p><button>En savoir plus</button></div><span>🛵</span></article><article className="verified"><div><b>Vendeurs vérifiés</b><p>Achetez en toute confiance auprès de vendeurs certifiés</p><div className="avatars">👤 👩 👨 <strong>+2K</strong></div></div><BadgeCheck /></article></section>

      <section className="shell section"><div className="section-head"><h2>Produits tendance</h2><button>Voir tout <ArrowRight size={15}/></button></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className={`product-image ${product.tone}`}><span className="discount">{product.discount}</span><button className="heart"><Heart size={16}/></button><div className="product-art">{product.art}</div></div><div className="product-info"><h3>{product.name}</h3><b>{product.price}</b> <del>{product.old}</del><p><span>●</span> Livraison gratuite</p></div><button className="cart"><ShoppingCart size={15}/></button></article>)}</div></section>

      <section className="shell section flash"><div className="section-head"><h2>Offres flash <span className="timer"><Zap size={14}/>12h : 45m : 30s</span></h2><button>Voir toutes les offres <ArrowRight size={15}/></button></div><div className="offer-row">{offers.map(([name, price, art, discount]) => <article key={name}><div>{art}</div><span><b>{name}</b><strong>{price}</strong></span><em>{discount}</em></article>)}</div></section>

      <section className="shell boutiques section"><div className="section-head"><h2>Boutiques officielles</h2><button>Voir toutes <ArrowRight size={15}/></button></div><div className="store-row">{[["S", "Samsung Store", "4.8K abonnés", "#2879dc"],["●", "Apple Store", "12K abonnés", "#f5f5f5"],["mi", "Xiaomi Store", "18K abonnés", "#ff721e"],["in", "Infinix Mobile", "16K abonnés", "#111"],["A", "AXE229 Official", "20K abonnés", "#005c3b"]].map(([letter, name, followers, color]) => <article key={name}><span style={{background: color}}>{letter}</span><div><b>{name} <BadgeCheck size={13}/></b><small>{followers}</small></div></article>)}</div></section>

      <section className="why-section"><div className="shell"><div className="why-top"><div><h2>Pourquoi choisir AXE229 ?</h2><p>Tout ce dont vous avez besoin,<br/>en toute confiance.</p><button>En savoir plus</button></div><div className="why-features"><span><ShieldCheck/>Protection acheteur<small>Remboursement garanti</small></span><span><WalletCards/>Paiements sécurisés<small>100% protégés</small></span><span><Truck/>Livraison rapide<small>Partout au Bénin</small></span><span><UserRound/>Vendeurs de confiance<small>Vérifiés et notés</small></span><span><CircleHelp/>Support 24/7<small>Pour vous aider</small></span><span><Store/>Soutien local<small>Pour le Bénin</small></span></div></div><div className="stats"><span><b>250,000+</b><small>Clients satisfaits</small></span><span><b>15,000+</b><small>Vendeurs vérifiés</small></span><span><b>98%</b><small>Livraisons à temps</small></span><span><b>4.9/5</b><small>Note moyenne</small></span></div></div></section>

      <section className="shell app-row"><article className="app-card"><div><h2>Téléchargez l'application AXE229</h2><p>Une expérience encore meilleure sur mobile.</p><div className="store-buttons"><button>▶ Google Play</button><button>● App Store</button></div></div><div className="app-phones">📱 📱</div><div className="qr">▦</div></article><article className="newsletter"><div><h2>Recevez nos meilleures offres</h2><p>Promotions, nouveautés et offres exclusives directement dans votre boîte mail.</p><div><input placeholder="Votre adresse email"/><button>S'abonner</button></div><small>Pas de spam, désabonnement en un clic.</small></div><span>📬</span></article></section>

      <footer><div className="shell footer-grid"><div><Logo /><p>Votre marché premium au Bénin.<br/>Achetez local, soutenez local.</p><div>f　◎　in　▶</div></div><div><b>Marché</b><small>Toutes les catégories</small><small>Offres du moment</small><small>Produits populaires</small><small>Nouveautés</small></div><div><b>Vendre</b><small>Devenir vendeur</small><small>Espace vendeur</small><small>Tarifs & commissions</small><small>Conseils de vente</small></div><div><b>Aide</b><small>Centre d'aide</small><small>Livraison & retours</small><small>Paiement sécurisé</small><small>Politique de confidentialité</small></div><div><b>Entreprise</b><small>À propos de nous</small><small>Carrières</small><small>Presse</small><small>Nous contacter</small></div></div><div className="shell copyright">© 2024 AXE229. Tous droits réservés. <span>🇫🇷 Français　•　🇧🇯 Bénin</span></div></footer>
    </main>
  );
}
