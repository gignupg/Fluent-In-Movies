const subtitles = [
    {
        en: [],
        es: [],
        de: []
    },
    {
        en: ["- My bad! Everybody all right?", "- I'll go get my mommy!"],
        es: ["- ¡Culpa mía! ¿Todos bien?", "- ¡Voy a buscar a mi mamá!"],
        de: ["- Mein Fehler! Alle in Ordnung?", "- Ich hole meine Mama!"]
    },
    {
        en: ["He's an asshole!"],
        es: ["¡Es un imbécil!"],
        de: ["Er ist ein Arschloch!"]
    },
    {
        en: ["- What's your name, boy?", "- Michel."],
        es: ["- ¿Cómo te llamas, chico?", "- Michel."],
        de: ["- Wie ist dein Name, Junge?", "- Michel."]
    },
    {
        en: ["- (Do) you know who I am?", "- My papa says you are an asshole!"],
        es: ["- ¿Sabes quién soy?", "- ¡Mi papá dice que eres un imbécil!"],
        de: ["- Weißt du wer ich bin?", "- Mein Papa sagt, du bist ein Arschloch!"]
    },
    {
        en: ["That's not really a nice word to call a person, is it?"],
        es: ["Esa no es realmente una buena palabra para llamar a una persona, ¿verdad?"],
        de: ["Das ist nicht wirklich ein nettes Wort, eine Person so zu rufen, oder?"]
    },
    {
        en: ["- Asshole?", "- Yeah, cause that could make someone very angry!"],
        es: ["- ¿Imbécil?", "- ¡Sí, porque eso podría enojar mucho a alguien!"],
        de: ["- Arschloch?", "- Ja, weil das könnte jemanden sehr wütend machen!"]
    },
    {
        en: ["- And you know, maybe hurt their feelings!", "- You behave like an asshole!"],
        es: ["- Y ya sabes, ¡quizás herir sus sentimientos!", "- ¡Te comportas como un imbécil!"],
        de: ["- Und weißt du, vielleicht seine Gefühle verletzen!", "- Du benimmst dich wie ein Arschloch!"]
    },
    {
        en: ["- All right, uhh, (do you) you know Aaron?", "- Oui, le petit asshole."],
        es: ["- Está bien, ¿conoces a Aaron?", "Sí, el pequeño imbécil?"],
        de: ["- In Ordnung, äh, (kennst du) Aaron?", "Ja, das kleine Arschloch?"]
    },
    {
        en: ["Well uhh, (he) seems to be a pretty good kid uhh."],
        es: ["Pues, parece ser un niño bastante bueno."],
        de: ["Nun, äh, (er) scheint ein ziemlich guter Junge zu sein."]
    },
    {
        en: ["- (I) just wanna ask you to lay off of him a little bit.", "- Why asshole?"],
        es: ["- Solo quiero pedirte que lo dejes un poco.", "- ¿Por qué imbécil?"],
        de: ["- Ich möchte dich nur bitten ihn ein bisschen in Ruhe zu lassen.", "- Warum Arschloch?"]
    },
    {
        en: ["- You (are) gonna stop calling me that!", "- Asshole!"],
        es: ["- ¡Vas a dejar de llamarme así!", "- Imbécil!"],
        de: ["- Du wirst aufhören, mich so zu nennen!", "- Arschloch!"]
    },
    {
        en: ["- That's not my name!", "- Asshole!"],
        es: ["- ¡Ese no es mi nombre!", "- Imbécil!"],
        de: ["- Das ist nicht mein Name!", "- Arschloch!"]
    },
    {
        en: ["Call me a(n) asshole, one more time!"],
        es: ["¡Llámame imbécil, una vez más!"],
        de: ["Nenn mich noch einmal Arschloch!"]
    },
    {
        en: ["Ass..."],
        es: ["Imbéc..."],
        de: ["Arsch..."]
    },
    {
        en: ["(What) about you thickness?"],
        es: ["¿Qué hay de ti, gordo?"],
        de: ["Was ist mit dir, Fettsack?"]
    },
    {
        en: ["Goggles?"],
        es: ["¿Gafas?"],
        de: ["Brillenschlange?"]
    },
    {
        en: ["Hancock, you son of a gun, I knew you'd come, ask Mary!"],
        es: ["Hancock, hijo de puta, sabía que vendrías, ¡pregúntaselo a Mary!"],
        de: ["Hancock, du Gauner, ich wusste du würdest kommen, frag Mary!"]
    },
    {
        en: ["I had a feeling, I said he heard me, he's ready for a change!"],
        es: ["Tuve un presentimiento, dije que me escuchó, ¡está listo para un cambio!"],
        de: ["Ich hatte es im Gefühl, ich sagte mir, er hat mich gehört, er ist bereit für eine Veränderung!"]
    },
    {
        en: ["This is great! Did you do this? Did you come in a little hot?"],
        es: ["¡Esto es genial! ¿Tú hiciste esto? ¿Llegaste un poco caliente?"],
        de: ["Das ist toll! Hast du das gemacht? Bist du ein bisschen heiß reingekommen/gelandet?"]
    },
    {
        en: ["- Yeah, (I'll meet) I'll meet you in the house!", "- This is the very place for us to start, I know you don't drive!", "- Aww, Dammit!"],
        es: ["- ¡Sí, te veré en la casa!", "- Este es el lugar perfecto para que empecemos, ¡sí que no conduces!", "- ¡Ay, maldita sea!"],
        de: ["- Ja, ich treffe dich im Haus!", "- Das ist genau der richtige Ort für uns zum Anfangen, ich weiß, du fährst kein Auto!", "- Oh, verdammt!"]
    },
    {
        en: ["All right, you're all right, you're all right, you're all right!"],
        es: ["¡Está bien, está bien, está bien, está bien!"],
        de: ["In Ordnung, alles in Ordnung, alles in Ordnung, alles in Ordnung!"]
    },
    {
        en: ["Mommy, Mommy!"],
        es: ["¡Mamá, Mamá!"],
        de: ["Mama, Mama!"]
    },
    {
        en: ["Oh stop crying punkass, go ahead!"],
        es: ["Oh, deja de llorar idiota, ¡adelante!"],
        de: ["Oh, hör auf zu heulen du Kobold, vorwärts!"]
    },
    {
        en: ["- (This is) not ok, ok?", "- He (is) all right! He...", "- (This is) really not ok!"],
        es: ["- Esto no está bien, ¿de acuerdo?,", "- ¡El está bien! Él...", "- ¡Esto realmente no está bien!"],
        de: ["- Das ist nicht ok, ok?", "- Er ist ok! Er...", "- Das ist wirklich nicht ok!"]
    },
    {
        en: ["This is some of the stuff we're gonna work on!"],
        es: ["¡Estas son algunas de las cosas en las que vamos a trabajar!"],
        de: ["Das sind einige der Dinge, an denen wir arbeiten werden!"]
    },
    {
        en: ["How do you think that conversation is gonna go down with his mom?"],
        es: ["¿Cómo crees que irá esa conversación con su mamá?"],
        de: ["Wie denkst du, wird das Gespräch mit seiner Mutter laufen?"]
    },
    {
        en: ["Landing like that in the street is also on the uncool side!"],
        es: ["¡Aterrizar así en la calle también está en el lado desagradable!"],
        de: ["So auf der Straße zu landen ist auch uncool!"]
    },
    {
        en: ["No that was, that was already like that when I got here, Ray!"],
        es: ["¡No, eso ya era así cuando llegué aquí, Ray!"],
        de: ["Nein, das war schon so, als ich hierher kam, Ray!"]
    },
    {
        en: ["I live here, I know what the street's like!"],
        es: ["¡Vivo aquí, sé cómo es la calle!"],
        de: ["Ich wohne hier, ich kenne die Straße!"]
    }
];
export default subtitles;