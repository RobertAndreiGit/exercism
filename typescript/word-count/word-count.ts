export default class Words{
    count(str: string): Map<string, number>{
        const words = str.trim().toLowerCase().split(/\s+/);

        let result: Map<string, number> = new Map();
        for(let word of words){
            result.set(word, result.get(word)! + 1 || 1);
        }

        return result;
    }
}