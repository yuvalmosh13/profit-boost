# Profit Boost — Landing Page

עמוד נחיתה רספונסיבי בעברית (RTL מלא) עבור **Profit Boost**, בנוי ב-React + Vite.
מובייל-פירסט, נקי, חמים ואמין — בלי שפת גורו, בלי לחץ מלאכותי ובלי הבטחות הכנסה.

---

## הפעלה מקומית (Run locally)

דרישה: Node.js 18+.

```bash
cd profit-boost
npm install
npm run dev      # פיתוח — פותח שרת מקומי (ברירת מחדל http://localhost:5173)
npm run build    # בילד לפרודקשן → dist/
npm run preview  # תצוגה מקדימה של הבילד
```

---

## מבנה הפרויקט (Project structure)

```
profit-boost/
├── index.html                 # lang="he" dir="rtl"; טעינת פונט Assistant
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx               # נקודת כניסה
    ├── App.jsx                # מרכיב את כל הסקשנים לפי הסדר
    ├── config/
    │   └── integration.js      # ★ קובץ ההגדרות היחיד: לינקים לרב מסר, פיקסלים, מחירים
    ├── lib/
    │   ├── cta.js              # פעולת ה-CTA המרכזית (checkout / lead) לכל הכפתורים
    │   └── tracking.js         # אירועי מעקב (InitiateCheckout / Lead) ל-Meta/GA
    ├── styles/
    │   └── global.css         # משתני צבע, טיפוגרפיה, כפתור CTA, גריד, אנימציית reveal
    ├── hooks/
    │   ├── useCountUp.js       # אנימציית ספירה עדינה למספרי המחשבון
    │   └── useReveal.js        # fade/rise בגלילה (IntersectionObserver)
    ├── data/                  # ← כל הטקסטים ניתנים לעריכה כאן
    │   ├── curriculum.js       # "מה תלמדי בתוך Profit Boost?" (מודולי הקורס)
    │   ├── offer.js            # מה כלול + בונוסים בסקשן ההצעה
    │   ├── steps.js            # "איך זה עובד"
    │   ├── faq.js              # שאלות ותשובות
    │   └── testimonials.js     # המלצות אמיתיות בלבד (ריק כברירת מחדל)
    └── components/
        ├── Hero.jsx            # + Hero.css
        ├── HeroMockup.jsx      # + HeroMockup.css  (מוקאפ מוצר CSS/SVG, בלי תמונות)
        ├── Problem.jsx         # בעיה / הזדהות
        ├── Reframe.jsx         # מיצוב: מה זה בעצם
        ├── Curriculum.jsx      # + Curriculum.css  (תוכן הקורס)
        ├── Calculator.jsx      # + Calculator.css  (המחשבון האינטראקטיבי)
        ├── HowItWorks.jsx      # + HowItWorks.css
        ├── Testimonials.jsx    # + Testimonials.css (data-driven + placeholders)
        ├── Offer.jsx           # + Offer.css  (תמחור 147→97)
        ├── LeadForm.jsx        # + LeadForm.css  (הטמעת טופס רב מסר, #lead-form)
        ├── FAQ.jsx             # + FAQ.css  (אקורדיון נגיש)
        ├── FinalCTA.jsx        # + FinalCTA.css
        ├── Footer.jsx          # + Footer.css
        ├── StickyCTA.jsx       # + StickyCTA.css  (בר תחתון דביק, 97 ₪)
        ├── CTAButton.jsx       # CTA ראשי אחיד (דרך lib/cta.js)
        └── Reveal.jsx          # עוטף אנימציית reveal
```

---

## חיבור לרב מסר (Rav Messer integration)

**כל מה שצריך להחליף נמצא בקובץ אחד:** `src/config/integration.js`.

1. **בחירת מסלול המרה** — `CONVERSION_MODE`:
   - `'checkout'` → כל הכפתורים שולחים לדף התשלום של רב מסר (`RAV_MESSER_URL`).
   - `'lead'` → כל הכפתורים גוללים לטופס רב מסר המוטמע בעמוד (`#lead-form`).
2. **הדבקת לינקים** (מחפשים `>>> PASTE`):
   - `RAV_MESSER_URL` — לינק הצ׳קאאוט של רב מסר.
   - `LEAD_FORM_URL` / `LEAD_FORM_EMBED_CODE` — לינק/קוד iframe של הטופס.
   - `THANK_YOU_URL` — דף התודה.
3. **פיקסלים ומעקב** — ה-IDs (`META_PIXEL_ID`, `GA_ID`, `RAV_MESSER_PIXEL_ID`)
   נמצאים גם הם בקובץ; את קטעי הבסיס של הפיקסלים מדביקים ב-`index.html`
   (בלוקים מסומנים ב-`>>> PASTE`).
4. **אירוע Purchase (המרה אמיתית)** — מפעילים בדף התודה שאחרי התשלום, לא בעמוד
   הזה. אם דף התודה הוא דף רב מסר — מוסיפים שם את אירוע ה-Purchase של הפיקסל.

כל עוד `RAV_MESSER_URL` עדיין `PASTE_...`, הכפתורים גוללים לסקשן ההצעה (`#offer`)
כדי שלא יהיו כפתורים "מתים".

---

## עמוד תודה + מעקב המרות (Thank-You + tracking)

- **עמוד התודה** נבנה כעמוד נפרד: `thank-you.html` → נגיש בכתובת
  `<your-domain>/thank-you.html` (רכיב `src/components/ThankYou.jsx`).
- **redirect ברב מסר:** בהגדרות המוצר/תהליך הרכישה ברב מסר, קבעי "עמוד תודה /
  הפניה אחרי רכישה" לכתובת `<your-domain>/thank-you.html`.
