import "./screen.css"

const VirtualScreen = ({text}) => {

    // paragraph to write
    const paragraph = [
        "Birds chirped in the morning, sun rising over hills, painting skies with hues of gold an orange, picturesque dawn.",
        "Waves whisperes secrets to the shore, sand absorbing storis of the vast, mysterious ocean, timeless tales.",
        'City ligths twinkled like stars. streets alive with the rhythm of footstep, dreams pulsting in every corner.',
        'Leaves rustled in the breeze, trees swaying in a dance of nature, harmonious melodies sung by the wind.',
        "Raindrops tapped on windows, a symphony of nature's percussion, composing melodies of tranquility.",
        "Mountains stood tall and majestic, guardians of ancient lands, their peaks touching the heavens.",
        "Flames flickered in the fireplace, casting warm shadows, a sanctuary from the cold of winter nights.",
        "Flowers bloomed in vibrant colors, petals unfurling like whispers of love, beauty unfolding with each sunrise.",
        "Snowflakes danced in the air, swirling and twirling in a graceful ballet, a winter wonderland's enchanting charm.",
        "Stars adorned the night sky, guiding lost souls, constellations weaving tales of the cosmos, infinite possibilities."
    ]

    const initialMessge = paragraph[0];

    return( 
    <div className="screen">
        <p>{initialMessge}</p>    
    </div>
    )
}

export default VirtualScreen