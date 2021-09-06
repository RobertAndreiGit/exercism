export default class Words{
    count(str: string): Map<string, number>{
        return str.trim().toLowerCase().split(/\s+/).reduce((acc, word) => 
            acc.set(word,acc.get(word)! + 1 || 1), new Map<string, number>());
    }
}