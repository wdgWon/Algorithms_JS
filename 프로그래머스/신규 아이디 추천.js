function solution(id) {
    const removeSideDot = () => id = id.replace(/^\.|\.$/g, '');
    id = id.toLowerCase();
    id = id.replace(/[^a-z-_.0-9]/g, '');
    id = id.replace(/\.+/g, '.');
    removeSideDot();
    id = id || 'a';
    if(id.length >= 16) {
        id = id.slice(0, 15);
        removeSideDot();
    }
    else if(id.length === 2) {
        id += id.at(-1);
    }
    else if(id.length === 1) {
        id = id.repeat(3);
    }
    return id;
}