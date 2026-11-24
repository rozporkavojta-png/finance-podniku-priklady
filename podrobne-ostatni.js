/* Podrobné postupy krok za krokem – příklady z přednášek a seminářů (vše, co není v podrobne.js).
   Formát je stejný jako v podrobne.js:
   dano:   [[značka, hodnota, co to je / odkud ze zadání], ...]
   hledame: co máme spočítat
   kroky:  [{t:'název kroku', proc:'proč to děláme', vzorec, dosad, vypocet, vysl}, ...]
   kalk:   tip na kalkulačku (nepovinné), pozor: častá chyba (nepovinné) */
window.PODROBNE = window.PODROBNE || {};
(function (P) {
const R = String.raw;

/* ===================== 1 · ANALÝZA CITLIVOSTI, AKCIE ===================== */
P['1-cit'] = {
  dano: [
    [R`\(Q\)`, '2 500 ks', 'plánovaný objem výroby a prodeje'],
    [R`\(Z\)`, '325 000 Kč', 'rozpočtovaný (plánovaný) zisk'],
    [R`\(p\)`, '660 Kč/ks', 'prodejní cena za kus'],
    [R`\(FC\)`, '300 000 Kč', 'fixní náklady – nezávisí na počtu kusů'],
    [R`\(Z_{min}\)`, '280 000 Kč', 'pesimistický zisk, pod který firma nechce jít'],
    [R`\(v\)`, '?', 'variabilní náklady na kus – v zadání chybí, musíme je dopočítat']
  ],
  hledame: R`o kolik % se smí zhoršit každý ze čtyř vstupů (\(Q\), \(p\), \(v\), \(FC\)), aby zisk neklesl pod 280 000 Kč. Vždy měníme jen jeden vstup, ostatní necháváme.`,
  kroky: [
    { t: R`Dopočítat chybějící variabilní náklady \(v\)`,
      proc: 'Bez nich nejde nic dalšího spočítat. Využijeme to, že známe plánovaný zisk: zisk = tržby − variabilní náklady − fixní náklady.',
      vzorec: R`$$Z=Q\cdot(p-v)-FC$$`,
      dosad: R`$$325\,000=2\,500\cdot(660-v)-300\,000$$`,
      vypocet: R`$$2\,500\cdot(660-v)=625\,000\;\Rightarrow\;660-v=250\;\Rightarrow\;v=410\text{ Kč/ks}$$`,
      vysl: R`\(v=410\) Kč/ks. Rozdíl \(p-v=250\) Kč je <b>příspěvek na úhradu</b> – tolik z každého kusu zbude na fixní náklady a zisk.` },
    { t: 'a) O kolik může klesnout objem prodeje',
      proc: 'Hledáme počet kusů, při kterém zisk vyjde přesně 280 000 Kč. Fixní náklady a minimální zisk dohromady musí pokrýt příspěvky z prodaných kusů.',
      vzorec: R`$$Q_1=\frac{FC+Z_{min}}{p-v}$$`,
      dosad: R`$$Q_1=\frac{300\,000+280\,000}{660-410}=\frac{580\,000}{250}$$`,
      vypocet: R`$$Q_1=2\,320\text{ ks}\qquad\text{pokles}=\frac{2\,500-2\,320}{2\,500}=\frac{180}{2\,500}=0{,}072$$`,
      vysl: 'Objem může klesnout nejvýš o <b>7,2 %</b> (o 180 ks).' },
    { t: 'b) O kolik může klesnout cena',
      proc: R`Do rovnice zisku dosadíme minimální zisk a neznámou necháme cenu \(p\).`,
      dosad: R`$$280\,000=2\,500\cdot(p-410)-300\,000$$`,
      vypocet: R`$$p-410=\frac{580\,000}{2\,500}=232\;\Rightarrow\;p=642\text{ Kč}\qquad\text{pokles}=\frac{660-642}{660}=\frac{18}{660}=0{,}0273$$`,
      vysl: 'Cena může klesnout nejvýš o <b>2,73 %</b> (o 18 Kč).' },
    { t: 'c) O kolik mohou vzrůst variabilní náklady',
      proc: R`Stejná rovnice, neznámá je tentokrát \(v\).`,
      dosad: R`$$280\,000=2\,500\cdot(660-v)-300\,000$$`,
      vypocet: R`$$660-v=232\;\Rightarrow\;v=428\text{ Kč}\qquad\text{růst}=\frac{428-410}{410}=\frac{18}{410}=0{,}0439$$`,
      vysl: 'Variabilní náklady mohou vzrůst nejvýš o <b>4,39 %</b>.' },
    { t: 'd) O kolik mohou vzrůst fixní náklady',
      proc: 'Příspěvek na úhradu celkem je 2 500 · 250 = 625 000 Kč. Co z něj zbude po odečtení minimálního zisku, to mohou být fixní náklady.',
      dosad: R`$$280\,000=2\,500\cdot250-FC$$`,
      vypocet: R`$$FC=625\,000-280\,000=345\,000\text{ Kč}\qquad\text{růst}=\frac{45\,000}{300\,000}=0{,}15$$`,
      vysl: 'Fixní náklady mohou vzrůst nejvýš o <b>15 %</b>.' },
    { t: 'Porovnat a říct, co je nejcitlivější',
      proc: 'Nejcitlivější je ten vstup, u kterého stačí nejmenší procentní změna, aby zisk spadl na minimum.',
      vypocet: 'cena 2,73 % &lt; variabilní náklady 4,39 % &lt; objem 7,2 % &lt; fixní náklady 15 %',
      vysl: 'Nejcitlivější je <b>cena</b>, nejméně citlivé jsou fixní náklady.' }
  ],
  kalk: 'Procentní změnu počítej vždy jako (nová − původní) / původní. Dělíš původní hodnotou, ne novou.',
  pozor: 'U a) a b) jde o pokles, u c) a d) o růst – směr je vždy ten, který zisk zhoršuje. Písemně uváděj, že jde o maximální možnou změnu.'
};

P['1-1'] = {
  dano: [
    [R`\(D_0\)`, '210 Kč', 'dividenda, kterou podnik UŽ vyplatil („vyplatil“ = minulost)'],
    [R`\(r\)`, '10 % = 0,10', 'výnosová sazba, kterou akcionář požaduje'],
    [R`\(g\)`, '2 % = 0,02', 'roční růst dividendy']
  ],
  hledame: R`dnešní hodnotu akcie \(P_0\) pro akcionáře, který ji bude držet napořád.`,
  kroky: [
    { t: 'Vybrat vzorec',
      proc: 'Akcionář akcii neprodá, takže jediné, co z ní má, jsou dividendy. Ty rostou stále stejným tempem donekonečna → Gordonův model.',
      vzorec: R`$$P_0=\frac{D_1}{r-g}$$` },
    { t: R`Z vyplacené dividendy udělat dividendu příštího roku`,
      proc: R`Do vzorce patří dividenda, která teprve přijde (\(D_1\)). My máme tu už vyplacenou (\(D_0\)), proto ji zvýšíme o roční růst.`,
      vzorec: R`$$D_1=D_0\cdot(1+g)$$`,
      vypocet: R`$$D_1=210\cdot1{,}02=214{,}20\text{ Kč}$$` },
    { t: 'Spočítat jmenovatel',
      proc: 'Procenta vždy jako desetinná čísla.',
      vypocet: R`$$r-g=0{,}10-0{,}02=0{,}08$$` },
    { t: 'Vydělit',
      vypocet: R`$$P_0=\frac{214{,}20}{0{,}08}=2\,677{,}50\text{ Kč}$$`,
      vysl: 'Hodnota akcie je <b>2 677,50 Kč</b>.' }
  ],
  kalk: '210 × 1,02 = 214,2 → ÷ 0,08 = 2 677,5.',
  pozor: R`Když zapomeneš dividendu zvýšit o růst (\(210/0{,}08\)), vyjde 2 625 Kč – to je nejčastější chyba. Slovo „vyplatil“ znamená \(D_0\).`
};

P['1-2'] = {
  dano: [
    [R`\(P\)`, '1 500 Kč', 'cena, za kterou se akcie prodává na trhu'],
    [R`\(D\)`, '100 Kč', 'roční dividenda, stále stejná (bez růstu)'],
    [R`\(t\)`, '15 % = 0,15', 'daň z dividendy'],
    [R`\(r\)`, '10 % = 0,10', 'výnosnost, kterou chci aspoň dostat']
  ],
  hledame: 'jestli se akcie za 1 500 Kč vyplatí koupit. Porovnáme, kolik pro mě akcie skutečně má hodnotu, s cenou na trhu.',
  kroky: [
    { t: 'Spočítat dividendu po zdanění',
      proc: 'Na účet mi nepřijde 100 Kč, ale jen to, co zbude po dani. Počítat musím s tím, co opravdu dostanu.',
      vzorec: R`$$D_{\text{čistá}}=D\cdot(1-t)$$`,
      vypocet: R`$$D_{\text{čistá}}=100\cdot(1-0{,}15)=100\cdot0{,}85=85\text{ Kč}$$` },
    { t: 'Spočítat vnitřní hodnotu akcie',
      proc: 'Dividenda je konstantní a nekonečná → věčná renta (perpetuita). Její hodnota je platba dělená požadovanou výnosností.',
      vzorec: R`$$P_0=\frac{D_{\text{čistá}}}{r}$$`,
      vypocet: R`$$P_0=\frac{85}{0{,}10}=850\text{ Kč}$$`,
      vysl: 'Aby mi akcie nesla 10 %, směl bych za ni dát nejvýš 850 Kč.' },
    { t: 'Porovnat s tržní cenou',
      proc: 'Vnitřní hodnota nižší než cena = akcie je nadhodnocená (drahá).',
      vypocet: R`$$850\text{ Kč}<1\,500\text{ Kč}$$`,
      vysl: 'Akcie je nadhodnocená → <b>nekoupit</b>.' },
    { t: 'Kontrola druhým způsobem – skutečná výnosnost',
      proc: 'Můžu se zeptat i obráceně: kolik procent mi akcie vynese, když ji koupím za 1 500 Kč?',
      vzorec: R`$$r_{\text{skut}}=\frac{D_{\text{čistá}}}{P}$$`,
      vypocet: R`$$r_{\text{skut}}=\frac{85}{1\,500}=0{,}0567=5{,}67\,\%$$`,
      vysl: '5,67 % je méně než požadovaných 10 % → stejný závěr, nekoupit.' }
  ],
  pozor: 'Nezapomeň na daň. S hrubou dividendou 100 Kč by vyšla hodnota 1 000 Kč – závěr by tu byl stejný, ale číslo špatně.'
};

P['1-4'] = {
  dano: [
    [R`\(D\)`, '50 Kč', 'roční dividenda z prioritní akcie – pevná, nemění se'],
    [R`\(r\)`, '10 % = 0,10', 'požadovaná výnosnost = tržní úroková míra']
  ],
  hledame: R`základ tržní ceny prioritní akcie \(P_0\).`,
  kroky: [
    { t: 'Uvědomit si, co prioritní akcie vyplácí',
      proc: 'Prioritní akcie má pevnou dividendu, která se nemění a nemá konec. Je to tedy věčná renta (perpetuita).',
      vzorec: R`$$P_0=\frac{D}{r}$$` },
    { t: 'Dosadit a vydělit',
      dosad: R`$$P_0=\frac{50}{0{,}10}$$`,
      vypocet: R`$$P_0=500\text{ Kč}$$`,
      vysl: 'Základ tržní ceny je <b>500 Kč</b>.' },
    { t: 'Ověřit si výsledek selským rozumem',
      proc: 'Když uložím 500 Kč na 10 %, dostanu ročně 50 Kč – přesně tolik, kolik je dividenda. Sedí to.',
      vypocet: R`$$500\cdot0{,}10=50\text{ Kč}$$` }
  ],
  pozor: 'Dělíš desetinným číslem 0,10, ne číslem 10. Vyšší požadovaná výnosnost znamená nižší cenu (při 20 % by to bylo jen 250 Kč).'
};

P['1-6'] = {
  dano: [
    [R`\(E_1\)`, '5 €', 'zisk na akcii (EPS)'],
    [R`\(r\)`, '12,5 % = 0,125', 'míra tržní kapitalizace = výnosnost požadovaná investory'],
    [R`\(b\)`, '60 % = 0,6', 'podíl zisku, který firma v části b) zadrží a reinvestuje'],
    [R`\(ROE\)`, '15 % = 0,15', 'kolik vydělají reinvestované peníze']
  ],
  hledame: 'a) cenu akcie firmy, která vyplácí celý zisk; b) dividendu, růst, cenu akcie a hodnotu růstových příležitostí (PVGO) firmy, která 60 % zisku reinvestuje.',
  kroky: [
    { t: 'a) Cena akcie bez růstu',
      proc: R`Firma vyplatí všechno, co vydělá, takže nic neinvestuje a neroste (\(g=0\)). Dividenda = zisk a je to věčná renta.`,
      vzorec: R`$$P_0=\frac{E_1}{r}$$`,
      vypocet: R`$$P_0=\frac{5}{0{,}125}=40\text{ €}$$`,
      vysl: 'Cena akcie bez růstu je <b>40 €</b>.' },
    { t: 'b1) Dividenda na akcii',
      proc: 'Když firma 60 % zisku zadrží, akcionářům vyplatí zbylých 40 %.',
      vzorec: R`$$D_1=E_1\cdot(1-b)$$`,
      vypocet: R`$$D_1=5\cdot(1-0{,}6)=5\cdot0{,}4=2\text{ €}$$` },
    { t: 'b2) Tempo růstu',
      proc: 'Firma roste díky tomu, co reinvestuje. Růst = kolik zadrží × kolik na tom vydělá.',
      vzorec: R`$$g=b\cdot ROE$$`,
      vypocet: R`$$g=0{,}6\cdot0{,}15=0{,}09=9\,\%$$` },
    { t: 'b3) Cena akcie s růstem',
      proc: 'Dividenda je teď nižší (2 € místo 5 €), ale roste o 9 % ročně → Gordonův model.',
      vzorec: R`$$P_0=\frac{D_1}{r-g}$$`,
      dosad: R`$$P_0=\frac{2}{0{,}125-0{,}09}=\frac{2}{0{,}035}$$`,
      vypocet: R`$$P_0=57{,}14\text{ €}$$`,
      vysl: 'Cena akcie je <b>57,14 €</b> – víc než 40 €, i když je dividenda menší.' },
    { t: 'b4) Hodnota růstových příležitostí',
      proc: 'PVGO je to, o co je akcie dražší díky investicím. Odečteme cenu, kterou by měla bez růstu.',
      vzorec: R`$$PVGO=P_0-\frac{E_1}{r}$$`,
      vypocet: R`$$PVGO=57{,}14-40=17{,}14\text{ €}$$`,
      vysl: 'PVGO = <b>17,14 €</b>.' }
  ],
  kalk: '2 ÷ 0,035 = 57,142857. Zaokrouhluj až na konci.',
  pozor: R`Reinvestice zvedá cenu jen proto, že \(ROE=15\,\%\) je víc než \(r=12{,}5\,\%\). Kdyby bylo ROE nižší než r, PVGO by vyšlo záporné a cena by klesla. Do \(g=b\cdot ROE\) patří zadržený podíl (0,6), ne vyplacený (0,4).`
};

/* ===================== 1+ · GORDONŮV MODEL (TÉMA 13) ===================== */
P['13-1'] = {
  dano: [
    [R`\(r_f\)`, '3,0 %', 'bezriziková výnosová míra'],
    [R`\(RP\)`, '6,0 %', R`prémie za riziko trhu (už je to rozdíl \(r_m-r_f\))`],
    [R`\(\beta\)`, '1,20', 'citlivost akcie na trh'],
    [R`\(D_0\)`, '2,00 $', 'běžná = poslední vyplacená dividenda'],
    [R`\(g\)`, '5,0 % = 0,05', 'růst dividendy'],
    [R`\(P_0\)`, '24,00 $', 'aktuální tržní cena (jen pro porovnání)']
  ],
  hledame: R`teoretickou (vnitřní) cenu akcie \(V_0\) a jestli je akcie pod- nebo nadhodnocená.`,
  kroky: [
    { t: 'Spočítat požadovanou výnosnost pomocí CAPM',
      proc: 'Gordonův model potřebuje požadovanou výnosnost r. Tu zadání nedává přímo, ale dá se složit z bezrizikové sazby a prémie za riziko násobené betou.',
      vzorec: R`$$r=r_f+\beta\cdot RP$$`,
      vypocet: R`$$r=3+1{,}2\cdot6=3+7{,}2=10{,}2\,\%=0{,}102$$` },
    { t: 'Spočítat dividendu příštího roku',
      proc: R`„Běžná dividenda“ je \(D_0\), do vzorce patří \(D_1\).`,
      vzorec: R`$$D_1=D_0\cdot(1+g)$$`,
      vypocet: R`$$D_1=2{,}00\cdot1{,}05=2{,}10\text{ \$}$$` },
    { t: 'Dosadit do Gordonova modelu',
      vzorec: R`$$V_0=\frac{D_1}{r-g}$$`,
      dosad: R`$$V_0=\frac{2{,}10}{0{,}102-0{,}05}=\frac{2{,}10}{0{,}052}$$`,
      vypocet: R`$$V_0=40{,}38\text{ \$}$$` },
    { t: 'Porovnat s tržní cenou',
      proc: 'Vnitřní hodnota vyšší než cena = akcie je levná (podhodnocená).',
      vypocet: R`$$40{,}38\text{ \$}>24{,}00\text{ \$}$$`,
      vysl: R`\(V_0=\) <b>40,38 $</b>, akcie je <b>podhodnocená</b> → koupit.` }
  ],
  kalk: '1,2 × 6 + 3 = 10,2 → 0,102 − 0,05 = 0,052 → 2,1 ÷ 0,052 = 40,3846.',
  pozor: 'Prémie za riziko 6 % už je rozdíl mezi trhem a bezrizikovou sazbou. Neodečítej od ní bezrizikovou sazbu podruhé.'
};

P['13-2'] = {
  dano: [
    [R`\(P_0\)`, '24 $', 'aktuální tržní cena'],
    [R`\(D_0\)`, '2 $', 'běžná dividenda'],
    [R`\(r\)`, '10,2 % = 0,102', 'požadovaná výnosnost z příkladu 1']
  ],
  hledame: R`implikovanou míru růstu \(g\) – tedy jaký růst dividendy „má v hlavě“ trh, když akcii oceňuje na 24 $.`,
  kroky: [
    { t: 'Napsat Gordonův model s tržní cenou',
      proc: R`Tentokrát cenu známe a neznámá je \(g\). Vyjdeme ze stejného vzorce a \(g\) z něj vyjádříme.`,
      vzorec: R`$$P_0=\frac{D_0\cdot(1+g)}{r-g}$$`,
      dosad: R`$$24=\frac{2\cdot(1+g)}{0{,}102-g}$$` },
    { t: 'Zbavit se zlomku',
      proc: 'Obě strany vynásobíme jmenovatelem.',
      vypocet: R`$$24\cdot(0{,}102-g)=2\cdot(1+g)$$` },
    { t: 'Roznásobit závorky',
      vypocet: R`$$2{,}448-24g=2+2g$$` },
    { t: R`Dát \(g\) na jednu stranu a čísla na druhou`,
      vypocet: R`$$2{,}448-2=24g+2g\;\Rightarrow\;0{,}448=26g$$` },
    { t: 'Vydělit',
      vypocet: R`$$g=\frac{0{,}448}{26}=0{,}01723=1{,}72\,\%$$`,
      vysl: 'Implikovaný růst je asi <b>1,72 %</b>. Trh tedy čeká mnohem pomalejší růst než 5 % z příkladu 1.' },
    { t: 'Zkratka – hotový vzorec',
      proc: 'Stejnou úpravu jde udělat obecně a příště rovnou dosadit.',
      vzorec: R`$$g=\frac{P_0\cdot r-D_0}{P_0+D_0}$$`,
      vypocet: R`$$g=\frac{24\cdot0{,}102-2}{24+2}=\frac{0{,}448}{26}=0{,}01723$$` }
  ],
  pozor: R`Ve vzorci je \(D_0\) (ne \(D_1\)), protože \(D_1\) samo závisí na hledaném \(g\). Ve jmenovateli zkratky je součet \(P_0+D_0\).`
};

P['13-3'] = {
  dano: [
    [R`\(D_0\)`, '2 $', 'běžná dividenda'],
    [R`\(g\)`, '5 % = 0,05', 'růst dividendy'],
    [R`\(P_0\)`, '24 $', 'aktuální tržní cena']
  ],
  hledame: R`implikovanou výnosovou míru \(r\) – kolik procent ročně akcie vynese tomu, kdo ji koupí za 24 $.`,
  kroky: [
    { t: R`Vyjádřit \(r\) z Gordonova modelu`,
      proc: R`Z \(P_0=\frac{D_1}{r-g}\) dostaneme \(r-g=\frac{D_1}{P_0}\). Výnos má tedy dvě části: dividendový výnos a růst.`,
      vzorec: R`$$r=\frac{D_1}{P_0}+g$$` },
    { t: 'Spočítat dividendu příštího roku',
      vypocet: R`$$D_1=2\cdot1{,}05=2{,}10\text{ \$}$$` },
    { t: 'Spočítat dividendový výnos',
      proc: 'Kolik procent z kupní ceny dostanu za rok na dividendě.',
      vypocet: R`$$\frac{D_1}{P_0}=\frac{2{,}10}{24}=0{,}0875=8{,}75\,\%$$` },
    { t: 'Přičíst růst',
      vypocet: R`$$r=0{,}0875+0{,}05=0{,}1375$$`,
      vysl: 'Implikovaná výnosová míra je <b>13,75 %</b> (8,75 % z dividendy + 5 % z růstu ceny).' }
  ],
  pozor: 'Vyšlo víc než požadovaných 10,2 % z příkladu 1 – to jen jinak říká, že je akcie za 24 $ levná.'
};

P['13-4'] = {
  dano: [
    [R`\(P_0\)`, '80 $', 'cena akcie'],
    [R`\(E_1\)`, '5 $', 'očekávaný zisk na akcii'],
    [R`\(r\)`, '10 % = 0,10', 'požadovaná výnosová míra']
  ],
  hledame: R`hodnotu růstových příležitostí PVGO a poměr \(P/E\).`,
  kroky: [
    { t: 'Kolik by akcie stála bez růstu',
      proc: 'Kdyby firma jen udržovala současný zisk a celý ho vyplácela, byla by akcie věčná renta ze zisku.',
      vzorec: R`$$\frac{E_1}{r}$$`,
      vypocet: R`$$\frac{5}{0{,}10}=50\text{ \$}$$` },
    { t: 'PVGO = zbytek ceny',
      proc: 'Vše, co trh platí nad těch 50 $, platí za očekávaný budoucí růst.',
      vzorec: R`$$PVGO=P_0-\frac{E_1}{r}$$`,
      vypocet: R`$$PVGO=80-50=30\text{ \$}$$`,
      vysl: R`PVGO = <b>30 $</b>, tj. \(30/80=37{,}5\,\%\) ceny tvoří růstové příležitosti.` },
    { t: 'Poměr P/E',
      proc: 'Kolik dolarů investor platí za 1 dolar ročního zisku.',
      vzorec: R`$$P/E=\frac{P_0}{E_1}$$`,
      vypocet: R`$$P/E=\frac{80}{5}=16$$`,
      vysl: 'P/E = <b>16</b>.' }
  ],
  pozor: R`Bez růstu by P/E bylo jen \(1/r=10\). To, že je 16, je právě díky PVGO.`
};

P['13-5'] = {
  dano: [
    [R`\(r_f\)`, '2,0 %', 'bezriziková míra'],
    [R`\(RP\)`, '5,5 %', 'prémie za riziko'],
    [R`\(\beta\)`, '1,5', 'beta akcie'],
    [R`\(D_0\)`, '5,00 $', 'běžná dividenda'],
    [R`\(g\)`, '1,5 % = 0,015', 'růst dividendy'],
    [R`\(P_0\)`, '60 $', 'aktuální tržní cena']
  ],
  hledame: R`1) teoretickou cenu \(V_0\), 2) implikovaný růst při ceně 60 $, 3) implikovanou výnosovou míru.`,
  kroky: [
    { t: 'Požadovaná výnosnost z CAPM',
      vzorec: R`$$r=r_f+\beta\cdot RP$$`,
      vypocet: R`$$r=2+1{,}5\cdot5{,}5=2+8{,}25=10{,}25\,\%=0{,}1025$$` },
    { t: 'Dividenda příštího roku',
      vzorec: R`$$D_1=D_0\cdot(1+g)$$`,
      vypocet: R`$$D_1=5\cdot1{,}015=5{,}075\text{ \$}$$` },
    { t: '1) Teoretická cena',
      vzorec: R`$$V_0=\frac{D_1}{r-g}$$`,
      dosad: R`$$V_0=\frac{5{,}075}{0{,}1025-0{,}015}=\frac{5{,}075}{0{,}0875}$$`,
      vypocet: R`$$V_0=58{,}00\text{ \$}$$`,
      vysl: R`\(V_0=\) <b>58,00 $</b> &lt; 60 $ → akcie je mírně nadhodnocená.` },
    { t: '2) Implikovaný růst',
      proc: R`Jaký růst by ospravedlnil cenu 60 $ při \(r=10{,}25\,\%\)?`,
      vzorec: R`$$g=\frac{P_0\cdot r-D_0}{P_0+D_0}$$`,
      dosad: R`$$g=\frac{60\cdot0{,}1025-5}{60+5}=\frac{6{,}15-5}{65}$$`,
      vypocet: R`$$g=\frac{1{,}15}{65}=0{,}01769=1{,}77\,\%$$`,
      vysl: 'Implikovaný růst ≈ <b>1,77 %</b> (o něco víc než zadaných 1,5 %, protože cena je nad vnitřní hodnotou).' },
    { t: '3) Implikovaná výnosová míra',
      proc: R`Kolik vynese akcie koupená za 60 $ při růstu 1,5 %?`,
      vzorec: R`$$r=\frac{D_1}{P_0}+g$$`,
      dosad: R`$$r=\frac{5{,}075}{60}+0{,}015$$`,
      vypocet: R`$$r=0{,}0846+0{,}015=0{,}0996=9{,}96\,\%$$`,
      vysl: 'Implikovaná výnosnost ≈ <b>9,96 %</b> (méně než požadovaných 10,25 % – další znak, že je akcie drahá).' }
  ],
  kalk: '1,5 × 5,5 + 2 = 10,25. Pak 5,075 ÷ 0,0875 = 58.',
  pozor: R`Všechny tři výsledky říkají totéž jinými slovy: cena 60 $ je trochu vysoko. V bodě 2 je ve vzorci \(D_0\), v bodě 3 \(D_1\).`
};

/* ===================== 2 · DLUHOPISY ===================== */
P['2-L'] = {
  dano: [
    [R`\(F\)`, '100 Kč', 'nominální hodnota, vyplatí se na konci'],
    [R`\(c\)`, '8 %', R`roční kupónová sazba → kupón \(C=8\) Kč`],
    [R`\(i\)`, '10 % = 0,10', 'výnos do splatnosti = sazba, kterou diskontujeme'],
    [R`\(n\)`, '5 let', 'doba do splatnosti']
  ],
  hledame: 'peněžní toky z dluhopisu a jeho cenu při roční výplatě kupónu a potom při pololetní výplatě.',
  kroky: [
    { t: 'Vypsat peněžní toky',
      proc: 'Každý rok přijde kupón 8 % ze 100 Kč = 8 Kč. V posledním roce přijde kupón a k němu nominál.',
      vypocet: '1. rok 8 · 2. rok 8 · 3. rok 8 · 4. rok 8 · 5. rok 8 + 100 = 108 (celkem 140 Kč)' },
    { t: 'Každý tok převést na dnešní hodnotu',
      proc: 'Koruna za rok má menší hodnotu než koruna dnes. Proto každý tok vydělíme 1,10 umocněným na počet let, za které přijde.',
      vzorec: R`$$PV_t=\frac{CF_t}{(1+i)^t}$$`,
      vypocet: R`$$\frac{8}{1{,}1}=7{,}27\quad\frac{8}{1{,}1^2}=6{,}61\quad\frac{8}{1{,}1^3}=6{,}01\quad\frac{8}{1{,}1^4}=5{,}46\quad\frac{108}{1{,}1^5}=67{,}06$$` },
    { t: 'Sečíst',
      vypocet: R`$$P_0=7{,}27+6{,}61+6{,}01+5{,}46+67{,}06=92{,}42\text{ Kč}$$`,
      vysl: 'Cena při roční výplatě je <b>92,42 Kč</b>. Je pod nominálem, protože kupón 8 % je menší než tržní výnos 10 %.' },
    { t: 'Pololetní výplata – přepočítat vstupy',
      proc: 'Kupón se rozdělí na dvě poloviny a všechno se počítá v půlrocích: poloviční kupón, poloviční sazba, dvojnásobný počet období.',
      vypocet: R`$$C=\frac{8}{2}=4\text{ Kč}\qquad i=\frac{10\,\%}{2}=5\,\%\qquad n=5\cdot2=10\text{ období}$$` },
    { t: 'Pololetní výplata – spočítat cenu',
      proc: 'Deset stejných plateb se rychleji sečte přes zásobitel (součet diskontních faktorů).',
      vzorec: R`$$P_0=C\cdot\frac{1-(1+i)^{-n}}{i}+\frac{F}{(1+i)^n}$$`,
      dosad: R`$$P_0=4\cdot\frac{1-1{,}05^{-10}}{0{,}05}+\frac{100}{1{,}05^{10}}$$`,
      vypocet: R`$$1{,}05^{10}=1{,}6289\;\Rightarrow\;P_0=4\cdot7{,}7217+61{,}39=30{,}89+61{,}39=92{,}28\text{ Kč}$$`,
      vysl: 'Cena při pololetní výplatě je <b>92,28 Kč</b>.' }
  ],
  kalk: R`Zásobitel: 1,05 → \(x^y\) → 10 → = (1,6289) → 1/x (0,6139) → 1 − 0,6139 = 0,3861 → ÷ 0,05 = 7,7217.`,
  pozor: 'U pololetního kupónu musíš změnit tři věci najednou: kupón ÷ 2, sazbu ÷ 2, počet období × 2. Nominál se nedělí.'
};

P['2-Lz'] = {
  dano: [
    [R`\(F\)`, '100 Kč', 'nominální hodnota'],
    [R`\(i\)`, '8 % = 0,08', 'výnos do splatnosti p. a.'],
    ['emise', '1. 1. 2008', 'kdy byl dluhopis vydán (pro cenu není důležité)'],
    ['vypořádání', '1. 7. 2008', 'den, kdy dluhopis kupuju'],
    ['splatnost', '1. 1. 2011', 'den, kdy dostanu 100 Kč']
  ],
  hledame: 'cenu zero bondu ke dni vypořádání.',
  kroky: [
    { t: 'Zjistit, kolik let zbývá do splatnosti',
      proc: 'Cena závisí jen na době od nákupu do splatnosti, ne na datu emise. Při bázi 30/360 má každý měsíc 30 dní a rok 360 dní.',
      vypocet: R`1. 7. 2008 → 1. 1. 2011 = 2 roky a 6 měsíců = \(2+\frac{180}{360}=2{,}5\) roku`,
      vysl: R`\(n=2{,}5\)` },
    { t: 'Vybrat vzorec',
      proc: 'Zero bond nemá kupóny, přijde jediná platba – nominál na konci. Jen ji odúročíme.',
      vzorec: R`$$P=\frac{F}{(1+i)^n}$$` },
    { t: 'Dosadit',
      dosad: R`$$P=\frac{100}{1{,}08^{2{,}5}}$$` },
    { t: 'Spočítat mocninu s desetinným exponentem',
      proc: R`\(1{,}08^{2{,}5}=1{,}08^2\cdot\sqrt{1{,}08}\).`,
      vypocet: R`$$1{,}08^{2{,}5}=1{,}1664\cdot1{,}03923=1{,}21216$$` },
    { t: 'Vydělit',
      vypocet: R`$$P=\frac{100}{1{,}21216}=82{,}50\text{ Kč}$$`,
      vysl: 'Cena je <b>82,50 Kč</b>.' }
  ],
  kalk: R`1,08 → \(x^y\) → 2,5 → = (1,21216) → 1/x → × 100.`,
  pozor: 'Nepočítej dobu od emise (3 roky) – vyšlo by 79,38 Kč. Počítá se od dne, kdy dluhopis kupuješ.'
};

P['2-1'] = {
  dano: [
    [R`\(F\)`, '10 000 Kč', 'nominální hodnota'],
    [R`\(c\)`, '6 % p. a.', 'kupónová sazba'],
    [R`\(n\)`, '3 roky', 'splatnost'],
    [R`\(i\)`, '5 % = 0,05', 'tržní úroková sazba = čím diskontujeme']
  ],
  hledame: R`teoretickou cenu dluhopisu \(P_0\).`,
  kroky: [
    { t: 'Spočítat roční kupón',
      proc: 'Kupón se počítá vždy z nominálu, ne z ceny.',
      vzorec: R`$$C=F\cdot c$$`,
      vypocet: R`$$C=10\,000\cdot0{,}06=600\text{ Kč}$$` },
    { t: 'Vypsat peněžní toky',
      vypocet: '1. rok 600 · 2. rok 600 · 3. rok 600 + 10 000 = 10 600' },
    { t: 'Diskontovat každý tok tržní sazbou',
      proc: 'Cena dluhopisu = součet současných hodnot všeho, co z něj přiteče.',
      vzorec: R`$$P_0=\frac{C}{1+i}+\frac{C}{(1+i)^2}+\frac{C+F}{(1+i)^3}$$`,
      dosad: R`$$P_0=\frac{600}{1{,}05}+\frac{600}{1{,}05^2}+\frac{10\,600}{1{,}05^3}$$`,
      vypocet: R`$$1{,}05^2=1{,}1025\quad1{,}05^3=1{,}157625\;\Rightarrow\;571{,}43+544{,}22+9\,156{,}68$$` },
    { t: 'Sečíst',
      vypocet: R`$$P_0\doteq10\,272{,}32\text{ Kč}$$`,
      vysl: R`Cena je <b>10 272,32 Kč</b>, tj. 102,72 % nominálu.` },
    { t: 'Kontrola logikou',
      proc: 'Kupón 6 % je vyšší než tržní sazba 5 %, dluhopis je tedy výhodnější než trh a musí stát víc než nominál (prodává se s prémií). Sedí.' }
  ],
  kalk: '600 ÷ 1,05 = 571,43 → 600 ÷ 1,05 ÷ 1,05 = 544,22 → 10 600 ÷ 1,05 ÷ 1,05 ÷ 1,05 = 9 156,68.',
  pozor: 'Součet zaokrouhlených čísel dá 10 272,33, přesný výpočet 10 272,325 – rozdíl haléře je jen zaokrouhlení. V posledním roce nezapomeň přičíst nominál.'
};

P['2-2'] = {
  dano: [
    [R`\(C\)`, '600 Kč', 'kupón vyplácený každý rok, napořád'],
    [R`\(i\)`, '6 % = 0,06', 'tržní úroková sazba']
  ],
  hledame: R`cenu konzoly \(P_0\) – kolik za ni maximálně dát.`,
  kroky: [
    { t: 'Co je konzola',
      proc: 'Věčný dluhopis: nikdy se nesplatí, jen donekonečna platí kupón. Nominál se proto nikdy nevrátí a do ceny nevstupuje.' },
    { t: 'Vzorec věčné renty',
      proc: 'Nekonečný součet stejných diskontovaných plateb se zjednoduší na platbu dělenou sazbou.',
      vzorec: R`$$P_0=\frac{C}{i}$$` },
    { t: 'Dosadit a vydělit',
      dosad: R`$$P_0=\frac{600}{0{,}06}$$`,
      vypocet: R`$$P_0=10\,000\text{ Kč}$$`,
      vysl: 'Konzolu bych koupil nejvýš za <b>10 000 Kč</b>.' },
    { t: 'Kontrola',
      proc: 'Kdybych 10 000 Kč uložil na 6 %, dostával bych 600 Kč ročně – přesně jako z konzoly.',
      vypocet: R`$$10\,000\cdot0{,}06=600\text{ Kč}$$` }
  ],
  pozor: 'Když tržní sazba vzroste, cena konzoly klesne (při 8 % by to bylo jen 7 500 Kč).'
};

P['2-3'] = {
  dano: [
    [R`\(F\)`, '10 000 Kč', 'nominální hodnota, vyplatí se za 5 let'],
    [R`\(n\)`, '5 let', 'splatnost'],
    [R`\(i\)`, '5 % = 0,05', 'tržní úroková sazba']
  ],
  hledame: R`teoretickou cenu dluhopisu s nulovým kupónem \(P_0\).`,
  kroky: [
    { t: 'Vybrat vzorec',
      proc: 'Žádné kupóny, jediná platba na konci. Stačí nominál odúročit o 5 let.',
      vzorec: R`$$P_0=\frac{F}{(1+i)^n}$$` },
    { t: 'Dosadit',
      dosad: R`$$P_0=\frac{10\,000}{1{,}05^5}$$` },
    { t: 'Spočítat mocninu',
      vypocet: R`$$1{,}05^5=1{,}27628$$` },
    { t: 'Vydělit',
      vypocet: R`$$P_0=\frac{10\,000}{1{,}27628}=7\,835{,}26\text{ Kč}$$`,
      vysl: 'Cena je <b>7 835,26 Kč</b>, tj. 78,35 % nominálu.' },
    { t: 'Co to znamená',
      proc: 'Koupím za 7 835,26 Kč, za 5 let dostanu 10 000 Kč. Rozdíl 2 164,74 Kč je můj výnos – odpovídá přesně 5 % ročně.' }
  ],
  kalk: R`1,05 → \(x^y\) → 5 → = → 1/x → × 10 000.`,
  pozor: 'Nedělej 10 000 ÷ (1 + 5 · 0,05). To je jednoduché úročení, u dluhopisů se používá složené (mocnina).'
};

P['2-4'] = {
  dano: [
    [R`\(F\)`, '1 274 tis. Kč', 'nominální hodnota dluhopisů, splatná najednou na konci'],
    [R`\(C\)`, '63,7 tis. Kč', 'roční kupón před zdaněním (5 % z 1 274)'],
    [R`\(t\)`, '20 %', 'daň z úrokových výnosů'],
    [R`\(n\)`, '7 let', 'zbývá do splatnosti'],
    [R`\(i\)`, '7 % = 0,07', 'výnos do splatnosti podobných dluhopisů']
  ],
  hledame: 'tržní hodnotu držených dluhopisů (pro ocenění podniku).',
  kroky: [
    { t: 'Kupón po zdanění',
      proc: 'Podnik reálně dostane jen kupón snížený o daň.',
      vzorec: R`$$C_{\text{po dani}}=C\cdot(1-t)$$`,
      vypocet: R`$$63{,}7\cdot0{,}8=50{,}96\doteq51\text{ tis. Kč}$$`,
      vysl: 'Slide zaokrouhluje na 51 tis. Kč, počítáme s ním.' },
    { t: 'Současná hodnota sedmi kupónů',
      proc: 'Sedm stejných plateb → zásobitel (anuitní faktor). Říká, kolik je dnes hodnota 1 Kč vyplácené 7 let.',
      vzorec: R`$$\text{zásobitel}=\frac{1-(1+i)^{-n}}{i}$$`,
      dosad: R`$$\frac{1-1{,}07^{-7}}{0{,}07}$$`,
      vypocet: R`$$1{,}07^{7}=1{,}60578\;\Rightarrow\;1{,}07^{-7}=0{,}62275\;\Rightarrow\;\frac{0{,}37725}{0{,}07}=5{,}3893$$` },
    { t: 'Vynásobit kupónem',
      vypocet: R`$$51\cdot5{,}3893=274{,}9\text{ tis. Kč}$$` },
    { t: 'Současná hodnota nominálu',
      proc: 'Nominál přijde jednorázově za 7 let, jen ho odúročíme.',
      vzorec: R`$$\frac{F}{(1+i)^n}$$`,
      vypocet: R`$$\frac{1\,274}{1{,}07^7}=1\,274\cdot0{,}62275=793{,}4\text{ tis. Kč}$$` },
    { t: 'Sečíst',
      vypocet: R`$$P=274{,}9+793{,}4=1\,068{,}2\text{ tis. Kč}$$`,
      vysl: 'Tržní hodnota je asi <b>1 068 tis. Kč</b> – méně než nominál 1 274 tis., protože čistý kupón (4 %) je pod tržním výnosem 7 %.' }
  ],
  kalk: R`1,07 → \(x^y\) → 7 → = → 1/x = 0,62275. To číslo použiješ dvakrát: v zásobiteli i u nominálu.`,
  pozor: 'Daní se jen kupón, nominál ne. S nezaokrouhleným kupónem 50,96 vyjde 1 068,0 – obojí je správně.'
};

P['2-5'] = {
  dano: [
    [R`\(F\)`, '10 000 Kč', 'nominální hodnota'],
    [R`\(c\)`, '12,5 %', 'roční kupónová sazba'],
    [R`\(n\)`, '4 roky', 'splatnost'],
    [R`\(i\)`, '10 % = 0,10', 'obvyklý výnos podobných obligací']
  ],
  hledame: R`cenu obligace \(P_0\).`,
  kroky: [
    { t: 'Roční kupón',
      vzorec: R`$$C=F\cdot c$$`,
      vypocet: R`$$C=10\,000\cdot0{,}125=1\,250\text{ Kč}$$` },
    { t: 'Současná hodnota čtyř kupónů',
      proc: 'Čtyři stejné platby → zásobitel. (Šlo by i diskontovat každý rok zvlášť, vyjde totéž.)',
      vzorec: R`$$C\cdot\frac{1-(1+i)^{-n}}{i}$$`,
      dosad: R`$$1\,250\cdot\frac{1-1{,}1^{-4}}{0{,}1}$$`,
      vypocet: R`$$1{,}1^4=1{,}4641\;\Rightarrow\;1{,}1^{-4}=0{,}68301\;\Rightarrow\;\frac{0{,}31699}{0{,}1}=3{,}16987\;\Rightarrow\;1\,250\cdot3{,}16987=3\,962{,}33$$` },
    { t: 'Současná hodnota nominálu',
      vzorec: R`$$\frac{F}{(1+i)^n}$$`,
      vypocet: R`$$\frac{10\,000}{1{,}4641}=6\,830{,}13\text{ Kč}$$` },
    { t: 'Sečíst',
      vypocet: R`$$P_0=3\,962{,}33+6\,830{,}13=10\,792{,}47\text{ Kč}$$`,
      vysl: 'Cena je <b>10 792,47 Kč</b>.' },
    { t: 'Kontrola logikou',
      proc: 'Kupón 12,5 % je vyšší než tržních 10 % → dluhopis musí být nad nominálem. Sedí.' }
  ],
  kalk: 'Bez zásobitele: 1 250 ÷ 1,1 = 1 136,36 · ÷ 1,1² = 1 033,06 · ÷ 1,1³ = 939,14 · 11 250 ÷ 1,1⁴ = 7 683,90 → součet 10 792,47.',
  pozor: 'Kupón se počítá z nominálu a kupónové sazby (12,5 %), diskontuje se tržní sazbou (10 %). Nezaměň je.'
};

P['2-6'] = {
  dano: [
    [R`\(F\)`, '10 000 Kč', 'nominální hodnota – tolik dostanu při splatnosti'],
    [R`\(t\)`, '90 dní', 'doba do splatnosti'],
    [R`\(d\)`, '5,5 % = 0,055', 'diskontní míra p. a.']
  ],
  hledame: R`cenu \(P\), za kterou lze poukázku koupit.`,
  kroky: [
    { t: 'Jak funguje pokladniční poukázka',
      proc: 'Nemá kupón. Koupím ji levněji než za nominál a při splatnosti dostanu celý nominál. Sleva se jmenuje diskont a počítá se z nominálu jednoduchým úročením (rok = 360 dní).',
      vzorec: R`$$P=F\cdot\left(1-d\cdot\frac{t}{360}\right)$$` },
    { t: 'Převést dny na část roku',
      vypocet: R`$$\frac{90}{360}=0{,}25\text{ roku}$$` },
    { t: 'Spočítat diskont v korunách',
      vzorec: R`$$\text{diskont}=F\cdot d\cdot\frac{t}{360}$$`,
      vypocet: R`$$10\,000\cdot0{,}055\cdot0{,}25=137{,}50\text{ Kč}$$` },
    { t: 'Odečíst diskont od nominálu',
      vypocet: R`$$P=10\,000-137{,}50=9\,862{,}50\text{ Kč}$$`,
      vysl: 'Poukázku lze koupit za <b>9 862,50 Kč</b>.' }
  ],
  kalk: '10 000 × 0,055 × 90 ÷ 360 = 137,5 → 10 000 − 137,5.',
  pozor: 'Diskont se počítá z nominálu a odčítá se. Není to dělení (1 + i · t) jako u úroku – to by vyšlo 9 864,36 Kč.'
};

P['2-7'] = {
  dano: [
    [R`\(F\)`, '1 000 Kč', 'nominální hodnota'],
    [R`\(c\)`, '2 %', 'roční kupónová sazba'],
    [R`\(n\)`, '3 roky', 'splatnost'],
    [R`\(t\)`, '15 %', 'daň z kupónu'],
    [R`\(r\)`, '1 % = 0,01', 'požadovaná výnosnost pro současnou hodnotu']
  ],
  hledame: '1) kolik dostaneme na kupónech, 2) hodnotu kapitálu po třech letech, 3) současnou hodnotu toho všeho.',
  kroky: [
    { t: 'Hrubý a čistý kupón',
      proc: 'Kupón se počítá z nominálu a před výplatou se z něj strhne daň.',
      vzorec: R`$$C_{\text{čistý}}=F\cdot c\cdot(1-t)$$`,
      vypocet: R`$$1\,000\cdot0{,}02=20\text{ Kč hrubě}\qquad20\cdot0{,}85=17\text{ Kč čistě}$$` },
    { t: '1) Kupóny celkem',
      proc: 'Tři roky, každý rok jeden kupón.',
      vypocet: R`$$3\cdot17=51\text{ Kč}\quad(\text{hrubě }3\cdot20=60\text{ Kč})$$`,
      vysl: 'Na kupónech dostaneme čistých <b>51 Kč</b>.' },
    { t: '2) Kapitál po třech letech',
      proc: 'Vrátí se nominál a k němu máme všechny tři čisté kupóny.',
      vypocet: R`$$1\,000+51=1\,051\text{ Kč}$$`,
      vysl: 'Kapitál po 3 letech je <b>1 051 Kč</b>.' },
    { t: '3) Současná hodnota – každý tok ve svém roce',
      proc: 'Peníze nepřijdou najednou: 17 Kč po 1. roce, 17 Kč po 2. roce a 1 017 Kč po 3. roce. Každou částku odúročíme zvlášť sazbou 1 %.',
      vzorec: R`$$PV=\frac{17}{1+r}+\frac{17}{(1+r)^2}+\frac{1\,017}{(1+r)^3}$$`,
      dosad: R`$$PV=\frac{17}{1{,}01}+\frac{17}{1{,}01^2}+\frac{1\,017}{1{,}01^3}$$`,
      vypocet: R`$$16{,}83+16{,}67+987{,}09=1\,020{,}59\text{ Kč}$$`,
      vysl: 'Současná hodnota je asi <b>1 020,59 Kč</b>.' },
    { t: 'Zjednodušená varianta',
      proc: 'Pokud se bere celý kapitál 1 051 Kč až na konci 3. roku, odúročí se najednou. Vyjde o něco méně, protože kupóny „čekají“ déle.',
      vypocet: R`$$\frac{1\,051}{1{,}01^3}=\frac{1\,051}{1{,}030301}=1\,020{,}09\text{ Kč}$$` }
  ],
  pozor: 'Současná hodnota vyšla nad 1 000 Kč, protože čistý výnos dluhopisu (1,7 %) je vyšší než požadované 1 %. Zadání přesně neříká, kterou variantu bodu 3 chce – uveď postup.'
};

/* ===================== 3 · OPCE ===================== */
P['3-1'] = {
  dano: [
    [R`\(X\)`, '1 000 Kč', 'realizační cena – za tolik smí držitel akcii koupit'],
    [R`\(c\)`, '50 Kč', 'opční prémie – cena opce, zaplacená předem'],
    [R`\(S\)`, '970 / 1 020 / 1 140 Kč', 'cena akcie v den uplatnění (tři varianty)']
  ],
  hledame: 'zisk nebo ztrátu držitele (kupujícího) a upisovatele (prodávajícího) call opce ve všech třech případech.',
  kroky: [
    { t: 'Pravidlo pro call opci',
      proc: 'Držitel opci uplatní jen tehdy, když je akcie na trhu dražší než realizační cena (koupí levněji, než kolik stojí). Prémii 50 Kč zaplatil tak jako tak. Upisovatel má vždy přesně opačný výsledek.',
      vzorec: R`$$Z_{\text{držitel}}=\max(S-X,\,0)-c\qquad Z_{\text{upisovatel}}=-Z_{\text{držitel}}$$` },
    { t: 'a) Akcie stojí 970 Kč',
      proc: 'Na trhu je akcie levnější než 1 000 Kč, kupovat ji přes opci za 1 000 Kč by byl nesmysl. Opce propadne.',
      vypocet: R`$$\max(970-1\,000,\,0)-50=0-50=-50\text{ Kč}$$`,
      vysl: 'Držitel <b>−50 Kč</b> (přišel o prémii), upisovatel <b>+50 Kč</b>.' },
    { t: 'b) Akcie stojí 1 020 Kč',
      proc: 'Akcie je dražší než 1 000 Kč, takže se opce uplatní – i když to celkově na zisk nestačí. Uplatněním držitel aspoň sníží ztrátu z 50 na 30 Kč.',
      vypocet: R`$$\max(1\,020-1\,000,\,0)-50=20-50=-30\text{ Kč}$$`,
      vysl: 'Držitel <b>−30 Kč</b>, upisovatel <b>+30 Kč</b>.' },
    { t: 'c) Akcie stojí 1 140 Kč',
      proc: 'Opce se uplatní: koupí za 1 000 Kč, akcie má hodnotu 1 140 Kč.',
      vypocet: R`$$\max(1\,140-1\,000,\,0)-50=140-50=+90\text{ Kč}$$`,
      vysl: 'Držitel <b>+90 Kč</b>, upisovatel <b>−90 Kč</b>.' },
    { t: 'Bod zvratu',
      proc: 'Cena akcie, při které držitel není ani v zisku, ani ve ztrátě. Akcie musí vyrůst nad realizační cenu aspoň o zaplacenou prémii.',
      vzorec: R`$$S_{BE}=X+c$$`,
      vypocet: R`$$1\,000+50=1\,050\text{ Kč}$$` },
    { t: 'Jak nakreslit graf',
      proc: 'Na vodorovné ose cena akcie, na svislé zisk. Držitel: vodorovná čára na −50 až do ceny 1 000, odtud přímka stoupající pod úhlem 45°, která protne nulu v 1 050. Upisovatel: totéž zrcadlově podle vodorovné osy (+50 a pak klesá).' }
  ],
  pozor: 'Případ b) je chyták: opce se uplatní, i když je celkový výsledek záporný. Rozhoduje jen to, jestli je S větší než X. Největší možná ztráta držitele je prémie, zisk není omezený.'
};

P['3-2'] = {
  dano: [
    [R`\(X\)`, '1 000 Kč', 'cena, za kterou smí M koupit akcii ČEZ'],
    [R`\(c\)`, '80 Kč', 'cena opce (prémie), kterou M zaplatil N'],
    [R`\(S\)`, '850 / 1 230 Kč', 'cena akcie 30. 6. 2018'],
    ['M', 'kupující', 'držitel opce – má právo'],
    ['N', 'prodávající', 'upisovatel – má povinnost']
  ],
  hledame: 'zisk nebo ztrátu kupujícího M a prodávajícího N v obou případech.',
  kroky: [
    { t: 'Poznat typ opce',
      proc: '„Opce na nákup“ = call opce. M má právo koupit za 1 000 Kč, N musí prodat, pokud o to M požádá.',
      vzorec: R`$$Z_M=\max(S-X,\,0)-c\qquad Z_N=-Z_M$$` },
    { t: 'a) Akcie stojí 850 Kč',
      proc: 'Na burze je akcie levnější než 1 000 Kč, M opci neuplatní a nechá ji propadnout.',
      vypocet: R`$$Z_M=0-80=-80\text{ Kč}$$`,
      vysl: 'M <b>−80 Kč</b>, N <b>+80 Kč</b> (nechá si prémii).' },
    { t: 'b) Akcie stojí 1 230 Kč',
      proc: 'M opci uplatní: koupí od N za 1 000 Kč akcii, která má hodnotu 1 230 Kč. Od zisku 230 Kč odečteme zaplacenou prémii.',
      vypocet: R`$$Z_M=(1\,230-1\,000)-80=230-80=+150\text{ Kč}$$`,
      vysl: 'M <b>+150 Kč</b>, N <b>−150 Kč</b>.' },
    { t: 'Bod zvratu',
      vzorec: R`$$S_{BE}=X+c$$`,
      vypocet: R`$$1\,000+80=1\,080\text{ Kč}$$`,
      vysl: 'M vydělává až od ceny 1 080 Kč.' },
    { t: 'Graf',
      proc: 'M: vodorovně na −80 do ceny 1 000, pak přímka nahoru, nulou projde v 1 080. N: zrcadlově (+80 a pak dolů).' }
  ],
  pozor: 'Součet výsledků M a N je vždy nula – co jeden vydělá, druhý ztratí.'
};

P['3-3'] = {
  dano: [
    [R`\(n\)`, '1 000 ks', 'počet akcií, na které opce zní'],
    [R`\(X\)`, '10 Kč/ks', 'cena, za kterou smí držitel akcie prodat'],
    [R`\(p\)`, '2 Kč/ks', 'opční poplatek (prémie)'],
    [R`\(S_0\)`, '11 Kč', 'cena akcie při koupi opce'],
    [R`\(S\)`, '7 Kč', 'cena akcie před splatností']
  ],
  hledame: 'výsledek držitele put opce v korunách a v procentech.',
  kroky: [
    { t: 'Poznat typ opce a rozhodnout o uplatnění',
      proc: '„Právo prodat“ = put opce. Vyplatí se ji uplatnit, když je akcie na trhu levnější než realizační cena: koupím levně na trhu, prodám draze přes opci. 7 Kč &lt; 10 Kč → uplatní.' },
    { t: 'Kolik stála prémie',
      vypocet: R`$$1\,000\cdot2=2\,000\text{ Kč}$$` },
    { t: 'Nákup akcií na trhu a prodej přes opci',
      vypocet: R`$$\text{nákup: }1\,000\cdot7=7\,000\text{ Kč}\qquad\text{prodej: }1\,000\cdot10=10\,000\text{ Kč}$$` },
    { t: 'Čistý zisk',
      vzorec: R`$$Z=(X-S)\cdot n-p\cdot n$$`,
      vypocet: R`$$Z=(10-7)\cdot1\,000-2\cdot1\,000=3\,000-2\,000=1\,000\text{ Kč}$$`,
      vysl: 'Zisk držitele je <b>1 000 Kč</b>.' },
    { t: 'Výnos v procentech',
      proc: 'Držitel do obchodu vložil jen prémii 2 000 Kč.',
      vypocet: R`$$\frac{1\,000}{2\,000}=0{,}5=50\,\%$$`,
      vysl: '<b>50 %</b> z vloženého kapitálu, přičemž akcie klesla o 36,4 % (z 11 na 7 Kč). To je pákový efekt opce.' }
  ],
  pozor: R`Bod zvratu putu je \(X-p=10-2=8\) Kč – držitel vydělává, až když akcie klesne pod 8 Kč. Všechno násob počtem akcií.`
};

P['3-5'] = {
  dano: [
    [R`\(X\)`, '1 200', 'realizační cena evropské call opce'],
    ['scénář 1', 'S = 1 100, q = 0,3', 'akcie klesne'],
    ['scénář 2', 'S = 1 200, q = 0,4', 'akcie zůstane na realizační ceně'],
    ['scénář 3', 'S = 1 400, q = 0,3', 'akcie vzroste']
  ],
  hledame: 'očekávanou cenu akcie za rok a očekávanou hodnotu opce.',
  kroky: [
    { t: 'Očekávaná cena akcie',
      proc: 'Vážený průměr: každou možnou cenu vynásobíme její pravděpodobností a sečteme.',
      vzorec: R`$$E(S)=\sum q_i\cdot S_i$$`,
      dosad: R`$$E(S)=1\,100\cdot0{,}3+1\,200\cdot0{,}4+1\,400\cdot0{,}3$$`,
      vypocet: R`$$E(S)=330+480+420=1\,230$$` },
    { t: 'Hodnota opce v každém scénáři',
      proc: 'Call opce má hodnotu jen tehdy, když je akcie nad realizační cenou. Jinak je hodnota nula – nikdy není záporná, protože opci nikdo nemusí uplatnit.',
      vzorec: R`$$C_i=\max(S_i-X,\,0)$$`,
      vypocet: R`$$\max(1\,100-1\,200,0)=0\qquad\max(1\,200-1\,200,0)=0\qquad\max(1\,400-1\,200,0)=200$$` },
    { t: 'Očekávaná hodnota opce',
      vzorec: R`$$E(C)=\sum q_i\cdot C_i$$`,
      vypocet: R`$$E(C)=0\cdot0{,}3+0\cdot0{,}4+200\cdot0{,}3=60$$`,
      vysl: R`\(E(S)=\) <b>1 230</b>, očekávaná hodnota opce <b>60</b>.` }
  ],
  pozor: R`Nesmíš počítat \(\max(E(S)-X,0)=1\,230-1\,200=30\). Nejdřív spočítej hodnotu opce v každém scénáři zvlášť a teprve pak průměruj – vyjde 60, ne 30.`
};

P['3-L1'] = {
  dano: [
    [R`\(S_0\)`, '500 Kč', 'dnešní cena akcie'],
    [R`\(S_u\)`, '550 Kč', 'cena za 3 měsíce, když akcie vzroste'],
    [R`\(S_d\)`, '450 Kč', 'cena za 3 měsíce, když akcie klesne'],
    [R`\(X\)`, '525 Kč', 'realizační cena call opce'],
    [R`\(r\)`, '10 % = 0,10', 'bezriziková úroková míra, spojité úročení'],
    [R`\(T\)`, '3 měsíce = 0,25 roku', 'doba do splatnosti']
  ],
  hledame: R`dnešní cenu evropské call opce \(C\).`,
  kroky: [
    { t: 'Hodnota opce na konci v obou stavech',
      proc: 'V den splatnosti má call hodnotu rozdílu ceny akcie a realizační ceny, pokud je kladný.',
      vzorec: R`$$C=\max(S-X,\,0)$$`,
      vypocet: R`$$C_u=\max(550-525,0)=25\qquad C_d=\max(450-525,0)=0$$` },
    { t: 'Sestavit bezrizikové portfolio',
      proc: R`Koupíme \(\Delta\) akcií a prodáme (vypíšeme) 1 call. Hledáme takové \(\Delta\), aby portfolio mělo v obou stavech stejnou hodnotu – pak je bez rizika.`,
      vzorec: R`$$\Delta\cdot S_u-C_u=\Delta\cdot S_d-C_d$$`,
      dosad: R`$$550\Delta-25=450\Delta-0$$`,
      vypocet: R`$$100\Delta=25\;\Rightarrow\;\Delta=0{,}25$$`,
      vysl: 'Na jednu vypsanou opci držíme čtvrtinu akcie.' },
    { t: 'Hodnota portfolia za 3 měsíce',
      proc: 'Ověříme, že vyjde v obou stavech stejně.',
      vypocet: R`$$550\cdot0{,}25-25=112{,}5\qquad450\cdot0{,}25-0=112{,}5$$`,
      vysl: 'Portfolio bude mít jistě hodnotu 112,5 Kč.' },
    { t: 'Dnešní hodnota portfolia',
      proc: 'Když je portfolio bez rizika, musí vynášet přesně bezrizikový úrok (jinak by šlo vydělat bez rizika – arbitráž). Jistých 112,5 Kč proto odúročíme spojitě.',
      vzorec: R`$$PV=\Pi\cdot e^{-rT}$$`,
      dosad: R`$$PV=112{,}5\cdot e^{-0{,}10\cdot0{,}25}=112{,}5\cdot e^{-0{,}025}$$`,
      vypocet: R`$$e^{-0{,}025}=0{,}97531\;\Rightarrow\;PV=109{,}72\text{ Kč}$$` },
    { t: 'Vyjádřit cenu opce',
      proc: 'Dnes portfolio stojí: cena čtvrtiny akcie minus to, co jsem dostal za vypsanou opci. To se musí rovnat 109,72 Kč.',
      vzorec: R`$$\Delta\cdot S_0-C=PV$$`,
      dosad: R`$$0{,}25\cdot500-C=109{,}72$$`,
      vypocet: R`$$C=125-109{,}72=15{,}28\text{ Kč}$$`,
      vysl: R`\(\Delta=0{,}25\), cena opce je <b>15,28 Kč</b>.` }
  ],
  kalk: R`0,1 × 0,25 = 0,025 → změň znaménko → tlačítko \(e^x\) → × 112,5 = 109,72.`,
  pozor: 'Tři měsíce jsou 0,25 roku, ne 3. Diskontuje se spojitě (číslo e), ne dělením 1,025 – to by vyšlo 109,76 a opce 15,24 Kč.'
};

P['3-L2'] = {
  dano: [
    [R`\(S_0\)`, '30 EUR', 'dnešní cena akcie, kterou investor drží'],
    [R`\(X\)`, '30 EUR', 'realizační cena put opce'],
    [R`\(p\)`, '2 EUR', 'zaplacená prémie'],
    [R`\(S\)`, '25 / 35 EUR', 'budoucí cena akcie ve scénáři A / B']
  ],
  hledame: 'celkový výsledek investora (akcie + opce) v obou scénářích.',
  kroky: [
    { t: 'Z čeho se výsledek skládá',
      proc: 'Tři položky: změna hodnoty akcie, výplata z put opce (jen když je akcie pod 30) a zaplacená prémie.',
      vzorec: R`$$\text{výsledek}=(S-S_0)+\max(X-S,\,0)-p$$` },
    { t: 'A) Cena klesne na 25 EUR',
      proc: 'Akcie ztratila 5 EUR. Put se uplatní – investor prodá za 30 EUR něco, co stojí 25 EUR, a tím ztrátu přesně dorovná. Zbude jen cena pojištění.',
      vypocet: R`$$(25-30)+\max(30-25,0)-2=-5+5-2=-2\text{ EUR}$$`,
      vysl: 'Celkem <b>−2 EUR</b>. Ztráta je omezená na prémii, ať akcie klesne jakkoli.' },
    { t: 'B) Cena vzroste na 35 EUR',
      proc: 'Akcie vydělala 5 EUR. Prodávat za 30 EUR nemá smysl, put propadne. Prémie je pryč.',
      vypocet: R`$$(35-30)+\max(30-35,0)-2=5+0-2=+3\text{ EUR}$$`,
      vysl: 'Celkem <b>+3 EUR</b>.' },
    { t: 'Shrnutí – k čemu to je',
      proc: 'Put funguje jako pojistka: za 2 EUR má investor jistotu, že neprodělá víc než 2 EUR, a přitom mu zůstává celý zisk z růstu (snížený o prémii).' }
  ],
  pozor: 'Ve slidu je u scénáře A „celkem = 3“. To je jen výsledek samotné opce (5 − 2), bez poklesu akcie. Celkový výsledek investora je −2 EUR.'
};

P['3-L3'] = {
  dano: [
    ['VaV', '10 mil. Kč', 'náklady na výzkum a vývoj – platí se hned a vždy'],
    ['výrobní náklady', '30 / 60 / 90 mil. Kč', 'každá varianta s pravděpodobností 1/3'],
    ['výnosy', '125 mil. (p = 0,6) / 65 mil. (p = 0,4)', 'podle poptávky'],
    ['ostatní náklady', '25 mil. Kč', 'nevýrobní náklady, pokud se vyrábí']
  ],
  hledame: 'očekávanou čistou současnou hodnotu (NPV) projektu bez opce a s reálnou opcí „nespustit výrobu, když vychází ztráta“.',
  kroky: [
    { t: 'Čistý výnos v každém ze šesti scénářů',
      proc: 'Tři varianty nákladů × dvě varianty výnosů = 6 scénářů. V každém: výnosy − výrobní náklady − 25.',
      vzorec: R`$$ČV=\text{výnosy}-\text{výrobní náklady}-25$$`,
      vypocet: 'náklady 30: 125 − 30 − 25 = <b>70</b> · 65 − 30 − 25 = <b>10</b><br>náklady 60: 125 − 60 − 25 = <b>40</b> · 65 − 60 − 25 = <b>−20</b><br>náklady 90: 125 − 90 − 25 = <b>10</b> · 65 − 90 − 25 = <b>−50</b>' },
    { t: 'Pravděpodobnost každého scénáře',
      proc: 'Náklady a poptávka na sobě nezávisí, pravděpodobnosti se násobí.',
      vypocet: R`$$\tfrac13\cdot0{,}6=0{,}2\;(\text{výnosy }125)\qquad\tfrac13\cdot0{,}4=0{,}133\;(\text{výnosy }65)$$` },
    { t: 'Bez opce – očekávaný čistý výnos',
      proc: 'Projekt se spustí vždy, i ve ztrátových scénářích. Vážený průměr všech šesti výsledků.',
      vzorec: R`$$E(ČV)=\sum p_i\cdot ČV_i$$`,
      vypocet: R`$$0{,}2\cdot(70+40+10)+0{,}133\cdot(10-20-50)=24-8=16\text{ mil.}$$` },
    { t: 'Bez opce – NPV',
      vzorec: R`$$NPV=-10+E(ČV)$$`,
      vypocet: R`$$NPV=-10+16=+6\text{ mil. Kč}$$` },
    { t: 'S opcí – ztrátové scénáře nahradit nulou',
      proc: 'Když po výzkumu vidím, že by výroba prodělala (−20 a −50), prostě ji nespustím. Výsledek je pak 0 místo ztráty.',
      vypocet: R`$$0{,}2\cdot(70+40+10)+0{,}133\cdot(10+0+0)=24+1{,}33=25{,}33\text{ mil.}$$` },
    { t: 'S opcí – NPV a hodnota opce',
      vypocet: R`$$NPV=-10+25{,}33=+15{,}33\text{ mil. Kč}\qquad\text{hodnota opce}=15{,}33-6=9{,}33\text{ mil. Kč}$$`,
      vysl: 'Bez opce <b>6 mil. Kč</b>, s opcí <b>15,33 mil. Kč</b>. Možnost rozhodnout se až později má hodnotu 9,33 mil. Kč.' }
  ],
  pozor: 'Ve slidu jsou pravděpodobnosti u výnosů prohozené (125 s p = 0,4), proto tam vychází −6 a +8 mil. Postup je stejný, jen s jinými vahami: 0,133 · (70 + 40 + 10) + 0,2 · (10 − 20 − 50) = 16 − 12 = 4 → NPV = −6; s opcí 16 + 0,2 · 10 = 18 → NPV = +8. U testu počítej s čísly, která dostaneš.'
};

/* ===================== 4 · RIZIKO, VÝNOSNOST, BETA ===================== */
P['4-1'] = {
  dano: [
    ['scénář A', 'p = 0,5, r = 25 %', ''],
    ['scénář B', 'p = 0,3, r = 10 %', ''],
    ['scénář C', 'p = 0,2, r = −25 %', 'ztráta']
  ],
  hledame: R`očekávanou výnosnost \(E(r)\), rozptyl \(\sigma^2\) a směrodatnou odchylku \(\sigma\).`,
  kroky: [
    { t: 'Očekávaná výnosnost',
      proc: 'Vážený průměr: každý výnos krát jeho pravděpodobnost.',
      vzorec: R`$$E(r)=\sum p_i\cdot r_i$$`,
      dosad: R`$$E(r)=0{,}5\cdot25+0{,}3\cdot10+0{,}2\cdot(-25)$$`,
      vypocet: R`$$E(r)=12{,}5+3-5=10{,}5\,\%$$` },
    { t: 'Odchylky od očekávané výnosnosti',
      proc: 'U každého scénáře zjistíme, jak daleko je od průměru 10,5 %.',
      vypocet: R`$$25-10{,}5=14{,}5\qquad10-10{,}5=-0{,}5\qquad-25-10{,}5=-35{,}5$$` },
    { t: 'Odchylky umocnit na druhou',
      proc: 'Tím zmizí znaménko minus a velké odchylky dostanou větší váhu.',
      vypocet: R`$$14{,}5^2=210{,}25\qquad(-0{,}5)^2=0{,}25\qquad(-35{,}5)^2=1\,260{,}25$$` },
    { t: 'Rozptyl = vážený průměr čtverců',
      vzorec: R`$$\sigma^2=\sum p_i\cdot(r_i-E)^2$$`,
      dosad: R`$$\sigma^2=0{,}5\cdot210{,}25+0{,}3\cdot0{,}25+0{,}2\cdot1\,260{,}25$$`,
      vypocet: R`$$\sigma^2=105{,}125+0{,}075+252{,}05=357{,}25$$` },
    { t: 'Směrodatná odchylka = odmocnina z rozptylu',
      proc: 'Rozptyl je v „procentech na druhou“, odmocninou se vrátíme k procentům.',
      vzorec: R`$$\sigma=\sqrt{\sigma^2}$$`,
      vypocet: R`$$\sigma=\sqrt{357{,}25}=18{,}9\,\%$$`,
      vysl: R`\(E=\) <b>10,5 %</b>, \(\sigma^2=\) <b>357,25</b>, \(\sigma=\) <b>18,9 %</b>.` }
  ],
  kalk: 'Udělej si tabulku se sloupci: p · r · (r − E) · (r − E)² · p·(r − E)². Poslední sloupec sečti a odmocni.',
  pozor: 'Odchylky počítej od očekávané výnosnosti (10,5), ne od nuly. Záporné číslo na druhou je kladné. Ve slidu je rozptyl 357,21 – ze zadaných čísel vychází 357,25.'
};

P['4-2'] = {
  dano: [
    ['scénář A', 'p = 0,5, r = 20 %', ''],
    ['scénář B', 'p = 0,4, r = 15 %', ''],
    ['scénář C', 'p = 0,1, r = −30 %', 'ztráta']
  ],
  hledame: R`očekávanou výnosnost, rozptyl a směrodatnou odchylku.`,
  kroky: [
    { t: 'Očekávaná výnosnost',
      vzorec: R`$$E(r)=\sum p_i\cdot r_i$$`,
      dosad: R`$$E(r)=0{,}5\cdot20+0{,}4\cdot15+0{,}1\cdot(-30)$$`,
      vypocet: R`$$E(r)=10+6-3=13\,\%$$` },
    { t: 'Odchylky od 13 %',
      vypocet: R`$$20-13=7\qquad15-13=2\qquad-30-13=-43$$` },
    { t: 'Čtverce odchylek',
      vypocet: R`$$7^2=49\qquad2^2=4\qquad(-43)^2=1\,849$$` },
    { t: 'Rozptyl',
      vzorec: R`$$\sigma^2=\sum p_i\cdot(r_i-E)^2$$`,
      dosad: R`$$\sigma^2=0{,}5\cdot49+0{,}4\cdot4+0{,}1\cdot1\,849$$`,
      vypocet: R`$$\sigma^2=24{,}5+1{,}6+184{,}9=211$$` },
    { t: 'Směrodatná odchylka',
      vypocet: R`$$\sigma=\sqrt{211}=14{,}53\,\%$$`,
      vysl: R`\(E=\) <b>13 %</b>, \(\sigma^2=\) <b>211</b>, \(\sigma=\) <b>14,53 %</b>.` }
  ],
  pozor: 'Všimni si, že skoro celý rozptyl (184,9 z 211) dělá jediný málo pravděpodobný scénář C. Velká ztráta se v riziku projeví silně, i když má jen 10% pravděpodobnost.'
};

P['4-3'] = {
  dano: [
    ['příznivý', 'p = 0,5, výnos 300 000 Kč', ''],
    ['nepříznivý', 'p = 0,5, výnos −100 000 Kč', 'ztráta']
  ],
  hledame: 'očekávaný výnos, rozptyl a směrodatnou odchylku (tentokrát v korunách, ne v procentech).',
  kroky: [
    { t: 'Očekávaný výnos',
      vzorec: R`$$E=\sum p_i\cdot R_i$$`,
      dosad: R`$$E=0{,}5\cdot300\,000+0{,}5\cdot(-100\,000)$$`,
      vypocet: R`$$E=150\,000-50\,000=100\,000\text{ Kč}$$` },
    { t: 'Odchylky od očekávaného výnosu',
      vypocet: R`$$300\,000-100\,000=200\,000\qquad-100\,000-100\,000=-200\,000$$` },
    { t: 'Rozptyl',
      vzorec: R`$$\sigma^2=\sum p_i\cdot(R_i-E)^2$$`,
      dosad: R`$$\sigma^2=0{,}5\cdot200\,000^2+0{,}5\cdot(-200\,000)^2$$`,
      vypocet: R`$$\sigma^2=0{,}5\cdot4\cdot10^{10}+0{,}5\cdot4\cdot10^{10}=4\cdot10^{10}\text{ Kč}^2$$` },
    { t: 'Směrodatná odchylka',
      vypocet: R`$$\sigma=\sqrt{4\cdot10^{10}}=200\,000\text{ Kč}$$`,
      vysl: R`\(E=\) <b>100 000 Kč</b>, \(\sigma^2=\) <b>40 000 000 000 Kč²</b>, \(\sigma=\) <b>200 000 Kč</b>.` },
    { t: 'Interpretace',
      proc: 'Směrodatná odchylka je dvakrát větší než očekávaný výnos. Projekt je velmi rizikový – skutečný výsledek se od průměru běžně liší o 200 000 Kč.' }
  ],
  kalk: R`Velká čísla počítej v tisících: odchylky ±200, rozptyl \(200^2=40\,000\) (tis. Kč)², σ = 200 tis. Kč.`,
  pozor: 'Rozptyl je v Kč na druhou, proto je to tak obrovské číslo. Srovnatelná s výnosem je až směrodatná odchylka.'
};

P['4-4'] = {
  dano: [
    ['AAA', '100 ks × 400 EUR, výnos 17 %', ''],
    ['BBB', '400 ks × 200 EUR, výnos 13 %', ''],
    ['CCC', '200 ks × 200 EUR, výnos 23 %', '']
  ],
  hledame: 'váhy jednotlivých akcií v portfoliu a střední výnos celého portfolia.',
  kroky: [
    { t: 'Kolik peněz je v každé akcii',
      proc: 'Váha se nepočítá z počtu kusů, ale z investované částky = počet × cena.',
      vypocet: R`$$100\cdot400=40\,000\qquad400\cdot200=80\,000\qquad200\cdot200=40\,000\text{ EUR}$$` },
    { t: 'Hodnota celého portfolia',
      vypocet: R`$$40\,000+80\,000+40\,000=160\,000\text{ EUR}$$` },
    { t: 'Váhy',
      vzorec: R`$$w_i=\frac{n_i\cdot P_i}{\sum n_j\cdot P_j}$$`,
      vypocet: R`$$w_{AAA}=\frac{40\,000}{160\,000}=0{,}25\qquad w_{BBB}=\frac{80\,000}{160\,000}=0{,}5\qquad w_{CCC}=0{,}25$$`,
      vysl: 'Kontrola: 0,25 + 0,5 + 0,25 = 1.' },
    { t: 'Výnos portfolia',
      proc: 'Vážený průměr výnosů – každá akcie přispívá podle toho, kolik peněz v ní je.',
      vzorec: R`$$E(r_p)=\sum w_i\cdot r_i$$`,
      dosad: R`$$E(r_p)=0{,}25\cdot17+0{,}5\cdot13+0{,}25\cdot23$$`,
      vypocet: R`$$E(r_p)=4{,}25+6{,}5+5{,}75=16{,}5\,\%$$`,
      vysl: 'Výnos portfolia je <b>16,5 %</b>.' }
  ],
  pozor: 'Váhy podle počtu kusů (100 : 400 : 200) by byly špatně. Obyčejný průměr tří výnosů (17,67 %) taky – BBB má dvojnásobnou váhu.'
};

P['4-5'] = {
  dano: [
    ['Investice I', '30 % (0,5) · 15 % (0,3) · 5 % (0,1) · −20 % (0,1)', 'výnos (pravděpodobnost)'],
    ['Investice II', '46 % (0,5) · 5 % (0,3) · −15 % (0,1) · −50 % (0,1)', 'výnos (pravděpodobnost)']
  ],
  hledame: 'očekávaný výnos, rozptyl a směrodatnou odchylku obou investic a která je rizikovější.',
  kroky: [
    { t: 'Investice I – očekávaný výnos',
      vzorec: R`$$E=\sum p_i\cdot r_i$$`,
      vypocet: R`$$0{,}5\cdot30+0{,}3\cdot15+0{,}1\cdot5+0{,}1\cdot(-20)=15+4{,}5+0{,}5-2=18\,\%$$` },
    { t: 'Investice I – rozptyl a směrodatná odchylka',
      proc: 'Odchylky od 18 %: 12, −3, −13, −38. Umocnit, vynásobit pravděpodobností, sečíst.',
      vzorec: R`$$\sigma^2=\sum p_i\cdot(r_i-E)^2$$`,
      dosad: R`$$0{,}5\cdot12^2+0{,}3\cdot(-3)^2+0{,}1\cdot(-13)^2+0{,}1\cdot(-38)^2$$`,
      vypocet: R`$$72+2{,}7+16{,}9+144{,}4=236\;\Rightarrow\;\sigma=\sqrt{236}=15{,}36\,\%$$` },
    { t: 'Investice II – očekávaný výnos',
      vypocet: R`$$0{,}5\cdot46+0{,}3\cdot5+0{,}1\cdot(-15)+0{,}1\cdot(-50)=23+1{,}5-1{,}5-5=18\,\%$$` },
    { t: 'Investice II – rozptyl a směrodatná odchylka',
      proc: 'Odchylky od 18 %: 28, −13, −33, −68.',
      dosad: R`$$0{,}5\cdot28^2+0{,}3\cdot(-13)^2+0{,}1\cdot(-33)^2+0{,}1\cdot(-68)^2$$`,
      vypocet: R`$$392+50{,}7+108{,}9+462{,}4=1\,014\;\Rightarrow\;\sigma=\sqrt{1\,014}=31{,}84\,\%$$` },
    { t: 'Variační koeficient (riziko na jednotku výnosu)',
      proc: 'Hodí se hlavně tehdy, když mají investice různý výnos. Tady je výnos stejný, takže jen potvrdí závěr.',
      vzorec: R`$$VK=\frac{\sigma}{E}$$`,
      vypocet: R`$$VK_I=\frac{15{,}36}{18}=0{,}85\qquad VK_{II}=\frac{31{,}84}{18}=1{,}77$$` },
    { t: 'Interpretace',
      vysl: 'Obě investice mají stejný očekávaný výnos 18 %, ale II má asi dvojnásobné riziko (σ 31,84 % proti 15,36 %). Racionální investor volí <b>investici I</b>.' }
  ],
  kalk: 'U každé investice si udělej tabulku se čtyřmi řádky. Nejdřív spočítej E, teprve pak odchylky.',
  pozor: 'Při stejném výnosu rozhoduje nižší riziko. Kdyby se výnosy lišily, porovnávej variační koeficient, ne samotnou σ.'
};

P['4-L'] = {
  dano: [
    ['VŠČ', 'recese 12 %, konjunktura 8 %', 'firma, které se daří ve špatných časech'],
    ['LL', 'recese −5 %, konjunktura 15 %', 'firma závislá na dobrých časech'],
    ['pravděpodobnost', '0,5 a 0,5', 'oba stavy stejně pravděpodobné'],
    ['váhy', '5/6 VŠČ, 1/6 LL', 'složení portfolia']
  ],
  hledame: 'výnos a riziko portfolia složeného z obou akcií.',
  kroky: [
    { t: 'Každá akcie zvlášť – výnos',
      vypocet: R`$$E_{VŠČ}=0{,}5\cdot12+0{,}5\cdot8=10\,\%\qquad E_{LL}=0{,}5\cdot(-5)+0{,}5\cdot15=5\,\%$$` },
    { t: 'Každá akcie zvlášť – riziko',
      proc: 'Odchylky od průměru jsou u VŠČ ±2, u LL ±10. Při dvou stejně pravděpodobných stavech je směrodatná odchylka přímo tato odchylka.',
      vypocet: R`$$\sigma_{VŠČ}=\sqrt{0{,}5\cdot2^2+0{,}5\cdot(-2)^2}=2\,\%\qquad\sigma_{LL}=\sqrt{0{,}5\cdot(-10)^2+0{,}5\cdot10^2}=10\,\%$$` },
    { t: 'Výnos portfolia v recesi',
      vzorec: R`$$r_p=w_1\cdot r_1+w_2\cdot r_2$$`,
      vypocet: R`$$\tfrac56\cdot12+\tfrac16\cdot(-5)=10-0{,}83=9{,}17\,\%$$` },
    { t: 'Výnos portfolia v konjunktuře',
      vypocet: R`$$\tfrac56\cdot8+\tfrac16\cdot15=6{,}67+2{,}5=9{,}17\,\%$$` },
    { t: 'Riziko portfolia',
      proc: 'V obou stavech vyšlo totéž číslo. Výnos se tedy vůbec nemění – odchylka od průměru je nulová.',
      vysl: 'Portfolio vynáší vždy <b>9,17 %</b> (9 1/6 %), <b>σ = 0</b>.' },
    { t: 'Proč to funguje',
      proc: 'Akcie reagují na hospodářský cyklus přesně opačně (korelace −1). Co jedna ztratí, druhá vydělá. Při správném poměru se výkyvy úplně vyruší – diverzifikace odstranila veškeré riziko.' }
  ],
  pozor: 'Riziko portfolia není vážený průměr rizik (to by bylo 5/6 · 2 + 1/6 · 10 = 3,33 %). Záleží na tom, jak se akcie hýbou vůči sobě. Vážený průměr platí jen pro výnos.'
};

P['4-6'] = {
  dano: [
    [R`\(\beta\)`, '1,4', 'beta akcie A – je rizikovější než trh'],
    [R`\(r_f\)`, '11 % p. a.', 'výnos bezrizikového aktiva'],
    [R`\(E(r_m)\)`, '14 % p. a.', 'očekávaný výnos trhu']
  ],
  hledame: 'a) požadovaný výnos akcie A; b), c), d) jak se změní přímka SML, když se změní bezriziková sazba nebo postoj investorů k riziku.',
  kroky: [
    { t: 'Tržní riziková prémie',
      proc: 'O kolik víc vynáší trh než bezriziková investice. Je to sklon přímky SML.',
      vypocet: R`$$E(r_m)-r_f=14-11=3\,\%$$` },
    { t: 'a) Požadovaný výnos akcie A',
      proc: 'K bezrizikové sazbě přičteme prémii násobenou betou – akcie s betou 1,4 nese 1,4× víc tržního rizika.',
      vzorec: R`$$E(r_A)=r_f+\beta\cdot[E(r_m)-r_f]$$`,
      dosad: R`$$E(r_A)=11+1{,}4\cdot(14-11)$$`,
      vypocet: R`$$E(r_A)=11+4{,}2=15{,}2\,\%$$`,
      vysl: 'Požadovaný výnos je <b>15,2 %</b>.' },
    { t: 'b) Bezriziková sazba vzroste na 12 %',
      proc: 'SML začíná na svislé ose v bodě r_f. Když r_f vzroste o 1 p. b. a prémie zůstane 3 %, celá přímka se zvedne o 1 p. b. – sklon se nemění.',
      vypocet: R`$$E(r_A)=12+1{,}4\cdot3=16{,}2\,\%$$`,
      vysl: 'SML se posune <b>rovnoběžně nahoru</b> o 1 p. b.' },
    { t: 'c) Bezriziková sazba klesne na 10 %',
      vypocet: R`$$E(r_A)=10+1{,}4\cdot3=14{,}2\,\%$$`,
      vysl: 'SML se posune <b>rovnoběžně dolů</b> o 1 p. b.' },
    { t: 'd) Investoři jsou ochotnější riskovat',
      proc: 'Když se riziku méně brání, stačí jim za něj menší prémie. Mění se sklon přímky, ne její začátek: přímka se otáčí kolem bodu r_f.',
      vysl: 'Větší ochota riskovat → <b>plošší</b> SML. Větší averze k riziku → <b>strmější</b> SML.' }
  ],
  pozor: 'Rovnoběžný posun platí, když prémie zůstává 3 %. Kdyby zůstal výnos trhu na 14 %, změnil by se i sklon: b) 12 + 1,4 · 2 = 14,8 %, c) 10 + 1,4 · 4 = 15,6 %. Do závorky v CAPM patří prémie (14 − 11), ne celý výnos trhu.'
};

P['4-7'] = {
  dano: [
    [R`\(\beta\)`, '1,41', 'beta akcie Dell za pět let'],
    [R`\(\Delta r_m\)`, '+1 % / −2 %', 'změna výnosu trhu']
  ],
  hledame: 'jak se změní výnosnost akcie Dell při růstu trhu o 1 % a při poklesu o 2 %.',
  kroky: [
    { t: 'Co beta říká',
      proc: 'Beta udává, o kolik procent se v průměru pohne akcie, když se trh pohne o 1 %. Beta 1,41 = akcie reaguje o 41 % silněji než trh, stejným směrem.',
      vzorec: R`$$\Delta r_i=\beta\cdot\Delta r_m$$` },
    { t: 'Trh vzroste o 1 %',
      vypocet: R`$$1{,}41\cdot1=+1{,}41\,\%$$`,
      vysl: 'Akcie vzroste o <b>1,41 %</b>.' },
    { t: 'Trh klesne o 2 %',
      vypocet: R`$$1{,}41\cdot(-2)=-2{,}82\,\%$$`,
      vysl: 'Akcie klesne o <b>2,82 %</b>.' },
    { t: 'Interpretace',
      proc: 'Beta větší než 1 = agresivní akcie. V růstu vydělává víc než trh, v poklesu víc ztrácí.' }
  ],
  pozor: 'Je to průměrná, očekávaná reakce – skutečný pohyb konkrétní den může být jiný (nesystematické riziko).'
};

/* ===================== 5 · NÁKLADY KAPITÁLU ===================== */
P['5-1'] = {
  dano: [
    [R`\(r_e\)`, '20 %', 'požadovaná výnosnost vlastního kapitálu'],
    [R`\(r_d\)`, '15 %', 'cena cizího kapitálu (úrok)'],
    [R`\(D/V\)`, '35 % = 0,35', 'zadluženost = podíl cizího kapitálu na celkovém'],
    [R`\(t\)`, '40 % = 0,4', 'daň ze zisku']
  ],
  hledame: 'diskontní míru pro NPV = průměrné vážené náklady kapitálu (WACC).',
  kroky: [
    { t: 'Podíl vlastního kapitálu',
      proc: 'Kapitál je buď cizí, nebo vlastní – dohromady 100 %.',
      vypocet: R`$$\frac{E}{V}=1-0{,}35=0{,}65$$` },
    { t: 'Cena cizího kapitálu po dani',
      proc: 'Úroky jsou daňově uznatelný náklad, snižují daň ze zisku (daňový štít). Skutečná cena dluhu je proto nižší.',
      vzorec: R`$$r_d\cdot(1-t)$$`,
      vypocet: R`$$15\cdot(1-0{,}4)=15\cdot0{,}6=9\,\%$$` },
    { t: 'Příspěvek cizího kapitálu',
      vypocet: R`$$0{,}35\cdot9=3{,}15\,\%$$` },
    { t: 'Příspěvek vlastního kapitálu',
      proc: 'Vlastní kapitál se o daň neupravuje – dividendy se platí ze zisku po zdanění.',
      vypocet: R`$$0{,}65\cdot20=13\,\%$$` },
    { t: 'Sečíst',
      vzorec: R`$$WACC=\frac{D}{V}\cdot r_d\cdot(1-t)+\frac{E}{V}\cdot r_e$$`,
      vypocet: R`$$WACC=3{,}15+13=16{,}15\,\%$$`,
      vysl: 'Diskontní míra je <b>16,15 %</b>.' }
  ],
  kalk: '0,35 × 15 × 0,6 = 3,15 → 0,65 × 20 = 13 → součet.',
  pozor: 'Daňový štít (1 − t) se násobí jen cizí kapitál. Bez něj by vyšlo 18,25 % – častá chyba.'
};

P['5-2'] = {
  dano: [
    [R`\(r_e\)`, '15 %', 'požadovaná výnosnost vlastního kapitálu'],
    [R`\(r_d\)`, '20 %', 'cena cizího kapitálu'],
    [R`\(D/V\)`, '45 % = 0,45', 'zadluženost'],
    [R`\(t\)`, '35 % = 0,35', 'daň ze zisku']
  ],
  hledame: 'diskontní míru (WACC).',
  kroky: [
    { t: 'Podíl vlastního kapitálu',
      vypocet: R`$$\frac{E}{V}=1-0{,}45=0{,}55$$` },
    { t: 'Cena cizího kapitálu po dani',
      vzorec: R`$$r_d\cdot(1-t)$$`,
      vypocet: R`$$20\cdot(1-0{,}35)=20\cdot0{,}65=13\,\%$$` },
    { t: 'Příspěvek cizího kapitálu',
      vypocet: R`$$0{,}45\cdot13=5{,}85\,\%$$` },
    { t: 'Příspěvek vlastního kapitálu',
      vypocet: R`$$0{,}55\cdot15=8{,}25\,\%$$` },
    { t: 'Sečíst',
      vzorec: R`$$WACC=\frac{D}{V}\cdot r_d\cdot(1-t)+\frac{E}{V}\cdot r_e$$`,
      vypocet: R`$$WACC=5{,}85+8{,}25=14{,}10\,\%$$`,
      vysl: 'Diskontní míra je <b>14,10 %</b>.' }
  ],
  pozor: 'Tady je dluh před zdaněním dražší (20 %) než vlastní kapitál (15 %), ale po dani stojí jen 13 %. Vždy porovnávej až po daňovém štítu.'
};

P['5-3'] = {
  dano: [
    ['obligace', 'nominál 800, tržní cena 670, úrok 70 Kč/rok', '10 000 ks, do splatnosti 12 let'],
    ['akcie', 'nominál 1 000, tržní cena 1 500, dividenda 180 Kč', '30 000 ks, růst dividend 3 %'],
    [R`\(t\)`, '24 % = 0,24', 'daň ze zisku']
  ],
  hledame: 'aktuální WACC společnosti.',
  kroky: [
    { t: 'Tržní hodnota dluhu a vlastního kapitálu',
      proc: 'Váhy ve WACC se počítají z tržních hodnot (cena × počet kusů), ne z nominálů.',
      vypocet: R`$$D=670\cdot10\,000=6{,}7\text{ mil.}\qquad E=1\,500\cdot30\,000=45\text{ mil.}\qquad V=51{,}7\text{ mil. Kč}$$` },
    { t: 'Váhy',
      vypocet: R`$$\frac{D}{V}=\frac{6{,}7}{51{,}7}=0{,}1296\qquad\frac{E}{V}=\frac{45}{51{,}7}=0{,}8704$$` },
    { t: 'Náklady dluhu – přibližný výnos do splatnosti obligace',
      proc: 'Investor dostává úrok 70 Kč ročně a navíc při splatnosti dostane 800 Kč za něco, co koupil za 670 Kč. Tento zisk 130 Kč rozložíme na 12 let a celé vztáhneme k průměrné vázané částce.',
      vzorec: R`$$r_d=\frac{\acute{u}+\frac{N-P}{n}}{0{,}6\cdot P+0{,}4\cdot N}$$`,
      dosad: R`$$r_d=\frac{70+\frac{800-670}{12}}{0{,}6\cdot670+0{,}4\cdot800}=\frac{70+10{,}83}{402+320}$$`,
      vypocet: R`$$r_d=\frac{80{,}83}{722}=0{,}112=11{,}2\,\%$$` },
    { t: 'Náklady dluhu po dani',
      vzorec: R`$$r_d\cdot(1-t)$$`,
      vypocet: R`$$11{,}2\cdot(1-0{,}24)=11{,}2\cdot0{,}76=8{,}51\,\%$$` },
    { t: 'Náklady vlastního kapitálu – Gordonův model',
      proc: 'Akcionář dostává dividendový výnos a k tomu růst dividendy.',
      vzorec: R`$$r_e=\frac{D_1}{P}+g$$`,
      vypocet: R`$$r_e=\frac{180}{1\,500}+0{,}03=0{,}12+0{,}03=15\,\%$$` },
    { t: 'WACC',
      vzorec: R`$$WACC=\frac{D}{V}\cdot r_d\cdot(1-t)+\frac{E}{V}\cdot r_e$$`,
      dosad: R`$$WACC=0{,}1296\cdot8{,}51+0{,}8704\cdot15$$`,
      vypocet: R`$$WACC=1{,}10+13{,}06=14{,}16\,\%$$`,
      vysl: R`\(r_d=11{,}2\,\%\) (po dani 8,51 %), \(r_e=15\,\%\), <b>WACC = 14,16 %</b>.` }
  ],
  kalk: 'Nejdřív (800 − 670) ÷ 12 = 10,83, pak + 70 = 80,83. Jmenovatel zvlášť: 0,6 × 670 + 0,4 × 800 = 722.',
  pozor: 'Dividenda 180 Kč je „očekávaná“, tedy už D₁ – nenásob ji (1 + g). Nominály (800 a 1 000) do vah nepatří, jen do vzorce pro r_d.'
};

P['5-5'] = {
  dano: [
    [R`\(r_f\)`, '4 %', 'výnos bezrizikového aktiva'],
    [R`\(E(r_m)\)`, '8 %', 'očekávaná výnosnost trhu'],
    [R`\(\sigma_M\)`, '9,6 % = 0,096', 'směrodatná odchylka trhu'],
    [R`\(r_i\)`, 'A 10 · B 6 · C 8,3 · D 10 · E 14 %', 'skutečné (očekávané) výnosnosti akcií'],
    [R`\(\sigma_i\)`, 'A 9 · B 10 · C 12 · D 14 · E 20 %', 'směrodatné odchylky akcií'],
    [R`\(\sigma_{iM}\)`, 'A 0,0021 · B 0,0092 · C 0,0100 · D 0,0090 · E 0,0164', 'kovariance akcie s trhem']
  ],
  hledame: 'betu (dvěma způsoby), rovnovážnou výnosnost podle CAPM, rovnici SML, alfu a investiční doporučení pro každou akcii.',
  kroky: [
    { t: 'Rozptyl trhu',
      proc: 'Beta se počítá jako kovariance dělená rozptylem trhu. Rozptyl je směrodatná odchylka na druhou – počítej v desetinných číslech, protože i kovariance jsou zadané desetinně.',
      vypocet: R`$$\sigma_M^2=0{,}096^2=0{,}009216$$` },
    { t: '1) Beta z kovariance',
      vzorec: R`$$\beta_i=\frac{\sigma_{iM}}{\sigma_M^2}$$`,
      vypocet: R`$$\beta_A=\frac{0{,}0021}{0{,}009216}=0{,}228\quad\beta_B=\frac{0{,}0092}{0{,}009216}=0{,}998\quad\beta_C=1{,}085\quad\beta_D=0{,}977\quad\beta_E=1{,}780$$` },
    { t: '2) Beta z korelace',
      proc: 'Nejdřív korelační koeficient (kovariance dělená součinem směrodatných odchylek), z něj pak beta. Musí vyjít totéž jako v kroku 2 – je to kontrola.',
      vzorec: R`$$\rho_{iM}=\frac{\sigma_{iM}}{\sigma_i\cdot\sigma_M}\qquad\beta_i=\rho_{iM}\cdot\frac{\sigma_i}{\sigma_M}$$`,
      dosad: R`$$\rho_A=\frac{0{,}0021}{0{,}09\cdot0{,}096}=\frac{0{,}0021}{0{,}00864}=0{,}243\qquad\beta_A=0{,}243\cdot\frac{0{,}09}{0{,}096}=0{,}228$$`,
      vypocet: R`$$\rho_B=0{,}958\qquad\rho_C=0{,}868\qquad\rho_D=0{,}670\qquad\rho_E=0{,}854$$` },
    { t: '4) Rovnice přímky SML',
      proc: 'Tržní riziková prémie je 8 − 4 = 4 %. SML začíná v bodě [β = 0; 4 %] a prochází bodem trhu [β = 1; 8 %].',
      vzorec: R`$$E(r_i)=r_f+\beta_i\cdot[E(r_m)-r_f]=4+4\cdot\beta_i$$` },
    { t: '3) Rovnovážné výnosnosti',
      proc: 'Do rovnice SML dosadíme betu každé akcie. Vyjde výnos, který by akcie měla mít vzhledem ke svému riziku.',
      vypocet: R`$$A:\;4+4\cdot0{,}228=4{,}91\,\%\quad B:\;7{,}99\,\%\quad C:\;8{,}34\,\%\quad D:\;7{,}91\,\%\quad E:\;4+4\cdot1{,}780=11{,}12\,\%$$` },
    { t: '5) Alfa',
      proc: 'Rozdíl mezi výnosem, který akcie skutečně nabízí, a výnosem, který by měla mít podle CAPM.',
      vzorec: R`$$\alpha_i=r_i-E(r_i)$$`,
      vypocet: R`$$\alpha_A=10-4{,}91=+5{,}09\quad\alpha_B=6-7{,}99=-1{,}99\quad\alpha_C=8{,}3-8{,}34=-0{,}04\quad\alpha_D=10-7{,}91=+2{,}09\quad\alpha_E=14-11{,}12=+2{,}88$$` },
    { t: 'Investiční doporučení',
      proc: 'Kladná alfa = akcie dává víc, než odpovídá riziku = leží nad SML = je podhodnocená → koupit. Záporná alfa = pod SML = nadhodnocená → prodat. Alfa kolem nuly → držet.',
      vysl: '<b>Koupit A, D, E</b> · <b>prodat B</b> · <b>C držet</b> (α = −0,04 je prakticky nula).' }
  ],
  kalk: 'Nejdřív si ulož 0,096² = 0,009216 do paměti kalkulačky a každou kovarianci jím vyděl.',
  pozor: 'Nemíchej procenta a desetinná čísla: v betě a korelaci dosazuj σ jako 0,09 a 0,096 (kovariance jsou desetinně). Do CAPM už můžeš dosazovat v procentech. Nejvyšší výnos (E, 14 %) neznamená automaticky nejlepší koupi – rozhoduje alfa, a tu má nejvyšší A.'
};

})(window.PODROBNE);
