/* Podrobné postupy krok za krokem – seminární úkoly za bod (Úkol 1–7).
   Formát jednoho příkladu (klíč = id příkladu z TOPICS v index.html):
   dano:   [[značka, hodnota, co to je / odkud ze zadání], ...]
   hledame: co máme spočítat
   kroky:  [{t:'název kroku', proc:'proč to děláme', vzorec, dosad, vypocet, vysl}, ...]
   kalk:   tip na kalkulačku (nepovinné), pozor: častá chyba (nepovinné)
   Matematika: $$...$$ (na samostatném řádku) nebo \( ... \) (v textu), desetinná čárka {,} */
window.PODROBNE = window.PODROBNE || {};
(function (P) {
const R = String.raw;

/* ===================== ÚKOL 1 ===================== */
P['1-3'] = {
  dano: [
    [R`\(D_0\)`, '120 Kč', 'stávající (dnešní) dividenda – „stávající dividenda činí 120 Kč“'],
    [R`\(g\)`, R`4 % = 0,04`, 'roční růst dividendy – „růst o 4 % ročně“'],
    [R`\(n\)`, '5', 'počet let – „v 5. roce“']
  ],
  hledame: R`dividendu v 5. roce \(D_5\).`,
  kroky: [
    { t: 'Pochopit, co se děje s dividendou',
      proc: 'Každý rok se dividenda zvýší o 4 % z předchozí hodnoty. Je to jako úrok z úroku – každý rok násobíme číslem 1,04.',
      vzorec: R`$$D_n=D_0\cdot(1+g)^n$$`,
      vysl: R`Mocnina \(n\) = kolikrát dividendu zvýšíme (5×).` },
    { t: 'Dosadit do vzorce',
      dosad: R`$$D_5=120\cdot(1+0{,}04)^5=120\cdot1{,}04^5$$` },
    { t: 'Spočítat mocninu',
      proc: R`\(1{,}04^5\) znamená \(1{,}04\cdot1{,}04\cdot1{,}04\cdot1{,}04\cdot1{,}04\).`,
      vypocet: R`$$1{,}04^5=1{,}216653$$`,
      vysl: R`Za 5 let dividenda vzroste asi o 21,67 %.` },
    { t: 'Vynásobit dnešní dividendou',
      vypocet: R`$$D_5=120\cdot1{,}216653=145{,}998\doteq146{,}00\text{ Kč}$$`,
      vysl: R`\(D_5=146{,}00\) Kč` },
    { t: 'Kontrola po jednotlivých letech (nepovinné)',
      proc: 'Každý rok vynásobíš předchozí dividendu 1,04 – musíš dojít ke stejnému číslu.',
      vypocet: R`1. rok \(120\cdot1{,}04=124{,}80\) → 2. rok \(129{,}79\) → 3. rok \(134{,}98\) → 4. rok \(140{,}38\) → 5. rok \(146{,}00\)` }
  ],
  kalk: R`1,04 → tlačítko \(x^y\) → 5 → = → × 120 → = (vyjde 145,998).`,
  pozor: R`Nesčítej 5 × 4 % = 20 % (vyšlo by 144 Kč) – růst se počítá vždy z už zvýšené dividendy.`
};

P['1-5'] = {
  dano: [
    [R`\(D_1\)`, '84 Kč', R`dividenda „v příštím roce“ – je to už budoucí dividenda, tj. \(D_1\)`],
    [R`\(g\)`, '3 % = 0,03', 'pravidelný růst dividendy p. a.'],
    [R`\(r\)`, '15 % = 0,15', 'výnosnost, kterou investor požaduje']
  ],
  hledame: R`cenu akcie dnes \(P_0\) (kolik má investor za akcii nejvýš zaplatit).`,
  kroky: [
    { t: 'Vybrat správný vzorec',
      proc: 'Dividenda roste stále stejným tempem donekonečna → Gordonův model (model konstantního růstu).',
      vzorec: R`$$P_0=\frac{D_1}{r-g}$$` },
    { t: R`Rozhodnout, jestli je dividenda \(D_0\) nebo \(D_1\)`,
      proc: R`„V příštím roce“ = dividenda, která přijde za rok = \(D_1\). Proto ji už nenásobíme \((1+g)\). (Kdyby bylo „letos vyplatila“, byla by to \(D_0\) a museli bychom ji nejdřív zvýšit o 3 %.)`,
      vysl: R`\(D_1=84\) Kč` },
    { t: R`Spočítat jmenovatel \(r-g\)`,
      proc: 'Rozdíl mezi požadovanou výnosností a růstem – vždy převeď procenta na desetinná čísla.',
      vypocet: R`$$r-g=0{,}15-0{,}03=0{,}12$$` },
    { t: 'Vydělit',
      dosad: R`$$P_0=\frac{84}{0{,}12}$$`,
      vypocet: R`$$P_0=700\text{ Kč}$$`,
      vysl: R`Cena akcie \(P_0=700\) Kč` }
  ],
  kalk: R`0,15 − 0,03 = 0,12; pak 84 ÷ 0,12 = 700.`,
  pozor: R`Vzorec funguje jen když \(r>g\). Nedosazuj procenta jako celá čísla (84 / (15 − 3) = 7 je špatně).`
};

P['1-7'] = {
  dano: [
    [R`\(b\)`, R`60 % = 0,6`, R`podíl zisku, který se reinvestuje – „reinvestování 60 % zisků“`],
    [R`\(ROE\)`, R`10 % = 0,10`, R`výnosnost reinvestovaných peněz – „projektů s ROE 10 %“`],
    [R`\(r\)`, R`15 % = 0,15`, R`míra kapitalizace = požadovaná výnosnost akcionářů`],
    [R`\(D_1\)`, R`2 $`, R`„dividenda na konci roku“ → příští dividenda`],
    [R`\(E_1\)`, R`5 $`, R`zisk na akcii (EPS)`]
  ],
  hledame: R`1) cenu akcie \(P_0\), 2) hodnotu růstových příležitostí PVGO, 3) proč je firma lákavá k převzetí.`,
  kroky: [
    { t: R`Kontrola: dividenda = nereinvestovaná část zisku`,
      proc: R`Když se 60 % zisku reinvestuje, vyplatí se zbylých 40 %.`,
      vypocet: R`$$D_1=(1-b)\cdot E_1=0{,}4\cdot5=2\ \$$$`,
      vysl: R`Sedí se zadáním (2 $).` },
    { t: R`Tempo růstu dividend \(g\)`,
      proc: R`Firma roste jen díky tomu, co reinvestuje. Růst = kolik reinvestuje × jak výnosně.`,
      vzorec: R`$$g=b\cdot ROE$$`,
      dosad: R`$$g=0{,}6\cdot0{,}10$$`,
      vypocet: R`$$g=0{,}06=6\,\%$$`,
      vysl: R`\(g=6\,\%\)` },
    { t: R`Cena akcie (Gordonův model)`,
      proc: R`Dividenda roste stále o 6 % → \(P_0=\frac{D_1}{r-g}\). \(D_1\) je dividenda na konci roku, nenásobí se.`,
      vzorec: R`$$P_0=\frac{D_1}{r-g}$$`,
      dosad: R`$$P_0=\frac{2}{0{,}15-0{,}06}=\frac{2}{0{,}09}$$`,
      vypocet: R`$$P_0=22{,}22\ \$$$`,
      vysl: R`Akcie se bude prodávat za 22,22 $.` },
    { t: R`Hodnota akcie BEZ růstu`,
      proc: R`Kdyby firma vyplácela celý zisk (nic nereinvestovala), byl by to věčný stejný příjem 5 $ → věčná renta \(\frac{E_1}{r}\).`,
      vzorec: R`$$P_{\text{bez růstu}}=\frac{E_1}{r}$$`,
      dosad: R`$$\frac{5}{0{,}15}$$`,
      vypocet: R`$$=33{,}33\ \$$$` },
    { t: R`PVGO = cena s růstem − cena bez růstu`,
      proc: R`PVGO říká, kolik hodnoty přidávají (nebo ničí) reinvestice.`,
      vzorec: R`$$PVGO=P_0-\frac{E_1}{r}$$`,
      dosad: R`$$PVGO=22{,}22-33{,}33$$`,
      vypocet: R`$$PVGO=-11{,}11\ \$$$`,
      vysl: R`PVGO je záporné → reinvestice ničí hodnotu.` },
    { t: R`Proč takeover`,
      proc: R`ROE (10 %) je nižší než požadovaná výnosnost r (15 %) – každý reinvestovaný dolar vydělá méně, než by akcionáři chtěli.`,
      vysl: R`Nový vlastník zastaví reinvestice, vyplatí celý zisk → akcie bude mít hodnotu 33,33 $ místo 22,22 $ (+11,11 $ = +50 %).` }
  ],
  kalk: R`0,6 × 0,1 = 0,06; 0,15 − 0,06 = 0,09; 2 ÷ 0,09 = 22,22; 5 ÷ 0,15 = 33,33; 22,22 − 33,33 = −11,11.`,
  pozor: R`Pravidlo: ROE &lt; r → PVGO záporné (růst škodí); ROE &gt; r → PVGO kladné; ROE = r → PVGO = 0.`
};

/* ===================== ÚKOL 2 ===================== */
P['2-8'] = {
  dano: [
    [R`\(F\)`, R`50 000 Kč`, R`nominál – vrátí se na konci`],
    [R`\(C\)`, R`250 Kč`, R`kupón „vyplácí se pololetně“ → 250 Kč každého půl roku`],
    [R`\(i\)`, R`8,5 % = 0,085 p. a.`, R`roční tržní výnosová míra`],
    [R`\(n\)`, R`2 roky`, R`doba do splatnosti`]
  ],
  hledame: R`cenu dluhopisu \(P\) = současnou hodnotu všech budoucích plateb.`,
  kroky: [
    { t: R`Převést vše na pololetí`,
      proc: R`Kupón chodí každého půl roku → období = pololetí. Roční sazbu vydělíme 2, počet let vynásobíme 2.`,
      vypocet: R`$$i_{1/2}=\frac{0{,}085}{2}=0{,}0425\qquad m=2\cdot2=4\text{ pololetí}$$`,
      vysl: R`4 platby kupónu po 250 Kč, sazba 4,25 % za pololetí.` },
    { t: R`Diskontní faktory \(1{,}0425^t\)`,
      proc: R`Každá platba přijde v jiném pololetí, proto ji dělíme \(1{,}0425\) na tolikátou, kolikáté je to pololetí.`,
      vypocet: R`$$1{,}0425^1=1{,}0425\quad1{,}0425^2=1{,}086806\quad1{,}0425^3=1{,}132996\quad1{,}0425^4=1{,}181148$$` },
    { t: R`Současná hodnota každé platby zvlášť`,
      vypocet: R`<table class="t"><tr><th>Pololetí</th><th>Platba</th><th>Výpočet</th><th>Současná hodnota</th></tr><tr><td>1</td><td>250</td><td>250 / 1,0425</td><td>239,81</td></tr><tr><td>2</td><td>250</td><td>250 / 1,086806</td><td>230,03</td></tr><tr><td>3</td><td>250</td><td>250 / 1,132996</td><td>220,65</td></tr><tr><td>4</td><td>250 + 50 000</td><td>250 / 1,181148 + 50 000 / 1,181148</td><td>211,66 + 42 331,70</td></tr></table>`,
      vysl: R`Kupóny celkem 902,15 Kč, nominál dnes 42 331,70 Kč.` },
    { t: R`Totéž rychleji vzorcem (anuita + nominál)`,
      proc: R`Místo 4 dělení stačí zásobitel (anuitní faktor) pro kupóny + jedno dělení pro nominál.`,
      vzorec: R`$$P=C\cdot\frac{1-(1+i_{1/2})^{-m}}{i_{1/2}}+\frac{F}{(1+i_{1/2})^{m}}$$`,
      dosad: R`$$P=250\cdot\frac{1-1{,}0425^{-4}}{0{,}0425}+\frac{50\,000}{1{,}0425^{4}}$$`,
      vypocet: R`$$=250\cdot3{,}60861+\frac{50\,000}{1{,}181148}=902{,}15+42\,331{,}70$$` },
    { t: R`Sečíst`,
      vypocet: R`$$P=902{,}15+42\,331{,}70=43\,233{,}86\text{ Kč}$$`,
      vysl: R`Cena dluhopisu 43 233,86 Kč (pod nominálem, protože kupón 500 Kč/rok = 1 % je mnohem méně než tržních 8,5 %).` }
  ],
  kalk: R`1,0425 \(x^y\) 4 = 1,181148 → 50 000 ÷ 1,181148 = 42 331,70. Kupóny: 250 ÷ 1,0425 + 250 ÷ 1,0425² + … (nebo anuitní faktor 3,60861 × 250).`,
  pozor: R`Při pololetním kupónu NEDISKONTUJ 8,5 % ani 2 roky – vždy 4,25 % a 4 období. A kupón 250 Kč už je za pololetí, nedělí se.`
};

P['2-U2'] = {
  dano: [
    [R`\(F\)`, R`20 000 Kč`, R`nominální hodnota poukázky`],
    [R`\(d\)`, R`5,00 % = 0,05 p. a.`, R`diskontní míra`],
    [R`\(t\)`, R`60 dní`, R`splatnost`],
    [R`báze`, R`360 dní`, R`u pokladničních poukázek se rok bere jako 360 dní`]
  ],
  hledame: R`cenu poukázky \(P\) (kolik zaplatíme dnes).`,
  kroky: [
    { t: R`Pochopit princip`,
      proc: R`Poukázka nemá kupón. Koupíš ji levněji (s diskontem) a při splatnosti dostaneš celý nominál. Diskont = úrok „odečtený dopředu“ za 60 dní.` },
    { t: R`Spočítat diskont v Kč`,
      vzorec: R`$$\text{diskont}=F\cdot d\cdot\frac{t}{360}$$`,
      dosad: R`$$\text{diskont}=20\,000\cdot0{,}05\cdot\frac{60}{360}$$`,
      vypocet: R`$$20\,000\cdot0{,}05=1\,000\text{ (za rok)}\qquad1\,000\cdot\frac{60}{360}=1\,000\cdot0{,}16667=166{,}67\text{ Kč}$$`,
      vysl: R`Diskont 166,67 Kč` },
    { t: R`Cena = nominál − diskont`,
      vzorec: R`$$P=F\left(1-d\cdot\frac{t}{360}\right)=F-\text{diskont}$$`,
      vypocet: R`$$P=20\,000-166{,}67=19\,833{,}33\text{ Kč}$$`,
      vysl: R`Cena 19 833,33 Kč` }
  ],
  kalk: R`60 ÷ 360 × 0,05 × 20 000 = 166,67 → 20 000 − 166,67.`,
  pozor: R`Nedělit (1 + 0,05·60/360) – to je jiný (úrokový) způsob. U diskontní míry se odečítá: \(F\cdot(1-d\cdot t/360)\).`
};

P['2-9'] = {
  dano: [
    [R`\(I_0\)`, R`10 000 Kč`, R`cena dluhopisu = vložená částka dnes`],
    [R`\(n\)`, R`5 let`, R`splatnost`],
    [R`\(i\)`, R`3,2 % = 0,032`, R`úroková (kupónová) sazba`],
    [R`\(t_d\)`, R`15 % = 0,15`, R`daň z úroku`],
    [R`\(r\)`, R`1,5 % = 0,015`, R`alternativní výnos – termínovaný vklad (tímhle diskontujeme)`]
  ],
  hledame: R`čistý výnos se zohledněním času = čistou současnou hodnotu \(NPV\).`,
  kroky: [
    { t: R`Roční úrok před daní`,
      vypocet: R`$$10\,000\cdot0{,}032=320\text{ Kč}$$` },
    { t: R`Daň a čistý úrok`,
      proc: R`Pan Koutný dostane úrok až po zdanění.`,
      vypocet: R`$$\text{daň}=320\cdot0{,}15=48\text{ Kč}\qquad\text{čistý úrok}=320-48=272\text{ Kč}$$`,
      vysl: R`Každý rok dostane 272 Kč.` },
    { t: R`Sestavit peněžní toky`,
      proc: R`Roky 1–4 jen čistý úrok, v 5. roce úrok + vrácených 10 000 Kč.`,
      vypocet: R`$$CF_1..CF_4=272\qquad CF_5=272+10\,000=10\,272$$` },
    { t: R`Diskontovat každý tok sazbou 1,5 %`,
      proc: R`Peníze v budoucnu mají menší hodnotu – srovnáváme s tím, co by vydělal termínovaný vklad.`,
      vzorec: R`$$PV_t=\frac{CF_t}{(1+r)^t}$$`,
      vypocet: R`<table class="t"><tr><th>Rok</th><th>Tok</th><th>\(1{,}015^t\)</th><th>Současná hodnota</th></tr><tr><td>1</td><td>272</td><td>1,015000</td><td>267,98</td></tr><tr><td>2</td><td>272</td><td>1,030225</td><td>264,02</td></tr><tr><td>3</td><td>272</td><td>1,045678</td><td>260,12</td></tr><tr><td>4</td><td>272</td><td>1,061364</td><td>256,27</td></tr><tr><td>5</td><td>10 272</td><td>1,077284</td><td>9 535,09</td></tr><tr><th>Σ</th><th></th><th></th><th>10 583,48</th></tr></table>` },
    { t: R`NPV = součet současných hodnot − vklad`,
      vzorec: R`$$NPV=\sum_{t=1}^{5}\frac{CF_t}{(1+r)^t}-I_0$$`,
      vypocet: R`$$NPV=10\,583{,}48-10\,000=583{,}48\text{ Kč}$$`,
      vysl: R`Čistý výnos 583,48 Kč &gt; 0 → dluhopis je lepší než termínovaný vklad.` }
  ],
  kalk: R`1,015 \(x^y\) 5 = 1,077284 → 10 272 ÷ 1,077284 = 9 535,09. Ostatní roky stejně s mocninou 1–4.`,
  pozor: R`Bez diskontování by čistý výnos byl 5 × 272 = 1 360 Kč – to ale nezohledňuje čas. Diskontuje se 1,5 % (alternativa), ne 3,2 %.`
};

/* ===================== ÚKOL 3 ===================== */
P['3-4'] = {
  dano: [
    [R`\(n\)`, R`100 akcií`, R`kontrakt na 100 akcií`],
    [R`\(X\)`, R`50 Kč`, R`realizační cena – „právo koupit za 50 Kč/ks“ → call opce`],
    [R`\(c\)`, R`5 Kč/ks`, R`opční prémie (poplatek)`],
    [R`\(S\)`, R`60 Kč (a), pod 50 Kč (b)`, R`cena akcie krátce před splatností`]
  ],
  hledame: R`co udělá držitel a jaký má zisk/ztrátu, bod zvratu a graf.`,
  kroky: [
    { t: R`Kolik držitel zaplatil za opci`,
      vypocet: R`$$\text{prémie}=c\cdot n=5\cdot100=500\text{ Kč}$$`,
      vysl: R`500 Kč zaplatil vždy – ať opci uplatní, nebo ne.` },
    { t: R`a) Cena 60 Kč – uplatní?`,
      proc: R`Call = právo KOUPIT za 50. Když akcie stojí 60, vyplatí se koupit za 50 (je to levněji než na trhu) → opci uplatní.`,
      vzorec: R`$$\text{výplata}=\max(S-X,0)\cdot n$$`,
      dosad: R`$$\max(60-50,0)\cdot100=10\cdot100$$`,
      vypocet: R`$$\text{výplata}=1\,000\text{ Kč}\qquad\text{zisk}=1\,000-500=500\text{ Kč}$$`,
      vysl: R`Uplatní, čistý zisk +500 Kč.` },
    { t: R`b) Cena pod 50 Kč – uplatní?`,
      proc: R`Za 50 kupovat nebude, na trhu je akcie levnější → nechá opci propadnout. Výplata 0.`,
      vypocet: R`$$\max(S-50,0)=0\qquad\text{zisk}=0-500=-500\text{ Kč}$$`,
      vysl: R`Neuplatní, ztráta = zaplacená prémie −500 Kč (víc ztratit nemůže).` },
    { t: R`Bod zvratu`,
      proc: R`Cena akcie, při které výplata přesně pokryje prémii.`,
      vzorec: R`$$S^*=X+c$$`,
      vypocet: R`$$S^*=50+5=55\text{ Kč}$$`,
      vysl: R`Nad 55 Kč je držitel v zisku, mezi 50 a 55 Kč opci uplatní, ale jen sníží ztrátu.` }
  ],
  pozor: R`Zisk je výplata MINUS prémie. A prémie je 5 Kč za kus → za 100 akcií 500 Kč.`
};

P['3-6'] = {
  dano: [
    [R`\(X\)`, R`2 200`, R`realizační cena – prodejní (put) opce = právo PRODAT za 2 200`],
    [R`\(S_i\)`, R`2 100 / 2 200 / 2 400`, R`možné ceny akcie za rok`],
    [R`\(q_i\)`, R`0,3 / 0,4 / 0,3`, R`pravděpodobnosti těchto cen (součet = 1)`]
  ],
  hledame: R`hodnotu put opce = očekávanou výplatu.`,
  kroky: [
    { t: R`Výplata put opce v každém scénáři`,
      proc: R`Put = právo prodat za 2 200. Vyplatí se, jen když je akcie levnější než 2 200 (prodám dráž, než je na trhu).`,
      vzorec: R`$$\text{výplata}_i=\max(X-S_i,0)$$`,
      vypocet: R`$$2\,100:\ \max(2\,200-2\,100,0)=100\qquad2\,200:\ \max(0,0)=0\qquad2\,400:\ \max(-200,0)=0$$` },
    { t: R`Vynásobit pravděpodobnostmi`,
      vypocet: R`$$100\cdot0{,}3=30\qquad0\cdot0{,}4=0\qquad0\cdot0{,}3=0$$` },
    { t: R`Sečíst = hodnota opce`,
      vzorec: R`$$E(P)=\sum q_i\cdot\max(X-S_i,0)$$`,
      vypocet: R`$$E(P)=30+0+0=30$$`,
      vysl: R`Hodnota put opce 30.` }
  ],
  pozor: R`U put je \(X-S\) (ne \(S-X\) jako u call). Záporné výplaty se nepočítají – opce se prostě neuplatní (max s nulou).`
};

/* ===================== ÚKOL 4 ===================== */
P['4-U1'] = {
  dano: [
    [R`\(p_1, R_1\)`, R`0,4; 300 000 Kč`, R`příznivý výsledek`],
    [R`\(p_2, R_2\)`, R`0,3; −100 000 Kč`, R`nepříznivý (ztráta)`],
    [R`\(p_3, R_3\)`, R`0,3; 100 000 Kč`, R`realistický`]
  ],
  hledame: R`očekávaný výnos \(E\), rozptyl \(\sigma^2\), směrodatnou odchylku \(\sigma\) a co to znamená.`,
  kroky: [
    { t: R`Očekávaný výnos = vážený průměr`,
      proc: R`Každý výsledek vynásobíš jeho pravděpodobností a sečteš.`,
      vzorec: R`$$E=\sum p_i\cdot R_i$$`,
      dosad: R`$$E=0{,}4\cdot300\,000+0{,}3\cdot(-100\,000)+0{,}3\cdot100\,000$$`,
      vypocet: R`$$E=120\,000-30\,000+30\,000=120\,000\text{ Kč}$$` },
    { t: R`Odchylky od očekávaného výnosu`,
      proc: R`Jak daleko je každý výsledek od průměru 120 000.`,
      vypocet: R`$$300\,000-120\,000=180\,000\qquad-100\,000-120\,000=-220\,000\qquad100\,000-120\,000=-20\,000$$` },
    { t: R`Rozptyl = vážený průměr čtverců odchylek`,
      vzorec: R`$$\sigma^2=\sum p_i\,(R_i-E)^2$$`,
      vypocet: R`<table class="t"><tr><th>Výsledek</th><th>odchylka²</th><th>× p</th></tr><tr><td>příznivý</td><td>180 000² = 32 400 000 000</td><td>× 0,4 = 12 960 000 000</td></tr><tr><td>nepříznivý</td><td>(−220 000)² = 48 400 000 000</td><td>× 0,3 = 14 520 000 000</td></tr><tr><td>realistický</td><td>(−20 000)² = 400 000 000</td><td>× 0,3 = 120 000 000</td></tr><tr><th>Σ</th><th></th><th>27 600 000 000 Kč²</th></tr></table>` },
    { t: R`Směrodatná odchylka = odmocnina z rozptylu`,
      vypocet: R`$$\sigma=\sqrt{27\,600\,000\,000}=166\,132{,}48\text{ Kč}$$`,
      vysl: R`\(\sigma=166\,132{,}48\) Kč` },
    { t: R`Interpretace (variační koeficient)`,
      vypocet: R`$$V=\frac{\sigma}{E}=\frac{166\,132{,}48}{120\,000}=1{,}38$$`,
      vysl: R`Odchylka je větší než samotný očekávaný výnos → vysoké riziko; s pravděpodobností 30 % projekt prodělá 100 000 Kč.` }
  ],
  kalk: R`Rozptyl si zjednoduš v tisících: 180² · 0,4 + 220² · 0,3 + 20² · 0,3 = 27 600 (tis.²) → √27 600 = 166,13 tis. Kč.`,
  pozor: R`Záporný výsledek dosazuj se znaménkem minus (−100 000). Na druhou je odchylka vždy kladná.`
};

P['4-U2'] = {
  dano: [
    [R`\(\beta\)`, R`2,41 (pak 1,60)`, R`beta Dellu = citlivost akcie na trh`],
    [R`\(\Delta r_m\)`, R`+1,5 % / −2,5 %`, R`změna výnosu trhu`]
  ],
  hledame: R`o kolik % se změní výnosnost akcie a o kolik p. b. se liší odhady při obou betách.`,
  kroky: [
    { t: R`Co znamená beta`,
      proc: R`Beta říká, kolikrát silněji než trh se akcie hýbe. β = 2,41 → když trh vzroste o 1 %, akcie vzroste asi o 2,41 %.`,
      vzorec: R`$$\Delta r_i=\beta\cdot\Delta r_m$$` },
    { t: R`Beta 2,41`,
      vypocet: R`$$2{,}41\cdot1{,}5=+3{,}615\,\%\qquad2{,}41\cdot(-2{,}5)=-6{,}025\,\%$$` },
    { t: R`Beta 1,60`,
      vypocet: R`$$1{,}60\cdot1{,}5=+2{,}4\,\%\qquad1{,}60\cdot(-2{,}5)=-4{,}0\,\%$$` },
    { t: R`Rozdíl v procentních bodech`,
      proc: R`Odečteš odhad s betou 1,60 od odhadu s betou 2,41 (v absolutní hodnotě).`,
      vypocet: R`$$3{,}615-2{,}4=1{,}215\text{ p. b.}\qquad6{,}025-4{,}0=2{,}025\text{ p. b.}$$` },
    { t: R`Co to znamená pro riziko`,
      vysl: R`Nižší beta = akcie méně kopíruje trh = nižší systematické (tržní) riziko. Při averzi k riziku je to důležité, protože v poklesu trhu ztratí méně (−4 % místo −6,025 %).` }
  ],
  pozor: R`Rozdíl se uvádí v procentních bodech (p. b.), ne v procentech.`
};

/* ===================== ÚKOL 5 ===================== */
P['5-4'] = {
  dano: [
    [R`\(N\)`, R`900 Kč`, R`nominál obligace`],
    [R`\(P_d\)`, R`780 Kč`, R`tržní hodnota (cena) obligace`],
    [R`\(\acute{u}\)`, R`60 Kč`, R`roční úrok (kupón) – „úrok na konci roku 60 Kč“`],
    [R`počet obligací`, R`20 000 ks`, R``],
    [R`\(n\)`, R`20 let`, R`doba do splatnosti`],
    [R`\(P_e\)`, R`2 500 Kč`, R`tržní hodnota akcie (nominál 2 000 Kč NEPOTŘEBUJEŠ – bere se tržní)`],
    [R`\(D_1\)`, R`280 Kč`, R`očekávaná dividenda`],
    [R`\(g\)`, R`2 % = 0,02`, R`růst dividend`],
    [R`počet akcií`, R`40 000 ks`, R``],
    [R`\(t\)`, R`24 % = 0,24`, R`daň ze zisku`]
  ],
  hledame: R`vážené průměrné náklady kapitálu WACC.`,
  kroky: [
    { t: R`Tržní hodnota dluhu D a vlastního kapitálu E`,
      proc: R`Váhy ve WACC se počítají z TRŽNÍCH hodnot (cena × počet kusů).`,
      vypocet: R`$$D=780\cdot20\,000=15\,600\,000\qquad E=2\,500\cdot40\,000=100\,000\,000\qquad V=D+E=115\,600\,000$$` },
    { t: R`Váhy`,
      vypocet: R`$$\frac{D}{V}=\frac{15{,}6}{115{,}6}=0{,}1349\qquad\frac{E}{V}=\frac{100}{115{,}6}=0{,}8651$$`,
      vysl: R`Dluh tvoří 13,49 %, vlastní kapitál 86,51 % (součet 1).` },
    { t: R`Náklady dluhu \(r_d\) – zjednodušený výnos do splatnosti`,
      proc: R`Obligace se kupuje za 780, ale vrátí se 900 → kromě úroku 60 Kč ročně ještě zisk \((900-780)/20=6\) Kč ročně. Dělí se „průměrnou“ investicí \(0{,}6P+0{,}4N\).`,
      vzorec: R`$$r_d=\frac{\acute{u}+\frac{N-P}{n}}{0{,}6P+0{,}4N}$$`,
      dosad: R`$$r_d=\frac{60+\frac{900-780}{20}}{0{,}6\cdot780+0{,}4\cdot900}$$`,
      vypocet: R`Čitatel: \(60+\frac{120}{20}=60+6=66\). Jmenovatel: \(468+360=828\). $$r_d=\frac{66}{828}=0{,}0797=7{,}97\,\%$$` },
    { t: R`Náklady dluhu po zdanění`,
      proc: R`Úroky snižují daň (daňový štít) → dluh je ve skutečnosti levnější.`,
      vypocet: R`$$r_d(1-t)=7{,}97\cdot(1-0{,}24)=7{,}97\cdot0{,}76=6{,}06\,\%$$` },
    { t: R`Náklady vlastního kapitálu \(r_e\) – dividendový (Gordonův) model`,
      vzorec: R`$$r_e=\frac{D_1}{P_e}+g$$`,
      dosad: R`$$r_e=\frac{280}{2\,500}+0{,}02$$`,
      vypocet: R`$$r_e=0{,}112+0{,}02=0{,}132=13{,}2\,\%$$` },
    { t: R`WACC = vážený průměr`,
      vzorec: R`$$WACC=\frac{D}{V}\,r_d(1-t)+\frac{E}{V}\,r_e$$`,
      dosad: R`$$WACC=0{,}1349\cdot6{,}06+0{,}8651\cdot13{,}2$$`,
      vypocet: R`$$=0{,}82+11{,}42=12{,}24\,\%$$`,
      vysl: R`WACC ≈ 12,24 %` }
  ],
  kalk: R`(60 + 120 ÷ 20) ÷ (0,6 × 780 + 0,4 × 900) = 0,0797; × 0,76 = 0,0606. 280 ÷ 2 500 + 0,02 = 0,132. Pak 0,1349 × 6,06 + 0,8651 × 13,2.`,
  pozor: R`Nepoužívej nominální hodnoty (900 Kč, 2 000 Kč) pro váhy – jen tržní. A nezapomeň daň u dluhu, u vlastního kapitálu se daň neodečítá.`
};

P['5-6'] = {
  dano: [
    [R`\(r_f\)`, R`3 %`, R`bezrizikové aktivum`],
    [R`\(E(r_m)\)`, R`9 %`, R`očekávaná výnosnost trhu (σ trhu 10,6 % k výpočtu nepotřebuješ)`],
    [R`\(\beta_i\)`, R`A 1,9 · B 0,78 · C 1,6 · D 1,02 · E 0,61 · F 1,1`, R`bety akcií`],
    [R`\(r_i\)`, R`A 14 · B 3 · C 10 · D 6 · E 2 · F 7 %`, R`skutečná výnosnost akcií`]
  ],
  hledame: R`rovnovážné výnosnosti \(E(r_i)\), rovnici SML, alfy \(\alpha_i\) a doporučení koupit/prodat.`,
  kroky: [
    { t: R`Tržní riziková prémie`,
      proc: R`O kolik trh vydělá víc než bezrizikové aktivum.`,
      vypocet: R`$$E(r_m)-r_f=9-3=6\,\%$$` },
    { t: R`Rovnice SML (CAPM)`,
      vzorec: R`$$E(r_i)=r_f+\beta_i\,(E(r_m)-r_f)$$`,
      dosad: R`$$E(r_i)=3+6\cdot\beta_i$$`,
      vysl: R`Přímka prochází body [β = 0; 3 %] a [β = 1; 9 %].` },
    { t: R`Rovnovážná výnosnost každé akcie`,
      vypocet: R`<table class="t"><tr><th>Akcie</th><th>3 + 6 · β</th><th>E(r)</th></tr><tr><td>A</td><td>3 + 6 · 1,9 = 3 + 11,4</td><td>14,40 %</td></tr><tr><td>B</td><td>3 + 6 · 0,78 = 3 + 4,68</td><td>7,68 %</td></tr><tr><td>C</td><td>3 + 6 · 1,6 = 3 + 9,6</td><td>12,60 %</td></tr><tr><td>D</td><td>3 + 6 · 1,02 = 3 + 6,12</td><td>9,12 %</td></tr><tr><td>E</td><td>3 + 6 · 0,61 = 3 + 3,66</td><td>6,66 %</td></tr><tr><td>F</td><td>3 + 6 · 1,1 = 3 + 6,6</td><td>9,60 %</td></tr></table>` },
    { t: R`Alfa = skutečná − rovnovážná výnosnost`,
      proc: R`Alfa ukazuje, jestli akcie vynáší víc (nad SML), nebo míň (pod SML), než by podle svého rizika měla.`,
      vzorec: R`$$\alpha_i=r_i-E(r_i)$$`,
      vypocet: R`A: 14 − 14,40 = −0,40 · B: 3 − 7,68 = −4,68 · C: 10 − 12,60 = −2,60 · D: 6 − 9,12 = −3,12 · E: 2 − 6,66 = −4,66 · F: 7 − 9,60 = −2,60` },
    { t: R`Doporučení`,
      proc: R`α &gt; 0 → nad SML → podhodnocená → koupit. α &lt; 0 → pod SML → nadhodnocená → prodat. α ≈ 0 → držet.`,
      vysl: R`Všechny alfy jsou záporné → všechny akcie prodat (nejhorší B a E).` }
  ],
  pozor: R`Pořadí v alfě: skutečná MINUS rovnovážná. Když to otočíš, vyjde opačné znaménko a opačné doporučení.`
};

/* ===================== ÚKOL 6 ===================== */
P['6-1'] = {
  dano: [
    [R`\(r_A\)`, R`8, 4, 7, 5, 8, 9 %`, R`výnosy investice A v 6 letech`],
    [R`\(r_B\)`, R`5, 6, 12, 3, 10, 6 %`, R`výnosy investice B`],
    [R`\(T\)`, R`6`, R`počet období`]
  ],
  hledame: R`očekávanou výnosnost \(E\) (průměr) a riziko \(\sigma\) (směrodatná odchylka) obou investic.`,
  kroky: [
    { t: R`Očekávaná výnosnost A = průměr`,
      vzorec: R`$$E(r)=\frac{\sum r_t}{T}$$`,
      vypocet: R`$$E(A)=\frac{8+4+7+5+8+9}{6}=\frac{41}{6}=6{,}8333\,\%$$` },
    { t: R`Odchylky A od průměru a jejich druhé mocniny`,
      vypocet: R`<table class="t"><tr><th>Rok</th><th>\(r_A\)</th><th>\(r_A-6{,}8333\)</th><th>na druhou</th></tr><tr><td>1</td><td>8</td><td>1,1667</td><td>1,3611</td></tr><tr><td>2</td><td>4</td><td>−2,8333</td><td>8,0278</td></tr><tr><td>3</td><td>7</td><td>0,1667</td><td>0,0278</td></tr><tr><td>4</td><td>5</td><td>−1,8333</td><td>3,3611</td></tr><tr><td>5</td><td>8</td><td>1,1667</td><td>1,3611</td></tr><tr><td>6</td><td>9</td><td>2,1667</td><td>4,6944</td></tr><tr><th>Σ</th><th></th><th></th><th>18,8333</th></tr></table>` },
    { t: R`Rozptyl a riziko A`,
      vzorec: R`$$\sigma^2=\frac{\sum(r_t-E)^2}{T}\qquad\sigma=\sqrt{\sigma^2}$$`,
      vypocet: R`$$\sigma_A^2=\frac{18{,}8333}{6}=3{,}1389\qquad\sigma_A=\sqrt{3{,}1389}=1{,}77\,\%$$` },
    { t: R`Totéž pro B`,
      vypocet: R`$$E(B)=\frac{5+6+12+3+10+6}{6}=\frac{42}{6}=7{,}00\,\%$$ Odchylky: −2, −1, 5, −4, 3, −1 → čtverce 4, 1, 25, 16, 9, 1 → Σ = 56 $$\sigma_B^2=\frac{56}{6}=9{,}3333\qquad\sigma_B=\sqrt{9{,}3333}=3{,}06\,\%$$` }
  ],
  kalk: R`Na kalkulačce v režimu STAT zadej data a vezmi σx (populační, dělí se T = 6), ne sx (dělí T − 1).`,
  pozor: R`Na semináři se dělí počtem období T = 6 (ne T − 1 = 5).`
};

P['6-2'] = {
  dano: [
    [R`P1`, R`200 Kč do A + 200 Kč do B`, R`celkem 400 Kč`],
    [R`P2`, R`100 Kč do A + 300 Kč do B`, R`celkem 400 Kč`],
    [R`\(r_A, r_B\)`, R`viz tabulka v 6.1`, R`výnosy po letech`]
  ],
  hledame: R`výnos portfolia P1 a P2 v každém roce.`,
  kroky: [
    { t: R`Váhy = kolik z celku je v dané investici`,
      vzorec: R`$$w_A=\frac{\text{vklad do A}}{\text{celkový vklad}}\qquad w_B=1-w_A$$`,
      vypocet: R`P1: \(w_A=\frac{200}{400}=0{,}5\), \(w_B=0{,}5\) · P2: \(w_A=\frac{100}{400}=0{,}25\), \(w_B=0{,}75\)` },
    { t: R`Výnos portfolia v roce = vážený průměr výnosů`,
      vzorec: R`$$r_P=w_A\cdot r_A+w_B\cdot r_B$$`,
      dosad: R`Rok 1: $$r_1=0{,}5\cdot8+0{,}5\cdot5=4+2{,}5=6{,}5\,\%\qquad r_2=0{,}25\cdot8+0{,}75\cdot5=2+3{,}75=5{,}75\,\%$$` },
    { t: R`Všechny roky`,
      vypocet: R`<table class="t"><tr><th>Rok</th><th>\(r_A\)</th><th>\(r_B\)</th><th>\(r_1=0{,}5r_A+0{,}5r_B\)</th><th>\(r_2=0{,}25r_A+0{,}75r_B\)</th></tr><tr><td>1</td><td>8</td><td>5</td><td>4 + 2,5 = 6,5</td><td>2 + 3,75 = 5,75</td></tr><tr><td>2</td><td>4</td><td>6</td><td>2 + 3 = 5</td><td>1 + 4,5 = 5,5</td></tr><tr><td>3</td><td>7</td><td>12</td><td>3,5 + 6 = 9,5</td><td>1,75 + 9 = 10,75</td></tr><tr><td>4</td><td>5</td><td>3</td><td>2,5 + 1,5 = 4</td><td>1,25 + 2,25 = 3,5</td></tr><tr><td>5</td><td>8</td><td>10</td><td>4 + 5 = 9</td><td>2 + 7,5 = 9,5</td></tr><tr><td>6</td><td>9</td><td>6</td><td>4,5 + 3 = 7,5</td><td>2,25 + 4,5 = 6,75</td></tr></table>` }
  ],
  pozor: R`Váhy se počítají z korun, ne z počtu investic. P2 není půl na půl.`
};

P['6-3'] = {
  dano: [
    [R`\(r_1\)`, R`6,5; 5; 9,5; 4; 9; 7,5 %`, R`výnosy P1 z 6.2`],
    [R`\(r_2\)`, R`5,75; 5,5; 10,75; 3,5; 9,5; 6,75 %`, R`výnosy P2 z 6.2`]
  ],
  hledame: R`\(E(P_1), \sigma_1, E(P_2), \sigma_2\).`,
  kroky: [
    { t: R`Očekávaný výnos P1`,
      vypocet: R`$$E(P_1)=\frac{6{,}5+5+9{,}5+4+9+7{,}5}{6}=\frac{41{,}5}{6}=6{,}9167\,\%$$`,
      vysl: R`Kontrola: \(0{,}5\cdot6{,}8333+0{,}5\cdot7=6{,}9167\) ✓ (výnos portfolia = vážený průměr výnosů)` },
    { t: R`Riziko P1`,
      vypocet: R`Odchylky: −0,4167; −1,9167; 2,5833; −2,9167; 2,0833; 0,5833 → čtverce 0,1736; 3,6736; 6,6736; 8,5069; 4,3403; 0,3403 → Σ = 23,7083 $$\sigma_1^2=\frac{23{,}7083}{6}=3{,}9514\qquad\sigma_1=\sqrt{3{,}9514}=1{,}99\,\%$$` },
    { t: R`Očekávaný výnos P2`,
      vypocet: R`$$E(P_2)=\frac{5{,}75+5{,}5+10{,}75+3{,}5+9{,}5+6{,}75}{6}=\frac{41{,}75}{6}=6{,}9583\,\%$$` },
    { t: R`Riziko P2`,
      vypocet: R`Odchylky: −1,2083; −1,4583; 3,7917; −3,4583; 2,5417; −0,2083 → čtverce 1,4601; 2,1267; 14,3767; 11,9601; 6,4601; 0,0434 → Σ = 36,4271 $$\sigma_2^2=\frac{36{,}4271}{6}=6{,}0712\qquad\sigma_2=\sqrt{6{,}0712}=2{,}46\,\%$$` }
  ],
  pozor: R`Riziko portfolia NENÍ vážený průměr rizik (to by bylo 2,42 % u P1, ale vyšlo 1,99 %) – rozdíl je efekt diverzifikace.`
};

P['6-4'] = {
  dano: [
    [R`vlastní hotovost`, R`200 Kč`, R`peníze investora`],
    [R`půjčka`, R`1 000 Kč`, R`vypůjčeno bez rizika`],
    [R`\(u\)`, R`6 % p. a.`, R`úrok z půjčky (bezriziková sazba, σ = 0)`],
    [R`\(E(P_1), \sigma_1\)`, R`6,9167 %; 1,9878 %`, R`z př. 6.3 (nezaokrouhlené)`]
  ],
  hledame: R`výnos \(E(P)\) a riziko \(\sigma_P\) celého portfolia (P1 koupené z vlastních i půjčených peněz).`,
  kroky: [
    { t: R`Kolik se vloží do P1`,
      vypocet: R`$$200+1\,000=1\,200\text{ Kč}$$` },
    { t: R`Váha P1 vzhledem k vlastním penězům`,
      proc: R`Vše se vztahuje k tomu, co investor opravdu vložil (200 Kč). Do P1 dal 6× víc, než má.`,
      vzorec: R`$$w=\frac{\text{vloženo do }P_1}{\text{vlastní hotovost}}$$`,
      vypocet: R`$$w=\frac{1\,200}{200}=6\qquad1-w=1-6=-5$$`,
      vysl: R`Váha −5 u bezrizikového aktiva = půjčka (dluh 5× vlastní kapitál).` },
    { t: R`Očekávaný výnos`,
      vzorec: R`$$E(P)=w\cdot E(P_1)+(1-w)\cdot u$$`,
      dosad: R`$$E(P)=6\cdot6{,}9167+(-5)\cdot6$$`,
      vypocet: R`$$E(P)=41{,}50-30=11{,}50\,\%$$`,
      vysl: R`Z P1 vydělá 41,5 % vlastních peněz, 30 % zaplatí na úrocích.` },
    { t: R`Riziko`,
      proc: R`Půjčka má nulové riziko, takže riziko je jen z P1 – ale 6× zesílené.`,
      vzorec: R`$$\sigma_P=w\cdot\sigma_1$$`,
      vypocet: R`$$\sigma_P=6\cdot1{,}9878=11{,}93\,\%$$` }
  ],
  pozor: R`Váha se počítá k vlastním 200 Kč, ne k 1 200 Kč. A použij nezaokrouhlené hodnoty z 6.3 (s 6,92 a 1,99 vyjde 11,52 % a 11,94 %).`
};

P['6-5'] = {
  dano: [
    [R`A`, R`E 6,83 %; σ 1,77 %`, R`z 6.1`],
    [R`B`, R`E 7,00 %; σ 3,06 %`, R`z 6.1`],
    [R`P1`, R`E 6,92 %; σ 1,99 %`, R`z 6.3`],
    [R`P2`, R`E 6,96 %; σ 2,46 %`, R`z 6.3`],
    [R`P`, R`E 11,50 %; σ 11,93 %`, R`z 6.4`],
    [R`\(u\)`, R`6 %`, R`bezriziková sazba`]
  ],
  hledame: R`které investice jsou efektivní a která je optimální vzhledem k bezrizikové sazbě 6 %.`,
  kroky: [
    { t: R`Seřadit investice podle rizika`,
      vypocet: R`A (1,77) → P1 (1,99) → P2 (2,46) → B (3,06) → P (11,93). Výnosy ve stejném pořadí: 6,83 → 6,92 → 6,96 → 7,00 → 11,50.` },
    { t: R`Efektivnost = nikdo ji nepřekoná`,
      proc: R`Investice je neefektivní, když existuje jiná s vyšším (aspoň stejným) výnosem a nižším (aspoň stejným) rizikem. Tady s rizikem vždy roste i výnos.`,
      vysl: R`Žádná není jinou překonána → efektivní jsou všechny.` },
    { t: R`Optimální = nejstrmější přímka z bodu [0; 6 %]`,
      proc: R`Kolik výnosu navíc nad 6 % dostanu za 1 % rizika (Sharpeho poměr).`,
      vzorec: R`$$\frac{E-u}{\sigma}\to\max$$`,
      vypocet: R`A: \(\frac{6{,}83-6}{1{,}77}=0{,}470\) · P1: \(\frac{6{,}92-6}{1{,}99}=0{,}461\) · P2: \(\frac{6{,}96-6}{2{,}46}=0{,}389\) · B: \(\frac{7-6}{3{,}06}=0{,}327\) · P: \(\frac{11{,}5-6}{11{,}93}=0{,}461\)`,
      vysl: R`Nejvyšší poměr má A (0,470) → optimální portfolio je A.` }
  ],
  pozor: R`P má stejný poměr jako P1 – je to P1 s pákou, leží na stejné přímce.`
};

/* ===================== ÚKOL 7 ===================== */
P['7-1'] = {
  dano: [
    [R`\(P_0\)`, R`2 567 Kč`, R`nákupní cena 1. 5. 2018`],
    [R`\(P_1\)`, R`2 831 Kč`, R`prodejní cena „31. 9.“ = konec září`],
    [R`\(D\)`, R`98 Kč`, R`dividenda za rok 2017 – jen pokud na ni investor má nárok`],
    [R`rozhodný den`, R`a) 15. 4. · b) 1. 5.`, R`kdo je k tomuto dni majitel, dostane dividendu`]
  ],
  hledame: R`celkovou výnosnost operace a roční výnosnost (p. a.) v obou variantách.`,
  kroky: [
    { t: R`Doba držby`,
      vypocet: R`1. 5. → 30. 9. = květen, červen, červenec, srpen, září = 5 měsíců` },
    { t: R`Kapitálový (kurzový) zisk`,
      vypocet: R`$$P_1-P_0=2\,831-2\,567=264\text{ Kč}$$` },
    { t: R`a) Má nárok na dividendu?`,
      proc: R`Rozhodný den 15. 4. je PŘED nákupem 1. 5. → k 15. 4. byl majitelem někdo jiný.`,
      vysl: R`D = 0 Kč` },
    { t: R`a) Celková a roční výnosnost`,
      vzorec: R`$$r=\frac{P_1-P_0+D}{P_0}\qquad r_{p.a.}=r\cdot\frac{12}{\text{měsíců}}$$`,
      vypocet: R`$$r=\frac{264+0}{2\,567}=0{,}1028=10{,}28\,\%\qquad r_{p.a.}=10{,}28\cdot\frac{12}{5}=10{,}28\cdot2{,}4=24{,}68\,\%$$` },
    { t: R`b) Má nárok na dividendu?`,
      proc: R`Rozhodný den 1. 5. = den nákupu → v ten den už je majitelem.`,
      vysl: R`D = 98 Kč` },
    { t: R`b) Celková a roční výnosnost`,
      vypocet: R`$$r=\frac{264+98}{2\,567}=\frac{362}{2\,567}=0{,}1410=14{,}10\,\%\qquad r_{p.a.}=14{,}10\cdot2{,}4=33{,}84\,\%$$` }
  ],
  kalk: R`(2 831 − 2 567 + 98) ÷ 2 567 × 12 ÷ 5 = 0,3384.`,
  pozor: R`Roční výnosnost = přepočet na 12 měsíců (×12/5), ne dělení 5. Výnosnost dělíš vždy nákupní cenou \(P_0\).`
};

P['7-2'] = {
  dano: [
    [R`čistý zisk`, R`15 819 000 000 Kč`, R`„15 819 milionů Kč“ – převeď na Kč`],
    [R`DPS`, R`60,42 Kč`, R`„dividendy na 1 akcii“`],
    [R`počet akcií`, R`190 049 260 ks`, R`emitované akcie`]
  ],
  hledame: R`EPS, DPS, výplatní poměr \(p\) a míru zadržení \(b\).`,
  kroky: [
    { t: R`EPS – zisk na jednu akcii`,
      vzorec: R`$$EPS=\frac{\text{čistý zisk}}{\text{počet akcií}}$$`,
      dosad: R`$$EPS=\frac{15\,819\,000\,000}{190\,049\,260}$$`,
      vypocet: R`$$EPS=83{,}24\text{ Kč}$$` },
    { t: R`DPS – dividenda na akcii`,
      proc: R`Je přímo v zadání. Kontrola: celkem vyplacené dividendy ÷ počet akcií.`,
      vypocet: R`$$\sum D=60{,}42\cdot190\,049\,260=11\,482\,776\,289\text{ Kč}\qquad DPS=\frac{11\,482\,776\,289}{190\,049\,260}=60{,}42\text{ Kč}$$` },
    { t: R`Výplatní poměr p`,
      proc: R`Jakou část zisku firma vyplatila akcionářům.`,
      vzorec: R`$$p=\frac{DPS}{EPS}$$`,
      vypocet: R`$$p=\frac{60{,}42}{83{,}24}=0{,}7259=72{,}59\,\%$$` },
    { t: R`Míra zadržení b`,
      proc: R`Zbytek zisku zůstal ve firmě.`,
      vzorec: R`$$b=1-p$$`,
      vypocet: R`$$b=1-0{,}7259=0{,}2741=27{,}41\,\%$$` }
  ],
  pozor: R`Miliony převeď: 15 819 mil. = 15 819 000 000. A p + b = 100 %.`
};

})(window.PODROBNE);
