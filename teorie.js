// Teorie k přednáškám NE_FIP 1–5 (zima 2026) – data pro režim Teorie: výklad, kartičky, kvíz.
// Zdroj: přednášky 1P–5P v IS (Hašková). Typ otázky: multi = může být více správných, single = jedna, tf = pravda/nepravda (spravne:[0] = pravda, [1] = nepravda).
const T = String.raw;
window.TEORIE = [
/* ===================================================================== 1 */
{
 id:'p1', title:'1 · Analýza citlivosti, akcie a jejich ocenění',
 desc:'Korelace × kauzalita, analýza citlivosti, cenné papíry a akcie (ZOK), hodnoty a ukazatele akcií, technická / fundamentální / psychologická analýza, teorie efektivních trhů.',
 vyklad:[
  {nadpis:'Korelace × kauzalita', html:T`<ul>
   <li><b>Korelace</b> = vztah mezi dvěma procesy/veličinami: přímá závislost (blíž k <b>+1</b>), nepřímá závislost (blíž k <b>−1</b>).</li>
   <li><b>Kauzalita</b> = příčinná souvislost mezi příčinou a následkem.</li>
   <li><b>Korelace neimplikuje kauzalitu</b> – to, že se dvě veličiny pohybují spolu, neznamená, že jedna způsobuje druhou.</li>
   <li><b>Příčina</b> automaticky vyvolá jev (důsledek); <b>důvod</b> může vést k vědomé činnosti člověka. („Pád ze skály byl příčinou, ne důvodem smrti.“)</li>
   <li><b>Příčina nutná</b>: bez A nemůže nastat B (z výskytu B plyne A). <b>Příčina dostačující</b>: A stačí, aby nastalo B, ale B mohly způsobit i jiné příčiny.</li></ul>`},
  {nadpis:'Analýza citlivosti (AC)', klic:true, html:T`<p>Procedura používaná při <b>plánování a předpovídání</b>: zjišťuje, jak se změní výsledek modelu, když se mění jeho vstupní veličiny. Identifikuje <b>kritické (klíčové) veličiny</b> a riziko plánu; je důležitá pro <b>řízení investic</b>, výsledkem může být přehodnocení investičního záměru.</p>
   <ul><li><b>Nejcitlivější je parametr, jehož nejmenší změna vede k nejvýraznější změně hospodářského výsledku.</b></li>
   <li>Pokles zisku = růst nákladů (FC nebo v) nebo pokles objemu či ceny; růst zisku naopak.</li>
   <li>Citlivost X na Y = jak se změní X při změně Y za <b>ceteris paribus</b>; nejčastěji relativně – o kolik % se změní X při změně Y o 1 % (Scholleová).</li>
   <li>Sledované parametry modelu bodu zvratu: objem prodeje Q, cena p, jednotkové variabilní náklady v, fixní náklady FC.</li></ul>
   $$Q_0=\frac{FC}{p-v}\qquad Q_1=\frac{FC+Z}{p-v}\qquad TR_1=\frac{FC+Z}{(p-v)/p}$$`},
  {nadpis:'Techniky analýzy citlivosti', html:T`<ul>
   <li><b>Analytická</b> – přesně definovaný vzorec, citlivost = parciální derivace; přesná, ale matematicky náročná.</li>
   <li><b>Numerická</b> – parametry se postupně mění kolem střední hodnoty a zaznamenávají se dopady; výstupem tabulky a grafy (<b>uzlový graf, tornádo diagram</b>).</li>
   <li><b>Simulační</b> – nejnáročnější, simulační software, numerický souhrnný výstup.</li></ul>`},
  {nadpis:'Cenné papíry a akcie – právo', klic:true, html:T`<ul>
   <li><b>Cenný papír</b> (§ 514 NOZ): listina, se kterou je právo spojeno tak, že je po vydání nelze bez této listiny uplatnit ani převést. Regulace: dříve Komise pro cenné papíry (do 2006), dnes <b>ČNB</b>.</li>
   <li><b>Akcie</b> (§ 256 ZOK): <b>majetkový</b> cenný papír / zaknihovaný CP, představuje poměrný podíl na <b>základním kapitálu a.s.</b>; práva akcionáře podílet se na <b>řízení, zisku a likvidačním zůstatku</b>.</li>
   <li>Podoba: <b>listinná / zaknihovaná</b>; forma: <b>na jméno</b> (a.s. vede seznam akcionářů) / <b>na majitele</b>.</li>
   <li><b>Akcie na jméno</b> se převádí <b>rubopisem</b>; stanovy mohou převoditelnost omezit, ne vyloučit. Akcionářem je ten, kdo je zapsán v seznamu akcionářů.</li>
   <li><b>Akcie na majitele</b> je neomezeně převoditelná a smí být jen <b>zaknihovaná nebo imobilizovaná</b>; práva vykonává ten, kdo je v evidenci k <b>rozhodnému dni</b>.</li>
   <li><b>Emisní kurs</b> nesmí být nižší než jmenovitá hodnota; je-li vyšší, vzniká <b>emisní ážio</b> (= emisní kurs − jmenovitá hodnota).</li>
   <li><b>Dividenda</b> není právní pojem – správně „podíl na zisku akcionáře“ (§ 348 ZOK), schvaluje ji <b>valná hromada</b>; vyplácí se výhradně <b>bezhotovostně</b> na účet (§ 349 ZOK).</li>
   <li>Emise nad 1 mil. € nebo nabídka pro víc než 150 osob v jednom státě podléhá schválení ČNB. Každá nová emise vede k <b>ředění podílu</b> původních akcionářů; první veřejná nabídka = <b>IPO</b>.</li></ul>`},
  {nadpis:'Druhy akcií', klic:true, html:T`<ul>
   <li>Dle práv: <b>kmenové</b> (není právní pojem, základní typ, všechna práva), <b>prioritní</b> (přednostní právo na zisk / likvidační zůstatek, obvykle <b>bez hlasovacího práva</b>, souhrn jmenovitých hodnot max. <b>90 % ZK</b>), akcie se zvláštními právy (např. zlaté akcie).</li>
   <li><b>Kusové</b> (§ 257) – nemají jmenovitou hodnotu, představují stejné podíly na ZK.</li>
   <li><b>Zaměstnanecké</b> (§ 258) – za zvýhodněných podmínek, zaměstnanci nemusí splatit celý emisní kurs (rozdíl kryje společnost z vlastních zdrojů); platí i pro důchodce.</li>
   <li><b>Hromadné</b> (§ 262) – nahrazují více akcií, uvádí kolik a jakého druhu.</li>
   <li>Dle tržní ceny: těžká (vysoký kurz), střední, lehká; dle termínu emise: stará / nová.</li>
   <li>Jiné CP: zatímní list (upisovatel nesplatil celý emisní kurs), kmenový list (s.r.o., jen na řad, nelze veřejně nabízet), podílový list (podíl v podílovém fondu, fond není PO).</li>
   <li><b>Kvalifikovaný akcionář</b> (§ 365) dle slidů: ZK > 100 mil. → 3 %, ZK < 100 mil. → 5 %, ZK > 500 mil. → 1 %; může navrhnout svolání VH, body jednání a podat akcionářskou žalobu.</li></ul>`},
  {nadpis:'Hodnoty akcie', html:T`<ul>
   <li><b>Nominální (jmenovitá)</b> – uvedená na akcii, podíl na ZK (ZK / počet akcií); není to tržní hodnota.</li>
   <li><b>Účetní (bilanční)</b> = (vlastní kapitál − prioritní akcie) / počet kmenových akcií.</li>
   <li><b>Likvidační</b> = likvidační hodnota společnosti / počet akcií.</li>
   <li><b>Emisní cena</b> (emisní kurs, subskripční cena) – cena na primárním trhu.</li>
   <li><b>Tržní cena (kurz)</b> – rovnovážná cena na kapitálovém trhu.</li>
   <li><b>Vnitřní hodnota</b> – teoretická („správná“) hodnota z fundamentální analýzy.</li>
   <li>Výnos z akcie = <b>dividendy + kurzový zisk/ztráta</b>, nelze ho s jistotou předvídat. Dividendový výnos bývá nižší než % z nominálu, protože tržní cena bývá nad nominální hodnotou.</li></ul>`},
  {nadpis:'Ukazatele hodnoty a ceny', klic:true, html:T`$$DPS=\frac{\sum D}{\text{počet akcií}}\qquad EPS=\frac{\text{čistý zisk}}{\text{počet akcií}}$$
   $$\text{dividendové krytí}=\frac{EPS}{DPS}\qquad p=\frac{DPS}{EPS}=1-b\qquad b=1-p\ (\text{aktivační poměr, míra zadrženého zisku})$$
   $$P/E=\frac{\text{tržní cena}}{EPS}\qquad PEG=\frac{P/E}{g},\ g=ROE\cdot b\qquad P/S=\frac{\text{cena}}{\text{obrat na akcii}}\qquad P/B=\frac{\text{cena}}{\text{účetní hodnota}}$$
   $$\text{dividendový výnos}=\frac{DPS}{\text{tržní cena}}\cdot100\,\%\qquad \text{tržní kapitalizace}=\text{cena}\cdot\text{počet akcií}$$
   <ul><li><b>P/E</b>: doporučuje se nakupovat akcie s P/E <b>menším než 15</b>; nízké P/E = levná, vysoké = předražená; <b>nelze použít, když a.s. vykáže ztrátu</b>.</li>
   <li>Emisní cena > nominál = <b>ážio</b>, emisní cena < nominál = <b>disážio</b>.</li></ul>`},
  {nadpis:'Technická × fundamentální × psychologická analýza', klic:true, html:T`<ul>
   <li><b>Technická</b> – jen data vytvořená trhem (historické ceny, objemy, grafy, indikátory), předpokládá vývoj kurzů v <b>trendech</b>; odpovídá na otázku <b>KDY akcii koupit?</b></li>
   <li><b>Fundamentální</b> – každá akcie má <b>vnitřní hodnotu</b> z hospodaření firmy, kurz kolem ní kolísá; zkoumá makro, odvětví, firmu; odpovídá na otázku <b>JAKOU akcii koupit?</b> VH > tržní cena → <b>podhodnocená → koupit</b>; VH < tržní cena → <b>nadhodnocená → prodat</b>; rovnost → správně oceněná.</li>
   <li><b>Psychologická</b> – emoce, nálady a iracionální chování investorů (sentiment, davové chování). Výhoda: vysvětlí anomálie, doplňuje ostatní analýzy; nevýhoda: těžko měřitelná, subjektivní.</li></ul>`},
  {nadpis:'Modely fundamentální analýzy', klic:true, html:T`<p><b>Dividendové diskontní modely (DDM)</b> – vnitřní hodnota = současná hodnota všech budoucích příjmů (dividend); pro firmy se stabilními dividendami (např. McDonald's). Varianty: nulový, jednostupňový, dvoustupňový, vícestupňový růst.</p>
   $$P_0=\sum_{i=1}^{\infty}\frac{D_i}{(1+r)^i}\qquad P_0=\frac{D}{r}\ (\text{nulový růst})\qquad P_0=\frac{D_1}{r-g}\ (\text{Gordon})$$
   $$g=ROE\cdot b\qquad P_0=\frac{E_1}{r}+PVGO$$
   <p>Cena akcie roste jen tehdy, když výnos z investic (ROE) je <b>větší</b> než míra kapitalizace r. <b>Ziskové modely</b> pracují s čistým ziskem a časovou hodnotou peněz, na kratší horizont (do 3 let), vychází z <b>P/E</b>.</p>`},
  {nadpis:'Behaviorální finance a sentiment', html:T`<ul>
   <li>Propojují ekonomii a psychologii – investoři se nechovají vždy racionálně. Osobnosti: <b>Kahneman</b> (Nobelova cena, teorie prospektu), <b>Tversky</b> (kognitivní zkreslení, heuristiky), <b>Thaler</b> (Nobelova cena, nudge, mentální účetnictví).</li>
   <li>Hlavní emoce: <b>chamtivost</b> (růst cen, spekulace, bubliny) a <b>strach</b> (pokles, panické výprodeje, krize).</li>
   <li><b>Bullish</b> = optimismus (očekávají růst), <b>bearish</b> = pesimismus (očekávají pokles).</li>
   <li>Cyklus: optimismus → nadšení → <b>euforie</b> (bod maximálního rizika) → … → panika.</li>
   <li><b>Averze ke ztrátě</b>: ztráta bolí asi <b>2× víc</b> než stejně velký zisk → investoři drží ztrátové pozice a příliš brzy prodávají ziskové.</li>
   <li><b>Davové chování</b> (herd behavior): kopírování ostatních → bubliny a panické výprodeje.</li>
   <li>Indikátory: <b>VIX</b> („index strachu“, očekávaná volatilita S&amp;P 500 na 30 dní), <b>put/call ratio</b>, <b>Fear &amp; Greed Index</b> (CNN), průzkumy investorů (AAII).</li>
   <li>Bubliny: dot-com (1995–2001), hypoteční krize 2008, kryptoměny (2017, 2021).</li></ul>`},
  {nadpis:'Teorie efektivních trhů', klic:true, html:T`<p>Kurzy ovlivňují jen objektivní informace; tržní cena = objektivní hodnota, akcie jsou vždy správně oceněné a nelze najít pod-/nadhodnocené tituly – analýzou nelze trh překonat.</p>
   <ul><li><b>Slabá forma</b> – kurz obsahuje všechny <b>historické</b> informace → <b>technická analýza je k ničemu</b>.</li>
   <li><b>Středně silná forma</b> – historické + <b>aktuální veřejné</b> informace → k ničemu je technická i <b>fundamentální</b> analýza (teorie vnitřní hodnoty).</li>
   <li><b>Silná forma</b> – kurz obsahuje <b>všechny</b> informace včetně neveřejných (insider) → nepomůže nic.</li>
   <li><b>Paradox efektivního trhu</b>: kdyby všichni věřili v efektivní trh, nedělali by analýzy a trh by efektivní přestal být.</li></ul>`}
 ],
 pojmy:[
  {pojem:'Korelace', definice:'Vztah mezi dvěma procesy/veličinami; +1 přímá, −1 nepřímá závislost. Neimplikuje kauzalitu.'},
  {pojem:'Kauzalita', definice:'Příčinná souvislost mezi příčinou a následkem.'},
  {pojem:'Příčina nutná × dostačující', definice:'Nutná: bez A nemůže nastat B. Dostačující: A stačí k B, ale B mohlo vzniknout i jinak.'},
  {pojem:'Analýza citlivosti', definice:'Zjišťuje, jak se změní výsledek modelu při změně vstupních veličin; hledá kritické veličiny a riziko plánu.'},
  {pojem:'Nejcitlivější parametr', definice:'Ten, jehož nejmenší změna vyvolá nejvýraznější změnu hospodářského výsledku.'},
  {pojem:'Tornádo diagram', definice:'Grafický výstup numerické techniky analýzy citlivosti (spolu s uzlovým grafem).'},
  {pojem:'Cenný papír (§ 514 NOZ)', definice:'Listina, se kterou je právo spojeno tak, že je bez ní nelze uplatnit ani převést.'},
  {pojem:'Akcie', definice:'Majetkový CP – poměrný podíl na ZK a.s.; práva na řízení, zisk a likvidační zůstatek.'},
  {pojem:'Emisní ážio', definice:'Emisní kurs − jmenovitá hodnota (když je emisní kurs vyšší). Opak = disážio.'},
  {pojem:'Prioritní akcie', definice:'Přednostní právo na zisk / likvidační zůstatek, obvykle bez hlasovacího práva, max. 90 % ZK.'},
  {pojem:'Kusová akcie', definice:'Akcie bez jmenovité hodnoty; všechny představují stejný podíl na ZK.'},
  {pojem:'Akcie na jméno', definice:'Převádí se rubopisem, a.s. vede seznam akcionářů; převoditelnost lze omezit, ne vyloučit.'},
  {pojem:'Akcie na majitele', definice:'Neomezeně převoditelná, jen zaknihovaná nebo imobilizovaná.'},
  {pojem:'Dividenda', definice:'Správně „podíl na zisku“ (§ 348 ZOK), schvaluje valná hromada, vyplácí se bezhotovostně.'},
  {pojem:'IPO', definice:'Initial Public Offering – první veřejná nabídka akcií.'},
  {pojem:'Účetní hodnota akcie', definice:'(Vlastní kapitál − prioritní akcie) / počet kmenových akcií.'},
  {pojem:'EPS', definice:'Čistý zisk na akcii = zisk / počet akcií.'},
  {pojem:'DPS', definice:'Dividenda na akcii = suma dividend / počet akcií.'},
  {pojem:'Výplatní poměr p', definice:'DPS / EPS = suma dividend / zisk = 1 − b.'},
  {pojem:'Aktivační poměr b', definice:'Míra zadrženého zisku = 1 − DPS/EPS.'},
  {pojem:'Dividendové krytí', definice:'EPS / DPS = zisk / suma dividend.'},
  {pojem:'P/E', definice:'Tržní cena / EPS; doporučeno < 15; nelze při ztrátě.'},
  {pojem:'PEG', definice:T`(P/E) / g, kde \(g=ROE\cdot b\).`},
  {pojem:'Dividendový výnos', definice:'DPS / tržní cena · 100 %.'},
  {pojem:'Tržní kapitalizace', definice:'Tržní cena akcie · počet akcií.'},
  {pojem:'Technická analýza', definice:'Jen tržní data a grafy, trendy; odpovídá KDY koupit.'},
  {pojem:'Fundamentální analýza', definice:'Hledá vnitřní hodnotu; odpovídá JAKOU akcii koupit.'},
  {pojem:'Vnitřní hodnota > tržní cena', definice:'Akcie je podhodnocená → koupit.'},
  {pojem:'PVGO', definice:T`Současná hodnota růstových příležitostí: \(PVGO=P_0-\frac{E_1}{r}\); kladná, když ROE > r.`},
  {pojem:'Averze ke ztrátě', definice:'Ztráta bolí cca 2× víc než stejný zisk (Kahneman, teorie prospektu).'},
  {pojem:'VIX', definice:'„Index strachu“ – očekávaná volatilita S&P 500 na 30 dní.'},
  {pojem:'Bullish × bearish', definice:'Bullish = optimismus, čekají růst; bearish = pesimismus, čekají pokles.'},
  {pojem:'Slabá forma efektivnosti', definice:'Kurz obsahuje historická data → technická analýza nepomůže.'},
  {pojem:'Středně silná forma', definice:'Historická + veřejné informace → nepomůže technická ani fundamentální analýza.'},
  {pojem:'Silná forma', definice:'Kurz obsahuje všechny informace včetně neveřejných.'},
  {pojem:'Paradox efektivního trhu', definice:'Kdyby všichni věřili v efektivní trh, nedělali by analýzy a trh by efektivní přestal být.'}
 ],
 otazky:[
  {typ:'multi', otazka:'Které parametry se sledují v analýze citlivosti modelu bodu zvratu?', moznosti:['Objem prodeje Q','Cena p','Jednotkové variabilní náklady v','Fixní náklady FC','Beta koeficient'], spravne:[0,1,2,3], vysvetleni:'Q, p, v a FC; beta s bodem zvratu nesouvisí.'},
  {typ:'single', otazka:'Nejcitlivější parametr v analýze citlivosti je ten…', moznosti:['jehož nejmenší změna vede k nejvýraznější změně HV','který má největší absolutní hodnotu','jehož změna nejvíc zvýší tržby','který se mění nejčastěji'], spravne:[0], vysvetleni:'Definice z přednášky: nejmenší změna → nejvýraznější změna hospodářského výsledku.'},
  {typ:'multi', otazka:'Které techniky analýzy citlivosti uvádí přednáška?', moznosti:['Analytická','Numerická','Simulační','Intuitivní','Grafická diskontní'], spravne:[0,1,2], vysvetleni:'Analytická (parciální derivace), numerická (tornádo, uzlový graf), simulační (software).'},
  {typ:'single', otazka:'Výstupem numerické techniky analýzy citlivosti bývá například…', moznosti:['tornádo diagram','binomický strom','přímka SML','korelační matice'], spravne:[0], vysvetleni:'Numerická technika: tabulky a grafy – uzlový graf, tornádo diagram.'},
  {typ:'tf', otazka:'Korelace dvou veličin dokazuje, že jedna je příčinou druhé.', spravne:[1], vysvetleni:'Korelace neimplikuje kauzalitu.'},
  {typ:'single', otazka:'„Bez výskytu A nemůže nastat B.“ Jde o příčinu…', moznosti:['nutnou','dostačující','náhodnou','důvodovou'], spravne:[0], vysvetleni:'Příčina nutná: bez A nenastane B, z výskytu B tedy plyne A.'},
  {typ:'multi', otazka:'Která práva jsou spojena s akcií (§ 256 ZOK)?', moznosti:['Podílet se na řízení společnosti','Podílet se na zisku','Podílet se na likvidačním zůstatku','Pevný úrok z jmenovité hodnoty','Splacení jmenovité hodnoty k datu splatnosti'], spravne:[0,1,2], vysvetleni:'Úrok a splacení jmenovité hodnoty patří k dluhopisu, ne k akcii.'},
  {typ:'multi', otazka:'Co platí o akcii na majitele?', moznosti:['Je neomezeně převoditelná','Může být jen zaknihovaná nebo imobilizovaná','Převádí se rubopisem','Společnost vede seznam jejích majitelů'], spravne:[0,1], vysvetleni:'Rubopis a seznam akcionářů se týkají akcií na jméno.'},
  {typ:'tf', otazka:'Stanovy mohou převoditelnost akcií na jméno omezit, ale ne vyloučit.', spravne:[0], vysvetleni:'§ 269 ZOK.'},
  {typ:'multi', otazka:'Co platí o prioritních akciích podle přednášky?', moznosti:['Mají přednostní právo na podíl na zisku nebo likvidačním zůstatku','Pokud stanovy neurčí jinak, jsou bez hlasovacího práva','Souhrn jejich jmenovitých hodnot nesmí překročit 90 % ZK','Mají vždy dvojnásobné hlasovací právo'], spravne:[0,1,2], vysvetleni:'§ 278 ZOK; hlasovací právo obvykle nemají.'},
  {typ:'single', otazka:'Emisní ážio vzniká, když…', moznosti:['emisní kurs je vyšší než jmenovitá hodnota','tržní cena je nižší než emisní kurs','společnost vyplatí zálohu na dividendu','emisní kurs je nižší než jmenovitá hodnota'], spravne:[0], vysvetleni:'Ážio = emisní kurs − jmenovitá hodnota. Emisní kurs nesmí být nižší než jmenovitá hodnota.'},
  {typ:'tf', otazka:'„Dividenda“ je právní pojem definovaný v ZOK.', spravne:[1], vysvetleni:'Není právní pojem – správně „podíl na zisku akcionáře“ (§ 348 ZOK).'},
  {typ:'multi', otazka:'Které hodnoty akcie rozlišuje přednáška?', moznosti:['Nominální (jmenovitá)','Účetní (bilanční)','Likvidační','Emisní cena','Tržní cena (kurz)'], spravne:[0,1,2,3,4], vysvetleni:'Všechny uvedené.'},
  {typ:'single', otazka:'Účetní hodnota akcie se spočítá jako…', moznosti:['(vlastní kapitál − prioritní akcie) / počet kmenových akcií','základní kapitál / počet akcií','tržní cena · počet akcií','likvidační hodnota / počet akcií'], spravne:[0], vysvetleni:'ZK / počet akcií je nominální hodnota, cena · počet = kapitalizace.'},
  {typ:'multi', otazka:'Které vztahy jsou správně?', moznosti:['Výplatní poměr = DPS / EPS','b = 1 − výplatní poměr','Dividendové krytí = EPS / DPS','P/E = EPS / tržní cena'], spravne:[0,1,2], vysvetleni:'P/E = tržní cena / EPS (obráceně).'},
  {typ:'multi', otazka:'Co platí o ukazateli P/E podle přednášky?', moznosti:['Doporučuje se kupovat akcie s P/E menším než 15','Vysoké P/E může znamenat předraženou akcii','Nelze ho použít, když a.s. vykáže ztrátu','Čím vyšší P/E, tím levnější akcie'], spravne:[0,1,2], vysvetleni:'Nízké P/E = levná, vysoké = předražená.'},
  {typ:'single', otazka:'Technická analýza odpovídá hlavně na otázku…', moznosti:['KDY akcii koupit?','JAKOU akcii koupit?','KOLIK akcií koupit?','PROČ akcii koupit?'], spravne:[0], vysvetleni:'Fundamentální odpovídá na JAKOU akcii koupit.'},
  {typ:'multi', otazka:'Co je typické pro fundamentální analýzu?', moznosti:['Hledá vnitřní hodnotu akcie','Zkoumá makroekonomickou, odvětvovou a firemní úroveň','Pracuje jen s grafy cen a objemů','Při VH > tržní cena doporučí nákup'], spravne:[0,1,3], vysvetleni:'Grafy cen a objemů = technická analýza.'},
  {typ:'single', otazka:'Vnitřní hodnota akcie je nižší než tržní cena. Akcie je…', moznosti:['nadhodnocená → prodat','podhodnocená → koupit','správně oceněná → držet','nelze určit'], spravne:[0], vysvetleni:'VH < tržní cena = nadhodnocená.'},
  {typ:'tf', otazka:'Cena akcie roste díky reinvesticím jen tehdy, když ROE je vyšší než míra kapitalizace r.', spravne:[0], vysvetleni:'Při ROE > r je PVGO kladné.'},
  {typ:'single', otazka:'Ziskové modely oceňování akcií…', moznosti:['se používají na kratší horizont (do 3 let) a vychází z P/E','počítají s nekonečnou řadou dividend','se používají jen pro dluhopisy','nepracují s časovou hodnotou peněz'], spravne:[0], vysvetleni:'Pracují s čistým ziskem a časovou hodnotou peněz, horizont do 3 let.'},
  {typ:'multi', otazka:'Které osobnosti přednáška spojuje s behaviorálními financemi?', moznosti:['Daniel Kahneman','Amos Tversky','Richard Thaler','Aswath Damodaran'], spravne:[0,1,2], vysvetleni:'Damodaran je odborník na oceňování a rizikové prémie.'},
  {typ:'single', otazka:'Podle teorie prospektu je emocionální dopad ztráty oproti stejně velkému zisku přibližně…', moznosti:['dvakrát silnější','stejný','poloviční','desetkrát silnější'], spravne:[0], vysvetleni:'Averze ke ztrátě ≈ 2×.'},
  {typ:'multi', otazka:'Které nástroje měří sentiment trhu?', moznosti:['VIX index','Put/Call ratio','Fear & Greed Index','Průzkumy investorů (AAII)','Dividendové krytí'], spravne:[0,1,2,3], vysvetleni:'Dividendové krytí je ukazatel akcie, ne sentimentu.'},
  {typ:'single', otazka:'Ve kterém bodě psychologického cyklu trhu je finanční riziko největší?', moznosti:['Euforie','Panika','Optimismus','Deprese'], spravne:[0], vysvetleni:'Euforie – většina kupuje, když by měla prodávat.'},
  {typ:'single', otazka:'Při středně silné formě efektivnosti trhu je bezvýznamná…', moznosti:['technická i fundamentální analýza','jen technická analýza','jen fundamentální analýza','žádná analýza, obě fungují'], spravne:[0], vysvetleni:'Slabá forma vyřazuje technickou analýzu, středně silná i teorii vnitřní hodnoty.'},
  {typ:'tf', otazka:'Paradox efektivního trhu: trh zůstává efektivní jen díky tomu, že účastníci věří, že efektivní není, a snaží se ho překonat.', spravne:[0], vysvetleni:'Kdyby analýzy nikdo nedělal, trh by efektivní přestal být.'},
  {typ:'multi', otazka:'Které jsou dividendové diskontní modely podle průběhu růstu?', moznosti:['S nulovým růstem','S jednostupňovým růstem','S dvoustupňovým růstem','S vícestupňovým růstem','S binomickým růstem'], spravne:[0,1,2,3], vysvetleni:'Binomický model je pro opce.'}
 ]
},
/* ===================================================================== 2 */
{
 id:'p2', title:'2 · Dluhopisy a metody jejich ocenění, opce',
 desc:'Dluh, dluhopis (zákon 190/2004 Sb.), pojmy, emitent, druhy, oceňování (vnitřní hodnota, zerobond, konzola), výnosy, rating, kupní a prodejní opce.',
 vyklad:[
  {nadpis:'Dluh a dluhopis', klic:true, html:T`<ul>
   <li><b>Dluh</b> = kapitál podniku s <b>omezenou dobou</b> – po definované době se musí věřiteli vrátit.</li>
   <li><b>Dluhopis</b> (obligace, bond; zákon č. <b>190/2004 Sb.</b>) = cenný papír / zaknihovaný CP, s nímž je spojeno právo na <b>splacení dlužné částky odpovídající jmenovité hodnotě</b> (najednou nebo postupně) a případně další práva z emisních podmínek. Vyjadřuje závazek emitenta (dlužníka) vůči věřiteli (investorovi).</li>
   <li>Emitent musí splatit dlužnou částku a u kupónových dluhopisů průběžně platit <b>úroky</b>. Cíl emitenta: získat kapitál – <b>alternativa bankovního úvěru</b>.</li>
   <li>Na rozdíl od akcie (jen a.s., vlastní nenávratný zdroj) může dluhopisy vydat i jiná PO a FO-podnikatel na základě povolení a výtěžek je <b>cizí, návratný</b> zdroj.</li>
   <li>Dluhopisy mohou být jen <b>na řad</b> (uvedeno jméno), <b>zaknihované</b> nebo <b>imobilizované</b>. <b>Emisní podmínky schvaluje ČNB.</b></li></ul>`},
  {nadpis:'Základní pojmy', klic:true, html:T`<ul>
   <li><b>Emitent</b> – kdo dluhopis vydal (dlužník).</li>
   <li><b>Jmenovitá hodnota</b> – částka, kterou se emitent zavázal splatit k datu splatnosti.</li>
   <li><b>Doba splatnosti</b> – počet let do splatnosti; čím delší, tím vyšší <b>úrokové riziko</b> (souvisí s durací).</li>
   <li><b>Kupón</b> – úroková platba v pravidelných intervalech: pevná sazba, pohyblivá (vázaná na referenční sazbu nebo index) nebo <b>nulový kupón</b>.</li>
   <li><b>Frekvence</b> – kolikrát ročně se kupón vyplácí. <b>Kupní cena</b> – v % jmenovité hodnoty; emisní cena = cena vydání.</li>
   <li><b>Výnos do splatnosti</b> – výnos při držení do splatnosti, odvozený z aktuální ceny a budoucích plateb; slouží k porovnání dluhopisů s různou splatností.</li>
   <li><b>Rating</b> – čím nižší rating, tím rizikovější dluhopis.</li></ul>`},
  {nadpis:'Emitent', html:T`<ul>
   <li><b>Právnická osoba</b>: od vzniku uplynuly aspoň <b>2 roky</b> a má schválené a auditované aspoň <b>2 poslední účetní závěrky</b>.</li>
   <li><b>Fyzická osoba</b>: jen pokud je bankou s místem podnikání v EU/EHP podnikající v ČR na základě jednotné bankovní licence.</li>
   <li>Emitent smí vydat dluhopisy, pokud ČNB schválí emisní podmínky. Český emitent vydávající v zahraničí a zahraniční emitent vydávající v ČR mají informační povinnost (objem, forma, výnos, splatnost).</li></ul>`},
  {nadpis:'Náležitosti dluhopisu', html:T`<p>Označení „dluhopis“, druh, identifikace emitenta, <b>jmenovitá hodnota</b>, <b>výnos</b> (nebo že je dán rozdílem jmenovité hodnoty a emisního kurzu), <b>datum splatnosti</b>, identifikace vlastníka (ne u zaknihovaného), podpis emitenta, číselné označení, <b>datum emise</b>, <b>ISIN</b> (mezinárodní identifikační označení).</p>`},
  {nadpis:'Druhy dluhopisů', klic:true, html:T`<ul>
   <li>Přehled: běžné, státní pokladniční poukázky, státní, komunální, <b>kryté</b> (hypoteční, veřejnoprávní, smíšený zástavní list), vyměnitelné, prioritní, podřízené, sběrné, zerobondy.</li>
   <li><b>Dle výnosu</b>: s pevnou sazbou (většina českých státních), s pohyblivou sazbou (PRIBOR/LIBOR + přirážka), s nulovým kupónem (<b>zerobond</b> – výnos = rozdíl mezi kupní cenou a jmenovitou hodnotou), <b>svlečené</b> (kupóny oddělené a obchodované samostatně jako bezkupónové).</li>
   <li><b>Dle splatnosti</b>: krátkodobé <b>do 1 roku</b> (např. pokladniční poukázky), střednědobé <b>1–10 let</b>, dlouhodobé <b>nad 10 let</b>, <b>věčné (konzoly)</b> – neomezená splatnost, vydává jen stát ke konsolidaci státního dluhu.</li>
   <li><b>Prioritní</b> – přednostní právo na úpis akcií emitenta. <b>Podřízené</b> – v likvidaci uspokojeny až po ostatních pohledávkách. <b>Vyměnitelné / konvertibilní</b> – právo vyměnit za akcie emitenta nebo jiný dluhopis. <b>S opcí</b> – právo předčasného splacení (emitent, příp. investor).</li></ul>`},
  {nadpis:'Hodnota a cena dluhopisu', klic:true, html:T`<ul>
   <li><b>Nominální hodnota (jistina)</b> – vyplacená při splatnosti; <b>tržní hodnota (kupní cena)</b> – cena obchodu; <b>současná hodnota</b> – PV budoucích kupónů a nominálu; <b>discount</b> – rozdíl jmenovité hodnoty a kupní ceny.</li>
   <li>Výnos může být dán pevnou sazbou, pohyblivou sazbou nebo rozdílem jmenovité hodnoty a nižšího emisního kurzu (<b>diskontní dluhopis</b>).</li></ul>
   $$V=\sum_{n=1}^{N}\frac{C}{(1+i)^n}+\frac{F}{(1+i)^N},\quad C=F\cdot r\qquad V_{zero}=\frac{F}{(1+i)^N}\qquad V_{konzola}=\frac{C}{i}$$
   <ul><li>\(i>r\Rightarrow V<F\) – prodej <b>s diskontem</b>; \(i<r\Rightarrow V>F\) – prodej <b>s prémií</b>; \(i=r\Rightarrow V=F\) – <b>at par</b>.</li>
   <li>Sazby r a i musí odpovídat délce kupónového období – při pololetním kupónu dělit sazby 2 a počet období ×2. <b>Struktura toků ovlivňuje cenu</b> (příklad: ročně 92,42, pololetně 92,28).</li>
   <li><b>Hrubá cena = čistá cena + alikvótní úrokový výnos</b> (poměrná část kupónu). Cena mezi výplatami kupónů: interpolací (jednodušší, nepřesná, lineární) nebo přímo ze vzorce s desetinným časem (přesnější).</li></ul>`},
  {nadpis:'Výnosy z dluhopisu', klic:true, html:T`$$\text{nominální kupónový výnos}=\frac{C}{F}\cdot100\,\%\qquad \text{běžný výnos}=\frac{C}{P}\cdot100\,\%$$
   $$P_0=\sum_{t=1}^{N}\frac{C}{(1+ytm)^t}+\frac{F}{(1+ytm)^N}$$
   <ul><li><b>Nominální kupónový (par yield)</b> – rychlý, ale nízká vypovídací schopnost (nezohledňuje životnost, nominál, úrokové míry).</li>
   <li><b>Běžný (current yield)</b> – o něco přesnější, používají <b>krátkodobí spekulanti</b>.</li>
   <li><b>Výnos do splatnosti (YTM)</b> – <b>nejpoužívanější</b>; zohledňuje kupóny, nominál, životnost i časovou hodnotu; je to <b>IRR</b>, přesně jen numericky (iteračně).</li>
   <li><b>Výnos za dobu držby (holding-period yield)</b>.</li></ul>`},
  {nadpis:'Rating', html:T`<ul><li><b>AAA</b> extrémně silné předpoklady splácení, <b>AA</b> silné, <b>A</b> silné, ale citlivé na změny ekonomiky, <b>BBB</b> dostatečná schopnost splácet (poslední investiční stupeň), <b>BB, B, CCC, CC, C, D</b> – spekulativní až neschopnost splácet.</li></ul>`},
  {nadpis:'Opce – základy', klic:true, html:T`<ul>
   <li>Finanční deriváty: <b>opce = právo</b>; <b>forwardy a futures = povinnost</b> (futures standardizované, burzy); <b>swapy = směna</b> povinností/aktiv.</li>
   <li>Opce opravňuje kupujícího a <b>zavazuje prodávajícího</b> k obchodu za předem stanovených podmínek. Kupující platí <b>opční prémii</b> (cena opce); opci může uplatnit, nechat propadnout nebo prodat.</li>
   <li><b>Call</b> = právo koupit (spekulace na <b>růst</b>), <b>put</b> = právo prodat (spekulace na <b>pokles</b>). Prodávající (vypisovatel) callu má povinnost prodat, putu povinnost koupit, pokud majitel právo uplatní.</li>
   <li><b>Evropská</b> – uplatnitelná jen v jeden smluvený okamžik; <b>americká</b> – kdykoli do smluveného okamžiku.</li>
   <li><b>Opční list (warrant)</b> – CP bez úroků a dividend, právo koupit (call warrant) / prodat (put warrant) podkladové aktivum za realizační cenu; obchoduje se většinou <b>mimo burzu</b>.</li></ul>`}
 ],
 pojmy:[
  {pojem:'Dluh', definice:'Kapitál s omezenou dobou použití – po ní se musí vrátit věřiteli.'},
  {pojem:'Dluhopis', definice:'CP s právem na splacení dlužné částky = jmenovité hodnoty (zákon 190/2004 Sb.); závazek emitenta vůči investorovi.'},
  {pojem:'Emitent', definice:'Osoba, která dluhopis vydala (dlužník). PO: min. 2 roky od vzniku + 2 auditované závěrky.'},
  {pojem:'Kdo schvaluje emisní podmínky', definice:'Česká národní banka (dříve Komise pro cenné papíry).'},
  {pojem:'Jmenovitá hodnota', definice:'Částka, kterou emitent splatí k datu splatnosti.'},
  {pojem:'Kupón', definice:'Pravidelná úroková platba: pevná, pohyblivá nebo nulová.'},
  {pojem:'Frekvence', definice:'Kolikrát ročně se kupón vyplácí (p.a., p.s. = pololetně, p.q. = čtvrtletně).'},
  {pojem:'Výnos do splatnosti (YTM)', definice:'IRR dluhopisu drženého do splatnosti; nejpoužívanější výnos, počítá se iteračně.'},
  {pojem:'Nominální kupónový výnos', definice:'C / F · 100 %; rychlý, ale nízká vypovídací schopnost.'},
  {pojem:'Běžný výnos', definice:'C / P · 100 % (P = tržní cena); používají krátkodobí spekulanti.'},
  {pojem:'Zerobond', definice:T`Dluhopis bez kupónu, emitovaný s diskontem: \(V=\frac{F}{(1+i)^N}\).`},
  {pojem:'Konzola (věčný dluhopis)', definice:T`Neomezená splatnost, vydává jen stát; \(V=\frac{C}{i}\).`},
  {pojem:'Svlečené dluhopisy', definice:'Kupóny oddělené od jistiny a obchodované samostatně jako bezkupónové.'},
  {pojem:'Prioritní dluhopis', definice:'Přednostní právo na úpis akcií emitenta.'},
  {pojem:'Podřízený dluhopis', definice:'V likvidaci uspokojen až po ostatních pohledávkách.'},
  {pojem:'Vyměnitelný (konvertibilní) dluhopis', definice:'Právo vyměnit za akcie emitenta nebo jiný dluhopis.'},
  {pojem:'Dluhopis s opcí', definice:'Emitent (případně investor) má právo na předčasné splacení.'},
  {pojem:'Kryté dluhopisy', definice:'Hypoteční, veřejnoprávní a smíšený zástavní list.'},
  {pojem:'Prodej s diskontem', definice:'V < F, nastává když i > r. Rozdíl F − V = diskont.'},
  {pojem:'Prodej s prémií', definice:'V > F, nastává když i < r.'},
  {pojem:'At par', definice:'V = F, když i = r.'},
  {pojem:'Hrubá cena dluhopisu', definice:'Čistá cena + alikvótní úrokový výnos.'},
  {pojem:'Rating BBB', definice:'Dostatečná schopnost splácet; nižší (BB…D) už spekulativní.'},
  {pojem:'Opce', definice:'Právo (ne povinnost) koupit/prodat aktivum za pevnou cenu v pevném čase; kupující platí opční prémii.'},
  {pojem:'Call opce', definice:'Právo koupit; kupují ji ti, kdo sázejí na růst ceny.'},
  {pojem:'Put opce', definice:'Právo prodat; kupují ji ti, kdo sázejí na pokles ceny.'},
  {pojem:'Evropská × americká opce', definice:'Evropská jen v jeden okamžik, americká kdykoli do splatnosti.'},
  {pojem:'Opční list (warrant)', definice:'CP bez úroků a dividend s právem koupit/prodat podkladové aktivum; většinou mimo burzu.'}
 ],
 otazky:[
  {typ:'single', otazka:'Kterým zákonem jsou upraveny dluhopisy?', moznosti:['Zákon č. 190/2004 Sb.','Zákon č. 90/2012 Sb.','Zákon č. 89/2012 Sb.','Zákon č. 513/1991 Sb.'], spravne:[0], vysvetleni:'90/2012 = ZOK, 89/2012 = NOZ, 513/1991 = starý obchodní zákoník.'},
  {typ:'multi', otazka:'Co platí o dluhopisu z pohledu emitenta?', moznosti:['Je to cizí, návratný zdroj','Je alternativou bankovního úvěru','Je to vlastní, nenávratný zdroj','Vydat ho může jen akciová společnost'], spravne:[0,1], vysvetleni:'Vlastní nenávratný zdroj je akcie; dluhopis může vydat i jiná PO nebo FO-podnikatel.'},
  {typ:'single', otazka:'Kdo schvaluje emisní podmínky dluhopisů?', moznosti:['Česká národní banka','Ministerstvo financí','Burza cenných papírů Praha','Valná hromada emitenta'], spravne:[0], vysvetleni:'ČNB (dříve Komise pro cenné papíry).'},
  {typ:'multi', otazka:'Jaké podmínky musí splnit právnická osoba, aby mohla emitovat dluhopisy?', moznosti:['Od vzniku uplynuly aspoň 2 roky','Má schválené a auditované aspoň 2 poslední účetní závěrky','Má základní kapitál aspoň 100 mil. Kč','Je kotovaná na burze'], spravne:[0,1], vysvetleni:'Podmínky z přednášky: 2 roky a 2 auditované závěrky.'},
  {typ:'multi', otazka:'Které údaje patří mezi náležitosti dluhopisu?', moznosti:['Jmenovitá hodnota','Datum splatnosti','Identifikace emitenta','Datum emise','Výše dividendy'], spravne:[0,1,2,3], vysvetleni:'Dividenda se týká akcií.'},
  {typ:'single', otazka:'Střednědobé dluhopisy mají splatnost…', moznosti:['1–10 let','do 1 roku','nad 10 let','neomezenou'], spravne:[0], vysvetleni:'Krátkodobé do 1 roku, střednědobé 1–10 let, dlouhodobé nad 10 let, věčné bez omezení.'},
  {typ:'multi', otazka:'Co platí o věčných dluhopisech (konzolách)?', moznosti:['Doba splatnosti je neohraničená','Vyplácí pravidelný kupón','Emituje je jen stát','Jejich hodnota je C / i','Nevyplácí žádný kupón'], spravne:[0,1,2,3], vysvetleni:'Konzola vyplácí kupón navždy, jistina se nesplácí.'},
  {typ:'single', otazka:'Dluhopis, jehož držitel může v určitý moment vyměnit dluhopis za akcie emitenta, je…', moznosti:['vyměnitelný (konvertibilní)','prioritní','podřízený','svlečený'], spravne:[0], vysvetleni:'Prioritní dává přednostní právo na úpis akcií, ne výměnu.'},
  {typ:'single', otazka:'Pohledávky držitele kterého dluhopisu jsou při likvidaci uspokojeny až po ostatních?', moznosti:['podřízeného','prioritního','krytého','komunálního'], spravne:[0], vysvetleni:'Podřízený dluhopis.'},
  {typ:'multi', otazka:'Co platí o zerobondu?', moznosti:['Nevyplácí kupón','Výnosem je rozdíl mezi kupní cenou a jmenovitou hodnotou','Emituje se na diskontované bázi','Jeho cena je vždy vyšší než jmenovitá hodnota'], spravne:[0,1,2], vysvetleni:'Při kladné sazbě je cena zerobondu pod jmenovitou hodnotou.'},
  {typ:'single', otazka:'Požadovaný výnos investora i je vyšší než kupónová sazba r. Dluhopis se prodává…', moznosti:['s diskontem (V < F)','s prémií (V > F)','za nominální hodnotu (V = F)','nelze určit'], spravne:[0], vysvetleni:'i > r → V < F.'},
  {typ:'tf', otazka:'Při změně ročního kupónu na pololetní se cena dluhopisu nezmění, protože roční sazba zůstává stejná.', spravne:[1], vysvetleni:'Struktura finančních toků má vliv na cenu (92,42 vs. 92,28 v příkladu z přednášky).'},
  {typ:'single', otazka:'Hrubá cena dluhopisu se skládá z…', moznosti:['čisté ceny a alikvótního úrokového výnosu','jmenovité hodnoty a kupónu','emisního kurzu a ážia','tržní ceny a ratingu'], spravne:[0], vysvetleni:'Hrubá = čistá + AÚV (poměrná část kupónu).'},
  {typ:'multi', otazka:'Které výnosy z dluhopisu uvádí přednáška?', moznosti:['Nominální kupónový výnos','Běžný výnos','Výnos do splatnosti','Výnos za dobu držby','Dividendový výnos'], spravne:[0,1,2,3], vysvetleni:'Dividendový výnos je ukazatel akcií.'},
  {typ:'single', otazka:'Nejčastěji využívaný koncept výnosu dluhopisu, který odpovídá IRR, je…', moznosti:['výnos do splatnosti (YTM)','běžný výnos','nominální kupónový výnos','výnos za dobu držby'], spravne:[0], vysvetleni:'YTM zohledňuje kupóny, nominál, životnost i časovou hodnotu peněz.'},
  {typ:'single', otazka:'Běžný výnos (current yield) se počítá jako…', moznosti:['C / P · 100 %','C / F · 100 %','(F − P) / P','C / i'], spravne:[0], vysvetleni:'C / F je nominální kupónový výnos, C / i hodnota konzoly.'},
  {typ:'multi', otazka:'Které tvrzení o ratingu jsou pravdivá?', moznosti:['Čím nižší rating, tím rizikovější dluhopis','AAA znamená extrémně silné předpoklady splácení','BBB znamená dostatečnou schopnost splácet','A je lepší než AA'], spravne:[0,1,2], vysvetleni:'AA je lepší než A.'},
  {typ:'multi', otazka:'Které finanční deriváty představují pro kupujícího povinnost (ne jen právo)?', moznosti:['Forward','Futures','Opce'], spravne:[0,1], vysvetleni:'Opce je právo; forwardy a futures povinnost.'},
  {typ:'multi', otazka:'Co může kupující opce se svou opcí udělat?', moznosti:['Uplatnit ji','Nechat ji propadnout','Prodat ji dál','Požádat vypisovatele o vrácení opční prémie'], spravne:[0,1,2], vysvetleni:'Prémie se nevrací – je to cena za právo.'},
  {typ:'single', otazka:'Investor spekuluje na pokles ceny akcie. Jakou opci koupí?', moznosti:['Put','Call','Konvertibilní','Warrant na nákup'], spravne:[0], vysvetleni:'Put = právo prodat za pevnou cenu, vydělá při poklesu.'},
  {typ:'tf', otazka:'Prodávající (vypisovatel) call opce má povinnost aktivum prodat, pokud majitel opci uplatní.', spravne:[0], vysvetleni:'Kupující má právo, vypisovatel povinnost.'},
  {typ:'single', otazka:'Americká opce může být uplatněna…', moznosti:['kdykoli do smluveného okamžiku','jen ve smluvený okamžik','jen ve více předem určených dnech','jen po dni splatnosti'], spravne:[0], vysvetleni:'Evropská jen v jeden okamžik; ve více dnech = bermudská (přednáška 3).'},
  {typ:'multi', otazka:'Co platí o opčních listech (warrantech)?', moznosti:['Jsou to CP bez úroků a dividend','Dávají právo koupit nebo prodat podkladové aktivum','Obchodují se většinou mimo burzu','Zakládají povinnost emitenta platit kupón'], spravne:[0,1,2], vysvetleni:'Kupón u warrantu není.'}
 ]
},
/* ===================================================================== 3 */
{
 id:'p3', title:'3 · Oceňování opcí – binomická a Black-Scholesova metoda',
 desc:'Finanční deriváty, opční pojmy, druhy opcí, long/short call a put, reálné opce, hodnota opce (vnitřní a časová), binomický model, Black-Scholesův model.',
 vyklad:[
  {nadpis:'Finanční deriváty a opce', klic:true, html:T`<ul>
   <li>Opce je <b>finanční derivát</b> – hodnota je odvozena od <b>podkladového aktiva</b> (akcie, indexy, dluhopisy, devizy, komodity, pokladniční poukázky).</li>
   <li>Deriváty jsou založené na <b>termínovaném obchodu</b> – uzavření a plnění obchodu se časově rozcházejí.</li>
   <li>Opce = smlouva, která dává kupujícímu <b>právo, ne povinnost</b> koupit či prodat aktivum za <b>pevně dohodnutou cenu</b> v <b>pevně stanoveném čase</b>; kupující platí <b>opční prémii</b>.</li></ul>`},
  {nadpis:'Opční pojmy', klic:true, html:T`<ul>
   <li><b>Opční prémie</b> – odměna vypisovateli, platí ji kupující (= cena opce).</li>
   <li><b>Opční kontrakt</b> – smlouva mezi účastníky. <b>Podkladové aktivum</b> – předmět smlouvy.</li>
   <li><b>Strike (realizační cena)</b> – předem sjednaná cena podkladového aktiva.</li>
   <li><b>Bod zvratu</b> – od něj je opce pro kupujícího zisková (u callu = strike + prémie).</li>
   <li>Kupující = <b>long</b> pozice (právo rozhodnout), vypisovatel = <b>short</b> pozice (povinnost přizpůsobit se, „tahá za kratší konec“).</li></ul>`},
  {nadpis:'Druhy opcí', klic:true, html:T`<ul>
   <li>Dle typu: <b>call</b> (kupní) / <b>put</b> (prodejní). Dle pozice: <b>long</b> / <b>short</b>.</li>
   <li>Dle času uplatnění: <b>evropská</b> (jen v 1 okamžik), <b>americká</b> (kdykoli do splatnosti), <b>bermudská</b> (ve více definovaných okamžicích).</li>
   <li>Dle vztahu spotové a realizační ceny: <b>v penězích</b> (výhodná k uplatnění), <b>na penězích</b> (lhostejné), <b>mimo peníze</b> (nevýhodná).</li>
   <li>Dále <b>finanční</b> × <b>reálné</b> opce.</li>
   <li>Finanční opce slouží k <b>zajištění</b> (eliminace rizika) i ke <b>spekulaci</b>; kombinací vznikají <b>opční strategie</b> (stelážové obchody): iron condor, butterfly spread, straddle.</li></ul>`},
  {nadpis:'Long/short call a put', klic:true, html:T`<ul>
   <li><b>Long call</b> – chrání proti <b>růstu</b> ceny. Když cena roste, kupující uplatní opci, koupí levněji a prodá za tržní cenu; když klesá, nechá opci propadnout.</li>
   <li><b>Short call</b> – opak long callu; vypisovatel inkasuje prémii a doufá, že cena nevzroste (pak opce není uplatněna).</li>
   <li><b>Long put</b> – právo prodat za dohodnutou cenu; <b>zajištění proti poklesu</b> ceny. Příklad: akcie za 30 EUR, put strike 30, prémie 2; při poklesu na 25 je ztráta portfolia −5, zisk z putu +5, prémie −2.</li>
   <li><b>Short put</b> – vypisovatel přijme prémii a věří, že opce nebude využita; má povinnost aktivum odkoupit bez ohledu na jeho aktuální cenu.</li></ul>`},
  {nadpis:'Reálné opce', klic:true, html:T`<p>Jakékoli <b>právo na budoucí rozhodování</b> o podnikových aktivech podle nově zjištěných informací; za toto právo se vynakládají prostředky. <b>Projekt s vyšší flexibilitou má vyšší cenu.</b></p>
   <ul><li>Příklady: zařízení s proměnlivou kapacitou, licence, outsourcing, výzkum a vývoj.</li>
   <li>Předpoklady použití: <b>flexibilita</b> v rozhodování a zároveň <b>nejistota</b> na trhu.</li>
   <li>Druhy: opce <b>odložení</b> (vyčkávání), <b>etapová</b> (rozfázování), <b>rozšíření či zúžení</b> (změny rozsahu), <b>přerušení</b>, <b>ukončení (opuštění)</b>.</li>
   <li>Má smysl, když: <b>NPV blízká nule</b>, vysoká nejistota, široká manažerská flexibilita. Nemá smysl: rozhodování za jistoty, rozhodnutí nelze odložit, nízkorozpočtové projekty (práce s RO dražší než přínos).</li>
   <li>Příklad z přednášky: bez opce očekávaná NPV −6 mil. Kč, se zahrnutím reálné opce (neprodukovat ve ztrátových scénářích) +8 mil. Kč → projekt se stává výhodným.</li></ul>`},
  {nadpis:'Finanční × reálné opce', html:T`<table class="t"><tr><th>Finanční opce</th><th>Reálné opce</th></tr>
   <tr><td>splatnost krátkodobá (měsíce)</td><td>dlouhodobá (roky)</td></tr>
   <tr><td>podkladové aktivum = cena akcie / fin. aktiva</td><td>free cash flow řízené konkurencí</td></tr>
   <tr><td>hodnotu nelze ovlivnit (tvoří se na burze)</td><td>lze zvýšit flexibilitou managementu</td></tr>
   <tr><td>realizovat může jen vlastník</td><td>lze sdílet</td></tr>
   <tr><td>většinou jednoduché a evropské</td><td>většinou složené a americké</td></tr>
   <tr><td>parciální dif. rovnice, simulace</td><td>binomické rovnice se simulací</td></tr>
   <tr><td>kontinuálně obchodovatelné</td><td>nelze s nimi obchodovat</td></tr></table>`},
  {nadpis:'Hodnota opce', klic:true, html:T`<p><b>Hodnota opce = vnitřní hodnota + časová hodnota.</b></p>
   <ul><li><b>Vnitřní hodnota</b> = rozdíl promptního kurzu akcie a realizační ceny: kladný → <b>v penězích</b> (při uplatnění zisk); záporný → <b>mimo peníze</b> (vnitřní hodnota je nulová, uplatnění = ztráta); nula → <b>na penězích</b>.</li>
   <li><b>Časová hodnota</b> závisí na: <b>době do vypršení</b>, <b>bezrizikové úrokové míře</b>, <b>volatilitě</b> podkladového aktiva, <b>dividendách</b>. V době expirace je <b>nulová</b> – cena opce = vnitřní hodnota.</li>
   <li>Metody oceňování: <b>binomický</b>, <b>Black-Scholesův</b>, Mertonův, Jump Diffusion, Stochastic Volatility model.</li></ul>`},
  {nadpis:'Binomický model', klic:true, html:T`<ul>
   <li>Publikován <b>1979</b>; uplatnitelný i pro <b>americké</b> opce; podkladovým aktivem akcie.</li>
   <li>Předpoklady: efektivní trh bez arbitráže, jediná bezriziková úroková míra pro půjčky i výpůjčky (konstantní), žádná omezení ani zpoždění, lze obchodovat i část akcie, <b>ceny se vyvíjejí diskrétně</b>, bez transakčních nákladů a daní, <b>akcie nevyplácí dividendy</b>; cena s pravděpodobností q vzroste o U %, s (1 − q) klesne o D %.</li>
   <li>Čas do expirace se rozdělí na období; v každém cena jen <b>vzroste nebo klesne</b> (binomické rozdělení). Opce se oceňují od koncových uzlů zpět.</li>
   <li>Princip: <b>bezrizikové portfolio</b> z Δ akcií (long) a 1 opce (short), Δ zvolená tak, aby hodnota byla v obou stavech stejná; portfolio musí vynášet jen bezrizikovou sazbu (jinak arbitráž), diskontuje se spojitě \(e^{-rt}\).</li></ul>
   $$C_u=\max(S_u-X;0)\qquad P_u=\max(X-S_u;0)\qquad \Delta=\frac{C_u-C_d}{S_u-S_d}$$
   <p>Příklad z přednášky: S = 500, S<sub>u</sub> = 550, S<sub>d</sub> = 450, X = 525, r = 10 %, 3 měsíce → Δ = 0,25, portfolio 112,5, PV = 109,72, <b>cena callu 15,28 Kč</b>.</p>`},
  {nadpis:'Black-Scholesův model', klic:true, html:T`<ul>
   <li>Vyvinut v <b>70. letech</b>, v praxi se používá <b>častěji</b>; cena aktiva se vyvíjí jako <b>stochastický proces</b>.</li>
   <li>Pro <b>evropské</b> call i put opce na akcie, které <b>nevyplácí dividendy</b>.</li>
   <li>Předpoklady: známá a konstantní krátkodobá úroková míra, nulové transakční náklady a daně, <b>nepřetržité obchodování</b>, povolený krátký prodej, neomezené půjčky za r, cena akcie se řídí <b>geometrickým Brownovým pohybem</b> → <b>lognormální rozdělení</b>.</li>
   <li>Proměnné modelu: cena podkladového aktiva a čas; odvození přes Itô lemma, diferenciální rovnici a Fourierovu transformaci.</li></ul>
   $$C=S\cdot N(d_1)-X\cdot e^{-rt}\cdot N(d_2)\qquad P=-S\cdot N(-d_1)+X\cdot e^{-rt}\cdot N(-d_2)$$`}
 ],
 pojmy:[
  {pojem:'Finanční derivát', definice:'Instrument, jehož hodnota je odvozena od podkladového aktiva; založen na termínovaném obchodu.'},
  {pojem:'Opční prémie', definice:'Cena opce – odměna vypisovateli, platí ji kupující.'},
  {pojem:'Strike (realizační cena)', definice:'Předem sjednaná cena podkladového aktiva.'},
  {pojem:'Bod zvratu opce', definice:'Cena, od které je opce pro kupujícího zisková (call: strike + prémie).'},
  {pojem:'Long pozice', definice:'Kupující opce – má právo rozhodnout.'},
  {pojem:'Short pozice', definice:'Vypisovatel – má povinnost přizpůsobit se long straně.'},
  {pojem:'Bermudská opce', definice:'Uplatnitelná ve více předem definovaných okamžicích.'},
  {pojem:'Opce v penězích', definice:'Výhodná k uplatnění – kladná vnitřní hodnota.'},
  {pojem:'Opce mimo peníze', definice:'Nevýhodná k uplatnění – vnitřní hodnota nulová.'},
  {pojem:'Opce na penězích', definice:'Spot = strike, uplatnění je lhostejné.'},
  {pojem:'Long call', definice:'Koupená kupní opce – chrání proti růstu ceny.'},
  {pojem:'Long put', definice:'Koupená prodejní opce – chrání proti poklesu ceny.'},
  {pojem:'Opční strategie', definice:'Kombinace opcí (stelážové obchody): iron condor, butterfly spread, straddle.'},
  {pojem:'Reálná opce', definice:'Právo na budoucí rozhodování o podnikových aktivech podle nových informací.'},
  {pojem:'Druhy reálných opcí', definice:'Odložení, etapová, rozšíření/zúžení, přerušení, ukončení (opuštění).'},
  {pojem:'Kdy použít reálné opce', definice:'NPV blízká nule, vysoká nejistota, široká manažerská flexibilita.'},
  {pojem:'Vnitřní hodnota opce', definice:'Rozdíl promptního kurzu a realizační ceny (nejméně nula).'},
  {pojem:'Časová hodnota opce', definice:'Závisí na době do vypršení, bezrizikové sazbě, volatilitě a dividendách; při expiraci nulová.'},
  {pojem:'Binomický model', definice:'1979, i pro americké opce, diskrétní vývoj ceny (nahoru/dolů), bezrizikové portfolio.'},
  {pojem:'Delta (Δ)', definice:T`Počet akcií v bezrizikovém portfoliu: \(\Delta=\frac{C_u-C_d}{S_u-S_d}\).`},
  {pojem:'Black-Scholesův model', definice:'70. léta, evropské opce na akcie bez dividend, lognormální rozdělení, spojitý čas.'},
  {pojem:'Geometrický Brownův pohyb', definice:'Předpoklad B-S modelu o vývoji ceny akcie → lognormální rozdělení.'},
  {pojem:'Metody oceňování opcí', definice:'Binomický, Black-Scholesův, Mertonův, Jump Diffusion, Stochastic Volatility.'}
 ],
 otazky:[
  {typ:'multi', otazka:'Co může být podkladovým aktivem finančního derivátu?', moznosti:['Akcie','Akciový index','Devizy','Komodity','Dluhopisy'], spravne:[0,1,2,3,4], vysvetleni:'Všechno uvedené.'},
  {typ:'tf', otazka:'U derivátů dochází k časovému nesouladu mezi uzavřením a plněním obchodu.', spravne:[0], vysvetleni:'Jsou založené na termínovaném obchodu.'},
  {typ:'single', otazka:'Opční prémii platí…', moznosti:['kupující opce vypisovateli','vypisovatel kupujícímu','burza oběma stranám','emitent podkladového aktiva'], spravne:[0], vysvetleni:'Prémie je odměna vypisovateli za převzetí povinnosti.'},
  {typ:'single', otazka:'Opce, kterou lze uplatnit ve více předem definovaných okamžicích, je…', moznosti:['bermudská','americká','evropská','asijská'], spravne:[0], vysvetleni:'Americká kdykoli, evropská jen jednou.'},
  {typ:'multi', otazka:'Vyber pravdivá tvrzení o pozicích v opčním obchodě.', moznosti:['Kupující zaujímá long pozici','Vypisovatel zaujímá short pozici','Long pozice znamená povinnost se přizpůsobit','Short pozice má právo rozhodnout'], spravne:[0,1], vysvetleni:'Long = právo, short = povinnost.'},
  {typ:'single', otazka:'Call opce se strike 100, akcie stojí 110. Opce je…', moznosti:['v penězích','mimo peníze','na penězích','bez vnitřní hodnoty'], spravne:[0], vysvetleni:'Spot > strike u callu → kladná vnitřní hodnota (10).'},
  {typ:'multi', otazka:'Které faktory ovlivňují časovou hodnotu opce?', moznosti:['Doba do vypršení','Bezriziková úroková míra','Volatilita podkladového aktiva','Dividendy','Nominální hodnota akcie'], spravne:[0,1,2,3], vysvetleni:'Nominál akcie na časovou hodnotu vliv nemá.'},
  {typ:'tf', otazka:'V době expirace je časová hodnota opce nulová a cena opce se rovná její vnitřní hodnotě.', spravne:[0], vysvetleni:'Přímo z přednášky.'},
  {typ:'single', otazka:'Proti růstu ceny podkladového aktiva se zajistíš…', moznosti:['nákupem call opce (long call)','nákupem put opce (long put)','vypsáním call opce (short call)','prodejem akcie'], spravne:[0], vysvetleni:'Long call – koupíš za předem dohodnutou nižší cenu.'},
  {typ:'single', otazka:'Investor drží akcii a chce se chránit proti poklesu kurzu. Koupí…', moznosti:['put opci','call opci','forward na nákup','konvertibilní dluhopis'], spravne:[0], vysvetleni:'Long put – právo prodat za strike.'},
  {typ:'multi', otazka:'Které jsou příklady opčních strategií (stelážových obchodů)?', moznosti:['Iron condor','Butterfly spread','Straddle','Zerobond'], spravne:[0,1,2], vysvetleni:'Zerobond je dluhopis.'},
  {typ:'multi', otazka:'Které jsou druhy reálných opcí?', moznosti:['Opce odložení (vyčkávání)','Etapová opce','Opce rozšíření či zúžení','Opce ukončení (opuštění)','Opce bermudská'], spravne:[0,1,2,3], vysvetleni:'Bermudská je typ finanční opce podle času uplatnění. Dále ještě opce přerušení.'},
  {typ:'multi', otazka:'Kdy má smysl pracovat s reálnými opcemi?', moznosti:['NPV je blízká nule','Vysoká nejistota okolí projektu','Široká manažerská flexibilita','Rozhodování za jistoty','Nízkorozpočtový projekt'], spravne:[0,1,2], vysvetleni:'Za jistoty, u neodložitelných a levných projektů nemají smysl.'},
  {typ:'tf', otazka:'Projekt s vyšší flexibilitou má vyšší cenu.', spravne:[0], vysvetleni:'Flexibilita = hodnota reálné opce.'},
  {typ:'multi', otazka:'Co platí pro reálné opce (na rozdíl od finančních)?', moznosti:['Mají většinou dlouhodobou splatnost (roky)','Jejich hodnotu lze zvýšit flexibilitou managementu','Bývají většinou americké a složené','Obchodují se kontinuálně na burze'], spravne:[0,1,2], vysvetleni:'S reálnými opcemi nelze obchodovat na trhu.'},
  {typ:'single', otazka:'Podkladovým aktivem reálné opce je podle přednášky…', moznosti:['free cash flow řízené hospodářskou soutěží','cena akcie','výnos státního dluhopisu','kurz měny'], spravne:[0], vysvetleni:'U finanční opce je to cena akcie či jiného finančního aktiva.'},
  {typ:'multi', otazka:'Které metody slouží k oceňování opcí?', moznosti:['Binomický model','Black-Scholesův model','Mertonův model','Stochastic Volatility model','Gordonův model'], spravne:[0,1,2,3], vysvetleni:'Gordonův model oceňuje akcie (dividendy).'},
  {typ:'multi', otazka:'Co platí o binomickém modelu?', moznosti:['Byl publikován v roce 1979','Lze ho uplatnit i pro americké opce','Předpokládá diskrétní vývoj cen','Předpokládá, že akcie vyplácí dividendy'], spravne:[0,1,2], vysvetleni:'Předpokladem je, že podkladové aktivum dividendy nevyplácí.'},
  {typ:'single', otazka:'V binomickém modelu se Δ volí tak, aby…', moznosti:['portfolio (Δ akcií long + 1 opce short) mělo v obou stavech stejnou hodnotu','opce byla v penězích','výnos portfolia byl maximální','cena opce byla nulová'], spravne:[0], vysvetleni:'Pak je portfolio bezrizikové a musí vynášet bezrizikovou sazbu.'},
  {typ:'tf', otazka:'Kdyby byla cena opce vyšší než cena odvozená binomickým modelem, existovala by příležitost k arbitrážnímu zisku.', spravne:[0], vysvetleni:'Bezrizikové portfolio by pak vynášelo víc než bezriziková sazba.'},
  {typ:'multi', otazka:'Které předpoklady má Black-Scholesův model?', moznosti:['Opce je evropská','Akcie nevyplácí dividendy','Cena akcie má lognormální rozdělení (geometrický Brownův pohyb)','Ceny se vyvíjejí diskrétně ve dvou stavech','Nulové transakční náklady a daně'], spravne:[0,1,2,4], vysvetleni:'Diskrétní vývoj ve dvou stavech je předpoklad binomického modelu.'},
  {typ:'single', otazka:'Který model oceňování opcí se podle přednášky v praxi používá častěji?', moznosti:['Black-Scholesův','Binomický','Mertonův','Jump Diffusion'], spravne:[0], vysvetleni:'B-S – vyvinut v 70. letech, v praxi častější.'}
 ]
},
/* ===================================================================== 4 */
{
 id:'p4', title:'4 · Riziko a alternativní náklady na vlastní kapitál',
 desc:'Riziko × nejistota, eliminace rizik, riziko a výnosnost ex post / ex ante, systematické a nesystematické riziko, beta, korelace, diverzifikace, Damodaran, náklady kapitálu, CAPM, stavebnicový a dividendový model.',
 vyklad:[
  {nadpis:'Riziko', klic:true, html:T`<ul>
   <li>Riziko = stupeň nejistoty spojený s činností investora – nebezpečí, že se <b>skutečný vývoj odchýlí od očekávaného</b>; měříme rozpětí / kolísání výnosu kolem střední hodnoty.</li>
   <li>Z pohledu času: <b>ex post</b> (z minulých dat) a <b>ex ante</b> (z očekávání). Stupně měření: <b>subjektivní</b> a <b>objektivní</b>.</li>
   <li><b>Riziko × nejistota (neurčitost)</b>: riziko je <b>měřitelné pravděpodobností</b> (velikost rizika = pravděpodobnost vzniku × míra dopadu); neurčitost pravděpodobností měřit nelze. Neurčitost = spíš nepoznání, nejistota = spíš náhodnost.</li></ul>`},
  {nadpis:'Eliminace rizik', html:T`<ul><li>Vyhýbání; <b>pojištění/zajištění</b> (snižuje potenciální výnos, zvyšuje náklady); <b>diverzifikace</b>; řízení a kontrola; příprava a plánování; <b>transfer</b> na jiný subjekt nebo rozdělení mezi více subjektů.</li>
   <li>Příklady transferu: dlouhodobé kupní smlouvy za pevné ceny, komisionářské smlouvy, smlouvy o minimálním odběru, <b>termínové obchody (hedging)</b>, <b>leasing</b>, <b>faktoring, forfaiting</b>, akreditiv, inkaso, bankovní záruka, <b>franšíza</b>.</li></ul>`},
  {nadpis:'Riziko a výnosnost ex post / ex ante', klic:true, html:T`<ul>
   <li><b>Ex post</b> – z historických výnosových měr; mírou rizika je <b>rozptyl / směrodatná odchylka</b> kolem průměrné historické výnosnosti. Čím vyšší, tím vyšší riziko.</li>
   <li><b>Ex ante</b> – z očekávaných výnosových měr a jejich <b>pravděpodobností</b>.</li>
   <li>Ex post: výnosová míra se „pohybovala“ v určitém rozpětí; ex ante: „bude se pohybovat“.</li></ul>
   $$\sigma^2_{ex\,post}=\frac{\sum_t (r_t-\bar r)^2}{T}\qquad E(r)=\sum_i P_i\cdot E(r_i)\qquad \sigma^2=\sum_i P_i\,(r_i-E(r))^2$$
   <p><b>Výnosnost ex post</b> (historická) = důchod (dividenda, kupón, úrok) + kapitálový zisk/ztráta = hrubý výnos; <b>čistá</b> zohledňuje i daně a transakční náklady:</p>
   $$r=\frac{P_1-P_0+D-T-C}{P_0}\qquad E(r_p)=\sum_n X_n\cdot E(r_n)$$`},
  {nadpis:'Systematické × nesystematické riziko', klic:true, html:T`<ul>
   <li><b>Systematické (tržní)</b> riziko – zůstává i v dobře diverzifikovaném portfoliu, protože ho vyvolávají faktory ovlivňující <b>celý kapitálový trh</b> (Mařík). <b>Nelze odstranit diverzifikací</b>, investor ho musí zohlednit. Zdroje: trh jako celek (např. hrozba války v zemi dodávající ropu), <b>politické</b> (i mezinárodní), <b>měnové (devizové)</b>, <b>ekonomické</b>. Měří se <b>betou</b>.</li>
   <li><b>Nesystematické (specifické, jedinečné)</b> riziko – spojené s konkrétním instrumentem/podnikem, <b>lze odstranit diverzifikací</b>, v oceňovacích modelech se s ním nepracuje. Patří sem: <b>podnikatelské</b>, <b>finanční</b> (riziko bankrotu), <b>nelikvidity</b>, <b>managementu</b>, <b>konverze</b>, <b>předčasného odkupu</b>.</li></ul>`},
  {nadpis:'Beta faktor', klic:true, html:T`<ul>
   <li>Vyjadřuje míru rizika (kolísání výnosu) akcie <b>vzhledem k pohybům trhu</b> (akciového indexu).</li>
   <li>Kladná beta – výnos se pohybuje <b>stejným směrem</b> jako trh; záporná – <b>protichůdně</b>. Počítá se z historických výnosů instrumentu a tržního portfolia.</li>
   <li>β = 1 → stejně rizikový jako trh; β < 1 → méně rizikový (v krizi méně zasažen, nižší diskont); β > 1 → rizikovější.</li></ul>
   $$\beta_i=\frac{\operatorname{cov}(r_i,r_m)}{\sigma_m^2}$$`},
  {nadpis:'Korelace a diverzifikace', klic:true, html:T`<ul>
   <li><b>Korelační koeficient</b> ∈ ⟨−1; 1⟩ = <b>normovaná kovariance</b>. +1: pohyb „v tandemu“, −1: dokonale inverzní, 0: nezávislé.</li>
   <li><b>Kovariance</b> měří vzájemnou souvislost veličin.</li>
   <li>Diverzifikace snižuje celkové riziko; při dokonale záporné korelaci lze riziko odstranit úplně. Příklad z přednášky: portfolio 5/6 VŠČ + 1/6 LL má výnos 9 1/6 % a <b>σ = 0 %</b> – „diverzifikace odstranila veškeré riziko“.</li></ul>
   $$\rho_{xy}=\frac{\sigma_{xy}}{\sigma_x\sigma_y}\qquad \sigma_p^2=\sum_i\sum_j a_i a_j\sigma_{ij}$$`},
  {nadpis:'Systematické riziko – Damodaran', html:T`<ul>
   <li>Kde riziko nelze diverzifikovat = <b>systematické</b>; kde lze = <b>specifické</b>. Systematické riziko se objevuje v modelu CAPM, beta se zjišťuje ve <b>stavebnicovém modelu</b>.</li>
   <li>Damodaranova rozšířená rovnice nákladů vlastního kapitálu obsahuje: r<sub>f</sub>, β<sub>lev</sub>, R<sub>m</sub>, r<sub>f2</sub>, <b>CRP</b> (riziková přirážka země), <b>(π₁ − π₂)</b> (rozdíl inflací) a R (ostatní přirážky).</li>
   <li><b>Zadlužená beta</b> z nezadlužené (sazba daně T<sub>R</sub>, tržní hodnoty D a E na začátku roku):</li></ul>
   $$\beta_{lev}=\beta_{unlev}\cdot\left[1+(1-T_R)\cdot\frac{D_{t-1}}{E_{t-1}}\right]$$
   <p>Bety se obvykle přebírají z dat <b>prof. Damodarana pro západní Evropu</b> podle nejbližšího oboru.</p>`},
  {nadpis:'Náklady kapitálu', klic:true, html:T`<ul>
   <li>Náklady na kapitál = cena za to, že podnik má k dispozici kapitál; ovlivňuje je <b>kapitálová struktura</b>.</li>
   <li>Náklad <b>cizího</b> kapitálu = <b>úroky</b>; náklad <b>vlastního</b> = <b>požadovaná výnosnost</b> (zhodnocení vkladu + riziková prémie + náklady obětované příležitosti).</li>
   <li>Přístupy k odhadu nákladů VK: pro <b>obchodované a.s.</b> – <b>CAPM</b>; pro <b>ostatní</b> podniky – CAPM s náhradními odhady beta (<b>metoda analogie</b>, prognóza beta z fundamentálních faktorů / provozního a finančního rizika), <b>stavebnicová metoda</b>, <b>analýza rizika</b>, <b>dividendový model</b>, <b>průměrná rentabilita</b>, odvození z nákladů cizího kapitálu.</li></ul>`},
  {nadpis:'CAPM', klic:true, html:T`$$NVK=E(r_i)=r_f+\beta\cdot\left(E(r_m)-r_f\right)$$
   <ul><li><b>Kislingerová</b>: vhodnou diverzifikací se investor zbaví specifického rizika; zbylé <b>systematické riziko je jediné, za které jsou investoři odměňováni</b>. Beta = podíl kovariance aktiva s trhem a rozptylu trhu.</li>
   <li>Kladná korelace s trhem → kladná beta a prémie, očekávaný výnos <b>> r<sub>f</sub></b>. Nulová korelace → výnos <b>= r<sub>f</sub></b>, riziko lze zcela eliminovat. Záporná korelace → výnos <b>< r<sub>f</sub></b>, snižuje riziko portfolia.</li>
   <li><b>Brealey</b>: betu nenajdete v novinách; odhaduje se z historických dat – <b>směrnice přímky</b> proložené body (výnos akcie × výnos trhu, např. 60 měsíců); udává, jak se změní cena akcie, když výnos trhu vzroste/klesne o 1 %.</li></ul>`},
  {nadpis:'Stavebnicový a dividendový model', klic:true, html:T`$$NVK=r_f+r_{ob}+r_{fin}+r_{lik}$$
   <p>r<sub>ob</sub> = přirážka za <b>obchodní</b> riziko, r<sub>fin</sub> = za <b>finanční</b> riziko, r<sub>lik</sub> = za <b>sníženou likviditu</b>. Při analýze rizika se zohledňují i specifická rizika (kvalita managementu, diverzifikace, konkurence).</p>
   <p>Na základě očekávaných dividend (stálý nebo konstantně rostoucí dividendový výnos), E = emisní náklady na akcii:</p>
   $$NVK=\frac{D_k}{C_k-E}+g$$`}
 ],
 pojmy:[
  {pojem:'Riziko', definice:'Nebezpečí, že se skutečný vývoj odchýlí od očekávaného; měřitelné pravděpodobností.'},
  {pojem:'Nejistota (neurčitost)', definice:'Pravděpodobností neměřitelná; spojována s nepoznáním / náhodností.'},
  {pojem:'Velikost rizika', definice:'Pravděpodobnost vzniku × míra dopadu.'},
  {pojem:'Riziko ex post', definice:'Z historických výnosů; měří se rozptylem/směrodatnou odchylkou.'},
  {pojem:'Riziko ex ante', definice:'Z očekávaných výnosů a jejich pravděpodobností.'},
  {pojem:'Čistá historická výnosnost', definice:T`\(\frac{P_1-P_0+D-T-C}{P_0}\) – zahrnuje daně T a transakční náklady C.`},
  {pojem:'Systematické riziko', definice:'Tržní riziko celého trhu, nelze diverzifikovat; měří ho beta.'},
  {pojem:'Nesystematické riziko', definice:'Specifické pro podnik/instrument, lze odstranit diverzifikací.'},
  {pojem:'Zdroje systematického rizika', definice:'Trh jako celek, politické (i mezinárodní), měnové, ekonomické riziko.'},
  {pojem:'Druhy nesystematického rizika', definice:'Podnikatelské, finanční (bankrot), nelikvidity, managementu, konverze, předčasného odkupu.'},
  {pojem:'Beta faktor', definice:T`Citlivost výnosu akcie na trh: \(\beta=\frac{cov(r_i,r_m)}{\sigma_m^2}\).`},
  {pojem:'Záporná beta', definice:'Výnos instrumentu se pohybuje proti trhu.'},
  {pojem:'Korelační koeficient', definice:'Normovaná kovariance, interval ⟨−1; 1⟩.'},
  {pojem:'Kovariance', definice:'Míra vzájemné souvislosti dvou veličin.'},
  {pojem:'Diverzifikace', definice:'Rozložení investic snižující (nesystematické) riziko; při korelaci −1 lze riziko odstranit úplně.'},
  {pojem:'Zadlužená beta (Hamada)', definice:T`\(\beta_{lev}=\beta_{unlev}[1+(1-T)\frac{D}{E}]\).`},
  {pojem:'CRP', definice:'Country Risk Premium – riziková přirážka země.'},
  {pojem:'Náklad cizího kapitálu', definice:'Úroky.'},
  {pojem:'Náklad vlastního kapitálu', definice:'Požadovaná výnosnost: zhodnocení + riziková prémie + náklady obětované příležitosti.'},
  {pojem:'CAPM', definice:T`\(NVK=r_f+\beta(E(r_m)-r_f)\) – odměna jen za systematické riziko.`},
  {pojem:'Metoda analogie', definice:'Použití bety podobných obchodovaných podniků nebo odvětví (náhradní odhad bety).'},
  {pojem:'Stavebnicový model', definice:'NVK = rf + přirážka za obchodní + finanční riziko + sníženou likviditu.'},
  {pojem:'Dividendový model NVK', definice:T`\(NVK=\frac{D_k}{C_k-E}+g\), E = emisní náklady na akcii.`},
  {pojem:'Odhad bety (Brealey)', definice:'Směrnice regresní přímky výnosů akcie vůči výnosům trhu z historických dat.'}
 ],
 otazky:[
  {typ:'multi', otazka:'Co platí o riziku na rozdíl od nejistoty?', moznosti:['Riziko je měřitelné pravděpodobností','Velikost rizika = pravděpodobnost vzniku × míra dopadu','Nejistota je měřitelná pravděpodobností','Riziko vyjadřuje odchylku skutečného vývoje od očekávaného'], spravne:[0,1,3], vysvetleni:'Neurčitost/nejistota pravděpodobností měřit nelze.'},
  {typ:'multi', otazka:'Které nástroje přednáška uvádí jako transfer rizika na jiný subjekt?', moznosti:['Leasing','Faktoring a forfaiting','Franšíza','Termínové obchody (hedging)','Zvýšení základního kapitálu'], spravne:[0,1,2,3], vysvetleni:'Navýšení ZK riziko nepřenáší.'},
  {typ:'tf', otazka:'Pojištění/zajištění rizika snižuje potenciální výnos investice a zvyšuje její náklady.', spravne:[0], vysvetleni:'Přímo z přednášky.'},
  {typ:'single', otazka:'Riziko ex post vychází z…', moznosti:['historických (realizovaných) výnosových měr','očekávaných výnosů a pravděpodobností','ratingu emitenta','beta koeficientu odvětví'], spravne:[0], vysvetleni:'Ex ante vychází z očekávání a pravděpodobností.'},
  {typ:'multi', otazka:'Co zahrnuje čistá historická výnosnost (ex post)?', moznosti:['Prodejní a nákupní cenu','Důchod (dividenda, kupón)','Daňové náklady','Transakční náklady','Beta koeficient'], spravne:[0,1,2,3], vysvetleni:'(P₁ − P₀ + D − T − C) / P₀.'},
  {typ:'single', otazka:'Systematické riziko…', moznosti:['nelze odstranit diverzifikací','lze zcela odstranit diverzifikací','je specifické pro konkrétní podnik','se v oceňovacích modelech ignoruje'], spravne:[0], vysvetleni:'Je vyvoláno faktory celého trhu.'},
  {typ:'multi', otazka:'Které rizika patří mezi systematická?', moznosti:['Politické riziko','Riziko změn devizového kurzu','Ekonomické riziko','Riziko managementu','Riziko nelikvidity'], spravne:[0,1,2], vysvetleni:'Management a nelikvidita jsou nesystematická (specifická).'},
  {typ:'multi', otazka:'Které rizika patří mezi nesystematická?', moznosti:['Podnikatelské riziko','Finanční riziko (bankrot)','Riziko předčasného odkupu','Riziko konverze','Hrozba války ovlivňující celý trh'], spravne:[0,1,2,3], vysvetleni:'Válka působí na celý trh = systematické.'},
  {typ:'single', otazka:'Záporná hodnota beta faktoru znamená, že…', moznosti:['výnos instrumentu se pohybuje protichůdně k trhu','instrument je bez rizika','výnos se pohybuje stejným směrem jako trh, ale slaběji','akcie je nadhodnocená'], spravne:[0], vysvetleni:'Kladná = stejný směr, záporná = opačný.'},
  {typ:'multi', otazka:'Podnik má zadluženou betu 0,7. Co z toho plyne?', moznosti:['Je méně rizikový než trh','V krizi lze čekat, že jeho zisk bude zasažen méně než u ostatních','Měl by být zatížen nižším diskontem','Je stejně rizikový jako trh'], spravne:[0,1,2], vysvetleni:'β < 1 → méně rizikový, nižší diskont.'},
  {typ:'single', otazka:'Korelační koeficient nabývá hodnot z intervalu…', moznosti:['⟨−1; 1⟩','⟨0; 1⟩','⟨0; ∞)','(−∞; ∞)'], spravne:[0], vysvetleni:'Korelace je normovaná kovariance.'},
  {typ:'tf', otazka:'Při korelaci −1 se výnosy dvou investic vyvíjejí opačným směrem.', spravne:[0], vysvetleni:'Perfektní inverzní korelace.'},
  {typ:'tf', otazka:'V příkladu z přednášky (VŠČ a LL) diverzifikace odstranila veškeré riziko portfolia.', spravne:[0], vysvetleni:'Portfolio 5/6 VŠČ + 1/6 LL mělo σ = 0 %.'},
  {typ:'single', otazka:'Beta koeficient je definován jako…', moznosti:['kovariance aktiva s trhem / rozptyl trhu','rozptyl aktiva / rozptyl trhu','korelace aktiva s trhem × výnos trhu','směrodatná odchylka aktiva / výnos trhu'], spravne:[0], vysvetleni:'β = cov(rᵢ, r_m) / σ²_m.'},
  {typ:'multi', otazka:'Které složky obsahuje Damodaranova rozšířená rovnice nákladů vlastního kapitálu?', moznosti:['Bezriziková úroková míra','Zadlužená beta','Riziková přirážka země (CRP)','Rozdíl očekávaných inflací (π₁ − π₂)','Míra zadrženého zisku b'], spravne:[0,1,2,3], vysvetleni:'Dále R – ostatní přirážky a srážky. Míra zadrženého zisku do ní nepatří.'},
  {typ:'single', otazka:'Bety se podle přednášky obvykle přebírají…', moznosti:['z dat prof. Damodarana pro západní Evropu podle nejbližšího oboru','z výroční zprávy podniku','z ratingu státu','z ČNB'], spravne:[0], vysvetleni:'Damodaran – data podle odvětví.'},
  {typ:'single', otazka:'Zadlužená beta při vyšším zadlužení (D/E) a jinak stejných podmínkách…', moznosti:['roste','klesá','se nemění','klesne na nulu'], spravne:[0], vysvetleni:'βlev = βunlev · [1 + (1 − T) · D/E].'},
  {typ:'multi', otazka:'Co zahrnuje náklad vlastního kapitálu (požadovaná výnosnost)?', moznosti:['Zhodnocení vložených prostředků','Rizikovou prémii','Náklady obětované příležitosti','Úroky z úvěru'], spravne:[0,1,2], vysvetleni:'Úroky jsou náklad cizího kapitálu.'},
  {typ:'single', otazka:'Pro akciové společnosti obchodované na kapitálovém trhu se náklady vlastního kapitálu odhadují hlavně pomocí…', moznosti:['CAPM','stavebnicové metody','průměrné rentability','odvození z nákladů cizího kapitálu'], spravne:[0], vysvetleni:'Ostatní metody jsou pro neobchodované podniky.'},
  {typ:'multi', otazka:'Podle Kislingerové v modelu CAPM…', moznosti:['se investor diverzifikací zbaví specifického rizika','investoři jsou odměňováni jen za systematické riziko','aktivum nezkorelované s trhem má očekávaný výnos rovný bezrizikovému','záporně korelované aktivum má výnos vyšší než bezrizikový'], spravne:[0,1,2], vysvetleni:'Záporná korelace → očekávaný výnos nižší než bezrizikový.'},
  {typ:'single', otazka:'Podle Brealeyho odhad bety představuje…', moznosti:['směrnici přímky proložené body výnosů akcie a trhu','průsečík přímky s osou y','průměrný výnos akcie','rozptyl výnosů trhu'], spravne:[0], vysvetleni:'Směrnice = o kolik se v průměru změní výnos akcie při změně trhu o 1 %.'},
  {typ:'multi', otazka:'Které přirážky obsahuje stavebnicový model?', moznosti:['Za obchodní riziko','Za finanční riziko','Za sníženou likviditu','Za riziko země podle ratingu'], spravne:[0,1,2], vysvetleni:'NVK = rf + r_ob + r_fin + r_lik.'},
  {typ:'single', otazka:'V dividendovém modelu nákladů vlastního kapitálu NVK = Dₖ / (Cₖ − E) + g představuje E…', moznosti:['emisní náklady na akcii','EPS','očekávaný výnos trhu','vlastní kapitál'], spravne:[0], vysvetleni:'E = emisní náklady na akcii, Cₖ = tržní cena kmenové akcie.'},
  {typ:'multi', otazka:'Které metody slouží k odhadu nákladů VK u podniků, které nejsou obchodované na trhu?', moznosti:['CAPM s náhradními odhady beta (metoda analogie)','Stavebnicová metoda','Dividendový model','Průměrná rentabilita','Black-Scholesův model'], spravne:[0,1,2,3], vysvetleni:'B-S je model pro opce.'}
 ]
},
/* ===================================================================== 5 */
{
 id:'p5', title:'5 · Prémie za riziko (Damodaran), řízení rizik',
 desc:'SML a CML, koeficient alfa, charakteristická přímka, efektivní množina, předpoklady CAPM, riziková prémie země, pojištění, opce, forward, swapy, futures.',
 vyklad:[
  {nadpis:'Model CAPM: SML × CML', klic:true, html:T`<ul>
   <li>CAPM má dvě varianty: <b>SML</b> (Security Market Line – přímka cenných papírů) a <b>CML</b> (Capital Market Line – přímka kapitálového trhu). CML je často <b>nesprávně zaměňovaná</b> za SML.</li>
   <li><b>SML</b> slouží k oceňování <b>jednotlivých akcií</b> (a odhadu nákladů VK); představuje všechny kombinace výnosnosti a <b>bety</b>, při nichž jsou akcie <b>správně oceněné</b>.</li>
   <li><b>CML</b> vzniká kombinací <b>tržního portfolia s bezrizikovým aktivem</b>; body na CML mají lepší profil riziko–výnos než kterékoli portfolio na efektivní hranici.</li></ul>
   $$E(r_i)=r_f+\beta_i\cdot\left[E(r_m)-r_f\right]$$
   <ul><li>Bod <b>na</b> SML = správně oceněná; <b>nad</b> SML = <b>podhodnocená</b>; <b>pod</b> SML = <b>nadhodnocená</b>.</li></ul>`},
  {nadpis:'Koeficient alfa', klic:true, html:T`$$\alpha_i=r_i-E(r_i)=r_i-\left(r_f+[E(r_m)-r_f]\cdot\beta_i\right)$$
   <ul><li>α = 0 → správně oceněná → <b>držet</b>.</li>
   <li>α > 0 → <b>podhodnocená</b>, výhodná → <b>koupit</b>.</li>
   <li>α < 0 → <b>nadhodnocená</b>, drahá → <b>prodat</b>.</li></ul>`},
  {nadpis:'Charakteristická přímka', klic:true, html:T`<p>Graf <b>nadvýnosu akcie</b> (výnos nad bezrizikový) vůči <b>nadvýnosu tržního portfolia</b> z historických dat.</p>
   <ul><li><b>Úsek na ose y = α</b>. Teoreticky by α měla být 0; je-li záporná, investoři akcie prodají, cena klesne, nadvýnos vzroste a α se vrací k 0.</li>
   <li><b>Sklon (tg úhlu) = β</b>. β = 1 → oba nadvýnosy se mění úměrně; β > 1 → <b>agresivní</b> investice; β < 1 → <b>defenzivní</b> investice. Tohle riziko je dáno stavem celé ekonomiky = <b>systematické</b>.</li>
   <li><b>Vzdálenost bodů od přímky = nesystematické (nahodilé) riziko</b>.</li>
   <li><b>Celkové riziko = systematické (nevyhnutelné: změny v národním hospodářství, daňové reformy) + nahodilé (odstranitelné: stávky, konkurence)</b>. Nahodilé riziko lze snížit na nepatrnou úroveň náhodným výběrem <b>15–20 cenných papírů</b>.</li></ul>`},
  {nadpis:'Efektivní množina', html:T`<ul>
   <li>Z n cenných papírů lze vytvořit nekonečně mnoho portfolií = <b>přípustná množina</b>; investor nemusí hodnotit všechna.</li>
   <li><b>Věta o efektivní množině</b>: investor vybírá z portfolií, která nabízejí <b>maximální výnos při dané úrovni rizika</b> a <b>minimální riziko při dané úrovni výnosu</b> – to je <b>efektivní množina (efektivní hranice)</b>.</li>
   <li>Portfolio, které má při nižší výnosnosti vyšší riziko než jiné, je <b>neefektivní</b>.</li></ul>`},
  {nadpis:'Předpoklady CAPM', klic:true, html:T`<p>CAPM je speciální případ portfolia s rizikovými aktivy i <b>bezrizikovým aktivem</b> (bezriziková půjčka, státní dluhopis).</p>
   <ul><li>Kapitálový trh je <b>vysoce efektivní</b>, <b>nulové transakční náklady</b>, <b>žádné daně</b>.</li>
   <li>Žádný investor není tak velký, aby ovlivnil cenu akcií.</li>
   <li>Všichni investoři mají <b>stejnou množinu přípustných řešení</b>.</li>
   <li><b>Nesystematické riziko lze vhodnou volbou portfolia odstranit, a proto v CAPM nehraje roli.</b></li></ul>`},
  {nadpis:'Prémie za riziko země (Damodaran)', klic:true, html:T`<ul>
   <li>Dlouhodobá prémie, kterou získávají akcionáři na kapitálovém trhu; podle ratingových agentur se vztahuje k <b>velkým kotovaným společnostem</b> a <b>kmenovým akciím</b>; pro malé a střední firmy jsou prémie jiné. Přehled pro evropské státy je na webu <b>A. Damodarana</b>.</li>
   <li>Výpočet vychází z <b>rozdílu výnosností státních dluhopisů</b> dané země a „bezrizikové“ země s ratingem <b>AAA</b>; model využívá <b>spread i volatilitu trhů</b>.</li>
   <li>Lze ho použít pro jakoukoli zemi s ratingem; prémie je <b>obecná pro ratingovou skupinu</b> bez ohledu na podmínky v dané zemi.</li>
   <li>Dosahuje <b>nejvyšší hodnoty</b> rizikové prémie a je považován za <b>nejpřesnější a nejrealističtější</b>.</li></ul>
   $$E(R)=r_f+\beta\cdot RP_{CM}+RP_C\qquad RP_C=\text{riziko selhání země}\cdot\frac{\sigma_{akcie}}{\sigma_{dluhopisy}}$$
   <p>Riziko selhání země se odvozuje z trhu dluhopisů, volatility jsou směrodatné odchylky výnosností. Protože se volatility těžko zjišťují, Damodaran doporučuje poměr nahradit koeficientem <b>1,5</b>. Prémii trhu bere z dat <b>USA</b>. Překážky: volatilita akcií se liší mezi zeměmi i v čase; vyžaduje existenci obchodovaných vládních dluhopisů.</p>`},
  {nadpis:'Řízení rizik (Brealey) a pojištění', klic:true, html:T`<ul>
   <li>Transakce snižující riziko usnadňují finanční plánování a snižují možnost nežádoucího finančního deficitu; pojištění pomáhá monitorovat a motivovat manažery; manažeři používají <b>deriváty</b>.</li>
   <li><b>Pojištěním</b> podnik <b>přenáší riziko na pojišťovnu</b>. Výhody pojišťoven: <b>zkušenosti</b> s rizikem (lépe odhadnou pravděpodobnost ztráty), <b>odborníci</b> radící se snížením rizika, <b>spojování rizik</b> ve velkém diverzifikovaném portfoliu pojistek. Nevýhody přenosu se promítají do ceny pojistného.</li>
   <li><b>Katastrofické obligace</b> – pojišťovna sdílí riziko s investory; když nastane katastrofa, výnos obligací se sníží.</li>
   <li><b>Opce</b> – manažeři kupují opce na měny, úrokové míry a komodity (příklad: <b>Mexiko</b> se prodejními opcemi chránilo proti poklesu ceny ropy).</li></ul>`},
  {nadpis:'Forward, swapy, futures', klic:true, html:T`<ul>
   <li><b>Forward</b> – dohoda dvou stran koupit/prodat aktivum v budoucnu za cenu stanovenou dnes (opak <b>spotového</b> kontraktu). <b>Uzavřít forward nic nestojí.</b> Kupující = <b>dlouhá</b> pozice, prodávající = <b>krátká</b>. Dohodnutá cena = <b>dodací cena</b> (= forwardová cena při uzavření). Rozdíl spot a forward = forwardová <b>prémie/srážka</b> (odráží mj. úrokový diferenciál). Použití: <b>hedging</b> (typicky měnové riziko), <b>spekulace</b>, využití aktiva citlivého na čas.</li>
   <li>Termínovanou půjčku lze vytvořit tak, že si vypůjčíš na krátké a půjčíš na dlouhé období (resp. obráceně pro zafixování sazby výpůjčky).</li>
   <li><b>Swap</b> – termínovaná smlouva o výměně aktiv nebo finančních toků za předem stanovených podmínek:
    <ul><li><b>Úrokový (IRS)</b> – výměna úrokových plateb ze stejně velkých úvěrů ve <b>stejné měně</b>, platí se jen rozdíl úroků, <b>jistina se nesměňuje</b>.</li>
    <li><b>Měnový</b> – úrokové platby ve <b>dvou měnách</b>, na začátku a na konci i <b>výměna nominálních hodnot</b>.</li>
    <li><b>Devizový</b> – nákup měny za spotový kurz a zpětný prodej za předem dohodnutý termínový kurz.</li></ul></li>
   <li>Příklad IRS: úvěr PRIBOR + 5 %, swap – firma platí fixních 5 %, banka platí PRIBOR + 1 % → −(PRIBOR + 5 %) − 5 % + PRIBOR + 1 % = <b>−9 %</b> zafixovaných.</li>
   <li><b>Futures</b> – standardizovaná dohoda o směně podkladového aktiva v určité kvalitě a množství za pevnou cenu k datu dodání (komodity, měny, akcie, dluhopisy). Kupující má <b>povinnost odebrat</b>, prodávající <b>povinnost dodat</b>; v praxi se pozice často <b>uzavře prodejem kontraktu</b> – zisk/ztráta = rozdíl cen.</li></ul>`}
 ],
 pojmy:[
  {pojem:'SML', definice:'Přímka cenných papírů – kombinace výnosnosti a bety správně oceněných akcií; E(rᵢ) = rf + βᵢ(E(rm) − rf).'},
  {pojem:'CML', definice:'Přímka kapitálového trhu – kombinace tržního portfolia s bezrizikovým aktivem.'},
  {pojem:'Akcie nad SML', definice:'Podhodnocená → koupit (α > 0).'},
  {pojem:'Akcie pod SML', definice:'Nadhodnocená → prodat (α < 0).'},
  {pojem:'Koeficient alfa', definice:'αᵢ = rᵢ − E(rᵢ); rozdíl skutečné a rovnovážné výnosnosti.'},
  {pojem:'Charakteristická přímka', definice:'Nadvýnos akcie vs. nadvýnos trhu; úsek = α, sklon = β.'},
  {pojem:'Agresivní investice', definice:'β > 1 – vyšší riziko než trh.'},
  {pojem:'Defenzivní investice', definice:'β < 1 – nižší riziko než trh.'},
  {pojem:'Vzdálenost bodů od charakteristické přímky', definice:'Nesystematické (nahodilé) riziko.'},
  {pojem:'Celkové riziko', definice:'Systematické (nevyhnutelné) + nahodilé (odstranitelné) riziko.'},
  {pojem:'Kolik CP stačí na odstranění nahodilého rizika', definice:'Náhodný výběr 15–20 cenných papírů.'},
  {pojem:'Přípustná množina', definice:'Všechna (nekonečně mnoho) portfolia, která lze z n CP vytvořit.'},
  {pojem:'Efektivní množina (hranice)', definice:'Portfolia s max. výnosem při daném riziku a min. rizikem při daném výnosu.'},
  {pojem:'Předpoklady CAPM', definice:'Efektivní trh, nulové transakční náklady, žádné daně, nikdo neovlivní cenu, stejná množina přípustných řešení.'},
  {pojem:'Riziková prémie země (Damodaran)', definice:'Ze spreadu státních dluhopisů vůči zemi AAA a volatility trhů; E(R) = rf + β·RPcm + RPc.'},
  {pojem:'Koeficient 1,5 (Damodaran)', definice:'Náhrada poměru volatility akcií a vládních dluhopisů při výpočtu prémie země.'},
  {pojem:'Výhody pojišťoven', definice:'Zkušenosti s rizikem, kvalifikovaní odborníci, spojování rizik v diverzifikovaném portfoliu.'},
  {pojem:'Katastrofické obligace', definice:'Pojišťovna sdílí riziko s investory; při katastrofě klesne výnos obligací.'},
  {pojem:'Forward', definice:'Dohoda koupit/prodat aktivum v budoucnu za cenu stanovenou dnes; uzavření nic nestojí.'},
  {pojem:'Dodací cena', definice:'Cena dohodnutá ve forwardu – rovná se forwardové ceně při uzavření.'},
  {pojem:'Swap', definice:'Termínovaná smlouva o výměně aktiv či finančních toků za předem stanovených podmínek.'},
  {pojem:'Úrokový swap (IRS)', definice:'Výměna úrokových plateb ve stejné měně; platí se jen rozdíl, jistina se nesměňuje.'},
  {pojem:'Měnový swap', definice:'Úrokové platby ve dvou měnách + výměna nominálních hodnot na začátku a na konci.'},
  {pojem:'Devizový swap', definice:'Nákup měny za spot a zpětný prodej za předem dohodnutý termínový kurz.'},
  {pojem:'Futures', definice:'Standardizovaný kontrakt: povinnost odebrat/dodat aktivum za pevnou cenu k datu; často se uzavírá prodejem.'}
 ],
 otazky:[
  {typ:'multi', otazka:'Které dvě varianty rozlišuje model CAPM?', moznosti:['SML – přímka cenných papírů','CML – přímka kapitálového trhu','Charakteristická přímka','Přímka bodu zvratu'], spravne:[0,1], vysvetleni:'SML a CML; charakteristická přímka se týká odhadu α a β.'},
  {typ:'single', otazka:'Akcie leží nad přímkou SML. Je…', moznosti:['podhodnocená → koupit','nadhodnocená → prodat','správně oceněná → držet','bezriziková'], spravne:[0], vysvetleni:'Nad SML = vyšší skutečný výnos než rovnovážný, α > 0.'},
  {typ:'single', otazka:'Koeficient α je…', moznosti:['rozdíl skutečné výnosnosti a očekávané rovnovážné výnosnosti','sklon charakteristické přímky','tržní riziková prémie','podíl kovariance a rozptylu trhu'], spravne:[0], vysvetleni:'αᵢ = rᵢ − E(rᵢ). Sklon = β.'},
  {typ:'multi', otazka:'Kdy dává α doporučení „prodat“?', moznosti:['Když α < 0','Když je akcie nadhodnocená','Když akcie leží pod SML','Když α > 0'], spravne:[0,1,2], vysvetleni:'α > 0 = koupit.'},
  {typ:'multi', otazka:'Co platí o charakteristické přímce?', moznosti:['Úsek na ose nadvýnosu akcie je α','Tangens úhlu sklonu je β','Vzdálenost bodů od přímky je nesystematické riziko','Prochází vždy bodem [1; 1]'], spravne:[0,1,2], vysvetleni:'Prochází body nadvýnosu akcie a trhu, žádný pevný bod.'},
  {typ:'single', otazka:'Akcie s β > 1 je podle přednášky…', moznosti:['agresivní investice','defenzivní investice','bezriziková investice','nadhodnocená'], spravne:[0], vysvetleni:'β > 1 = vyšší riziko než trh = agresivní.'},
  {typ:'single', otazka:'Kolik cenných papírů stačí podle přednášky náhodně vybrat, aby se nahodilé riziko snížilo na nepatrnou úroveň?', moznosti:['15–20','2–3','50–100','nad 500'], spravne:[0], vysvetleni:'15–20 CP.'},
  {typ:'multi', otazka:'Které příklady uvádí přednáška pro nahodilé (odstranitelné) riziko?', moznosti:['Stávky','Konkurence','Změny v národním hospodářství','Daňové reformy'], spravne:[0,1], vysvetleni:'Změny v hospodářství a daňové reformy jsou systematické.'},
  {typ:'tf', otazka:'Přímka CML je totéž co přímka SML.', spravne:[1], vysvetleni:'Často se nesprávně zaměňují. CML = tržní portfolio + bezrizikové aktivum; SML = oceňování jednotlivých akcií podle bety.'},
  {typ:'multi', otazka:'Která portfolia tvoří efektivní množinu?', moznosti:['Ta s maximální výnosností při dané úrovni rizika','Ta s minimálním rizikem při dané výnosnosti','Ta s nejvyšším rizikem','Všechna přípustná portfolia'], spravne:[0,1], vysvetleni:'Věta o efektivní množině.'},
  {typ:'multi', otazka:'Které jsou předpoklady modelu CAPM?', moznosti:['Vysoce efektivní kapitálový trh','Nulové transakční náklady','Žádné daně','Všichni investoři mají stejnou množinu přípustných řešení','Investoři preferují nesystematické riziko'], spravne:[0,1,2,3], vysvetleni:'Nesystematické riziko v CAPM nehraje roli – lze ho odstranit.'},
  {typ:'tf', otazka:'V modelu CAPM hraje nesystematické riziko klíčovou roli při určení požadované výnosnosti.', spravne:[1], vysvetleni:'Lze ho odstranit diverzifikací, proto v CAPM nehraje žádnou roli.'},
  {typ:'single', otazka:'Rovnice Damodarana s prémií za riziko země:', moznosti:['E(R) = rf + β · RP_CM + RP_C','E(R) = rf + RP_C','E(R) = β · (rf + RP_C)','E(R) = rf + β · RP_C − RP_CM'], spravne:[0], vysvetleni:'CAPM rozšířený o rizikovou prémii země RP_C.'},
  {typ:'multi', otazka:'Co platí o metodě rizikové prémie země podle Damodarana?', moznosti:['Vychází z rozdílu výnosností státních dluhopisů země a země s ratingem AAA','Využívá spread i volatilitu trhů','Je považována za nejpřesnější a nejrealističtější','Výsledná prémie je obecná pro ratingovou skupinu','Dosahuje nejnižší hodnoty prémie'], spravne:[0,1,2,3], vysvetleni:'Dosahuje naopak nejvyšší hodnoty rizikové prémie.'},
  {typ:'single', otazka:'Čím Damodaran doporučuje pro zjednodušení nahradit poměr volatility akcií a vládních dluhopisů?', moznosti:['Koeficientem 1,5','Koeficientem 1','Betou odvětví','Inflací'], spravne:[0], vysvetleni:'Poměr ≈ 1,5.'},
  {typ:'multi', otazka:'Jaké výhody mají pojišťovny při nesení rizika oproti podnikům?', moznosti:['Velké zkušenosti s podobným rizikem','Kvalifikovaní pracovníci pro rady ke snížení rizika','Spojování rizik ve velkém diverzifikovaném portfoliu pojistek','Přenos rizika je pro podnik zdarma'], spravne:[0,1,2], vysvetleni:'Nevýhody přenosu rizika se promítají do ceny pojistného.'},
  {typ:'single', otazka:'Co se stane s výnosem katastrofických obligací, když nastane katastrofická událost?', moznosti:['Výnos se sníží','Výnos se zvýší','Obligace se automaticky přemění na akcie','Nic, výnos je garantovaný'], spravne:[0], vysvetleni:'Investoři sdílí riziko s pojišťovnou.'},
  {typ:'multi', otazka:'Co platí o forwardovém kontraktu?', moznosti:['Uzavřít ho nic nestojí','Strana, která se zavazuje koupit, zaujímá dlouhou pozici','Dohodnutá cena se nazývá dodací cena','Je standardizovaný a obchodovaný na burze'], spravne:[0,1,2], vysvetleni:'Standardizované a burzovní jsou futures.'},
  {typ:'multi', otazka:'K čemu lze forwardy použít?', moznosti:['K zajištění (hedgingu) proti riziku, typicky měnovému','Ke spekulaci','K využití kvality aktiva citlivého na čas','K získání hlasovacího práva v a.s.'], spravne:[0,1,2], vysvetleni:'Hlasovací právo dává akcie.'},
  {typ:'single', otazka:'U kterého swapu se na začátku a na konci vyměňují i nominální hodnoty?', moznosti:['Měnového swapu','Úrokového swapu (IRS)','Žádného','Futures'], spravne:[0], vysvetleni:'U IRS se jistina nesměňuje, platí se jen rozdíl úroků.'},
  {typ:'tf', otazka:'U úrokového swapu si strany vyplácí jen rozdíl dohodnutých úroků a nikdo nikomu nedluží jistinu.', spravne:[0], vysvetleni:'Úvěry jsou „teoretické“, stejně velké a ve stejné měně.'},
  {typ:'single', otazka:'Firma má úvěr za PRIBOR + 5 %, uzavře IRS: platí bance fixních 5 % a dostává PRIBOR + 1 %. Jakou sazbu má zafixovanou?', moznosti:['9 %','5 %','6 %','10 %'], spravne:[0], vysvetleni:'−(PRIBOR + 5) − 5 + (PRIBOR + 1) = −9 %.'},
  {typ:'multi', otazka:'Co platí o futures?', moznosti:['Kupující má povinnost odebrat podkladové aktivum v den dodání','Prodávající má povinnost aktivum dodat','V praxi se pozice často uzavírá prodejem kontraktu','Kupující má jen právo, ne povinnost'], spravne:[0,1,2], vysvetleni:'Právo bez povinnosti dává opce.'},
  {typ:'single', otazka:'Devizový swap znamená…', moznosti:['nákup měny za spotový kurz a zpětný prodej za předem dohodnutý termínový kurz','výměnu úrokových plateb ve stejné měně','výměnu akcií za dluhopisy','opci na nákup měny'], spravne:[0], vysvetleni:'Definice devizového (foreign exchange) swapu.'}
 ]
}
];
