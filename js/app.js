(function () {
  const $ = s => document.querySelector(s);
  const money = n => '$' + n.toLocaleString('en-US');
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byId = id => PRODUCTS.find(p => p.id === id);
  const SIZE_ORDER = ['S', 'M', 'L', 'XL', '26', '27', '28', '29', '30', '31', '32', '33', '85', '90', '95', 'F'];
  const CART_KEY = 'shop-cart-v1';

  const f = { gender: '', type: '', size: '', price: '', sort: 'new', q: '' };
  let cart = [];
  let view = 'cart';            // cart | checkout | done
  let customer = { name: '', phone: '', method: '宅配', address: '', note: '' };
  let orderText = '';
  let cur = null;               // 目前開啟的商品視窗：{p, color, size, qty}
  let lastFocus = null;

  try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { cart = []; }
  cart = cart.filter(i => byId(i.pid));
  const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} };

  /* ---------- 店家資訊 ---------- */
  document.title = SHOP.name + '｜男女裝日常穿搭';
  $('#brandName').textContent = SHOP.name;
  $('#footName').textContent = '© ' + SHOP.name;
  $('#tagline').textContent = SHOP.tagline;
  $('#shipText').textContent = '全館滿 ' + money(SHOP.freeShipping) + ' 免運，未滿收取 ' + money(SHOP.shippingFee) + ' 運費。可選宅配、超商取貨或到店取貨，下單確認後 3 個工作天內出貨。';
  $('#contactText').innerHTML = '客服時間：' + esc(SHOP.hours) + '<br>LINE：' + esc(SHOP.line) + '<br>Instagram：@' + esc(SHOP.instagram) + (SHOP.phone ? '<br>電話：' + esc(SHOP.phone) : '') + '<br>Email：' + esc(SHOP.email);

  /* ---------- 篩選 ---------- */
  const types = ['全部類型'].concat([...new Set(PRODUCTS.map(p => p.type))]);
  $('#fType').innerHTML = types.map((t, i) => '<option value="' + (i ? esc(t) : '') + '">' + esc(t) + '</option>').join('');
  const sizes = [...new Set(PRODUCTS.flatMap(p => p.sizes))].sort((a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b));
  $('#fSize').innerHTML = '<option value="">全部尺寸</option>' + sizes.map(s => '<option>' + esc(s) + '</option>').join('');

  function filtered() {
    const q = f.q.trim().toLowerCase();
    let range = f.price ? f.price.split('-').map(Number) : null;
    let list = PRODUCTS.filter(p =>
      (!f.gender || p.gender === f.gender) && (!f.type || p.type === f.type) &&
      (!f.size || p.sizes.includes(f.size)) && (!range || (p.price >= range[0] && p.price <= range[1])) &&
      (!q || (p.name + p.type + p.gender).toLowerCase().includes(q)));
    if (f.sort === 'asc') list.sort((a, b) => a.price - b.price);
    else if (f.sort === 'desc') list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => a.order - b.order);
    return list;
  }

  function renderGrid() {
    const list = filtered();
    $('#resultCount').textContent = '共 ' + list.length + ' 件商品';
    $('#grid').innerHTML = list.length ? list.map(p =>
      '<button class="card" data-id="' + p.id + '" aria-label="查看 ' + esc(p.name) + '">' +
      '<div class="ph"><img src="' + esc(p.colors[0].image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
      (p.tag ? '<span class="tag">' + esc(p.tag) + '</span>' : '') + '</div>' +
      '<h3>' + esc(p.name) + '</h3><div class="meta"><p class="price">' + money(p.price) + '</p>' +
      '<span class="dots">' + p.colors.map(c => '<i style="background:' + c.hex + '"></i>').join('') + '</span></div></button>'
    ).join('') : '<div class="empty">找不到符合條件的商品，換個條件試試看。</div>';
  }

  document.querySelector('.gnav').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    f.gender = b.dataset.gender;
    document.querySelectorAll('.gnav button').forEach(x => x.classList.toggle('on', x === b));
    renderGrid();
    location.hash = '#shop';
  });
  $('#q').addEventListener('input', e => { f.q = e.target.value; renderGrid(); });
  [['#fType', 'type'], ['#fSize', 'size'], ['#fPrice', 'price'], ['#fSort', 'sort']].forEach(x =>
    $(x[0]).addEventListener('change', e => { f[x[1]] = e.target.value; renderGrid(); }));

  /* ---------- 商品視窗 ---------- */
  function openModal(id) {
    const p = byId(id);
    cur = { p, color: 0, size: p.sizes.length === 1 ? p.sizes[0] : '', qty: 1 };
    lastFocus = document.activeElement;
    $('#mCat').textContent = p.gender + ' · ' + p.type;
    $('#mName').textContent = p.name;
    $('#mPrice').textContent = money(p.price);
    $('#mDesc').textContent = p.desc;
    $('#mWarn').hidden = true;
    renderModalOpts();
    $('#overlay').hidden = false;
    $('#modal').hidden = false;
    $('#closeModal').focus();
  }
  function renderModalOpts() {
    const { p } = cur, c = p.colors[cur.color];
    $('#mImg').src = c.image;
    $('#mImg').alt = p.name + '（' + c.name + '）';
    $('#mColorName').textContent = c.name;
    $('#mColors').innerHTML = p.colors.map((x, i) =>
      '<button class="sw" data-i="' + i + '" style="background:' + x.hex + '" aria-label="' + esc(x.name) + '" aria-pressed="' + (i === cur.color) + '"></button>').join('');
    $('#mSizes').innerHTML = p.sizes.map(s =>
      '<button class="sz" data-s="' + esc(s) + '" aria-pressed="' + (s === cur.size) + '">' + esc(s) + '</button>').join('');
    $('#mQty').textContent = cur.qty;
  }
  function closeModal() {
    if ($('#modal').hidden) return;
    $('#modal').hidden = true;
    if ($('#drawer').hidden) $('#overlay').hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $('#grid').addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openModal(c.dataset.id); });
  $('#mColors').addEventListener('click', e => { const b = e.target.closest('.sw'); if (b) { cur.color = +b.dataset.i; renderModalOpts(); } });
  $('#mSizes').addEventListener('click', e => { const b = e.target.closest('.sz'); if (b) { cur.size = b.dataset.s; $('#mWarn').hidden = true; renderModalOpts(); } });
  $('#mMinus').addEventListener('click', () => { cur.qty = Math.max(1, cur.qty - 1); renderModalOpts(); });
  $('#mPlus').addEventListener('click', () => { cur.qty = Math.min(9, cur.qty + 1); renderModalOpts(); });
  $('#closeModal').addEventListener('click', closeModal);
  $('#mAdd').addEventListener('click', () => {
    if (!cur.size) { $('#mWarn').hidden = false; return; }
    const colorName = cur.p.colors[cur.color].name;
    const hit = cart.find(i => i.pid === cur.p.id && i.color === colorName && i.size === cur.size);
    if (hit) hit.qty = Math.min(9, hit.qty + cur.qty); else cart.push({ pid: cur.p.id, color: colorName, size: cur.size, qty: cur.qty });
    saveCart(); updateCount(); closeModal(); toast('已加入購物車');
  });

  /* ---------- 購物車 ---------- */
  const lineImg = i => { const p = byId(i.pid); return (p.colors.find(c => c.name === i.color) || p.colors[0]).image; };
  const subtotal = () => cart.reduce((a, i) => a + byId(i.pid).price * i.qty, 0);
  const shipping = () => (cart.length && subtotal() < SHOP.freeShipping ? SHOP.shippingFee : 0);
  function updateCount() { $('#cartCount').textContent = cart.reduce((a, i) => a + i.qty, 0); }

  function openCart() {
    lastFocus = document.activeElement;
    view = 'cart';
    renderCart();
    $('#overlay').hidden = false;
    $('#drawer').hidden = false;
    $('#closeCart').focus();
  }
  function closeCart() {
    if ($('#drawer').hidden) return;
    $('#drawer').hidden = true;
    if ($('#modal').hidden) $('#overlay').hidden = true;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function summaryHtml() {
    const sub = subtotal(), ship = shipping();
    return '<div class="sum"><div><span>小計</span><span>' + money(sub) + '</span></div>' +
      '<div><span>運費</span><span>' + (ship ? money(ship) : '免運') + '</span></div>' +
      '<div class="total"><span>總計</span><span>' + money(sub + ship) + '</span></div>' +
      (ship ? '<p class="hint">再買 ' + money(SHOP.freeShipping - sub) + ' 即可免運</p>' : '') + '</div>';
  }

  function renderCart() {
    const body = $('#cartBody');
    if (view === 'cart') {
      if (!cart.length) { body.innerHTML = '<p class="empty" style="padding:48px 0;text-align:center;color:var(--muted)">購物車是空的，去逛逛吧。</p>'; return; }
      body.innerHTML = cart.map((i, idx) => {
        const p = byId(i.pid);
        return '<div class="line"><img src="' + esc(lineImg(i)) + '" alt="' + esc(p.name) + '"><div>' +
          '<h4>' + esc(p.name) + '</h4><div class="sub">' + esc(i.color) + ' / ' + esc(i.size) + '</div>' +
          '<div class="row"><div class="qty"><button data-a="minus" data-i="' + idx + '" aria-label="減少">−</button><span>' + i.qty + '</span><button data-a="plus" data-i="' + idx + '" aria-label="增加">＋</button></div>' +
          '<span class="price">' + money(p.price * i.qty) + '</span></div>' +
          '<button class="rm" data-a="rm" data-i="' + idx + '">移除</button></div></div>';
      }).join('') + summaryHtml() + '<button class="btn primary wide" data-a="checkout">前往結帳資料</button>';
    } else if (view === 'checkout') {
      body.innerHTML = '<button class="back" data-a="back">← 回購物車</button>' + summaryHtml() +
        '<form id="orderForm" novalidate>' +
        '<label class="field">姓名<input id="cName" required value="' + esc(customer.name) + '" autocomplete="name"></label>' +
        '<label class="field">手機<input id="cPhone" required inputmode="tel" value="' + esc(customer.phone) + '" autocomplete="tel"></label>' +
        '<label class="field">取貨方式<select id="cMethod">' + ['宅配', '超商取貨', '到店取貨'].map(m => '<option' + (m === customer.method ? ' selected' : '') + '>' + m + '</option>').join('') + '</select></label>' +
        '<label class="field">地址或取貨門市<input id="cAddr" value="' + esc(customer.address) + '" placeholder="到店取貨可不填"></label>' +
        '<label class="field">備註<textarea id="cNote">' + esc(customer.note) + '</textarea></label>' +
        '<p class="warn" id="formWarn" hidden></p>' +
        '<button class="btn primary wide">產生訂單內容</button>' +
        '<p class="hint" style="margin-top:8px">這裡不會收款。產生訂單後，請複製內容傳給我們，由店家確認庫存與付款方式。</p></form>';
    } else {
      body.innerHTML = '<button class="back" data-a="back2">← 修改資料</button>' +
        '<p class="sec-t" style="margin-top:0">第 1 步：複製訂單內容</p>' +
        '<textarea class="order-box" id="orderBox" readonly>' + esc(orderText) + '</textarea>' +
        '<button class="btn wide" data-a="copy" style="margin-top:8px">複製訂單內容</button>' +
        '<p class="sec-t">第 2 步：傳給我們</p>' +
        '<div class="links"><a class="btn" target="_blank" rel="noopener" href="' + (SHOP.line.charAt(0) === '@' ? 'https://line.me/R/ti/p/' + encodeURIComponent(SHOP.line) : 'https://line.me/ti/p/~' + encodeURIComponent(SHOP.line)) + '">LINE</a>' +
        '<a class="btn" target="_blank" rel="noopener" href="https://instagram.com/' + encodeURIComponent(SHOP.instagram) + '">Instagram</a>' +
        (SHOP.phone ? '<a class="btn" href="tel:' + esc(SHOP.phone.replace(/[^\d+]/g, '')) + '">撥打電話</a>' : '') +
        '<a class="btn" href="mailto:' + esc(SHOP.email) + '?subject=' + encodeURIComponent('訂單詢問') + '&body=' + encodeURIComponent(orderText) + '">寄 Email</a></div>' +
        '<p class="hint" style="margin-top:10px">傳送後，我們會回覆庫存與付款資訊，確認完成才算訂單成立。</p>' +
        '<button class="back" data-a="clear" style="margin-top:14px">已傳送，清空購物車</button>';
    }
  }

  function buildOrder() {
    const L = ['【' + SHOP.name + ' 訂單】', ''];
    cart.forEach((i, n) => {
      const p = byId(i.pid);
      L.push((n + 1) + '. ' + p.name + '｜' + i.color + '｜' + i.size + '｜' + i.qty + ' 件｜' + money(p.price * i.qty));
    });
    L.push('', '小計：' + money(subtotal()), '運費：' + (shipping() ? money(shipping()) : '免運'), '總計：' + money(subtotal() + shipping()), '',
      '姓名：' + customer.name, '手機：' + customer.phone, '取貨方式：' + customer.method);
    if (customer.address) L.push('地址／門市：' + customer.address);
    if (customer.note) L.push('備註：' + customer.note);
    return L.join('\n');
  }

  $('#cartBody').addEventListener('click', e => {
    const b = e.target.closest('[data-a]'); if (!b) return;
    const a = b.dataset.a, i = +b.dataset.i;
    if (a === 'plus') cart[i].qty = Math.min(9, cart[i].qty + 1);
    else if (a === 'minus') cart[i].qty = Math.max(1, cart[i].qty - 1);
    else if (a === 'rm') cart.splice(i, 1);
    else if (a === 'checkout') { view = 'checkout'; renderCart(); return; }
    else if (a === 'back' || a === 'back2') { view = a === 'back' ? 'cart' : 'checkout'; renderCart(); return; }
    else if (a === 'copy') {
      const box = $('#orderBox');
      const ok = () => toast('已複製訂單內容');
      const fallback = () => { box.focus(); box.select(); try { document.execCommand('copy'); ok(); } catch (x) { toast('請長按文字手動複製'); } };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(orderText).then(ok, fallback); else fallback();
      return;
    } else if (a === 'clear') { cart = []; view = 'cart'; }
    saveCart(); updateCount(); renderCart();
  });
  $('#cartBody').addEventListener('submit', e => {
    e.preventDefault();
    customer = { name: $('#cName').value.trim(), phone: $('#cPhone').value.trim(), method: $('#cMethod').value, address: $('#cAddr').value.trim(), note: $('#cNote').value.trim() };
    const w = $('#formWarn');
    let msg = '';
    if (!customer.name) msg = '請填寫姓名';
    else if (!/^[0-9+\-\s]{8,}$/.test(customer.phone)) msg = '請填寫正確的手機號碼';
    else if (customer.method !== '到店取貨' && !customer.address) msg = '請填寫地址或取貨門市';
    if (msg) { w.textContent = msg; w.hidden = false; return; }
    orderText = buildOrder(); view = 'done'; renderCart();
  });

  $('#openCart').addEventListener('click', openCart);
  $('#closeCart').addEventListener('click', closeCart);
  $('#overlay').addEventListener('click', () => { closeModal(); closeCart(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeCart(); } });

  let tt;
  function toast(m) { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(tt); tt = setTimeout(() => { t.hidden = true; }, 2000); }

  renderGrid();
  updateCount();
})();
