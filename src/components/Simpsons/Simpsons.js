import {Simpson} from "../Simpson/Simpson";


const Simpsons = () => {
    const simpsons = [
        {
            id:1,
            name: 'Bart',
            surname: 'Simpson',
            age: 14,
            gender: 'male',
            img: 'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png',
            description:
                'Bartholomew JoJo "Bart" Simpson (born Feburary 23 or April 1, 1980)[7]is the mischievous, ' +
                'rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in' +
                ' The Simpsons. He is the only son of Homer and Marge Simpson, ' +
                'and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", ' +
                'after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics,' +
                ' such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". ' +
                'Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. ' +
                'Bart is loosely based on Matt Groening and his older brother, Mark Groening.'
        },{
            id:2,
            name: 'Lisa',
            surname: 'Simpson',
            gender: 'female',
            age: 8,
            img: 'https://static.wikia.nocookie.net/simpsons/images/2/22/Cool_Lisa_Tapped_Out.png',
            description: 'Lisa Marie Simpson (born May 9, 1983)[9] is the elder daughter and middle child of the Simpson' +
                ' family and one of the two tritagonists (along with Marge,) of The Simpsons series. ' +
                'In "Homer and Lisa Exchange Cross Words" she is also known as Lisa Bouvier. She was named after a train' +
                ' called Lil\' Lisa on her parents\' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds ' +
                'the standard achievement of the intelligence level of children her age. Not to everyone\'s surprise, ' +
                'she is also the moral center of her family. '
        },{
            id:3,
            name: 'Homer',
            surname: 'Simpson',
            gender: 'male',
            age: 67,
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png',
            description:
                "Homer Jay Simpson (born May 12, 1956)[40] is a man from Springfield." +
                " He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson." +
                " Homer is overweight (said to be 239 pounds)[41], lazy, and often ignorant to the world around him. " +
                "Although he has many flaws, he has shown to have great caring, " +
                "love, and even bravery to those he cares about and, sometimes, even others he doesn't." +
                ""
        },{
            id:4,
            name: 'Marge',
            surname: 'Simpson',
            gender: 'female',
            age: 39,
            img: 'https://static.wikia.nocookie.net/simpsons/images/7/71/Marge_tennis_tapped_out.png',
            description:
                'Marjorie Jacqueline "Marge" Simpson (née Bouvier)[11] is the homemaker and matriarch of the' +
                ' Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her' +
                ' husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family' +
                ' and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order' +
                ' in the Simpson household. '
        },{
            id:5,
            name: 'Abe',
            surname: 'Simpson',
            gender: 'male',
            age: 97,
            img: 'https://static.wikia.nocookie.net/simpsons/images/b/ba/Hellfish_Abe_Unlock.png',
            description: 'Abraham Jebediah "Abe" Simpson II, commonly known as Grampa Simpson or simply Grampa, ' +
                'is a major recurring character in The Simpsons and a supporting character in The Simpsons Movie. ' +
                'He is the oldest patriarch of the Simpson family, ex-husband of Mona Simpson, father of Homer Simpson, ' +
                'Herbert Powell and Abbey, father-in-law of Marge Simpson and paternal grandfather of Bart, ' +
                'Lisa and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier, his daughter-in-law\'s ' +
                'mother (which would have made Marge and Homer step siblings).\n' +
                '\n'
        }
    ]

    return (
        <div className={'father'}>
            {simpsons.map(simpson  => <Simpson key={simpson.id} simpson={simpson} />)}
        </div>
    );
};

export default Simpsons;