import React, { useState, useEffect, useMemo } from 'react';
import './App.css';

const BASE_REGISTRY = [
  { id: 1, name: "Vortex Pro ANC Audio Matrix", category: "Electronics", price: 149.99, rating: 4.7, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", tags: ["audio", "anc"], stock: 6, reviews: [] },
  { id: 2, name: "Apex Chronograph Steel Horizon", category: "Accessories", price: 110.00, rating: 4.4, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", tags: ["premium", "wear"], stock: 8, reviews: [] },
  { id: 3, name: "Quantum V3 Mechanical Deck", category: "Electronics", price: 185.00, rating: 4.9, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500", tags: ["gaming", "linear"], stock: 3, reviews: [] },
  { id: 4, name: "Velocity Aero-Knit Run Pods", category: "Apparel", price: 125.00, rating: 4.2, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", tags: ["shoes", "knit"], stock: 1, reviews: [] },
  { id: 5, name: "Element Shield Thermal Flask", category: "Fitness", price: 39.99, rating: 4.6, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500", tags: ["eco", "insulated"], stock: 18, reviews: [] },
  { id: 6, name: "Vapor-Trail Smart Ecosystem Link", category: "Electronics", price: 95.00, rating: 4.5, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500", tags: ["wearables", "biometrics"], stock: 0, reviews: [] }
];

const CURRENCY_CONFIG = {
  USD: { symbol: '$', multiplier: 1.0 },
  EUR: { symbol: '€', multiplier: 0.89 },
  GBP: { symbol: '£', multiplier: 0.76 },
  INR: { symbol: '₹', multiplier: 83.3 }
};

export default function App() {
  // Safe Persistent Hydration Engine Initializations
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('vortex_v5_products')) || BASE_REGISTRY);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('vortex_v5_cart')) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('vortex_v5_wishlist')) || []);
  const [userPoints, setUserPoints] = useState(() => Number(localStorage.getItem('vortex_v5_user_points')) || 620);
  const [orders, setOrders] = useState(() => JSON.parse(localStorage.getItem('vortex_v5_orders')) || [
    { id: "VTX-9821", date: "2026-06-15", total: 149.99, status: "Shipped", units: 1, method: "Vault Token" },
    { id: "VTX-3419", date: "2026-06-20", total: 295.00, status: "Fulfillment Done", units: 2, method: "Credit Protocol" },
    { id: "VTX-1104", date: "2026-06-22", total: 39.99, status: "In Transit Node", units: 1, method: "Liquidity Pool" }
  ]);

  // View Matrix & Controls Routing Configuration
  const [currentView, setCurrentView] = useState('hub'); // hub, catalog, cart, wishlist, orders, telemetry
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortOption, setSortOption] = useState('default');
  const [currency, setCurrency] = useState('USD');
  const [darkMode, setDarkMode] = useState(true);
  const [toast, setToast] = useState('');

  // Voucher Matrix Framework State Modifiers
  const [appliedPromo, setAppliedPromo] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Dynamic Metrics Telemetry States (Feature)
  const [activeSessionTraffic, setActiveSessionTraffic] = useState({ visitors: 142, pageViews: 1044, uptime: "99.98%" });
  const [bulkQuantityInput, setBulkQuantityInput] = useState(1);
  const [jsonImportText, setJsonImportText] = useState('');

  // Operational Binding Form Targets
  const [adminProduct, setAdminProduct] = useState({ name: '', category: 'Electronics', price: '', stock: '', image: '' });

  // Floating AI Core Conversation Registers
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([{ sender: 'ai', text: "Operations Control Framework 5.0 initialized. Predictive tracking live." }]);

  // Local Storage Synchronization Subsystems
  useEffect(() => { localStorage.setItem('vortex_v5_products', JSON.stringify(products)); }, [products]);
  useEffect(() => { localStorage.setItem('vortex_v5_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('vortex_v5_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('vortex_v5_user_points', String(userPoints)); }, [userPoints]);
  useEffect(() => { localStorage.setItem('vortex_v5_orders', JSON.stringify(orders)); }, [orders]);
  useEffect(() => { document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light'); }, [darkMode]);

  // Live Traffic Simulation Framework Loop (Feature Component Trigger)
  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveSessionTraffic(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 5) - 2,
        pageViews: prev.pageViews + Math.floor(Math.random() * 4),
        uptime: "99.98%"
      }));
    }, 4000);
    return () => clearInterval(cycle);
  }, []);

  const triggerToast = (msg) => { setToast(msg); setTimeout(() => setToast(''), 3000); };
  
  const runPriceTransform = (usdAmount) => {
    const scope = CURRENCY_CONFIG[currency];
    return `${scope.symbol}${(usdAmount * scope.multiplier).toFixed(2)}`;
  };

  // Complex Operations Core Data Modeling
  const systemAnalytics = useMemo(() => {
    const grossRevenue = orders.reduce((acc, o) => acc + o.total, 0);
    const globalStockCount = products.reduce((acc, p) => acc + p.stock, 0);
    const lowStockSKUs = products.filter(p => p.stock > 0 && p.stock <= 3).length;
    const completelyDepleted = products.filter(p => p.stock === 0).length;
    
    // Feature: Linear Vector Predictive Forecasting Math Matrix ($y = mx + b$)
    const currentGrowthSlopeFactor = 1.18; 
    const modeledNextQuarterProjection = grossRevenue * currentGrowthSlopeFactor;

    return { grossRevenue, globalStockCount, lowStockSKUs, completelyDepleted, totalSKUs: products.length, modeledNextQuarterProjection };
  }, [orders, products]);

  const filteredCatalog = useMemo(() => {
    return products
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.includes(search.toLowerCase())))
      .filter(p => categoryFilter === 'All' ? true : p.category === categoryFilter)
      .sort((a, b) => {
        if (sortOption === 'low-high') return a.price - b.price;
        if (sortOption === 'high-low') return b.price - a.price;
        if (sortOption === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, search, categoryFilter, sortOption]);

  const cartCalculations = useMemo(() => {
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const markdown = subtotal * (discountPercent / 100);
    return { subtotal, total: Math.max(0, subtotal - markdown), tokens: Math.floor((subtotal - markdown) * 0.12) };
  }, [cart, discountPercent]);

  // Business Action Drivers Mutations
  const handleAddToCart = (target, qty = 1) => {
    const desiredAllocation = parseInt(qty) || 1;
    if (target.stock < desiredAllocation) return triggerToast("Upstream Allocation Error: Depot floor ceiling restriction triggered.");

    setCart(prev => {
      const match = prev.find(item => item.id === target.id);
      if (match) return prev.map(item => item.id === target.id ? { ...item, quantity: item.quantity + desiredAllocation } : item);
      return [...prev, { ...target, quantity: desiredAllocation }];
    });
    setProducts(prev => prev.map(p => p.id === target.id ? { ...p, stock: p.stock - desiredAllocation } : p));
    triggerToast(`Injected ${desiredAllocation} unit data blocks of ${target.name} into execution stack.`);
  };

  const handleOrderCheckoutCommit = (e) => {
    e.preventDefault();
    const runtimeOrderId = `VTX-${Math.floor(10000 + Math.random() * 90000)}`;
    const freshOrderNode = {
      id: runtimeOrderId,
      date: new Date().toISOString().split('T')[0],
      total: cartCalculations.total,
      status: "In Transit Node",
      units: cart.reduce((s, i) => s + i.quantity, 0),
      method: "Secure Gateway Authorization Vault"
    };
    setOrders(prev => [freshOrderNode, ...prev]);
    setUserPoints(prev => prev + cartCalculations.tokens);
    setCart([]);
    setDiscountPercent(0);
    triggerToast(`Financial Transaction ${runtimeOrderId} processed & compiled.`);
    setCurrentView('orders');
  };

  // Feature: Advanced JSON Array Multi-Node Bulk Batch Ingestion Script
  const handleBulkJsonIngestion = (e) => {
    e.preventDefault();
    try {
      const elementsParsed = JSON.parse(jsonImportText);
      if (!Array.isArray(elementsParsed)) throw new Error("Structural Frame Error: Input mapping data packet must be an array.");
      
      const sanitationMap = elementsParsed.map((item, index) => ({
        id: Date.now() + index,
        name: item.name || `Programmatic Node Element ref-${index}`,
        category: item.category || "Electronics",
        price: parseFloat(item.price) || 49.99,
        rating: 5.0,
        image: item.image || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500",
        tags: ["bulk-imported-node"],
        stock: parseInt(item.stock) || 15,
        reviews: []
      }));

      setProducts(prev => [...sanitationMap, ...prev]);
      setJsonImportText('');
      triggerToast(`Successfully ingested and configured ${sanitationMap.length} inventory asset nodes.`);
      setCurrentView('catalog');
    } catch (err) {
      alert(`Parsing Malfunction Error: ${err.message}`);
    }
  };

  return (
    <div className="app-frame">
      {toast && <div className="toast">{toast}</div>}

      {/* 1. Tactical Sidebar Action Dock Matrix */}
      <aside className="sidebar-dock">
        <div className="dock-brand">
          🌀 VORTEX <span>APEX v5.0</span>
        </div>
        <nav className="dock-menu">
          <button className={`dock-btn ${currentView === 'hub' ? 'active' : ''}`} onClick={() => { setCurrentView('hub'); setSelectedProduct(null); }}>
            📊 <span>Command Center Hub</span>
          </button>
          <button className={`dock-btn ${currentView === 'catalog' ? 'active' : ''}`} onClick={() => { setCurrentView('catalog'); setSelectedProduct(null); }}>
            📦 <span>E-Store Catalog</span>
          </button>
          <button className={`dock-btn ${currentView === 'cart' ? 'active' : ''}`} onClick={() => setCurrentView('cart')}>
            🛒 <span>Active Cart Stack</span>
            <span className="dock-badge">{cart.reduce((a, b) => a + b.quantity, 0)}</span>
          </button>
          <button className={`dock-btn ${currentView === 'wishlist' ? 'active' : ''}`} onClick={() => setCurrentView('wishlist')}>
            💖 <span>Saved Wishlist Cache</span>
            <span className="dock-badge">{wishlist.length}</span>
          </button>
          <button className={`dock-btn ${currentView === 'orders' ? 'active' : ''}`} onClick={() => setCurrentView('orders')}>
            📑 <span>Logistics Ledger</span>
            <span className="dock-badge">{orders.length}</span>
          </button>
          <button className={`dock-btn ${currentView === 'telemetry' ? 'active' : ''}`} onClick={() => setCurrentView('telemetry')}>
            ⚙️ <span>Systems Management</span>
          </button>
        </nav>
        <div className="dock-footer">
          <button className="btn-secondary" style={{ width: '100%', fontSize: '0.82rem' }} onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Set Presentation: Light' : '🌙 Set Presentation: Cyber'}
          </button>
        </div>
      </aside>

      {/* 2. Primary Operations Canvas Environment */}
      <main className="workspace-canvas">
        <header className="top-matrix-bar">
          <div style={{ fontWeight: 'bold', color: 'var(--text-muted)' }}>
            Node System Routing Architecture: <span style={{ color: 'var(--accent)' }}>Core Online Grid</span>
          </div>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
            <select className="filter-select" style={{ width: '110px', padding: '0.4rem' }} value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="INR">INR (₹)</option>
            </select>
            <div style={{ fontWeight: '800', background: 'var(--bg-sidebar)', padding: '0.4rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>
              💸 Balance: {userPoints} VTX Tokens
            </div>
          </div>
        </header>

        <div className="workspace-content">
          
          {/* Feature Component: Dynamic Global Status Alert Ticker Matrix */}
          <div className="system-alert-matrix">
            <span style={{ animation: 'pulse 2s infinite', background: 'var(--accent)', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block' }}></span>
            <div>
              <strong>Live Telemetry Matrix Scan Status Alert:</strong> {systemAnalytics.lowStockSKUs} inventory items signaling critical volume thresholds. Real-time active data streams syncing securely.
            </div>
          </div>

          {/* VIEW: CONTROL HUB COMMAND CENTER OVERVIEW */}
          {currentView === 'hub' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Strategic Operations Control Center</h2>
              
              {/* Comprehensive Telemetry Metric Panel Displays */}
              <div className="dashboard-grid">
                <div className="dashboard-panel" style={{ borderLeft: '4px solid var(--success)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>CONSOLIDATED NET REVENUE RECORD</div>
                  <div className="metric-highlight" style={{ color: 'var(--success)' }}>{runPriceTransform(systemAnalytics.grossRevenue)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total processing pipeline transaction returns</div>
                </div>
                <div className="dashboard-panel" style={{ borderLeft: '4px solid var(--purple)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>PREDICTIVE Q3 FORECAST MODEL ($y = mx + b$)</div>
                  <div className="metric-highlight" style={{ color: 'var(--purple)' }}>{runPriceTransform(systemAnalytics.modeledNextQuarterProjection)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--success)' }}>Linear trend factoring continuous 1.18x expansion curve</div>
                </div>
                <div className="dashboard-panel" style={{ borderLeft: '4px solid var(--accent)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>ACTIVE SERVER TRAFFIC NODES</div>
                  <div className="metric-highlight" style={{ color: 'var(--accent)' }}>{activeSessionTraffic.visitors} Sessions</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Accumulated page transitions counter: {activeSessionTraffic.pageViews} views</div>
                </div>
                <div className="dashboard-panel" style={{ borderLeft: '4px solid var(--danger)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold' }}>SYSTEM OUTAGES & CRITICAL DEFAULTS</div>
                  <div className="metric-highlight" style={{ color: 'var(--danger)' }}>{systemAnalytics.completelyDepleted} SKUs</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Requires emergency resource scheduling assignment</div>
                </div>
              </div>

              {/* Data Table Log Substructures Mapping Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                <div className="dashboard-panel">
                  <h3>Active System Fulfilled Pipeline Logs</h3>
                  <div className="data-table-wrapper">
                    <table className="data-table">
                      <thead>
                        <tr><th>Log Reference Hex</th><th>Timestamp Node</th><th>Payload Size</th><th>Aggregate Financial Value</th><th>Status Block</th></tr>
                      </thead>
                      <tbody>
                        {orders.map(o => (
                          <tr key={o.id}>
                            <td style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{o.id}</td>
                            <td>{o.date}</td>
                            <td>{o.units} units deployed</td>
                            <td style={{ fontWeight: 'bold', color: 'var(--accent)' }}>{runPriceTransform(o.total)}</td>
                            <td><span style={{ color: 'var(--success)', fontSize: '0.8rem', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{o.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="dashboard-panel">
                  <h3>Asset Threshold Status</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>Active resource levels below safe fulfillment limits.</p>
                  {products.map(p => (
                    <div key={p.id} style={{ display: 'flex', justifyBetween: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border-color)', fontSize: '0.85rem', justifyContent: 'space-between' }}>
                      <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '160px' }}>{p.name}</span>
                      <strong style={{ color: p.stock === 0 ? 'var(--danger)' : p.stock <= 3 ? 'var(--warning)' : 'var(--success)' }}>
                        {p.stock === 0 ? 'DEPLETED' : `${p.stock} Units left`}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW: ENHANCED DIRECT RETAIL PRODUCT CATALOG DISPATCH */}
          {currentView === 'catalog' && !selectedProduct && (
            <div>
              <div className="dashboard-panel" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: 1, minWidth: '220px' }}>
                  <input type="text" className="search-input" placeholder="Query data indexes or product specifications..." value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <div>
                  <select className="filter-select" value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}>
                    <option value="All">All Categories Components</option>
                    <option value="Electronics">Electronics Array</option>
                    <option value="Accessories">Accessories Deck</option>
                    <option value="Apparel">Apparel Knit</option>
                    <option value="Fitness">Fitness Modules</option>
                  </select>
                </div>
                <div>
                  <select className="filter-select" value={sortOption} onChange={e => setSortOption(e.target.value)}>
                    <option value="default">Standard Core Ordering</option>
                    <option value="low-high">Cost Dimension: Low to High</option>
                    <option value="high-low">Cost Dimension: High to Low</option>
                    <option value="rating">Efficiency Metric Rating</option>
                  </select>
                </div>
              </div>

              <div className="products-grid">
                {filteredCatalog.map(p => (
                  <div key={p.id} className="product-card">
                    {p.stock === 0 && <div className="stock-tag">STOCK INGESTION HALTED</div>}
                    <button className="wishlist-heart" onClick={() => {
                      const present = wishlist.some(w => w.id === p.id);
                      setWishlist(prev => present ? prev.filter(w => w.id !== p.id) : [...prev, p]);
                    }}>{wishlist.some(w => w.id === p.id) ? '❤️' : '🤍'}</button>
                    <img src={p.image} className="product-image" alt={p.name} onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer' }} />
                    <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h4 onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>{p.name}</h4>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--accent)' }}>{runPriceTransform(p.price)}</span>
                        <button className="btn-primary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }} onClick={() => handleAddToCart(p, 1)} disabled={p.stock === 0}>
                          Push Node
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW: ENHANCED LOADING SPECIFICATION REVIEW INTERFACE */}
          {selectedProduct && currentView === 'catalog' && (
            <div className="dashboard-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
              <img src={selectedProduct.image} style={{ width: '100%', borderRadius: '8px', maxHeight: '380px', objectFit: 'cover' }} alt="" />
              <div>
                <h2>{selectedProduct.name}</h2>
                <p style={{ fontSize: '2.2rem', color: 'var(--accent)', fontWeight: '900', margin: '0.8rem 0' }}>{runPriceTransform(selectedProduct.price)}</p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Internal Database Partition Map Index: {selectedProduct.category}</p>
                <div style={{ background: 'var(--bg-primary)', padding: '1.2rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
                  <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Target Allocation Process Limit Volume</label>
                  <input type="number" className="search-input" min="1" max={selectedProduct.stock} value={bulkQuantityInput} onChange={e => setBulkQuantityInput(Math.max(1, parseInt(e.target.value) || 1))} />
                </div>
                <button className="btn-primary" style={{ width: '100%', padding: '1rem' }} onClick={() => { handleAddToCart(selectedProduct, bulkQuantityInput); setSelectedProduct(null); setBulkQuantityInput(1); }}>
                  Deploy Load Array Batch Process
                </button>
                <button className="btn-secondary" style={{ width: '100%', marginTop: '0.5rem' }} onClick={() => setSelectedProduct(null)}>Abort Spec Review</button>
              </div>
            </div>
          )}

          {/* VIEW: CAPITAL ALLOCATION CART STORAGE STACK MAPPING LAYOUT */}
          {currentView === 'cart' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Active Structural Storage Allocation Matrix</h2>
              {cart.length === 0 ? (
                <div className="dashboard-panel" style={{ textAlign: 'center', padding: '4rem' }}>
                  <p style={{ color: 'var(--text-muted)' }}>No components or structures mapped to the active cluster frame initialization layout.</p>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
                  <div>
                    {cart.map(item => (
                      <div key={item.id} className="dashboard-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div>
                          <h4>{item.name}</h4>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{runPriceTransform(item.price)} per allocated structural node</span>
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                          <strong>{item.quantity} Units Assigned</strong>
                          <strong style={{ color: 'var(--accent)' }}>{runPriceTransform(item.price * item.quantity)}</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="dashboard-panel">
                    <h3>Encryption Authorization Node Total</h3>
                    <div style={{ margin: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Base Resource Accumulator:</span><span>{runPriceTransform(cartCalculations.subtotal)}</span></div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--success)' }}><span>Token Rebate Applied Matrix:</span><span>-{discountPercent}%</span></div>
                      <hr style={{ borderColor: 'var(--border-color)' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}><span>Final Net Capital Total:</span><span style={{ color: 'var(--accent)' }}>{runPriceTransform(cartCalculations.total)}</span></div>
                    </div>
                    <div style={{ marginBottom: '1.2rem' }}>
                      <input type="text" className="search-input" style={{ marginBottom: '0.5rem' }} placeholder="Enter Voucher Code (e.g. APEX20)" value={appliedPromo} onChange={e => setAppliedPromo(e.target.value)} />
                      <button className="btn-secondary" style={{ width: '100%', fontSize: '0.85rem' }} onClick={() => { if (appliedPromo.toUpperCase() === 'APEX20') { setDiscountPercent(20); triggerToast("Token Confirmed: 20% Total Value Reduction Injected."); } else { triggerToast("Validation logic mismatch fault key."); } }}>Verify Key Code</button>
                    </div>
                    <form onSubmit={handleOrderCheckoutCommit}>
                      <input type="text" placeholder="Identity Verification Name Handle" className="search-input" style={{ marginBottom: '0.5rem' }} required />
                      <input type="text" placeholder="Physical Delivery Routing Map Location" className="search-input" style={{ marginBottom: '0.5rem' }} required />
                      <input type="password" placeholder="Vault Validation Access Key String" className="search-input" style={{ marginBottom: '1rem' }} required />
                      <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem' }}>Confirm Settlement Flow</button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW: STATIC PROFILE MEMORY WISHLIST CELL INTERFACE */}
          {currentView === 'wishlist' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Cached Static Memory Components</h2>
              {wishlist.length === 0 ? <p style={{ color: 'var(--text-muted)' }}>No inventory components prioritized inside storage cell arrays.</p> : (
                <div className="products-grid">
                  {wishlist.map(p => (
                    <div key={p.id} className="dashboard-panel" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <h4>{p.name}</h4>
                      <strong style={{ color: 'var(--accent)' }}>{runPriceTransform(p.price)}</strong>
                      <button className="btn-primary" style={{ marginTop: 'auto' }} onClick={() => { handleAddToCart(p, 1); setWishlist(prev => prev.filter(w => w.id !== p.id)); }}>Deploy to Active Pipeline</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIEW: LOGISTICS BACKBONE GENERAL TRANSFERS ARCHIVE LEDGER */}
          {currentView === 'orders' && (
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Historical Transaction Flow Vectors</h2>
              {orders.map(o => (
                <div key={o.id} className="dashboard-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <h4 style={{ fontFamily: 'monospace' }}>Log Registry Index Key: {o.id}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Executed Timestamp Node: {o.date} | Delivery Protocol Config: {o.method}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--accent)' }}>{runPriceTransform(o.total)}</div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--success)', background: 'rgba(16,185,129,0.1)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{o.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VIEW: TELEMETRY INVENTORY BACKOFFICE CONTROLLER & BULK INGEST SCRIPT MODULE */}
          {currentView === 'telemetry' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              
              {/* Manual Creation Framework Input Panel */}
              <div className="dashboard-panel">
                <h3>Single Asset Node Ingestion Core</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>Inject structural entries manually into the active master catalog state context.</p>
                <form onSubmit={(e) => {
                  e.preventDefault(); if(!adminProduct.name || !adminProduct.price) return;
                  const manualObj = {
                    id: Date.now(),
                    name: adminProduct.name,
                    category: adminProduct.category,
                    price: parseFloat(adminProduct.price) || 49.99,
                    rating: 5.0,
                    image: adminProduct.image || "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500",
                    tags: ["manually-created-node"],
                    stock: parseInt(adminProduct.stock) || 12,
                    reviews: []
                  };
                  setProducts(prev => [manualObj, ...prev]);
                  setAdminProduct({ name: '', category: 'Electronics', price: '', stock: '', image: '' });
                  triggerToast("Manual asset entry successfully verified and mapped live.");
                  setCurrentView('catalog');
                }}>
                  <div style={{ marginBottom: '0.8rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Asset Label Frame Title</label>
                    <input type="text" className="search-input" value={adminProduct.name} onChange={e => setAdminProduct({ ...adminProduct, name: e.target.value })} placeholder="e.g. Core Terminal Uplink Base" required />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.8rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Database Partition Segment Class</label>
                      <select className="filter-select" value={adminProduct.category} onChange={e => setAdminProduct({ ...adminProduct, category: e.target.value })}>
                        <option value="Electronics">Electronics</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Apparel">Apparel</option>
                        <option value="Fitness">Fitness</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Valuation Rate Factor (USD)</label>
                      <input type="number" step="0.01" className="search-input" value={adminProduct.price} onChange={e => setAdminProduct({ ...adminProduct, price: e.target.value })} placeholder="89.99" required />
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '0.2rem' }}>Inbound Warehouse Initial Supply Balance</label>
                    <input type="number" className="search-input" value={adminProduct.stock} onChange={e => setAdminProduct({ ...adminProduct, stock: e.target.value })} placeholder="30" required />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%' }}>Compile and Ingest Core Node Asset</button>
                </form>
              </div>

              {/* Feature Component View Layout: JSON Multi-Node Multi-Row Array Batch Ingest Terminal */}
              <div className="dashboard-panel">
                <h3>Multi-Node JSON Bulk Asset Import Module</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
                  Paste a valid raw JSON database payload array map directly into the block area to trigger massive network pipeline provisioning instantly.
                </p>
                <form onSubmit={handleBulkJsonIngestion}>
                  <textarea className="raw-textarea" rows="10" value={jsonImportText} onChange={e => setJsonImportText(e.target.value)} placeholder={`[\n  { "name": "Bulk Micro-Processor Model A", "category": "Electronics", "price": 120.00, "stock": 45 },\n  { "name": "Synthetic Mesh Tactical Layer", "category": "Apparel", "price": 65.50, "stock": 20 }\n]`} required />
                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', background: 'var(--purple)' }}>
                    Execute Multi-Node Programmatic Script Import Execution
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* 3. Floating AI Diagnostic Interactive Conversation Console Module */}
      <div className="ai-chat-widget" style={{ height: chatOpen ? '360px' : '45px', overflow: 'hidden' }}>
        <div style={{ background: 'var(--accent)', color: 'white', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }} onClick={() => setChatOpen(!chatOpen)}>
          <span>💬 VORTEX Real-time AI Operations Shell</span>
          <span>{chatOpen ? 'Minimize Console' : 'Expand Shell Telemetry'}</span>
        </div>
        {chatOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '315px', padding: '0.8rem', background: 'var(--bg-card)' }}>
            <div style={{ flexGrow: 1, overflowY: 'auto', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
              {chatHistory.map((m, idx) => (
                <div key={idx} style={{ textAlign: m.sender === 'user' ? 'right' : 'left', margin: '0.3rem 0' }}>
                  <span style={{ display: 'inline-block', padding: '0.4rem 0.6rem', borderRadius: '6px', background: m.sender === 'user' ? 'var(--accent)' : 'var(--bg-primary)', color: 'var(--text-main)', maxWidth: '85%' }}>
                    {m.text}
                  </span>
                </div>
              ))}
            </div>
            <form onSubmit={(e) => {
              e.preventDefault(); if (!chatInput.trim()) return;
              const text = chatInput.toLowerCase();
              const userMsg = { sender: 'user', text: chatInput };
              let answer = "Inquiry mapping parsing anomaly. Re-configure search variable syntax string key.";
              if (text.includes('revenue') || text.includes('sales')) answer = `Active analytics scan monitors consolidated pipeline sales value aggregate totals at ${runPriceTransform(systemAnalytics.grossRevenue)}.`;
              if (text.includes('forecast') || text.includes('predict')) answer = `Algorithmic next-quarter trajectory models linear prediction tracking values at ${runPriceTransform(systemAnalytics.modeledNextQuarterProjection)}.`;
              if (text.includes('visitors') || text.includes('traffic')) answer = `Live analytics reports ${activeSessionTraffic.visitors} active terminal user sessions running concurrency protocols.`;
              setChatHistory(prev => [...prev, userMsg, { sender: 'ai', text: answer }]); setChatInput('');
            }} style={{ display: 'flex', gap: '0.4rem' }}>
              <input type="text" className="search-input" style={{ padding: '0.4rem' }} placeholder="Ask system terminal shell..." value={chatInput} onChange={e => setChatInput(e.target.value)} />
              <button type="submit" className="btn-primary" style={{ padding: '0.4rem 0.8rem' }}>Run</button>
            </form>
          </div>
        )}
      </div>

    </div>
  );
}