const names = ['Sazib', 'Sakil', 'Nusrat', 'jamal', 'robin', 'jamal', 'sazib'];

function removeDuplicate(names) {
    const unique = [];
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName);