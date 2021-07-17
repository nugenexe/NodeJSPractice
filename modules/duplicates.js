export class Duplicates {

    static checkString(boat) {
        let seenChars = [];
        let sizeOfBoat = boat.length;
        
        for(let i = 0; i < sizeOfBoat; i++) {
            
            // Go through seenChars and check if current character exists
            for(let k = 0; k < seenChars.length; k++) {
                if (boat[i] === seenChars[k]) {
                    return true;
                }
            }
    
            seenChars.push(boat[i]);
        }
    
        return false;
    }
}