- **אירוע Purchase:** נורה אוטומטית בעמוד התודה (`firePurchase` ב-
  `src/lib/tracking.js`) — Meta `Purchase` + GA `purchase`, value 97 ILS.
  הוא **לא רץ ולא שובר כלום** אם אין Pixel ID (הערכים ב-config עדיין `PASTE_...`).
- **קוד-בסיס של הפיקסלים:** מדביקים ב-`index.html` וגם ב-`thank-you.html`
  (בלוקים מסומנים ב-`>>> PASTE`). מזהים: `META_PIXEL_ID` / `GA_ID` ב-config.
- **קישורי כפתורי עמוד התודה:** `MAIN_SITE_URL` / `INSTAGRAM_URL` ב-config
  (עד שמדביקים — הכפתורים מובילים לשורש האתר, בלי לינקים מתים).

---

## נוסחת המחשבון (Calculator formula)

הקלטים והברירות-מחדל (מוגדרים ב-`src/components/Calculator.jsx`):

| קלט                        | ברירת מחדל |
| -------------------------- | ---------- |
| מחיר טיפול ממוצע (`price`)  | 150        |
| כמה לקוחות בערך ביום        | 5          |
| כמה ימים את עובדת בחודש     | 22         |
| גובה ההעלאה (`increase`)    | 20         |

הנוסחה (לא מוצגת על המסך):

```
additionalMonthly = increase × clientsPerDay × daysPerMonth
additionalYearly  = additionalMonthly × 12
```

התנהגות: מתעדכן חי בהקלדה (בלי כפתור חישוב), שדה ריק נופל לברירת המחדל,
אף פעם לא מציג NaN או מספר שלילי, `inputMode="numeric"`, המספר החודשי דומיננטי
והשנתי משני, אנימציית ספירה עדינה.

> שים לב: המחיר (`price`) הוא קלט של המשתמשת אך **אינו** חלק מהנוסחה — כך הוגדר
> בספציפיקציה. ההעלאה מחושבת לפי `increase` (בשקלים), לא לפי אחוזים.

---

## איפה לערוך את הטקסטים (Where to edit copy)

- **טקסטים חוזרים (רשימות):** `src/data/` — `curriculum.js`, `offer.js`, `steps.js`, `faq.js`.
- **כותרות/פסקאות בתוך סקשן:** בקובץ ה-`.jsx` של אותו סקשן תחת `src/components/`.
- **תוויות וברירות-מחדל של המחשבון:** `src/components/Calculator.jsx` (קבוע `DEFAULTS`).
- **צבעים / פונטים / מרווחים:** `src/styles/global.css` (משתני `:root`).
- **טקסט ה-CTA:** דרך ה-`children` שמועבר ל-`CTAButton` בכל מקום.

---

## איפה להוסיף המלצות אמיתיות (Where to add real testimonials)

הכל ב-`src/data/testimonials.js`. המערך ריק בכוונה — כשהוא ריק מוצג
"empty state" נקי ואמיתי, **בלי** המלצות מומצאות/פלייסהולדר.

להוספת המלצה אמיתית (בהסכמת הלקוחה בלבד), הוסף אובייקט:

```js
export const testimonials = [
  { name: 'שם הלקוחה', role: 'קוסמטיקאית, חיפה', quote: 'הציטוט המדויק שלה.' },
]
```

הסקשן יעבור אוטומטית להצגת כרטיסי ההמלצות. אין לצטט בפרפרזה — רק ציטוט מדויק.

---

## מה אסור לשנות — שיקולי המרה ואמון (Do NOT change)

הרכיבים הבאים נבנו בקפידה כדי לשמור על אמון והמרה. שינוי שלהם עלול לפגוע באמינות:

- **הדיסקליימר של המחשבון** — הנוסח ב-`Calculator.jsx` ("הערכה בלבד… לא הבטחה ולא
  תוצאה מובטחת"). אין להסיר או להחליש. המחשבון לא מציג נוסחאות, אחוזים או "כמה את
  מפסידה".
- **המלצות אמיתיות בלבד** — אין להוסיף המלצות מומצאות ל-`testimonials.js`.
- **בלי דחיפות מלאכותית** — אין טיימרים, אין ספירה לאחור, אין "נשארו X מקומות".
- **תמחור** — מחיר נוכחי **97 ₪**, מחיר מקורי **147 ₪** (מחוק כעוגן). המחירים
  מוגדרים במקום אחד: `PRICE_LAUNCH` / `PRICE_FULL` ב-`src/config/integration.js`.
- **בלי הבטחות הכנסה** — אין להפוך את מספרי המחשבון להבטחה.
- **CTA אחד עקבי** — כל ה-CTA עוברים דרך פעולה מרכזית אחת
  (`CTAButton` → `src/lib/cta.js`). לא לחווט לינקים לכל כפתור בנפרד.
- **בלי email gate** — אין לחסום תוכן מאחורי טופס אימייל.
- **בלי אנימציות** בסקשנים Offer / FAQ / Final CTA (החלטה מכוונת לרוגע ואמון).
- **נגישות** — טקסט גוף ≥ 16px, יעדי מגע ≥ 44px, אקורדיון עם `aria-expanded`.
  לשמור.

---

## הערה על ה-copy

הספציפיקציה שהתקבלה כללה מציין-מיקום (`[PASTE THE FULL ... SPECIFICATION HERE]`)
במקום טקסט הסקשנים המלא. לכן תוויות/ברירות-מחדל/נוסחת **המחשבון** מומשו בדיוק לפי
ההגדרה, ולשאר הסקשנים נכתב טקסט עברי תקין התואם את כל האילוצים. כשמעבירים את
ה-copy הרשמי — מחליפים את המחרוזות ב-`src/data/` וב-`src/components/` (ראה למעלה).
```
