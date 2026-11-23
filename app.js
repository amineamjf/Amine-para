// www/js/i18n.js
var lang = "ar";
var DICT = {
  ar: {
    appName: "أمين بارا",
    save: "حفظ",
    cancel: "إلغاء",
    ok: "موافق",
    close: "إغلاق",
    delete: "حذف",
    edit: "تعديل",
    confirm: "تأكيد",
    saved: "تم الحفظ",
    deleted: "تم الحذف",
    today: "اليوم",
    yesterday: "أمس",
    total: "المجموع",
    all: "الكل",
    none: "لا شيء",
    back: "رجوع",
    add: "إضافة",
    share: "مشاركة",
    download: "حفظ",
    "cur.mad": "د.م",
    "cur.riyal": "ريال",
    "nav.home": "الرئيسية",
    "nav.products": "المنتجات",
    "nav.sales": "المبيعات",
    "nav.customers": "الزبائن",
    "nav.studio": "التسويق",
    "nav.more": "المزيد",
    "home.hello": "مرحباً",
    "home.today": "اليوم",
    "home.week": "7 أيام",
    "home.month": "هذا الشهر",
    "home.revenue": "المبيعات",
    "home.profit": "الربح الصافي",
    "home.sales": "عدد الفواتير",
    "home.debts": "ديون الزبائن",
    "home.newSale": "بيع جديد",
    "home.alerts": "تنبيهات",
    "home.lowStock": "منتجات قاربت على النفاد",
    "home.expiring": "منتجات قاربت صلاحيتها",
    "home.allGood": "كل شيء على ما يرام",
    "home.top": "الأكثر ربحاً",
    "home.quick": "اختصارات",
    "home.noSalesYet": "لا توجد مبيعات بعد",
    "products.title": "المنتجات",
    "products.add": "إضافة منتج",
    "products.edit": "تعديل المنتج",
    "products.search": "ابحثي عن منتج...",
    "products.empty": "لم تضيفي أي منتج بعد",
    "products.noMatch": "لا توجد نتائج",
    "products.low": "مخزون قليل",
    "products.out": "نفد",
    "products.f.all": "الكل",
    "products.f.low": "قارب النفاد",
    "products.f.expiring": "قارب الانتهاء",
    "products.photo": "صورة المنتج",
    "products.photoRemove": "إزالة",
    "products.margin": "هامش الربح",
    "products.deleteConfirm": "حذف «{name}»؟",
    "products.expired": "منتهي الصلاحية",
    "products.expiresIn": "ينتهي بعد {n} يوم",
    "f.name": "الاسم",
    "f.brand": "العلامة",
    "f.category": "الصنف",
    "f.buy": "سعر الشراء",
    "f.sell": "سعر البيع",
    "f.stock": "المخزون",
    "f.minStock": "حد التنبيه",
    "f.expiry": "تاريخ الانتهاء",
    "f.barcode": "الباركود",
    "f.phone": "الهاتف",
    "f.note": "ملاحظة",
    "f.amount": "المبلغ",
    "f.supplier": "المورد",
    "f.label": "البيان",
    "sales.title": "المبيعات",
    "sales.new": "بيع جديد",
    "sales.history": "السجل",
    "sales.empty": "لا توجد مبيعات بعد",
    "sales.pickProduct": "أضيفي منتجاً",
    "sales.cart": "السلة",
    "sales.emptyCart": "السلة فارغة",
    "sales.paid": "المدفوع",
    "sales.remainder": "الباقي دَيناً",
    "sales.customer": "الزبون",
    "sales.walkIn": "زبون عادي",
    "sales.confirm": "تأكيد البيع",
    "sales.void": "إلغاء الفاتورة",
    "sales.voidConfirm": "إلغاء هذه الفاتورة؟ سيرجع المخزون ويُحذف الدين المرتبط بها.",
    "sales.unitPrice": "السعر",
    "sales.qty": "الكمية",
    "sales.stockLeft": "متوفر {n}",
    "sales.done": "تم البيع",
    "sales.payFull": "دفع كامل",
    "sales.profit": "الربح",
    "sales.items": "{n} قطعة",
    "sales.detail": "تفاصيل الفاتورة",
    "purchases.title": "المشتريات",
    "purchases.new": "شراء جديد",
    "purchases.empty": "لا توجد مشتريات بعد",
    "purchases.cost": "سعر الشراء",
    "purchases.voidConfirm": "إلغاء هذا الشراء؟ سينقص المخزون بما أُضيف.",
    "purchases.done": "تم تسجيل الشراء",
    "purchases.hint": "سيُحدَّث المخزون وسعر الشراء تلقائياً.",
    "expenses.title": "المصاريف",
    "expenses.add": "إضافة مصروف",
    "expenses.empty": "لا توجد مصاريف",
    "expenses.deleteConfirm": "حذف هذا المصروف؟",
    "customers.title": "الزبائن والديون",
    "customers.add": "إضافة زبون",
    "customers.edit": "تعديل الزبون",
    "customers.empty": "لا يوجد زبائن بعد",
    "customers.owes": "عليه",
    "customers.credit": "له",
    "customers.settled": "مسدَّد",
    "customers.addDebt": "تسجيل دين",
    "customers.addPayment": "تسجيل دفعة",
    "customers.history": "السجل",
    "customers.noHistory": "لا توجد حركات",
    "customers.debt": "دين",
    "customers.payment": "دفعة",
    "customers.search": "ابحثي عن زبون...",
    "customers.totalDebts": "مجموع الديون",
    "customers.showIn": "العرض بـ",
    "customers.mad": "درهم",
    "customers.riyal": "ريال",
    "customers.rateNote": "1 درهم = 20 ريال. العرض بالريال للدفتر فقط، والقيم الأصلية بالدرهم لا تتغير.",
    "customers.deleteConfirm": "حذف «{name}»؟",
    "customers.call": "اتصال",
    "customers.whatsapp": "واتساب",
    "customers.fromSale": "من فاتورة",
    "customers.entryDeleteConfirm": "حذف هذه الحركة؟",
    "customers.amountIn": "المبلغ بـ{cur}",
    "studio.title": "استوديو التسويق",
    "studio.sub": "صمّمي منشوراً جاهزاً في دقيقة",
    "studio.templates": "القوالب",
    "studio.pick": "اختاري قالباً",
    "studio.cat.morning": "صباح الخير",
    "studio.cat.evening": "مساء الخير",
    "studio.cat.friday": "جمعة مباركة",
    "studio.cat.occasions": "مناسبات وأعياد",
    "studio.cat.newProduct": "منتج جديد",
    "studio.cat.offers": "عروض وتخفيضات",
    "studio.cat.tips": "نصائح العناية",
    "studio.editor": "تصميم المنشور",
    "studio.headline": "العنوان",
    "studio.sub2": "النص الفرعي",
    "studio.product": "اسم المنتج",
    "studio.price": "السعر",
    "studio.cta": "عبارة الدعوة",
    "studio.fromStock": "من منتجاتي",
    "studio.photoPhone": "صورة من الهاتف",
    "studio.photoWeb": "صور مجانية",
    "studio.photoRemove": "بدون صورة",
    "studio.colors": "الألوان",
    "studio.font": "الخط",
    "studio.font.sans": "عصري",
    "studio.font.serif": "كلاسيكي",
    "studio.size": "المقاس",
    "studio.size.square": "مربع",
    "studio.size.portrait": "عمودي",
    "studio.size.story": "ستوري",
    "studio.showPrice": "إظهار السعر",
    "studio.showLogo": "إظهار الشعار",
    "studio.showProduct": "إظهار اسم المنتج",
    "studio.overlay": "تعتيم الصورة",
    "studio.shareWhatsapp": "مشاركة",
    "studio.saved": "حُفظت الصورة في Documents/AminePara",
    "studio.savedWeb": "تم تنزيل الصورة",
    "studio.rendering": "جارٍ إنشاء الصورة...",
    "studio.preview": "معاينة",
    "studio.reminders": "التذكيرات",
    "studio.shareHint": "اختاري واتساب أو إنستغرام من القائمة.",
    "studio.web.title": "صور مجانية مرخصة",
    "studio.web.search": "ابحثي عن صورة...",
    "studio.web.keyNeeded": "للبحث في صور Pexels المجانية أدخلي مفتاحاً مجانياً من الإعدادات.",
    "studio.web.credit": "صورة: {name} / Pexels",
    "studio.web.err": "تعذّر جلب الصور. تحققي من الاتصال.",
    "studio.web.none": "لا نتائج",
    "studio.web.hint": "الصور من Pexels وتُستعمل مجاناً. يُكتب اسم المصوّر تلقائياً على المنشور.",
    "tpl.morning-1.h": "صباح الخير",
    "tpl.morning-1.s": "يوم جميل يبدأ ببشرة مشرقة",
    "tpl.morning-2.h": "صباح النور",
    "tpl.morning-2.s": "ابدئي يومك بعناية تستحقينها",
    "tpl.evening-1.h": "مساء الخير",
    "tpl.evening-1.s": "وقت العناية الهادئة بعد يوم طويل",
    "tpl.evening-2.h": "مساء الورد",
    "tpl.evening-2.s": "دلّلي بشرتك قبل النوم",
    "tpl.friday-1.h": "جمعة مباركة",
    "tpl.friday-1.s": "أسأل الله أن يجعلها جمعة خير وبركة عليكم",
    "tpl.friday-2.h": "جمعة طيبة",
    "tpl.friday-2.s": "كل جمعة وأنتم بخير",
    "tpl.occasion-1.h": "كل عام وأنتم بخير",
    "tpl.occasion-1.s": "نتمنى لكم عيداً سعيداً مليئاً بالفرح",
    "tpl.occasion-2.h": "مناسبة سعيدة",
    "tpl.occasion-2.s": "تهانينا الصادقة لكم ولأسركم",
    "tpl.new-1.h": "وصل حديثاً",
    "tpl.new-1.s": "متوفر الآن في المحل",
    "tpl.new-2.h": "جديدنا",
    "tpl.new-2.s": "اكتشفي المنتج الجديد",
    "tpl.offer-1.h": "عرض خاص",
    "tpl.offer-1.s": "لفترة محدودة فقط",
    "tpl.offer-2.h": "تخفيض",
    "tpl.offer-2.s": "اغتنمي الفرصة قبل نفاد الكمية",
    "tpl.tips-1.h": "نصيحة اليوم",
    "tpl.tips-1.s": "نظّفي بشرتك مرتين يومياً، وضعي واقي الشمس كل صباح، واشربي الماء بانتظام.",
    "tpl.tips-2.h": "سرّ شعر صحي",
    "tpl.tips-2.s": "قلّلي من حرارة المجفف، ورطّبي أطراف الشعر بزيت خفيف مرتين في الأسبوع.",
    "tpl.cta.offer": "احجزي الآن",
    "tpl.cta.new": "تعالي واكتشفي",
    "settings.title": "الإعدادات",
    "settings.shop": "المحل",
    "settings.shopName": "اسم المحل",
    "settings.logo": "شعار المحل",
    "settings.logoPick": "اختيار الشعار",
    "settings.language": "اللغة",
    "settings.reminders": "تذكيرات اختيارية",
    "settings.remindersHint": "إشعارات تذكّرك بتصميم منشور. لا يُنشر شيء تلقائياً أبداً.",
    "rem.morning": "تذكير كل صباح 8:30",
    "rem.evening": "تذكير كل مساء 18:30",
    "rem.friday": "تذكير كل جمعة 9:00",
    "rem.occasions": "تذكير بالمناسبات والأعياد",
    "rem.morning.title": "منشور صباح الخير",
    "rem.morning.body": "جاهزة لتصميم منشور صباح اليوم؟",
    "rem.evening.title": "منشور مساء الخير",
    "rem.evening.body": "منشور المساء بنقرتين.",
    "rem.friday.title": "جمعة مباركة",
    "rem.friday.body": "صمّمي منشور الجمعة الآن.",
    "rem.occ.title": "مناسبة قادمة",
    "rem.occ.body": "اليوم: {name}. صمّمي منشوراً؟",
    "rem.denied": "لم تُمنح صلاحية الإشعارات. فعّليها من إعدادات الهاتف.",
    "rem.webOnly": "التذكيرات تعمل داخل تطبيق الأندرويد فقط.",
    "rem.on": "تم ضبط التذكيرات",
    "settings.backup": "النسخ الاحتياطي",
    "settings.backupHint": "يحفظ كل بياناتك في ملف. احتفظي به في مكان آمن.",
    "settings.export": "تصدير نسخة",
    "settings.import": "استيراد نسخة",
    "settings.importConfirm": "سيُستبدل كل ما في التطبيق ببيانات النسخة. المتابعة؟",
    "settings.importDone": "تم استرجاع النسخة",
    "settings.exported": "تم حفظ النسخة",
    "settings.about": "عن التطبيق",
    "settings.aboutText": "بياناتك محفوظة على هاتفك وتعمل بدون إنترنت.",
    "settings.pexels": "مفتاح Pexels (اختياري)",
    "settings.pexelsHint": "مجاني من pexels.com/api، يُفعّل البحث عن صور مرخصة داخل الاستوديو.",
    "more.title": "المزيد",
    "more.purchases": "المشتريات",
    "more.expenses": "المصاريف",
    "more.reports": "الأرباح والتقارير",
    "more.settings": "الإعدادات",
    "reports.title": "الأرباح",
    "reports.range.today": "اليوم",
    "reports.range.week": "7 أيام",
    "reports.range.month": "الشهر",
    "reports.range.year": "السنة",
    "reports.revenue": "المبيعات",
    "reports.cogs": "تكلفة البضاعة",
    "reports.gross": "ربح المبيعات",
    "reports.expenses": "المصاريف",
    "reports.net": "الربح الصافي",
    "reports.purchases": "المشتريات",
    "reports.top": "الأكثر ربحاً",
    "reports.invoices": "الفواتير",
    "occ.newYear": "رأس السنة الميلادية",
    "occ.manifesto": "ذكرى تقديم وثيقة الاستقلال",
    "occ.valentine": "عيد الحب",
    "occ.womenDay": "اليوم العالمي للمرأة",
    "occ.labour": "عيد الشغل",
    "occ.throne": "عيد العرش",
    "occ.oued": "ذكرى استرجاع وادي الذهب",
    "occ.revolution": "ثورة الملك والشعب",
    "occ.youth": "عيد الشباب",
    "occ.greenMarch": "ذكرى المسيرة الخضراء",
    "occ.independence": "عيد الاستقلال",
    "err.generic": "حدث خطأ غير متوقع",
    "err.nameRequired": "الاسم مطلوب",
    "err.badPrice": "السعر غير صالح",
    "err.badQty": "الكمية غير صالحة",
    "err.badAmount": "المبلغ غير صالح",
    "err.insufficientStock": "المخزون غير كافٍ لـ«{name}» (المتوفر {stock})",
    "err.emptyCart": "السلة فارغة",
    "err.badPaid": "المبلغ المدفوع غير صالح",
    "err.needCustomer": "اختاري زبوناً لتسجيل الباقي دَيناً",
    "err.customerMissing": "الزبون غير موجود",
    "err.productMissing": "المنتج غير موجود",
    "err.customerHasBalance": "لا يمكن حذف زبون عليه رصيد",
    "err.ledgerFromSale": "هذه الحركة من فاتورة، ألغي الفاتورة بدلاً من ذلك",
    "err.saleMissing": "الفاتورة غير موجودة",
    "err.stockNegative": "لا يمكن الإلغاء لأن «{name}» بِيع بعد هذا الشراء",
    "err.badBackup": "ملف النسخة غير صالح",
    "err.image": "تعذّر قراءة الصورة",
    "err.badType": "نوع غير صالح",
    "err.purchaseMissing": "الشراء غير موجود"
  },
  fr: {
    appName: "Amine Para",
    save: "Enregistrer",
    cancel: "Annuler",
    ok: "OK",
    close: "Fermer",
    delete: "Supprimer",
    edit: "Modifier",
    confirm: "Confirmation",
    saved: "Enregistré",
    deleted: "Supprimé",
    today: "Aujourd'hui",
    yesterday: "Hier",
    total: "Total",
    all: "Tout",
    none: "Aucun",
    back: "Retour",
    add: "Ajouter",
    share: "Partager",
    download: "Enregistrer",
    "cur.mad": "DH",
    "cur.riyal": "riyal",
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.sales": "Ventes",
    "nav.customers": "Clients",
    "nav.studio": "Studio",
    "nav.more": "Plus",
    "home.hello": "Bonjour",
    "home.today": "Aujourd'hui",
    "home.week": "7 jours",
    "home.month": "Ce mois",
    "home.revenue": "Ventes",
    "home.profit": "Bénéfice net",
    "home.sales": "Factures",
    "home.debts": "Dettes clients",
    "home.newSale": "Nouvelle vente",
    "home.alerts": "Alertes",
    "home.lowStock": "Produits bientôt en rupture",
    "home.expiring": "Produits bientôt périmés",
    "home.allGood": "Tout est en ordre",
    "home.top": "Les plus rentables",
    "home.quick": "Raccourcis",
    "home.noSalesYet": "Aucune vente pour le moment",
    "products.title": "Produits",
    "products.add": "Ajouter un produit",
    "products.edit": "Modifier le produit",
    "products.search": "Rechercher un produit...",
    "products.empty": "Vous n'avez pas encore de produit",
    "products.noMatch": "Aucun résultat",
    "products.low": "Stock bas",
    "products.out": "Épuisé",
    "products.f.all": "Tous",
    "products.f.low": "Stock bas",
    "products.f.expiring": "Bientôt périmés",
    "products.photo": "Photo du produit",
    "products.photoRemove": "Retirer",
    "products.margin": "Marge",
    "products.deleteConfirm": "Supprimer « {name} » ?",
    "products.expired": "Périmé",
    "products.expiresIn": "Expire dans {n} j",
    "f.name": "Nom",
    "f.brand": "Marque",
    "f.category": "Catégorie",
    "f.buy": "Prix d'achat",
    "f.sell": "Prix de vente",
    "f.stock": "Stock",
    "f.minStock": "Seuil d'alerte",
    "f.expiry": "Date d'expiration",
    "f.barcode": "Code-barres",
    "f.phone": "Téléphone",
    "f.note": "Note",
    "f.amount": "Montant",
    "f.supplier": "Fournisseur",
    "f.label": "Libellé",
    "sales.title": "Ventes",
    "sales.new": "Nouvelle vente",
    "sales.history": "Historique",
    "sales.empty": "Aucune vente pour le moment",
    "sales.pickProduct": "Ajouter un produit",
    "sales.cart": "Panier",
    "sales.emptyCart": "Le panier est vide",
    "sales.paid": "Payé",
    "sales.remainder": "Reste à crédit",
    "sales.customer": "Client",
    "sales.walkIn": "Client de passage",
    "sales.confirm": "Valider la vente",
    "sales.void": "Annuler la facture",
    "sales.voidConfirm": "Annuler cette facture ? Le stock est restitué et la dette liée supprimée.",
    "sales.unitPrice": "Prix",
    "sales.qty": "Qté",
    "sales.stockLeft": "Dispo {n}",
    "sales.done": "Vente enregistrée",
    "sales.payFull": "Tout payé",
    "sales.profit": "Bénéfice",
    "sales.items": "{n} article(s)",
    "sales.detail": "Détail de la facture",
    "purchases.title": "Achats",
    "purchases.new": "Nouvel achat",
    "purchases.empty": "Aucun achat pour le moment",
    "purchases.cost": "Prix d'achat",
    "purchases.voidConfirm": "Annuler cet achat ? Le stock ajouté sera retiré.",
    "purchases.done": "Achat enregistré",
    "purchases.hint": "Le stock et le prix d'achat sont mis à jour automatiquement.",
    "expenses.title": "Dépenses",
    "expenses.add": "Ajouter une dépense",
    "expenses.empty": "Aucune dépense",
    "expenses.deleteConfirm": "Supprimer cette dépense ?",
    "customers.title": "Clients et dettes",
    "customers.add": "Ajouter un client",
    "customers.edit": "Modifier le client",
    "customers.empty": "Pas encore de client",
    "customers.owes": "Doit",
    "customers.credit": "Avoir",
    "customers.settled": "Soldé",
    "customers.addDebt": "Ajouter une dette",
    "customers.addPayment": "Ajouter un paiement",
    "customers.history": "Historique",
    "customers.noHistory": "Aucun mouvement",
    "customers.debt": "Dette",
    "customers.payment": "Paiement",
    "customers.search": "Rechercher un client...",
    "customers.totalDebts": "Total des dettes",
    "customers.showIn": "Afficher en",
    "customers.mad": "Dirham",
    "customers.riyal": "Riyal",
    "customers.rateNote": "1 dirham = 20 riyals. L'affichage en riyal ne concerne que ce carnet; les valeurs d'origine en dirham ne changent pas.",
    "customers.deleteConfirm": "Supprimer « {name} » ?",
    "customers.call": "Appeler",
    "customers.whatsapp": "WhatsApp",
    "customers.fromSale": "Facture",
    "customers.entryDeleteConfirm": "Supprimer ce mouvement ?",
    "customers.amountIn": "Montant en {cur}",
    "studio.title": "Studio marketing",
    "studio.sub": "Créez un visuel prêt en une minute",
    "studio.templates": "Modèles",
    "studio.pick": "Choisissez un modèle",
    "studio.cat.morning": "Bonjour",
    "studio.cat.evening": "Bonsoir",
    "studio.cat.friday": "Vendredi béni",
    "studio.cat.occasions": "Fêtes et occasions",
    "studio.cat.newProduct": "Nouveau produit",
    "studio.cat.offers": "Offres et promos",
    "studio.cat.tips": "Conseils beauté",
    "studio.editor": "Créer le visuel",
    "studio.headline": "Titre",
    "studio.sub2": "Texte secondaire",
    "studio.product": "Nom du produit",
    "studio.price": "Prix",
    "studio.cta": "Appel à l'action",
    "studio.fromStock": "Mes produits",
    "studio.photoPhone": "Photo du téléphone",
    "studio.photoWeb": "Photos gratuites",
    "studio.photoRemove": "Sans photo",
    "studio.colors": "Couleurs",
    "studio.font": "Police",
    "studio.font.sans": "Moderne",
    "studio.font.serif": "Classique",
    "studio.size": "Format",
    "studio.size.square": "Carré",
    "studio.size.portrait": "Portrait",
    "studio.size.story": "Story",
    "studio.showPrice": "Afficher le prix",
    "studio.showLogo": "Afficher le logo",
    "studio.showProduct": "Afficher le produit",
    "studio.overlay": "Assombrir la photo",
    "studio.shareWhatsapp": "Partager",
    "studio.saved": "Image enregistrée dans Documents/AminePara",
    "studio.savedWeb": "Image téléchargée",
    "studio.rendering": "Création de l'image...",
    "studio.preview": "Aperçu",
    "studio.reminders": "Rappels",
    "studio.shareHint": "Choisissez WhatsApp ou Instagram dans le menu.",
    "studio.web.title": "Photos libres de droits",
    "studio.web.search": "Rechercher une photo...",
    "studio.web.keyNeeded": "Pour chercher dans Pexels, saisissez une clé gratuite dans les réglages.",
    "studio.web.credit": "Photo : {name} / Pexels",
    "studio.web.err": "Impossible de charger les photos. Vérifiez la connexion.",
    "studio.web.none": "Aucun résultat",
    "studio.web.hint": "Photos Pexels, gratuites. Le nom du photographe est ajouté automatiquement.",
    "tpl.morning-1.h": "Bonjour",
    "tpl.morning-1.s": "Une belle journée commence par une peau éclatante",
    "tpl.morning-2.h": "Belle matinée",
    "tpl.morning-2.s": "Commencez la journée avec les soins que vous méritez",
    "tpl.evening-1.h": "Bonsoir",
    "tpl.evening-1.s": "Le moment des soins après une longue journée",
    "tpl.evening-2.h": "Douce soirée",
    "tpl.evening-2.s": "Chouchoutez votre peau avant de dormir",
    "tpl.friday-1.h": "Vendredi béni",
    "tpl.friday-1.s": "Que ce vendredi vous apporte paix et bénédictions",
    "tpl.friday-2.h": "Bon vendredi",
    "tpl.friday-2.s": "Bon vendredi à toutes et à tous",
    "tpl.occasion-1.h": "Bonne fête",
    "tpl.occasion-1.s": "Nous vous souhaitons une belle fête pleine de joie",
    "tpl.occasion-2.h": "Joyeuse occasion",
    "tpl.occasion-2.s": "Nos vœux sincères à vous et vos familles",
    "tpl.new-1.h": "Nouveauté",
    "tpl.new-1.s": "Disponible en boutique",
    "tpl.new-2.h": "Notre nouveauté",
    "tpl.new-2.s": "Découvrez le nouveau produit",
    "tpl.offer-1.h": "Offre spéciale",
    "tpl.offer-1.s": "Durée limitée",
    "tpl.offer-2.h": "Promotion",
    "tpl.offer-2.s": "Profitez-en avant la fin du stock",
    "tpl.tips-1.h": "Conseil du jour",
    "tpl.tips-1.s": "Nettoyez votre peau matin et soir, appliquez un écran solaire chaque matin et buvez de l'eau régulièrement.",
    "tpl.tips-2.h": "Cheveux en santé",
    "tpl.tips-2.s": "Limitez la chaleur du sèche-cheveux et nourrissez les pointes avec une huile légère deux fois par semaine.",
    "tpl.cta.offer": "Réservez",
    "tpl.cta.new": "Venez découvrir",
    "settings.title": "Réglages",
    "settings.shop": "Boutique",
    "settings.shopName": "Nom de la boutique",
    "settings.logo": "Logo",
    "settings.logoPick": "Choisir un logo",
    "settings.language": "Langue",
    "settings.reminders": "Rappels (optionnels)",
    "settings.remindersHint": "Des notifications pour penser à créer un visuel. Rien n'est jamais publié automatiquement.",
    "rem.morning": "Rappel chaque matin 8h30",
    "rem.evening": "Rappel chaque soir 18h30",
    "rem.friday": "Rappel chaque vendredi 9h00",
    "rem.occasions": "Rappel des fêtes et occasions",
    "rem.morning.title": "Visuel du matin",
    "rem.morning.body": "Prête pour le visuel du matin ?",
    "rem.evening.title": "Visuel du soir",
    "rem.evening.body": "Le visuel du soir en deux clics.",
    "rem.friday.title": "Vendredi béni",
    "rem.friday.body": "Créez le visuel du vendredi.",
    "rem.occ.title": "Occasion du jour",
    "rem.occ.body": "Aujourd'hui : {name}. Un visuel ?",
    "rem.denied": "L'autorisation des notifications n'est pas accordée. Activez-la dans les réglages du téléphone.",
    "rem.webOnly": "Les rappels fonctionnent seulement dans l'application Android.",
    "rem.on": "Rappels enregistrés",
    "settings.backup": "Sauvegarde",
    "settings.backupHint": "Enregistre toutes vos données dans un fichier. Gardez-le en lieu sûr.",
    "settings.export": "Exporter",
    "settings.import": "Importer",
    "settings.importConfirm": "Tout le contenu de l'application sera remplacé par la sauvegarde. Continuer ?",
    "settings.importDone": "Sauvegarde restaurée",
    "settings.exported": "Sauvegarde enregistrée",
    "settings.about": "À propos",
    "settings.aboutText": "Vos données sont sur votre téléphone et fonctionnent sans internet.",
    "settings.pexels": "Clé Pexels (optionnelle)",
    "settings.pexelsHint": "Gratuite sur pexels.com/api, active la recherche de photos libres dans le studio.",
    "more.title": "Plus",
    "more.purchases": "Achats",
    "more.expenses": "Dépenses",
    "more.reports": "Bénéfices et rapports",
    "more.settings": "Réglages",
    "reports.title": "Bénéfices",
    "reports.range.today": "Aujourd'hui",
    "reports.range.week": "7 jours",
    "reports.range.month": "Mois",
    "reports.range.year": "Année",
    "reports.revenue": "Ventes",
    "reports.cogs": "Coût des marchandises",
    "reports.gross": "Marge brute",
    "reports.expenses": "Dépenses",
    "reports.net": "Bénéfice net",
    "reports.purchases": "Achats",
    "reports.top": "Les plus rentables",
    "reports.invoices": "Factures",
    "occ.newYear": "Nouvel An",
    "occ.manifesto": "Manifeste de l'indépendance",
    "occ.valentine": "Saint-Valentin",
    "occ.womenDay": "Journée de la femme",
    "occ.labour": "Fête du travail",
    "occ.throne": "Fête du Trône",
    "occ.oued": "Récupération de Oued Eddahab",
    "occ.revolution": "Révolution du Roi et du Peuple",
    "occ.youth": "Fête de la jeunesse",
    "occ.greenMarch": "Marche verte",
    "occ.independence": "Fête de l'indépendance",
    "err.generic": "Une erreur inattendue s'est produite",
    "err.nameRequired": "Le nom est obligatoire",
    "err.badPrice": "Prix invalide",
    "err.badQty": "Quantité invalide",
    "err.badAmount": "Montant invalide",
    "err.insufficientStock": "Stock insuffisant pour « {name} » (dispo {stock})",
    "err.emptyCart": "Le panier est vide",
    "err.badPaid": "Montant payé invalide",
    "err.needCustomer": "Choisissez un client pour enregistrer le reste à crédit",
    "err.customerMissing": "Client introuvable",
    "err.productMissing": "Produit introuvable",
    "err.customerHasBalance": "Impossible de supprimer un client avec un solde",
    "err.ledgerFromSale": "Mouvement lié à une facture : annulez la facture",
    "err.saleMissing": "Facture introuvable",
    "err.stockNegative": "Annulation impossible : « {name} » a été vendu après cet achat",
    "err.badBackup": "Fichier de sauvegarde invalide",
    "err.image": "Impossible de lire l'image",
    "err.badType": "Type invalide",
    "err.purchaseMissing": "Achat introuvable"
  }
};
function setLang(l) {
  lang = DICT[l] ? l : "ar";
}
function getLang() {
  return lang;
}
function dir() {
  return lang === "ar" ? "rtl" : "ltr";
}
function t(key, params) {
  let s = DICT[lang][key];
  if (s === undefined)
    s = DICT.ar[key];
  if (s === undefined)
    return key;
  if (params)
    for (const k of Object.keys(params))
      s = s.split("{" + k + "}").join(String(params[k]));
  return s;
}

// www/js/money.js
var AR_INDIC = "٠١٢٣٤٥٦٧٨٩";
var PERSIAN = "۰۱۲۳۴۵۶۷۸۹";
function normalizeNumberText(input) {
  return String(input).replace(/[٠-٩]/g, (d) => AR_INDIC.indexOf(d)).replace(/[۰-۹]/g, (d) => PERSIAN.indexOf(d)).replace(/[٫,]/g, ".").replace(/[\s  ]/g, "");
}
function parseUnits(input, decimals) {
  if (input === null || input === undefined)
    return null;
  const s = normalizeNumberText(input);
  if (!/^\d+(\.\d*)?$|^\.\d+$/.test(s))
    return null;
  const parts = s.split(".");
  const whole = parts[0] || "0";
  let frac = parts[1] || "";
  if (frac.length > decimals) {
    if (/^0*$/.test(frac.slice(decimals)))
      frac = frac.slice(0, decimals);
    else
      return null;
  }
  frac = frac.padEnd(decimals, "0");
  const n = Number(whole + frac);
  return Number.isSafeInteger(n) ? n : null;
}
function parseMAD(input) {
  return parseUnits(input, 2);
}
function parseRiyal(input) {
  const tenths = parseUnits(input, 1);
  if (tenths === null)
    return null;
  if (tenths % 2 !== 0)
    return null;
  return tenths / 2;
}
function group(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
function formatMAD(cents) {
  const neg = cents < 0;
  const a = Math.abs(cents);
  const whole = Math.floor(a / 100);
  const frac = a % 100;
  return (neg ? "-" : "") + group(whole) + "," + String(frac).padStart(2, "0");
}
function riyalTenths(cents) {
  return cents * 2;
}
function formatRiyal(cents) {
  const t = riyalTenths(cents);
  const neg = t < 0;
  const a = Math.abs(t);
  const whole = Math.floor(a / 10);
  const frac = a % 10;
  return (neg ? "-" : "") + group(whole) + (frac ? "," + frac : "");
}
function inputMAD(cents) {
  const a = Math.abs(cents);
  const whole = Math.floor(a / 100);
  const frac = a % 100;
  const s = frac ? `${whole}.${String(frac).padStart(2, "0").replace(/0$/, "")}` : String(whole);
  return (cents < 0 ? "-" : "") + s;
}
function sum(list, pick = (x) => x) {
  let t = 0;
  for (const x of list)
    t += pick(x);
  return t;
}

// www/js/core.js
var app = { store: null, rerender() {}, navigate(h) {
  location.hash = h;
} };
var $ = (sel, root = document) => root.querySelector(sel);
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}
var ICONS = {
  home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  bag: '<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
  sparkles: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  camera: '<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13" r="3.5"/>',
  share: '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  wallet: '<path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 7l12-4v4M17 14h2"/>',
  truck: '<path d="M2 6h11v10H2zM13 9h5l3 3v4h-8z"/><circle cx="6" cy="18" r="1.8"/><circle cx="17" cy="18" r="1.8"/>',
  bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 21h4"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
  minus: '<path d="M5 12h14"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>'
};
function icon(name, cls = "") {
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}
function moneyHtml(cents, { small = true } = {}) {
  return `<span class="money" dir="ltr">${formatMAD(cents)}${small ? ` <small>${t("cur.mad")}</small>` : ""}</span>`;
}
function debtHtml(cents, currency) {
  if (currency === "RIYAL")
    return `<span class="money" dir="ltr">${formatRiyal(cents)} <small>${t("cur.riyal")}</small></span>`;
  return moneyHtml(cents);
}
function locale() {
  return getLang() === "ar" ? "ar-MA-u-nu-latn" : "fr-FR";
}
function timeLabel(ts) {
  return new Date(ts).toLocaleTimeString(locale(), { hour: "2-digit", minute: "2-digit" });
}
function dayHeading(ts) {
  const d = new Date(ts);
  const today = new Date;
  const same = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  if (same(d, today))
    return t("today");
  const y = new Date(today.getTime() - 86400000);
  if (same(d, y))
    return t("yesterday");
  return d.toLocaleDateString(locale(), { weekday: "long", day: "numeric", month: "long" });
}
function errMsg(e) {
  if (e && e.code) {
    const key = "err." + e.code;
    const m = t(key, e.extra || {});
    if (m !== key)
      return m;
  }
  console.error(e);
  return t("err.generic");
}
function toast(msg, kind = "") {
  const layer = document.getElementById("layer");
  layer.querySelectorAll(".toast").forEach((x) => x.remove());
  const el = document.createElement("div");
  el.className = "toast " + kind;
  el.textContent = msg;
  layer.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(() => el.remove(), 250);
  }, 2600);
}
var stack = [];
function openSheet({ title, body, footer = "", full = false, onMount }) {
  const layer = document.getElementById("layer");
  const back = document.createElement("div");
  back.className = "backdrop";
  const el = document.createElement("div");
  el.className = "sheet" + (full ? " full" : "");
  el.setAttribute("role", "dialog");
  el.innerHTML = `<div class="sheet-head"><h3>${esc(title)}</h3><button class="icon-btn" data-close aria-label="${esc(t("close"))}">${icon("x")}</button></div>
    <div class="sheet-body">${body}</div>${footer ? `<div class="sheet-foot">${footer}</div>` : ""}`;
  back.appendChild(el);
  layer.appendChild(back);
  const api = {
    el,
    body: el.querySelector(".sheet-body"),
    foot: el.querySelector(".sheet-foot"),
    close() {
      const i = stack.indexOf(api);
      if (i >= 0)
        stack.splice(i, 1);
      back.classList.remove("open");
      setTimeout(() => back.remove(), 200);
    }
  };
  back.addEventListener("click", (e) => {
    if (e.target === back)
      api.close();
  });
  el.querySelector("[data-close]").addEventListener("click", () => api.close());
  stack.push(api);
  requestAnimationFrame(() => back.classList.add("open"));
  if (onMount)
    onMount(api);
  return api;
}
function closeTopSheet() {
  const s = stack[stack.length - 1];
  if (!s)
    return false;
  s.close();
  return true;
}
function sheetCount() {
  return stack.length;
}
function confirmDialog(message, { okLabel, danger = false } = {}) {
  return new Promise((resolve) => {
    let done = false;
    const finish = (v) => {
      if (!done) {
        done = true;
        resolve(v);
      }
    };
    const sh = openSheet({
      title: t("confirm"),
      body: `<p class="confirm-msg">${esc(message)}</p>`,
      footer: `<button class="btn ghost" data-no>${esc(t("cancel"))}</button><button class="btn ${danger ? "danger" : "primary"}" data-yes>${esc(okLabel || t("ok"))}</button>`
    });
    sh.el.querySelector("[data-no]").onclick = () => {
      finish(false);
      sh.close();
    };
    sh.el.querySelector("[data-yes]").onclick = () => {
      finish(true);
      sh.close();
    };
    sh.el.querySelector("[data-close]").addEventListener("click", () => finish(false));
    sh.el.parentElement.addEventListener("click", (e) => {
      if (e.target === sh.el.parentElement)
        finish(false);
    });
  });
}
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image load failed"));
    img.src = src;
  });
}
async function fileToDataURL(file, maxSide = 600, quality = 0.82) {
  const url = URL.createObjectURL(file);
  try {
    const img = await loadImage(url);
    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    return c.toDataURL("image/jpeg", quality);
  } finally {
    URL.revokeObjectURL(url);
  }
}
function debounce(fn, ms = 120) {
  let h;
  return (...a) => {
    clearTimeout(h);
    h = setTimeout(() => fn(...a), ms);
  };
}
function initials(name) {
  const s = String(name || "").trim();
  return s ? [...s][0].toUpperCase() : "?";
}

