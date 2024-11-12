# Peticions HTTP

## Introducció - Peticions HTTP i AJAX

Abans de començar amb aquesta activitat, que en el fons ens faran aprofundir en l'ús de l'asincronia, és important que entenguem què són les **peticions HTTP** i com funcionen.

Un navegador, durant la càrrega d'una pàgina, sol realitzar múltiples peticions HTTP a un servidor per sol·licitar els fitxers que necessita renderitzar a la pàgina. Per exemple, si obrim una pàgina, les peticions que faria el navegador podrien ser les següents:

- El document .html de la pàgina (aquí trobarem referències a altres fitxers)
- La fulla d'estils .css (probablement hi hagi aquí més referències a altres fitxers)
- Imatges .jpg, .png, .webp o altres
- Scripts .js (aquí de nou, més referències a altres fitxers)
- Tipografies .ttf, .woff o .woff2

Per tant, quan carreguem una pàgina (primera petició), en realitat estem realitzant múltiples peticions posteriorment.

Consulta el següent recurs i mira de donar resposta a les següents preguntes:

- [Peticions HTTP](https://lenguajejs.com/javascript/peticiones-http/ajax/)

1. Quina va ser la gran aportació d'**AJAX**?
2. Fem servir actualment '**AJAX**' per realitzar peticions HTTP? Què seria més encertat com a nom actualment?
3. Quin és el nou sistema de peticions HTTP (sense llibreries addicionals) que s'utilitza avui en dia?
4. Quines alternatives externes tenim? 
5. Diferència entre '**MPA**' i '**SPA**'? 

## XMLHttpRequest

L'objecte **XMLHttpRequest** es va crear originalment per realitzar peticions HTTP a fitxers .xml externs des de Javascript. Actualment, es realitzen les mateixes operacions però amb fitxers **JSON**, ja que són molt més habituals a l'ecosistema Javascript com a emmagatzematge lleuger de dades.

El mecanisme principal de peticions HTTP mitjançant **XMLHttpRequest** és molt senzill, tot i que es torna una mica més complex a mesura que anem realitzant comprovacions i detalls relacionats, ja que es realitza tot més a baix nivell que el seu equivalent modern **fetch**.

És important conèixer la seva existència i pots consultar mes detalls a la següent pàgina:

- [XMLHttpRequest - Lenguaje JS](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest)

No obstant això, actualment és més freqüent intuitiu fer ús del **fetch**, ja que és una API més actual i moderna que fa ús de **Promeses** i arribem a gestionar els mateix de forma més senzilla. Anem a centrar-nos doncs en aquesta API.

## Fetch

Fetch és el nom d'una API més moderna per a Javascript amb la qual podem realitzar peticions HTTP asíncrones utilitzant promeses i de forma que el codi sigui una mica més senzill i menys "verbós" (innecessàriament llarg). La forma de realitzar una petició és molt senzilla, bàsicament es tracta de cridar a fetch i passar-li com a paràmetre la URL de la petició a realitzar:

```javascript
const promise = fetch("/robots.txt");

promise.then(function(response) {
   /* ... */
});
```

El **fetch() retornarà una promesa** que serà acceptada quan rebi una resposta i només serà rebutjada si hi ha un error de xarxa o si per alguna raó no es va poder completar la petició.

Fes una lectura del següent recurs fent especial atenció a les seccions de **Fetch usando .then()** i **Fetch usando async/await**:

- [Fetch - Lenguaje JS](https://lenguajejs.com/javascript/peticiones-http/fetch/)

## JSON

**JSON** són les sigles de **JavaScript Object Notation**, i no és més que un format lleuger de dades, amb una estructura (notació) específica, que és totalment compatible de forma nativa amb Javascript. Com el seu propi nom indica, JSON es basa en la sintaxi que té Javascript per crear objectes.

Si comparem un JSON amb un objecte JavaScript, apareixen algunes lleugeres diferències i matisos:

- Les propietats de l'objecte han d'estar entrecomillades amb "cometes dobles"
- Els textos `string` han d'estar entrecomillats amb "cometes dobles"
- Només es poden emmagatzemar tipus com `string`,`number`,`object`,`array`, `boolean` o `null`.
- No és possible emmagatzemar tipus de dades com `function`, `date`, `regex` entre d'altres en un JSON.
- Tampoc és possible afegir **comentaris** en un JSON.

Per consultar més detalls sobre JSON, pots consultar el següent recurs:

- [JSON - Lenguaje JS](https://lenguajejs.com/javascript/objetos/json/#leyendo-json-externo)




