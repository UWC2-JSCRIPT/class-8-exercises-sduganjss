
describe('Test dealerdraw function: 1', () => {
    
    describe('Test Hand 1: 10, 9', () => {

        it('Should Return False Outcome', () => {
            let testUser = new CardPlayer('Test1');
            testUser.drawCard();
            setNewValue(testUser.hand[0], 10);
            testUser.drawCard();
            setNewValue(testUser.hand[1], 9);
            const testResult = dealerShouldDraw(testUser.hand);
            
            expect(testResult).toBe(false);

        })
       
    })
})
describe('Test dealerdraw function: 2', () => {
    
    describe('Test Hand 2: Ace, 6', () => {

        it('Should Return True Outcome', () => {
            let testUser = new CardPlayer('Test1');
            testUser.drawCard();
            setNewValue(testUser.hand[0], 11);
            testUser.drawCard();
            setNewValue(testUser.hand[1], 6);
            const testResult = dealerShouldDraw(testUser.hand);
            
            expect(testResult).toBe(true);

        })
       
    })
})
describe('Test dealerdraw function: 3', () => {
    
    describe('Test Hand 3: 10, 6, Ace', () => {

        it('Should Return False Outcome', () => {
            let testUser = new CardPlayer('Test1');
            testUser.drawCard();
            setNewValue(testUser.hand[0], 10);
            testUser.drawCard();
            setNewValue(testUser.hand[1], 6);
            testUser.drawCard();
            setNewValue(testUser.hand[2], 11);
            const testResult = dealerShouldDraw(testUser.hand);
            
            expect(testResult).toBe(false);

        })
       
    })
})
describe('Test dealerdraw function: 4', () => {
    
    describe('Test Hand 3: 2, 4, 2, 5', () => {

        it('Should Return False Outcome', () => {
            let testUser = new CardPlayer('Test1');
            testUser.drawCard();
            setNewValue(testUser.hand[0], 2);
            testUser.drawCard();
            setNewValue(testUser.hand[1], 4);
            testUser.drawCard();
            setNewValue(testUser.hand[2], 2);
            testUser.drawCard();
            setNewValue(testUser.hand[3], 5);
            const testResult = dealerShouldDraw(testUser.hand);
            
            expect(testResult).toBe(true);

        })
       
    })
})

function setNewValue(card, newVal) {
    card.val = newVal;
    if (newVal === 11) {
        newVal = 'Ace';
    }
    card.displayVal = newVal;
}