// www/js/store.js
class AppError extends Error {
  constructor(code, extra = {}) {
    super(code);
    this.code = code;
    this.extra = extra;
  }
}
var DEFAULT_SETTINGS = {
  lang: "ar",
  shopName: "",
  logo: "",
  debtCurrency: "MAD",
  pexelsKey: "",
  reminders: { morning: false, evening: false, friday: false, occasions: false },
  customOccasions: []
};
function defaultUid() {
  if (globalThis.crypto && crypto.randomUUID)
    return crypto.randomUUID();
  return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}
var isInt = (n) => Number.isInteger(n);
var clone = (o) => JSON.parse(JSON.stringify(o));
function startOfDay(ts) {
  const d = new Date(ts);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
}
function tsFromDay(day) {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(y, m - 1, d, 12, 0, 0).getTime();
}
function createStore(adapter, opts = {}) {
  const now = opts.now || (() => Date.now());
  const uid = opts.uid || defaultUid;
  let state = emptyState();
  const subs = new Set;
  function emptyState() {
    return {
      products: [],
      customers: [],
      sales: [],
      purchases: [],
      expenses: [],
      ledger: [],
      outbox: [],
      settings: clone(DEFAULT_SETTINGS)
    };
  }
  function applyOps(ops) {
    for (const op of ops) {
      if (op.store === "settings") {
        state.settings = op.put;
        continue;
      }
      const list = state[op.store];
      if (op.put) {
        const i = list.findIndex((r) => r.id === op.put.id);
        if (i >= 0)
          list[i] = op.put;
        else
          list.push(op.put);
      } else if (op.del !== undefined) {
        const i = list.findIndex((r) => r.id === op.del);
        if (i >= 0)
          list.splice(i, 1);
      }
    }
  }
  async function commit(ops) {
    const ts = now();
    const outbox = ops.filter((o) => o.store !== "settings" && o.store !== "outbox").map((o) => ({ store: "outbox", put: { id: uid(), store: o.store, recordId: o.put ? o.put.id : o.del, op: o.put ? "upsert" : "delete", ts } }));
    const all = [...ops, ...outbox];
    await adapter.commit(all);
    applyOps(all);
    emit();
  }
  function emit() {
    for (const f of subs) {
      try {
        f();
      } catch (e) {
        console.error(e);
      }
    }
  }
  const byId = (list, id) => list.find((r) => r.id === id);
  const live = (list) => list.filter((r) => !r.deleted);
  const stamp = (r) => ({ ...r, updatedAt: now() });
  const api = {
    subscribe(fn) {
      subs.add(fn);
      return () => subs.delete(fn);
    },
    async load() {
      const data = await adapter.load();
      state = emptyState();
      for (const k of ["products", "customers", "sales", "purchases", "expenses", "ledger", "outbox"])
        state[k] = data[k] || [];
      state.settings = { ...clone(DEFAULT_SETTINGS), ...data.settings || {} };
      state.settings.reminders = { ...DEFAULT_SETTINGS.reminders, ...state.settings.reminders || {} };
      emit();
    },
    get settings() {
      return state.settings;
    },
    async updateSettings(patch) {
      await commit([{ store: "settings", put: { ...state.settings, ...patch } }]);
    },
    products() {
      return live(state.products).sort((a, b) => a.name.localeCompare(b.name));
    },
    product(id) {
      return byId(state.products, id);
    },
    categories() {
      return [...new Set(live(state.products).map((p) => p.category).filter(Boolean))].sort();
    },
    lowStock() {
      return api.products().filter((p) => p.stock <= p.minStock);
    },
    expiringSoon(days = 60) {
      const limit = now() + days * 86400000;
      return api.products().filter((p) => p.expiry && p.stock > 0 && tsFromDay(p.expiry) <= limit).sort((a, b) => a.expiry.localeCompare(b.expiry));
    },
    async saveProduct(input) {
      const name = String(input.name || "").trim();
      if (!name)
        throw new AppError("nameRequired");
      for (const k of ["buyCents", "sellCents"])
        if (!isInt(input[k]) || input[k] < 0)
          throw new AppError("badPrice");
      for (const k of ["stock", "minStock"])
        if (!isInt(input[k]) || input[k] < 0)
          throw new AppError("badQty");
      const prev = input.id ? byId(state.products, input.id) : null;
      const rec = stamp({
        id: prev ? prev.id : uid(),
        createdAt: prev ? prev.createdAt : now(),
        name,
        brand: String(input.brand || "").trim(),
        category: String(input.category || "").trim(),
        barcode: String(input.barcode || "").trim(),
        buyCents: input.buyCents,
        sellCents: input.sellCents,
        stock: input.stock,
        minStock: input.minStock,
        expiry: input.expiry || "",
        photo: input.photo || "",
        deleted: false
      });
      await commit([{ store: "products", put: rec }]);
      return rec;
    },
    async deleteProduct(id) {
      const p = byId(state.products, id);
      if (!p)
        return;
      await commit([{ store: "products", put: stamp({ ...p, deleted: true }) }]);
    },
    customers() {
      return live(state.customers).sort((a, b) => a.name.localeCompare(b.name));
    },
    customer(id) {
      return byId(state.customers, id);
    },
    balance(customerId) {
      let b = 0;
      for (const e of state.ledger) {
        if (e.deleted || e.customerId !== customerId)
          continue;
        b += e.type === "debt" ? e.amountCents : -e.amountCents;
      }
      return b;
    },
    totalDebts() {
      return sum(api.customers().map((c) => Math.max(0, api.balance(c.id))));
    },
    ledgerOf(customerId) {
      return live(state.ledger).filter((e) => e.customerId === customerId).sort((a, b) => b.ts - a.ts);
    },
    async saveCustomer(input) {
      const name = String(input.name || "").trim();
      if (!name)
        throw new AppError("nameRequired");
      const prev = input.id ? byId(state.customers, input.id) : null;
      const rec = stamp({
        id: prev ? prev.id : uid(),
        createdAt: prev ? prev.createdAt : now(),
        name,
        phone: String(input.phone || "").trim(),
        note: String(input.note || "").trim(),
        deleted: false
      });
      await commit([{ store: "customers", put: rec }]);
      return rec;
    },
    async deleteCustomer(id) {
      const c = byId(state.customers, id);
      if (!c)
        return;
      if (api.balance(id) !== 0)
        throw new AppError("customerHasBalance");
      await commit([{ store: "customers", put: stamp({ ...c, deleted: true }) }]);
    },
    async addLedger({ customerId, type, amountCents, note = "", ts }) {
      if (!byId(state.customers, customerId))
        throw new AppError("customerMissing");
      if (type !== "debt" && type !== "payment")
        throw new AppError("badType");
      if (!isInt(amountCents) || amountCents <= 0)
        throw new AppError("badAmount");
      const rec = stamp({ id: uid(), customerId, type, amountCents, note: String(note).trim(), ts: ts || now(), saleId: null, deleted: false });
      await commit([{ store: "ledger", put: rec }]);
      return rec;
    },
    async deleteLedger(id) {
      const e = byId(state.ledger, id);
      if (!e)
        return;
      if (e.saleId)
        throw new AppError("ledgerFromSale");
      await commit([{ store: "ledger", put: stamp({ ...e, deleted: true }) }]);
    },
    sales() {
      return live(state.sales).sort((a, b) => b.ts - a.ts);
    },
    sale(id) {
      return byId(state.sales, id);
    },
    async createSale({ customerId = null, items, paidCents, note = "", ts }) {
      if (!items || !items.length)
        throw new AppError("emptyCart");
      const working = new Map;
      const lines = [];
      let total = 0;
      for (const it of items) {
        const p = byId(state.products, it.productId);
        if (!p || p.deleted)
          throw new AppError("productMissing");
        if (!isInt(it.qty) || it.qty < 1)
          throw new AppError("badQty");
        if (!isInt(it.unitPriceCents) || it.unitPriceCents < 0)
          throw new AppError("badPrice");
        const wp = working.get(p.id) || { ...p };
        if (it.qty > wp.stock)
          throw new AppError("insufficientStock", { name: p.name, stock: wp.stock });
        wp.stock -= it.qty;
        working.set(p.id, wp);
        lines.push({ productId: p.id, name: p.name, qty: it.qty, unitPriceCents: it.unitPriceCents, unitCostCents: p.buyCents });
        total += it.qty * it.unitPriceCents;
      }
      const paid = paidCents === undefined || paidCents === null ? total : paidCents;
      if (!isInt(paid) || paid < 0 || paid > total)
        throw new AppError("badPaid");
      const remainder = total - paid;
      if (remainder > 0) {
        if (!customerId)
          throw new AppError("needCustomer");
        if (!byId(state.customers, customerId))
          throw new AppError("customerMissing");
      }
      const saleTs = ts || now();
      const sale = stamp({ id: uid(), ts: saleTs, customerId: customerId || null, items: lines, totalCents: total, paidCents: paid, note: String(note).trim(), deleted: false });
      const ops = [{ store: "sales", put: sale }];
      for (const wp of working.values())
        ops.push({ store: "products", put: stamp(wp) });
      if (remainder > 0) {
        ops.push({ store: "ledger", put: stamp({ id: uid(), customerId, type: "debt", amountCents: remainder, note: "", ts: saleTs, saleId: sale.id, deleted: false }) });
      }
      await commit(ops);
      return sale;
    },
    async voidSale(id) {
      const s = byId(state.sales, id);
      if (!s || s.deleted)
        throw new AppError("saleMissing");
      const ops = [{ store: "sales", put: stamp({ ...s, deleted: true }) }];
      const working = new Map;
      for (const it of s.items) {
        const p = working.get(it.productId) || byId(state.products, it.productId);
        if (!p)
          continue;
        working.set(p.id, { ...p, stock: p.stock + it.qty });
      }
      for (const p of working.values())
        ops.push({ store: "products", put: stamp(p) });
      for (const e of state.ledger)
        if (e.saleId === id && !e.deleted)
          ops.push({ store: "ledger", put: stamp({ ...e, deleted: true }) });
      await commit(ops);
    },
    purchases() {
      return live(state.purchases).sort((a, b) => b.ts - a.ts);
    },
    async createPurchase({ supplier = "", items, note = "", ts }) {
      if (!items || !items.length)
        throw new AppError("emptyCart");
      const working = new Map;
      const lines = [];
      let total = 0;
      for (const it of items) {
        const p = byId(state.products, it.productId);
        if (!p || p.deleted)
          throw new AppError("productMissing");
        if (!isInt(it.qty) || it.qty < 1)
          throw new AppError("badQty");
        if (!isInt(it.unitCostCents) || it.unitCostCents < 0)
          throw new AppError("badPrice");
        const wp = working.get(p.id) || { ...p };
        wp.stock += it.qty;
        wp.buyCents = it.unitCostCents;
        working.set(p.id, wp);
        lines.push({ productId: p.id, name: p.name, qty: it.qty, unitCostCents: it.unitCostCents });
        total += it.qty * it.unitCostCents;
      }
      const rec = stamp({ id: uid(), ts: ts || now(), supplier: String(supplier).trim(), items: lines, totalCents: total, note: String(note).trim(), deleted: false });
      const ops = [{ store: "purchases", put: rec }];
      for (const wp of working.values())
        ops.push({ store: "products", put: stamp(wp) });
      await commit(ops);
      return rec;
    },
    async voidPurchase(id) {
      const pu = byId(state.purchases, id);
      if (!pu || pu.deleted)
        throw new AppError("purchaseMissing");
      const working = new Map;
      for (const it of pu.items) {
        const p = working.get(it.productId) || byId(state.products, it.productId);
        if (!p)
          continue;
        const next = { ...p, stock: p.stock - it.qty };
        if (next.stock < 0)
          throw new AppError("stockNegative", { name: p.name });
        working.set(p.id, next);
      }
      const ops = [{ store: "purchases", put: stamp({ ...pu, deleted: true }) }];
      for (const p of working.values())
        ops.push({ store: "products", put: stamp(p) });
      await commit(ops);
    },
    expenses() {
      return live(state.expenses).sort((a, b) => b.ts - a.ts);
    },
    async addExpense({ label, amountCents, ts }) {
      const l = String(label || "").trim();
      if (!l)
        throw new AppError("nameRequired");
      if (!isInt(amountCents) || amountCents <= 0)
        throw new AppError("badAmount");
      const rec = stamp({ id: uid(), label: l, amountCents, ts: ts || now(), deleted: false });
      await commit([{ store: "expenses", put: rec }]);
      return rec;
    },
    async deleteExpense(id) {
      const e = byId(state.expenses, id);
      if (!e)
        return;
      await commit([{ store: "expenses", put: stamp({ ...e, deleted: true }) }]);
    },
    report(fromTs, toTs) {
      return computeReport({ sales: live(state.sales), expenses: live(state.expenses), purchases: live(state.purchases) }, fromTs, toTs);
    },
    exportData() {
      return {
        app: "amine-para",
        version: 1,
        exportedAt: now(),
        data: {
          products: state.products,
          customers: state.customers,
          sales: state.sales,
          purchases: state.purchases,
          expenses: state.expenses,
          ledger: state.ledger,
          settings: state.settings
        }
      };
    },
    async importData(obj) {
      if (!obj || obj.app !== "amine-para" || !obj.data)
        throw new AppError("badBackup");
      const d = obj.data;
      const lists = ["products", "customers", "sales", "purchases", "expenses", "ledger"];
      for (const k of lists)
        if (!Array.isArray(d[k]))
          throw new AppError("badBackup");
      await adapter.clear();
      const ops = [];
      for (const k of lists)
        for (const r of d[k])
          ops.push({ store: k, put: r });
      ops.push({ store: "settings", put: { ...clone(DEFAULT_SETTINGS), ...d.settings || {} } });
      await adapter.commit(ops);
      await api.load();
    }
  };
  return api;
}
function computeReport({ sales, expenses, purchases }, fromTs, toTs) {
  const inRange = (r) => r.ts >= fromTs && r.ts < toTs;
  const ss = sales.filter(inRange);
  const revenue = sum(ss, (s) => s.totalCents);
  const cogs = sum(ss, (s) => sum(s.items, (i) => i.qty * i.unitCostCents));
  const gross = revenue - cogs;
  const exp = sum(expenses.filter(inRange), (e) => e.amountCents);
  const bought = sum(purchases.filter(inRange), (p) => p.totalCents);
  const byProduct = new Map;
  for (const s of ss) {
    for (const i of s.items) {
      const cur = byProduct.get(i.productId) || { productId: i.productId, name: i.name, qty: 0, profit: 0 };
      cur.qty += i.qty;
      cur.profit += i.qty * (i.unitPriceCents - i.unitCostCents);
      byProduct.set(i.productId, cur);
    }
  }
  const top = [...byProduct.values()].sort((a, b) => b.profit - a.profit).slice(0, 5);
  return { count: ss.length, revenue, cogs, gross, expenses: exp, net: gross - exp, purchases: bought, top };
}

