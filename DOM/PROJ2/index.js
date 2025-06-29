const inputEl = document.getElementById('input')
const infoTextEl = document.getElementById('info-text')
const meaningContainerEl = document.getElementById('meaning-container')
const titleEl = document.getElementById('title')
const meaningEl = document.getElementById('meaning')
const audioEl = document.getElementById('audio')

async function fetchApi(word) {
    try {
        infoTextEl.style.display = 'block';
        meaningContainerEl.style.display = 'none';
        infoTextEl.innerHTML = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) => res.json())
        console.log(result);

        if (result.title) {
            meaningContainerEl.style.display = 'block';
            infoTextEl.style.display = 'none';
            titleEl.innerHTML = word;
            meaningEl.innerHTML = 'N/A'
            audioEl.style.display = 'none'
        } else {
            infoTextEl.style.display = 'none'
            meaningContainerEl.style.display = 'block'
            titleEl.innerText = result[0].word;
            meaningEl.innerText = result[0].meanings[0].definitions[0].definition;


            const phonetics = result[0].phonetics;
            first = phonetics[0]?.audio || '';
            second = phonetics[1]?.audio || '';


            audioEl.style.display = 'inline-flex';
            audioEl.src = first !== '' ? first : second;
            if (!audioEl.src) {
                audioEl.style.display = 'none'
            }
        }

    } catch (error){
        console.log(error);
        infoTextEl.innerText = `An error occured, try again later`
    }
}

inputEl.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchApi(e.target.value);
    }
});
