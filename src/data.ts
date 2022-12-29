const data = [
    {
        time: 0,
        subtitles: [],
        captions: [],
        vocabulary: []
    },
    {
        time: 5.25,
        subtitles: ["- My bad! Everybody all right?", "- I'll go get my mommy!"],
        captions: ["- My bad! Everybody all right?", "- I'll go get my mommy!"],
        vocabulary: [
            ["My bad", "Used to acknowledge responsibility for a mistake. \"Sorry about the confusion. It's my bad!\""]
        ]
    },
    {
        time: 9.5,
        subtitles: ["He's an asshole!"],
        captions: ["He's an asshole!"],
        vocabulary: []
    },
    {
        time: 19.6,
        subtitles: ["- What's your name, boy?", "- Michel."],
        captions: ["- What's your name, boy?", "- Michel."],
        vocabulary: []
    },
    {
        time: 24.8,
        subtitles: ["- (Do) you know who I am?", "- My papa says you are an asshole!"],
        captions: ["- Do you know who I am?", "- My dad says you are an asshole!"],
        vocabulary: []
    },
    {
        time: 28.3,
        subtitles: ["That's not really a nice word to call a person, is it?"],
        captions: ["That's not really a nice word to call a person, is it?"],
        vocabulary: []
    },
    {
        time: 31.5,
        subtitles: ["- Asshole?", "- Yeah, cause that could make someone very angry!"],
        captions: ["- Asshole?", "- Yeah, cause that could make someone very angry!"],
        vocabulary: []
    },
    {
        time: 36.2,
        subtitles: ["- And you know, maybe hurt their feelings!", "- You behave like an asshole!"],
        captions: ["- And you know, maybe hurt their feelings!", "- You behave like an asshole!"],
        vocabulary: []
    },
    {
        time: 44.3,
        subtitles: ["- All right, uhh, (do you) you know Aaron?", "- Oui, le petit asshole."],
        captions: ["- All right, do you know Aaron?", "- Yes, the small asshole."],
        vocabulary: [
            ["Oui [French]", "Yes"],
            ["Petit [French]", "Small"],
            ["Le petit asshole [French/English]", "The little asshole (the kid is mixing French and English)"]
        ]
    },
    {
        time: 51.2,
        subtitles: ["Well uhh, (he) seems to be a pretty good kid uhh."],
        captions: ["Well, he seems to be a pretty good kid."],
        vocabulary: []
    },
    {
        time: 56.6,
        subtitles: ["- (I) just wanna ask you to lay off of him a little bit.", "- Why asshole?"],
        captions: ["- I just want to ask you to lay off of him a little bit.", "- Why asshole?"],
        vocabulary: [
            ["To lay off of someone", "To leave someone alone, to stop bothering/attacking/hurting someone"]
        ]
    },
    {
        time: 64,
        subtitles: ["- You (are) gonna stop calling me that!", "- Asshole!"],
        captions: ["- You are gonna stop calling me that!", "- Asshole!"],
        vocabulary: []
    },
    {
        time: 67.1,
        subtitles: ["- That's not my name!", "- Asshole!"],
        captions: ["- That's not my name!", "- Asshole!"],
        vocabulary: []
    },
    {
        time: 74.8,
        subtitles: ["Call me a(n) asshole, one more time!"],
        captions: ["Call me an asshole, one more time!"],
        vocabulary: []
    },
    {
        time: 82.1,
        subtitles: ["Ass..."],
        captions: ["Asshole"],
        vocabulary: []
    },
    {
        time: 87.5,
        subtitles: ["(What) about you thickness?"],
        captions: ["What about you thickness?"],
        vocabulary: [
            ["Thickness", "Fat/dumb"],
            ["About you thickness?", "What about you fat/stupid boy?"]
        ]
    },
    {
        time: 90.4,
        subtitles: ["Goggles?"],
        captions: ["Goggles?"],
        vocabulary: [
            ["Goggles", "Special glasses that fit close to the face to protect the eyes, often used for swimming"]
        ]
    },
    {
        time: 92,
        subtitles: ["Hancock, you son of a gun, I knew you'd come, ask Mary!"],
        captions: ["Hancock, you son of a gun, I knew you'd come, ask Mary!"],
        vocabulary: [
            ["Son of a gun", "Son of a gun is an exclamation in American and British English. It can be used encouragingly or to compliment, as in \"You son of a gun, you did it!\""]
        ]
    },
    {
        time: 96.5,
        subtitles: ["I had a feeling, I said he heard me, he's ready for a change!"],
        captions: ["I had a feeling, I said he heard me, he's ready for a change!"],
        vocabulary: []
    },
    {
        time: 99.55,
        subtitles: ["This is great! Did you do this? Did you come in a little hot?"],
        captions: ["This is great! Did you do this? Did you come in a little hot?"],
        vocabulary: [
            ["To come in hot", "He's refering to Hancock's landing, the street got a little destroyed when he landed"]
        ]
    },
    {
        time: 102.1,
        subtitles: ["- Yeah, (I'll meet) I'll meet you in the house!", "- This is the very place for us to start, I know you don't drive!", "- Aww, Dammit!"],
        captions: ["- Yeah, I'll meet you in the house!", "- This is the very place for us to start, I know you don't drive!", "- Dammit!"],
        vocabulary: [
            ["Very", "Exact/precise"],
            ["You don't drive", "Hancock doesn't drive or own a car because he always flies"]
        ]
    },
    {
        time: 108.5,
        subtitles: ["All right, you're all right, you're all right, you're all right!"],
        captions: ["All right, you're all right, you're all right, you're all right!"],
        vocabulary: []
    },
    {
        time: 112,
        subtitles: ["Mommy, Mommy!"],
        captions: ["Mommy, Mommy!"],
        vocabulary: []
    },
    {
        time: 115,
        subtitles: ["Oh stop crying punkass, go ahead!"],
        captions: ["Oh stop crying punkass, go ahead!"],
        vocabulary: [
            ["Punkass", "An obnoxious or stupid person unworthy of respect"]
        ]
    },
    {
        time: 119.2,
        subtitles: ["- (This is) not ok, ok?", "- He (is) all right! He...", "- (This is) really not ok!"],
        captions: ["- This is not ok, ok?", "- He is all right!", "- This is really not ok!"],
        vocabulary: []
    },
    {
        time: 123.95,
        subtitles: ["This is some of the stuff we're gonna work on!"],
        captions: ["This is some of the stuff we're gonna work on!"],
        vocabulary: []
    },
    {
        time: 125.5,
        subtitles: ["How do you think that conversation is gonna go down with his mom?"],
        captions: ["How do you think that conversation is gonna go down with his mom?"],
        vocabulary: [
            ["To go down", "To be received in a particular way: \"The joke didn't go down very well!\""]
        ]
    },
    {
        time: 128.8,
        subtitles: ["Landing like that in the street is also on the uncool side!"],
        captions: ["Landing like that in the street is also on the uncool side!"],
        vocabulary: []
    },
    {
        time: 131.69,
        subtitles: ["No that was, that was already like that when I got here, Ray!"],
        captions: ["No, that was already like that when I got here, Ray!"],
        vocabulary: []
    },
    {
        time: 135.4,
        subtitles: ["I live here, I know what the street's like!"],
        captions: ["I live here, I know what the street's like!"],
        vocabulary: []
    }
];

export default data;