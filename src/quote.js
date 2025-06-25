var song = Array(
    `i do not know the rest
- Évariste Galois`,
    `to be attacked by the enemy is a good thing
- Mao Zedong`,
    `bombard the headquarters
- Mao Zedong`,
    `there is chaos under heaven and the situation is excellent
- Mao Zedong`,
    `man infinitely surpasses man
- Blaise Pascal`,
    `the real is rational
- Georg Frederic Hegel`,
    `great thoughts spring from the heart
- Luc de Clapiers
`,
    `we must welcome big concepts
- Grace Murray Hopper`,
    `every rupture begins through a rupture with oneself
- Alain Badiou`,
    `there is physical reality and there is the miracle of explanation
- Albert Lautman`,
    `one more effort if you wish to become republicans
- Donatien Alphonse François`,
    `you don't want to know
- Richard Nixon`,
    `you may think you know everything. don't
- Jacques Lacan`,
    `that faith be analyzable does not necessarily imply a method for getting by without it
- Julia Kristeva`,
    `i am against any reconciliation with Israel
- Sayyed Hassan Nasrallah`,
    `i want a poet to break out of his or her poetic identity
- Jeremy Halvard Prynne`,
    `the sea rises insensibly in silence
- Alexandre Grothendieck`,
    `i am disappearing
- Jacques Lacan`,
    `against the disease of writing one must take special precautions
- Peter Abelard`,
    `what is fixed is dead, what is not fixed is nothing
- Paul Valéry`,
    `what appears as the positive is essentially the negative
- Theodore Adorno`,
    `hope is reactionary
- Ray Brassier`,
    `if you can find me, you're free to argue as much as you like
- Primus`
)

var newQuote = () => {
    var randomSong = song[Math.floor(Math.random() * song.length)];
    var blocks = document.getElementsByClassName('quoteme');
    for (b of blocks) {
        b.textContent = randomSong;
    }
}

setInterval(function() {
    newQuote();
}, 60 * 1000);

newQuote()
