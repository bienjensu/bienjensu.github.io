var song = Array(
    `i do not know the rest<br>
- Évariste Galois`,
    `to be attacked by the enemy is a good thing<br>
- Mao Zedong`,
    `bombard the headquarters<br>
- Mao Zedong`,
    `there is chaos under heaven and the situation is excellent<br>
- Mao Zedong`,
    `man infinitely surpasses man<br>
- Blaise Pascal`,
    `the real is rational<br>
- Georg Frederic Hegel`,
    `great thoughts spring from the heart<br>
- Luc de Clapiers
`,
    `we must welcome big concepts<br>
- Grace Murray Hopper`,
    `every rupture begins through a rupture with oneself<br>
- Alain Badiou`,
    `there is physical reality and there is the miracle of explanation<br>
- Albert Lautman`,
    `one more effort if you wish to become republicans<br>
- Donatien Alphonse François`,
    `you don't want to know<br>
- Richard Nixon`,
    `you may think you know everything. don't<br>
- Jacques Lacan`,
    `that faith be analyzable does not necessarily imply a method for getting by without it<br>
- Julia Kristeva`,
    `i am against any reconciliation with Israel<br>
- Sayyed Hassan Nasrallah`,
    `i want a poet to break out of his or her poetic identity<br>
- Jeremy Halvard Prynne`,
    `the sea rises insensibly in silence<br>
- Alexandre Grothendieck`,
    `i am disappearing<br>
- Jacques Lacan`,
    `against the disease of writing one must take special precautions<br>
- Peter Abelard`,
    `what is fixed is dead, what is not fixed is nothing<br>
- Paul Valéry`,
    `what appears as the positive is essentially the negative<br>
- Theodore Adorno`
)

var randomSong = song[Math.floor(Math.random() * song.length)];
document.getElementsByClassName('quoteblock')[0].innerHTML = randomSong;