// www/js/db.js
var STORES = ["products", "customers", "sales", "purchases", "expenses", "ledger", "outbox"];
function createMemoryAdapter(initial = {}) {
  const data = {};
  for (const s of STORES)
    data[s] = new Map((initial[s] || []).map((r) => [r.id, r]));
  let settings = initial.settings || null;
  return {
    kind: "memory",
    async load() {
      const out = { settings };
      for (const s of STORES)
        out[s] = [...data[s].values()];
      return out;
    },
    async commit(ops) {
      for (const op of ops) {
        if (op.store === "settings") {
          settings = op.put;
          continue;
        }
        if (op.put)
          data[op.store].set(op.put.id, structuredClone(op.put));
        else if (op.del !== undefined)
          data[op.store].delete(op.del);
      }
    },
    async clear() {
      for (const s of STORES)
        data[s].clear();
      settings = null;
    }
  };
}
function createIndexedDBAdapter(name = "amine-para") {
  let dbp = null;
  function open() {
    if (dbp)
      return dbp;
    dbp = new Promise((resolve, reject) => {
      const req = indexedDB.open(name, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        for (const s of STORES)
          if (!db.objectStoreNames.contains(s))
            db.createObjectStore(s, { keyPath: "id" });
        if (!db.objectStoreNames.contains("settings"))
          db.createObjectStore("settings", { keyPath: "id" });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return dbp;
  }
  const reqP = (r) => new Promise((res, rej) => {
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
  return {
    kind: "indexeddb",
    async load() {
      const db = await open();
      const out = {};
      for (const s of STORES)
        out[s] = await reqP(db.transaction(s).objectStore(s).getAll());
      const st = await reqP(db.transaction("settings").objectStore("settings").get("main"));
      out.settings = st ? st.value : null;
      return out;
    },
    async commit(ops) {
      if (!ops.length)
        return;
      const db = await open();
      const names = [...new Set(ops.map((o) => o.store))];
      await new Promise((resolve, reject) => {
        const tx = db.transaction(names, "readwrite");
        for (const op of ops) {
          const os = tx.objectStore(op.store);
          if (op.store === "settings")
            os.put({ id: "main", value: op.put });
          else if (op.put)
            os.put(op.put);
          else if (op.del !== undefined)
            os.delete(op.del);
        }
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
        tx.onabort = () => reject(tx.error || new Error("tx aborted"));
      });
    },
    async clear() {
      const db = await open();
      const names = [...STORES, "settings"];
      await new Promise((resolve, reject) => {
        const tx = db.transaction(names, "readwrite");
        for (const s of names)
          tx.objectStore(s).clear();
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    }
  };
}

// www/js/platform.js
var cap = () => typeof window !== "undefined" ? window.Capacitor : undefined;
var isNative = () => !!(cap() && cap().isNativePlatform && cap().isNativePlatform());
var plugin = (name) => cap() && cap().Plugins ? cap().Plugins[name] : undefined;
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader;
    r.onload = () => resolve(String(r.result).split(",")[1] || "");
    r.onerror = () => reject(r.error);
    r.readAsDataURL(blob);
  });
}
function webDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}
async function shareFile(blob, filename, { title = "", text = "" } = {}) {
  const FS = plugin("Filesystem");
  const Share = plugin("Share");
  if (isNative() && FS && Share) {
    const data = await blobToBase64(blob);
    const res = await FS.writeFile({ path: filename, data, directory: "CACHE" });
    await Share.share({ title, text, files: [res.uri], dialogTitle: title });
    return "shared";
  }
  const file = new File([blob], filename, { type: blob.type });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({ files: [file], title, text });
    return "shared";
  }
  webDownload(blob, filename);
  return "downloaded";
}
async function saveFile(blob, filename, opts = {}) {
  const FS = plugin("Filesystem");
  if (isNative() && FS) {
    try {
      const data = await blobToBase64(blob);
      await FS.writeFile({ path: `AminePara/${filename}`, data, directory: "DOCUMENTS", recursive: true });
      return "saved";
    } catch (e) {
      console.warn("save failed, falling back to share", e);
      return shareFile(blob, filename, opts);
    }
  }
  webDownload(blob, filename);
  return "downloaded";
}
function canvasToBlob(canvas, type = "image/png", quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => b ? resolve(b) : reject(new Error("toBlob failed")), type, quality);
  });
}
function onBackButton(handler) {
  const App = plugin("App");
  if (App && App.addListener) {
    App.addListener("backButton", () => {
      const handled = handler();
      if (!handled && App.exitApp)
        App.exitApp();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape")
      handler();
  });
}
var FIXED_OCCASIONS = [
  { key: "newYear", month: 1, day: 1 },
  { key: "manifesto", month: 1, day: 11 },
  { key: "valentine", month: 2, day: 14 },
  { key: "womenDay", month: 3, day: 8 },
  { key: "labour", month: 5, day: 1 },
  { key: "throne", month: 7, day: 30 },
  { key: "oued", month: 8, day: 14 },
  { key: "revolution", month: 8, day: 20 },
  { key: "youth", month: 8, day: 21 },
  { key: "greenMarch", month: 11, day: 6 },
  { key: "independence", month: 11, day: 18 }
];
var ID = { morning: 1, evening: 2, friday: 3, fixedBase: 100, customBase: 200 };
function nextOccurrence(month, day, hour = 9, minute = 0) {
  const n = new Date;
  let d = new Date(n.getFullYear(), month - 1, day, hour, minute);
  if (d.getTime() <= n.getTime())
    d = new Date(n.getFullYear() + 1, month - 1, day, hour, minute);
  return d;
}
function buildReminders(settings, tr) {
  const out = [];
  const r = settings.reminders || {};
  if (r.morning)
    out.push({ id: ID.morning, title: tr("rem.morning.title"), body: tr("rem.morning.body"), schedule: { on: { hour: 8, minute: 30 }, allowWhileIdle: true } });
  if (r.evening)
    out.push({ id: ID.evening, title: tr("rem.evening.title"), body: tr("rem.evening.body"), schedule: { on: { hour: 18, minute: 30 }, allowWhileIdle: true } });
  if (r.friday)
    out.push({ id: ID.friday, title: tr("rem.friday.title"), body: tr("rem.friday.body"), schedule: { on: { weekday: 6, hour: 9, minute: 0 }, allowWhileIdle: true } });
  if (r.occasions) {
    FIXED_OCCASIONS.forEach((o, i) => {
      out.push({
        id: ID.fixedBase + i,
        title: tr("rem.occ.title"),
        body: tr("rem.occ.body", { name: tr("occ." + o.key) }),
        schedule: { at: nextOccurrence(o.month, o.day), repeats: true, every: "year", allowWhileIdle: true }
      });
    });
    (settings.customOccasions || []).forEach((o, i) => {
      out.push({
        id: ID.customBase + i,
        title: tr("rem.occ.title"),
        body: tr("rem.occ.body", { name: o.name }),
        schedule: { at: nextOccurrence(o.month, o.day), repeats: true, every: "year", allowWhileIdle: true }
      });
    });
  }
  return out;
}
async function applyReminders(settings, tr) {
  const LN = plugin("LocalNotifications");
  if (!isNative() || !LN)
    return { supported: false };
  const items = buildReminders(settings, tr);
  const pending = await LN.getPending();
  const ours = (pending.notifications || []).filter((n) => n.id < 1000).map((n) => ({ id: n.id }));
  if (ours.length)
    await LN.cancel({ notifications: ours });
  if (!items.length)
    return { supported: true, granted: true, count: 0 };
  const perm = await LN.requestPermissions();
  if (perm.display !== "granted")
    return { supported: true, granted: false };
  await LN.schedule({ notifications: items });
  return { supported: true, granted: true, count: items.length };
}

// www/js/v-more.js
function renderMore(view) {
  const items = [
    ["#/reports", "chart", "more.reports"],
    ["#/purchases", "truck", "more.purchases"],
    ["#/expenses", "wallet", "more.expenses"],
    ["#/settings", "gear", "more.settings"]
  ];
  view.innerHTML = `<div class="page-head"><h2>${esc(t("more.title"))}</h2></div><div class="list">${items.map(([h, ic, k]) => `<a class="row" href="${h}">${icon(ic, "lead")}<div class="row-body"><div class="row-title">${esc(t(k))}</div></div>${icon("back", "chev")}</a>`).join("")}</div>`;
}
function renderPurchases(view) {
  const st = app.store;
  const list = st.purchases();
  let html = `<div class="page-head"><a class="icon-btn" href="#/more" aria-label="${esc(t("back"))}">${icon("back")}</a><h2>${esc(t("purchases.title"))}</h2></div>`;
  if (!list.length)
    html += `<div class="empty">${icon("truck")}<p>${esc(t("purchases.empty"))}</p></div>`;
  else {
    let last = "";
    html += '<div class="list">';
    for (const p of list) {
      const h = dayHeading(p.ts);
      if (h !== last) {
        html += `<div class="day-head">${esc(h)}</div>`;
        last = h;
      }
      html += `<button class="row" data-id="${p.id}"><div class="row-body"><div class="row-title">${esc(p.supplier || p.items.map((i) => i.name).join("، ").slice(0, 50))}</div><div class="row-sub">${esc(timeLabel(p.ts))} · ${esc(t("sales.items", { n: p.items.reduce((a, i) => a + i.qty, 0) }))}</div></div><div class="row-end">${moneyHtml(p.totalCents)}</div></button>`;
    }
    html += "</div>";
  }
  html += `<button class="fab" id="add" aria-label="${esc(t("purchases.new"))}">${icon("plus")}</button>`;
  view.innerHTML = html;
  $("#add", view).onclick = openNewPurchase;
  view.querySelectorAll(".row").forEach((r) => {
    r.onclick = () => openPurchaseDetail(r.dataset.id);
  });
}
function openPurchaseDetail(id) {
  const p = app.store.purchases().find((x) => x.id === id);
  if (!p)
    return;
  openSheet({
    title: t("purchases.title"),
    body: `<div class="muted">${esc(dayHeading(p.ts))}${p.supplier ? " · " + esc(p.supplier) : ""}</div><div class="list tight">${p.items.map((i) => `<div class="row static"><div class="row-body"><div class="row-title">${esc(i.name)}</div><div class="row-sub">${i.qty} × ${formatMAD(i.unitCostCents)}</div></div><div class="row-end">${moneyHtml(i.qty * i.unitCostCents)}</div></div>`).join("")}</div><div class="sum-row"><span>${esc(t("total"))}</span>${moneyHtml(p.totalCents)}</div>`,
    footer: `<button class="btn danger-ghost grow" id="void">${icon("trash")} ${esc(t("delete"))}</button>`,
    onMount(sh) {
      $("#void", sh.el).onclick = async () => {
        if (!await confirmDialog(t("purchases.voidConfirm"), { danger: true, okLabel: t("delete") }))
          return;
        try {
          await app.store.voidPurchase(id);
          sh.close();
          toast(t("deleted"));
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
    }
  });
}
function openNewPurchase() {
  const st = app.store;
  const lines = [];
  const body = `
    <p class="muted">${esc(t("purchases.hint"))}</p>
    <label class="field"><span>${esc(t("f.supplier"))}</span><input id="sup" autocomplete="off"></label>
    <label class="field"><span>${esc(t("products.title"))}</span><select id="pick"><option value="">—</option>${st.products().map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select></label>
    <div id="lines" class="list tight"></div>`;
  openSheet({
    title: t("purchases.new"),
    body,
    full: true,
    footer: `<div class="total-box"><small>${esc(t("total"))}</small><b id="tot" dir="ltr">0,00</b></div><button class="btn primary grow" id="ok">${esc(t("save"))}</button>`,
    onMount(sh) {
      const el = sh.el;
      const draw = () => {
        $("#lines", el).innerHTML = lines.map((l, i) => {
          const p = st.product(l.productId);
          return `<div class="row static" data-i="${i}"><div class="row-body"><div class="row-title">${esc(p.name)}</div>
            <div class="row-sub"><input class="price-in" inputmode="decimal" dir="ltr" value="${inputMAD(l.unitCostCents)}" aria-label="${esc(t("purchases.cost"))}"> ${esc(t("cur.mad"))}</div></div>
            <div class="qty"><button class="icon-btn" data-dec>${icon("minus")}</button><b>${l.qty}</b><button class="icon-btn" data-inc>${icon("plus")}</button></div></div>`;
        }).join("");
        $("#tot", el).textContent = formatMAD(lines.reduce((a, l) => a + l.qty * l.unitCostCents, 0));
        el.querySelectorAll("#lines .row").forEach((row) => {
          const i = Number(row.dataset.i);
          row.querySelector("[data-inc]").onclick = () => {
            lines[i].qty++;
            draw();
          };
          row.querySelector("[data-dec]").onclick = () => {
            lines[i].qty--;
            if (lines[i].qty < 1)
              lines.splice(i, 1);
            draw();
          };
          row.querySelector(".price-in").onchange = (e) => {
            const v = parseMAD(e.target.value);
            if (v === null) {
              toast(t("err.badPrice"), "error");
              e.target.value = inputMAD(lines[i].unitCostCents);
            } else {
              lines[i].unitCostCents = v;
              draw();
            }
          };
        });
      };
      $("#pick", el).onchange = (e) => {
        const id = e.target.value;
        if (!id)
          return;
        const ex = lines.find((l) => l.productId === id);
        if (ex)
          ex.qty++;
        else
          lines.push({ productId: id, qty: 1, unitCostCents: st.product(id).buyCents });
        e.target.value = "";
        draw();
      };
      draw();
      $("#ok", el).onclick = async () => {
        try {
          await app.store.createPurchase({ supplier: $("#sup", el).value, items: lines });
          sh.close();
          toast(t("purchases.done"), "ok");
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
    }
  });
}
function renderExpenses(view) {
  const list = app.store.expenses();
  let html = `<div class="page-head"><a class="icon-btn" href="#/more" aria-label="${esc(t("back"))}">${icon("back")}</a><h2>${esc(t("expenses.title"))}</h2></div>`;
  if (!list.length)
    html += `<div class="empty">${icon("wallet")}<p>${esc(t("expenses.empty"))}</p></div>`;
  else {
    let last = "";
    html += '<div class="list">';
    for (const e of list) {
      const h = dayHeading(e.ts);
      if (h !== last) {
        html += `<div class="day-head">${esc(h)}</div>`;
        last = h;
      }
      html += `<button class="row" data-id="${e.id}"><div class="row-body"><div class="row-title">${esc(e.label)}</div></div><div class="row-end">${moneyHtml(e.amountCents)}</div></button>`;
    }
    html += "</div>";
  }
  html += `<button class="fab" id="add" aria-label="${esc(t("expenses.add"))}">${icon("plus")}</button>`;
  view.innerHTML = html;
  $("#add", view).onclick = () => {
    openSheet({
      title: t("expenses.add"),
      body: `<label class="field"><span>${esc(t("f.label"))} *</span><input id="lbl" autocomplete="off"></label><label class="field"><span>${esc(t("f.amount"))} (${esc(t("cur.mad"))}) *</span><input id="amt" inputmode="decimal" dir="ltr"></label>`,
      footer: `<button class="btn primary grow" id="ok">${esc(t("save"))}</button>`,
      onMount(sh) {
        $("#ok", sh.el).onclick = async () => {
          const v = parseMAD($("#amt", sh.el).value);
          if (v === null)
            return toast(t("err.badAmount"), "error");
          try {
            await app.store.addExpense({ label: $("#lbl", sh.el).value, amountCents: v });
            sh.close();
            toast(t("saved"), "ok");
          } catch (e) {
            toast(errMsg(e), "error");
          }
        };
      }
    });
  };
  view.querySelectorAll(".row").forEach((r) => {
    r.onclick = async () => {
      if (await confirmDialog(t("expenses.deleteConfirm"), { danger: true, okLabel: t("delete") })) {
        await app.store.deleteExpense(r.dataset.id);
        toast(t("deleted"));
      }
    };
  });
}
var range = "month";
function rangeBounds(key, nowTs = Date.now()) {
  const sod = startOfDay(nowTs);
  const d = new Date(nowTs);
  const day = 86400000;
  if (key === "today")
    return [sod, sod + day];
  if (key === "week")
    return [sod - 6 * day, sod + day];
  if (key === "year")
    return [new Date(d.getFullYear(), 0, 1).getTime(), new Date(d.getFullYear() + 1, 0, 1).getTime()];
  return [new Date(d.getFullYear(), d.getMonth(), 1).getTime(), new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime()];
}
function renderReports(view) {
  const [from, to] = rangeBounds(range);
  const r = app.store.report(from, to);
  const line = (k, c, cls = "") => `<div class="sum-row ${cls}"><span>${esc(t(k))}</span>${moneyHtml(c)}</div>`;
  view.innerHTML = `<div class="page-head"><a class="icon-btn" href="#/more" aria-label="${esc(t("back"))}">${icon("back")}</a><h2>${esc(t("reports.title"))}</h2></div>
    <div class="chips">${["today", "week", "month", "year"].map((k) => `<button class="chip ${range === k ? "on" : ""}" data-r="${k}">${esc(t("reports.range." + k))}</button>`).join("")}</div>
    <div class="hero-card"><small>${esc(t("reports.net"))}</small><div class="hero-num">${moneyHtml(r.net)}</div></div>
    <div class="card">${line("reports.revenue", r.revenue)}${line("reports.cogs", -r.cogs)}${line("reports.gross", r.gross, "strong")}${line("reports.expenses", -r.expenses)}${line("reports.net", r.net, "strong")}</div>
    <div class="card">${line("reports.purchases", r.purchases)}<div class="sum-row"><span>${esc(t("reports.invoices"))}</span><b>${r.count}</b></div></div>
    ${r.top.length ? `<h4 class="sec">${esc(t("reports.top"))}</h4><div class="list tight">${r.top.map((p) => `<div class="row static"><div class="row-body"><div class="row-title">${esc(p.name)}</div><div class="row-sub">${p.qty}</div></div><div class="row-end">${moneyHtml(p.profit)}</div></div>`).join("")}</div>` : ""}`;
  view.querySelectorAll("[data-r]").forEach((b) => {
    b.onclick = () => {
      range = b.dataset.r;
      renderReports(view);
    };
  });
}

// www/js/v-products.js
var q = "";
var filter = "all";
function stockBadge(p) {
  if (p.stock <= 0)
    return `<span class="badge danger">${esc(t("products.out"))}</span>`;
  if (p.stock <= p.minStock)
    return `<span class="badge warn">${p.stock} · ${esc(t("products.low"))}</span>`;
  return `<span class="badge ok">${p.stock}</span>`;
}
function productThumb(p, cls = "") {
  return p.photo ? `<div class="thumb ${cls}"><img src="${p.photo}" alt=""></div>` : `<div class="thumb ${cls}"><span>${esc(initials(p.name))}</span></div>`;
}
function expiryNote(p) {
  if (!p.expiry)
    return "";
  const days = Math.round((tsFromDay(p.expiry) - Date.now()) / 86400000);
  if (days > 60)
    return "";
  const cls = days < 0 ? "danger" : "warn";
  const label = days < 0 ? t("products.expired") : t("products.expiresIn", { n: days });
  return `<span class="badge ${cls}">${esc(label)}</span>`;
}
function renderProducts(view) {
  view.innerHTML = `
    <div class="search">${icon("search")}<input id="q" type="search" autocomplete="off" placeholder="${esc(t("products.search"))}" value="${esc(q)}"></div>
    <div class="chips" id="chips">${["all", "low", "expiring"].map((k) => `<button class="chip ${filter === k ? "on" : ""}" data-f="${k}">${esc(t("products.f." + k))}</button>`).join("")}</div>
    <div id="plist" class="list"></div>
    <button class="fab" id="add" aria-label="${esc(t("products.add"))}">${icon("plus")}</button>`;
  const draw = () => {
    const st = app.store;
    let list = st.products();
    const s = q.trim().toLowerCase();
    if (s)
      list = list.filter((p) => [p.name, p.brand, p.category, p.barcode].some((x) => String(x || "").toLowerCase().includes(s)));
    if (filter === "low")
      list = list.filter((p) => p.stock <= p.minStock);
    if (filter === "expiring") {
      const ids = new Set(st.expiringSoon(60).map((p) => p.id));
      list = list.filter((p) => ids.has(p.id));
    }
    const box = $("#plist", view);
    if (!list.length) {
      box.innerHTML = `<div class="empty">${icon("box")}<p>${esc(st.products().length ? t("products.noMatch") : t("products.empty"))}</p>${st.products().length ? "" : `<button class="btn primary" data-add>${esc(t("products.add"))}</button>`}</div>`;
      const b = $("[data-add]", box);
      if (b)
        b.onclick = () => openProductForm();
      return;
    }
    box.innerHTML = list.map((p) => `
      <button class="row" data-id="${p.id}">
        ${productThumb(p)}
        <div class="row-body">
          <div class="row-title">${esc(p.name)}</div>
          <div class="row-sub">${esc([p.brand, p.category].filter(Boolean).join(" · ") || " ")} ${expiryNote(p)}</div>
        </div>
        <div class="row-end">${moneyHtml(p.sellCents)}${stockBadge(p)}</div>
      </button>`).join("");
    box.querySelectorAll(".row").forEach((r) => {
      r.onclick = () => openProductForm(app.store.product(r.dataset.id));
    });
  };
  draw();
  $("#q", view).oninput = debounce((e) => {
    q = e.target.value;
    draw();
  }, 100);
  view.querySelectorAll("[data-f]").forEach((b) => {
    b.onclick = () => {
      filter = b.dataset.f;
      view.querySelectorAll("[data-f]").forEach((x) => x.classList.toggle("on", x === b));
      draw();
    };
  });
  $("#add", view).onclick = () => openProductForm();
}
function openProductForm(product = null, onDone) {
  const st = app.store;
  const p = product || { name: "", brand: "", category: "", barcode: "", buyCents: 0, sellCents: 0, stock: 0, minStock: 2, expiry: "", photo: "" };
  let photo = p.photo || "";
  const body = `
    <div class="photo-pick">
      <div class="thumb big" id="ph"></div>
      <div class="stack">
        <label class="btn ghost small"><input type="file" accept="image/*" hidden id="file">${icon("camera")} ${esc(t("products.photo"))}</label>
        <button class="btn text small" id="ph-rm" type="button">${esc(t("products.photoRemove"))}</button>
      </div>
    </div>
    <label class="field"><span>${esc(t("f.name"))} *</span><input id="f-name" value="${esc(p.name)}" autocomplete="off"></label>
    <div class="grid2">
      <label class="field"><span>${esc(t("f.brand"))}</span><input id="f-brand" value="${esc(p.brand)}" autocomplete="off"></label>
      <label class="field"><span>${esc(t("f.category"))}</span><input id="f-cat" value="${esc(p.category)}" list="cats" autocomplete="off"><datalist id="cats">${st.categories().map((c) => `<option value="${esc(c)}">`).join("")}</datalist></label>
    </div>
    <div class="grid2">
      <label class="field"><span>${esc(t("f.buy"))} (${esc(t("cur.mad"))})</span><input id="f-buy" inputmode="decimal" value="${p.buyCents ? inputMAD(p.buyCents) : ""}" placeholder="0"></label>
      <label class="field"><span>${esc(t("f.sell"))} (${esc(t("cur.mad"))}) *</span><input id="f-sell" inputmode="decimal" value="${p.sellCents ? inputMAD(p.sellCents) : ""}" placeholder="0"></label>
    </div>
    <div class="hint" id="margin"></div>
    <div class="grid2">
      <label class="field"><span>${esc(t("f.stock"))}</span><input id="f-stock" inputmode="numeric" value="${p.stock}"></label>
      <label class="field"><span>${esc(t("f.minStock"))}</span><input id="f-min" inputmode="numeric" value="${p.minStock}"></label>
    </div>
    <div class="grid2">
      <label class="field"><span>${esc(t("f.expiry"))}</span><input id="f-exp" type="date" value="${esc(p.expiry)}"></label>
      <label class="field"><span>${esc(t("f.barcode"))}</span><input id="f-bar" value="${esc(p.barcode)}" inputmode="numeric" autocomplete="off"></label>
    </div>`;
  const footer = `${product ? `<button class="btn danger-ghost" id="del">${icon("trash")}</button>` : ""}<button class="btn primary grow" id="save">${esc(t("save"))}</button>`;
  openSheet({
    title: product ? t("products.edit") : t("products.add"),
    body,
    footer,
    full: true,
    onMount(sh) {
      const el = sh.el;
      const drawPhoto = () => {
        $("#ph", el).innerHTML = photo ? `<img src="${photo}" alt="">` : icon("camera");
      };
      drawPhoto();
      const margin = () => {
        const b = parseMAD($("#f-buy", el).value || "0");
        const s = parseMAD($("#f-sell", el).value || "0");
        $("#margin", el).innerHTML = b !== null && s !== null && s > 0 ? `${esc(t("products.margin"))}: <b>${formatMAD(s - b)} ${esc(t("cur.mad"))}</b>` : "";
      };
      margin();
      $("#f-buy", el).oninput = margin;
      $("#f-sell", el).oninput = margin;
      $("#file", el).onchange = async (e) => {
        const f = e.target.files[0];
        if (!f)
          return;
        try {
          photo = await fileToDataURL(f, 600, 0.82);
          drawPhoto();
        } catch (err) {
          toast(t("err.image"), "error");
        }
      };
      $("#ph-rm", el).onclick = () => {
        photo = "";
        drawPhoto();
      };
      const intVal = (id) => {
        const v = $(id, el).value.trim();
        if (v === "")
          return 0;
        const n = Number(v);
        return Number.isInteger(n) && n >= 0 ? n : NaN;
      };
      $("#save", el).onclick = async () => {
        const buyText = $("#f-buy", el).value.trim();
        const sellText = $("#f-sell", el).value.trim();
        const buy = buyText === "" ? 0 : parseMAD(buyText);
        const sell = sellText === "" ? null : parseMAD(sellText);
        if (buy === null || sell === null)
          return toast(t("err.badPrice"), "error");
        const stock = intVal("#f-stock");
        const min = intVal("#f-min");
        if (Number.isNaN(stock) || Number.isNaN(min))
          return toast(t("err.badQty"), "error");
        try {
          const rec = await app.store.saveProduct({
            id: product ? product.id : undefined,
            name: $("#f-name", el).value,
            brand: $("#f-brand", el).value,
            category: $("#f-cat", el).value,
            barcode: $("#f-bar", el).value,
            buyCents: buy,
            sellCents: sell,
            stock,
            minStock: min,
            expiry: $("#f-exp", el).value,
            photo
          });
          sh.close();
          toast(t("saved"), "ok");
          if (onDone)
            onDone(rec);
        } catch (err) {
          toast(errMsg(err), "error");
        }
      };
      const del = $("#del", el);
      if (del)
        del.onclick = async () => {
          if (await confirmDialog(t("products.deleteConfirm", { name: product.name }), { danger: true, okLabel: t("delete") })) {
            await app.store.deleteProduct(product.id);
            sh.close();
            toast(t("deleted"));
          }
        };
    }
  });
}

// www/js/v-sales.js
function renderSales(view) {
  const st = app.store;
  const list = st.sales();
  let html = `<div class="page-head"><h2>${esc(t("sales.title"))}</h2></div>`;
  if (!list.length) {
    html += `<div class="empty">${icon("bag")}<p>${esc(t("sales.empty"))}</p></div>`;
  } else {
    let last = "";
    html += '<div class="list">';
    for (const s of list) {
      const h = dayHeading(s.ts);
      if (h !== last) {
        html += `<div class="day-head">${esc(h)}</div>`;
        last = h;
      }
      const cust = s.customerId ? st.customer(s.customerId) : null;
      const qty = s.items.reduce((a, i) => a + i.qty, 0);
      const debt = s.totalCents - s.paidCents;
      html += `<button class="row" data-id="${s.id}">
        <div class="row-body"><div class="row-title">${esc(s.items.map((i) => i.name).join("، ").slice(0, 60))}</div>
        <div class="row-sub">${esc(timeLabel(s.ts))} · ${esc(t("sales.items", { n: qty }))}${cust ? " · " + esc(cust.name) : ""}${debt > 0 ? ` <span class="badge warn">${esc(t("sales.remainder"))} ${formatMAD(debt)}</span>` : ""}</div></div>
        <div class="row-end">${moneyHtml(s.totalCents)}</div></button>`;
    }
    html += "</div>";
  }
  html += `<button class="fab" id="add" aria-label="${esc(t("sales.new"))}">${icon("plus")}</button>`;
  view.innerHTML = html;
  $("#add", view).onclick = () => openNewSale();
  view.querySelectorAll(".row").forEach((r) => {
    r.onclick = () => openSaleDetail(r.dataset.id);
  });
}
function openSaleDetail(id) {
  const st = app.store;
  const s = st.sale(id);
  if (!s)
    return;
  const cust = s.customerId ? st.customer(s.customerId) : null;
  const profit = s.items.reduce((a, i) => a + i.qty * (i.unitPriceCents - i.unitCostCents), 0);
  const body = `
    <div class="muted">${esc(dayHeading(s.ts))} · ${esc(timeLabel(s.ts))}${cust ? " · " + esc(cust.name) : ""}</div>
    <div class="list tight">${s.items.map((i) => `<div class="row static"><div class="row-body"><div class="row-title">${esc(i.name)}</div><div class="row-sub">${i.qty} × ${formatMAD(i.unitPriceCents)}</div></div><div class="row-end">${moneyHtml(i.qty * i.unitPriceCents)}</div></div>`).join("")}</div>
    <div class="sum-row"><span>${esc(t("total"))}</span>${moneyHtml(s.totalCents)}</div>
    <div class="sum-row"><span>${esc(t("sales.paid"))}</span>${moneyHtml(s.paidCents)}</div>
    ${s.totalCents > s.paidCents ? `<div class="sum-row warn"><span>${esc(t("sales.remainder"))}</span>${moneyHtml(s.totalCents - s.paidCents)}</div>` : ""}
    <div class="sum-row"><span>${esc(t("sales.profit"))}</span>${moneyHtml(profit)}</div>`;
  openSheet({
    title: t("sales.detail"),
    body,
    footer: `<button class="btn danger-ghost grow" id="void">${icon("trash")} ${esc(t("sales.void"))}</button>`,
    onMount(sh) {
      $("#void", sh.el).onclick = async () => {
        if (!await confirmDialog(t("sales.voidConfirm"), { danger: true, okLabel: t("sales.void") }))
          return;
        try {
          await app.store.voidSale(id);
          sh.close();
          toast(t("deleted"));
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
    }
  });
}
function openNewSale(prefillCustomerId = null) {
  const st = app.store;
  const cart = [];
  let customerId = prefillCustomerId;
  let paidText = null;
  const total = () => cart.reduce((a, l) => a + l.qty * l.unitPriceCents, 0);
  const body = `
    <div class="search">${icon("search")}<input id="q" type="search" autocomplete="off" placeholder="${esc(t("products.search"))}"></div>
    <div id="results" class="list tight"></div>
    <h4 class="sec">${esc(t("sales.cart"))}</h4>
    <div id="cart" class="list tight"></div>
    <label class="field"><span>${esc(t("sales.customer"))}</span>
      <select id="cust"><option value="">${esc(t("sales.walkIn"))}</option>${st.customers().map((c) => `<option value="${c.id}">${esc(c.name)}</option>`).join("")}</select></label>
    <div id="pay"></div>`;
  openSheet({
    title: t("sales.new"),
    body,
    full: true,
    footer: `<div class="total-box"><small>${esc(t("total"))}</small><b id="tot" dir="ltr">0,00</b></div><button class="btn primary grow" id="ok">${esc(t("sales.confirm"))}</button>`,
    onMount(sh) {
      const el = sh.el;
      $("#cust", el).value = customerId || "";
      $("#cust", el).onchange = (e) => {
        customerId = e.target.value || null;
      };
      const drawResults = () => {
        const s = $("#q", el).value.trim().toLowerCase();
        let list = st.products().filter((p) => p.stock > 0);
        if (s)
          list = list.filter((p) => [p.name, p.brand, p.category, p.barcode].some((x) => String(x || "").toLowerCase().includes(s)));
        list = list.slice(0, s ? 30 : 8);
        $("#results", el).innerHTML = list.length ? list.map((p) => `<button class="row" data-add="${p.id}">${productThumb(p, "sm")}<div class="row-body"><div class="row-title">${esc(p.name)}</div><div class="row-sub">${esc(t("sales.stockLeft", { n: p.stock }))}</div></div><div class="row-end">${moneyHtml(p.sellCents)}</div></button>`).join("") : `<div class="muted pad">${esc(t("products.noMatch"))}</div>`;
        el.querySelectorAll("[data-add]").forEach((b) => {
          b.onclick = () => addToCart(b.dataset.add);
        });
      };
      const addToCart = (id) => {
        const p = st.product(id);
        const ex = cart.find((l) => l.productId === id);
        if (ex) {
          if (ex.qty < p.stock)
            ex.qty += 1;
          else
            toast(t("err.insufficientStock", { name: p.name, stock: p.stock }), "error");
        } else
          cart.push({ productId: id, qty: 1, unitPriceCents: p.sellCents });
        drawCart();
      };
      const drawCart = () => {
        const box = $("#cart", el);
        if (!cart.length)
          box.innerHTML = `<div class="muted pad">${esc(t("sales.emptyCart"))}</div>`;
        else
          box.innerHTML = cart.map((l, i) => {
            const p = st.product(l.productId);
            return `<div class="row static cart-line" data-i="${i}">
            <div class="row-body"><div class="row-title">${esc(p.name)}</div>
            <div class="row-sub"><input class="price-in" inputmode="decimal" dir="ltr" value="${inputMAD(l.unitPriceCents)}" aria-label="${esc(t("sales.unitPrice"))}"> ${esc(t("cur.mad"))}</div></div>
            <div class="qty"><button class="icon-btn" data-dec>${icon("minus")}</button><b>${l.qty}</b><button class="icon-btn" data-inc>${icon("plus")}</button></div></div>`;
          }).join("");
        box.querySelectorAll(".cart-line").forEach((row) => {
          const i = Number(row.dataset.i);
          row.querySelector("[data-inc]").onclick = () => {
            const p = st.product(cart[i].productId);
            if (cart[i].qty < p.stock) {
              cart[i].qty++;
              drawCart();
            } else
              toast(t("err.insufficientStock", { name: p.name, stock: p.stock }), "error");
          };
          row.querySelector("[data-dec]").onclick = () => {
            cart[i].qty--;
            if (cart[i].qty < 1)
              cart.splice(i, 1);
            drawCart();
          };
          row.querySelector(".price-in").onchange = (e) => {
            const v = parseMAD(e.target.value);
            if (v === null) {
              toast(t("err.badPrice"), "error");
              e.target.value = inputMAD(cart[i].unitPriceCents);
            } else {
              cart[i].unitPriceCents = v;
              drawCart();
            }
          };
        });
        drawPay();
      };
      const drawPay = () => {
        const tot = total();
        $("#tot", el).textContent = formatMAD(tot);
        const pay = $("#pay", el);
        if (!cart.length) {
          pay.innerHTML = "";
          return;
        }
        const paidVal = paidText === null ? inputMAD(tot) : paidText;
        pay.innerHTML = `<label class="field"><span>${esc(t("sales.paid"))} (${esc(t("cur.mad"))})</span><input id="paid" inputmode="decimal" dir="ltr" value="${esc(paidVal)}"></label><div id="rem"></div>`;
        const upd = () => {
          const v = parseMAD($("#paid", el).value);
          const rem = v === null ? null : tot - v;
          $("#rem", el).innerHTML = rem !== null && rem > 0 ? `<div class="sum-row warn"><span>${esc(t("sales.remainder"))}</span>${moneyHtml(rem)}</div>` : "";
        };
        $("#paid", el).oninput = (e) => {
          paidText = e.target.value;
          upd();
        };
        upd();
      };
      $("#q", el).oninput = debounce(drawResults, 80);
      drawResults();
      drawCart();
      $("#ok", el).onclick = async () => {
        const tot = total();
        let paid = tot;
        if (paidText !== null) {
          paid = parseMAD(paidText);
          if (paid === null)
            return toast(t("err.badPaid"), "error");
        }
        try {
          await app.store.createSale({ customerId, items: cart.map((l) => ({ productId: l.productId, qty: l.qty, unitPriceCents: l.unitPriceCents })), paidCents: paid });
          sh.close();
          toast(t("sales.done"), "ok");
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
    }
  });
}

// www/js/v-home.js
function renderHome(view) {
  const st = app.store;
  const [f1, t1] = rangeBounds("today");
  const [f2, t2] = rangeBounds("week");
  const today = st.report(f1, t1);
  const week = st.report(f2, t2);
  const low = st.lowStock();
  const exp = st.expiringSoon(60);
  const shop = st.settings.shopName;
  const debts = st.totalDebts();
  const alerts = [];
  if (low.length)
    alerts.push(`<a class="alert warn" href="#/products">${icon("alert")}<span>${esc(t("home.lowStock"))}: <b>${low.length}</b></span></a>`);
  if (exp.length)
    alerts.push(`<a class="alert warn" href="#/products">${icon("alert")}<span>${esc(t("home.expiring"))}: <b>${exp.length}</b></span></a>`);
  view.innerHTML = `
    <div class="greet"><small>${esc(t("home.hello"))}</small><h1>${esc(shop || t("appName"))}</h1></div>
    <div class="hero-card"><small>${esc(t("home.today"))} · ${esc(t("home.profit"))}</small><div class="hero-num">${moneyHtml(today.net)}</div>
      <div class="hero-sub"><span>${esc(t("home.revenue"))} ${moneyHtml(today.revenue)}</span><span>${esc(t("home.sales"))} <b>${today.count}</b></span></div></div>
    <div class="grid2 stats">
      <div class="stat"><small>${esc(t("home.week"))}</small>${moneyHtml(week.revenue)}</div>
      <a class="stat" href="#/customers"><small>${esc(t("home.debts"))}</small>${debtHtml(debts, st.settings.debtCurrency)}</a>
    </div>
    <button class="btn primary wide" id="newsale">${icon("plus")} ${esc(t("home.newSale"))}</button>
    <h4 class="sec">${esc(t("home.alerts"))}</h4>
    ${alerts.length ? alerts.join("") : `<div class="alert ok">${icon("check")}<span>${esc(t("home.allGood"))}</span></div>`}
    <h4 class="sec">${esc(t("home.top"))} · ${esc(t("home.month"))}</h4>
    ${(() => {
    const [fm, tm] = rangeBounds("month");
    const r = st.report(fm, tm);
    return r.top.length ? `<div class="list tight">${r.top.map((p) => `<div class="row static"><div class="row-body"><div class="row-title">${esc(p.name)}</div><div class="row-sub">${p.qty}</div></div><div class="row-end">${moneyHtml(p.profit)}</div></div>`).join("")}</div>` : `<div class="muted pad">${esc(t("home.noSalesYet"))}</div>`;
  })()}
    <h4 class="sec">${esc(t("home.quick"))}</h4>
    <div class="quick">
      <a href="#/studio" class="q-item">${icon("sparkles")}<span>${esc(t("nav.studio"))}</span></a>
      <a href="#/reports" class="q-item">${icon("chart")}<span>${esc(t("more.reports"))}</span></a>
      <a href="#/purchases" class="q-item">${icon("truck")}<span>${esc(t("more.purchases"))}</span></a>
      <a href="#/expenses" class="q-item">${icon("wallet")}<span>${esc(t("more.expenses"))}</span></a>
    </div>`;
  view.querySelector("#newsale").onclick = () => openNewSale();
}

// www/js/v-customers.js
var q2 = "";
function cur() {
  return app.store.settings.debtCurrency === "RIYAL" ? "RIYAL" : "MAD";
}
function currencyToggle() {
  const c = cur();
  return `<div class="seg" role="tablist" aria-label="${esc(t("customers.showIn"))}">
    <button class="seg-b ${c === "MAD" ? "on" : ""}" data-cur="MAD">${esc(t("customers.mad"))}</button>
    <button class="seg-b ${c === "RIYAL" ? "on" : ""}" data-cur="RIYAL">${esc(t("customers.riyal"))}</button></div>`;
}
function bindToggle(root, after) {
  root.querySelectorAll("[data-cur]").forEach((b) => {
    b.onclick = async () => {
      await app.store.updateSettings({ debtCurrency: b.dataset.cur });
      if (after)
        after();
    };
  });
}
function balanceTag(bal) {
  if (bal > 0)
    return `<span class="owe">${debtHtml(bal, cur())}</span>`;
  if (bal < 0)
    return `<span class="credit">${debtHtml(-bal, cur())} <small>${esc(t("customers.credit"))}</small></span>`;
  return `<span class="muted">${esc(t("customers.settled"))}</span>`;
}
function renderCustomers(view) {
  const st = app.store;
  view.innerHTML = `
    <div class="page-head"><h2>${esc(t("customers.title"))}</h2>${currencyToggle()}</div>
    <div class="hero-card slim"><small>${esc(t("customers.totalDebts"))}</small><div class="hero-num" id="tot"></div></div>
    <p class="note">${esc(t("customers.rateNote"))}</p>
    <div class="search">${icon("search")}<input id="q" type="search" autocomplete="off" placeholder="${esc(t("customers.search"))}" value="${esc(q2)}"></div>
    <div id="clist" class="list"></div>
    <button class="fab" id="add" aria-label="${esc(t("customers.add"))}">${icon("plus")}</button>`;
  bindToggle(view, () => renderCustomers(view));
  const draw = () => {
    $("#tot", view).innerHTML = debtHtml(st.totalDebts(), cur());
    const s = q2.trim().toLowerCase();
    let list = st.customers();
    if (s)
      list = list.filter((c) => c.name.toLowerCase().includes(s) || c.phone.includes(s));
    list = list.map((c) => ({ c, bal: st.balance(c.id) })).sort((a, b) => b.bal - a.bal);
    $("#clist", view).innerHTML = list.length ? list.map(({ c, bal }) => `<button class="row" data-id="${c.id}"><div class="avatar">${esc(initials(c.name))}</div><div class="row-body"><div class="row-title">${esc(c.name)}</div><div class="row-sub">${esc(c.phone || " ")}</div></div><div class="row-end">${balanceTag(bal)}</div></button>`).join("") : `<div class="empty">${icon("users")}<p>${esc(st.customers().length ? t("products.noMatch") : t("customers.empty"))}</p></div>`;
    view.querySelectorAll("#clist .row").forEach((r) => {
      r.onclick = () => openCustomer(r.dataset.id);
    });
  };
  draw();
  $("#q", view).oninput = debounce((e) => {
    q2 = e.target.value;
    draw();
  }, 100);
  $("#add", view).onclick = () => openCustomerForm();
}
function openCustomerForm(customer = null, onDone) {
  openSheet({
    title: customer ? t("customers.edit") : t("customers.add"),
    body: `<label class="field"><span>${esc(t("f.name"))} *</span><input id="n" value="${esc(customer ? customer.name : "")}" autocomplete="off"></label>
      <label class="field"><span>${esc(t("f.phone"))}</span><input id="p" inputmode="tel" dir="ltr" value="${esc(customer ? customer.phone : "")}"></label>
      <label class="field"><span>${esc(t("f.note"))}</span><input id="no" value="${esc(customer ? customer.note : "")}" autocomplete="off"></label>`,
    footer: `${customer ? `<button class="btn danger-ghost" id="del">${icon("trash")}</button>` : ""}<button class="btn primary grow" id="ok">${esc(t("save"))}</button>`,
    onMount(sh) {
      const el = sh.el;
      $("#ok", el).onclick = async () => {
        try {
          const rec = await app.store.saveCustomer({ id: customer ? customer.id : undefined, name: $("#n", el).value, phone: $("#p", el).value, note: $("#no", el).value });
          sh.close();
          toast(t("saved"), "ok");
          if (onDone)
            onDone(rec);
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
      const del = $("#del", el);
      if (del)
        del.onclick = async () => {
          if (!await confirmDialog(t("customers.deleteConfirm", { name: customer.name }), { danger: true, okLabel: t("delete") }))
            return;
          try {
            await app.store.deleteCustomer(customer.id);
            sh.close();
            toast(t("deleted"));
          } catch (e) {
            toast(errMsg(e), "error");
          }
        };
    }
  });
}
function phoneIntl(phone) {
  const d = String(phone).replace(/[^\d+]/g, "");
  if (d.startsWith("+"))
    return d.slice(1);
  if (d.startsWith("00"))
    return d.slice(2);
  if (d.startsWith("0"))
    return "212" + d.slice(1);
  return d;
}
function openCustomer(id) {
  const st = app.store;
  const c = st.customer(id);
  if (!c)
    return;
  const sh = openSheet({
    title: c.name,
    full: true,
    body: '<div id="cbody"></div>',
    footer: `<button class="btn ghost" id="pay">${esc(t("customers.addPayment"))}</button><button class="btn primary" id="debt">${esc(t("customers.addDebt"))}</button>`,
    onMount() {}
  });
  const draw = () => {
    const el = sh.el;
    const bal = st.balance(id);
    const entries = st.ledgerOf(id);
    const wa = c.phone ? `https://wa.me/${phoneIntl(c.phone)}` : "";
    $("#cbody", el).innerHTML = `
      <div class="between">${currencyToggle()}<button class="btn text small" id="edit">${icon("edit")} ${esc(t("edit"))}</button></div>
      <div class="hero-card slim"><small>${bal >= 0 ? esc(t("customers.owes")) : esc(t("customers.credit"))}</small><div class="hero-num">${debtHtml(Math.abs(bal), cur())}</div></div>
      ${c.phone ? `<div class="actions"><a class="btn ghost small" href="tel:${esc(c.phone)}">${esc(t("customers.call"))}</a><a class="btn ghost small" target="_blank" rel="noopener" href="${esc(wa)}">${icon("chat")} ${esc(t("customers.whatsapp"))}</a></div>` : ""}
      ${c.note ? `<p class="muted">${esc(c.note)}</p>` : ""}
      <h4 class="sec">${esc(t("customers.history"))}</h4>
      <div class="list tight">${entries.length ? entries.map((e) => `<button class="row" data-e="${e.id}"><div class="row-body"><div class="row-title">${esc(e.type === "debt" ? t("customers.debt") : t("customers.payment"))}${e.saleId ? " · " + esc(t("customers.fromSale")) : ""}</div><div class="row-sub">${esc(dayHeading(e.ts))} ${esc(timeLabel(e.ts))}${e.note ? " · " + esc(e.note) : ""}</div></div><div class="row-end ${e.type === "debt" ? "owe" : "credit"}">${e.type === "debt" ? "+" : "−"}${debtHtml(e.amountCents, cur())}</div></button>`).join("") : `<div class="muted pad">${esc(t("customers.noHistory"))}</div>`}</div>`;
    bindToggle(el, draw);
    $("#edit", el).onclick = () => openCustomerForm(st.customer(id), () => {
      sh.close();
    });
    el.querySelectorAll("[data-e]").forEach((r) => {
      r.onclick = async () => {
        if (!await confirmDialog(t("customers.entryDeleteConfirm"), { danger: true, okLabel: t("delete") }))
          return;
        try {
          await st.deleteLedger(r.dataset.e);
          draw();
        } catch (e) {
          toast(errMsg(e), "error");
        }
      };
    });
  };
  draw();
  const entryForm = (type) => {
    const isR = cur() === "RIYAL";
    openSheet({
      title: type === "debt" ? t("customers.addDebt") : t("customers.addPayment"),
      body: `<label class="field"><span>${esc(t("customers.amountIn", { cur: isR ? t("cur.riyal") : t("cur.mad") }))} *</span><input id="a" inputmode="decimal" dir="ltr" autofocus></label>
        <label class="field"><span>${esc(t("f.note"))}</span><input id="n" autocomplete="off"></label>`,
      footer: `<button class="btn primary grow" id="ok">${esc(t("save"))}</button>`,
      onMount(s2) {
        $("#ok", s2.el).onclick = async () => {
          const raw = $("#a", s2.el).value;
          const cents = isR ? parseRiyal(raw) : parseMAD(raw);
          if (cents === null || cents <= 0)
            return toast(t("err.badAmount"), "error");
          try {
            await st.addLedger({ customerId: id, type, amountCents: cents, note: $("#n", s2.el).value });
            s2.close();
            draw();
            toast(t("saved"), "ok");
          } catch (e) {
            toast(errMsg(e), "error");
          }
        };
      }
    });
  };
  $("#debt", sh.el).onclick = () => entryForm("debt");
  $("#pay", sh.el).onclick = () => entryForm("payment");
}

// www/js/postgen.js
var ASPECTS = {
  square: [1080, 1080],
  portrait: [1080, 1350],
  story: [1080, 1920]
};
var PALETTES = {
  emerald: { name: "emerald", bg1: "#0F5C4D", bg2: "#093D33", accent: "#D9B779", text: "#FFFFFF", soft: "#E7F0EC", ink: "#0B2F27" },
  ivory: { name: "ivory", bg1: "#FBF7EE", bg2: "#EADFC8", accent: "#8A6A3B", text: "#1E2A26", soft: "#FFFFFF", ink: "#1E2A26" },
  midnight: { name: "midnight", bg1: "#1C2B4D", bg2: "#0B1226", accent: "#E3BA66", text: "#FFFFFF", soft: "#E9ECF4", ink: "#0B1226" },
  terracotta: { name: "terracotta", bg1: "#C9795A", bg2: "#8F4A32", accent: "#F8E8D2", text: "#FFFFFF", soft: "#FBEFE3", ink: "#4A2417" },
  sage: { name: "sage", bg1: "#B5C4AC", bg2: "#819778", accent: "#F4F1E8", text: "#1B2A22", soft: "#F2F5EE", ink: "#1B2A22" },
  nude: { name: "nude", bg1: "#EBD3C8", bg2: "#D2A99A", accent: "#FFFFFF", text: "#3B2520", soft: "#FBF3EE", ink: "#3B2520" }
};
var FONTS = {
  sans: '"Noto Sans Arabic","Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  serif: '"Noto Naskh Arabic","Amiri","Playfair Display",Georgia,"Times New Roman",serif'
};
var CATEGORIES = ["morning", "evening", "friday", "occasions", "newProduct", "offers", "tips"];
var TEMPLATES = [
  { id: "morning-1", cat: "morning", layout: "aura", palette: "ivory" },
  { id: "morning-2", cat: "morning", layout: "arch", palette: "sage" },
  { id: "evening-1", cat: "evening", layout: "aura", palette: "midnight" },
  { id: "evening-2", cat: "evening", layout: "frame", palette: "emerald" },
  { id: "friday-1", cat: "friday", layout: "frame", palette: "emerald" },
  { id: "friday-2", cat: "friday", layout: "arch", palette: "ivory" },
  { id: "occasion-1", cat: "occasions", layout: "frame", palette: "midnight" },
  { id: "occasion-2", cat: "occasions", layout: "aura", palette: "terracotta" },
  { id: "new-1", cat: "newProduct", layout: "card", palette: "ivory" },
  { id: "new-2", cat: "newProduct", layout: "arch", palette: "emerald" },
  { id: "offer-1", cat: "offers", layout: "badge", palette: "emerald" },
  { id: "offer-2", cat: "offers", layout: "badge", palette: "midnight" },
  { id: "tips-1", cat: "tips", layout: "split", palette: "sage" },
  { id: "tips-2", cat: "tips", layout: "split", palette: "ivory" }
];
var isArabic = (s) => /[؀-ۿ]/.test(s);
function wrap(ctx, text, maxW) {
  const out = [];
  for (const para of String(text || "").split(`
`)) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = "";
    for (const w of words) {
      const test = line ? line + " " + w : w;
      if (!line || ctx.measureText(test).width <= maxW)
        line = test;
      else {
        out.push(line);
        line = w;
      }
    }
    out.push(line);
  }
  return out;
}
function fitText(ctx, text, { maxW, maxLines = 3, size = 110, min = 40, weight = 700, family }) {
  let s = size;
  for (;; ) {
    ctx.font = `${weight} ${s}px ${family}`;
    const lines = wrap(ctx, text, maxW);
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width), 0);
    if (lines.length <= maxLines && widest <= maxW || s <= min)
      return { size: s, lines, weight };
    s -= 4;
  }
}
function drawLines(ctx, block, cx, y, color, family, lineGap = 1.22) {
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `${block.weight} ${block.size}px ${family}`;
  const lh = block.size * lineGap;
  block.lines.forEach((ln, i) => {
    ctx.direction = isArabic(ln) ? "rtl" : "ltr";
    ctx.fillText(ln, cx, y + i * lh);
  });
  ctx.direction = "inherit";
  return y + (block.lines.length - 1) * lh + lh / 2;
}
function text(ctx, str, cx, y, { size, weight = 600, color, family, maxW }) {
  const b = fitText(ctx, str, { maxW: maxW || 1e6, maxLines: 1, size, min: Math.max(18, size * 0.5), weight, family });
  return drawLines(ctx, b, cx, y, color, family);
}
function pill(ctx, cx, cy, label, { size, bg, color, family, padX = 38, padY = 20 }) {
  ctx.font = `700 ${size}px ${family}`;
  const tw = ctx.measureText(label).width;
  const w = tw + padX * 2;
  const h = size + padY * 2;
  roundRect(ctx, cx - w / 2, cy - h / 2, w, h, h / 2);
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.direction = isArabic(label) ? "rtl" : "ltr";
  ctx.fillText(label, cx, cy + 2);
  ctx.direction = "inherit";
  return cy + h / 2;
}
function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}
function drawCover(ctx, img, x, y, w, h) {
  const ir = img.width / img.height;
  const br = w / h;
  let sw, sh, sx, sy;
  if (ir > br) {
    sh = img.height;
    sw = sh * br;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / br;
    sx = 0;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}
function gradientBg(ctx, w, h, pal) {
  const g = ctx.createLinearGradient(0, 0, w * 0.7, h);
  g.addColorStop(0, pal.bg1);
  g.addColorStop(1, pal.bg2);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
}
function decorate(ctx, w, h, pal, area = { x: 0, y: 0, w, h }) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.x, area.y, area.w, area.h);
  ctx.clip();
  ctx.strokeStyle = pal.accent;
  ctx.fillStyle = pal.accent;
  ctx.globalAlpha = 0.07;
  const R = Math.max(area.w, area.h);
  ctx.beginPath();
  ctx.arc(area.x + area.w * 0.9, area.y + area.h * 0.1, R * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(area.x + area.w * 0.04, area.y + area.h * 0.92, R * 0.26, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.16;
  ctx.lineWidth = 2;
  for (let i = 1;i <= 4; i++) {
    ctx.beginPath();
    ctx.arc(area.x + area.w * 0.9, area.y + area.h * 0.1, R * (0.34 + i * 0.07), 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();
}
function paintBackground(c, usePhoto = true) {
  const { ctx, w, h, pal, assets, spec } = c;
  c.photo = !!(usePhoto && assets.photo);
  if (c.photo) {
    drawCover(ctx, assets.photo, 0, 0, w, h);
    const k = spec.overlay;
    ctx.fillStyle = `rgba(0,0,0,${k})`;
    ctx.fillRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, h * 0.35, 0, h);
    g.addColorStop(0, "rgba(0,0,0,0)");
    g.addColorStop(1, `rgba(0,0,0,${Math.min(0.75, k + 0.25)})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    c.textColor = "#FFFFFF";
    c.subColor = "rgba(255,255,255,.88)";
  } else {
    gradientBg(ctx, w, h, pal);
    decorate(ctx, w, h, pal);
    c.textColor = pal.text;
    c.subColor = pal.text === "#FFFFFF" ? "rgba(255,255,255,.82)" : "rgba(30,42,38,.78)";
  }
}
function priceLabel(spec) {
  if (!spec.flags.showPrice || spec.priceCents === null || spec.priceCents === undefined)
    return "";
  return `${formatMAD(spec.priceCents)} DH`;
}
function drawFooter(c) {
  const { ctx, w, h, spec, assets, family, shop } = c;
  const name = (shop.shopName || "").trim();
  const logo = spec.flags.showLogo && assets.logo ? assets.logo : null;
  const col = c.footerColor || c.textColor;
  const y = h - 84;
  if (name || logo) {
    ctx.font = `700 36px ${family}`;
    const tw = name ? Math.min(ctx.measureText(name).width, w * 0.6) : 0;
    const r = 38;
    const gap = name && logo ? 22 : 0;
    const total = (logo ? r * 2 : 0) + gap + tw;
    let x0 = (w - total) / 2;
    if (logo) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x0 + r, y, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = "#fff";
      ctx.fillRect(x0, y - r, r * 2, r * 2);
      drawCover(ctx, logo, x0, y - r, r * 2, r * 2);
      ctx.restore();
      x0 += r * 2 + gap;
    }
    if (name)
      text(ctx, name, x0 + tw / 2, y, { size: 36, weight: 700, color: col, family, maxW: w * 0.6 });
  }
  if (assets.credit)
    text(ctx, assets.credit, w / 2, h - 30, { size: 20, weight: 500, color: col, family, maxW: w * 0.8 });
}
function productBlock(c, cx, y, maxW) {
  const { ctx, spec, family, pal } = c;
  let cur = y;
  if (spec.flags.showProduct && spec.texts.product) {
    const b = fitText(ctx, spec.texts.product, { maxW, maxLines: 2, size: 58, min: 32, weight: 700, family });
    cur = drawLines(ctx, b, cx, cur, c.textColor, family) + 18;
  }
  const p = priceLabel(spec);
  if (p) {
    const bottom = pill(ctx, cx, cur + 40, p, { size: 54, bg: pal.accent, color: pal.name === "ivory" || pal.name === "sage" || pal.name === "nude" ? "#1E2A26" : pal.ink, family });
    cur = bottom + 14;
  }
  return cur;
}
function layoutAura(c) {
  const { ctx, w, h, spec, family, pal } = c;
  paintBackground(c);
  let y = h * 0.28;
  const hd = fitText(ctx, spec.texts.headline, { maxW: w * 0.82, maxLines: 3, size: 132, min: 56, family });
  y = drawLines(ctx, hd, w / 2, y, c.textColor, family) + 26;
  ctx.fillStyle = pal.accent;
  ctx.fillRect(w / 2 - 60, y, 120, 5);
  y += 52;
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: w * 0.74, maxLines: 4, size: 50, min: 28, weight: 500, family });
    y = drawLines(ctx, sb, w / 2, y + 20, c.subColor, family, 1.4) + 30;
  }
  productBlock(c, w / 2, y + 20, w * 0.78);
  c.footerColor = c.textColor;
  drawFooter(c);
}
function layoutFrame(c) {
  const { ctx, w, h, spec, family, pal } = c;
  paintBackground(c);
  const gold = pal.accent;
  ctx.strokeStyle = gold;
  ctx.lineWidth = 4;
  ctx.strokeRect(46, 46, w - 92, h - 92);
  ctx.lineWidth = 1.5;
  ctx.strokeRect(68, 68, w - 136, h - 136);
  ctx.fillStyle = gold;
  for (const dx of [-60, 0, 60]) {
    const s = dx === 0 ? 14 : 8;
    ctx.beginPath();
    ctx.moveTo(w / 2 + dx, 120 - s);
    ctx.lineTo(w / 2 + dx + s, 120);
    ctx.lineTo(w / 2 + dx, 120 + s);
    ctx.lineTo(w / 2 + dx - s, 120);
    ctx.closePath();
    ctx.fill();
  }
  let y = h * 0.34;
  const hd = fitText(ctx, spec.texts.headline, { maxW: w * 0.72, maxLines: 3, size: 124, min: 52, family });
  y = drawLines(ctx, hd, w / 2, y, c.textColor, family) + 30;
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: w * 0.66, maxLines: 4, size: 48, min: 26, weight: 500, family });
    y = drawLines(ctx, sb, w / 2, y + 24, c.subColor, family, 1.4) + 26;
  }
  productBlock(c, w / 2, y + 16, w * 0.7);
  c.footerColor = c.textColor;
  drawFooter(c);
}
function layoutArch(c) {
  const { ctx, w, h, spec, assets, family, pal } = c;
  gradientBg(ctx, w, h, pal);
  decorate(ctx, w, h, pal);
  c.textColor = pal.text;
  c.subColor = pal.text === "#FFFFFF" ? "rgba(255,255,255,.85)" : "rgba(30,42,38,.8)";
  c.photo = false;
  const hd = fitText(ctx, spec.texts.headline, { maxW: w * 0.82, maxLines: 2, size: 100, min: 48, family });
  drawLines(ctx, hd, w / 2, h * 0.115, c.textColor, family);
  const aw = w * 0.56;
  const ax = (w - aw) / 2;
  const ay = h * 0.215;
  const ah = h * 0.44;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(ax, ay + ah);
  ctx.lineTo(ax, ay + aw / 2);
  ctx.arc(w / 2, ay + aw / 2, aw / 2, Math.PI, 0);
  ctx.lineTo(ax + aw, ay + ah);
  ctx.closePath();
  ctx.clip();
  if (assets.photo) {
    drawCover(ctx, assets.photo, ax, ay, aw, ah);
  } else {
    const g = ctx.createLinearGradient(ax, ay, ax + aw, ay + ah);
    g.addColorStop(0, pal.accent);
    g.addColorStop(1, pal.bg1);
    ctx.fillStyle = g;
    ctx.fillRect(ax, ay, aw, ah);
    ctx.globalAlpha = 0.22;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    for (let i = 1;i <= 6; i++) {
      ctx.beginPath();
      ctx.arc(w / 2, ay + ah, i * 70, Math.PI, 0);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  ctx.restore();
  ctx.strokeStyle = pal.accent;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(ax, ay + ah);
  ctx.lineTo(ax, ay + aw / 2);
  ctx.arc(w / 2, ay + aw / 2, aw / 2, Math.PI, 0);
  ctx.lineTo(ax + aw, ay + ah);
  ctx.stroke();
  let y = ay + ah;
  const p = priceLabel(spec);
  if (p)
    pill(ctx, w / 2, y, p, { size: 50, bg: pal.accent, color: pal.name === "ivory" || pal.name === "sage" || pal.name === "nude" ? "#1E2A26" : pal.ink, family });
  y += 70;
  if (spec.flags.showProduct && spec.texts.product) {
    const pb = fitText(ctx, spec.texts.product, { maxW: w * 0.8, maxLines: 1, size: 54, min: 30, family });
    y = drawLines(ctx, pb, w / 2, y + 20, c.textColor, family) + 14;
  }
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: w * 0.78, maxLines: 2, size: 42, min: 24, weight: 500, family });
    drawLines(ctx, sb, w / 2, y + 28, c.subColor, family, 1.35);
  }
  c.footerColor = c.textColor;
  drawFooter(c);
}
function layoutBadge(c) {
  const { ctx, w, h, spec, assets, family, pal } = c;
  paintBackground(c, false);
  const hd = fitText(ctx, spec.texts.headline, { maxW: w * 0.84, maxLines: 2, size: 112, min: 50, family });
  drawLines(ctx, hd, w / 2, h * 0.12, c.textColor, family);
  const cx = w / 2;
  const R = Math.min(w * 0.27, h * 0.21);
  const cy = h * 0.4;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.28)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 14;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fillStyle = pal.accent;
  ctx.fill();
  ctx.restore();
  if (assets.photo) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R - 12, 0, Math.PI * 2);
    ctx.clip();
    drawCover(ctx, assets.photo, cx - R, cy - R, R * 2, R * 2);
    ctx.restore();
  }
  ctx.lineWidth = 6;
  ctx.strokeStyle = "rgba(255,255,255,.7)";
  ctx.beginPath();
  ctx.arc(cx, cy, R - 6, 0, Math.PI * 2);
  ctx.stroke();
  const p = priceLabel(spec);
  const dark = pal.name === "ivory" || pal.name === "sage" || pal.name === "nude" ? "#1E2A26" : pal.ink;
  const hasName = spec.flags.showProduct && spec.texts.product;
  if (p) {
    if (assets.photo) {
      pill(ctx, cx, cy + R - 10, p, { size: 52, bg: pal.bg2, color: "#fff", family });
    } else {
      const pb = fitText(ctx, p, { maxW: R * 1.6, maxLines: 1, size: 104, min: 40, weight: 800, family });
      drawLines(ctx, pb, cx, cy - (hasName ? R * 0.08 : 0), dark, family);
      if (hasName) {
        const nb = fitText(ctx, spec.texts.product, { maxW: R * 1.5, maxLines: 2, size: 40, min: 22, weight: 600, family });
        drawLines(ctx, nb, cx, cy + R * 0.48, dark, family);
      }
    }
  } else if (!assets.photo && hasName) {
    const nb = fitText(ctx, spec.texts.product, { maxW: R * 1.5, maxLines: 3, size: 70, min: 28, weight: 800, family });
    drawLines(ctx, nb, cx, cy, dark, family);
  }
  let y = cy + R + 70;
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: w * 0.78, maxLines: 2, size: 44, min: 26, weight: 500, family });
    y = drawLines(ctx, sb, w / 2, y, c.subColor, family, 1.35) + 22;
  }
  if (spec.texts.cta)
    pill(ctx, w / 2, y + 44, spec.texts.cta, { size: 40, bg: "#FFFFFF", color: pal.ink, family, padX: 44, padY: 20 });
  c.footerColor = c.textColor;
  drawFooter(c);
}
function layoutCard(c) {
  const { ctx, w, h, spec, assets, family, pal } = c;
  gradientBg(ctx, w, h, pal);
  decorate(ctx, w, h, pal);
  c.textColor = pal.ink;
  c.photo = false;
  const hd = fitText(ctx, spec.texts.headline, { maxW: w * 0.8, maxLines: 2, size: 96, min: 44, family });
  drawLines(ctx, hd, w / 2, h * 0.105, pal.text, family);
  const cw = w * 0.72;
  const cxl = (w - cw) / 2;
  const cyt = h * 0.2;
  const ch = h * 0.6;
  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,.22)";
  ctx.shadowBlur = 50;
  ctx.shadowOffsetY = 20;
  roundRect(ctx, cxl, cyt, cw, ch, 44);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.restore();
  const ph = ch * 0.64;
  ctx.save();
  roundRect(ctx, cxl, cyt, cw, ph + 44, 44);
  ctx.clip();
  ctx.beginPath();
  ctx.rect(cxl, cyt, cw, ph);
  ctx.clip();
  if (assets.photo)
    drawCover(ctx, assets.photo, cxl, cyt, cw, ph);
  else {
    const g = ctx.createLinearGradient(cxl, cyt, cxl + cw, cyt + ph);
    g.addColorStop(0, pal.soft);
    g.addColorStop(1, pal.accent);
    ctx.fillStyle = g;
    ctx.fillRect(cxl, cyt, cw, ph);
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(cxl + cw / 2, cyt + ph / 2, cw * 0.26, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.restore();
  let y = cyt + ph + 70;
  if (spec.flags.showProduct && spec.texts.product) {
    const pb = fitText(ctx, spec.texts.product, { maxW: cw * 0.86, maxLines: 2, size: 50, min: 28, family });
    y = drawLines(ctx, pb, w / 2, y, "#1E2A26", family) + 12;
  }
  const p = priceLabel(spec);
  if (p) {
    text(ctx, p, w / 2, y + 26, { size: 56, weight: 800, color: pal.bg1 === "#FBF7EE" ? "#8A6A3B" : pal.bg1, family, maxW: cw * 0.8 });
  }
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: w * 0.78, maxLines: 2, size: 40, min: 24, weight: 500, family });
    drawLines(ctx, sb, w / 2, cyt + ch + 62, pal.text === "#FFFFFF" ? "rgba(255,255,255,.85)" : "rgba(30,42,38,.8)", family, 1.35);
  }
  c.photo = false;
  c.textColor = pal.text;
  c.footerColor = pal.text;
  drawFooter(c);
}
function layoutSplit(c) {
  const { ctx, w, h, spec, assets, family, pal } = c;
  const pw = w * 0.56;
  gradientBg(ctx, w, h, pal);
  decorate(ctx, w, h, pal, { x: 0, y: 0, w: pw, h });
  const dark = pal.name === "ivory" || pal.name === "sage" || pal.name === "nude";
  c.textColor = pal.text;
  c.subColor = dark ? "rgba(30,42,38,.82)" : "rgba(255,255,255,.85)";
  const rx = pw;
  const rw = w - pw;
  ctx.save();
  ctx.beginPath();
  ctx.rect(rx, 0, rw, h);
  ctx.clip();
  if (assets.photo)
    drawCover(ctx, assets.photo, rx, 0, rw, h);
  else {
    ctx.fillStyle = pal.bg2;
    ctx.fillRect(rx, 0, rw, h);
    ctx.fillStyle = pal.accent;
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.arc(rx + rw * 0.5, h * 0.42, rw * 0.62, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 0.55;
    ctx.beginPath();
    ctx.arc(rx + rw * 0.5, h * 0.42, rw * 0.38, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.restore();
  ctx.fillStyle = pal.accent;
  ctx.fillRect(pw - 5, 0, 5, h);
  const cx = pw / 2;
  let y = h * 0.22;
  const hd = fitText(ctx, spec.texts.headline, { maxW: pw * 0.8, maxLines: 4, size: 86, min: 40, family });
  y = drawLines(ctx, hd, cx, y, c.textColor, family) + 20;
  ctx.fillStyle = pal.accent;
  ctx.fillRect(cx - 40, y, 80, 5);
  y += 46;
  if (spec.texts.sub) {
    const sb = fitText(ctx, spec.texts.sub, { maxW: pw * 0.78, maxLines: 7, size: 40, min: 24, weight: 500, family });
    y = drawLines(ctx, sb, cx, y + 24, c.subColor, family, 1.45) + 20;
  }
  if (spec.flags.showProduct && spec.texts.product) {
    const pb = fitText(ctx, spec.texts.product, { maxW: pw * 0.78, maxLines: 2, size: 40, min: 24, weight: 700, family });
    y = drawLines(ctx, pb, cx, y + 40, c.textColor, family) + 8;
  }
  const p = priceLabel(spec);
  if (p)
    pill(ctx, cx, y + 56, p, { size: 44, bg: pal.accent, color: dark ? "#1E2A26" : pal.ink, family });
  const shopName = (c.shop.shopName || "").trim();
  if (shopName)
    text(ctx, shopName, cx, h - 70, { size: 34, weight: 700, color: c.textColor, family, maxW: pw * 0.8 });
  if (spec.flags.showLogo && assets.logo) {
    const r = 40;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, h - 150, r, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = "#fff";
    ctx.fillRect(cx - r, h - 150 - r, r * 2, r * 2);
    drawCover(ctx, assets.logo, cx - r, h - 150 - r, r * 2, r * 2);
    ctx.restore();
  }
}
var LAYOUTS = { aura: layoutAura, frame: layoutFrame, arch: layoutArch, badge: layoutBadge, card: layoutCard, split: layoutSplit };
function drawPost(canvas, spec, assets = {}, shop = {}, { scale = 1 } = {}) {
  const [bw, bh] = ASPECTS[spec.aspect] || ASPECTS.square;
  const w = bw;
  const h = bh;
  canvas.width = Math.round(w * scale);
  canvas.height = Math.round(h * scale);
  const ctx = canvas.getContext("2d");
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const pal = PALETTES[spec.palette] || PALETTES.emerald;
  const family = FONTS[spec.font] || FONTS.sans;
  const c = {
    ctx,
    w,
    h,
    spec: { ...spec, overlay: spec.overlay ?? 0.35, flags: { showPrice: true, showLogo: true, showProduct: true, ...spec.flags || {} }, texts: spec.texts || {} },
    pal,
    assets,
    family,
    shop,
    photo: false,
    textColor: pal.text,
    subColor: pal.text,
    footerColor: pal.text
  };
  const fn = LAYOUTS[spec.layout] || layoutAura;
  fn(c);
  return canvas;
}

// www/js/v-studio.js
var activeCat = "morning";
function specFromTemplate(tpl) {
  const cta = tpl.cat === "offers" ? t("tpl.cta.offer") : tpl.cat === "newProduct" ? t("tpl.cta.new") : "";
  return {
    layout: tpl.layout,
    palette: tpl.palette,
    font: "sans",
    aspect: "square",
    overlay: 0.35,
    texts: { headline: t(`tpl.${tpl.id}.h`), sub: t(`tpl.${tpl.id}.s`), product: "", cta },
    priceCents: null,
    flags: { showPrice: true, showLogo: true, showProduct: true }
  };
}
function renderStudio(view) {
  const tabs = CATEGORIES.map((c) => `<button class="chip ${activeCat === c ? "on" : ""}" data-c="${c}">${esc(t("studio.cat." + c))}</button>`).join("");
  view.innerHTML = `
    <div class="page-head"><div><h2>${esc(t("studio.title"))}</h2><p class="muted">${esc(t("studio.sub"))}</p></div></div>
    <div class="chips scroll" id="tabs">${tabs}</div>
    <div class="tpl-grid" id="grid"></div>`;
  const drawGrid = () => {
    const grid = $("#grid", view);
    const list = TEMPLATES.filter((x) => x.cat === activeCat);
    grid.innerHTML = list.map((tp) => `<button class="tpl" data-id="${tp.id}" aria-label="${esc(t(`tpl.${tp.id}.h`))}"><canvas></canvas></button>`).join("");
    list.forEach((tp, i) => {
      const cv = grid.children[i].querySelector("canvas");
      try {
        drawPost(cv, specFromTemplate(tp), {}, { shopName: app.store.settings.shopName }, { scale: 0.3 });
      } catch (e) {
        console.error(e);
      }
      grid.children[i].onclick = () => openEditor(tp);
    });
  };
  drawGrid();
  view.querySelectorAll("[data-c]").forEach((b) => {
    b.onclick = () => {
      activeCat = b.dataset.c;
      view.querySelectorAll("[data-c]").forEach((x) => x.classList.toggle("on", x === b));
      drawGrid();
    };
  });
}
function openEditor(tpl) {
  const st = app.store;
  const spec = specFromTemplate(tpl);
  const assets = { photo: null, logo: null, credit: "" };
  let logoSrc = st.settings.logo;
  const swatches = Object.values(PALETTES).map((p) => `<button class="sw" data-p="${p.name}" style="background:linear-gradient(135deg,${p.bg1},${p.bg2})" aria-label="${p.name}"><i style="background:${p.accent}"></i></button>`).join("");
  const body = `
    <div class="preview"><canvas id="cv"></canvas></div>
    <div class="seg wide"><button class="seg-b" data-a="square">${esc(t("studio.size.square"))}</button><button class="seg-b" data-a="portrait">${esc(t("studio.size.portrait"))}</button><button class="seg-b" data-a="story">${esc(t("studio.size.story"))}</button></div>
    <label class="field"><span>${esc(t("studio.headline"))}</span><input id="h" value="${esc(spec.texts.headline)}" autocomplete="off"></label>
    <label class="field"><span>${esc(t("studio.sub2"))}</span><textarea id="s" rows="2">${esc(spec.texts.sub)}</textarea></label>
    <label class="field"><span>${esc(t("studio.fromStock"))}</span><select id="from"><option value="">—</option>${st.products().map((p) => `<option value="${p.id}">${esc(p.name)}</option>`).join("")}</select></label>
    <div class="grid2">
      <label class="field"><span>${esc(t("studio.product"))}</span><input id="pn" autocomplete="off"></label>
      <label class="field"><span>${esc(t("studio.price"))} (${esc(t("cur.mad"))})</span><input id="pp" inputmode="decimal" dir="ltr"></label>
    </div>
    ${spec.texts.cta !== "" ? `<label class="field"><span>${esc(t("studio.cta"))}</span><input id="cta" value="${esc(spec.texts.cta)}" autocomplete="off"></label>` : ""}
    <div class="photo-actions">
      <label class="btn ghost small"><input type="file" accept="image/*" hidden id="file">${icon("image")} ${esc(t("studio.photoPhone"))}</label>
      <button class="btn ghost small" id="web" type="button">${icon("search")} ${esc(t("studio.photoWeb"))}</button>
      <button class="btn text small" id="nophoto" type="button">${esc(t("studio.photoRemove"))}</button>
    </div>
    <div class="field"><span>${esc(t("studio.colors"))}</span><div class="swatches">${swatches}</div></div>
    <div class="field"><span>${esc(t("studio.font"))}</span><div class="seg"><button class="seg-b" data-f="sans">${esc(t("studio.font.sans"))}</button><button class="seg-b" data-f="serif">${esc(t("studio.font.serif"))}</button></div></div>
    <label class="field"><span>${esc(t("studio.overlay"))}</span><input id="ov" type="range" min="0" max="70" value="35"></label>
    <label class="check"><input type="checkbox" id="fp" checked><span>${esc(t("studio.showPrice"))}</span></label>
    <label class="check"><input type="checkbox" id="fn" checked><span>${esc(t("studio.showProduct"))}</span></label>
    <label class="check"><input type="checkbox" id="fl" checked><span>${esc(t("studio.showLogo"))}</span></label>
    <p class="muted">${esc(t("studio.shareHint"))}</p>`;
  openSheet({
    title: t("studio.editor"),
    body,
    full: true,
    footer: `<button class="btn ghost" id="save">${icon("download")} ${esc(t("download"))}</button><button class="btn primary grow" id="share">${icon("share")} ${esc(t("studio.shareWhatsapp"))}</button>`,
    onMount(sh) {
      const el = sh.el;
      const cv = $("#cv", el);
      const redraw = () => {
        try {
          drawPost(cv, spec, assets, { shopName: st.settings.shopName }, { scale: 0.5 });
        } catch (e) {
          console.error(e);
        }
        el.querySelectorAll("[data-a]").forEach((b) => b.classList.toggle("on", b.dataset.a === spec.aspect));
        el.querySelectorAll("[data-f]").forEach((b) => b.classList.toggle("on", b.dataset.f === spec.font));
        el.querySelectorAll("[data-p]").forEach((b) => b.classList.toggle("on", b.dataset.p === spec.palette));
      };
      const redrawSoon = debounce(redraw, 60);
      if (logoSrc)
        loadImage(logoSrc).then((img) => {
          assets.logo = img;
          redraw();
        }).catch(() => {});
      $("#h", el).oninput = (e) => {
        spec.texts.headline = e.target.value;
        redrawSoon();
      };
      $("#s", el).oninput = (e) => {
        spec.texts.sub = e.target.value;
        redrawSoon();
      };
      $("#pn", el).oninput = (e) => {
        spec.texts.product = e.target.value;
        redrawSoon();
      };
      $("#pp", el).oninput = (e) => {
        const v = e.target.value.trim() === "" ? null : parseMAD(e.target.value);
        spec.priceCents = v;
        redrawSoon();
      };
      const cta = $("#cta", el);
      if (cta)
        cta.oninput = (e) => {
          spec.texts.cta = e.target.value;
          redrawSoon();
        };
      $("#from", el).onchange = (e) => {
        const p = st.product(e.target.value);
        if (!p)
          return;
        spec.texts.product = p.name;
        spec.priceCents = p.sellCents;
        $("#pn", el).value = p.name;
        $("#pp", el).value = inputMAD(p.sellCents);
        if (p.photo)
          loadImage(p.photo).then((img) => {
            assets.photo = img;
            assets.credit = "";
            redraw();
          });
        else
          redraw();
      };
      el.querySelectorAll("[data-a]").forEach((b) => {
        b.onclick = () => {
          spec.aspect = b.dataset.a;
          redraw();
        };
      });
      el.querySelectorAll("[data-f]").forEach((b) => {
        b.onclick = () => {
          spec.font = b.dataset.f;
          redraw();
        };
      });
      el.querySelectorAll("[data-p]").forEach((b) => {
        b.onclick = () => {
          spec.palette = b.dataset.p;
          redraw();
        };
      });
      $("#ov", el).oninput = (e) => {
        spec.overlay = Number(e.target.value) / 100;
        redrawSoon();
      };
      $("#fp", el).onchange = (e) => {
        spec.flags.showPrice = e.target.checked;
        redraw();
      };
      $("#fn", el).onchange = (e) => {
        spec.flags.showProduct = e.target.checked;
        redraw();
      };
      $("#fl", el).onchange = (e) => {
        spec.flags.showLogo = e.target.checked;
        redraw();
      };
      $("#file", el).onchange = async (e) => {
        const f = e.target.files[0];
        if (!f)
          return;
        try {
          const src = await fileToDataURL(f, 1600, 0.9);
          assets.photo = await loadImage(src);
          assets.credit = "";
          redraw();
        } catch (err) {
          toast(t("err.image"), "error");
        }
      };
      $("#nophoto", el).onclick = () => {
        assets.photo = null;
        assets.credit = "";
        redraw();
      };
      $("#web", el).onclick = () => openWebPhotos((img, credit) => {
        assets.photo = img;
        assets.credit = credit;
        redraw();
      });
      const render = async () => {
        const full = document.createElement("canvas");
        drawPost(full, spec, assets, { shopName: st.settings.shopName }, { scale: 1 });
        return canvasToBlob(full, "image/png");
      };
      const fname = () => `AminePara-${tpl.id}-${Date.now()}.png`;
      $("#share", el).onclick = async () => {
        toast(t("studio.rendering"));
        try {
          const blob = await render();
          await shareFile(blob, fname(), { title: spec.texts.headline });
        } catch (e) {
          if (e && e.name === "AbortError")
            return;
          console.error(e);
          toast(errMsg(e), "error");
        }
      };
      $("#save", el).onclick = async () => {
        toast(t("studio.rendering"));
        try {
          const blob = await render();
          const r = await saveFile(blob, fname(), { title: spec.texts.headline });
          toast(r === "saved" ? t("studio.saved") : r === "downloaded" ? t("studio.savedWeb") : t("saved"), "ok");
        } catch (e) {
          console.error(e);
          toast(errMsg(e), "error");
        }
      };
      redraw();
    }
  });
}
function openWebPhotos(onPick) {
  const st = app.store;
  const key = (st.settings.pexelsKey || "").trim();
  openSheet({
    title: t("studio.web.title"),
    full: true,
    body: key ? `<div class="search">${icon("search")}<input id="wq" type="search" placeholder="${esc(t("studio.web.search"))}" autocomplete="off"></div><p class="muted">${esc(t("studio.web.hint"))}</p><div id="wres" class="photo-grid"></div>` : `<div class="empty">${icon("image")}<p>${esc(t("studio.web.keyNeeded"))}</p><a class="btn primary" href="#/settings">${esc(t("settings.title"))}</a></div>`,
    onMount(sh) {
      if (!key) {
        $("a.btn", sh.el).addEventListener("click", () => sh.close());
        return;
      }
      const el = sh.el;
      const run = async () => {
        const q = $("#wq", el).value.trim() || "skincare";
        const box = $("#wres", el);
        box.innerHTML = '<div class="muted pad">…</div>';
        try {
          const r = await fetch(`https://api.pexels.com/v1/search?per_page=24&orientation=square&query=${encodeURIComponent(q)}`, { headers: { Authorization: key } });
          if (!r.ok)
            throw new Error("HTTP " + r.status);
          const j = await r.json();
          if (!j.photos || !j.photos.length) {
            box.innerHTML = `<div class="muted pad">${esc(t("studio.web.none"))}</div>`;
            return;
          }
          box.innerHTML = j.photos.map((p, i) => `<button class="ph" data-i="${i}"><img loading="lazy" src="${esc(p.src.medium)}" alt="${esc(p.alt || "")}"></button>`).join("");
          box.querySelectorAll(".ph").forEach((b) => {
            b.onclick = async () => {
              const p = j.photos[Number(b.dataset.i)];
              try {
                const resp = await fetch(p.src.large2x || p.src.large);
                const blob = await resp.blob();
                const url = URL.createObjectURL(blob);
                const img = await loadImage(url);
                onPick(img, t("studio.web.credit", { name: p.photographer }));
                sh.close();
              } catch (e) {
                toast(t("studio.web.err"), "error");
              }
            };
          });
        } catch (e) {
          box.innerHTML = `<div class="muted pad">${esc(t("studio.web.err"))}</div>`;
        }
      };
      $("#wq", el).addEventListener("keydown", (e) => {
        if (e.key === "Enter")
          run();
      });
      run();
    }
  });
}

// www/js/v-settings.js
function renderSettings(view) {
  const st = app.store;
  const s = st.settings;
  const r = s.reminders;
  view.innerHTML = `
    <div class="page-head"><a class="icon-btn" href="#/more" aria-label="${esc(t("back"))}">${icon("back")}</a><h2>${esc(t("settings.title"))}</h2></div>
    <div class="card">
      <h4 class="sec first">${esc(t("settings.shop"))}</h4>
      <label class="field"><span>${esc(t("settings.shopName"))}</span><input id="shop" value="${esc(s.shopName)}" autocomplete="off"></label>
      <div class="photo-pick"><div class="thumb big round" id="logo">${s.logo ? `<img src="${s.logo}" alt="">` : icon("camera")}</div>
        <div class="stack"><label class="btn ghost small"><input type="file" accept="image/*" hidden id="logofile">${esc(t("settings.logoPick"))}</label>${s.logo ? `<button class="btn text small" id="logorm">${esc(t("products.photoRemove"))}</button>` : ""}</div></div>
      <div class="field"><span>${esc(t("settings.language"))}</span><div class="seg"><button class="seg-b ${s.lang === "ar" ? "on" : ""}" data-l="ar">العربية</button><button class="seg-b ${s.lang === "fr" ? "on" : ""}" data-l="fr">Français</button></div></div>
    </div>
    <div class="card">
      <h4 class="sec first">${esc(t("settings.reminders"))}</h4>
      <p class="muted">${esc(t("settings.remindersHint"))}</p>
      ${["morning", "evening", "friday", "occasions"].map((k) => `<label class="check"><input type="checkbox" data-r="${k}" ${r[k] ? "checked" : ""}><span>${esc(t("rem." + k))}</span></label>`).join("")}
    </div>
    <div class="card">
      <h4 class="sec first">${esc(t("settings.pexels"))}</h4>
      <p class="muted">${esc(t("settings.pexelsHint"))}</p>
      <label class="field"><input id="pex" dir="ltr" value="${esc(s.pexelsKey)}" autocomplete="off" spellcheck="false"></label>
    </div>
    <div class="card">
      <h4 class="sec first">${esc(t("settings.backup"))}</h4>
      <p class="muted">${esc(t("settings.backupHint"))}</p>
      <div class="actions"><button class="btn ghost" id="exp">${icon("download")} ${esc(t("settings.export"))}</button>
      <label class="btn ghost"><input type="file" accept="application/json,.json" hidden id="imp">${esc(t("settings.import"))}</label></div>
    </div>
    <div class="card"><h4 class="sec first">${esc(t("settings.about"))}</h4><p class="muted">${esc(t("settings.aboutText"))}</p></div>`;
  let shopTimer;
  $("#shop", view).oninput = (e) => {
    clearTimeout(shopTimer);
    const v = e.target.value;
    shopTimer = setTimeout(() => st.updateSettings({ shopName: v.trim() }), 300);
  };
  let pexTimer;
  $("#pex", view).oninput = (e) => {
    clearTimeout(pexTimer);
    const v = e.target.value;
    pexTimer = setTimeout(() => st.updateSettings({ pexelsKey: v.trim() }), 300);
  };
  $("#logofile", view).onchange = async (e) => {
    const f = e.target.files[0];
    if (!f)
      return;
    try {
      const src = await fileToDataURL(f, 400, 0.9);
      await st.updateSettings({ logo: src });
      toast(t("saved"), "ok");
      renderSettings(view);
    } catch (err) {
      toast(t("err.image"), "error");
    }
  };
  const rm = $("#logorm", view);
  if (rm)
    rm.onclick = async () => {
      await st.updateSettings({ logo: "" });
      renderSettings(view);
    };
  view.querySelectorAll("[data-l]").forEach((b) => {
    b.onclick = async () => {
      await st.updateSettings({ lang: b.dataset.l });
      setLang(b.dataset.l);
      app.applyLang();
    };
  });
  view.querySelectorAll("[data-r]").forEach((cb) => {
    cb.onchange = async () => {
      const reminders = { ...st.settings.reminders, [cb.dataset.r]: cb.checked };
      await st.updateSettings({ reminders });
      if (!isNative()) {
        toast(t("rem.webOnly"));
        return;
      }
      try {
        const res = await applyReminders(st.settings, t);
        if (res.granted === false) {
          toast(t("rem.denied"), "error");
        } else
          toast(t("rem.on"), "ok");
      } catch (e) {
        console.error(e);
        toast(errMsg(e), "error");
      }
    };
  });
  $("#exp", view).onclick = async () => {
    try {
      const blob = new Blob([JSON.stringify(st.exportData())], { type: "application/json" });
      const name = `AminePara-backup-${new Date().toISOString().slice(0, 10)}.json`;
      const res = await shareFile(blob, name, { title: name });
      if (res)
        toast(t("settings.exported"), "ok");
    } catch (e) {
      if (e && e.name === "AbortError")
        return;
      console.error(e);
      toast(errMsg(e), "error");
    }
  };
  $("#imp", view).onchange = async (e) => {
    const f = e.target.files[0];
    if (!f)
      return;
    try {
      const obj = JSON.parse(await f.text());
      if (!await confirmDialog(t("settings.importConfirm"), { danger: true }))
        return;
      await st.importData(obj);
      setLang(st.settings.lang);
      toast(t("settings.importDone"), "ok");
      app.applyLang();
    } catch (err) {
      toast(err && err.code ? errMsg(err) : t("err.badBackup"), "error");
    }
    e.target.value = "";
  };
}

// www/js/main.js
var ROUTES = {
  "/home": { fn: renderHome, tab: "home" },
  "/products": { fn: renderProducts, tab: "products" },
  "/sales": { fn: renderSales, tab: "sales" },
  "/customers": { fn: renderCustomers, tab: "customers" },
  "/studio": { fn: renderStudio, tab: "studio" },
  "/more": { fn: renderMore, tab: "more" },
  "/purchases": { fn: renderPurchases, tab: "more" },
  "/expenses": { fn: renderExpenses, tab: "more" },
  "/reports": { fn: renderReports, tab: "more" },
  "/settings": { fn: renderSettings, tab: "more" }
};
var TABS = [["home", "home", "#/home"], ["products", "box", "#/products"], ["sales", "bag", "#/sales"], ["customers", "users", "#/customers"], ["studio", "sparkles", "#/studio"], ["more", "gear", "#/more"]];
function currentPath() {
  const h = location.hash.replace(/^#/, "") || "/home";
  return ROUTES[h] ? h : "/home";
}
function drawNav(active) {
  $("#nav").innerHTML = TABS.map(([k, ic, href]) => `<a href="${href}" class="nav-i ${k === active ? "on" : ""}" aria-label="${esc(t("nav." + k))}">${icon(ic)}<span>${esc(t("nav." + k))}</span></a>`).join("");
}
function render() {
  const path = currentPath();
  const r = ROUTES[path];
  const view = $("#view");
  drawNav(r.tab);
  try {
    r.fn(view);
  } catch (e) {
    console.error(e);
    view.innerHTML = `<div class="empty"><p>${esc(t("err.generic"))}</p></div>`;
  }
  if (!app._keepScroll)
    view.scrollTop = 0;
}
app.applyLang = () => {
  const l = app.store.settings.lang;
  setLang(l);
  document.documentElement.lang = l;
  document.documentElement.dir = dir();
  document.title = t("appName");
  render();
};
var renderTimer = null;
function scheduleRender() {
  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => {
    const a = document.activeElement;
    if (currentPath() === "/settings" && a && a.closest && a.closest("#view"))
      return;
    app._keepScroll = true;
    const view = $("#view");
    const top = view.scrollTop;
    render();
    view.scrollTop = top;
    app._keepScroll = false;
  }, 30);
}
async function boot({ memory = false } = {}) {
  let adapter;
  try {
    adapter = memory ? createMemoryAdapter() : createIndexedDBAdapter();
  } catch (e) {
    console.warn("IndexedDB unavailable, using memory", e);
    adapter = createMemoryAdapter();
  }
  app.store = createStore(adapter);
  try {
    await app.store.load();
  } catch (e) {
    console.error(e);
    app.store = createStore(createMemoryAdapter());
    await app.store.load();
  }
  window.__app = app;
  app.store.subscribe(scheduleRender);
  window.addEventListener("hashchange", () => {
    while (sheetCount())
      closeTopSheet();
    render();
  });
  onBackButton(() => {
    if (closeTopSheet())
      return true;
    if (currentPath() !== "/home") {
      location.hash = "#/home";
      return true;
    }
    return false;
  });
  app.applyLang();
  document.getElementById("splash").classList.add("hide");
  setTimeout(() => document.getElementById("splash").remove(), 400);
}
var qs = new URLSearchParams(location.search);
boot({ memory: qs.has("memory") }).catch((e) => {
  console.error(e);
  document.getElementById("splash").innerHTML = '<p style="padding:24px">تعذّر تشغيل التطبيق.</p>';
});
export {
  boot
};
