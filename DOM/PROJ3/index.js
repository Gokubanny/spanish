const btnEl = document.getElementById('btn')
const appEl =document.getElementById('app')

getNotes().forEach((note) => {
    const noteEl = createnoteEL(note.id, note.content)
    appEl.insertBefore(noteEl, btnEl)
})

function createnoteEL(id, content) {
    const element = document.createElement('textarea');
    element.classList.add('note')
    element.placeholder = 'Empty Note'
    element.value = content;

    element.addEventListener('dblclick', () => {
        const warning = confirm("Do you want to delete this note?")
        if (warning) {
            deleteNote(id, element)
        }
    })

    element.addEventListener('input', () => {
        updateNote(id, element.value)
    })
    return element
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes)
    appEl.removeChild(element)
}

function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0]
    target.content = contentsaveNote(notes)
}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: ''
    };
    const noteEl = createnoteEL(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj)

    saveNote(notes)
}

function saveNote(notes) {
    localStorage.setItem('note-app', JSON.stringify(notes))
}

function getNotes() {
    return JSON.parse(localStorage.getItem('note-app') || "[]")
}

btnEl.addEventListener('click', addNote)