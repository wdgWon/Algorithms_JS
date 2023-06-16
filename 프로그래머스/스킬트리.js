function solution(skill, skill_trees) {
    
    const reg = new RegExp(`[^${skill}]`, 'g')
    let count = 0;
    
    for(let skills of skill_trees) {
        const sequence = skills.replace(reg, '');
        if(skill.slice(0, sequence.length) === sequence)
            count++;
    }
    
    return count;
}